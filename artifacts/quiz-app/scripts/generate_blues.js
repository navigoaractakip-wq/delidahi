#!/usr/bin/env node
// Generates 2 blues-style piano WAV tracks for Deli Dahi
"use strict";

const fs = require("fs");
const path = require("path");

const SAMPLE_RATE = 44100;
const OUT_DIR = path.join(__dirname, "../assets/sounds");

const NOTE_SEMITONES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function noteFreq(name) {
  if (name === "R") return 0;
  const sharp = name.includes("#") ? 1 : 0;
  const flat = name.includes("b") ? -1 : 0;
  const letter = name[0];
  const octave = parseInt(name.slice(-1), 10);
  const semi = NOTE_SEMITONES[letter] + sharp + flat + (octave - 4) * 12;
  return 440 * Math.pow(2, semi / 12);
}

// Blues piano tone — warmer, more rounded
function blueTone(freq, durationSec, volume = 0.38) {
  const n = Math.ceil(durationSec * SAMPLE_RATE);
  const buf = new Float32Array(n);
  if (freq === 0) return buf;
  const att = Math.min(0.012, durationSec * 0.04);
  const dec = Math.min(0.18, durationSec * 0.25);
  const rel = Math.min(0.22, durationSec * 0.3);
  const sus = 0.28;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    let env;
    if (t < att) env = t / att;
    else if (t < att + dec) env = 1 - (1 - sus) * ((t - att) / dec);
    else if (t < durationSec - rel) env = sus;
    else env = sus * Math.max(0, (durationSec - t) / rel);
    // Slightly brighter harmonics for blues character
    const w = 2 * Math.PI * freq * t;
    const wave =
      Math.sin(w) * 0.52 +
      Math.sin(2 * w) * 0.26 +
      Math.sin(3 * w) * 0.13 +
      Math.sin(4 * w) * 0.06 +
      Math.sin(5 * w) * 0.03;
    buf[i] = wave * env * volume;
  }
  return buf;
}

function bassTone(freq, durationSec, volume = 0.20) {
  const n = Math.ceil(durationSec * SAMPLE_RATE);
  const buf = new Float32Array(n);
  if (freq === 0) return buf;
  const att = 0.012;
  const rel = Math.min(0.28, durationSec * 0.35);
  const sus = 0.20;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    let env;
    if (t < att) env = t / att;
    else if (t < durationSec - rel) env = sus;
    else env = sus * Math.max(0, (durationSec - t) / rel);
    const w = 2 * Math.PI * freq * t;
    buf[i] = (Math.sin(w) * 0.55 + Math.sin(2 * w) * 0.28 + Math.sin(3 * w) * 0.17) * env * volume;
  }
  return buf;
}

function renderVoice(events, beatSec, output, voiceFn, vol) {
  let pos = 0;
  for (const [note, beats] of events) {
    const dur = beats * beatSec;
    const noteDur = Math.max(0.04, dur * 0.86);
    const tone = voiceFn(noteFreq(note), noteDur, vol);
    const start = Math.round(pos);
    for (let i = 0; i < tone.length; i++) {
      if (start + i < output.length) output[start + i] += tone[i];
    }
    pos += dur * SAMPLE_RATE;
  }
}

function writeWav(samples, filename) {
  let peak = 0;
  for (let i = 0; i < samples.length; i++) peak = Math.max(peak, Math.abs(samples[i]));
  if (peak > 0.88) {
    const scale = 0.88 / peak;
    for (let i = 0; i < samples.length; i++) samples[i] *= scale;
  }
  const dataLen = samples.length * 2;
  const buf = Buffer.alloc(44 + dataLen);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + dataLen, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(SAMPLE_RATE, 24);
  buf.writeUInt32LE(SAMPLE_RATE * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write("data", 36);
  buf.writeUInt32LE(dataLen, 40);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buf.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
  }
  fs.writeFileSync(path.join(OUT_DIR, filename), buf);
  console.log(`  ✓ ${filename} (${(samples.length / SAMPLE_RATE).toFixed(1)}s)`);
}

// ─── BLUES TRACK 1: "Mavi Akşam" — A minor blues, 68 BPM ────────────────────
// A blues scale: A C D Eb E G — slow, contemplative
function blues1() {
  const BPM = 68;
  const B = 60 / BPM;
  // 16 bars × 4 beats = 64 beats
  const mel = [
    // Bar 1-2: Statement
    ["A4",1],["C5",0.5],["D5",0.5],["Eb5",0.5],["E5",0.5],["G5",1],
    ["E5",1.5],["D5",0.5],["C5",1],["A4",1],
    // Bar 3-4
    ["G4",1],["A4",0.5],["C5",0.5],["D5",1],["C5",1],
    ["A4",1.5],["G4",0.5],["E4",2],
    // Bar 5-6: Response
    ["C5",1],["Eb5",0.5],["E5",0.5],["G5",1],["E5",1],
    ["D5",1],["C5",1],["A4",2],
    // Bar 7-8
    ["E4",0.5],["G4",0.5],["A4",1],["C5",1],["D5",1],
    ["E5",1],["D5",1],["C5",1],["A4",1],
    // Bar 9-10: Development
    ["G5",1],["E5",1],["D5",1],["C5",1],
    ["Eb5",0.5],["E5",0.5],["G5",1],["E5",1],["D5",1],
    // Bar 11-12
    ["C5",1],["A4",1],["G4",1],["E4",1],
    ["A4",2],["R",2],
    // Bar 13-14: Return
    ["A4",0.5],["C5",0.5],["D5",1],["Eb5",0.5],["E5",0.5],["G5",1],
    ["G5",1.5],["E5",0.5],["D5",1],["C5",1],
    // Bar 15-16: Cadence
    ["A4",1],["G4",1],["E4",1],["D4",1],
    ["A3",3],["R",1],
  ];
  const bs = [
    ["A2",1],["E3",1],["A2",1],["G2",1],
    ["A2",1],["E3",1],["C3",2],
    ["G2",1],["D3",1],["G2",1],["D3",1],
    ["A2",2],["A2",2],
    ["A2",1],["E3",1],["A3",1],["E3",1],
    ["D3",1],["A2",1],["G2",2],
    ["A2",1],["E3",1],["A2",1],["E3",1],
    ["A2",1],["E3",1],["A3",1],["E3",1],
    ["C3",1],["G2",1],["C3",1],["G2",1],
    ["D3",1],["A2",1],["D3",1],["A2",1],
    ["E3",1],["A2",1],["E3",1],["A2",1],
    ["A2",2],["R",2],
    ["A2",1],["E3",1],["A2",1],["G2",1],
    ["C3",1],["G2",1],["C3",1],["G2",1],
    ["E3",1],["B2",1],["E3",1],["B2",1],
    ["A2",3],["R",1],
  ];
  const total = mel.reduce((s, [, b]) => s + b, 0);
  const out = new Float32Array(Math.ceil(total * B * SAMPLE_RATE));
  renderVoice(mel, B, out, blueTone, 0.40);
  renderVoice(bs, B, out, bassTone, 0.22);
  writeWav(out, "blues1.wav");
}

// ─── BLUES TRACK 2: "Gece Tonu" — E minor blues, 78 BPM ─────────────────────
// E blues scale: E G A Bb B D — a bit more moving
function blues2() {
  const BPM = 78;
  const B = 60 / BPM;
  const mel = [
    // Bar 1-2
    ["E4",0.5],["G4",0.5],["A4",1],["Bb4",0.5],["B4",0.5],["D5",1],
    ["B4",1.5],["A4",0.5],["G4",1],["E4",1],
    // Bar 3-4
    ["A4",1],["G4",1],["E4",1],["D4",1],
    ["E4",1.5],["G4",0.5],["A4",2],
    // Bar 5-6
    ["D5",1],["B4",1],["A4",1],["G4",1],
    ["Bb4",0.5],["B4",0.5],["D5",1],["B4",1],["A4",1],
    // Bar 7-8
    ["G4",1],["E4",1],["D4",1],["E4",1],
    ["A4",2],["E4",2],
    // Bar 9-10
    ["B4",1],["D5",1],["B4",1],["A4",1],
    ["G4",1],["A4",1],["Bb4",0.5],["B4",0.5],["D5",1],
    // Bar 11-12
    ["E5",1],["D5",1],["B4",1],["A4",1],
    ["G4",1.5],["E4",0.5],["R",2],
    // Bar 13-14
    ["E4",0.5],["G4",0.5],["A4",1],["B4",1],["D5",1],
    ["B4",1],["A4",1],["G4",1],["E4",1],
    // Bar 15-16
    ["D4",1],["E4",1],["G4",1],["A4",1],
    ["E4",3],["R",1],
  ];
  const bs = [
    ["E2",1],["B2",1],["E2",1],["B2",1],
    ["E2",1],["B2",1],["A2",2],
    ["A2",1],["E2",1],["A2",1],["E2",1],
    ["E2",2],["B2",2],
    ["D3",1],["A2",1],["D3",1],["A2",1],
    ["E2",1],["B2",1],["E3",1],["B2",1],
    ["A2",1],["E2",1],["A2",1],["E2",1],
    ["B2",2],["E2",2],
    ["E2",1],["B2",1],["E3",1],["B2",1],
    ["A2",1],["E2",1],["D3",1],["A2",1],
    ["A2",1],["E2",1],["D2",1],["A2",1],
    ["E2",2],["R",2],
    ["E2",1],["B2",1],["E2",1],["D3",1],
    ["A2",1],["E2",1],["A2",1],["E2",1],
    ["B2",1],["G2",1],["B2",1],["G2",1],
    ["E2",3],["R",1],
  ];
  const total = mel.reduce((s, [, b]) => s + b, 0);
  const out = new Float32Array(Math.ceil(total * B * SAMPLE_RATE));
  renderVoice(mel, B, out, blueTone, 0.40);
  renderVoice(bs, B, out, bassTone, 0.22);
  writeWav(out, "blues2.wav");
}

console.log("Generating blues tracks...");
blues1();
blues2();
console.log("Done.");
