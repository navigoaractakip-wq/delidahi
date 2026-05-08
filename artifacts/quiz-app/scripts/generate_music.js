#!/usr/bin/env node
// Generates 4 classical-style piano WAV tracks for Deli Dahi quiz app
"use strict";

const fs = require("fs");
const path = require("path");

const SAMPLE_RATE = 44100;
const OUT_DIR = path.join(__dirname, "../assets/sounds");

// ─── Note frequencies ────────────────────────────────────────────────────────
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

// ─── Piano synthesis (one note, returns Float32Array) ───────────────────────
function piano(freq, durationSec, volume = 0.4) {
  const n = Math.ceil(durationSec * SAMPLE_RATE);
  const buf = new Float32Array(n);
  if (freq === 0) return buf;

  const att = Math.min(0.008, durationSec * 0.05);
  const dec = Math.min(0.12, durationSec * 0.2);
  const rel = Math.min(0.18, durationSec * 0.25);
  const sus = 0.32;

  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    // ADSR envelope
    let env;
    if (t < att) {
      env = t / att;
    } else if (t < att + dec) {
      env = 1 - (1 - sus) * ((t - att) / dec);
    } else if (t < durationSec - rel) {
      env = sus;
    } else {
      env = sus * Math.max(0, (durationSec - t) / rel);
    }
    // Piano harmonics: fundamental + 2nd + 3rd + 4th + 5th
    const w = 2 * Math.PI * freq * t;
    const wave =
      Math.sin(w) * 0.58 +
      Math.sin(2 * w) * 0.22 +
      Math.sin(3 * w) * 0.10 +
      Math.sin(4 * w) * 0.06 +
      Math.sin(5 * w) * 0.04;
    buf[i] = wave * env * volume;
  }
  return buf;
}

// Softer bass note
function bass(freq, durationSec, volume = 0.18) {
  const n = Math.ceil(durationSec * SAMPLE_RATE);
  const buf = new Float32Array(n);
  if (freq === 0) return buf;
  const att = 0.01;
  const rel = Math.min(0.25, durationSec * 0.3);
  const sus = 0.22;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    let env;
    if (t < att) env = t / att;
    else if (t < durationSec - rel) env = sus;
    else env = sus * Math.max(0, (durationSec - t) / rel);
    const w = 2 * Math.PI * freq * t;
    buf[i] = (Math.sin(w) * 0.6 + Math.sin(2 * w) * 0.25 + Math.sin(3 * w) * 0.15) * env * volume;
  }
  return buf;
}

// ─── Mix voices into output buffer ──────────────────────────────────────────
function renderVoice(events, beatSec, output, voiceFn, vol) {
  let pos = 0;
  for (const [note, beats] of events) {
    const dur = beats * beatSec;
    const noteDur = Math.max(0.04, dur * 0.88); // slight staccato gap
    const tone = voiceFn(noteFreq(note), noteDur, vol);
    const start = Math.round(pos);
    for (let i = 0; i < tone.length; i++) {
      if (start + i < output.length) output[start + i] += tone[i];
    }
    pos += dur * SAMPLE_RATE;
  }
}

// ─── WAV writer ──────────────────────────────────────────────────────────────
function writeWav(samples, filename) {
  // Soft clip + normalize
  let peak = 0;
  for (let i = 0; i < samples.length; i++) peak = Math.max(peak, Math.abs(samples[i]));
  if (peak > 0.9) {
    const scale = 0.9 / peak;
    for (let i = 0; i < samples.length; i++) samples[i] *= scale;
  }

  const dataLen = samples.length * 2;
  const buf = Buffer.alloc(44 + dataLen);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + dataLen, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);  // PCM
  buf.writeUInt16LE(1, 22);  // Mono
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

// ─── TRACK 1: Andante Classico — C major, 68 BPM ────────────────────────────
// Gentle flowing melody, peaceful and clear
function track1() {
  const BPM = 68;
  const B = 60 / BPM;

  // Melody: 16 bars × 4 beats = 64 beats
  const mel = [
    // Phrase A (bars 1-4) — ascending stepwise
    ["E4",1],["G4",0.5],["A4",0.5],["G4",1],["E4",1],
    ["C4",1],["E4",1],["D4",1],["C4",1],
    ["G4",1],["A4",1],["B4",1],["G4",1],
    ["A4",1],["G4",1],["E4",2],
    // Phrase B (bars 5-8) — higher register
    ["C5",1],["B4",1],["A4",1],["G4",1],
    ["A4",1],["G4",1],["F4",1],["E4",1],
    ["D4",1],["E4",1],["F4",1],["G4",1],
    ["E4",2],["C4",2],
    // Phrase C (bars 9-12) — variation
    ["G4",0.5],["A4",0.5],["B4",1],["C5",1],["B4",1],
    ["A4",1],["B4",1],["C5",1],["D5",1],
    ["E5",1],["D5",1],["C5",1],["B4",1],
    ["C5",2],["G4",2],
    // Phrase D (bars 13-16) — return and cadence
    ["E4",1],["F4",1],["G4",1],["A4",1],
    ["G4",1],["E4",1],["D4",1],["C4",1],
    ["D4",1],["E4",1],["F4",1],["G4",1],
    ["C4",3],["R",1],
  ];

  const bs = [
    // Bass: simple root-fifth pattern per bar
    ["C3",1],["G3",1],["C3",1],["G3",1],
    ["A2",1],["E3",1],["G2",1],["D3",1],
    ["C3",1],["G2",1],["G3",1],["D3",1],
    ["A2",1],["E3",1],["C3",2],
    ["F2",1],["C3",1],["G2",1],["D3",1],
    ["A2",1],["E3",1],["D3",1],["A2",1],
    ["G2",1],["D3",1],["G3",1],["D3",1],
    ["C3",2],["C3",2],
    ["C3",1],["G3",1],["G3",1],["D3",1],
    ["A2",1],["E3",1],["G3",1],["D3",1],
    ["C3",1],["G3",1],["C3",1],["G3",1],
    ["C3",2],["E3",2],
    ["C3",1],["G3",1],["C3",1],["G3",1],
    ["G2",1],["D3",1],["G2",1],["D3",1],
    ["G2",1],["D3",1],["G3",1],["D3",1],
    ["C3",3],["R",1],
  ];

  const totalBeats = mel.reduce((s, [, b]) => s + b, 0);
  const totalSamples = Math.ceil(totalBeats * B * SAMPLE_RATE);
  const output = new Float32Array(totalSamples);
  renderVoice(mel, B, output, piano, 0.42);
  renderVoice(bs, B, output, bass, 0.22);
  writeWav(output, "music1.wav");
}

// ─── TRACK 2: Minuetto Grazioso — G major, 92 BPM, 3/4 ──────────────────────
// Elegant dance-like waltz feel
function track2() {
  const BPM = 92;
  const B = 60 / BPM;

  // 3/4 time: 3 beats per bar, 18 bars = 54 beats
  const mel = [
    // Phrase A (bars 1-6)
    ["D5",1],["G4",0.5],["A4",0.5],["B4",1],
    ["C5",1],["B4",1],["A4",1],
    ["D5",1.5],["C5",0.5],["B4",1],
    ["G4",3],
    ["E5",1],["D5",0.5],["C5",0.5],["B4",1],
    ["C5",1],["B4",1],["A4",1],
    // Phrase B (bars 7-12)
    ["B4",1],["C5",0.5],["D5",0.5],["E5",1],
    ["D5",3],
    ["C5",1],["B4",1],["A4",1],
    ["G4",3],
    ["A4",1],["B4",1],["C5",1],
    ["D5",1.5],["C5",0.5],["B4",1],
    // Phrase C (bars 13-18) — return
    ["G5",1],["F#5",0.5],["E5",0.5],["D5",1],
    ["E5",1],["D5",1],["C5",1],
    ["B4",1.5],["A4",0.5],["G4",1],
    ["D5",3],
    ["B4",1],["C5",1],["D5",1],
    ["G4",3],
  ];

  const bs = [
    ["G2",1],["D3",1],["B3",1],
    ["C3",1],["G2",1],["E3",1],
    ["G2",1],["D3",1],["B3",1],
    ["G2",1],["G3",1],["D3",1],
    ["C3",1],["G3",1],["E3",1],
    ["A2",1],["E3",1],["C3",1],

    ["G2",1],["D3",1],["B3",1],
    ["G2",1],["D3",1],["G3",1],
    ["C3",1],["E3",1],["C3",1],
    ["G2",1],["D3",1],["B2",1],
    ["A2",1],["E3",1],["A3",1],
    ["D3",1],["A2",1],["D3",1],

    ["G2",1],["D3",1],["B3",1],
    ["C3",1],["G3",1],["E3",1],
    ["G2",1],["D3",1],["G3",1],
    ["G2",1],["D3",1],["B3",1],
    ["G2",1],["D3",1],["G3",1],
    ["G2",1],["D3",1],["G3",1],
  ];

  const totalBeats = mel.reduce((s, [, b]) => s + b, 0);
  const totalSamples = Math.ceil(totalBeats * B * SAMPLE_RATE);
  const output = new Float32Array(totalSamples);
  renderVoice(mel, B, output, piano, 0.44);
  renderVoice(bs, B, output, bass, 0.20);
  writeWav(output, "music2.wav");
}

// ─── TRACK 3: Romanza — A minor, 58 BPM ──────────────────────────────────────
// Contemplative, tender minor-key piece
function track3() {
  const BPM = 58;
  const B = 60 / BPM;

  const mel = [
    // Phrase A (bars 1-4)
    ["A4",1.5],["G4",0.5],["F4",1],["E4",1],
    ["E4",1],["D4",1],["C4",1],["R",1],
    ["E4",1.5],["F4",0.5],["G4",1],["A4",1],
    ["B4",2],["A4",2],
    // Phrase B (bars 5-8)
    ["C5",1.5],["B4",0.5],["A4",1],["G4",1],
    ["F4",1],["E4",1],["D4",2],
    ["E4",1],["G4",1],["F4",1],["E4",1],
    ["A4",3],["R",1],
    // Phrase C (bars 9-12)
    ["A4",0.5],["B4",0.5],["C5",1],["B4",1],["A4",1],
    ["G4",1],["A4",1],["B4",1],["C5",1],
    ["D5",1],["C5",1],["B4",1],["A4",1],
    ["E4",2],["A4",2],
    // Phrase D (bars 13-16) — cadence
    ["G4",1],["F4",1],["E4",1],["D4",1],
    ["C4",1],["D4",1],["E4",1],["F4",1],
    ["E4",1.5],["D4",0.5],["C4",1],["B3",1],
    ["A3",3],["R",1],
  ];

  const bs = [
    ["A2",1],["E3",1],["A2",1],["E3",1],
    ["D3",1],["A2",1],["C3",1],["G2",1],
    ["A2",1],["E3",1],["A2",1],["E3",1],
    ["E3",2],["A2",2],
    ["A2",1],["E3",1],["A2",1],["E3",1],
    ["D3",1],["A2",1],["G2",2],
    ["C3",1],["G2",1],["D3",1],["A2",1],
    ["A2",3],["R",1],
    ["A2",1],["E3",1],["A3",1],["E3",1],
    ["C3",1],["G2",1],["E3",1],["C3",1],
    ["F2",1],["C3",1],["F3",1],["C3",1],
    ["E3",2],["A2",2],
    ["C3",1],["G2",1],["C3",1],["G2",1],
    ["D3",1],["A2",1],["D3",1],["A2",1],
    ["E3",1],["B2",1],["E3",1],["B2",1],
    ["A2",3],["R",1],
  ];

  const totalBeats = mel.reduce((s, [, b]) => s + b, 0);
  const totalSamples = Math.ceil(totalBeats * B * SAMPLE_RATE);
  const output = new Float32Array(totalSamples);
  renderVoice(mel, B, output, piano, 0.40);
  renderVoice(bs, B, output, bass, 0.22);
  writeWav(output, "music3.wav");
}

// ─── TRACK 4: Allegretto Vivace — D major, 118 BPM ──────────────────────────
// Bright and cheerful, energetic
function track4() {
  const BPM = 118;
  const B = 60 / BPM;

  const mel = [
    // Phrase A (bars 1-4)
    ["D4",0.5],["E4",0.5],["F#4",1],["G4",0.5],["A4",0.5],
    ["B4",1],["A4",0.5],["G4",0.5],["F#4",1],
    ["E4",0.5],["F#4",0.5],["G4",1],["A4",1],
    ["D4",2],["R",2],
    // Phrase B (bars 5-8)
    ["A4",0.5],["B4",0.5],["C#5",1],["D5",1],
    ["E5",1],["D5",0.5],["C#5",0.5],["B4",1],
    ["A4",0.5],["B4",0.5],["A4",0.5],["G4",0.5],["F#4",1],
    ["D4",3],["R",1],
    // Phrase C (bars 9-12) — contrasting
    ["G4",1],["F#4",0.5],["G4",0.5],["A4",1],
    ["B4",1],["A4",1],["G4",1],
    ["F#4",1],["G4",0.5],["A4",0.5],["B4",1],
    ["A4",2],["F#4",2],
    // Phrase D (bars 13-16) — return
    ["D5",1],["C#5",1],["B4",1],["A4",1],
    ["G4",1],["F#4",1],["E4",1],["D4",1],
    ["E4",1],["F#4",1],["G4",1],["A4",1],
    ["D4",3],["R",1],
  ];

  const bs = [
    ["D3",0.5],["A2",0.5],["D3",1],["G2",0.5],["D3",0.5],
    ["G2",1],["D3",0.5],["G3",0.5],["A2",1],
    ["A2",0.5],["E3",0.5],["A2",1],["D3",1],
    ["D3",2],["R",2],
    ["D3",0.5],["A2",0.5],["D3",1],["A3",1],
    ["A2",1],["E3",0.5],["A3",0.5],["E3",1],
    ["D3",0.5],["A2",0.5],["D3",0.5],["A2",0.5],["A2",1],
    ["D3",3],["R",1],
    ["G2",1],["D3",0.5],["G3",0.5],["A2",1],
    ["G2",1],["D3",1],["G2",1],
    ["A2",1],["E3",0.5],["A2",0.5],["D3",1],
    ["A2",2],["D3",2],
    ["D3",1],["A2",1],["G2",1],["D3",1],
    ["G2",1],["D3",1],["A2",1],["E3",1],
    ["A2",1],["E3",1],["A2",1],["E3",1],
    ["D3",3],["R",1],
  ];

  const totalBeats = mel.reduce((s, [, b]) => s + b, 0);
  const totalSamples = Math.ceil(totalBeats * B * SAMPLE_RATE);
  const output = new Float32Array(totalSamples);
  renderVoice(mel, B, output, piano, 0.44);
  renderVoice(bs, B, output, bass, 0.20);
  writeWav(output, "music4.wav");
}

// ─── Run all ─────────────────────────────────────────────────────────────────
console.log("Generating classical music tracks...");
track1();
track2();
track3();
track4();
console.log("Done.");
