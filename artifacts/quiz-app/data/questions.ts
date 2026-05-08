import type { ComponentProps } from "react";
import type { Feather } from "@expo/vector-icons";
import type { ImageSourcePropType } from "react-native";

export const QUESTIONS_VERSION = 11;

export type FeatherIconName = ComponentProps<typeof Feather>["name"];

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Category {
  id: string;
  name: string;
  icon: FeatherIconName;
  color: string;
  gradient: [string, string];
  image: ImageSourcePropType;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: "general",
    name: "Genel Kültür",
    icon: "globe",
    color: "#6c63ff",
    gradient: ["#6c63ff", "#4834d4"],
    image: require("../assets/images/category_general.png"),
    questions: [
      {
        id: "g1",
        difficulty: "easy",
        question: "Nobel Barış Ödülü hangi şehirde takdim edilir?",
        options: ["Stockholm", "Oslo", "Cenevre", "Brüksel"],
        correctIndex: 1,
        explanation: "Nobel Barış Ödülü, diğer Nobel ödüllerinin verildiği Stockholm'den farklı olarak Norveç'in başkenti Oslo'da takdim edilir. Bu gelenek, Alfred Nobel'in vasiyetine dayanmaktadır."
      },
      {
        id: "g2",
        difficulty: "easy",
        question: "Dünya'nın en derin gölü hangisidir?",
        options: ["Victoria Gölü", "Hazar Denizi", "Tanganyika Gölü", "Baykal Gölü"],
        correctIndex: 3,
        explanation: "Sibirya'da bulunan Baykal Gölü, yaklaşık 1.642 metrelik maksimum derinliğiyle dünyanın en derin gölüdür. Aynı zamanda dünyanın en büyük tatlı su hacmine sahip gölüdür."
      },
      {
        id: "g3",
        difficulty: "easy",
        question: "Süveyş Kanalı hangi iki denizi birbirine bağlar?",
        options: ["Kızıldeniz – Karadeniz", "Akdeniz – Kızıldeniz", "Akdeniz – Arap Denizi", "Kızıldeniz – Hint Okyanusu"],
        correctIndex: 1,
        explanation: "Süveyş Kanalı, Akdeniz'i Kızıldeniz'e bağlayan ve Mısır'dan geçen yapay kanaldır. 1869'da açılan bu kanal, Avrupa ile Asya arasındaki deniz ticaretini kısaltmıştır."
      },
      {
        id: "g4",
        difficulty: "easy",
        question: "Dünya'nın en küçük bağımsız ülkesi hangisidir?",
        options: ["San Marino", "Monaco", "Vatikan", "Lihtenştayn"],
        correctIndex: 2,
        explanation: "Vatikan Şehir Devleti, yaklaşık 0.44 km² yüzölçümü ve 800 nüfusuyla dünyanın hem en küçük hem de en az nüfuslu bağımsız ülkesidir."
      },
      {
        id: "g5",
        difficulty: "easy",
        question: "İnsanlı uzay araçları Ay'a bugüne kadar kaç kez inmiştir?",
        options: ["3", "6", "9", "12"],
        correctIndex: 1,
        explanation: "NASA'nın Apollo programı kapsamında 1969-1972 yılları arasında gerçekleştirilen 6 başarılı iniş (Apollo 11, 12, 14, 15, 16, 17) ile Ay'a toplam 12 astronot ayak bastı."
      },
      {
        id: "g6",
        difficulty: "easy",
        question: "Mona Lisa tablosu hangi müzede sergilenmektedir?",
        options: ["Uffizi Müzesi", "Prado Müzesi", "Louvre Müzesi", "Metropolitan Müzesi"],
        correctIndex: 2,
        explanation: "Mona Lisa, Paris'teki Louvre Müzesi'nin en değerli eseridir. Leonardo da Vinci tarafından 1503-1519 yılları arasında yapılan tablo, dünyanın en ünlü resmi olarak kabul edilmektedir."
      },
      {
        id: "g7",
        difficulty: "easy",
        question: "Yüzölçümü bakımından dünyanın en büyük ülkesi hangisidir?",
        options: ["Kanada", "Çin", "Amerika Birleşik Devletleri", "Rusya"],
        correctIndex: 3,
        explanation: "Rusya, yaklaşık 17.1 milyon km² yüzölçümüyle dünyanın en büyük ülkesidir. Bu alan, dünya kara yüzeyinin yaklaşık %11'ini oluşturur."
      },
      {
        id: "g8",
        difficulty: "easy",
        question: "'Don Kişot' romanını yazan İspanyol yazar kimdir?",
        options: ["Lope de Vega", "Federico García Lorca", "Miguel de Cervantes", "Gabriel García Márquez"],
        correctIndex: 2,
        explanation: "Don Kişot (Don Quijote), 1605'te yayımlanan ve modern edebiyatın ilk romanlarından biri olarak kabul edilen Miguel de Cervantes'in başyapıtıdır."
      },
      {
        id: "g9",
        difficulty: "easy",
        question: "Hangi ülke dünya genelinde en fazla ülkeyle kara sınırını paylaşır?",
        options: ["Rusya", "Çin", "Brezilya", "Almanya"],
        correctIndex: 1,
        explanation: "Çin, 14 ülkeyle kara sınırını paylaşır: Rusya, Moğolistan, Kazakistan, Kırgızistan, Tacikistan, Afganistan, Pakistan, Hindistan, Nepal, Bhutan, Myanmar, Laos, Vietnam ve Kuzey Kore."
      },
      {
        id: "g10",
        difficulty: "easy",
        question: "İnsan gözünün yaklaşık kaç farklı renk tonu ayırt edebildiği tahmin edilmektedir?",
        options: ["1 milyon", "10 milyon", "100 milyon", "1 milyar"],
        correctIndex: 1,
        explanation: "İnsan gözü yaklaşık 10 milyon farklı renk tonunu birbirinden ayırt edebilir. Bu, koni hücrelerinin üç farklı tipinin birlikte çalışması sayesinde mümkündür."
      },
      {
        id: "g11",
        difficulty: "easy",
        question: "Dünyanın en küçük ülkesi hangisidir?",
        options: ["Monako", "San Marino", "Vatikan", "Liechtenstein"],
        correctIndex: 2,
        explanation: "Vatikan, yalnızca 0,44 km² alanıyla dünyanın en küçük bağımsız devletidir. Roma'nın içinde yer alır ve Katolik Kilisesi'nin merkezidir."
      },
      {
        id: "g12",
        difficulty: "easy",
        question: "İnternet'i kim icat etmiştir?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        correctIndex: 2,
        explanation: "World Wide Web (WWW), 1989 yılında İngiliz bilgisayar bilimcisi Tim Berners-Lee tarafından icat edilmiştir. ARPANET ise internetin öncüsü olarak kabul edilir."
      },
      {
        id: "g13",
        difficulty: "easy",
        question: "Hangi ülkenin bayrağında hilal ve yıldız bulunmaktadır?",
        options: ["Suudi Arabistan", "İran", "Türkiye", "Mısır"],
        correctIndex: 2,
        explanation: "Türkiye'nin bayrağında beyaz hilal ve yıldız bulunmaktadır. Kırmızı zemin üzerindeki bu semboller, Osmanlı döneminden bu yana kullanılmaktadır."
      },
      {
        id: "g14",
        difficulty: "easy",
        question: "Dünyanın en yüksek binası hangisidir?",
        options: ["Empire State Binası", "Şangay Kulesi", "Burj Halife", "Taipei 101"],
        correctIndex: 2,
        explanation: "Dubai'deki Burj Halife, 828 metre yüksekliğiyle dünyanın en yüksek binasıdır. 2010 yılında açılan bu yapı, 163 kata sahiptir."
      },
      {
        id: "g15",
        difficulty: "easy",
        question: "Hangi şehir hem Avrupa hem de Asya kıtasında yer almaktadır?",
        options: ["Moskova", "Tahran", "İstanbul", "Kahire"],
        correctIndex: 2,
        explanation: "İstanbul, Boğaz'ın her iki yakasında yer aldığı için hem Avrupa hem de Asya kıtasında konumlanmış dünyanın nadir şehirlerinden biridir."
      },
      {
        id: "g16",
        difficulty: "easy",
        question: "Nobel Barış Ödülü hangi şehirde verilmektedir?",
        options: ["Stockholm", "Oslo", "Kopenhag", "Helsinki"],
        correctIndex: 1,
        explanation: "Nobel Barış Ödülü, diğer Nobel ödüllerinden farklı olarak Norveç'in başkenti Oslo'da verilmektedir. Diğer tüm Nobel ödülleri İsveç'in başkenti Stockholm'de takdim edilir."
      },
      {
        id: "g17",
        difficulty: "easy",
        question: "Hangi hayvan yeryüzünün en hızlısıdır?",
        options: ["Aslan", "Leopar", "Çita", "Puma"],
        correctIndex: 2,
        explanation: "Çita, saatte 112 km'ye kadar ulaşabilen hızıyla karada yaşayan en hızlı hayvandır. Ancak bu hızı yalnızca kısa süreler boyunca koruyabilir."
      },
      {
        id: "g18",
        difficulty: "easy",
        question: "Hangi ülkenin dili Portekizce değildir?",
        options: ["Brezilya", "Angola", "Mozambik", "Arjantin"],
        correctIndex: 3,
        explanation: "Arjantin'in resmi dili İspanyolca'dır. Portekizce; Brezilya, Portekiz, Angola, Mozambik ve diğer eski Portekiz sömürgelerinde konuşulmaktadır."
      },
      {
        id: "g19",
        difficulty: "easy",
        question: "Dünyanın en büyük hayvanı hangisidir?",
        options: ["Afrika Fili", "Mavi Balina", "Zürafa", "Fil Foku"],
        correctIndex: 1,
        explanation: "Mavi balina, 30 metreye kadar uzayan ve 180 tona kadar ağırlık gösteren boyutuyla dünyanın bilinen en büyük hayvanıdır."
      },
      {
        id: "g20",
        difficulty: "easy",
        question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        options: ["Venüs", "Mars", "Jüpiter", "Merkür"],
        correctIndex: 1,
        explanation: "Mars, yüzeyindeki demir oksit (pas) nedeniyle kırmızımsı bir görünüme sahip olduğundan 'Kızıl Gezegen' olarak bilinir."
      },
      {
        id: "g21",
        difficulty: "easy",
        question: "Hangi sanatçı 'Yıldızlı Gece' tablosunu yapmıştır?",
        options: ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Claude Monet"],
        correctIndex: 2,
        explanation: "Yıldızlı Gece, Hollandalı ressam Vincent van Gogh tarafından 1889 yılında yapılmıştır. Şu an New York'taki Modern Sanat Müzesi'nde (MoMA) sergilenmektedir."
      },
      {
        id: "g22",
        difficulty: "easy",
        question: "Hangi ülke en fazla petrol üretmektedir?",
        options: ["Suudi Arabistan", "Rusya", "Amerika Birleşik Devletleri", "İran"],
        correctIndex: 2,
        explanation: "Amerika Birleşik Devletleri, günde yaklaşık 13 milyon varil üretimle dünyanın en büyük petrol üreticisi konumundadır. Suudi Arabistan ve Rusya onu takip etmektedir."
      },
      {
        id: "g23",
        difficulty: "easy",
        question: "Yapay zeka terimi ilk kez hangi yılda kullanılmıştır?",
        options: ["1946", "1950", "1956", "1969"],
        correctIndex: 2,
        explanation: "Yapay Zeka (Artificial Intelligence) terimi, 1956 yılında John McCarthy tarafından Dartmouth Konferansı'nda kullanılmıştır. Bu konferans, yapay zeka alanının doğuş noktası olarak kabul edilir."
      },
      {
        id: "g24",
        difficulty: "easy",
        question: "Hangi ülke hem Avrupa Birliği hem de NATO üyesidir?",
        options: ["İsviçre", "Norveç", "Almanya", "İsveç"],
        correctIndex: 2,
        explanation: "Almanya hem AB hem de NATO'nun kurucu üyelerindendir. İsviçre tarafsız olup her ikisine de üye değildir. Norveç NATO üyesi ama AB üyesi değildir."
      },
      {
        id: "g25",
        difficulty: "easy",
        question: "Hangi okyanusta en fazla ada bulunmaktadır?",
        options: ["Atlantik", "Hint", "Büyük Okyanus (Pasifik)", "Arktik"],
        correctIndex: 2,
        explanation: "Büyük Okyanus (Pasifik), Polinezya, Melanezya ve Mikronezya bölgelerindeki binlerce ada ile dünyadaki en fazla adayı barındıran okyanustur."
      },
      {
        id: "g26",
        difficulty: "easy",
        question: "Hangi metal oda sıcaklığında sıvı haldedir?",
        options: ["Çinko", "Kurşun", "Cıva", "Galyum"],
        correctIndex: 2,
        explanation: "Cıva (Hg), oda sıcaklığında sıvı halde bulunan tek metaldir. Termometrelerde kullanılmıştır ancak zehirli olduğu için artık yerini daha güvenli alternatiflere bırakmıştır."
      },
      {
        id: "g27",
        difficulty: "easy",
        question: "Ekvator hangi kıtaları geçmektedir?",
        options: ["Yalnızca Afrika ve Güney Amerika", "Afrika, Güney Amerika ve Asya", "Yalnızca Asya ve Afrika", "Afrika, Güney Amerika ve Okyanusya"],
        correctIndex: 1,
        explanation: "Ekvator; Afrika, Güney Amerika ve Asya kıtalarından geçmektedir. Ayrıca Pasifik ve Atlantik okyanuslarını da kat etmektedir."
      },
      {
        id: "g28",
        difficulty: "easy",
        question: "Dünyanın ilk matbaasını kim icat etmiştir?",
        options: ["Nikola Tesla", "Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison"],
        correctIndex: 1,
        explanation: "Hareketli harfli matbaa, 1440'lı yıllarda Johannes Gutenberg tarafından icat edilmiştir. Bu icat, bilginin yaygınlaşmasını ve Rönesans'ı hızlandırmıştır."
      },
      {
        id: "g29",
        difficulty: "easy",
        question: "Türkiye'nin en büyük gölü hangisidir?",
        options: ["Beyşehir Gölü", "Van Gölü", "Tuz Gölü", "Eğirdir Gölü"],
        correctIndex: 1,
        explanation: "Van Gölü, yaklaşık 3.713 km² yüzey alanıyla Türkiye'nin ve Orta Doğu'nun en büyük gölüdür. Soda ve tuz oranı yüksek olan göl, tatlı su değil sodalı sudur."
      },
      {
        id: "g30",
        difficulty: "easy",
        question: "Hangi ülkenin nüfusu 1 milyarı geçen ilk ülke olması beklenmektedir?",
        options: ["Nijerya", "Pakistan", "Endonezya", "Brezilya"],
        correctIndex: 0,
        explanation: "Demografik projeksiyonlara göre Nijerya, 2050'lere kadar nüfusu 400 milyona yaklaşarak dünyanın en kalabalık ülkeleri arasında üçüncü sıraya yükselmesi beklenmektedir."
      },
      {
        id: "g31",
        difficulty: "easy",
        question: "Hangi yazar 'Savaş ve Barış' adlı eseri yazmıştır?",
        options: ["Fyodor Dostoyevski", "Anton Çehov", "Lev Tolstoy", "Boris Pasternak"],
        correctIndex: 2,
        explanation: "Savaş ve Barış, Rus yazar Lev Tolstoy tarafından 1869 yılında yayımlanan büyük bir roman epiğidir. Napolyon Savaşları döneminde geçen roman, dünya edebiyatının başyapıtları arasında sayılmaktadır."
      },
      {
        id: "g32",
        difficulty: "easy",
        question: "Dünyanın en uzun nehri hangisidir?",
        options: ["Amazon", "Yangtze", "Nil", "Mississippi"],
        correctIndex: 2,
        explanation: "Nil Nehri, yaklaşık 6.650 km uzunluğuyla dünyanın en uzun nehri olarak kabul edilir. Afrika'nın kuzeyinde akarak Akdeniz'e dökülür. Amazon, en geniş havzaya sahip nehirdir."
      },
      {
        id: "g33",
        difficulty: "easy",
        question: "Motorlu uçağı başarıyla ilk kez uçuran kardeşlerin soyadı nedir?",
        options: ["Montgolfier", "Wright", "Bell", "Lumière"],
        correctIndex: 1,
        explanation: "Orville ve Wilbur Wright, 17 Aralık 1903'te Kuzey Carolina'nın Kitty Hawk kasabasında ilk motorlu uçuşu gerçekleştirdi. İlk uçuş yalnızca 12 saniye sürdü fakat tarih değişti."
      },
      {
        id: "g34",
        difficulty: "easy",
        question: "Güneş sistemindeki en büyük gezegen hangisidir?",
        options: ["Satürn", "Neptün", "Uranüs", "Jüpiter"],
        correctIndex: 3,
        explanation: "Jüpiter, Güneş sisteminin en büyük gezegenidir. Hacmi Dünya'nın yaklaşık 1.321 katı olan bu dev gaz gezegenin, bugüne kadar en az 95 uydusu keşfedilmiştir."
      },
      {
        id: "g35",
        difficulty: "easy",
        question: "Dünya'nın en yüksek dağı Everest kaç metre yüksekliğindedir?",
        options: ["8.611 metre", "8.739 metre", "8.849 metre", "9.001 metre"],
        correctIndex: 2,
        explanation: "Everest Dağı, 8.849 metre yüksekliğiyle Dünya'nın en yüksek noktasıdır. Nepal ve Tibet sınırında yer alır; ilk kez 1953'te Edmund Hillary ve Tenzing Norgay tarafından tırmanıldı."
      },
      {
        id: "g36",
        difficulty: "easy",
        question: "Telefonu icat edip patent alan kişi kimdir?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        correctIndex: 2,
        explanation: "Alexander Graham Bell, 1876 yılında telefonu icat ederek patent almıştır. İlk sözlü mesajı 'Bay Watson, gelin, sizi görmek istiyorum' cümlesiyle iletmiştir."
      },
      {
        id: "g37",
        difficulty: "easy",
        question: "Periyodik tabloda 'H' sembolüyle gösterilen ve en hafif element hangisidir?",
        options: ["Helyum", "Hidrojen", "Hafniyum", "Holmiyum"],
        correctIndex: 1,
        explanation: "Hidrojen (H), periyodik tablonun ilk elementidir. Evrenin en bol bulunan elementi olup evrenin yaklaşık %75'ini oluşturur. Atom numarası 1 ve en düşük atom kütlesine sahip elementtir."
      },
      {
        id: "g38",
        difficulty: "medium",
        question: "Yetişkin bir insanın vücudunda kaç kemik bulunur?",
        options: ["186", "196", "206", "226"],
        correctIndex: 2,
        explanation: "Yetişkin bir insanın vücudunda 206 kemik bulunur. Bebeklerde bu sayı yaklaşık 270-300'dür; büyüme sürecinde bazı kemikler birleşir. İnsan iskeleti vücudu destekler ve iç organları korur."
      },
      {
        id: "g39",
        difficulty: "medium",
        question: "Güneş'in ışığı Dünya'ya ortalama kaç dakikada ulaşır?",
        options: ["Yaklaşık 2 dakika", "Yaklaşık 8 dakika", "Yaklaşık 20 dakika", "Yaklaşık 1 saat"],
        correctIndex: 1,
        explanation: "Güneş ışığı, yaklaşık 150 milyon km'lik mesafeyi ortalama 8 dakika 20 saniyede aşarak Dünya'ya ulaşır. Işık saniyede yaklaşık 300.000 km yol kat eder."
      },
      {
        id: "g40",
        difficulty: "medium",
        question: "'Hamlet' adlı oyunu yazan İngiliz yazar kimdir?",
        options: ["Charles Dickens", "John Milton", "William Shakespeare", "Oscar Wilde"],
        correctIndex: 2,
        explanation: "Hamlet, William Shakespeare tarafından yaklaşık 1600-1601 yıllarında yazılmıştır. Danimarkalı Prens Hamlet'in babasının ölümünü araştırmasını konu alan bu eser, İngiliz edebiyatının en önemli trajedisi sayılır."
      },
      {
        id: "g41",
        difficulty: "medium",
        question: "Antik Olimpiyat Oyunları ilk olarak hangi Yunan şehrinde düzenlenmiştir?",
        options: ["Atina", "Sparta", "Olimpia", "Korint"],
        correctIndex: 2,
        explanation: "Antik Olimpiyat Oyunları, MÖ 776 yılında Yunanistan'ın Olimpia şehrinde başlamıştır. Olimpia, Zeus'un kutsal alanıdır. Modern Olimpiyatlar 1896'da Atina'da başlatılmıştır."
      },
      {
        id: "g42",
        difficulty: "medium",
        question: "Rubik Küpü'nü icat eden Ernő Rubik hangi ülkelidir?",
        options: ["Alman", "Çek", "Macar", "Polonyalı"],
        correctIndex: 2,
        explanation: "Rubik Küpü, 1974 yılında Macar mimar ve tasarımcı Ernő Rubik tarafından icat edilmiştir. 1980'lerde dünyaya yayılan küp, tüm zamanların en çok satan bulmacası unvanını korumaktadır."
      },
      {
        id: "g43",
        difficulty: "medium",
        question: "Dünyanın en büyük okyanusu hangisidir?",
        options: ["Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Pasifik Okyanusu"],
        correctIndex: 3,
        explanation: "Pasifik Okyanusu, yaklaşık 165 milyon km² yüzey alanıyla dünyanın en büyük okyanusu olup Dünya'nın toplam su yüzeyinin yaklaşık %46'sını kaplar. Dünyanın en derin noktası olan Mariana Çukuru da burada yer alır."
      },
      {
        id: "g44",
        difficulty: "medium",
        question: "Hangi ülke 'Kiwi' sembolüyle tanınır?",
        options: ["Avustralya", "Yeni Zelanda", "Papua Yeni Gine", "Fiji"],
        correctIndex: 1,
        explanation: "Yeni Zelanda'nın milli kuşu olan Kivi, ülkeyi tanıtan sembollerden biridir. Yeni Zelandalılar uluslararası alanda 'Kiwi' olarak da anılmaktadır."
      },
      {
        id: "g45",
        difficulty: "medium",
        question: "Yüzey alanı bakımından dünyanın en büyük çölü hangisidir?",
        options: ["Kalahari", "Gobi", "Sahra", "Antarktika"],
        correctIndex: 3,
        explanation: "Antarktika, yaklaşık 14,2 milyon km² ile dünyanın en büyük çölüdür; çöl tanımı yağışı az olan bölgeleri kapsar. Sahra, sıcak çöller arasında en büyüğüdür."
      },
      {
        id: "g46",
        difficulty: "medium",
        question: "İnsan kulağı yaklaşık hangi frekans aralığındaki sesleri duyabilir?",
        options: ["2–2.000 Hz", "20–20.000 Hz", "200–200.000 Hz", "1–10.000 Hz"],
        correctIndex: 1,
        explanation: "İnsan kulağı 20 ile 20.000 Hz (Hertz) arasındaki frekansları duyabilir. 20 Hz altındaki sesler infrasonik, 20.000 Hz üzerindekiler ise ultrasonik olarak adlandırılır."
      },
      {
        id: "g47",
        difficulty: "medium",
        question: "Kara delikler hakkında 'Hawking radyasyonu' teorisini kim geliştirmiştir?",
        options: ["Albert Einstein", "Stephen Hawking", "Neil deGrasse Tyson", "Carl Sagan"],
        correctIndex: 1,
        explanation: "Stephen Hawking, 1974 yılında kara deliklerin kuantum mekaniği etkisiyle ışıma yaydığını öngören 'Hawking Radyasyonu' teorisini geliştirdi. Teorik fiziğin en çarpıcı öngörülerinden biri sayılmaktadır."
      },
      {
        id: "g48",
        difficulty: "medium",
        question: "Dünya'nın en büyük tropikal yağmur ormanı hangi havzada bulunur?",
        options: ["Kongo Havzası", "Amazon Havzası", "Mekong Havzası", "Orinoco Havzası"],
        correctIndex: 1,
        explanation: "Amazon Yağmur Ormanı, Güney Amerika'nın Amazon havzasında 5,5 milyon km²'yi aşan alanıyla dünyanın en büyük tropikal yağmur ormanıdır. Biyoçeşitlilik açısından gezegenimizin en zengin ekosistemleri arasındadır."
      },
      {
        id: "g49",
        difficulty: "medium",
        question: "Ozon tabakası hangi zararlı ışınımı filtreler?",
        options: ["Kızılötesi ışınlar", "Görünür ışık", "Ultraviyole ışınlar", "X ışınları"],
        correctIndex: 2,
        explanation: "Stratosferdeki ozon tabakası, Güneş'ten gelen zararlı ultraviyole (UV) ışınları filtreler. Bu tabaka olmasa deri kanseri, göz hastalıkları ve ekosistem hasarı dramatik biçimde artardı."
      },
      {
        id: "g50",
        difficulty: "medium",
        question: "Küresel ısınmaya en fazla katkıda bulunan insan kaynaklı sera gazı hangisidir?",
        options: ["Ozon", "Karbondioksit", "Azot", "Oksijen"],
        correctIndex: 1,
        explanation: "Karbondioksit (CO₂), fosil yakıtların yakılması ve ormansızlaşma başta olmak üzere çeşitli insan faaliyetleri sonucu atmosfere salınan ve küresel ısınmaya en fazla katkıda bulunan sera gazıdır."
      },
      {
        id: "g51",
        difficulty: "medium",
        question: "Dünyanın en işlek kanalı olarak bilinen Panama Kanalı hangi ülkededir?",
        options: ["Kolombiya", "Kosta Rika", "Panama", "Nikaragua"],
        correctIndex: 2,
        explanation: "Panama Kanalı, Panama ülkesinde yer alır ve Atlantik ile Pasifik okyanuslarını birbirine bağlar. 1914'te açılan kanal, dünya deniz ticaretinin yaklaşık %5'ini taşır."
      },
      {
        id: "g52",
        difficulty: "medium",
        question: "Hangi ülkenin bayrağında kırmızı akçaağaç (maple) yaprağı bulunur?",
        options: ["Avustralya", "Yeni Zelanda", "Kanada", "İrlanda"],
        correctIndex: 2,
        explanation: "Kanada bayrağı, kırmızı-beyaz-kırmızı dikey bantlar ve ortasında yer alan stilize kırmızı akçaağaç yaprağından oluşur. Akçaağaç yaprağı Kanada'nın en tanınan ulusal sembolüdür."
      },
      {
        id: "g53",
        difficulty: "medium",
        question: "Metropolitan nüfus bakımından dünyanın en kalabalık şehri hangisidir?",
        options: ["Şangay", "Delhi", "Tokyo", "Mumbai"],
        correctIndex: 2,
        explanation: "Tokyo, 37 milyonu aşkın metropolitan nüfusuyla dünyanın en büyük kent alanıdır. Japonya'nın başkenti olan Tokyo aynı zamanda küresel finans ve teknoloji merkezlerinden biridir."
      },
      {
        id: "g54",
        difficulty: "medium",
        question: "Periyodik tabloda altının kimyasal sembolü nedir?",
        options: ["Al", "Ag", "Au", "At"],
        correctIndex: 2,
        explanation: "Altının kimyasal sembolü Au'dur; Latince 'aurum' sözcüğünden gelir. Atom numarası 79 olan altın, korozyon ve oksidasyona dayanıklılığı ile sanayide ve mücevhercilikte yaygın kullanılır."
      },
      {
        id: "g55",
        difficulty: "medium",
        question: "İnsan vücudundaki en küçük kemik hangisidir?",
        options: ["Kürek kemiği", "Topuk kemiği", "Üzengi kemiği (stapes)", "El bileği kemiği"],
        correctIndex: 2,
        explanation: "Kulak içindeki üzengi kemiği (stapes), yaklaşık 3 mm uzunluğuyla insan vücudunun en küçük kemiğidir. Ses titreşimlerini iç kulağa iletmede görev alan üç küçük kemikten biridir."
      },
      {
        id: "g56",
        difficulty: "medium",
        question: "Berlin Duvarı hangi yılda yıkılmıştır?",
        options: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        explanation: "Berlin Duvarı, 9 Kasım 1989'da yıkılmıştır. 1961'den bu yana Doğu ile Batı Berlin'i ayıran bu yapının çöküşü, Soğuk Savaş'ın sembolik bitişi ve Almanya'nın yeniden birleşim sürecinin başlangıcı olarak tarihe geçmiştir."
      },
      {
        id: "g57",
        difficulty: "medium",
        question: "Konuşucu sayısı bakımından dünyanın en fazla kullanılan dili hangisidir?",
        options: ["İspanyolca", "Hintçe", "İngilizce", "Mandarin Çincesi"],
        correctIndex: 2,
        explanation: "Ana dil ve ikinci dil konuşucuları birlikte sayıldığında İngilizce, yaklaşık 1,5 milyar kullanıcıyla dünyanın en yaygın dilidir. Yalnızca ana dil konuşucu sayısında Mandarin Çincesi öndedir."
      },
      {
        id: "g58",
        difficulty: "medium",
        question: "Hangi ülke dünyanın en uzun kıyı şeridine sahiptir?",
        options: ["Norveç", "Avustralya", "Rusya", "Kanada"],
        correctIndex: 3,
        explanation: "Kanada, 202.080 km'lik kıyı şeridiyle dünyanın en uzun kıyı şeridine sahip ülkesidir. Karmaşık fiyordları, adaları ve geniş sahil hattı bu uzunluğa katkı sağlar."
      },
      {
        id: "g59",
        difficulty: "medium",
        question: "Dünyanın en büyük kara memelisi hangisidir?",
        options: ["Afrika savana fili", "Beyaz gergedan", "Nil aygırı", "Zürafa"],
        correctIndex: 0,
        explanation: "Afrika savana fili (Loxodonta africana), 7 tona kadar ulaşabilen ağırlığıyla dünyanın en büyük kara memelisidir. Aynı zamanda en uzun dişleri ve kulakları olan kara hayvanıdır."
      },
      {
        id: "g60",
        difficulty: "medium",
        question: "Pratik kullanıma uygun elektrik ampulü hangi mucide atfedilir?",
        options: ["Nikola Tesla", "Benjamin Franklin", "Thomas Edison", "Guglielmo Marconi"],
        correctIndex: 2,
        explanation: "Thomas Edison, 1879'da uzun süre yanan pratik karbon filamanl ampulü geliştirerek patentini almıştır. Aynı dönemde Joseph Swan da benzer bir ampul geliştirmiş, ancak Edison'ın sistemi ticari olarak daha yaygın hale gelmiştir."
      },
      {
        id: "g61",
        difficulty: "medium",
        question: "Leonardo da Vinci hangi ülkede doğmuştur?",
        options: ["Fransa", "İspanya", "İtalya", "Almanya"],
        correctIndex: 2,
        explanation: "Leonardo da Vinci, 15 Nisan 1452'de İtalya'nın Vinci kasabasında doğmuştur. Ressam, heykeltıraş, mühendis ve bilim insanı kimliğiyle Rönesans'ın en çok yönlü dehası olarak anılmaktadır."
      },
      {
        id: "g62",
        difficulty: "medium",
        question: "Dünyanın en büyük okyanusu hangisidir?",
        options: ["Atlantik", "Hint", "Pasifik", "Arktik"],
        correctIndex: 2,
        explanation: "Pasifik Okyanusu, yaklaşık 165 milyon km² yüzölçümüyle dünyanın en büyük ve en derin okyanusudur. Dünya yüzeyinin yaklaşık üçte birini kaplar; ortalama derinliği 4.000 metreden fazladır."
      },
      {
        id: "g63",
        difficulty: "medium",
        question: "Türkiye'nin para birimi nedir?",
        options: ["Euro", "Dolar", "Türk Lirası", "Sterlin"],
        correctIndex: 2,
        explanation: "Türkiye'nin resmi para birimi Türk Lirası'dır (₺). 1923'te kurulan Türkiye Cumhuriyeti ile birlikte kullanılmaya başlanan Türk Lirası, 2009 yılında 'Yeni Türk Lirası' adını almış, 2012'den itibaren tekrar 'Türk Lirası' olarak anılmaktadır."
      },
      {
        id: "g64",
        difficulty: "medium",
        question: "Dünyanın en yüksek dağı hangisidir?",
        options: ["K2", "Kangchenjunga", "Lhotse", "Everest"],
        correctIndex: 3,
        explanation: "Everest (Chomolungma), 8.849 m yüksekliğiyle dünyanın en yüksek dağıdır. Nepal-Tibet sınırında yer alan bu dağa ilk kez 1953'te Edmund Hillary ile Tenzing Norgay tırmanmıştır."
      },
      {
        id: "g65",
        difficulty: "medium",
        question: "Gökkuşağında kaç renk bulunur?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Gökkuşağında 7 renk bulunur: kırmızı, turuncu, sarı, yeşil, mavi, çivit ve mor. Güneş ışığının su damlaları tarafından kırılması ve yansıtılmasıyla oluşur. Bu renkleri ilk sistematik biçimde tanımlayan Isaac Newton'dır."
      },
      {
        id: "g66",
        difficulty: "medium",
        question: "Paris hangi ülkenin başkentidir?",
        options: ["Belçika", "İtalya", "İspanya", "Fransa"],
        correctIndex: 3,
        explanation: "Paris, Fransa'nın başkenti ve en büyük şehridir. Seine Nehri kıyısında kurulan şehir, Eyfel Kulesi, Louvre Müzesi ve Notre Dame Katedrali gibi simgeleriyle dünyanın en çok ziyaret edilen şehirlerinden biridir."
      },
      {
        id: "g67",
        difficulty: "medium",
        question: "Işık yılı neyi ölçer?",
        options: ["Zamanı", "Mesafeyi", "Ağırlığı", "Sıcaklığı"],
        correctIndex: 1,
        explanation: "Işık yılı, zaman değil mesafe birimidir. Işığın bir yılda aldığı yola eşit olan bu birim yaklaşık 9,46 trilyon km'ye karşılık gelir. Yıldızlar ve galaksiler arasındaki büyük mesafeleri ifade etmek için kullanılır."
      },
      {
        id: "g68",
        difficulty: "medium",
        question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        options: ["Jüpiter", "Venüs", "Mars", "Satürn"],
        correctIndex: 2,
        explanation: "Mars, yüzeyindeki demir oksitin (pas) kırmızımsı renge yol açması nedeniyle 'Kızıl Gezegen' olarak bilinir. Güneş Sistemi'nin dördüncü gezegeni olan Mars'ta insanlığın en uzun vadeli keşif çalışmaları yürütülmektedir."
      },
      {
        id: "g69",
        difficulty: "medium",
        question: "Modern Olimpiyat Oyunları ilk kez nerede düzenlenmiştir?",
        options: ["Roma", "Paris", "Atina", "Londra"],
        correctIndex: 2,
        explanation: "Modern Olimpiyat Oyunları, Baron Pierre de Coubertin'in girişimiyle 1896 yılında Atina'da başlatılmıştır. İlk oyunlara 14 ülkeden yaklaşık 241 sporcu katılmış ve 43 farklı müsabaka düzenlenmiştir."
      },
      {
        id: "g70",
        difficulty: "medium",
        question: "DNA'nın Türkçe açılımı nedir?",
        options: ["Deoxyriboz Nüklear Aygıt", "Deoksiribonükleik Asit", "Dinamik Nüklear Analiz", "Dijital Nükleotid Arşivi"],
        correctIndex: 1,
        explanation: "DNA, Deoksiribonükleik Asit anlamına gelir (İng: Deoxyribonucleic Acid). Tüm canlıların genetik bilgisini taşıyan bu molekül çift sarmal yapısındadır ve 1953'te Watson ile Crick tarafından modellenmiştir."
      },
      {
        id: "g71",
        difficulty: "medium",
        question: "Yüzölçümü bakımından dünyanın en büyük ülkesi hangisidir?",
        options: ["Kanada", "Çin", "Brezilya", "Rusya"],
        correctIndex: 3,
        explanation: "Rusya, yaklaşık 17,1 milyon km² yüzölçümüyle dünyanın en büyük ülkesidir. Avrupa'dan Asya'ya uzanan Rusya, Dünya kara yüzeyinin yaklaşık %11'ini kaplar ve 11 zaman dilimine yayılır."
      },
      {
        id: "g72",
        difficulty: "medium",
        question: "Ay'a ayak basan ilk insan kimdir?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Alan Shepard"],
        correctIndex: 2,
        explanation: "Neil Armstrong, 20 Temmuz 1969'da Apollo 11 görevi kapsamında Ay'a ayak basan ilk insan olmuştur. Ay yüzeyine inerken 'Bu, bir insan için küçük bir adım; insanlık için büyük bir sıçramadır.' sözlerini söylemiştir."
      },
      {
        id: "g73",
        difficulty: "medium",
        question: "Mona Lisa tablosu hangi müzede sergilenmektedir?",
        options: ["British Museum", "Prado", "Uffizi", "Louvre"],
        correctIndex: 3,
        explanation: "Leonardo da Vinci'nin 1503–1519 yılları arasında yaptığı Mona Lisa, Paris'teki Louvre Müzesi'nde sergilenmektedir. Dünyanın en çok ziyaret edilen eseri olarak kabul edilir."
      },
      {
        id: "g74",
        difficulty: "medium",
        question: "Nobel Ödülleri kimin vasiyetiyle kurulmuştur?",
        options: ["Benjamin Franklin", "Nikola Tesla", "Alfred Nobel", "Thomas Edison"],
        correctIndex: 2,
        explanation: "Nobel Ödülleri, dinamiti icat eden İsveçli kimyager Alfred Nobel'in 1895 tarihli vasiyetiyle kurulmuştur. Servetini fizik, kimya, tıp, edebiyat ve barış alanlarında insanlığa katkıda bulunanlara bırakmıştır."
      },
      {
        id: "g75",
        difficulty: "hard",
        question: "Google'ı kim kurmuştur?",
        options: ["Bill Gates ve Paul Allen", "Steve Jobs ve Steve Wozniak", "Larry Page ve Sergey Brin", "Mark Zuckerberg ve Eduardo Saverin"],
        correctIndex: 2,
        explanation: "Google, Larry Page ve Sergey Brin tarafından 1998'de Stanford Üniversitesi'nde doktora öğrencisiyken kurulmuştur. 'Googol' sözcüğünden esinlenilen isim, 10'un 100. kuvvetini temsil eder."
      },
      {
        id: "g76",
        difficulty: "hard",
        question: "'Düşünüyorum, öyleyse varım' (Cogito, ergo sum) sözü kime aittir?",
        options: ["Aristoteles", "Platon", "René Descartes", "Immanuel Kant"],
        correctIndex: 2,
        explanation: "'Cogito, ergo sum' Fransız filozof René Descartes'a aittir (1637). Her şeyi sorgulayan Descartes, düşünmenin kendisinin var olduğunun kanıtı olduğunu öne sürmüş; bu cümle modern felsefenin temel ilkesi haline gelmiştir."
      },
      {
        id: "g77",
        difficulty: "hard",
        question: "Eyfel Kulesi kaç yılında inşa edilmiştir?",
        options: ["1851", "1876", "1889", "1900"],
        correctIndex: 2,
        explanation: "Eyfel Kulesi, mühendis Gustave Eiffel tarafından 1887–1889 yılları arasında inşa edilmiştir. 1889 Paris Dünya Fuarı için yapılan kule, tamamlandığında dünyanın en yüksek yapısıydı."
      },
      {
        id: "g78",
        difficulty: "hard",
        question: "İnsan vücudundaki en büyük organ hangisidir?",
        options: ["Karaciğer", "Akciğer", "Beyin", "Deri"],
        correctIndex: 3,
        explanation: "Deri, yaklaşık 1,5–2 m² yüzölçümüyle insan vücudunun en büyük organıdır. Vücudu dış etkenlere karşı koruyan, ısı düzenlemesine katkıda bulunan ve dokunma duyusunu sağlayan derinin D vitamini sentezinde de rolü vardır."
      },
      {
        id: "g79",
        difficulty: "hard",
        question: "Hangisi yenilenebilir bir enerji kaynağıdır?",
        options: ["Kömür", "Doğal gaz", "Rüzgâr enerjisi", "Petrol"],
        correctIndex: 2,
        explanation: "Rüzgâr enerjisi; tükenmez ve çevre dostu olan yenilenebilir bir enerji kaynağıdır. Rüzgâr türbinleri kinetik enerjiyi elektriğe dönüştürür. Kömür, doğal gaz ve petrol ise kullanıldıkça azalan fosil yakıtlardır."
      },
      {
        id: "g80",
        difficulty: "hard",
        question: "Güneş Sistemi'nin en dıştaki büyük gezegeni hangisidir?",
        options: ["Satürn", "Uranüs", "Jüpiter", "Neptün"],
        correctIndex: 3,
        explanation: "Neptün, Güneş Sistemi'nin en dıştaki büyük gezegenidir. Güneş'e ortalama 4,5 milyar km uzaklıkta bulunan Neptün, bir tur (Neptün yılı) için yaklaşık 165 Dünya yılına ihtiyaç duyar."
      },
      {
        id: "g81",
        difficulty: "hard",
        question: "Dünya'dan Güneş'e olan ortalama mesafe yaklaşık ne kadardır?",
        options: ["15 milyon km", "150 milyon km", "1,5 milyar km", "15 milyar km"],
        correctIndex: 1,
        explanation: "Dünya ile Güneş arasındaki ortalama mesafe yaklaşık 150 milyon km'dir. Bu mesafeyi ışık 8 dakika 20 saniyede, Dünya ise 1 yılda kat eder. Bu mesafe 1 AU (Astronomik Birim) olarak tanımlanır."
      },
      {
        id: "g82",
        difficulty: "hard",
        question: "Türk alfabesinde kaç harf bulunmaktadır?",
        options: ["26", "27", "29", "31"],
        correctIndex: 2,
        explanation: "Türk alfabesi 1928 yılında Latin harfleri temel alınarak oluşturulmuş olup 29 harften oluşur. Bu harflerden 8'i sesli (a, e, ı, i, o, ö, u, ü), 21'i ise sessiz harftir."
      },
      {
        id: "g83",
        difficulty: "hard",
        question: "'Mona Lisa' tablosu hangi müzede sergilenmektedir?",
        options: ["Uffizi Galerisi", "Prado Müzesi", "Louvre Müzesi", "Metropolitan Müzesi"],
        correctIndex: 2,
        explanation: "Leonardo da Vinci'nin 1503-1519 yılları arasında yaptığı 'Mona Lisa' tablosu, Paris'teki Louvre Müzesi'nde sergilenmektedir. Her yıl yaklaşık 10 milyon ziyaretçi bu tabloyu görmek için Louvre'u ziyaret eder."
      },
      {
        id: "g84",
        difficulty: "hard",
        question: "Dünyanın en derin gölü hangisidir?",
        options: ["Hazar Gölü", "Victoria Gölü", "Baykal Gölü", "Süperior Gölü"],
        correctIndex: 2,
        explanation: "Rusya'da bulunan Baykal Gölü, yaklaşık 1.642 metre derinliğiyle dünyanın en derin gölüdür. Aynı zamanda dünyanın en büyük tatlı su rezervini barındırır ve yaklaşık 25 milyon yıllık yaşıyla dünyanın en eski gölüdür."
      },
      {
        id: "g85",
        difficulty: "hard",
        question: "Hangi element periyodik tabloda 'Au' simgesiyle gösterilir?",
        options: ["Gümüş", "Altın", "Alüminyum", "Arsenik"],
        correctIndex: 1,
        explanation: "Au simgesi, Latincede altın anlamına gelen 'Aurum' sözcüğünden gelmektedir. Altın, atom numarası 79 olan değerli bir metaldir; kimyasal kararlılığı ve iletkenliği nedeniyle elektronik ve mücevherat sektörlerinde yoğun kullanılır."
      },
      {
        id: "g86",
        difficulty: "hard",
        question: "Nobel Barış Ödülü hangi şehirde verilmektedir?",
        options: ["Stockholm", "Kopenhag", "Oslo", "Helsinki"],
        correctIndex: 2,
        explanation: "Diğer Nobel Ödülleri İsveç'in başkenti Stockholm'de verilirken, Nobel Barış Ödülü Alfred Nobel'in vasiyeti gereği Norveç'in başkenti Oslo'da düzenlenen törenle sahiplerine verilmektedir."
      },
      {
        id: "g87",
        difficulty: "hard",
        question: "İnsan vücudunda kaç çift kromozom bulunur?",
        options: ["21 çift", "23 çift", "25 çift", "46 çift"],
        correctIndex: 1,
        explanation: "İnsan hücre çekirdeklerinde 23 çift (toplamda 46) kromozom bulunur. 22 çift otozomal kromozom, 1 çift ise cinsiyet kromozomdur (XX: kadın, XY: erkek). Down sendromu gibi bazı rahatsızlıklar fazladan kromozomdan kaynaklanır."
      },
      {
        id: "g88",
        difficulty: "hard",
        question: "Dünya'nın en büyük okyanusu hangisidir?",
        options: ["Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Büyük Okyanus"],
        correctIndex: 3,
        explanation: "Büyük Okyanus (Pasifik), yaklaşık 165 milyon km² yüzey alanıyla dünyanın en büyük ve en derin okyanusudur. Dünyanın tüm kara kütlelerini içine alacak büyüklüktedir; Mariana Çukuru da bu okyanusta yer alır."
      },
      {
        id: "g89",
        difficulty: "hard",
        question: "Hangi metal oda sıcaklığında sıvı hâlde bulunur?",
        options: ["Kurşun", "Çinko", "Cıva", "Bakır"],
        correctIndex: 2,
        explanation: "Cıva (Hg), atom numarası 80 olan ve oda sıcaklığında sıvı hâlde bulunan tek metaldir. -39°C'de katılaşan cıva; termometreler, floresan lambalar ve diş dolgularında kullanılmış olsa da toksik yapısı nedeniyle kullanımı giderek kısıtlanmaktadır."
      },
      {
        id: "g90",
        difficulty: "hard",
        question: "Birleşmiş Milletler'in kaç üye devleti bulunmaktadır?",
        options: ["157", "175", "193", "210"],
        correctIndex: 2,
        explanation: "Birleşmiş Milletler, 2011 yılında Güney Sudan'ın katılımıyla 193 üye devlete ulaşmıştır. 1945 yılında 51 kurucu üyeyle yola çıkan BM; barış, güvenlik, insani yardım ve insan hakları alanlarında faaliyet göstermektedir."
      },
      {
        id: "g91",
        difficulty: "hard",
        question: "Dünya'nın en küçük kıtası hangisidir?",
        options: ["Antarktika", "Avrupa", "Avustralya", "Güney Amerika"],
        correctIndex: 2,
        explanation: "Avustralya, yaklaşık 7.7 milyon km² yüzey alanıyla dünyanın en küçük kıtasıdır. Hem bir kıta hem de bağımsız bir ülke olan Avustralya, aynı zamanda dünyanın en büyük adasıdır."
      },
      {
        id: "g92",
        difficulty: "hard",
        question: "Jüpiter gezegeni hakkında aşağıdakilerden hangisi doğrudur?",
        options: ["Güneş Sistemi'nin en küçük gezegenidir", "Halkaları en belirgin gezegendir", "Güneş Sistemi'nin en büyük gezegenidir", "Dünya'ya en yakın gezegendir"],
        correctIndex: 2,
        explanation: "Jüpiter, Güneş Sistemi'nin en büyük gezegenidir; kütlesi diğer tüm gezegenlerin toplamından 2,5 kat fazladır. Çok sayıda uyduya sahip olan Jüpiter'in atmosferinde 'Büyük Kırmızı Leke' adı verilen dev bir fırtına 350 yılı aşkın süredir devam etmektedir."
      },
      {
        id: "g93",
        difficulty: "hard",
        question: "Hangi ülke dünyanın en kalabalık nüfusuna sahiptir?",
        options: ["Çin", "ABD", "Endonezya", "Hindistan"],
        correctIndex: 3,
        explanation: "Hindistan, 2023 yılı verilerine göre 1.4 milyarı aşan nüfusuyla Çin'i geçerek dünyanın en kalabalık ülkesi konumuna gelmiştir. BM tahminlerine göre Hindistan'ın nüfusu 2050'ye kadar artmaya devam edecektir."
      },
      {
        id: "g94",
        difficulty: "hard",
        question: "Piramitler hangi nehrin kıyısına inşa edilmiştir?",
        options: ["Fırat", "Nil", "Dicle", "Ganj"],
        correctIndex: 1,
        explanation: "Mısır'daki büyük piramitler Nil Nehri'nin batı yakasına inşa edilmiştir. Antik Mısırlılar için Nil'in batısı ölüm ve öteki dünyayla özdeşleştirilirdi; bu nedenle mezarlıklar ve anıt yapılar nehrin batı kıyısına yapılırdı."
      },
      {
        id: "g95",
        difficulty: "hard",
        question: "İnsan beyninin ortalama ağırlığı ne kadardır?",
        options: ["0.8-0.9 kg", "1.2-1.4 kg", "1.8-2.0 kg", "2.5-3.0 kg"],
        correctIndex: 1,
        explanation: "Yetişkin bir insanın beyni ortalama 1.2-1.4 kg ağırlığındadır. Beyin, vücut ağırlığının yalnızca yaklaşık %2'sini oluşturmasına karşın vücudun enerji tüketiminin yaklaşık %20'sini karşılar."
      },
      {
        id: "g96",
        difficulty: "hard",
        question: "Hangi ülke en fazla olimpiyat altın madalyası kazanmıştır?",
        options: ["Rusya", "Çin", "Almanya", "ABD"],
        correctIndex: 3,
        explanation: "ABD, tarihsel olarak en fazla olimpiyat altın madalyası kazanan ülkedir. Yaz Olimpiyatları'nda genel madalya sayısında açık ara birinci olan ABD, tüm olimpiyat tarihinde binlerce madalya toplamıştır."
      },
      {
        id: "g97",
        difficulty: "hard",
        question: "Dünya'nın en uzun nehri hangisidir?",
        options: ["Amazon", "Nil", "Mississippi", "Yangtze"],
        correctIndex: 1,
        explanation: "Uzun süre tartışma konusu olan bu soruda güncel ölçümlere göre Nil Nehri yaklaşık 6.650 km ile dünyanın en uzun nehri kabul edilmektedir. Kuzey Afrika'da Burundi'den Akdeniz'e uzanan Nil, Antik Mısır uygarlığının temelini oluşturmuştur."
      },
      {
        id: "g98",
        difficulty: "hard",
        question: "Leonardo da Vinci hangi ülkede doğmuştur?",
        options: ["Fransa", "İspanya", "İtalya", "Portekiz"],
        correctIndex: 2,
        explanation: "Leonardo da Vinci, 15 Nisan 1452'de İtalya'nın Vinci kasabasında doğmuştur. Ressam, heykeltıraş, mimar, müzisyen, matematikçi, mühendis ve bilim insanı olan Da Vinci, Rönesans döneminin en önemli temsilcilerinden biri olarak kabul edilmektedir."
      },
      {
        id: "g99",
        difficulty: "hard",
        question: "Uluslararası Uzay İstasyonu (ISS) hangi yılda sürekli insanlı göreve başlamıştır?",
        options: ["1995", "1998", "2000", "2004"],
        correctIndex: 2,
        explanation: "Uluslararası Uzay İstasyonu (ISS), Kasım 2000'den bu yana kesintisiz olarak insanlı misyon barındırmaktadır. Birden fazla ülkenin ortaklığıyla yürütülen ISS, yaklaşık 400 km yükseklikte yörüngesini sürdürmekte ve bilimsel araştırmalara ev sahipliği yapmaktadır."
      },
      {
        id: "g100",
        difficulty: "hard",
        question: "Dünya'nın en yüksek dağı olan Everest'in zirvesi deniz seviyesinden ne kadar yüksektedir?",
        options: ["7.542 m", "8.091 m", "8.849 m", "9.120 m"],
        correctIndex: 2,
        explanation: "Everest Dağı'nın zirvesi, 2020 yılında yapılan ölçümlerde 8.848,86 metre olarak yeniden belirlenmiştir. Nepal ve Tibet sınırında yer alan Everest, Himalaya Dağları'nın en yüksek noktasıdır; ilk kez 29 Mayıs 1953'te Edmund Hillary ve Tenzing Norgay tarafından tırmanılmıştır."
      },
      {
        id: "g101",
        difficulty: "hard",
        question: "En hızlı kara hayvanı hangisidir?",
        options: ["Aslan", "Leopar", "Çita", "Kanguru"],
        correctIndex: 2,
        explanation: "Çita, kısa mesafelerde saatte 112 km'ye kadar ulaşabilen dünyanın en hızlı kara hayvanıdır. Bu hıza yalnızca birkaç saniyede erişebilir ve yaklaşık 30 saniye boyunca koruyabilir. İnce yapısı, esnek omurgası ve büyük burun delikleri bu üstün performansı mümkün kılar."
      },
      {
        id: "g102",
        difficulty: "hard",
        question: "Demir elementinin periyodik tablodaki sembolü nedir?",
        options: ["De", "Fe", "Di", "Fr"],
        correctIndex: 1,
        explanation: "Demir'in sembolü Fe'dir; bu kısaltma Latince 'ferrum' kelimesinden gelmektedir. Demir, yeryüzünde en bol bulunan metallerden biridir ve çelik üretiminde temel hammadde olarak kullanılır. Aynı zamanda insan kanındaki hemoglobinin yapısında yer alır."
      },
      {
        id: "g103",
        difficulty: "hard",
        question: "Türkiye'nin en büyük gölü hangisidir?",
        options: ["Tuz Gölü", "Beyşehir Gölü", "Van Gölü", "Eğirdir Gölü"],
        correctIndex: 2,
        explanation: "Van Gölü, yaklaşık 3.755 km² yüzölçümüyle Türkiye'nin en büyük gölüdür. Doğu Anadolu'da yer alan bu sodalı (alkali) göl, dünyanın en büyük sodalı göllerinden biridir. Tuzcul suları nedeniyle balık çeşitliliği oldukça sınırlıdır; ancak inci kefali bu sulara uyum sağlamış nadir türlerden biridir."
      },
      {
        id: "g104",
        difficulty: "hard",
        question: "Güneş sisteminde kaç gezegen bulunur?",
        options: ["7", "8", "9", "10"],
        correctIndex: 1,
        explanation: "2006 yılında Uluslararası Astronomi Birliği'nin (IAU) yaptığı yeni sınıflandırmayla Plüton 'cüce gezegen' kategorisine alınmış ve gezegen sayısı 9'dan 8'e inmiştir. Sekiz gezegen sırasıyla Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün'dür."
      },
      {
        id: "g105",
        difficulty: "hard",
        question: "Hangi gezegen kendi ekseninde diğer gezegenlere zıt yönde (saat yönünde) döner?",
        options: ["Mars", "Jüpiter", "Venüs", "Satürn"],
        correctIndex: 2,
        explanation: "Venüs, kendi ekseninde doğudan batıya (saat yönünde) döner; bu durum diğer gezegenlerin büyük çoğunluğunun batıdan doğuya dönmesinin tam tersidir. Bu retrograd rotasyon nedeniyle Venüs'te bir gün (243 Dünya günü) bir yıldan (225 Dünya günü) daha uzundur. Uranüs da benzer biçimde yanlamasına döner."
      },
      {
        id: "g106",
        difficulty: "hard",
        question: "İnsanlığın Ay'a ilk ayak basması hangi yılda gerçekleşmiştir?",
        options: ["1965", "1967", "1969", "1972"],
        correctIndex: 2,
        explanation: "20 Temmuz 1969'da Apollo 11 göreviyle Neil Armstrong ve Buzz Aldrin, insanlık tarihinde ilk kez Ay yüzeyine ayak bastı. Armstrong'un söylediği 'Bu benim için küçük bir adım, insanlık için büyük bir sıçrayış' sözü tarihe geçti. Michael Collins ise komuta modülünde Ay yörüngesinde bekledi."
      },
      {
        id: "g107",
        difficulty: "hard",
        question: "Nobel Ödülü kaç farklı alanda verilmektedir?",
        options: ["4", "5", "6", "7"],
        correctIndex: 2,
        explanation: "Nobel Ödülleri altı farklı alanda verilmektedir: Fizik, Kimya, Fizyoloji veya Tıp, Edebiyat, Barış ve Ekonomi. Alfred Nobel'in 1895'teki vasiyetiyle temelleri atılan ödüller, ilk kez 1901 yılında takdim edilmiştir. Ekonomi ödülü sonradan (1968) İsveç Merkez Bankası tarafından eklenmiştir."
      },
      {
        id: "g108",
        difficulty: "hard",
        question: "Hangi ülkenin para birimi 'Yen'dir?",
        options: ["Çin", "Güney Kore", "Vietnam", "Japonya"],
        correctIndex: 3,
        explanation: "Yen (¥), Japonya'nın resmi para birimidir ve dolar ile euro'nun ardından dünyada en çok işlem gören üçüncü para birimidir. 1871'de modernleşme sürecinde yürürlüğe giren Yen, Japonca'da 'yuvarlak nesne' anlamına gelir. Japonya Merkez Bankası, yenin değerini yönetmektedir."
      },
      {
        id: "g109",
        difficulty: "hard",
        question: "'DNA' açılımı nedir?",
        options: ["Dinamik Nöral Analiz", "Deoksiribonükleik Asit", "Dijital Nükleotid Analizi", "Doğrusal Nöron Ağı"],
        correctIndex: 1,
        explanation: "DNA, Deoksiribonükleik Asit'in kısaltmasıdır. Canlı hücrelerin çekirdeğinde bulunan DNA, kalıtsal bilgiyi taşıyan çift sarmal yapıya sahip bir moleküldür. 1953'te James Watson ve Francis Crick tarafından açıklanan çift sarmal yapısı, modern genetiğin temel taşını oluşturmuştur."
      },
      {
        id: "g110",
        difficulty: "hard",
        question: "Sismoloji ne anlama gelir?",
        options: ["Atmosfer olaylarını inceleyen bilim", "Depremler ve sismik dalgaları inceleyen bilim", "Okyanus tabanını inceleyen bilim", "Yer kabuğunun katmanlarını inceleyen bilim"],
        correctIndex: 1,
        explanation: "Sismoloji, Yunanca 'seismos' (deprem) ve 'logos' (bilim) kelimelerinden türeyen, depremleri, sismik dalgaları ve yer kabuğu yapısını inceleyen bilim dalıdır. Sismologlar Richter ve Moment Magnitüd gibi ölçekler kullanarak depremlerin büyüklüğünü belirler; aynı zamanda yer iç yapısı hakkında bilgi elde ederler."
      },
      {
        id: "g111",
        difficulty: "easy",
        question: "Birleşmiş Milletler hangi yılda kurulmuştur?",
        options: ["1919", "1939", "1945", "1955"],
        correctIndex: 2,
        explanation: "Birleşmiş Milletler, II. Dünya Savaşı'nın ardından 24 Ekim 1945'te San Francisco Konferansı sonrası kurulmuştur."
      },
      {
        id: "g112",
        difficulty: "easy",
        question: "Avustralya'nın başkenti hangi şehirdir?",
        options: ["Sidney", "Melbourne", "Canberra", "Perth"],
        correctIndex: 2,
        explanation: "Avustralya'nın başkenti, Sidney ile Melbourne arasındaki rekabeti çözmek için 1908'de kurulan Canberra'dır."
      },
      {
        id: "g113",
        difficulty: "easy",
        question: "UNESCO'nun merkezi hangi şehirdedir?",
        options: ["Cenevre", "New York", "Paris", "Viyana"],
        correctIndex: 2,
        explanation: "UNESCO (BM Eğitim, Bilim ve Kültür Örgütü) merkezi 1958'den beri Paris'tedir."
      },
      {
        id: "g114",
        difficulty: "easy",
        question: "Bir gökkuşağında temel olarak kaç renk bulunur?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Newton'un sınıflandırmasına göre gökkuşağı 7 renkten oluşur: kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor."
      },
      {
        id: "g115",
        difficulty: "easy",
        question: "Dünyanın en büyük adası hangisidir?",
        options: ["Yeni Gine", "Borneo", "Madagaskar", "Grönland"],
        correctIndex: 3,
        explanation: "Grönland yaklaşık 2,16 milyon km² yüzölçümüyle dünyanın en büyük adasıdır; Avustralya kıta kabul edildiğinden ada sıralamasına dahil değildir."
      },
      {
        id: "g116",
        difficulty: "easy",
        question: "Macaristan'ın başkenti hangi şehirdir?",
        options: ["Bratislava", "Belgrad", "Budapeşte", "Bükreş"],
        correctIndex: 2,
        explanation: "Budapeşte, 1873'te Buda, Pest ve Óbuda şehirlerinin birleştirilmesiyle oluşmuş Macaristan'ın başkentidir."
      },
      {
        id: "g117",
        difficulty: "easy",
        question: "Vatikan'ın resmi dili nedir?",
        options: ["İtalyanca", "Latince", "Fransızca", "Yunanca"],
        correctIndex: 1,
        explanation: "Vatikan'ın resmi dili Latince'dir; günlük yönetimde İtalyanca da yaygın olarak kullanılır."
      },
      {
        id: "g118",
        difficulty: "easy",
        question: "Hangi ülke 'Doğan Güneşin Ülkesi' olarak bilinir?",
        options: ["Çin", "Kore", "Japonya", "Tayland"],
        correctIndex: 2,
        explanation: "Japonya, Çin'in doğusunda yer aldığı için 'Nihon' (güneşin doğduğu yer) adıyla anılır ve 'Doğan Güneşin Ülkesi' olarak bilinir."
      },
      {
        id: "g119",
        difficulty: "easy",
        question: "Mors alfabesinde 'SOS' sinyali nasıl gönderilir?",
        options: ["Üç kısa, üç uzun, üç kısa", "Üç uzun, üç kısa, üç uzun", "İki kısa, iki uzun", "Bir uzun, üç kısa"],
        correctIndex: 0,
        explanation: "SOS sinyali Mors alfabesinde üç nokta (S), üç çizgi (O), üç nokta (S) şeklinde gönderilir; kolay tanınması için seçilmiştir."
      },
      {
        id: "g120",
        difficulty: "easy",
        question: "Yılbaşı gecesi New York'taki ünlü top düşürme töreni hangi meydanda yapılır?",
        options: ["Central Park", "Times Meydanı", "Madison Meydanı", "Union Meydanı"],
        correctIndex: 1,
        explanation: "1907'den beri her yıl 31 Aralık'ta Times Meydanı'nda gece yarısı kristal top düşürülür."
      },
      {
        id: "g121",
        difficulty: "easy",
        question: "Olimpiyat halkalarında kaç renk kullanılır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "Olimpiyat bayrağında mavi, sarı, siyah, yeşil ve kırmızı olmak üzere beş renkli halka, beyaz zemin üzerinde yer alır; bu altı renk dünyadaki tüm bayraklarda bulunur."
      },
      {
        id: "g122",
        difficulty: "easy",
        question: "Eyfel Kulesi hangi yıl tamamlanmıştır?",
        options: ["1889", "1900", "1912", "1925"],
        correctIndex: 0,
        explanation: "Eyfel Kulesi, 1889 Paris Dünya Sergisi için Gustave Eiffel'in mühendislik şirketi tarafından inşa edildi."
      },
      {
        id: "g123",
        difficulty: "easy",
        question: "Latin alfabesinde toplam kaç harf vardır?",
        options: ["24", "25", "26", "27"],
        correctIndex: 2,
        explanation: "Modern temel Latin alfabesi A'dan Z'ye 26 harften oluşur; bu, İngilizce alfabe ile aynıdır."
      },
      {
        id: "g124",
        difficulty: "easy",
        question: "Beyaz Saray hangi şehirdedir?",
        options: ["New York", "Boston", "Washington D.C.", "Philadelphia"],
        correctIndex: 2,
        explanation: "ABD Başkanı'nın ikametgâhı ve çalışma yeri olan Beyaz Saray, başkent Washington D.C.'de Pennsylvania Avenue 1600 numaradadır."
      },
      {
        id: "g125",
        difficulty: "easy",
        question: "Norveç'in resmi para birimi nedir?",
        options: ["Euro", "Norveç Kronu", "Krona", "Mark"],
        correctIndex: 1,
        explanation: "Norveç, AB üyesi olmadığı için Euro yerine kendi para birimi olan Norveç Kronu'nu (NOK) kullanır."
      },
      {
        id: "g126",
        difficulty: "easy",
        question: "İnsan vücudundaki en büyük iç organ hangisidir?",
        options: ["Kalp", "Akciğer", "Karaciğer", "Böbrek"],
        correctIndex: 2,
        explanation: "Karaciğer, yaklaşık 1,5 kg ağırlığıyla insan vücudundaki en büyük iç organdır; kan temizleme ve metabolizmada kritik rol oynar."
      },
      {
        id: "g127",
        difficulty: "easy",
        question: "İspanya'nın resmi para birimi nedir?",
        options: ["Peseta", "Euro", "Real", "Peso"],
        correctIndex: 1,
        explanation: "İspanya, 1 Ocak 2002'den itibaren Peseta'yı bırakıp Euro'ya geçmiş bir Avro Bölgesi üyesidir."
      },
      {
        id: "g128",
        difficulty: "medium",
        question: "NATO'nun 2024 itibarıyla kaç üye ülkesi vardır?",
        options: ["28", "30", "32", "34"],
        correctIndex: 2,
        explanation: "İsveç'in 2024 başında katılımıyla NATO'nun üye sayısı 32'ye yükselmiştir; en son katılan Finlandiya (2023) ve İsveç (2024) olmuştur."
      },
      {
        id: "g129",
        difficulty: "medium",
        question: "Magna Carta hangi yıl imzalanmıştır?",
        options: ["1066", "1215", "1453", "1492"],
        correctIndex: 1,
        explanation: "Magna Carta, İngiltere Kralı John tarafından 15 Haziran 1215'te Runnymede'de imzalanan ve hükümdarın yetkilerini sınırlayan tarihi belgedir."
      },
      {
        id: "g130",
        difficulty: "medium",
        question: "Pulitzer Ödülü kim tarafından kurulmuştur?",
        options: ["Joseph Pulitzer", "William Hearst", "Walter Lippmann", "Henry Luce"],
        correctIndex: 0,
        explanation: "Pulitzer Ödülü, Macar asıllı Amerikalı gazeteci Joseph Pulitzer'in vasiyeti üzerine 1917'den itibaren Columbia Üniversitesi tarafından verilmektedir."
      },
      {
        id: "g131",
        difficulty: "medium",
        question: "Berlin Duvarı hangi yıl yıkılmıştır?",
        options: ["1985", "1989", "1991", "1993"],
        correctIndex: 1,
        explanation: "Berlin Duvarı, 9 Kasım 1989'da Doğu Almanya'nın seyahat kısıtlamalarını kaldırmasıyla halkın geçişiyle fiilen yıkılmıştır."
      },
      {
        id: "g132",
        difficulty: "medium",
        question: "Dünya Sağlık Örgütü'nün (WHO) merkezi hangi şehirdedir?",
        options: ["New York", "Cenevre", "Paris", "Brüksel"],
        correctIndex: 1,
        explanation: "WHO, 1948'de kurulmuştur ve merkezi İsviçre'nin Cenevre şehrindedir."
      },
      {
        id: "g133",
        difficulty: "medium",
        question: "Tibet Özerk Bölgesi'nin başkenti hangi şehirdir?",
        options: ["Şangay", "Pekin", "Lhasa", "Chengdu"],
        correctIndex: 2,
        explanation: "Tibet Özerk Bölgesi'nin başkenti, deniz seviyesinden 3.656 metre yükseklikteki Lhasa şehridir; Potala Sarayı burada bulunur."
      },
      {
        id: "g134",
        difficulty: "medium",
        question: "G7 ülkeleri hangileridir?",
        options: ["ABD, Çin, Rusya, AB, Japonya, Hindistan, Brezilya", "ABD, Birleşik Krallık, Almanya, Fransa, İtalya, Kanada, Japonya", "ABD, Rusya, Almanya, Fransa, Çin, Japonya, Brezilya", "ABD, AB, Çin, Hindistan, İngiltere, Almanya, Brezilya"],
        correctIndex: 1,
        explanation: "G7, dünyanın en gelişmiş yedi ekonomisini kapsar: ABD, Birleşik Krallık, Almanya, Fransa, İtalya, Kanada ve Japonya."
      },
      {
        id: "g135",
        difficulty: "medium",
        question: "Suriye'nin başkenti hangi şehirdir?",
        options: ["Halep", "Şam", "Humus", "Lazkiye"],
        correctIndex: 1,
        explanation: "Şam (Damascus), MÖ 3000'lere uzanan tarihiyle dünyanın en eski sürekli yerleşim alanlarından biridir ve Suriye'nin başkentidir."
      },
      {
        id: "g136",
        difficulty: "medium",
        question: "Avrupa Birliği'nin yürütme organı hangisidir?",
        options: ["Avrupa Konseyi", "Avrupa Komisyonu", "Avrupa Parlamentosu", "Avrupa Adalet Divanı"],
        correctIndex: 1,
        explanation: "Avrupa Komisyonu, AB'nin yürütme organıdır; merkezi Brüksel'dedir ve yasa tasarılarını hazırlar."
      },
      {
        id: "g137",
        difficulty: "medium",
        question: "Türk Lirası'nın güncel sembolü (₺) hangi yıl kabul edilmiştir?",
        options: ["2008", "2010", "2012", "2014"],
        correctIndex: 2,
        explanation: "TL sembolü ₺, 1 Mart 2012'de Merkez Bankası tarafından düzenlenen yarışma sonucu Tülay Lale'nin tasarımının seçilmesiyle resmen kabul edildi."
      },
      {
        id: "g138",
        difficulty: "medium",
        question: "Hangi ülkenin bayrağında kenevir yaprağı bulunur?",
        options: ["Lübnan", "Kanada", "Sri Lanka", "Hiçbiri"],
        correctIndex: 3,
        explanation: "Hiçbir ülke bayrağında kenevir yaprağı bulunmaz; Kanada bayrağındaki yaprak akçaağaç (maple), Lübnan'dakinde ise sedir ağacıdır."
      },
      {
        id: "g139",
        difficulty: "medium",
        question: "Norveç, İsveç ve Danimarka'yı kapsayan terim hangisidir?",
        options: ["Baltık ülkeleri", "Beneluks", "İskandinavya", "Slav ülkeleri"],
        correctIndex: 2,
        explanation: "İskandinavya, dar tanımıyla Norveç, İsveç ve Danimarka'yı; geniş tanımıyla Finlandiya ve İzlanda'yı da içerir."
      },
      {
        id: "g140",
        difficulty: "medium",
        question: "Boeing 747'nin yaygın lakabı nedir?",
        options: ["Jumbo Jet", "Big Bird", "Sky King", "Air Giant"],
        correctIndex: 0,
        explanation: "1969'da uçan ve onlarca yıl dünyanın en büyük yolcu uçağı olan Boeing 747, yaygın olarak 'Jumbo Jet' lakabıyla anılmıştır."
      },
      {
        id: "g141",
        difficulty: "medium",
        question: "Hangi ülkede dünyanın en yüksek nüfus yoğunluğuna sahip bağımsız devlet bulunur?",
        options: ["Bangladeş", "Singapur", "Monako", "Bahreyn"],
        correctIndex: 2,
        explanation: "Monako, yaklaşık 2,02 km² yüzölçümünde 39.000+ kişiyle km² başına ~19.000 kişi yoğunluğuyla dünyanın en yoğun nüfuslu bağımsız devletidir."
      },
      {
        id: "g142",
        difficulty: "medium",
        question: "OPEC'in kuruluş tarihi hangi yıldır?",
        options: ["1945", "1960", "1973", "1980"],
        correctIndex: 1,
        explanation: "Petrol İhraç Eden Ülkeler Örgütü OPEC, 14 Eylül 1960'ta Bağdat'ta İran, Irak, Kuveyt, Suudi Arabistan ve Venezuela tarafından kuruldu."
      },
      {
        id: "g143",
        difficulty: "medium",
        question: "ISO 8601 standardı neyi tanımlar?",
        options: ["Kalite yönetimi", "Tarih ve saat formatı", "Çevre yönetimi", "Bilgi güvenliği"],
        correctIndex: 1,
        explanation: "ISO 8601, tarihlerin ve saatlerin uluslararası tek biçimde gösterimini tanımlar (örneğin 2024-03-15T13:45:30Z)."
      },
      {
        id: "g144",
        difficulty: "medium",
        question: "Estonya, Letonya ve Litvanya hangi denize kıyısı olan ülkelerdir?",
        options: ["Karadeniz", "Adriyatik", "Baltık", "Kuzey"],
        correctIndex: 2,
        explanation: "Estonya, Letonya ve Litvanya, Baltık denizine kıyısı olan ve Baltık ülkeleri olarak anılan üç bağımsız devlettir."
      },
      {
        id: "g145",
        difficulty: "hard",
        question: "Birleşmiş Milletler Güvenlik Konseyi'nde kaç daimi üye vardır?",
        options: ["3", "5", "7", "10"],
        correctIndex: 1,
        explanation: "BM Güvenlik Konseyi'nin daimi üyeleri 5 ülkedir: ABD, Rusya, Çin, Birleşik Krallık ve Fransa; her birinin veto hakkı vardır."
      },
      {
        id: "g146",
        difficulty: "hard",
        question: "Pulitzer Ödülü, ölümünden kaç yıl sonra ilk kez verilmiştir?",
        options: ["6", "11", "20", "25"],
        correctIndex: 0,
        explanation: "Joseph Pulitzer 1911'de öldü; vasiyeti üzerine ilk Pulitzer Ödülleri 1917'de, ölümünden 6 yıl sonra verilmeye başlandı."
      },
      {
        id: "g147",
        difficulty: "hard",
        question: "Süper iletkenlik olgusunu 1911'de ilk gözlemleyen bilim insanı kimdir?",
        options: ["Albert Einstein", "Heike Kamerlingh Onnes", "Niels Bohr", "Werner Heisenberg"],
        correctIndex: 1,
        explanation: "Hollandalı fizikçi Heike Kamerlingh Onnes, 1911'de cıvanın 4,2 K'de elektriksel direncini kaybettiğini keşfetti ve 1913'te Nobel Fizik Ödülü'nü aldı."
      },
      {
        id: "g148",
        difficulty: "hard",
        question: "Dünyanın en büyük tatlı su gölü hangisidir? (Yüzey alanı bakımından)",
        options: ["Baykal", "Üst Göl (Lake Superior)", "Victoria", "Tanganyika"],
        correctIndex: 1,
        explanation: "Yüzey alanı bakımından dünyanın en büyük tatlı su gölü, ABD-Kanada sınırındaki Üst Göl'dür (Lake Superior, 82.100 km²)."
      },
      {
        id: "g149",
        difficulty: "hard",
        question: "İlk modern olimpiyatlar hangi şehirde düzenlendi?",
        options: ["Roma", "Paris", "Atina", "Londra"],
        correctIndex: 2,
        explanation: "Modern Olimpiyatlar 1896'da, antik olimpiyatların onuruna Yunanistan'ın başkenti Atina'da düzenlendi."
      },
      {
        id: "g150",
        difficulty: "hard",
        question: "Avrupa Konseyi (Council of Europe) merkezi hangi şehirdedir?",
        options: ["Brüksel", "Strazburg", "Lüksemburg", "Cenevre"],
        correctIndex: 1,
        explanation: "1949'da kurulan ve AB'den ayrı bir kuruluş olan Avrupa Konseyi'nin merkezi Fransa'nın Strazburg şehrindedir."
      },
      {
        id: "g151",
        difficulty: "hard",
        question: "Hangi ülke 'Lale Devri' olarak bilinen dönem ile ilişkilidir?",
        options: ["Hollanda", "Osmanlı", "İran", "Hindistan"],
        correctIndex: 1,
        explanation: "Lale Devri, Osmanlı'da III. Ahmed döneminde 1718-1730 yılları arasında yaşanan kültürel açılım ve refah dönemidir."
      },
      {
        id: "g152",
        difficulty: "hard",
        question: "Interpol'un merkezi hangi şehirdedir?",
        options: ["Paris", "Lyon", "Lahey", "Brüksel"],
        correctIndex: 1,
        explanation: "Uluslararası Kriminal Polis Örgütü Interpol, 1989'dan beri merkezini Fransa'nın Lyon şehrinde tutmaktadır."
      },
      {
        id: "g153",
        difficulty: "hard",
        question: "Dünyanın en uzun karayolu tüneli hangisidir?",
        options: ["Lærdal Tüneli", "St. Gotthard Tüneli", "Eurasia Tüneli", "Mont Blanc Tüneli"],
        correctIndex: 0,
        explanation: "Norveç'teki Lærdal Tüneli, 24,5 km uzunluğuyla dünyanın en uzun karayolu tünelidir; 2000'de hizmete açılmıştır."
      },
      {
        id: "g154",
        difficulty: "hard",
        question: "BRICS terimi hangi ülkelerin baş harflerinden oluşur?",
        options: ["Belarus, Rusya, İran, Çin, Suriye", "Brezilya, Rusya, Hindistan, Çin, Güney Afrika", "Bulgaristan, Romanya, İsveç, Çek Cumhuriyeti, Slovakya", "Brezilya, Rusya, İrlanda, Çin, İspanya"],
        correctIndex: 1,
        explanation: "BRICS; Brezilya, Rusya, Hindistan, Çin ve Güney Afrika ülkelerinin baş harflerinden oluşan ekonomik birlik terimidir."
      },
      {
        id: "g155",
        difficulty: "hard",
        question: "Eski Mısır'da firavunlara yardım eden vezir karakter ne olarak adlandırılırdı?",
        options: ["Tjaty", "Pharaoh", "Vizier", "Nomark"],
        correctIndex: 0,
        explanation: "Eski Mısır'da firavunun en yüksek rütbeli yöneticisi 'Tjaty' (vezir) olarak adlandırılırdı; tarımdan adalete kadar geniş yetkileri vardı."
      },
      {
        id: "g156",
        difficulty: "hard",
        question: "Hangi ülkenin bayrağı kare şeklindedir?",
        options: ["Vatikan, İsviçre", "Sadece İsviçre", "Sadece Vatikan", "Hiçbiri"],
        correctIndex: 0,
        explanation: "Dünyada yalnızca iki bağımsız devletin bayrağı karedir: İsviçre ve Vatikan."
      },
      {
        id: "g157",
        difficulty: "hard",
        question: "Schengen Anlaşması ilk olarak hangi yıl imzalanmıştır?",
        options: ["1980", "1985", "1990", "1995"],
        correctIndex: 1,
        explanation: "Schengen Anlaşması, 14 Haziran 1985'te Lüksemburg'un Schengen kasabasında 5 ülke (Almanya, Belçika, Fransa, Lüksemburg, Hollanda) tarafından imzalanmıştır."
      },
      {
        id: "g158",
        difficulty: "hard",
        question: "Dünyanın en eski faaliyetteki üniversitesi hangisidir?",
        options: ["Oxford", "Bologna", "Karaviyyin", "Sorbonne"],
        correctIndex: 2,
        explanation: "Fas'ın Fes şehrindeki Karaviyyin Üniversitesi, 859'da Fatima el-Fihri tarafından kurulmuş ve UNESCO ile Guinness tarafından dünyanın en eski sürekli faaliyetteki üniversitesi olarak tanınmıştır."
      },
      {
        id: "g159",
        difficulty: "hard",
        question: "Antarktika Antlaşması hangi yıl imzalanmıştır?",
        options: ["1945", "1959", "1972", "1985"],
        correctIndex: 1,
        explanation: "Antarktika Antlaşması, kıtanın yalnızca barışçıl ve bilimsel amaçlarla kullanılmasını öngörür; 1 Aralık 1959'da 12 ülke tarafından imzalanmıştır."
      },
      {
        id: "g160",
        difficulty: "hard",
        question: "Hangi ülkede dünyanın en uzun kıyı şeridi bulunur?",
        options: ["Rusya", "Endonezya", "Avustralya", "Kanada"],
        correctIndex: 3,
        explanation: "Kanada, çok sayıda adası ve girintili kıyıları nedeniyle yaklaşık 202.080 km uzunluğundaki kıyı şeridiyle dünyada birincidir."
      },
      {
        id: "g161",
        difficulty: "easy",
        question: "Türkiye kaç ilden oluşmaktadır?",
        options: ["75", "78", "81", "83"],
        correctIndex: 2,
        explanation: "Türkiye, 81 ilden oluşmaktadır. En kalabalık il İstanbul, yüzölçümü bakımından en küçük il ise Yalova'dır."
      },
      {
        id: "g162",
        difficulty: "easy",
        question: "Güneş sistemindeki en büyük gezegen hangisidir?",
        options: ["Satürn", "Neptün", "Jüpiter", "Uranüs"],
        correctIndex: 2,
        explanation: "Jüpiter, Güneş sisteminin en büyük gezegenidir; diğer tüm gezegenlerin toplam kütlesinin 2,5 katı kütleye sahiptir ve Büyük Kırmızı Leke adıyla bilinen devasa fırtınasıyla tanınır."
      },
      {
        id: "g163",
        difficulty: "medium",
        question: "Ozon tabakası atmosferin hangi katmanında yoğunlaşmıştır?",
        options: ["Troposfer", "Stratosfer", "Mezosfer", "Termosfer"],
        correctIndex: 1,
        explanation: "Ozon tabakası, yerden yaklaşık 15-35 km yükseklikte yer alan stratosfer katmanında bulunur. Güneş'in zararlı ultraviyole (UV) ışınlarının büyük bölümünü absorbe ederek yeryüzündeki canlıları korur."
      },
      {
        id: "g164",
        difficulty: "medium",
        question: "'İnsan Hakları Evrensel Beyannamesi' hangi yılda ilan edilmiştir?",
        options: ["1945", "1948", "1952", "1960"],
        correctIndex: 1,
        explanation: "İnsan Hakları Evrensel Beyannamesi, Birleşmiş Milletler Genel Kurulu tarafından 10 Aralık 1948'de Paris'te ilan edilmiştir. Temel hak ve özgürlükleri güvence altına alan bu belge, modern insan hakları hukukunun temelini oluşturur."
      },
      {
        id: "g165",
        difficulty: "medium",
        question: "Dünyanın en büyük çölü hangisidir?",
        options: ["Gobi", "Arabistan", "Sahara", "Antarktika"],
        correctIndex: 3,
        explanation: "Çöl; yıllık yağışın 250 mm'den az olduğu bölge olarak tanımlanır. Bu tanıma göre Antarktika, yaklaşık 14,2 milyon km² yüzölçümüyle dünyanın en büyük çölüdür. Sahara ise sıcak çöller arasında en büyüğüdür."
      },
      {
        id: "g166",
        difficulty: "medium",
        question: "Nobel Barış Ödülü hangi şehirde takdim edilir?",
        options: ["Stockholm", "Cenevre", "Oslo", "Kopenhag"],
        correctIndex: 2,
        explanation: "Nobel Ödülleri genellikle Stockholm'de verilirken Nobel Barış Ödülü, Alfred Nobel'in vasiyeti gereği her yıl 10 Aralık'ta Norveç'in başkenti Oslo'da düzenlenen törenle takdim edilir."
      },
      {
        id: "g167",
        difficulty: "hard",
        question: "Fibonacci dizisinde 10. terim kaçtır? (Dizi: 1, 1, 2, 3, 5, 8, ...)",
        options: ["34", "55", "89", "144"],
        correctIndex: 1,
        explanation: "Fibonacci dizisinde her terim kendisinden önceki iki terimin toplamıdır. Sırasıyla: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 — dolayısıyla 10. terim 55'tir."
      },
      {
        id: "g168",
        difficulty: "hard",
        question: "Işığın boşluktaki hızı saniyede yaklaşık kaç km'dir?",
        options: ["150.000 km/s", "200.000 km/s", "300.000 km/s", "450.000 km/s"],
        correctIndex: 2,
        explanation: "Işığın boşluktaki hızı saniyede yaklaşık 299.792 km'dir (genellikle 300.000 km/s olarak yuvarlaklaştırılır). Einstein'ın özel görelilik teorisine göre hiçbir kütleli cisim bu hıza ulaşamaz."
      },
      {
        id: "g169",
        difficulty: "hard",
        question: "Büyük Patlama (Big Bang) teorisine göre evren yaklaşık kaç milyar yıl önce oluşmuştur?",
        options: ["4,6 milyar yıl", "10 milyar yıl", "13,8 milyar yıl", "20 milyar yıl"],
        correctIndex: 2,
        explanation: "Kozmik mikrodalga arka plan radyasyonu ölçümleri ve diğer gözlemsel verilere dayanan hesaplamalara göre evren yaklaşık 13,8 milyar yıl önce Büyük Patlama ile ortaya çıkmıştır. Bu değer NASA ve ESA'nın Planck misyonu verileriyle büyük ölçüde doğrulanmıştır."
      },
      {
        id: "g170",
        difficulty: "hard",
        question: "Bir elementin kimyasal özelliklerini belirleyen temel faktör nedir?",
        options: ["Nötron sayısı", "Atom kütlesi", "Proton sayısı (atom numarası)", "Elektron katman sayısı"],
        correctIndex: 2,
        explanation: "Bir atomun proton sayısı (atom numarası), o elementin kimliğini ve periyodik tablodaki yerini belirler. Proton sayısı değişirse farklı bir element oluşur; nötron sayısı değiştiğinde ise aynı elementin farklı izotopları elde edilir."
      },
      {
        id: "g171",
        difficulty: "easy",
        question: "Hangi gezegen Güneş Sistemi'nde en fazla uyduya sahiptir?",
        options: ["Jüpiter", "Satürn", "Uranüs", "Neptün"],
        correctIndex: 1,
        explanation: "Satürn, keşfedilen 140'tan fazla uydusuyla Güneş Sistemi'nde en çok uyduya sahip gezegen konumundadır. En büyük uydusu Titan, kalın azot atmosferiyle gezegenimsi özellikler taşır."
      },
      {
        id: "g172",
        difficulty: "easy",
        question: "Dünya'nın en yüksek şelalesi hangisidir?",
        options: ["Niagara Şelalesi", "Angel Şelalesi", "Victoria Şelalesi", "İguazu Şelalesi"],
        correctIndex: 1,
        explanation: "Venezuela'da bulunan Angel Şelalesi (Salto Ángel), yaklaşık 979 metre yüksekliğiyle dünyanın en yüksek şelalesıdır. Yerli Pemon halkı bu şelaleyi 'Kerepakupai Merú' olarak adlandırır."
      },
      {
        id: "g173",
        difficulty: "easy",
        question: "Türkiye Cumhuriyeti hangi yılda kurulmuştur?",
        options: ["1919", "1920", "1923", "1925"],
        correctIndex: 2,
        explanation: "Türkiye Cumhuriyeti, 29 Ekim 1923'te Mustafa Kemal Atatürk'ün öncülüğünde resmen ilan edilmiştir. Bu tarih her yıl Cumhuriyet Bayramı olarak kutlanmaktadır."
      },
      {
        id: "g174",
        difficulty: "medium",
        question: "İnsan DNA'sı yaklaşık kaç baz çifti içermektedir?",
        options: ["3 milyon", "30 milyon", "3 milyar", "300 milyar"],
        correctIndex: 2,
        explanation: "İnsan genomunun yaklaşık 3 milyar baz çifti içerdiği tahmin edilmektedir. 2003'te tamamlanan İnsan Genomu Projesi bu diziyi ilk kez tam olarak haritalamıştır."
      },
      {
        id: "g175",
        difficulty: "medium",
        question: "Dünya genelinde en fazla kişi tarafından ana dil olarak konuşulan dil hangisidir?",
        options: ["İngilizce", "İspanyolca", "Mandarin Çincesi", "Arapça"],
        correctIndex: 2,
        explanation: "Mandarin Çincesi, yaklaşık 920 milyon ana dil konuşucusuyla dünyanın en fazla ana dil konuşucusuna sahip dilidir. İngilizce ise toplam konuşucu sayısıyla öne çıkar."
      },
      {
        id: "g176",
        difficulty: "medium",
        question: "Hangi bilim insanı evrim teorisini doğal seleksiyon mekanizmasıyla birlikte sistematik biçimde ortaya koymuştur?",
        options: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Alfred Russel Wallace"],
        correctIndex: 2,
        explanation: "Charles Darwin, 1859'da yayımladığı 'Türlerin Kökeni' adlı eserinde doğal seleksiyon yoluyla evrimi ayrıntılı biçimde açıklamıştır. Alfred Russel Wallace da bağımsız olarak benzer sonuçlara ulaşmış; ikisi bu teoriyi birlikte kamuoyuyla paylaşmıştır."
      },
      {
        id: "g177",
        difficulty: "medium",
        question: "BM'nin (Birleşmiş Milletler) genel merkezi hangi şehirde bulunmaktadır?",
        options: ["Cenevre", "Viyana", "New York", "Lahey"],
        correctIndex: 2,
        explanation: "BM Genel Merkezi, New York şehrinde Manhattan'da bulunmaktadır. 1952'de açılan bu kompleks uluslararası toprak statüsü taşır. BM'nin çeşitli ajansları Cenevre, Viyana ve Nairobi'de de faaliyet göstermektedir."
      },
      {
        id: "g178",
        difficulty: "medium",
        question: "Hangi ülke dünyada en fazla kahve üretmektedir?",
        options: ["Kolombiya", "Vietnam", "Etiyopya", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, dünya kahve üretiminin yaklaşık %30-35'ini karşılayan en büyük kahve üreticisidir. Bu ülkeyi Vietnam, Kolombiya ve Endonezya izlemektedir."
      },
      {
        id: "g179",
        difficulty: "easy",
        question: "Dünyanın en büyük kuşu hangisidir?",
        options: ["Devekuşu", "Albatros", "Emu", "Penguen"],
        correctIndex: 0,
        explanation: "Devekuşu (Struthio camelus), yaklaşık 2,7 metreye kadar yükselebilen ve 150 kg'ı aşabilen ağırlığıyla hem dünyanın en büyük hem de en hızlı koşan kuşudur. Uçamamasına rağmen saatte 70 km hıza ulaşabilir."
      },
      {
        id: "g180",
        difficulty: "hard",
        question: "'Pax Romana' hangi dönemde yaşanmış ve yaklaşık kaç yıl sürmüştür?",
        options: ["MÖ 509 – MÖ 264, 245 yıl", "MÖ 27 – MS 180, yaklaşık 207 yıl", "MS 285 – MS 476, 191 yıl", "MÖ 44 – MS 68, 112 yıl"],
        correctIndex: 1,
        explanation: "Pax Romana (Roma Barışı), Augustus'un tek yönetici olduğu MÖ 27'den Marcus Aurelius'un ölümüne denk gelen MS 180'e kadar süren yaklaşık 207 yıllık göreceli barış ve istikrar dönemini tanımlar. Bu dönemde Roma İmparatorluğu en geniş sınırlarına ulaşmıştır."
      },
      {
        id: "g181",
        difficulty: "easy",
        question: "Ay, Dünya'nın çevresinde tam bir tur yapmak için kaç gün harcar?",
        options: ["7 gün", "14 gün", "~27,3 gün", "~29,5 gün"],
        correctIndex: 2,
        explanation: "Ay, Dünya'nın çevresinde tam bir tur yapmak için yaklaşık 27,3 gün (siderik ay) harcar. Ancak Dünya da aynı anda Güneş'in çevresinde hareket ettiğinden, iki dolunay arasındaki süre yaklaşık 29,5 gündür (sinodik ay)."
      },
      {
        id: "g182",
        difficulty: "medium",
        question: "Venedik şehri yaklaşık kaç ada üzerine kurulmuştur?",
        options: ["57", "118", "200", "400"],
        correctIndex: 1,
        explanation: "İtalya'nın Venedik şehri, lagün üzerinde yaklaşık 118 ada üzerine inşa edilmiştir. Bu adalar 400'den fazla köprüyle birbirine bağlanmıştır. Şehrin taşıt ulaşımı yerine gondol ve vaporetto gibi su araçlarıyla sağlanması en belirgin özelliğidir."
      },
      {
        id: "g183",
        difficulty: "hard",
        question: "Heisenberg Belirsizlik İlkesi'ne göre hangisi doğrudur?",
        options: ["Işığın hem dalga hem parçacık özelliği gösterdiği", "Bir parçacığın konumu ve momentumunun aynı anda tam olarak ölçülemeyeceği", "Gözlemlenmemiş bir parçacığın birden fazla konumda bulunabileceği", "İki özdeş parçacığın aynı kuantum durumunda olamayacağı"],
        correctIndex: 1,
        explanation: "Werner Heisenberg'in 1927'de formüle ettiği belirsizlik ilkesi, bir parçacığın konum belirsizliği (Δx) ile momentum belirsizliği (Δp) çarpımının ħ/2'den küçük olamayacağını ifade eder. Bu, ölçüm hatasından değil kuantum sisteminin doğasından kaynaklanan bir sınırlılıktır."
      },
      {
        id: "g184",
        difficulty: "medium",
        question: "Uluslararası Uzay İstasyonu (ISS) Dünya'nın yaklaşık kaç km üzerinde yörüngede dolaşmaktadır?",
        options: ["~150 km", "~220 km", "~400 km", "~1.000 km"],
        correctIndex: 2,
        explanation: "ISS, yaklaşık 400 km yükseklikte Dünya'nın etrafında günde yaklaşık 15,5 tur atan bir yörüngede hareket eder. Astronotlar her 24 saatte 15-16 kez gündoğumu ve günbatımı yaşar."
      },
      {
        id: "g185",
        difficulty: "hard",
        question: "Küresel iklim değişikliğini düzenleyen Paris Anlaşması hangi yılda imzalanmıştır?",
        options: ["2009", "2012", "2015", "2018"],
        correctIndex: 2,
        explanation: "Paris Anlaşması, COP21 iklim zirvesinde Aralık 2015'te imzaya açılmış ve 2016'da yürürlüğe girmiştir. Anlaşma, küresel ısınmayı sanayi öncesi döneme kıyasla 1,5°C ile sınırlandırmayı hedeflemektedir."
      },
      {
        id: "g186",
        difficulty: "easy",
        question: "Ekvador'un başkenti hangisidir?",
        options: ["Guayaquil", "Quito", "Lima", "Bogotá"],
        correctIndex: 1,
        explanation: "Ekvador'un başkenti Quito, deniz seviyesinden yaklaşık 2.850 metre yükseklikte yer alarak dünyanın en yüksek resmî başkentleri arasında ikinci sırada yer alır. UNESCO Dünya Mirası Listesi'nde yer alan tarihi merkezi de mevcuttur."
      },
      {
        id: "g187",
        difficulty: "medium",
        question: "İngilizce'deki 'serendipity' kelimesi hangi ülkenin eski adından türemiştir?",
        options: ["Hindistan", "Sri Lanka", "Japonya", "Endonezya"],
        correctIndex: 1,
        explanation: "Serendipity kelimesi, Sri Lanka'nın Arapça ve Farsça'daki eski adı olan 'Serendip'ten gelmektedir. Horace Walpole, 1754'te kaleme aldığı bir mektupta beklenmedik ve tesadüfî keşifleri tanımlamak için bu kelimeyi türetmiştir."
      },
      {
        id: "g188",
        difficulty: "hard",
        question: "Bir fotonun frekansı ile enerjisi arasındaki ilişkiyi gösteren denklem hangisidir?",
        options: ["E = mc²", "E = hf", "E = ½mv²", "E = kqQ/r²"],
        correctIndex: 1,
        explanation: "E = hf denklemi, bir fotonun enerjisini (E) Planck sabiti (h = 6,626 × 10⁻³⁴ J·s) ile frekansının (f) çarpımı olarak ifade eder. Max Planck, 1900'de bu ilişkiyi keşfederek kuantum teorisinin temellerini atmıştır."
      },
      {
        id: "g189",
        difficulty: "medium",
        question: "Hangisi dört temel doğa kuvvetinden biri değildir?",
        options: ["Elektromanyetik kuvvet", "Zayıf nükleer kuvvet", "Termodinamik kuvvet", "Gravitasyon"],
        correctIndex: 2,
        explanation: "Doğada dört temel kuvvet bulunur: elektromanyetik kuvvet, zayıf nükleer kuvvet, güçlü nükleer kuvvet ve gravitasyon. 'Termodinamik kuvvet' temel bir kuvvet değil; ısı ve enerji transferini inceleyen bir fizik dalıdır."
      },
      {
        id: "g190",
        difficulty: "medium",
        question: "Antarktika'yı ilk kez gözlemleyen keşif seferi hangi ülkeye aitti?",
        options: ["Norveç", "İngiltere", "Rusya", "Amerika Birleşik Devletleri"],
        correctIndex: 2,
        explanation: "1819-1821 yılları arasında Fabian von Bellingshausen komutasındaki Rus keşif seferi, Antarktika kıtasını resmen gözlemleyen ilk keşif heyeti olarak kabul edilmektedir. Neredeyse eş zamanlı olarak Edward Bransfield (İngiliz) ve Nathaniel Palmer (Amerikalı) da kıtayı görmüştür."
      }
    ]
  },
  {
    id: "health",
    name: "Sağlık",
    icon: "heart",
    color: "#e94560",
    gradient: ["#e94560", "#b71c1c"],
    image: require("../assets/images/category_health.png"),
    questions: [
      {
        id: "h1",
        difficulty: "easy",
        question: "İnsan vücudundaki en büyük iç organ hangisidir?",
        options: ["Beyin", "Akciğer", "Karaciğer", "Böbrek"],
        correctIndex: 2,
        explanation: "Karaciğer, yaklaşık 1.5 kg ağırlığıyla insan vücudunun en büyük iç organıdır. 500'den fazla işlevi vardır; bunların başında sindirim, detoks ve protein sentezi gelir."
      },
      {
        id: "h2",
        difficulty: "easy",
        question: "Kan basıncı ölçümünde '120/80' değerindeki 80 rakamı neyi ifade eder?",
        options: ["Sistolik basıncı", "Diastolik basıncı", "Nabzı", "Oksijen doygunluğunu"],
        correctIndex: 1,
        explanation: "Diastolik basınç (80), kalbin dinlenme anındaki basıncını gösterir. Sistolik basınç (120) ise kalbin kasılma anındaki basıncıdır. Normal kan basıncı 120/80 mmHg'dir."
      },
      {
        id: "h3",
        difficulty: "easy",
        question: "Antikor üreten bağışıklık hücreleri hangileridir?",
        options: ["T lenfositleri", "B lenfositleri", "NK hücreleri", "Makrofajlar"],
        correctIndex: 1,
        explanation: "B lenfositleri (B hücreleri), antijenlere yanıt olarak antikor üreten bağışıklık sistemi hücreleridir. T hücreleri ise hücresel bağışıklıkta görev alır."
      },
      {
        id: "h4",
        difficulty: "easy",
        question: "İnsan vücudundaki en uzun kemik hangisidir?",
        options: ["Tibia", "Fibula", "Humerus", "Femur"],
        correctIndex: 3,
        explanation: "Femur (uyluk kemiği), kasıktan dize uzanan ve insan vücudunun en uzun ve en güçlü kemiğidir. Ortalama 45 cm uzunluğundadır."
      },
      {
        id: "h5",
        difficulty: "easy",
        question: "'Stres hormonu' olarak bilinen hormon hangisidir?",
        options: ["Adrenalin", "Testosteron", "Kortizol", "Serotonin"],
        correctIndex: 2,
        explanation: "Kortizol, böbreküstü bezleri tarafından salgılanan ve kronik stres durumunda yükselen hormondur. Uzun süreli yüksek kortizol seviyeleri bağışıklık sistemi ve metabolizma üzerinde olumsuz etkiler yaratır."
      },
      {
        id: "h6",
        difficulty: "easy",
        question: "Hangi vitamin eksikliği gece körlüğüne yol açar?",
        options: ["C Vitamini", "D Vitamini", "A Vitamini", "B12 Vitamini"],
        correctIndex: 2,
        explanation: "A vitamini eksikliği, retina'daki rodopsin pigmentinin oluşumunu engeller ve gece körlüğüne (niktalopi) yol açar. Şiddetli eksiklik kalıcı körlüğe neden olabilir."
      },
      {
        id: "h7",
        difficulty: "easy",
        question: "LDL kolesterolü hangi kavramla doğru eşleşmektedir?",
        options: ["İyi kolesterol", "Kötü kolesterol", "Nötr kolesterol", "Trigliserid"],
        correctIndex: 1,
        explanation: "LDL (Düşük Yoğunluklu Lipoprotein), 'kötü kolesterol' olarak bilinir çünkü damar duvarlarında plak birikmesine yol açarak kalp hastalığı riskini artırır. HDL ise 'iyi kolesterol'dür."
      },
      {
        id: "h8",
        difficulty: "easy",
        question: "Menenjit hastalığı hangi organı etkiler?",
        options: ["Akciğerler", "Kalp kasları", "Beyin zarları", "Karaciğer"],
        correctIndex: 2,
        explanation: "Menenjit, beyin ve omurilik çevresindeki koruyucu zarların (meninksler) iltihabıdır. Bakteriyel menenjit son derece ciddi olup hızlı tıbbi müdahale gerektirir."
      },
      {
        id: "h9",
        difficulty: "easy",
        question: "Normal vücut kitle indeksi (VKİ) aralığı hangisidir?",
        options: ["15 – 18.4", "18.5 – 24.9", "25 – 29.9", "30 – 34.9"],
        correctIndex: 1,
        explanation: "18.5 – 24.9 aralığı normal VKİ'yi ifade eder. 25-29.9 kilolu, 30 ve üzeri obez olarak sınıflandırılır. VKİ = Ağırlık (kg) / Boy² (m) formülüyle hesaplanır."
      },
      {
        id: "h10",
        difficulty: "easy",
        question: "Hangi organ vücutta depolanmış alyuvarları yıkar ve bağışıklığa yardımcı olur; yine de çıkarılsa da yaşanabilir?",
        options: ["Karaciğer", "Böbrek", "Dalak", "Pankreas"],
        correctIndex: 2,
        explanation: "Dalak, eskiyen alyuvarları yıkar, kan filtreler ve bağışıklık yanıtına katkı sağlar. Dalak olmadan yaşanabilir, ancak enfeksiyonlara karşı duyarlılık artar."
      },
      {
        id: "h11",
        difficulty: "easy",
        question: "İnsan vücudunda en büyük organ hangisidir?",
        options: ["Karaciğer", "Akciğer", "Beyin", "Deri"],
        correctIndex: 3,
        explanation: "Deri, ortalama 1,5-2 m² alanıyla insan vücudunun en büyük organıdır. Vücudu dış etkenlerden korur, vücut ısısını düzenler ve dokunma duyusunu sağlar."
      },
      {
        id: "h12",
        difficulty: "easy",
        question: "Hangi vitamin görme sağlığı için en önemlidir?",
        options: ["A Vitamini", "B6 Vitamini", "E Vitamini", "K Vitamini"],
        correctIndex: 0,
        explanation: "A vitamini, retina sağlığı ve gece görüşü için hayati önem taşır. Eksikliği gece körlüğüne ve ciddi vakalarda kalıcı görme kaybına yol açabilir."
      },
      {
        id: "h13",
        difficulty: "easy",
        question: "İnsan kalbi günde yaklaşık kaç kez atar?",
        options: ["50.000 kez", "75.000 kez", "100.000 kez", "150.000 kez"],
        correctIndex: 2,
        explanation: "İnsan kalbi günde yaklaşık 100.000 kez atar. Bir yaşam boyunca bu rakam 2,5 milyarın üzerine çıkar. Kalp kasılmaları, vücuda kan pompalamak için sürekli çalışır."
      },
      {
        id: "h14",
        difficulty: "easy",
        question: "Obezite için vücut kitle indeksi (VKİ) eşiği nedir?",
        options: ["25 ve üzeri", "28 ve üzeri", "30 ve üzeri", "35 ve üzeri"],
        correctIndex: 2,
        explanation: "Dünya Sağlık Örgütü'ne göre VKİ 30 ve üzerinde olan bireyler obez olarak sınıflandırılır. VKİ 25-29,9 arasındaki değerler ise fazla kilolu olarak kabul edilir."
      },
      {
        id: "h15",
        difficulty: "easy",
        question: "Hangi hastalık 'sessiz katil' olarak bilinir?",
        options: ["Diyabet", "Yüksek Tansiyon", "Kolon Kanseri", "Böbrek Yetmezliği"],
        correctIndex: 1,
        explanation: "Yüksek tansiyon (hipertansiyon), uzun süre belirti göstermeden ilerlediği için 'sessiz katil' olarak bilinir. Tedavi edilmezse kalp krizi, felç ve böbrek hasarına yol açabilir."
      },
      {
        id: "h16",
        difficulty: "easy",
        question: "İnsan vücudunda kaç tane kas bulunur?",
        options: ["300'den fazla", "400'den fazla", "600'den fazla", "900'den fazla"],
        correctIndex: 2,
        explanation: "İnsan vücudunda yaklaşık 600-650 adet kas bulunmaktadır. Bu kaslar; iskelet kasları, düz kaslar ve kalp kası olmak üzere üç grupta incelenir."
      },
      {
        id: "h17",
        difficulty: "easy",
        question: "Hangi besin proteinin en zengin kaynağıdır?",
        options: ["Peynir", "Nohut", "Et", "Soya Fasulyesi"],
        correctIndex: 3,
        explanation: "Soya fasulyesi, 100 gramında yaklaşık 36 gram protein içererek bitki bazlı protein kaynaklarının en zengini sayılmaktadır. Hayvansal kaynaklar arasında ise et ve balık öne çıkar."
      },
      {
        id: "h18",
        difficulty: "easy",
        question: "İnsan DNA'sı yaklaşık kaç gen içerir?",
        options: ["5.000-10.000", "20.000-25.000", "50.000-70.000", "100.000'den fazla"],
        correctIndex: 1,
        explanation: "İnsan genomu yaklaşık 20.000-25.000 gen içermektedir. Bu genlerin tamamı, yaklaşık 3 milyar baz çiftinden oluşan DNA dizisinde kodlanmıştır."
      },
      {
        id: "h19",
        difficulty: "easy",
        question: "Hangi organ kanı temizler ve filtreler?",
        options: ["Akciğer", "Karaciğer", "Böbrek", "Dalak"],
        correctIndex: 2,
        explanation: "Böbrekler, kanı süzerek atık maddeleri ve fazla suyu idrar olarak dışarı atar. Günde yaklaşık 200 litre kan filtreleyen böbrekler, vücudun sıvı ve elektrolit dengesini sağlar."
      },
      {
        id: "h20",
        difficulty: "easy",
        question: "Kaç tür kan hücresi vardır?",
        options: ["2", "3", "4", "5"],
        correctIndex: 1,
        explanation: "Kan; kırmızı kan hücreleri (eritrositler), beyaz kan hücreleri (lökositler) ve trombositler (kan pulcukları) olmak üzere üç temel hücre türü içerir."
      },
      {
        id: "h21",
        difficulty: "easy",
        question: "Hangi vitamin pıhtılaşmayı destekler?",
        options: ["A Vitamini", "C Vitamini", "D Vitamini", "K Vitamini"],
        correctIndex: 3,
        explanation: "K vitamini, kan pıhtılaşması için gerekli proteinlerin üretiminde kritik rol oynar. Eksikliği aşırı kanamaya yol açabilir. Yeşil yapraklı sebzeler K vitaminin iyi kaynağıdır."
      },
      {
        id: "h22",
        difficulty: "easy",
        question: "Grip aşısı hangi sıklıkla yapılmalıdır?",
        options: ["Her 5 yılda bir", "Her 2 yılda bir", "Her yıl", "Yalnızca bir kez"],
        correctIndex: 2,
        explanation: "Grip virüsü her yıl mutasyon geçirdiği için grip aşısı her yıl yenilenmesi önerilmektedir. Sağlık otoriteleri, mevsimsel grip aşısını özellikle risk grubundakilere her yıl önerir."
      },
      {
        id: "h23",
        difficulty: "easy",
        question: "İnsan vücudunda en uzun kemik hangisidir?",
        options: ["Humerus (Üst Kol Kemiği)", "Femur (Uyluk Kemiği)", "Tibia (Kaval Kemiği)", "Radius (Ön Kol Kemiği)"],
        correctIndex: 1,
        explanation: "Femur (uyluk kemiği), insan vücudundaki en uzun ve en güçlü kemiktir. Kalça eklemini diz eklemine bağlar ve ortalama vücut boyunun yaklaşık dörtte birine eşittir."
      },
      {
        id: "h24",
        difficulty: "easy",
        question: "Aşı hangi prensiple çalışır?",
        options: ["Bakteri öldürür", "Ağrıyı keser", "Bağışıklık sistemi eğitir", "Vücut ısısını düşürür"],
        correctIndex: 2,
        explanation: "Aşılar, bağışıklık sistemine hastalık etkenini (veya onun zararsız bir kopyasını) tanıtarak gerçek bir enfeksiyona karşı hazır hale gelir. Böylece vücut, ileride maruz kalırsa hızla savunma üretebilir."
      },
      {
        id: "h25",
        difficulty: "easy",
        question: "Hangi organ vücudun en büyük iç organıdır?",
        options: ["Kalp", "Akciğer", "Karaciğer", "Pankreas"],
        correctIndex: 2,
        explanation: "Karaciğer, yaklaşık 1,5 kg ağırlığıyla vücudun en büyük iç organıdır. Toksinlerin arındırılması, protein üretimi ve metabolizma gibi 500'den fazla işlevi yerine getirir."
      },
      {
        id: "h26",
        difficulty: "easy",
        question: "Hangi besin tipi 'iyi kolesterol' (HDL) seviyesini artırır?",
        options: ["Trans yağlar", "Doymuş yağlar", "Doymamış yağlar", "İşlenmiş şeker"],
        correctIndex: 2,
        explanation: "Zeytinyağı, avokado, fındık ve yağlı balıklardaki doymamış yağlar, iyi kolesterol (HDL) seviyesini artırarak kalp sağlığını korumaya yardımcı olur."
      },
      {
        id: "h27",
        difficulty: "easy",
        question: "Hangi vitamin eksikliği raşitizme neden olur?",
        options: ["A Vitamini", "B12 Vitamini", "C Vitamini", "D Vitamini"],
        correctIndex: 3,
        explanation: "D vitamini eksikliği; çocuklarda raşitizm, yetişkinlerde ise osteomalazi (kemik yumuşaması) ve osteoporoza yol açar. Kalsiyum emilimi için D vitamini gereklidir."
      },
      {
        id: "h28",
        difficulty: "easy",
        question: "Normal kan basıncı değeri nedir?",
        options: ["80/60 mmHg", "100/70 mmHg", "120/80 mmHg", "140/90 mmHg"],
        correctIndex: 2,
        explanation: "Normal kan basıncı değeri 120/80 mmHg olarak kabul edilir. 140/90 ve üzerindeki değerler hipertansiyon (yüksek tansiyon) olarak sınıflandırılır."
      },
      {
        id: "h29",
        difficulty: "easy",
        question: "Hangi vitamin C vitaminiyle birlikte demir emilimini artırır?",
        options: ["A Vitamini", "C Vitamini", "D Vitamini", "E Vitamini"],
        correctIndex: 1,
        explanation: "C vitamini, bitkisel kaynaklardaki demir emilimini önemli ölçüde artırır. Demir içeren besinlerle birlikte C vitamini tüketen kişiler, demiri daha etkin emebilir."
      },
      {
        id: "h30",
        difficulty: "easy",
        question: "Hangi hastalık insülin direnciyle ortaya çıkar?",
        options: ["Tip 1 Diyabet", "Tip 2 Diyabet", "Hipertansiyon", "Osteoporoz"],
        correctIndex: 1,
        explanation: "Tip 2 diyabet, vücudun insüline yeterince tepki vermemesinden (insülin direnci) kaynaklanan kronik bir hastalıktır. Yaşam tarzı değişiklikleri ve ilaç tedavisiyle yönetilebilir."
      },
      {
        id: "h31",
        difficulty: "easy",
        question: "İnsan vücudunda kaç litre kan bulunur?",
        options: ["2-3 litre", "4-6 litre", "7-8 litre", "9-10 litre"],
        correctIndex: 1,
        explanation: "Ortalama bir yetişkinin vücudunda yaklaşık 4-6 litre kan bulunur. Bu miktar, vücut ağırlığının yaklaşık yüzde yedisini oluşturur ve kişiden kişiye değişir."
      },
      {
        id: "h32",
        difficulty: "easy",
        question: "İnsülin hormonu hangi organ tarafından üretilir?",
        options: ["Karaciğer", "Böbrek", "Pankreas", "Tiroit"],
        correctIndex: 2,
        explanation: "İnsülin, pankreas bezindeki Langerhans adacıklarındaki beta hücreleri tarafından üretilir. Kan şekerini düzenleyen bu hormon, hücrelerin glukozu enerji olarak kullanmasını sağlar."
      },
      {
        id: "h33",
        difficulty: "easy",
        question: "Hangi mineral eksikliği guatr hastalığına (tiroit bezi büyümesine) yol açar?",
        options: ["Demir", "Çinko", "İyot", "Kalsiyum"],
        correctIndex: 2,
        explanation: "İyot eksikliği, tiroit bezinin tiroksin hormonu üretmek için aşırı büyümesine neden olur; bu durum guatr olarak bilinir. İyotlu tuz kullanımı bu sorunu büyük ölçüde önlemiştir."
      },
      {
        id: "h34",
        difficulty: "easy",
        question: "Hangi vitamin eksikliği 'iskorbüt' (scurvy) hastalığına yol açar?",
        options: ["A Vitamini", "B12 Vitamini", "C Vitamini", "E Vitamini"],
        correctIndex: 2,
        explanation: "C vitamini (askorbik asit) eksikliği iskorbüte yol açar. Kolajen sentezi için gerekli olan C vitamini eksikliğinde dişetleri kanar, yaralar iyileşmez ve eklem ağrısı oluşur."
      },
      {
        id: "h35",
        difficulty: "easy",
        question: "Yetişkinler için ideal gece uykusu süresi kaç saattir?",
        options: ["4–5 saat", "6–7 saat", "7–9 saat", "10–12 saat"],
        correctIndex: 2,
        explanation: "Dünya Sağlık Örgütü ve uyku uzmanları, yetişkinler için geceleri 7-9 saat uyku önermektedir. Yeterli uyku; bağışıklık, hafıza, hormon dengesi ve zihinsel sağlık için hayati önem taşır."
      },
      {
        id: "h36",
        difficulty: "easy",
        question: "Hemoglobinin görevi nedir?",
        options: ["Kan pıhtılaştırma", "Bakteri öldürme", "Oksijen taşıma", "Sindirim yardımı"],
        correctIndex: 2,
        explanation: "Hemoglobin, kırmızı kan hücrelerinde bulunan demir içeren bir proteindir. Akciğerlerden oksijeni alarak dokulara taşır; karbondioksiti de geri getirerek dışarı atılmasını sağlar."
      },
      {
        id: "h37",
        difficulty: "easy",
        question: "Bakteri ile virüs arasındaki temel fark nedir?",
        options: ["Bakteri görünmez, virüs görünür", "Bakteri canlı hücre, virüs hücre değil", "Virüsler antibiyotiğe yanıt verir", "Bakteriler yalnızca hayvanlara bulaşır"],
        correctIndex: 1,
        explanation: "Bakteriler, kendi başlarına çoğalabilen tek hücreli canlılardır. Virüsler ise genetik malzemeyi protein kılıfa saran ve ancak canlı hücre içinde çoğalabilen yapılardır; bu nedenle antibiyotikler virüslere etkisizdir."
      },
      {
        id: "h38",
        difficulty: "medium",
        question: "Kollajen hangi yapılarda bol miktarda bulunur?",
        options: ["Sinir hücreleri", "Deri, kemik ve eklemler", "Akciğer dokusu", "Kan plazması"],
        correctIndex: 1,
        explanation: "Kollajen, vücudun en bol bulunan proteinidir ve deri, kemik, kıkırdak, tendon ve bağ dokusunun yapısını oluşturur. Yaşla birlikte kollajen üretimi azalır ve bu deri kırışıklıklarına yol açar."
      },
      {
        id: "h39",
        difficulty: "medium",
        question: "Probiyotikler nedir?",
        options: ["Zararlı bakterileri öldüren ilaçlar", "Bağışıklığı baskılayan maddeler", "Bağırsaklarda yaşayan faydalı mikroorganizmalar", "Sindirim enzimi takviyeleri"],
        correctIndex: 2,
        explanation: "Probiyotikler, bağırsak sağlığını destekleyen canlı faydalı mikroorganizmalardır. Yoğurt, kefir ve lahana turşusu gibi fermente gıdalarda doğal olarak bulunur; sindirim, bağışıklık ve ruh halini olumlu etkiler."
      },
      {
        id: "h40",
        difficulty: "medium",
        question: "Tip 1 ve Tip 2 diyabeti birbirinden ayıran temel özellik nedir?",
        options: ["Tip 1 şeker yemekten olur", "Tip 1'de pankreas insülin üretemez", "Tip 2'de insülin hiç yoktur", "İkisi de aynı tedaviye yanıt verir"],
        correctIndex: 1,
        explanation: "Tip 1 diyabette bağışıklık sistemi pankreasin insülin üreten beta hücrelerine saldırır; insülin üretimi durur. Tip 2 diyabette ise pankreas insülin üretir, ancak vücut buna yeterince yanıt vermez (insülin direnci)."
      },
      {
        id: "h41",
        difficulty: "medium",
        question: "Alzheimer hastalığının temel özelliği nedir?",
        options: ["Kalp kaslarının zayıflaması", "Karaciğer yetmezliği", "Beyin hücrelerinin ilerleyici kaybı", "Kemik erimesi"],
        correctIndex: 2,
        explanation: "Alzheimer, beyin hücrelerinin ve aralarındaki bağlantıların ilerleyici biçimde yitirildiği bir demans türüdür. Bellek kaybı, dil güçlüğü ve davranış değişiklikleriyle kendini gösterir; yaşlılarda en sık görülen demans nedenidir."
      },
      {
        id: "h42",
        difficulty: "medium",
        question: "Omega-3 yağ asitleri en çok hangi besinlerde bulunur?",
        options: ["Kırmızı et ve tereyağı", "Yağlı balık ve ceviz", "Beyaz ekmek ve pirinç", "Meyve suları"],
        correctIndex: 1,
        explanation: "Omega-3 yağ asitleri başta somon, uskumru, sardalya gibi yağlı balıklarda; ayrıca ceviz, keten tohumu ve chia tohumunda bol bulunur. Kalp sağlığı, beyin işlevi ve iltihaplanmayı azaltmada kritik rol oynar."
      },
      {
        id: "h43",
        difficulty: "medium",
        question: "Serotonin hormonu hangi işlevle en çok ilişkilendirilir?",
        options: ["Kan şekeri regülasyonu", "Kemik yoğunluğu", "Ruh hali ve mutluluk hissi", "Sindirim enzimleri"],
        correctIndex: 2,
        explanation: "Serotonin, 'mutluluk hormonu' olarak da bilinen bir nörotransmiterdir. Ruh hali, iştah ve uyku düzenlemesinde kritik rol oynar. Düşük seratonin seviyeleri depresyon ve anksiyeteyle ilişkilidir."
      },
      {
        id: "h44",
        difficulty: "medium",
        question: "Alerji nedir?",
        options: ["Zararlı maddelere karşı bağışıklık tepkisi", "Zararsız maddelere karşı bağışıklık sistemi aşırı tepkisi", "Bakteri enfeksiyonu", "Hormon bozukluğu"],
        correctIndex: 1,
        explanation: "Alerji, bağışıklık sisteminin genellikle zararsız olan maddelere (polen, toz, besinler, hayvan tüyleri) aşırı tepki vermesi sonucu ortaya çıkar. Hapşırma, kaşıntı, döküntü ve şiddetli vakalarda anafilaksi görülebilir."
      },
      {
        id: "h45",
        difficulty: "medium",
        question: "Normal insan vücut sıcaklığı kaç derecedir?",
        options: ["35,0°C", "36,5–37,0°C", "38,5°C", "39,0°C"],
        correctIndex: 1,
        explanation: "Normal vücut sıcaklığı ortalama 36,5–37,0°C arasındadır. 38°C ve üzerindeki değerler ateş olarak kabul edilir. Sabahları biraz daha düşük, akşamları biraz daha yüksek olabilir."
      },
      {
        id: "h46",
        difficulty: "medium",
        question: "Kemik iliğinin temel işlevi nedir?",
        options: ["Yağ depolamak", "Kalsiyum emmek", "Kan hücresi üretmek", "Sinir iletimi sağlamak"],
        correctIndex: 2,
        explanation: "Kemik iliği, kırmızı ve beyaz kan hücrelerini ile trombositleri üreten dokudur. Kırmızı kemik iliği özellikle omurga, leğen kemiği ve göğüs kemiğinde bulunur."
      },
      {
        id: "h47",
        difficulty: "medium",
        question: "Folik asit (B9 vitamini) özellikle hangi grup için kritik önemdedir?",
        options: ["Yaşlı erkekler", "Sporcu kadınlar", "Hamile kadınlar", "Diyabetliler"],
        correctIndex: 2,
        explanation: "Folik asit, özellikle hamileliğin ilk üç ayında bebekte nöral tüp defektlerini (omurga ve beyin gelişim bozuklukları) önlemek için kritik önemdedir. Doktorlar hamile kalmayı planlayan kadınlara da folik asit önermektedir."
      },
      {
        id: "h48",
        difficulty: "medium",
        question: "Antioksidanlar ne işe yarar?",
        options: ["Kan basıncını artırır", "Serbest radikallerin hücre hasarını önler", "İnsülin üretimini artırır", "Kemik yoğunluğunu azaltır"],
        correctIndex: 1,
        explanation: "Antioksidanlar, hücrelere zarar veren serbest radikalleri nötralize ederek yaşlanmayı yavaşlatır ve kanser, kalp hastalığı gibi kronik hastalıklardan korur. C, E vitaminleri ve beta-karoten başlıca antioksidanlardır."
      },
      {
        id: "h49",
        difficulty: "medium",
        question: "Hipotermi ne anlama gelir?",
        options: ["Kan şekerinin yükselmesi", "Vücut sıcaklığının tehlikeli biçimde düşmesi", "Tansiyon yükselmesi", "Aşırı terleme"],
        correctIndex: 1,
        explanation: "Hipotermi, vücut sıcaklığının 35°C'nin altına düşmesi durumudur. Soğuk suya maruz kalma, uzun süre soğuk havada kalma gibi durumlarda ortaya çıkar. Ciddi vakalarda ölüme neden olabilir."
      },
      {
        id: "h50",
        difficulty: "medium",
        question: "Menopoz ne anlama gelir?",
        options: ["İlk âdet görme", "Âdet döngüsünün kalıcı olarak sona ermesi", "Hormon tedavisi", "Doğurganlık dönemi"],
        correctIndex: 1,
        explanation: "Menopoz, genellikle 45-55 yaş arasında kadınlarda âdet döngüsünün kalıcı olarak sona ermesidir. Yumurtalıkların östrojen üretiminin azalmasıyla oluşur ve sıcak basması, uyku sorunları gibi belirtilere yol açar."
      },
      {
        id: "h51",
        difficulty: "medium",
        question: "Açlık kan şekerinin normal değeri nedir?",
        options: ["40–60 mg/dL", "70–100 mg/dL", "120–140 mg/dL", "150–180 mg/dL"],
        correctIndex: 1,
        explanation: "Açlık kan şekerinin normal değeri 70–100 mg/dL arasındadır. 100–125 mg/dL arası prediyabet, 126 mg/dL ve üzeri ise diyabet olarak kabul edilir. Kan şekeri takibi diyabet yönetiminde hayati önem taşır."
      },
      {
        id: "h52",
        difficulty: "medium",
        question: "Hangi vitamin güneş ışığına maruz kalınarak cilt tarafından üretilir?",
        options: ["A Vitamini", "B12 Vitamini", "C Vitamini", "D Vitamini"],
        correctIndex: 3,
        explanation: "D vitamini, cildin ultraviyole B (UVB) ışınlarına maruz kalmasıyla sentezlediği tek vitaminidir. Kemik yoğunluğu, bağışıklık sistemi ve kas sağlığı için kritik öneme sahip bu vitaminin eksikliği dünya genelinde yaygındır."
      },
      {
        id: "h53",
        difficulty: "medium",
        question: "İnsülin hormonu hangi organ tarafından üretilir?",
        options: ["Karaciğer", "Böbrek", "Pankreas", "Dalak"],
        correctIndex: 2,
        explanation: "İnsülin, pankreastaki Langerhans adacıklarının beta hücreleri tarafından üretilir. Kan şekerini düzenleyen bu hormon, diyabette yetersiz salgılanır ya da vücut hücreleri tarafından etkili kullanılamaz."
      },
      {
        id: "h54",
        difficulty: "medium",
        question: "Kanda oksijen taşıyan protein hangisidir?",
        options: ["Fibrinojen", "Albümin", "Hemoglobin", "Globulin"],
        correctIndex: 2,
        explanation: "Hemoglobin, kırmızı kan hücrelerinde (eritrositlerde) bulunan ve demiri sayesinde oksijen bağlayan proteindir. Her hemoglobin molekülü dört oksijen molekülü taşıyabilir; kanın kırmızı rengini de hemoglobindeki demir verir."
      },
      {
        id: "h55",
        difficulty: "medium",
        question: "İlk başarılı aşıyı hangi hastalığa karşı kim geliştirmiştir?",
        options: ["Louis Pasteur – kuduz", "Edward Jenner – çiçek hastalığı", "Alexander Fleming – veba", "Joseph Lister – tifo"],
        correctIndex: 1,
        explanation: "İngiliz doktor Edward Jenner, 1796'da inek çiçeği virusunu kullanarak çiçek hastalığına karşı ilk aşıyı geliştirdi. Bu çalışma modern immünolojinin doğuşunu simgeler; Jenner 'aşının babası' olarak anılmaktadır."
      },
      {
        id: "h56",
        difficulty: "medium",
        question: "Yetişkin bir insanın istirahat halindeki normal kalp atış hızı hangi aralıktadır?",
        options: ["30–50 atım/dk", "60–100 atım/dk", "110–130 atım/dk", "140–160 atım/dk"],
        correctIndex: 1,
        explanation: "Yetişkinlerde normal istirahat kalp hızı dakikada 60–100 atım arasındadır. 60'ın altındaki hız bradikardi, 100'ün üzerindeki hız ise taşikardi olarak adlandırılır. Düzenli sporcuların kalp hızı genellikle daha düşüktür."
      },
      {
        id: "h57",
        difficulty: "medium",
        question: "Alzheimer hastalığı hangi sistemi etkiler?",
        options: ["Sindirim sistemi", "Solunum sistemi", "Merkezi sinir sistemi", "Dolaşım sistemi"],
        correctIndex: 2,
        explanation: "Alzheimer, beyni etkileyen ve giderek ilerleyen bir nörodejeneratif hastalıktır. Sinir hücrelerinin ve aralarındaki bağlantıların yok olmasıyla hafıza kaybı, düşünce bozukluğu ve davranış değişiklikleri ortaya çıkar."
      },
      {
        id: "h58",
        difficulty: "medium",
        question: "Apandis (appendiks) vücudun hangi bölgesinde yer alır?",
        options: ["Sol üst karın", "Sağ alt karın", "Göğüs kafesi", "Kasık"],
        correctIndex: 1,
        explanation: "Apandis, kalın bağırsağın (çekumun) başlangıcına ekli küçük, parmak biçimindeki bir uzantıdır ve sağ alt karın bölgesinde yer alır. İltihaplanması durumunda apandisit olarak bilinen tablo ortaya çıkar ve cerrahi müdahale gerekebilir."
      },
      {
        id: "h59",
        difficulty: "medium",
        question: "Hangi vitamin eksikliği iskorbüt hastalığına yol açar?",
        options: ["A Vitamini", "B12 Vitamini", "C Vitamini", "D Vitamini"],
        correctIndex: 2,
        explanation: "İskorbüt, C vitamini (askorbik asit) eksikliğinden kaynaklanan bir hastalıktır. Diş eti kanaması, diş dökülmesi ve yara iyileşmesinin bozulması başlıca belirtilerdir. Uzun deniz yolculukları yapan denizcilerde tarihsel olarak sık görülmüştür."
      },
      {
        id: "h60",
        difficulty: "medium",
        question: "Besin maddelerinin sindirilip kana emildiği organ hangisidir?",
        options: ["Mide", "İnce bağırsak", "Kalın bağırsak", "Pankreas"],
        correctIndex: 1,
        explanation: "Besinlerin büyük bölümü, yaklaşık 6–7 m uzunluğundaki ince bağırsakta sindirilir ve bağırsak duvarındaki villüsler aracılığıyla kana emilir. Mide sindirime yardımcı olsa da asıl emilim ince bağırsakta gerçekleşir."
      },
      {
        id: "h61",
        difficulty: "medium",
        question: "Hangi kan grubu 'evrensel verici' olarak bilinir?",
        options: ["A Rh+", "B Rh–", "AB Rh+", "0 Rh–"],
        correctIndex: 3,
        explanation: "0 Rh– (0 negatif) kan grubu, yüzey antijeni taşımadığı için herkese verilebilir; bu nedenle 'evrensel verici' olarak bilinir. Acil durumlarda kan grubunu bilmeden transfüzyon yapılması gerektiğinde tercih edilir."
      },
      {
        id: "h62",
        difficulty: "medium",
        question: "Grip hangi virüs türünden kaynaklanır?",
        options: ["Rhinovirüs", "Koronavirüs", "İnfluenza virüsü", "Adenovirüs"],
        correctIndex: 2,
        explanation: "Grip (influenza), İnfluenza virüsü tarafından oluşturulan bulaşıcı bir solunum yolu hastalığıdır. A, B ve C olmak üzere üç tipi bulunan virüsün A ve B tipleri mevsimsel salgınlara yol açar; aşılama temel koruma yöntemidir."
      },
      {
        id: "h63",
        difficulty: "medium",
        question: "İnsülin hangi organ tarafından üretilir?",
        options: ["Karaciğer", "Böbrek", "Pankreas", "Dalak"],
        correctIndex: 2,
        explanation: "İnsülin, pankreasın Langerhans adacıklarındaki beta hücreleri tarafından üretilir. Kan şekerini düzenleyen bu hormon, glikozun hücrelere girerek enerji olarak kullanılmasını sağlar. İnsülin yetersizliği veya direnci diyabete yol açar."
      },
      {
        id: "h64",
        difficulty: "medium",
        question: "Demir emilimini artırmak için hangi vitamin birlikte alınmalıdır?",
        options: ["A vitamini", "B12 vitamini", "C vitamini", "D vitamini"],
        correctIndex: 2,
        explanation: "C vitamini (askorbik asit), bitkisel kaynaklı demirin bağırsakta emilimini belirgin biçimde artırır. Demir zengini besinleri portakal suyu veya C vitamini takviyeleriyle tüketmek emilimi birkaç kat yükseltebilir."
      },
      {
        id: "h65",
        difficulty: "medium",
        question: "Kalp kaç odacıktan oluşur?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation: "İnsan kalbi 4 odacıktan oluşur: sağ ve sol kulakçık (atrium) ile sağ ve sol karıncık (ventrikül). Sağ taraf kirli kanı akciğerlere pompalar; sol taraf ise akciğerlerden gelen temiz kanı tüm vücuda iletir."
      },
      {
        id: "h66",
        difficulty: "medium",
        question: "İnsan vücudundaki en uzun kemik hangisidir?",
        options: ["Kaval kemiği (tibia)", "Kol kemiği (humerus)", "Uyluk kemiği (femur)", "Omurga"],
        correctIndex: 2,
        explanation: "Uyluk kemiği (femur), insan vücudundaki en uzun ve en güçlü kemiktir. Yetişkinlerde ortalama 45–50 cm uzunluğa sahip olan femur, vücut ağırlığının büyük bölümünü taşır ve yürüme, koşma gibi hareketlerde kritik rol üstlenir."
      },
      {
        id: "h67",
        difficulty: "medium",
        question: "Antibiyotikler hangi tür hastalıklara karşı etkilidir?",
        options: ["Viral hastalıklara", "Bakteriyel hastalıklara", "Mantar hastalıklarına", "Paraziter hastalıklara"],
        correctIndex: 1,
        explanation: "Antibiyotikler yalnızca bakteriyel enfeksiyonlara karşı etkilidir; grip ve soğuk algınlığı gibi viral hastalıklarda işe yaramaz. Gereksiz antibiyotik kullanımı bakteri direncini artırdığından doktor önerisi olmadan kullanılmamalıdır."
      },
      {
        id: "h68",
        difficulty: "medium",
        question: "Sağlıklı bir yetişkinde normal kan basıncı değeri ne olmalıdır?",
        options: ["80/60 mmHg", "120/80 mmHg", "160/100 mmHg", "90/50 mmHg"],
        correctIndex: 1,
        explanation: "Sağlıklı yetişkinlerde ideal kan basıncı 120/80 mmHg olarak kabul edilir. Birinci değer (sistolik) kalbin kasılması sırasındaki basıncı, ikinci değer (diyastolik) ise gevşeme sırasındaki basıncı gösterir. 140/90 mmHg ve üzeri hipertansiyon olarak tanımlanır."
      },
      {
        id: "h69",
        difficulty: "medium",
        question: "D vitamini vücutta ağırlıklı olarak hangi kaynaktan sentezlenir?",
        options: ["Besinlerden", "Güneş ışığından", "Bağırsak bakterilerinden", "Karaciğerden"],
        correctIndex: 1,
        explanation: "D vitamini, derinin UVB ışınlarına maruz kalmasıyla sentezlenir. Yağlı balık ve takviye ürünler de D vitamini kaynağı olmakla birlikte güneş ışığı en önemli kaynaktır. D vitamini eksikliği kemik erimesi (osteoporoz) ve bağışıklık sorunlarına yol açabilir."
      },
      {
        id: "h70",
        difficulty: "medium",
        question: "Alzheimer hastalığı öncelikle neyi etkiler?",
        options: ["Görme yetisini", "Hafıza ve bilişsel işlevleri", "Kas gücünü", "Kalp atışlarını"],
        correctIndex: 1,
        explanation: "Alzheimer hastalığı, beyinde protein birikimlerinin (amiloid plakaları ve tau yumakları) nöronlara zarar vermesiyle ortaya çıkan ilerleyici bir bunama türüdür. Öncelikle kısa süreli hafızayı etkiler; zamanla dil, yargılama ve günlük işlev yetenekleri de bozulur."
      },
      {
        id: "h71",
        difficulty: "medium",
        question: "REM uykusu nedir?",
        options: ["Derin uyku evresi", "Hızlı göz hareketi evresi", "Hafif uyku evresi", "Uyku paralizi evresi"],
        correctIndex: 1,
        explanation: "REM (Rapid Eye Movement – Hızlı Göz Hareketi) uykusu, gözlerin hızla hareket ettiği, beyin aktivitesinin yüksek olduğu ve rüyaların büyük bölümünün görüldüğü uyku evresidir. Hafıza pekiştirme ve duygusal işleme açısından kritik öneme sahiptir."
      },
      {
        id: "h72",
        difficulty: "medium",
        question: "Diyabetin iki ana türü hangileridir?",
        options: ["Tip A ve Tip B", "Tip 1 ve Tip 2", "Akut ve kronik", "Birincil ve ikincil"],
        correctIndex: 1,
        explanation: "Diyabetin iki ana türü Tip 1 ve Tip 2'dir. Tip 1'de bağışıklık sistemi insülin üreten hücreleri yok eder; Tip 2'de ise vücut insülini yeterince üretemez ya da etkili kullanamaz. Tip 2 diyabet, hareketsiz yaşam tarzı ve obeziteyle yakından ilişkilidir."
      },
      {
        id: "h73",
        difficulty: "medium",
        question: "Omega-3 yağ asitleri ağırlıklı olarak hangi besinlerde bulunur?",
        options: ["Kırmızı et ve tam tahıllarda", "Yağlı balık ve cevizde", "Süt ürünleri ve meyvelerde", "Baklagiller ve sebzelerde"],
        correctIndex: 1,
        explanation: "Omega-3 yağ asitleri somon, uskumru, sardalya gibi yağlı balıklarda ve cevizde bolca bulunur. Kalp-damar sağlığını destekleyen bu esansiyel yağlar, beyni ve gözleri korur; ayrıca iltihaplanmayı azaltan etkilere sahiptir."
      },
      {
        id: "h74",
        difficulty: "medium",
        question: "BMI (Vücut Kitle İndeksi) neyi ölçer?",
        options: ["Kas yüzdesini", "Kemik yoğunluğunu", "Boy ve ağırlığa göre vücut yağ tahminini", "Kan şekerini"],
        correctIndex: 2,
        explanation: "BMI (Body Mass Index – Vücut Kitle İndeksi), kilogram cinsinden ağırlığın metre cinsinden boyun karesine bölünmesiyle hesaplanır. 18,5–24,9 arası normal, 25–29,9 fazla kilolu, 30 ve üzeri obez olarak sınıflandırılır."
      },
      {
        id: "h75",
        difficulty: "hard",
        question: "Stres hormonu olarak bilinen hormon hangisidir?",
        options: ["Serotonin", "Dopamin", "Kortizol", "Melatonin"],
        correctIndex: 2,
        explanation: "Kortizol, böbreküstü bezlerinden salgılanan ve 'stres hormonu' olarak bilinen bir kortikosteroiddir. Stres, tehlike veya enfeksiyon gibi durumlarda salgısı artar; enerji salınımını, bağışıklık yanıtını ve iltihaplanmayı düzenler."
      },
      {
        id: "h76",
        difficulty: "hard",
        question: "Sağlıklı bir yetişkinin vücudunda kaç kemik bulunur?",
        options: ["150", "175", "206", "250"],
        correctIndex: 2,
        explanation: "Yetişkin insan iskeleti 206 kemikten oluşur. Bebekler yaklaşık 270–300 kemikle doğar; büyüme sürecinde bazı kemikler birbirine kaynaşır ve erişkin sayısına ulaşılır."
      },
      {
        id: "h77",
        difficulty: "hard",
        question: "Gece körlüğünü önlemek için hangi vitamin özellikle gereklidir?",
        options: ["C vitamini", "D vitamini", "A vitamini", "E vitamini"],
        correctIndex: 2,
        explanation: "A vitamini (retinol), gözün ışığa duyarlı pigmenti olan rodopsinin üretimi için vazgeçilmezdir. Eksikliğinde gece görüşü bozulur ve ilerleyen dönemde kalıcı körlüğe kadar gidebilen xeroftalmiye neden olabilir."
      },
      {
        id: "h78",
        difficulty: "hard",
        question: "Kemik sağlığı için en önemli mineral hangisidir?",
        options: ["Demir", "Potasyum", "Magnezyum", "Kalsiyum"],
        correctIndex: 3,
        explanation: "Kalsiyum, kemik ve dişlerin yapısını oluşturan temel mineraldir. Yetişkinlerin günde 1.000–1.200 mg kalsiyum alması önerilir. Süt ürünleri, yeşil yapraklı sebzeler ve badem iyi kalsiyum kaynaklarıdır."
      },
      {
        id: "h79",
        difficulty: "hard",
        question: "Kan şekerini düzenleyen temel hormon hangisidir?",
        options: ["Glukagon", "Adrenalin", "İnsülin", "Tiroksin"],
        correctIndex: 2,
        explanation: "İnsülin, kan şekeri yükseldiğinde pankreas tarafından salgılanır ve hücrelerin glikozu almasını sağlayarak kan şekerini düşürür. Karşı etkili hormon glukagondur; kan şekeri düştüğünde karaciğerden glikoz salınımını tetikler."
      },
      {
        id: "h80",
        difficulty: "hard",
        question: "İnsan beyninin ortalama ağırlığı ne kadardır?",
        options: ["700 gram", "1.400 gram", "2.100 gram", "3.000 gram"],
        correctIndex: 1,
        explanation: "Yetişkin insan beyni ortalama 1.300–1.400 gram ağırlığındadır. Vücut ağırlığının yaklaşık %2'sini oluşturmasına karşın toplam enerji tüketiminin yaklaşık %20'sini kullanır; yaklaşık 86 milyar nöron barındırdığı tahmin edilmektedir."
      },
      {
        id: "h81",
        difficulty: "hard",
        question: "Bağışıklık sisteminde T hücreleri nerede olgunlaşır?",
        options: ["Kemik iliğinde", "Dalakta", "Timüs bezinde", "Lenf düğümlerinde"],
        correctIndex: 2,
        explanation: "T hücreleri (T lenfositler) kemik iliğinde üretilir, ancak göğüs kemiği arkasındaki timüs bezinde olgunlaşır. Timüs, bu hücreler arasından yabancı antijenlere karşı savaşabilecek olanları seçer."
      },
      {
        id: "h82",
        difficulty: "hard",
        question: "İnsan vücudundaki en küçük kemik hangisidir?",
        options: ["Kürek kemiği", "Diz kapağı", "Üzengi kemiği", "Köprücük kemiği"],
        correctIndex: 2,
        explanation: "Orta kulakta bulunan üzengi kemiği (stapes), yaklaşık 3 mm uzunluğuyla insan vücudunun en küçük kemiğidir. Çekiç ve örs kemikleriyle birlikte işitme sürecinde sesi iç kulağa ileten üç kemikten birini oluşturur."
      },
      {
        id: "h83",
        difficulty: "hard",
        question: "Hangi vitamin eksikliği gece körlüğüne neden olabilir?",
        options: ["B12 vitamini", "C vitamini", "D vitamini", "A vitamini"],
        correctIndex: 3,
        explanation: "A vitamini (retinol) eksikliği, retinada bulunan rodopsin pigmentinin üretimini azaltarak gece görüşünü bozar ve gece körlüğüne (niktalopi) yol açabilir. A vitamini; havuç, ıspanak ve karaciğer gibi besinlerde bol miktarda bulunmaktadır."
      },
      {
        id: "h84",
        difficulty: "hard",
        question: "C vitamini eksikliği hangi hastalığa yol açar?",
        options: ["Raşitizm", "Pellegra", "İskorbüt", "Beriberi"],
        correctIndex: 2,
        explanation: "C vitamini (askorbik asit) eksikliğinde diş eti kanamaları, eklem ağrıları ve yara iyileşmesinde bozukluk gibi belirtilerle kendini gösteren iskorbüt hastalığı ortaya çıkar. Tarihte uzun deniz yolculuklarında görülen iskorbüt, limon ve portakal tüketimiyle önlenebilirdi."
      },
      {
        id: "h85",
        difficulty: "hard",
        question: "İnsan vücudundaki 'insülin' hormonu hangi organ tarafından üretilir?",
        options: ["Karaciğer", "Böbrek", "Tiroid bezi", "Pankreas"],
        correctIndex: 3,
        explanation: "İnsülin, pankreastaki Langerhans adacıklarının beta hücreleri tarafından üretilen bir hormondur. Kan şekerini düzenleyen bu hormon, glikozun hücre içine alınmasını sağlar; yeterli üretilmediğinde veya etkisiz kaldığında diyabet hastalığı ortaya çıkar."
      },
      {
        id: "h86",
        difficulty: "hard",
        question: "Hangi kan grubu 'evrensel alıcı' olarak bilinir?",
        options: ["A Rh+", "B Rh-", "O Rh-", "AB Rh+"],
        correctIndex: 3,
        explanation: "AB Rh+ kan grubundaki bireyler hem A, B ve AB hem de Rh faktörü açısından uyumsuzluk riski taşımadıklarından tüm kan gruplarından kan alabilirler; bu nedenle 'evrensel alıcı' olarak adlandırılırlar. O Rh- ise 'evrensel vericiler' olarak tanımlanır."
      },
      {
        id: "h87",
        difficulty: "hard",
        question: "Röntgen ışınlarını kim keşfetmiştir?",
        options: ["Marie Curie", "Albert Einstein", "Wilhelm Conrad Röntgen", "Louis Pasteur"],
        correctIndex: 2,
        explanation: "Wilhelm Conrad Röntgen, 1895 yılında X ışınlarını (röntgen ışınları) keşfetmiş ve bu buluşuyla 1901'de ilk Nobel Fizik Ödülü'ne layık görülmüştür. X ışınları tıpta kemik kırıkları ve akciğer hastalıklarının teşhisinde yaygın biçimde kullanılmaktadır."
      },
      {
        id: "h88",
        difficulty: "hard",
        question: "İnsan kalbi dakikada ortalama kaç kez atar?",
        options: ["40-50", "60-100", "110-130", "140-160"],
        correctIndex: 1,
        explanation: "Sağlıklı bir yetişkinde istirahat hâlindeki kalp atış hızı dakikada 60-100 arasındadır ve ortalama 72 kabul edilir. Düzenli spor yapan bireylerde bu değer 50'nin altına inebilirken, stres veya egzersiz sırasında 150-200'e çıkabilir."
      },
      {
        id: "h89",
        difficulty: "hard",
        question: "Vücuttaki en uzun sinir hangisidir?",
        options: ["Ulnar sinir", "Femoral sinir", "Siyatik sinir", "Vagus siniri"],
        correctIndex: 2,
        explanation: "Siyatik sinir, bel bölgesinden başlayıp bacakların arka kısmından ayak parmaklarına uzanan yaklaşık 1 metrelik uzunluğuyla insan vücudunun en uzun siniridir. Bu sinirin sıkışması 'siyatalji' adı verilen ağrı sendromuna yol açar."
      },
      {
        id: "h90",
        difficulty: "hard",
        question: "Anjiyoplasti hangi organ için yapılan bir girişimsel işlemdir?",
        options: ["Beyin", "Karaciğer", "Böbrek", "Kalp"],
        correctIndex: 3,
        explanation: "Anjiyoplasti, daralmış veya tıkanmış koroner (kalp) atardamarlarını genişletmek amacıyla yapılan minimal invaziv bir kardiyovasküler işlemdir. Genellikle balon kateter ve stent kullanılarak gerçekleştirilen bu yöntem, kalp krizi riskini azaltır."
      },
      {
        id: "h91",
        difficulty: "hard",
        question: "Probiyotikler vücudun hangi bölgesine fayda sağlar?",
        options: ["Akciğerler", "Karaciğer", "Bağırsak florası", "Böbrekler"],
        correctIndex: 2,
        explanation: "Probiyotikler, bağırsak florasındaki (mikrobiyom) yararlı bakteri dengesini koruyan canlı mikroorganizmalardır. Yoğurt, kefir ve fermente gıdalarda bulunan probiyotikler; sindirim sağlığını destekler, bağışıklık sistemini güçlendirir ve antibiyotik sonrası flora dengesinin yeniden kurulmasına yardımcı olur."
      },
      {
        id: "h92",
        difficulty: "hard",
        question: "Kolajen proteini vücutta hangi işlevi yerine getirir?",
        options: ["Kan şekerini düzenler", "Deri, kemik ve bağ dokusunun yapısal bütünlüğünü sağlar", "Oksijen taşır", "Sinir iletimini hızlandırır"],
        correctIndex: 1,
        explanation: "Kolajen, vücuttaki en bol bulunan proteindir ve toplam protein içeriğinin yaklaşık üçte birini oluşturur. Deri, kemik, kıkırdak, tendon ve kan damarlarına yapısal destek sağlayan kolajen; yaşla birlikte üretimi azaldığından deri sarkmalarına ve eklem sorunlarına yol açabilir."
      },
      {
        id: "h93",
        difficulty: "hard",
        question: "'Hipertansiyon' ne anlama gelir?",
        options: ["Düşük kan basıncı", "Yüksek kan basıncı", "Yüksek kan şekeri", "Düşük kalp atış hızı"],
        correctIndex: 1,
        explanation: "Hipertansiyon; kan basıncının 140/90 mmHg veya üzerinde seyretmesiyle tanımlanan kronik bir durumdur. 'Sessiz katil' olarak da anılan hipertansiyon, uzun süre belirti vermeksinden ilerleyebilir ve tedavi edilmediğinde kalp krizi, inme ve böbrek yetmezliği gibi ciddi komplikasyonlara neden olabilir."
      },
      {
        id: "h94",
        difficulty: "hard",
        question: "İnsan vücudunda kaç litre kan bulunur?",
        options: ["2-3 litre", "4-6 litre", "7-9 litre", "10-12 litre"],
        correctIndex: 1,
        explanation: "Yetişkin bir insan vücudunda ortalama 4,5-6 litre kan bulunmaktadır; bu miktar vücut ağırlığının yaklaşık %7-8'ine karşılık gelir. Kan; oksijen, besin maddeleri ve hormonların taşınmasını sağlarken atık ürünlerin uzaklaştırılmasına da yardımcı olur."
      },
      {
        id: "h95",
        difficulty: "hard",
        question: "Beyin-omurilik sıvısının (BOS) temel görevi nedir?",
        options: ["Oksijen taşımak", "Beyni mekanik darbelerden korumak ve desteklemek", "Hormon üretmek", "Sinir uyarılarını iletmek"],
        correctIndex: 1,
        explanation: "Beyin-omurilik sıvısı (BOS / serebrospinal sıvı), merkezi sinir sistemini mekanik darbelere karşı korur, beyin ve omuriliğin yüzerliğini sağlar. Aynı zamanda beyin dokusundan metabolik atıkları uzaklaştırır ve intrakraniyal basıncı düzenler."
      },
      {
        id: "h96",
        difficulty: "hard",
        question: "Hangi bağışıklık hücreleri antikor üretir?",
        options: ["T lenfositleri", "NK hücreleri", "B lenfositleri", "Nötrofiller"],
        correctIndex: 2,
        explanation: "B lenfositleri (B hücreleri) plazma hücrelerine dönüşerek antikor üretir. Antikorlar, vücuda giren yabancı antijenleri (bakteri, virüs vb.) tanıyarak nötralize eder ve bağışıklık sisteminin diğer bileşenlerini harekete geçirir."
      },
      {
        id: "h97",
        difficulty: "hard",
        question: "Tiroid bezi hangi hormonları üretir?",
        options: ["İnsülin ve glukagon", "Tiroksin (T4) ve triiyodotironin (T3)", "Kortizol ve adrenalin", "Östrojen ve progesteron"],
        correctIndex: 1,
        explanation: "Boynun ön kısmında bulunan tiroid bezi, iyot kullanarak tiroksin (T4) ve triiyodotironin (T3) hormonlarını üretir. Bu hormonlar metabolizma hızını, büyüme ve gelişmeyi, vücut ısısını ve enerji kullanımını düzenler; eksikliğinde hipotiroidizm, fazlalığında hipertiroidizm görülür."
      },
      {
        id: "h98",
        difficulty: "hard",
        question: "Aşı nasıl çalışır?",
        options: ["Hastalık yapan bakterileri doğrudan öldürür", "Bağışıklık sistemini tanımlayarak ileriki enfeksiyonlara hazırlar", "Vücuttan toksinleri süzer", "Semptomları maskeler"],
        correctIndex: 1,
        explanation: "Aşılar; zayıflatılmış/ölü mikroorganizmalar, proteinleri veya mRNA gibi bileşenler içererek bağışıklık sistemini belirli bir patojen tanımaya ve hafıza hücreleri oluşturmaya yönlendirir. Gerçek enfeksiyonla karşılaşıldığında bağışıklık sistemi hızla ve etkili biçimde yanıt verir."
      },
      {
        id: "h99",
        difficulty: "hard",
        question: "D vitamini vücutta hangi temel işlevi yerine getirir?",
        options: ["Kan pıhtılaşmasını sağlar", "Kalsiyum emilimini ve kemik sağlığını destekler", "Görme işlevini güçlendirir", "Sinir sistemini korur"],
        correctIndex: 1,
        explanation: "D vitamini; bağırsaklardan kalsiyum ve fosfor emilimini artırarak kemik ve diş sağlığını destekler. Güneş ışığına maruz kalındığında deride sentezlenen D vitamini; eksikliğinde çocuklarda raşitizme, yetişkinlerde ise osteoporoza (kemik erimesi) yol açabilir."
      },
      {
        id: "h100",
        difficulty: "hard",
        question: "İnsan vücudunda kaç kemik bulunur?",
        options: ["106", "206", "306", "406"],
        correctIndex: 1,
        explanation: "Yetişkin insan iskeleti 206 kemikten oluşur. Doğumda yaklaşık 270-300 kemikle dünyaya gelen bebekler büyüdükçe bazı kemiklerin kaynaşmasıyla bu sayı azalır. En çok kemik el ve ayaklarda bulunur; bunlar toplamın yarısına yakınını oluşturur."
      },
      {
        id: "h101",
        difficulty: "hard",
        question: "Hangi kan grubu 'evrensel verici' olarak bilinir?",
        options: ["A Rh+", "B Rh-", "O Rh-", "AB Rh+"],
        correctIndex: 2,
        explanation: "O Rh- (O negatif) kan grubu, alyuvarlarında ne A ne B antijeni ne de Rh faktörü taşıdığı için herkese verilebilir. Bu nedenle acil ve kan grubu bilinmeyen durumlarda tercih edilir. Öte yandan AB Rh+ (AB pozitif) kan grubu, tüm gruplardan kan alabilen 'evrensel alıcı' olarak bilinir."
      },
      {
        id: "h102",
        difficulty: "hard",
        question: "İnsan vücudundaki en uzun kemik hangisidir?",
        options: ["Humerus (Kol kemiği)", "Tibia (Kaval kemiği)", "Femur (Uyluk kemiği)", "Radius"],
        correctIndex: 2,
        explanation: "Femur (uyluk kemiği), kalça ekleminden diz eklemine kadar uzanan ve vücudun en uzun, en ağır ve en güçlü kemiğidir. Erişkin bir insanda ortalama 48 cm uzunluğa ulaşan femur, vücut ağırlığının yaklaşık 30 katına kadar dayanabilecek sağlamlıktadır. Hem hareket hem de vücut ağırlığını taşıma açısından kritik rol oynar."
      },
      {
        id: "h103",
        difficulty: "hard",
        question: "Penisilin antibiyotiğini kim keşfetmiştir?",
        options: ["Louis Pasteur", "Marie Curie", "Alexander Fleming", "Robert Koch"],
        correctIndex: 2,
        explanation: "İskoç bakteriyolog Alexander Fleming, 1928 yılında laboratuvarında bıraktığı bakteri kültürlerine Penicillium notatum küfünün bulaşmasını fark etti ve küfün bakterileri öldürdüğünü gözlemledi. Bu tesadüfi keşif, modern antibiyotik çağını başlattı. Fleming, Howard Florey ve Ernst Chain ile birlikte 1945 Nobel Tıp Ödülü'ne layık görüldü."
      },
      {
        id: "h104",
        difficulty: "hard",
        question: "Alerjik reaksiyonlarda vücutta hangi kimyasal madde salınır?",
        options: ["Adrenalin", "Histamin", "İnsülin", "Serotonin"],
        correctIndex: 1,
        explanation: "Alerjik reaksiyonlarda bağışıklık sistemi, yabancı bir maddeyi tehdit olarak algıladığında mast hücrelerinden histamin serbest bırakır. Histamin; kaşıntı, kızarıklık, burun akıntısı, hapşırma ve gözlerde yanma gibi alerji belirtilerine yol açar. Antihistaminik ilaçlar bu etkiyi bloke ederek semptomlara karşı kullanılır."
      },
      {
        id: "h105",
        difficulty: "hard",
        question: "İnsan vücudundaki en büyük damar hangisidir?",
        options: ["Pulmoner arter", "Aort", "Vena kava", "Femoral ven"],
        correctIndex: 1,
        explanation: "Aort, kalpten çıkan en büyük atardamardır ve vücuttaki en geniş kan damarıdır. Kalbin sol karıncığından çıkarak önce yukarı, sonra kemer biçiminde dönerek aşağıya iner ve karın boşluğunda iliak arterlere ayrılır. Kan basıncının en yüksek olduğu damar olan aort, kalbin pompaladığı tüm kanı taşır."
      },
      {
        id: "h106",
        difficulty: "hard",
        question: "Kemik erimesi (osteoporoz) hangi mineral eksikliğiyle en sık ilişkilendirilir?",
        options: ["Demir", "Kalsiyum", "Çinko", "Magnezyum"],
        correctIndex: 1,
        explanation: "Osteoporoz, kemik yoğunluğunun azalmasıyla kırılganlığın arttığı kronik bir hastalıktır; kalsiyum ve D vitamini eksikliği başlıca nedenler arasındadır. Kalsiyum kemik ve diş yapısının temel bileşenidir; yetersiz alım kemiği inceltir. Özellikle menopoz sonrası kadınlarda ve yaşlılarda yaygındır; düzenli kalsiyum alımı ve egzersiz koruyucudur."
      },
      {
        id: "h107",
        difficulty: "hard",
        question: "Kırmızı kan hücreleri vücutta nerede üretilir?",
        options: ["Karaciğer", "Dalak", "Kemik iliği", "Böbrekler"],
        correctIndex: 2,
        explanation: "Kırmızı kan hücreleri (eritrositler), başta uzun kemiklerin uç kısımları ve yassı kemikler olmak üzere kemik iliğinde üretilir. Hemoglobin adlı protein sayesinde oksijen taşıyan bu hücreler, olgunlaşma sürecinde çekirdeklerini kaybeder ve yaklaşık 120 gün yaşar. Dalak ise yaşlanan eritrositleri süzerek parçalar."
      },
      {
        id: "h108",
        difficulty: "hard",
        question: "Diyaliz hangi organın görevini üstlenir?",
        options: ["Karaciğer", "Akciğer", "Kalp", "Böbrek"],
        correctIndex: 3,
        explanation: "Diyaliz, böbreklerin yetersiz çalışması durumunda kanı yapay olarak filtreleyen tıbbi bir işlemdir. Hemodiyaliz yönteminde kan vücuttan alınarak diyaliz makinesinde temizlendikten sonra geri verilir; periton diyalizinde ise karın zarı filtre işlevi görür. Kronik böbrek yetmezliği olan hastalar haftada birkaç kez diyalize girebilir."
      },
      {
        id: "h109",
        difficulty: "hard",
        question: "İnsan vücudunda kaç çift kaburga kemiği bulunur?",
        options: ["10 çift", "11 çift", "12 çift", "14 çift"],
        correctIndex: 2,
        explanation: "İnsan iskeletinde 12 çift (toplam 24) kaburga kemiği bulunur. İlk 7 çift 'gerçek kaburga' olarak adlandırılır ve doğrudan göğüs kemiğine (sternum) bağlanır. 8-10. çiftler 'yalancı kaburga'; 11. ve 12. çiftler ise hiçbir yere bağlı olmadığından 'serbest kaburga' olarak bilinir. Kaburgalar göğüs kafesini oluşturarak kalp ve akciğerleri korur."
      },
      {
        id: "h110",
        difficulty: "hard",
        question: "Beden Kitle İndeksi (BMI) nasıl hesaplanır?",
        options: ["Boy (cm) × Kilo (kg)", "Kilo (kg) / Boy (m)", "Kilo (kg) / Boy² (m²)", "Boy (m) / Kilo² (kg²)"],
        correctIndex: 2,
        explanation: "Beden Kitle İndeksi (BMI), kilo (kilogram) değerinin boy (metre cinsinden) değerinin karesiyle bölünmesiyle hesaplanır: BMI = kg/m². 18,5'in altı zayıf, 18,5-24,9 normal, 25-29,9 fazla kilolu, 30 ve üzeri obez olarak sınıflandırılır. Pratik bir tarama aracı olsa da kas kütlesini ve vücut yapısını yansıtmadığından sınırlılıkları vardır."
      },
      {
        id: "h111",
        difficulty: "easy",
        question: "İnsan vücudunda kaç çift kromozom bulunur?",
        options: ["21", "22", "23", "24"],
        correctIndex: 2,
        explanation: "İnsan hücrelerinde toplam 46 kromozom yani 23 çift kromozom bulunur; bunların 22'si otozomal, 1'i cinsiyet kromozomudur."
      },
      {
        id: "h112",
        difficulty: "easy",
        question: "Diş çürüğüne yol açan başlıca bakteri türü hangisidir?",
        options: ["E. coli", "Streptococcus mutans", "Salmonella", "Helicobacter"],
        correctIndex: 1,
        explanation: "Diş çürüğünün en önemli sorumlusu Streptococcus mutans bakterisidir; şekerleri asite çevirerek mineyi aşındırır."
      },
      {
        id: "h113",
        difficulty: "easy",
        question: "Bir tansiyon ölçüm cihazına ne ad verilir?",
        options: ["Spirometre", "Sfigmomanometre", "Stetoskop", "Termometre"],
        correctIndex: 1,
        explanation: "Sfigmomanometre, kan basıncını manşet ve ölçek aracılığıyla ölçen tansiyon aletidir; çoğunlukla stetoskopla birlikte kullanılır."
      },
      {
        id: "h114",
        difficulty: "easy",
        question: "Yetişkin bir insanın günde ortalama ne kadar su içmesi önerilir?",
        options: ["0,5 L", "1-1,2 L", "2-2,5 L", "5 L"],
        correctIndex: 2,
        explanation: "Sağlıklı bir yetişkin için günlük yaklaşık 2-2,5 litre sıvı tüketimi önerilir; bu miktarın bir kısmı yiyeceklerle de karşılanır."
      },
      {
        id: "h115",
        difficulty: "easy",
        question: "İnsan iskeletini oluşturan kemik sayısı yetişkinde yaklaşık kaçtır?",
        options: ["186", "206", "256", "306"],
        correctIndex: 1,
        explanation: "Yetişkin insan iskeletinde 206 kemik bulunur; bebeklerde bu sayı 270 civarındadır ve büyüme sürecinde bazı kemikler birleşir."
      },
      {
        id: "h116",
        difficulty: "easy",
        question: "Hangi vitamin pıhtılaşmada kritik rol oynar?",
        options: ["A vitamini", "C vitamini", "D vitamini", "K vitamini"],
        correctIndex: 3,
        explanation: "K vitamini, karaciğerde pıhtılaşma faktörlerinin sentezi için gerekli olduğundan eksikliği kanama bozukluklarına yol açar."
      },
      {
        id: "h117",
        difficulty: "easy",
        question: "Akciğerlerdeki gaz değişiminin gerçekleştiği keseciklere ne ad verilir?",
        options: ["Bronşçuk", "Trake", "Alveol", "Plevra"],
        correctIndex: 2,
        explanation: "Alveoller, akciğerlerin uç noktalarındaki ince duvarlı keseciklerdir; oksijen ve karbondioksit alışverişi burada gerçekleşir."
      },
      {
        id: "h118",
        difficulty: "easy",
        question: "İnsan vücudunda en güçlü kas hangisidir? (Aktivite başına basınç olarak)",
        options: ["Çene kası (masseter)", "Pazu kası", "Kalp kası", "Bacak kası"],
        correctIndex: 0,
        explanation: "Çene kası (masseter), birim alana uyguladığı kuvvet bakımından insan vücudundaki en güçlü kas olarak kabul edilir."
      },
      {
        id: "h119",
        difficulty: "easy",
        question: "Tip 1 diyabette eksik veya hiç üretilmeyen hormon hangisidir?",
        options: ["Glukagon", "Adrenalin", "İnsülin", "Tiroksin"],
        correctIndex: 2,
        explanation: "Tip 1 diyabet, pankreasın beta hücrelerinin tahrip olması sonucu insülin üretiminin yetersiz veya hiç olmaması durumudur."
      },
      {
        id: "h120",
        difficulty: "easy",
        question: "BMI (Vücut Kitle İndeksi) hangi iki ölçü ile hesaplanır?",
        options: ["Bel ve kalça çevresi", "Boy ve kilo", "Yağ oranı ve kas kütlesi", "Yaş ve kilo"],
        correctIndex: 1,
        explanation: "BMI, kilonun (kg) boyun karesine (m²) bölünmesiyle hesaplanır; kişinin sağlıklı kilo aralığında olup olmadığına dair fikir verir."
      },
      {
        id: "h121",
        difficulty: "easy",
        question: "Karpal Tünel Sendromu vücudun hangi bölgesini etkiler?",
        options: ["Diz", "El bileği", "Boyun", "Ayak bileği"],
        correctIndex: 1,
        explanation: "Karpal Tünel Sendromu, el bileğindeki median sinirin sıkışmasıyla oluşan ağrı, uyuşma ve karıncalanma durumudur."
      },
      {
        id: "h122",
        difficulty: "easy",
        question: "Sağlıklı bir yetişkinin dakikadaki nabız aralığı yaklaşık olarak nedir?",
        options: ["20-40", "40-60", "60-100", "120-180"],
        correctIndex: 2,
        explanation: "Sağlıklı bir yetişkinin dinlenme nabzı dakikada 60 ila 100 atım arasındadır; sporcularda bu sayı daha düşük olabilir."
      },
      {
        id: "h123",
        difficulty: "easy",
        question: "Diyetimizdeki lif (fiber) ağırlıklı olarak hangi gıdalardan alınır?",
        options: ["Et ve süt", "Sebze, meyve ve tahıl", "Zeytinyağı", "Su"],
        correctIndex: 1,
        explanation: "Lif, sebzeler, meyveler, baklagiller ve tam tahıllarda yoğun bulunur; sindirim sağlığı için önemlidir ve hayvansal gıdalarda bulunmaz."
      },
      {
        id: "h124",
        difficulty: "easy",
        question: "Tetanos hastalığı hangi yolla bulaşır?",
        options: ["Hava yoluyla", "Yara enfeksiyonuyla", "Cinsel yolla", "Bit ısırığıyla"],
        correctIndex: 1,
        explanation: "Tetanos, Clostridium tetani bakterisinin sporlarının açık yara veya kesiklere bulaşmasıyla oluşur; aşı ile önlenebilir."
      },
      {
        id: "h125",
        difficulty: "easy",
        question: "Hipertansiyon ne demektir?",
        options: ["Düşük tansiyon", "Yüksek tansiyon", "Yüksek ateş", "Düşük şeker"],
        correctIndex: 1,
        explanation: "Hipertansiyon, atardamarlardaki kan basıncının kronik olarak yüksek (genellikle 140/90 mmHg üzerinde) olması durumudur."
      },
      {
        id: "h126",
        difficulty: "easy",
        question: "Hangisi temel makro besin değildir?",
        options: ["Karbonhidrat", "Protein", "Yağ", "Kalsiyum"],
        correctIndex: 3,
        explanation: "Karbonhidrat, protein ve yağ üç temel makro besindir; kalsiyum ise bir mineral, yani mikro besindir."
      },
      {
        id: "h127",
        difficulty: "easy",
        question: "İnsan vücudundaki en uzun sinir hangisidir?",
        options: ["Trigeminal sinir", "Vagus siniri", "Siyatik sinir", "Optik sinir"],
        correctIndex: 2,
        explanation: "Siyatik sinir, omuriliğin alt bölümünden başlayıp ayağa kadar uzanan ve insan vücudundaki en uzun ve kalın sinirdir."
      },
      {
        id: "h128",
        difficulty: "medium",
        question: "Penisilin'i 1928'de keşfeden bilim insanı kimdir?",
        options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Robert Koch"],
        correctIndex: 1,
        explanation: "Alexander Fleming, 1928'de Staphylococcus kültürlerini etkileyen Penicillium küfünü gözlemleyerek penisilinin keşfine yol açmış ve 1945 Nobel Tıp Ödülü'nü almıştır."
      },
      {
        id: "h129",
        difficulty: "medium",
        question: "Sirkadyen ritim ne anlama gelir?",
        options: ["Kalp atış düzeni", "24 saatlik biyolojik döngü", "Hormonal döngü", "Solunum ritmi"],
        correctIndex: 1,
        explanation: "Sirkadyen ritim, canlıların yaklaşık 24 saatlik bir döngüde uyku, hormon salgısı ve metabolizmayı düzenleyen iç biyolojik saatidir."
      },
      {
        id: "h130",
        difficulty: "medium",
        question: "Eritrosit (alyuvar) hücrelerinin ortalama yaşam süresi yaklaşık kaç gündür?",
        options: ["7", "30", "120", "365"],
        correctIndex: 2,
        explanation: "Olgun alyuvarların yaşam süresi yaklaşık 120 gündür; sonra dalak ve karaciğerde parçalanırlar."
      },
      {
        id: "h131",
        difficulty: "medium",
        question: "Hangi vitamin yağda çözünür değildir?",
        options: ["A", "D", "B12", "E"],
        correctIndex: 2,
        explanation: "B12 vitamini suda çözünen vitaminlerdendir; A, D, E ve K vitaminleri ise yağda çözünür."
      },
      {
        id: "h132",
        difficulty: "medium",
        question: "Crohn hastalığı vücudun hangi sistemini etkiler?",
        options: ["Solunum sistemi", "Sinir sistemi", "Sindirim sistemi", "Dolaşım sistemi"],
        correctIndex: 2,
        explanation: "Crohn hastalığı, sindirim sisteminin herhangi bir bölümünde kronik iltihaplanmaya yol açan bir inflamatuvar bağırsak hastalığıdır."
      },
      {
        id: "h133",
        difficulty: "medium",
        question: "Kalp pili genellikle hangi bölgeye yerleştirilir?",
        options: ["Karaciğer altı", "Köprücük kemiği altındaki cilt altı", "Karın boşluğu", "Boyun"],
        correctIndex: 1,
        explanation: "Kalp pili (pacemaker), genellikle sol köprücük kemiğinin altına cilt altına yerleştirilir; elektrotları damar yoluyla kalbe ulaşır."
      },
      {
        id: "h134",
        difficulty: "medium",
        question: "İnsülin hangi organda üretilir?",
        options: ["Karaciğer", "Pankreas", "Dalak", "Böbrek"],
        correctIndex: 1,
        explanation: "İnsülin, pankreasın Langerhans adacıklarındaki beta hücreleri tarafından üretilen ve kan şekerini düşüren hormondur."
      },
      {
        id: "h135",
        difficulty: "medium",
        question: "MR (Manyetik Rezonans) cihazı hangi prensiple çalışır?",
        options: ["X ışını", "Ses dalgaları", "Manyetik alan ve radyo dalgaları", "Pozitron"],
        correctIndex: 2,
        explanation: "MR cihazları, güçlü manyetik alan ve radyo frekansı dalgalarıyla vücuttaki hidrojen atomlarının davranışını ölçerek görüntü oluşturur."
      },
      {
        id: "h136",
        difficulty: "medium",
        question: "Hangi vitamin eksikliği skorbüt hastalığına yol açar?",
        options: ["A", "B1", "C", "D"],
        correctIndex: 2,
        explanation: "C vitamini eksikliği, kollajen sentezinin bozulmasıyla diş eti kanaması, halsizlik ve yara iyileşme bozukluğu ile seyreden skorbüt hastalığına yol açar."
      },
      {
        id: "h137",
        difficulty: "medium",
        question: "BMI 25 ile 29.9 arasında olan bir yetişkin hangi kategoride yer alır?",
        options: ["Zayıf", "Normal", "Fazla kilolu", "Obez"],
        correctIndex: 2,
        explanation: "DSÖ kriterlerine göre BMI 25-29.9 aralığı 'fazla kilolu', 30 ve üzeri ise 'obez' olarak sınıflandırılır."
      },
      {
        id: "h138",
        difficulty: "medium",
        question: "REM uykusunda neler aktiftir?",
        options: ["Sadece kalp", "Beyin aktivitesi ve göz hareketleri", "Yalnızca kaslar", "Hiçbiri"],
        correctIndex: 1,
        explanation: "REM (Rapid Eye Movement) uyku evresinde beyin aktivitesi uyanıklığa yakındır, gözler hızlı hareket eder ve rüyaların büyük kısmı bu evrede görülür."
      },
      {
        id: "h139",
        difficulty: "medium",
        question: "İlk başarılı insan kalp nakli hangi yıl gerçekleştirilmiştir?",
        options: ["1953", "1967", "1975", "1985"],
        correctIndex: 1,
        explanation: "Dr. Christiaan Barnard, ilk başarılı insan kalp naklini 3 Aralık 1967'de Güney Afrika'nın Cape Town şehrinde gerçekleştirdi."
      },
      {
        id: "h140",
        difficulty: "medium",
        question: "Hangi besin grubu vücut için en hızlı enerji kaynağıdır?",
        options: ["Yağlar", "Karbonhidratlar", "Proteinler", "Vitaminler"],
        correctIndex: 1,
        explanation: "Karbonhidratlar, glukoza dönüşerek hücreler için en hızlı kullanılabilir enerji kaynağıdır; özellikle beyin başlıca enerji ihtiyacını glukozdan karşılar."
      },
      {
        id: "h141",
        difficulty: "medium",
        question: "Tükürük bezi hangi enzimi içerir?",
        options: ["Pepsin", "Lipaz", "Amilaz", "Tripsin"],
        correctIndex: 2,
        explanation: "Tükürük, ağızda nişastayı parçalamaya başlayan amilaz (pityalin) enzimini içerir."
      },
      {
        id: "h142",
        difficulty: "medium",
        question: "Hangi hücreler bağışıklık sisteminde antikor üretir?",
        options: ["T hücreleri", "B hücreleri", "Eritrositler", "Trombositler"],
        correctIndex: 1,
        explanation: "B lenfositleri (B hücreleri), aktive olduktan sonra plazma hücrelerine dönüşerek antijenlere karşı antikor üretir."
      },
      {
        id: "h143",
        difficulty: "medium",
        question: "Anorexia Nervosa hangi tür bir hastalıktır?",
        options: ["Otoimmün", "Bulaşıcı", "Yeme bozukluğu", "Genetik metabolik"],
        correctIndex: 2,
        explanation: "Anorexia Nervosa, kişinin kilo almaktan aşırı korkup gıda alımını kısıtlamasıyla seyreden ciddi bir yeme bozukluğudur."
      },
      {
        id: "h144",
        difficulty: "hard",
        question: "Glomerüller vücudun hangi bölümünde bulunur?",
        options: ["Karaciğer", "Böbrek", "Bağırsak", "Dalak"],
        correctIndex: 1,
        explanation: "Glomerüller, böbreklerin nefronlarında yer alan ve kanın süzüldüğü kılcal damar yumaklarıdır; idrar oluşumunun ilk adımıdır."
      },
      {
        id: "h145",
        difficulty: "hard",
        question: "ACE inhibitörleri ağırlıklı olarak hangi durumda kullanılır?",
        options: ["Astım", "Hipertansiyon", "Migren", "Tiroid"],
        correctIndex: 1,
        explanation: "ACE inhibitörleri (örn. enalapril, lisinopril), anjiyotensin dönüştürücü enzimi bloke ederek tansiyonu düşürür ve kalp yetmezliğinde de kullanılır."
      },
      {
        id: "h146",
        difficulty: "hard",
        question: "Hangisi otoimmün hastalık değildir?",
        options: ["Multipl Skleroz", "Tip 1 Diyabet", "Romatoid Artrit", "Tip 2 Diyabet"],
        correctIndex: 3,
        explanation: "Tip 2 diyabet öncelikle insülin direnciyle ilişkili metabolik bir hastalıktır; Tip 1 ise pankreas beta hücrelerine karşı gelişen otoimmün bir süreçtir."
      },
      {
        id: "h147",
        difficulty: "hard",
        question: "Hangi hormon stres anında 'savaş ya da kaç' tepkisini başlatır?",
        options: ["İnsülin", "Adrenalin (epinefrin)", "Tiroksin", "Östrojen"],
        correctIndex: 1,
        explanation: "Adrenalin (epinefrin), böbrek üstü bezinden salgılanır ve nabız, solunum ve kan basıncını artırarak savaş-kaç tepkisini tetikler."
      },
      {
        id: "h148",
        difficulty: "hard",
        question: "Neonatoloji hangi alanı kapsar?",
        options: ["Yaşlı sağlığı", "Yenidoğan bakımı", "Cilt hastalıkları", "Akciğer hastalıkları"],
        correctIndex: 1,
        explanation: "Neonatoloji, doğumdan sonraki ilk 28 günlük dönemde yenidoğanların özellikle prematüre bebeklerin tıbbi bakımını kapsayan pediatri alt dalıdır."
      },
      {
        id: "h149",
        difficulty: "hard",
        question: "Hipotalamus hangi sistemler arasında köprü görevi görür?",
        options: ["Sinir ve dolaşım", "Sinir ve sindirim", "Sinir ve endokrin", "Solunum ve dolaşım"],
        correctIndex: 2,
        explanation: "Hipotalamus, sinir sistemi ile endokrin sistem arasında bir köprüdür; hipofiz bezini kontrol ederek hormon salgısını düzenler."
      },
      {
        id: "h150",
        difficulty: "hard",
        question: "Akut miyokart enfarktüsü genellikle hangi rahatsızlığın halk arasındaki adıdır?",
        options: ["İnme", "Kalp krizi", "Astım nöbeti", "Migren atağı"],
        correctIndex: 1,
        explanation: "Miyokart enfarktüsü, kalp kasını besleyen koroner damardan birinin tıkanmasıyla oluşan kalp krizidir."
      },
      {
        id: "h151",
        difficulty: "hard",
        question: "Hangi vitamin eksikliği pernisiyöz anemiye yol açar?",
        options: ["B6", "B12", "Folik asit (B9)", "C"],
        correctIndex: 1,
        explanation: "B12 vitamininin emiliminin bozulması (intrinsik faktör eksikliği) pernisiyöz anemiye yol açar; megaloblastik kırmızı kan hücreleriyle karakterizedir."
      },
      {
        id: "h152",
        difficulty: "hard",
        question: "Hücresel solunumun büyük bölümü hangi organelde gerçekleşir?",
        options: ["Çekirdek", "Ribozom", "Mitokondri", "Golgi"],
        correctIndex: 2,
        explanation: "Mitokondri, oksijenli solunum sürecinde ATP üretiminin büyük bölümünün gerçekleştiği organeldir; bu nedenle 'hücrenin enerji santrali' olarak anılır."
      },
      {
        id: "h153",
        difficulty: "hard",
        question: "Trakeotomi hangi vücut bölgesine uygulanan bir prosedürdür?",
        options: ["Karın", "Boyun (soluk borusu)", "Göğüs (kalp)", "Bel"],
        correctIndex: 1,
        explanation: "Trakeotomi, hava yolunu açmak için soluk borusuna (trakea) cerrahi olarak yapılan bir açıklığa veya bu işlem sonucu açılan deliğe verilen addır."
      },
      {
        id: "h154",
        difficulty: "hard",
        question: "Hangi besin maddesi 'esansiyel amino asit' kavramını tanımlar?",
        options: ["Vücudun bol miktarda ürettikleri", "Vücudun üretemediği, dışarıdan alınması gereken amino asitler", "Su ile reaksiyona giren amino asitler", "Sadece çocuklarda eksik olanlar"],
        correctIndex: 1,
        explanation: "Esansiyel amino asitler, vücudun sentezleyemediği için besinlerle dışarıdan alınması zorunlu 9 amino asittir (örn. lisin, treonin, valin)."
      },
      {
        id: "h155",
        difficulty: "hard",
        question: "DNA çift sarmal yapısını öneren bilim insanları kimlerdir?",
        options: ["Mendel ve Darwin", "Watson ve Crick", "Pasteur ve Koch", "Curie ve Becquerel"],
        correctIndex: 1,
        explanation: "James Watson ve Francis Crick, Rosalind Franklin'in X-ışını çalışmalarından da faydalanarak 1953'te DNA'nın çift sarmallı yapısını yayımladı."
      },
      {
        id: "h156",
        difficulty: "hard",
        question: "Hangi mineralin eksikliği guatra (tiroid büyümesi) neden olabilir?",
        options: ["Demir", "İyot", "Kalsiyum", "Çinko"],
        correctIndex: 1,
        explanation: "İyot eksikliği tiroit hormonu üretimini bozar ve tiroit bezinin büyümesine (guatr) yol açar; iyotlu tuz kullanımı bu nedenle yaygınlaştırılmıştır."
      },
      {
        id: "h157",
        difficulty: "hard",
        question: "Lökositlerin görevi nedir?",
        options: ["Oksijen taşımak", "Pıhtılaşma sağlamak", "Bağışıklık sağlamak", "Hormon üretmek"],
        correctIndex: 2,
        explanation: "Lökositler (akyuvarlar), bakteri, virüs ve diğer patojenlere karşı bağışıklık savunmasını oluşturan beyaz kan hücreleridir."
      },
      {
        id: "h158",
        difficulty: "hard",
        question: "Diyabette ölçülen HbA1c değeri neyi yansıtır?",
        options: ["Anlık kan şekerini", "Son 2-3 ayın ortalama kan şekerini", "Sadece açlık şekerini", "Pankreas hasarını"],
        correctIndex: 1,
        explanation: "HbA1c (glikolize hemoglobin), eritrositlerin ömrü göz önünde bulundurularak son 2-3 aylık ortalama kan şekeri seviyesini yansıtır."
      },
      {
        id: "h159",
        difficulty: "hard",
        question: "Hangi hastalık 'sessiz katil' olarak da anılır?",
        options: ["Grip", "Hipertansiyon (yüksek tansiyon)", "Kabızlık", "Migren"],
        correctIndex: 1,
        explanation: "Hipertansiyon, çoğu zaman belirgin belirti vermeden ilerlediği ve kalp krizi, inme gibi ciddi sonuçlara yol açabildiği için 'sessiz katil' olarak anılır."
      },
      {
        id: "h160",
        difficulty: "hard",
        question: "Aort vücudun hangi en büyük damarıdır?",
        options: ["En büyük toplardamar", "En büyük atardamar", "En büyük lenf damarı", "En büyük kılcal damar"],
        correctIndex: 1,
        explanation: "Aort, kalpten çıkarak vücudun tamamına oksijenli kan dağıtan en büyük atardamardır; sol ventrikülden çıkar ve karın bölgesine kadar uzanır."
      },
      {
        id: "h161",
        difficulty: "easy",
        question: "Sağlıklı bir yetişkin için günlük önerilen su tüketimi yaklaşık kaçtır?",
        options: ["0,5-1 litre", "1-1,5 litre", "2-2,5 litre", "4-5 litre"],
        correctIndex: 2,
        explanation: "Sağlık otoriteleri, yetişkinlerin günlük yaklaşık 2-2,5 litre su içmesini önermektedir. Bu miktar; fiziksel aktivite, iklim ve bireysel sağlık durumuna göre değişebilir. Vücuttaki suyun yaklaşık %60'lık oranı hayati süreçlerin devamlılığı için zorunludur."
      },
      {
        id: "h162",
        difficulty: "easy",
        question: "Hangi vitamin güneş ışığına maruziyetle insan derisinde sentezlenir?",
        options: ["A Vitamini", "B12 Vitamini", "C Vitamini", "D Vitamini"],
        correctIndex: 3,
        explanation: "D Vitamini, derideki 7-dehidrokolesterol'ün güneş ışığındaki UVB radyasyonuyla etkileşime girmesiyle sentezlenir. Kemik sağlığı, bağışıklık sistemi ve kas işlevleri için kritik öneme sahiptir; eksikliği raşitizm ve osteoporoza yol açabilir."
      },
      {
        id: "h163",
        difficulty: "medium",
        question: "Beden Kitle İndeksi (BMI) nasıl hesaplanır?",
        options: ["Kilo (kg) ÷ Boy (m)", "Kilo (kg) ÷ Boy² (m²)", "Boy (cm) × Kilo (kg)", "Kilo (kg) × 0,9 ÷ Boy (m)"],
        correctIndex: 1,
        explanation: "BMI = Kilo (kg) ÷ Boy² (m²) formülüyle hesaplanır. 18,5-24,9 arası normal, 25-29,9 fazla kilolu, 30 ve üzeri obez olarak sınıflandırılır. BMI yaygın kullanımına karşın yağ ve kas kütlesini ayırt edemediğinden sınırlı bir göstergedir."
      },
      {
        id: "h164",
        difficulty: "medium",
        question: "Kalbi çevreleyen ve onu koruyan iki katlı zar yapısına ne ad verilir?",
        options: ["Perikard", "Periton", "Pleura", "Meninges"],
        correctIndex: 0,
        explanation: "Perikard, kalbi çevreleyen iki katlı fibröz/seröz zardır. İç ve dış katmanları arasındaki ince sıvı, kalbin çalışırken sürtünmesiz hareket etmesini sağlar. Perikardın iltihaplanması (perikardit) göğüs ağrısına yol açar."
      },
      {
        id: "h165",
        difficulty: "medium",
        question: "İnsülin hormonu hangi organ tarafından üretilir?",
        options: ["Karaciğer", "Böbreküstü Bezi", "Pankreas", "Tiroid"],
        correctIndex: 2,
        explanation: "İnsülin, pankreastaki Langerhans adacıklarının beta hücreleri tarafından üretilen peptid hormonudur. Kan şekerinin hücrelere alınmasını sağlayarak kan şekeri düzeyini düzenler. Tip 1 diyabette bu hücreler tahrip olduğundan insülin üretimi durur."
      },
      {
        id: "h166",
        difficulty: "medium",
        question: "Kan grubunu belirleyen antijenler hangi kan hücrelerinin yüzeyinde bulunur?",
        options: ["Lökositler (Akyuvarlar)", "Trombositler", "Eritrositler (Alyuvarlar)", "Plazma hücreleri"],
        correctIndex: 2,
        explanation: "ABO ve Rh kan gruplarını belirleyen antijenler, eritrositlerin (alyuvarların) hücre zarında bulunur. A antijeni A grubunu, B antijeni B grubunu, her ikisi AB grubunu, hiçbirinin bulunmaması ise O grubunu oluşturur."
      },
      {
        id: "h167",
        difficulty: "hard",
        question: "'Homeostasis' fizyolojide ne anlama gelir?",
        options: ["Hücre bölünmesi süreci", "Vücudun iç dengesini koruma mekanizması", "Besinlerin sindirimi", "Embriyonun gelişimi"],
        correctIndex: 1,
        explanation: "Homeostasis, organizmanın iç ortamını (vücut ısısı, kan pH'ı, kan şekeri vb.) belirli sınırlar içinde dengede tutma kapasitesidir. Negatif geri bildirim döngüleriyle işleyen bu mekanizma; termoregülasyon, osmoregülasyon ve kan şekeri kontrolü gibi kritik süreçleri yönetir."
      },
      {
        id: "h168",
        difficulty: "hard",
        question: "Miyelinizasyon ne anlama gelir ve neden önemlidir?",
        options: ["Hücre çekirdeğinin kopyalanması", "Sinir liflerinin miyelin kılıfıyla kaplanarak sinyal iletiminin hızlanması", "Beyinde yeni nöron oluşumu", "Bağışıklık hücrelerinin çoğalması"],
        correctIndex: 1,
        explanation: "Miyelin, sinir aksonlarının etrafına sarılan lipoprotein kılıftır. Sinir impulslarının tuzlama ilkesiyle hızlanmasını sağlar; miyelinsiz liflere kıyasla iletim hızını 10-100 kata kadar artırır. Miyelin hasarı multipl skleroz gibi hastalıklara yol açar."
      },
      {
        id: "h169",
        difficulty: "hard",
        question: "Anamnez tıpta ne anlama gelir?",
        options: ["Cerrahi operasyon sonrası iyileşme süreci", "Hastanın tıbbi öyküsünü öğrenmek için yapılan klinik sorgu", "Kan testlerinin toplu analizi", "Organ naklinde doku uyumu kontrolü"],
        correctIndex: 1,
        explanation: "Anamnez, hekimin tanı koyma sürecinde hastanın mevcut şikâyetleri, geçirilmiş hastalıkları, aile öyküsü ve kullandığı ilaçlar hakkında sistematik biçimde bilgi topladığı klinik görüşmedir. Doğru anamnez, doğru tanının temelini oluşturur."
      },
      {
        id: "h170",
        difficulty: "hard",
        question: "Vücutta en fazla bulunan mineral hangisidir ve öncelikle hangi yapılarda depolanır?",
        options: ["Demir; hemoglobinde", "Magnezyum; kaslarda", "Kalsiyum; kemik ve dişlerde", "Fosfor; hücre zarlarında"],
        correctIndex: 2,
        explanation: "Kalsiyum, insan vücudundaki en bol mineraldir; vücut ağırlığının yaklaşık %1-2'sini oluşturur. Bu kalsiyumun %99'u kemik ve dişlerde depolanırken %1'i sinir iletimi, kas kasılması ve kan pıhtılaşması için kanda ve hücre sıvılarında bulunur."
      },
      {
        id: "h171",
        difficulty: "easy",
        question: "Kan grubu tespitinde kullanılan ABO sistemini keşfeden bilim insanı kimdir?",
        options: ["Louis Pasteur", "Alexander Fleming", "Karl Landsteiner", "Joseph Lister"],
        correctIndex: 2,
        explanation: "Avusturyalı bilim insanı Karl Landsteiner, 1901'de ABO kan grubu sistemini keşfetmiş ve bu buluşu sayesinde 1930'da Nobel Tıp Ödülü'ne layık görülmüştür. Bu keşif, güvenli kan nakli yapılmasının önünü açmıştır."
      },
      {
        id: "h172",
        difficulty: "easy",
        question: "İnsülin hangi organda üretilir?",
        options: ["Karaciğer", "Böbrek", "Pankreas", "Tiroid"],
        correctIndex: 2,
        explanation: "İnsülin, pankreastaki Langerhans adacıklarında bulunan beta hücreleri tarafından salgılanan bir hormondur. Kan şekerini düzenler; eksikliği veya işlevsizliği şeker hastalığına (diyabet) yol açar."
      },
      {
        id: "h173",
        difficulty: "easy",
        question: "Vücudun bağışıklık sisteminde antikor üreten hücre türü hangisidir?",
        options: ["Eritrosit (Alyuvar)", "Trombosit", "B lenfosit", "Nötrofil"],
        correctIndex: 2,
        explanation: "B lenfositler (B hücreleri), antijenlere karşı antikor üreten özelleşmiş beyaz kan hücreleridir. Belirli bir antijenle karşılaşınca bu hücreler plazma hücrelerine dönüşerek yoğun miktarda antikor salgılar."
      },
      {
        id: "h174",
        difficulty: "medium",
        question: "Beyin sapı hangi hayati işlevi doğrudan kontrol etmez?",
        options: ["Nefes alma", "Kalp atışı", "Yutma refleksi", "Uzun süreli bellek"],
        correctIndex: 3,
        explanation: "Beyin sapı; solunum, kalp atışı, yutma gibi hayati otonom fonksiyonları düzenler. Uzun süreli bellek oluşumu ise büyük oranda hipokampüs ve serebral korteks tarafından yürütülür."
      },
      {
        id: "h175",
        difficulty: "medium",
        question: "Yetişkin bir insanda yaklaşık kaç kemik bulunmaktadır?",
        options: ["126", "206", "300", "420"],
        correctIndex: 1,
        explanation: "Yetişkin insan iskeleti 206 kemikten oluşmaktadır. Doğumda bu sayı yaklaşık 270-300 iken büyüme sürecinde birçok kemik kaynaşarak sayı azalır. En küçük kemik, orta kulaktaki üzengicidir."
      },
      {
        id: "h176",
        difficulty: "medium",
        question: "Grip aşısının her yıl yeniden düzenlenmesinin temel nedeni nedir?",
        options: ["Aşının etkisi bir yılda sona erer", "İnfluenza virüsü sürekli mutasyona uğrar", "Üretim maliyeti yüksektir", "Yasalar yıllık aşı zorunluluğu getirir"],
        correctIndex: 1,
        explanation: "İnfluenza (grip) virüsü, 'antijenik kayma' ve 'antijenik sürüklenme' mekanizmaları sayesinde yüzey proteinlerini sık sık değiştirir. Bu nedenle her yıl DSÖ hangi suşların yaygınlaşabileceğini tahmin ederek aşı bileşimini günceller."
      },
      {
        id: "h177",
        difficulty: "medium",
        question: "Aşağıdaki vitaminlerden hangisi güneş ışığı etkisiyle deride sentezlenir?",
        options: ["A vitamini", "B12 vitamini", "C vitamini", "D vitamini"],
        correctIndex: 3,
        explanation: "D vitamini (kolekalsiferol), ultraviyole-B (UVB) ışınlarının ciltteki 7-dehidrokolesterolü dönüştürmesiyle sentezlenir. Kemik sağlığı, bağışıklık sistemi ve kas fonksiyonları için vazgeçilmezdir."
      },
      {
        id: "h178",
        difficulty: "hard",
        question: "Kalp kasının diğer kas dokularından ayırt eden en önemli özellik nedir?",
        options: ["Sadece istemsiz çalışır", "Hem çizgili hem istemsiz bir doku olup otonom ritim üretir", "Miyelin kılıfla çevrilidir", "Yalnızca anaerobik enerji kullanır"],
        correctIndex: 1,
        explanation: "Kalp kası (miyokard) hem iskelet kastaki çizgili yapıyı hem de düz kastaki istemsiz kontrolü birleştirir. En kritik özelliği, SA (sinüs-atriyal) düğümünden kaynaklanan elektriksel impulslarla kendi kendine uyarı üreterek otomatik ritim sağlamasıdır."
      },
      {
        id: "h179",
        difficulty: "easy",
        question: "Hangi hastalık 'sessiz katil' olarak bilinir çünkü çoğunlukla belirti vermez?",
        options: ["Şeker hastalığı tip 2", "Hipertansiyon (yüksek tansiyon)", "Astım", "Migren"],
        correctIndex: 1,
        explanation: "Hipertansiyon, kalp hastalığı, inme ve böbrek yetmezliğinin başlıca risk faktörü olmasına rağmen çoğu kişide hiçbir belirti göstermez. Bu yüzden 'sessiz katil' olarak anılır ve düzenli tansiyon ölçümü son derece önemlidir."
      },
      {
        id: "h180",
        difficulty: "medium",
        question: "Akciğerlerin temel işlevsel birimi olan yapı hangisidir?",
        options: ["Bronş", "Bronşiyal", "Alveol", "Trakea"],
        correctIndex: 2,
        explanation: "Alveoller, akciğerlerin en küçük birimlerini oluşturan hava kesecikleridir. İnce nemli duvarları ve çevrelerindeki bol kılcal damar ağı sayesinde oksijen ile karbondioksit değişiminin gerçekleştiği yerdir."
      },
      {
        id: "h181",
        difficulty: "hard",
        question: "Tip 1 diyabette bağışıklık sistemi hangi hücreleri tahrip eder?",
        options: ["Karaciğerin glikojen depolayan hepatositleri", "Pankreastaki alfa hücreleri", "Pankreastaki beta hücreleri", "Böbrek üstü bezinin korteks hücreleri"],
        correctIndex: 2,
        explanation: "Tip 1 diyabette bağışıklık sistemi, pankreasın Langerhans adacıklarındaki insülin üreten beta hücrelerine saldırarak onları tahrip eder. Sonuçta yeterli insülin üretilemez ve hastalar yaşam boyu insülin tedavisine ihtiyaç duyar."
      },
      {
        id: "h182",
        difficulty: "medium",
        question: "Vücuttaki en uzun kemik hangisidir?",
        options: ["Omurga", "Humerus (üst kol kemiği)", "Tibia (kaval kemiği)", "Femur (uyluk kemiği)"],
        correctIndex: 3,
        explanation: "Femur (uyluk kemiği), erişkin insanda ortalama 48 cm uzunluğu ve vücudun en güçlü kemiği olma özelliğiyle en uzun kemik unvanını taşır. Vücut ağırlığının yaklaşık 1.700 kg'a kadar olan yüklere dayanabildiği tahmin edilmektedir."
      },
      {
        id: "h183",
        difficulty: "easy",
        question: "Beyin dalgalarını ölçmek için kullanılan cihaz hangisidir?",
        options: ["EKG", "EEG", "MRI", "PET"],
        correctIndex: 1,
        explanation: "EEG (elektroensefalogram), kafa derisine yerleştirilen elektrotlarla beynin elektriksel aktivitesini kaydeden bir cihazdır. Epilepsi, uyku bozuklukları ve beyin hasarı tanısında kullanılır."
      },
      {
        id: "h184",
        difficulty: "medium",
        question: "Vücudun enerji para birimi olarak bilinen molekül hangisidir?",
        options: ["Glikoz", "Glikojen", "ATP (Adenozin trifosfat)", "NADH"],
        correctIndex: 2,
        explanation: "ATP (adenozin trifosfat), hücresel reaksiyonları, kas kasılmalarını ve aktif taşımayı besleyen evrensel enerji molekülüdür. Mitokondride hem glikozdan hem de yağ asitlerinden sentezlenir."
      },
      {
        id: "h185",
        difficulty: "hard",
        question: "Kan-beyin bariyerinin temel işlevi nedir?",
        options: ["Beyne giden kan akışını artırmak", "Zararlı madde ve patojenlerle belirli moleküllerin beyine geçişini seçici olarak engellemek", "Bilişsel işleme için ek oksijen sağlamak", "Beyin omurilik sıvısının üretimini düzenlemek"],
        correctIndex: 1,
        explanation: "Kan-beyin bariyeri, beyin kılcal damarlarını örten sıkı bağlantılı endotel hücrelerinden oluşur. Bu bariyer, toksinlerin ve patojenlerin beyine geçişini engellerken oksijen, glikoz ve bazı lipitler gibi gerekli maddelerin seçici geçişine izin verir."
      },
      {
        id: "h186",
        difficulty: "medium",
        question: "REM uykusu sırasında beyin için hangisi doğrudur?",
        options: ["Beyin aktivitesi en aza iner", "Beyin aktivitesi uyanıklığa benzer düzeyde yüksektir", "Vücuttaki tüm kaslar aktif çalışır", "Kalp atışı ve solunum tamamen durur"],
        correctIndex: 1,
        explanation: "REM (Hızlı Göz Hareketi) uykusunda beyin aktivitesi, uyanık olunduğu zamankine çok yakın bir düzeyde seyreder. Bu evrede canlı rüyalar görülür, gözler hızla hareket eder; ancak çizgili kaslar geçici felç durumundadır."
      },
      {
        id: "h187",
        difficulty: "medium",
        question: "Omega-3 yağ asitleri bakımından zengin olan kaynak hangisidir?",
        options: ["Somon balığı", "Tereyağı", "Zeytinyağı", "Beyaz ekmek"],
        correctIndex: 0,
        explanation: "Omega-3 yağ asitleri en çok yağlı balıklarda (somon, uskumru, ringa), cevizde ve keten tohumunda bulunur. Bu yağ asitleri kalp sağlığı, beyin fonksiyonu ve inflamasyon kontrolü açısından önemlidir."
      },
      {
        id: "h188",
        difficulty: "easy",
        question: "Bağışıklık sistemi ilk kez bir antijenle karşılaştığında oluşturulan yanıta ne ad verilir?",
        options: ["İkincil bağışıklık yanıtı", "Bellek yanıtı", "Primer (birincil) bağışıklık yanıtı", "Aşılama yanıtı"],
        correctIndex: 2,
        explanation: "Vücudun belirli bir patojenle ilk kez karşılaşmasında devreye giren primer bağışıklık yanıtı yavaş gelişir ve antikor düzeyleri görece düşük kalır. Aynı patojenle ikinci karşılaşmada bellek hücreleri devreye girerek çok daha hızlı ve güçlü bir sekonder yanıt oluşur."
      },
      {
        id: "h189",
        difficulty: "hard",
        question: "Koroner anjiyoplasti işleminde temel amaç nedir?",
        options: ["Kalp kapakçıklarını onarmak", "Tıkalı koroner arterleri genişletmek", "Kalp ritim bozukluğunu düzeltmek", "Kalp kasındaki enfeksiyonu tedavi etmek"],
        correctIndex: 1,
        explanation: "Koroner anjiyoplasti (balon anjiyoplasti ya da PCI), ateroskleroz nedeniyle daralan ya da tıkanan koroner arterlerin içine kateter yoluyla balon yerleştirilerek genişletilmesi işlemidir. Çoğunlukla işlem sonrasında stent de yerleştirilir."
      },
      {
        id: "h190",
        difficulty: "hard",
        question: "İnsan bağırsak mikrobiyomunun sağlık üzerindeki etkisini araştıran bilim dalı nasıl adlandırılır?",
        options: ["Metabolomik", "Genomik", "Mikrobiyom bilimi", "Proteomik"],
        correctIndex: 2,
        explanation: "Mikrobiyom bilimi, insan bağırsağında yaşayan trilyonlarca bakteri, virüs ve mantar gibi mikroorganizmaların sindirim, bağışıklık, ruh hali ve çeşitli hastalıklarla ilişkisini inceler. Son araştırmalar bağırsak-beyin ekseninin önemine dikkat çekmektedir."
      }
    ]
  },
  {
    id: "science",
    name: "Bilim",
    icon: "cpu",
    color: "#00d084",
    gradient: ["#00d084", "#00796b"],
    image: require("../assets/images/category_science.png"),
    questions: [
      {
        id: "s1",
        difficulty: "easy",
        question: "Atomun çekirdeğinde bulunmayan parçacık hangisidir?",
        options: ["Proton", "Nötron", "Elektron", "Kuark"],
        correctIndex: 2,
        explanation: "Elektronlar, atomun çekirdeğinde değil, çekirdek etrafındaki yörüngelerde (kabuklar) bulunur. Çekirdek, proton ve nötronlardan (ve bunları oluşturan kuarklardan) oluşur."
      },
      {
        id: "s2",
        difficulty: "easy",
        question: "DNA'nın ikili sarmal yapısı hangi yılda keşfedilmiştir?",
        options: ["1943", "1948", "1953", "1961"],
        correctIndex: 2,
        explanation: "James Watson ve Francis Crick, 1953'te DNA'nın ikili sarmal yapısını açıkladı. Bu keşifte Rosalind Franklin'in X-ışını kırınım verileri kritik öneme sahipti."
      },
      {
        id: "s3",
        difficulty: "easy",
        question: "Elektromanyetik indüklemeyi keşfeden bilim insanı kimdir?",
        options: ["Nikola Tesla", "James Clerk Maxwell", "Heinrich Hertz", "Michael Faraday"],
        correctIndex: 3,
        explanation: "Michael Faraday, 1831'de elektromanyetik indüklemeyi keşfetti. Bu keşif, elektrik motorları, jeneratörler ve transformatörlerin temelini oluşturur."
      },
      {
        id: "s4",
        difficulty: "easy",
        question: "Uzaya ilk yapay uyduyu fırlatan ülke hangisidir?",
        options: ["Amerika Birleşik Devletleri", "Çin", "Fransa", "Sovyetler Birliği"],
        correctIndex: 3,
        explanation: "Sovyetler Birliği, 4 Ekim 1957'de Sputnik 1'i fırlatarak uzay çağını başlattı. Bu, ABD ile süren Uzay Yarışı'nın dönüm noktasıydı."
      },
      {
        id: "s5",
        difficulty: "easy",
        question: "Hangi element ortak izotopları itibarıyla radyoaktif değildir?",
        options: ["Uranyum", "Radon", "Toryum", "Kurşun"],
        correctIndex: 3,
        explanation: "Kurşunun (Pb) kararlı izotopları radyoaktif değildir; aslında uranyum ve toryumun bozunma zincirinin son ürünüdür. Radon, uranyum ve toryum doğal olarak radyoaktiftir."
      },
      {
        id: "s6",
        difficulty: "easy",
        question: "Fosilleri inceleyen bilim dalı hangisidir?",
        options: ["Arkeoloji", "Jeoloji", "Paleontoloji", "Botanik"],
        correctIndex: 2,
        explanation: "Paleontoloji, kayalarda korunmuş eski canlıların (fosillerinin) incelenmesiyle uğraşan bilim dalıdır. Arkeoloji ise insana ait tarihi kalıntıları inceler."
      },
      {
        id: "s7",
        difficulty: "easy",
        question: "Vücut sıcaklığını düzenleyen beyin bölgesi hangisidir?",
        options: ["Hipofiz", "Talamus", "Serebellum", "Hipotalamus"],
        correctIndex: 3,
        explanation: "Hipotalamus, vücut ısısını, açlık-tokluk hissini, uyku döngüsünü ve hormon salgısını düzenler. Homeostazın merkezi olarak bilinir."
      },
      {
        id: "s8",
        difficulty: "easy",
        question: "Schrödinger'in Kedisi düşünce deneyi hangi kuantum kavramını açıklamak için kullanılır?",
        options: ["Kuantum dolanıklığı", "Tünel etkisi", "Süperpozisyon", "Dalga-parçacık ikilemi"],
        correctIndex: 2,
        explanation: "Süperpozisyon, bir kuantum sisteminin gözlemlenmeden önce aynı anda birden fazla durumda bulunabilmesidir. Schrödinger, bu kavramın saçmalığını kedi deneyi üzerinden göstermiştir."
      },
      {
        id: "s9",
        difficulty: "easy",
        question: "Hangi bilim dalı sismik dalgaları inceleyerek Dünya'nın iç yapısını araştırır?",
        options: ["Meteoroloji", "Volkanoloji", "Sismoloji", "Jeodezi"],
        correctIndex: 2,
        explanation: "Sismoloji, depremler ve sismik dalgaları inceleyen bilim dalıdır. Sismik dalgalar, Dünya'nın iç katmanları (kabuk, manto, iç çekirdek) hakkında bilgi sağlar."
      },
      {
        id: "s10",
        difficulty: "easy",
        question: "Dünyadaki en güçlü mıknatıslar hangi türdendir?",
        options: ["Kalıcı mıknatıslar", "Elektromıknatıslar", "Doğal manyetitler", "Süperiletken mıknatıslar"],
        correctIndex: 3,
        explanation: "Süperiletken mıknatıslar, mutlak sıfıra yakın sıcaklıklarda elektrik direncini kaybeden iletkenlerden yapılır ve bu sayede muazzam manyetik alanlar üretebilir. MRI cihazlarında kullanılırlar."
      },
      {
        id: "s11",
        difficulty: "easy",
        question: "Hangi bilim dalı hücreleri inceler?",
        options: ["Mikrobiyoloji", "Sitoloji", "Histoloji", "Anatomi"],
        correctIndex: 1,
        explanation: "Sitoloji (hücre biyolojisi), hücrelerin yapısını, işlevlerini ve davranışlarını inceleyen biyoloji dalıdır. Günümüzde kanser araştırmalarında kritik rol oynamaktadır."
      },
      {
        id: "s12",
        difficulty: "easy",
        question: "Hangi gezegen Güneş'e en yakındır?",
        options: ["Venüs", "Mars", "Merkür", "Dünya"],
        correctIndex: 2,
        explanation: "Merkür, Güneş Sistemi'nde Güneş'e en yakın gezegendir. Ancak en sıcak gezegen değildir; Venüs, sera etkisi nedeniyle daha yüksek yüzey sıcaklığına sahiptir."
      },
      {
        id: "s13",
        difficulty: "easy",
        question: "Suyun kimyasal formülü nedir?",
        options: ["HO", "H2O", "H2O2", "H3O"],
        correctIndex: 1,
        explanation: "Su, iki hidrojen atomu ve bir oksijen atomundan oluşur; bu nedenle kimyasal formülü H2O'dur. Suyun erime noktası 0°C, kaynama noktası ise 100°C'dir (deniz seviyesinde)."
      },
      {
        id: "s14",
        difficulty: "easy",
        question: "Elektriği hangi bilim insanı keşfetmiştir?",
        options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Michael Faraday"],
        correctIndex: 2,
        explanation: "Elektriği tam anlamıyla 'keşfeden' tek bir kişi yoktur; ancak Benjamin Franklin, 1752'de yıldırım çubuğu deneyi ile elektriğin doğasını ortaya koymuştur. Faraday ise elektromanyetik indüksiyonu keşfetmiştir."
      },
      {
        id: "s15",
        difficulty: "easy",
        question: "Periyodik tabloda kaç element bulunur?",
        options: ["98", "108", "118", "128"],
        correctIndex: 2,
        explanation: "Periyodik tablo, 2016 itibarıyla 118 element içermektedir. Bu elementlerin 94'ü doğada bulunurken geri kalanı laboratuvar ortamında sentezlenmiştir."
      },
      {
        id: "s16",
        difficulty: "easy",
        question: "Hangi bilim dalı yer sarsıntılarını inceler?",
        options: ["Volkanoloji", "Jeoloji", "Sismoloji", "Meteoroloji"],
        correctIndex: 2,
        explanation: "Sismoloji, depremler ve sismik dalgaları inceleyen yer bilimleri dalıdır. Sismologlar, depremlerin nedenlerini ve oluşum mekanizmalarını araştırır."
      },
      {
        id: "s17",
        difficulty: "easy",
        question: "Bir atom hangi temel parçacıklardan oluşur?",
        options: ["Proton ve elektron", "Proton, nötron ve elektron", "Proton ve nötron", "Sadece elektronlar"],
        correctIndex: 1,
        explanation: "Bir atom; çekirdekte bulunan protonlar ve nötronlar ile çekirdeğin etrafında dolaşan elektronlardan oluşur. Proton sayısı elementin kimliğini belirler."
      },
      {
        id: "s18",
        difficulty: "easy",
        question: "Işığın prizmadan geçince oluşan renkler hangi sırayla dizilir?",
        options: ["Kırmızı, sarı, yeşil, mavi, mor", "Kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor", "Mor, mavi, yeşil, sarı, turuncu, kırmızı", "Mavi, yeşil, sarı, kırmızı"],
        correctIndex: 1,
        explanation: "Görünür ışık; kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor renklerine ayrılır. Bu sıra, dalga boyuna göre uzundan kısaya doğru dizilmiştir. Gökkuşağı da aynı renkleri içerir."
      },
      {
        id: "s19",
        difficulty: "easy",
        question: "Hangi gaz atmosferin yaklaşık yüzde 78'ini oluşturur?",
        options: ["Oksijen", "Karbondioksit", "Azot", "Argon"],
        correctIndex: 2,
        explanation: "Dünya atmosferinin yaklaşık %78'i azot, %21'i oksijen ve %1'i ise argon ile diğer gazlardan oluşur. Karbondioksit yalnızca %0,04 oranında bulunur."
      },
      {
        id: "s20",
        difficulty: "easy",
        question: "Hangi bilim insanı yerçekimini elma düşmesini gözlemleyerek açıklamıştır?",
        options: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nicolaus Copernicus"],
        correctIndex: 2,
        explanation: "Efsaneye göre Isaac Newton, 1666'da bir elmanın düşmesini gözlemleyerek evrensel çekim yasasını formüle etmeye başlamıştır. Gerçekte bu fikir, Newton'un uzun yıllar süren çalışmalarının ürünüdür."
      },
      {
        id: "s21",
        difficulty: "easy",
        question: "Karbon dioksitin kimyasal formülü nedir?",
        options: ["CO", "CO2", "C2O", "CO3"],
        correctIndex: 1,
        explanation: "Karbon dioksit, bir karbon atomu ve iki oksijen atomundan oluşur; bu nedenle formülü CO2'dir. Atmosferdeki miktarı artmakta ve iklim değişikliğine katkıda bulunmaktadır."
      },
      {
        id: "s22",
        difficulty: "easy",
        question: "İnsan gözünün görebileceği renk spektrumu nedir?",
        options: ["X ışınları", "Kızılötesi", "Görünür ışık", "Ultraviyole"],
        correctIndex: 2,
        explanation: "İnsan gözü, 380-740 nanometre dalga boyları arasındaki görünür ışığı algılayabilir. Bu aralık dışındaki kızılötesi ve ultraviyole ışınlar gözle görülemez."
      },
      {
        id: "s23",
        difficulty: "easy",
        question: "Hangi bilim insanı evrim teorisini ortaya atmıştır?",
        options: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Carl Linnaeus"],
        correctIndex: 2,
        explanation: "Charles Darwin, 1859 yılında 'Türlerin Kökeni' adlı eserinde doğal seçilim yoluyla evrim teorisini açıklamıştır. Bu teori, modern biyolojinin temel taşlarından biridir."
      },
      {
        id: "s24",
        difficulty: "easy",
        question: "Güneş sistemimizdeki tek halkası olan gezegen hangisidir?",
        options: ["Jüpiter", "Uranüs", "Neptün", "Satürn"],
        correctIndex: 3,
        explanation: "Satürn, görkemli halka sistemiyle tanınır. Ancak Jüpiter, Uranüs ve Neptün'ün de halkaları vardır; Satürn'ün halkaları çok daha belirgin ve geniştir."
      },
      {
        id: "s25",
        difficulty: "easy",
        question: "Hangi madde iletken değildir?",
        options: ["Bakır", "Demir", "Alüminyum", "Kauçuk"],
        correctIndex: 3,
        explanation: "Kauçuk, elektriği iletmeyen (yalıtkan) bir maddedir. Bu nedenle elektrikli kablolarda yalıtkan malzeme olarak kullanılır. Bakır, demir ve alüminyum ise iyi elektrik iletkenleridir."
      },
      {
        id: "s26",
        difficulty: "easy",
        question: "Bir ışık yılı ne kadar uzaklığı ifade eder?",
        options: ["Işığın bir günde aldığı yol", "Işığın bir ayda aldığı yol", "Işığın bir yılda aldığı yol", "Işığın 100 yılda aldığı yol"],
        correctIndex: 2,
        explanation: "Bir ışık yılı, ışığın bir yılda aldığı mesafeyi ifade eder ve yaklaşık 9,46 trilyon kilometreye eşittir. Yıldızlar arası mesafeleri ifade etmek için kullanılır."
      },
      {
        id: "s27",
        difficulty: "easy",
        question: "Hangi bilim dalı iklim ve hava olaylarını inceler?",
        options: ["Jeoloji", "Meteoroloji", "Biyoloji", "Ekoloji"],
        correctIndex: 1,
        explanation: "Meteoroloji, atmosfer olaylarını, hava durumunu ve iklim değişimlerini inceleyen bilim dalıdır. Meteorologlar, tahminler yaparak doğal afetlere karşı önlem almayı sağlar."
      },
      {
        id: "s28",
        difficulty: "easy",
        question: "Maddenin dördüncü hali nedir?",
        options: ["Gaz", "Kristal", "Plazma", "Bose-Einstein yoğuşması"],
        correctIndex: 2,
        explanation: "Katı, sıvı ve gaz hallerinin yanı sıra plazma, maddenin dördüncü temel hali olarak kabul edilir. Yıldızlar plazma halindedir ve evrendeki maddenin büyük çoğunluğu plazma formundadır."
      },
      {
        id: "s29",
        difficulty: "easy",
        question: "Hangi element radyoaktiftir ve nükleer yakıt olarak kullanılır?",
        options: ["Uranyum", "Titanyum", "Wolfram", "Vanadyum"],
        correctIndex: 0,
        explanation: "Uranyum, radyoaktif bir element olup nükleer reaktörlerde ve nükleer silahlarda yakıt olarak kullanılır. Nükleer fisyon sırasında büyük miktarda enerji açığa çıkar."
      },
      {
        id: "s30",
        difficulty: "easy",
        question: "Hangi bilim insanı yermerkezli sistemden güneşmerkezli sisteme geçişi savunmuştur?",
        options: ["Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Tycho Brahe"],
        correctIndex: 1,
        explanation: "Nicolaus Copernicus, 1543'te yayımladığı eserinde Güneş'in evrenin merkezi olduğunu ileri sürerek Ptolemy'nin yermerkezli modelini sorgulamıştır. Bu Kopernik Devrimi olarak bilinir."
      },
      {
        id: "s31",
        difficulty: "easy",
        question: "Hangi organ insanlarda oksijen ve karbondioksit değişimini gerçekleştirir?",
        options: ["Kalp", "Karaciğer", "Akciğer", "Böbrek"],
        correctIndex: 2,
        explanation: "Akciğerler, soluma sırasında oksijeni kana geçirir ve karbondioksiti dışarı atar. Bu gaz alışverişi, milyonlarca küçük hava keseciğinde (alveol) gerçekleşir."
      },
      {
        id: "s32",
        difficulty: "easy",
        question: "Fotosentezin temel ürünleri hangileridir?",
        options: ["Su ve karbondioksit", "Oksijen ve glikoz", "Azot ve protein", "Karbondioksit ve enerji"],
        correctIndex: 1,
        explanation: "Fotosentez; karbondioksit + su + güneş enerjisi → glikoz + oksijen şeklinde özetlenir. Klorofil pigmentini kullanan bitkiler bu süreçle hem kendi besinlerini üretir hem de atmosfere oksijen salar."
      },
      {
        id: "s33",
        difficulty: "easy",
        question: "Kara delik nedir?",
        options: ["Işığı yansıtan yıldız", "Işığın dahi kaçamadığı uzay cismi", "Soğuk gaz bulutu", "Bozunan bir gezegen"],
        correctIndex: 1,
        explanation: "Kara delik, kütlesi o kadar yoğun olan ve yerçekimi alanı o kadar güçlü olan bir uzay cismidir ki hiçbir şey, ışık bile, olay ufkunu geçtikten sonra kaçamaz. Dev yıldızların süpernova patlamasından sonra oluşabilir."
      },
      {
        id: "s34",
        difficulty: "easy",
        question: "Nükleer fisyon ne demektir?",
        options: ["İki hafif çekirdeğin birleşmesi", "Bir ağır çekirdeğin parçalanması", "Elektronların çekirdekten kopması", "Nötron ışınımı yayımlanması"],
        correctIndex: 1,
        explanation: "Nükleer fisyon, uranyum veya plütonyum gibi ağır atom çekirdeklerinin bir nötron tarafından vurularak daha küçük çekirdeklere parçalanması ve büyük miktarda enerji açığa çıkarmasıdır. Nükleer santraller bu ilkeyle çalışır."
      },
      {
        id: "s35",
        difficulty: "easy",
        question: "Ses hangi ortamda yayılamaz?",
        options: ["Sıvıda", "Katıda", "Vakumda (boşlukta)", "Gazda"],
        correctIndex: 2,
        explanation: "Ses, moleküllerin titreşimi yoluyla yayılır. Vakumda (boşlukta) molekül bulunmadığından ses iletilmez. Bu yüzden uzayda ses duyulamaz. Ses en hızlı katı ortamda, en yavaş gazda yayılır."
      },
      {
        id: "s36",
        difficulty: "easy",
        question: "Kimyasal sembol 'Fe' hangi metalin sembolüdür?",
        options: ["Florür", "Fosfor", "Demir", "Fermiyum"],
        correctIndex: 2,
        explanation: "Fe, Latince 'ferrum' kelimesinden gelen demir elementinin kimyasal sembolüdür. Atom numarası 26 olan demir, yerkabuğunun en bol bulunan dördüncü elementidir ve çelik üretiminin temelidir."
      },
      {
        id: "s37",
        difficulty: "easy",
        question: "Helyum gazı neden balon doldurmak için kullanılır?",
        options: ["Yanıcı olduğu için", "Havadan hafif ve yanmaz olduğu için", "Ucuz olduğu için", "Renkli olduğu için"],
        correctIndex: 1,
        explanation: "Helyum, hidrojenden sonra en hafif gazlardan biridir ve havadan yaklaşık 7 kat hafiftir. Hidrojenin aksine yanmaz (soy gaz) olduğundan güvenli bir şekilde balon şişirmede kullanılır."
      },
      {
        id: "s38",
        difficulty: "medium",
        question: "DNA ve RNA arasındaki en temel fark nedir?",
        options: ["DNA tek zincirli, RNA çift zincirli", "RNA tek zincirli ve urasil içerir, DNA çift zincirli ve timin içerir", "DNA sitoplazmada bulunur", "RNA kalıtımı sağlar"],
        correctIndex: 1,
        explanation: "DNA çift sarmal zincire sahipken RNA genellikle tek zincirlidir. DNA'da timin bazı bulunurken RNA'da urasil bulunur. DNA genetik bilgiyi depolarken mRNA, rRNA ve tRNA protein sentezinde görev alır."
      },
      {
        id: "s39",
        difficulty: "medium",
        question: "Protein sentezi hücrede nerede gerçekleşir?",
        options: ["Çekirdekte", "Mitokondride", "Ribozomda", "Golgi aygıtında"],
        correctIndex: 2,
        explanation: "Protein sentezi (translasyon), mRNA şablonunu okuyarak amino asitleri birleştiren ribozomlarda gerçekleşir. Ribozomlar hem serbest hâlde sitoplazmada hem de endoplazmik retikuluma bağlı olarak bulunabilir."
      },
      {
        id: "s40",
        difficulty: "medium",
        question: "Newton'un ikinci hareket yasası nedir?",
        options: ["Her etki eşit bir tepkiyi doğurur", "Kuvvet, kütle çarpı ivmeye eşittir (F=ma)", "Hareketsiz cisim hareketsiz kalır", "Enerji yok edilemez"],
        correctIndex: 1,
        explanation: "Newton'un ikinci yasası: F = m × a (Kuvvet = Kütle × İvme) denklemini ifade eder. Bir cisme uygulanan net kuvvet, cismin kütlesiyle ivmesinin çarpımına eşittir. Klasik mekaniğin temel denklemlerinden biridir."
      },
      {
        id: "s41",
        difficulty: "medium",
        question: "Lazer sözcüğünün açılımı nedir?",
        options: ["Işık Güçlendirme Sistemi", "Uyarılmış Işımanın Işık Yükseltmesi", "Yüksek Enerjili Işın", "Elektronik Işık Kaynağı"],
        correctIndex: 1,
        explanation: "LASER, 'Light Amplification by Stimulated Emission of Radiation' ifadesinin kısaltmasıdır. Uyarılmış ışıma yoluyla tek dalga boyunda yoğun ve odaklanmış ışık üretir; tıp, iletişim ve üretimde yaygın kullanılır."
      },
      {
        id: "s42",
        difficulty: "medium",
        question: "Karbon-14 yöntemi ne amaçla kullanılır?",
        options: ["Metal saflığını ölçmek", "Arkeolojik eserlerin yaşını belirlemek", "Toprak verimliliğini ölçmek", "Deniz suyu tuzluluğunu ölçmek"],
        correctIndex: 1,
        explanation: "Radyokarbon (C-14) tarihleme yöntemi, organik materyallerdeki karbon-14 izotopunun bozunma oranını ölçerek eserin yaşını belirler. MÖ 50.000 yıla kadar olan organik malzemelerin yaşını oldukça hassas biçimde verir."
      },
      {
        id: "s43",
        difficulty: "medium",
        question: "Hangi madde normal koşullarda katı, sıvı ve gaz olmak üzere üç hâlde de bulunabilir?",
        options: ["Demir", "Oksijen", "Su (H₂O)", "Karbondioksit"],
        correctIndex: 2,
        explanation: "Su (H₂O), 0°C altında buz (katı), 0–100°C arasında sıvı, 100°C üzerinde su buharı (gaz) olarak bulunur. Bu üç halin tamamının günlük yaşamda kolayca gözlemlenebilmesi suyu benzersiz kılar."
      },
      {
        id: "s44",
        difficulty: "medium",
        question: "Biyoluminesans nedir?",
        options: ["Güneş ışığını depolama", "Canlıların kimyasal reaksiyonla ışık üretmesi", "Kristallerin ışık kırması", "Floresan maddelerin radyasyon yayması"],
        correctIndex: 1,
        explanation: "Biyoluminesans, canlıların kimyasal reaksiyon aracılığıyla ışık üretme yeteneğidir. Ateş böcekleri, bazı derin deniz balıkları ve denizanası bu yeteneğe sahiptir. Luciferin enzimi bu reaksiyonda rol oynar."
      },
      {
        id: "s45",
        difficulty: "medium",
        question: "CERN nedir?",
        options: ["NASA'nın Avrupa kolu", "Avrupa Nükleer Araştırma Merkezi", "Uzay teleskobu ağı", "Küresel iklim gözlem merkezi"],
        correctIndex: 1,
        explanation: "CERN (Conseil Européen pour la Recherche Nucléaire), İsviçre ve Fransa sınırında kurulan Avrupa Nükleer Araştırma Merkezi'dir. Higgs bozonu 2012'de burada keşfedilen dünyanın en büyük parçacık fizik laboratuvarıdır."
      },
      {
        id: "s46",
        difficulty: "medium",
        question: "Yeryüzünde en bol bulunan element hangisidir?",
        options: ["Demir", "Silisyum", "Alüminyum", "Oksijen"],
        correctIndex: 3,
        explanation: "Oksijen, yeryüzünün katman kütlesinin yaklaşık %46'sını oluşturarak en bol bulunan elementtir. Yerkabuğunda çoğunlukla silisyum, alüminyum ve demir oksit bileşikleri hâlinde bulunur."
      },
      {
        id: "s47",
        difficulty: "medium",
        question: "Elektromanyetik spektrumda dalga boyu en uzun olan ışın türü hangisidir?",
        options: ["Gama ışınları", "X ışınları", "Görünür ışık", "Radyo dalgaları"],
        correctIndex: 3,
        explanation: "Elektromanyetik spektrumda dalga boyu en uzun (ve frekansı en düşük) olan ışın türü radyo dalgalarıdır. Dalga boyu uzadıkça enerji azalır. Gama ışınları ise en kısa dalga boyuna ve en yüksek enerjiye sahiptir."
      },
      {
        id: "s48",
        difficulty: "medium",
        question: "Güneş'in enerji üretiminin kaynağı nedir?",
        options: ["Nükleer fisyon", "Kimyasal yanma", "Nükleer füzyon", "Kütleçekim sıkışması"],
        correctIndex: 2,
        explanation: "Güneş, çekirdeğinde hidrojen atomlarını helyuma dönüştüren nükleer füzyon reaksiyonuyla muazzam miktarda enerji üretir. Her saniye yaklaşık 600 milyon ton hidrojen helyuma dönüşür ve açığa çıkan enerji ışık ve ısı olarak yayılır."
      },
      {
        id: "s49",
        difficulty: "medium",
        question: "Deprem dalgalarını ölçen alet ne adla bilinir?",
        options: ["Barograf", "Sismograf", "Gravimetre", "Termokupıl"],
        correctIndex: 1,
        explanation: "Sismograf, yer sarsıntılarını ve sismik dalgaları kaydeden alettir. Sismograftan elde edilen veriler sismogram adını alır. Richter ve Moment Büyüklüğü ölçekleri depremleri sınıflandırmak için kullanılır."
      },
      {
        id: "s50",
        difficulty: "medium",
        question: "Newton'un üçüncü hareket yasası ne ifade eder?",
        options: ["Enerji korunur", "Etki ile tepki eşit ve zıt yönlüdür", "Kütle arttıkça ivme azalır", "Işık hızı sabittir"],
        correctIndex: 1,
        explanation: "Newton'un üçüncü yasasına göre, bir cisim diğerine kuvvet uyguladığında, ikinci cisim de birincisine eşit büyüklükte ve zıt yönde kuvvet uygular. Roket motorları, yüzme ve yürüme bu ilkeye dayanır."
      },
      {
        id: "s51",
        difficulty: "medium",
        question: "Hangi bilim dalı canlıların sınıflandırılmasını inceler?",
        options: ["Ekoloji", "Genetik", "Taksonomi", "Fizyoloji"],
        correctIndex: 2,
        explanation: "Taksonomi, canlıları ortak özelliklerine göre sınıflandıran biyoloji dalıdır. İsveçli bilim insanı Carl Linnaeus, modern taksonominin temelini atmıştır. Âlem, şube, sınıf, takım, aile, cins ve tür temel sınıflandırma kademeleridir."
      },
      {
        id: "s52",
        difficulty: "medium",
        question: "Işığın vakumdaki hızı yaklaşık kaçtır?",
        options: ["300 km/s", "3.000 km/s", "300.000 km/s", "3.000.000 km/s"],
        correctIndex: 2,
        explanation: "Işık boşlukta saniyede yaklaşık 299.792 km hızla yol alır; fizik sembolü 'c' ile gösterilir. Özel görelilik teorisine göre madde veya bilgi bu hıza ulaşamaz; bu değer evrenin bilinen üst hız sınırıdır."
      },
      {
        id: "s53",
        difficulty: "medium",
        question: "DNA'nın çift sarmal yapısını keşfeden bilim insanları kimlerdir?",
        options: ["Louis Pasteur ve Robert Koch", "James Watson ve Francis Crick", "Gregor Mendel ve Hugo de Vries", "Charles Darwin ve Alfred Wallace"],
        correctIndex: 1,
        explanation: "1953 yılında James Watson ve Francis Crick, X-ışını kristalografisi verilerinden (Rosalind Franklin'in çalışmaları dahil) yararlanarak DNA'nın çift sarmal yapısını tanımladı. Bu keşif modern genetiğin temelini oluşturdu ve Nobel Ödülü ile ödüllendirildi."
      },
      {
        id: "s54",
        difficulty: "medium",
        question: "Atom çekirdeği hangi parçacıklardan oluşur?",
        options: ["Elektron ve proton", "Proton ve nötron", "Elektron ve nötron", "Yalnızca proton"],
        correctIndex: 1,
        explanation: "Atom çekirdeği, pozitif yüklü protonlar ve yüksüz nötronlardan oluşur. Negatif yüklü elektronlar ise çekirdeğin çevresindeki bulut bölgesinde yer alır. Proton sayısı bir elementin kimlik kartı olan atom numarasını belirler."
      },
      {
        id: "s55",
        difficulty: "medium",
        question: "Newton'un kaç temel hareket yasası vardır?",
        options: ["2", "3", "4", "5"],
        correctIndex: 1,
        explanation: "Isaac Newton'un üç hareket yasası şunlardır: 1) Eylemsizlik yasası (net kuvvet sıfır ise cisim durumunu korur), 2) F = ma (kuvvet, kütle ile ivmenin çarpımıdır), 3) Etki-tepki yasası. Bu yasalar klasik mekaniğin temelini oluşturur."
      },
      {
        id: "s56",
        difficulty: "medium",
        question: "Evrim teorisi hangi bilim insanıyla özdeşleştirilir?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"],
        correctIndex: 1,
        explanation: "Charles Darwin, 1859'da yayımladığı 'Türlerin Kökeni' adlı eserinde doğal seçilim yoluyla evrim teorisini ortaya koymuştur. Alfred Russel Wallace da bağımsız olarak benzer bir teori geliştirmiş; ancak teorinin yaygınlaşması Darwin ile özdeşleşmiştir."
      },
      {
        id: "s57",
        difficulty: "medium",
        question: "Elektromanyetik spektrumda görünür ışıktan daha kısa dalga boyuna sahip ışıma hangisidir?",
        options: ["Kızılötesi (infrared)", "Radyo dalgaları", "Mikrodalgalar", "Ultraviyole"],
        correctIndex: 3,
        explanation: "Elektromanyetik spektrumda görünür ışıktan kısa dalga boyuna (ve yüksek enerjiye) doğru gidildiğinde sırasıyla ultraviyole, X ışınları ve gama ışınları yer alır. Kızılötesi ve radyo dalgaları ise daha uzun dalga boyuna sahiptir."
      },
      {
        id: "s58",
        difficulty: "medium",
        question: "Periyodik tabloyu ilk kez hazırlayan kimyacı kimdir?",
        options: ["Robert Boyle", "John Dalton", "Antoine Lavoisier", "Dmitri Mendeleyev"],
        correctIndex: 3,
        explanation: "Rus kimyacı Dmitri Mendeleyev, 1869'da elementleri atom ağırlıklarına göre sıralayan kapsamlı periyodik tabloyu hazırlamıştır. Daha da önemlisi henüz keşfedilmemiş elementlerin özelliklerini başarıyla öngörmüştür."
      },
      {
        id: "s59",
        difficulty: "medium",
        question: "Ay'daki yer çekimi Dünya'nınkine kıyasla yaklaşık ne kadardır?",
        options: ["1/2'si", "1/3'ü", "1/6'sı", "1/10'u"],
        correctIndex: 2,
        explanation: "Ay'daki yer çekimi ivmesi Dünya'nın yaklaşık 1/6'sı (9,8 m/s² yerine ~1,6 m/s²) kadardır. Bu nedenle Dünya'da 60 kg ağırlığında olan bir kişi Ay'da yaklaşık 10 kg olarak ölçülür."
      },
      {
        id: "s60",
        difficulty: "medium",
        question: "Fotosentez sırasında bitkiler karbondioksit ve suyu hangi enerji kaynağını kullanarak glikoza dönüştürür?",
        options: ["Rüzgar enerjisi", "Isı enerjisi", "Güneş ışığı", "Kimyasal enerji"],
        correctIndex: 2,
        explanation: "Fotosentez, bitkilerin klorofil pigmenti aracılığıyla güneş ışığı enerjisini kullanarak CO₂ ve H₂O'yu glikoza (C₆H₁₂O₆) dönüştürdüğü süreçtir. Yan ürün olarak oksijen (O₂) açığa çıkar; bu oksijen Dünya'nın atmosferinin temel kaynağıdır."
      },
      {
        id: "s61",
        difficulty: "medium",
        question: "'Avogadro sayısı' yaklaşık olarak kaçtır ve neyi ifade eder?",
        options: ["6,022 × 10²³ – 1 moldeki tanecik sayısı", "3,14 × 10¹⁰ – atomların çapı", "9,8 m/s² – yer çekimi ivmesi", "1,38 × 10⁻²³ – Boltzmann sabiti"],
        correctIndex: 0,
        explanation: "Avogadro sayısı (Nₐ ≈ 6,022 × 10²³), 1 mol madde içindeki tanecik (atom, molekül veya iyon) sayısını tanımlar. İtalyan bilim insanı Amedeo Avogadro'nun çalışmalarına atıfla bu adı almıştır."
      },
      {
        id: "s62",
        difficulty: "medium",
        question: "Suyun kimyasal formülü nedir?",
        options: ["HO₂", "H₂O₂", "H₂O", "OH"],
        correctIndex: 2,
        explanation: "Suyun kimyasal formülü H₂O'dur: iki hidrojen atomu ve bir oksijen atomundan oluşur. Renksiz, kokusuz ve tatsız olan su; yaşamın temelidir ve Dünya yüzeyinin yaklaşık %71'ini kaplar."
      },
      {
        id: "s63",
        difficulty: "medium",
        question: "Maddenin dördüncü hali nedir?",
        options: ["Gaz", "Buz", "Plazma", "Süperkritik akışkan"],
        correctIndex: 2,
        explanation: "Maddenin dört hali katı, sıvı, gaz ve plazmadır. Plazma, çok yüksek sıcaklıklarda atomların iyonlaşmasıyla oluşan elektrik yüklü parçacık bulutudur. Güneş ve yıldızlar büyük ölçüde plazmadan oluşur; Dünya'da yıldırım ve floresan lambalar plazma örneği sayılır."
      },
      {
        id: "s64",
        difficulty: "medium",
        question: "Periyodik tabloda altının sembolü nedir?",
        options: ["Ag", "Au", "Al", "Ar"],
        correctIndex: 1,
        explanation: "Altının sembolü Au'dur. Bu sembol, Latincede altın anlamına gelen 'aurum' sözcüğünden gelir. Atom numarası 79 olan altın, korozyona son derece dayanıklı, parlak sarı renkte değerli bir metaldir."
      },
      {
        id: "s65",
        difficulty: "medium",
        question: "Newton'un birinci hareket yasası (eylemsizlik yasası) ne ifade eder?",
        options: ["Kuvvet = kütle × ivme", "Etki-tepki prensibini", "Durgun ya da eşit hızla ilerleyen cismin dışarıdan kuvvet uygulanmadıkça bu halini koruyacağını", "Enerjinin korunduğunu"],
        correctIndex: 2,
        explanation: "Newton'un birinci yasası (eylemsizlik yasası) şunu belirtir: Bir cisim üzerine net bir kuvvet etki etmediği sürece duruyorsa durmaya, hareket ediyorsa aynı hız ve doğrultuda hareket etmeye devam eder. Bu, Galileo'nun çalışmalarına dayanan temel fizik ilkelerinden biridir."
      },
      {
        id: "s66",
        difficulty: "medium",
        question: "E = mc² denkleminde 'c' neyi temsil eder?",
        options: ["Yük miktarını", "Işık hızını", "Entropi sabitini", "Coulomb sabitini"],
        correctIndex: 1,
        explanation: "Einstein'ın kütleenerji denkleminde 'c', ışık hızını temsil eder (≈ 3 × 10⁸ m/s). Denklem, kütle ve enerjinin birbirine dönüşebileceğini gösterir; 1 kg kütlenin enerjiye dönüşmesi yaklaşık 9 × 10¹⁶ joule enerji açığa çıkarır."
      },
      {
        id: "s67",
        difficulty: "medium",
        question: "Atmosferde en bol bulunan element hangisidir?",
        options: ["Oksijen", "Argon", "Azot", "Karbondioksit"],
        correctIndex: 2,
        explanation: "Dünya atmosferinin yaklaşık %78'i azottan (N₂), %21'i oksijenden oluşur. Azot, organizmaların doğrudan kullanamayacağı bir gaz olup biyolojik döngüde azot-bağlayan bakteriler ve yıldırım sayesinde kullanılabilir hâle getirilir."
      },
      {
        id: "s68",
        difficulty: "medium",
        question: "Sesin havadaki hızı yaklaşık kaç m/s'dir?",
        options: ["34 m/s", "340 m/s", "3.400 m/s", "34.000 m/s"],
        correctIndex: 1,
        explanation: "Ses, deniz seviyesinde 20°C sıcaklıktaki havada yaklaşık 343 m/s (~1.235 km/h) hızla yayılır. Ses hızı ortama, sıcaklığa ve basınca göre değişir; katılarda ve sıvılarda havaya kıyasla çok daha hızlı ilerler."
      },
      {
        id: "s69",
        difficulty: "medium",
        question: "Kara delik nedir?",
        options: ["Işığı yayan parlak yıldız", "Işığın bile kaçamayacağı kadar güçlü yerçekimine sahip uzay cismi", "Asteroid kuşağında bulunan kaya kütlesi", "Uzayda boş bölge"],
        correctIndex: 1,
        explanation: "Kara delik, kütle yoğunluğu o kadar yüksek olan bir uzay cismidir ki kaçış hızı ışık hızını aşar; dolayısıyla hiçbir şey—ışık dahil—içinden dışarı çıkamaz. Büyük yıldızların ömürlerini tamamlayıp çökmesiyle oluşur."
      },
      {
        id: "s70",
        difficulty: "medium",
        question: "pH 7 değeri neyi ifade eder?",
        options: ["Asidik ortamı", "Nötr ortamı", "Bazik ortamı", "Yüksek tuz konsantrasyonunu"],
        correctIndex: 1,
        explanation: "pH ölçeğinde 7 nötr değeri temsil eder; saf su pH 7'dir. pH 7'nin altındaki değerler asidik (limon suyu ≈ 2), üzerindeki değerler ise bazik (sabun ≈ 9–10) ortamı gösterir. pH, H⁺ iyon konsantrasyonunun negatif logaritmasıdır."
      },
      {
        id: "s71",
        difficulty: "medium",
        question: "Elektrik akımının birimi nedir?",
        options: ["Volt", "Ohm", "Amper", "Watt"],
        correctIndex: 2,
        explanation: "Elektrik akımının SI birimi amperdir (A). Bir amper, bir iletkenin kesit alanından saniyede geçen 1 coulomb yükü ifade eder. Voltaj (V), direnç (Ω) ve akım (A) arasındaki ilişki Ohm yasasıyla tanımlanır: V = I × R."
      },
      {
        id: "s72",
        difficulty: "medium",
        question: "Atom çekirdeğinde hangi parçacıklar bulunur?",
        options: ["Yalnızca protonlar", "Proton ve elektron", "Proton ve nötron", "Nötron ve elektron"],
        correctIndex: 2,
        explanation: "Atom çekirdeği proton ve nötronlardan (nükleonlardan) oluşur. Elektronlar ise negatif yüklü olup çekirdek etrafındaki yörüngelerde bulunur. Bir elementin atom numarası çekirdekteki proton sayısına eşittir."
      },
      {
        id: "s73",
        difficulty: "medium",
        question: "Mutlak sıfır kaç Kelvin'e karşılık gelir?",
        options: ["100 K", "0 K", "-100 K", "273 K"],
        correctIndex: 1,
        explanation: "Mutlak sıfır, teorik olarak ulaşılabilecek en düşük sıcaklık olup 0 Kelvin'e (-273,15 °C) karşılık gelir. Bu sıcaklıkta parçacıkların ısıl hareketleri teorik olarak sona erer; kuantum mekanik etkiler nedeniyle pratikte tam olarak ulaşılamaz."
      },
      {
        id: "s74",
        difficulty: "medium",
        question: "Darwin'in evrim teorisinin temel mekanizması nedir?",
        options: ["Yapay seçilim", "Doğal seçilim", "Genetik sürüklenme", "Mutasyon"],
        correctIndex: 1,
        explanation: "Charles Darwin'in 'Türlerin Kökeni' (1859) adlı eserinde ortaya koyduğu evrim teorisinin temel mekanizması doğal seçilimdir. Ortama daha iyi uyum sağlayan bireyler hayatta kalır ve özelliklerini sonraki nesillere aktarır; zamanla popülasyon değişir."
      },
      {
        id: "s75",
        difficulty: "hard",
        question: "Periyodik tabloda en hafif element hangisidir?",
        options: ["Helyum", "Lityum", "Hidrojen", "Berilyum"],
        correctIndex: 2,
        explanation: "Hidrojen (H), atom numarası 1 ve atom kütlesi ~1 g/mol olan en hafif elementtir. Evrenin en bol elementi olan hidrojen, yıldızlarda füzyon reaksiyonlarında yakıt olarak kullanılır; Dünya'da ise ağırlıklı olarak su ve organik bileşiklerde bulunur."
      },
      {
        id: "s76",
        difficulty: "hard",
        question: "Işığın prizmadan geçerek renklere ayrılmasına ne ad verilir?",
        options: ["Yansıma", "Kırılma (dispersiyon)", "Girişim", "Kırınım"],
        correctIndex: 1,
        explanation: "Işığın bir prizmadan geçerken farklı dalga boylarının farklı açılarda kırılması sonucu renklere ayrılmasına dispersiyon (dağılma/renk ayrışması) denir. Gökkuşağı da bu ilkeyle açıklanır; su damlacıkları doğal prizma işlevi görür."
      },
      {
        id: "s77",
        difficulty: "hard",
        question: "Ohm yasasına göre elektrik akımı nasıl hesaplanır?",
        options: ["Akım = Voltaj + Direnç", "Akım = Voltaj × Direnç", "Akım = Voltaj / Direnç", "Akım = Direnç / Voltaj"],
        correctIndex: 2,
        explanation: "Ohm yasasına göre I = V/R; akım (I, amper) voltajın (V, volt) dirençe (R, ohm) oranına eşittir. Alman fizikçi Georg Simon Ohm tarafından 1827'de formüle edilen bu yasa, devre analizinin temel taşlarından biridir."
      },
      {
        id: "s78",
        difficulty: "hard",
        question: "Termodinamiğin birinci yasası neyi ifade eder?",
        options: ["Entropi her zaman artar", "Mutlak sıfıra ulaşmak imkânsızdır", "Enerji yaratılamaz ve yok edilemez, yalnızca dönüştürülür", "Isı, sıcaktan soğuğa akar"],
        correctIndex: 2,
        explanation: "Termodinamiğin birinci yasası, enerjinin korunumu ilkesidir: Kapalı bir sistemde enerji ne yaratılabilir ne de yok edilebilir; yalnızca biçim değiştirebilir. İş, ısı ve iç enerji arasındaki ilişkiyi matematiksel olarak tanımlar."
      },
      {
        id: "s79",
        difficulty: "hard",
        question: "Büyük Patlama teorisine göre evren yaklaşık kaç yıl önce oluşmuştur?",
        options: ["4,5 milyar yıl önce", "13,8 milyar yıl önce", "1 trilyon yıl önce", "100 milyon yıl önce"],
        correctIndex: 1,
        explanation: "Kozmik mikrodalga artalan radyasyonu ve Hubble Uzay Teleskobu verileri başta olmak üzere çeşitli kanıtlara göre Büyük Patlama yaklaşık 13,8 milyar yıl önce gerçekleşmiştir. Evren bu andan itibaren genişlemeye ve soğumaya başlamıştır."
      },
      {
        id: "s80",
        difficulty: "hard",
        question: "DNA'nın çift sarmal yapısını kim keşfetmiştir?",
        options: ["Louis Pasteur ve Robert Koch", "Marie Curie ve Pierre Curie", "James Watson ve Francis Crick", "Gregor Mendel ve Hugo de Vries"],
        correctIndex: 2,
        explanation: "DNA'nın çift sarmal yapısı 1953 yılında James Watson ve Francis Crick tarafından Rosalind Franklin'in X-ışını kristalografi verilerinden de yararlanılarak modellenmiştir. Bu keşif, genetik ve biyoteknolojiyi derinden etkilemiş; Watson, Crick ve Maurice Wilkins 1962 Nobel Tıp Ödülü'nü almıştır."
      },
      {
        id: "s81",
        difficulty: "hard",
        question: "Fotosentezin gerçekleştiği hücre organeli nedir?",
        options: ["Mitokondri", "Ribozom", "Kloroplast", "Hücre çekirdeği"],
        correctIndex: 2,
        explanation: "Fotosentez, bitki hücrelerindeki kloroplastlarda gerçekleşir. Kloroplastlar, güneş ışığını kimyasal enerjiye dönüştüren klorofil pigmentini içerir. Bu süreçte CO₂ ve H₂O'dan glikoz ve oksijen üretilir."
      },
      {
        id: "s82",
        difficulty: "hard",
        question: "Işığın boşluktaki hızı yaklaşık kaç km/s'dir?",
        options: ["30.000 km/s", "300.000 km/s", "3.000.000 km/s", "30.000.000 km/s"],
        correctIndex: 1,
        explanation: "Işığın boşluktaki hızı saniyede yaklaşık 299.792 km (yaklaşık 300.000 km/s) olup fizikteki temel sabitlerden biridir. Einstein'ın Özel Görelilik Teorisi'ne göre hiçbir nesne veya bilgi bu hızı aşamaz ve bu hız tüm gözlemciler için aynıdır."
      },
      {
        id: "s83",
        difficulty: "hard",
        question: "Evrenin yaklaşık yaşı ne kadardır?",
        options: ["4.6 milyar yıl", "8.1 milyar yıl", "13.8 milyar yıl", "25 milyar yıl"],
        correctIndex: 2,
        explanation: "Kozmik mikrodalga arka plan radyasyonu ölçümlerine dayanan güncel astronomik verilere göre evrenin yaşı yaklaşık 13.8 milyar yıldır. Büyük Patlama (Big Bang) olarak bilinen bu başlangıç noktasından itibaren evren genişlemeye devam etmektedir."
      },
      {
        id: "s84",
        difficulty: "hard",
        question: "Genetik biliminin babası kimdir?",
        options: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "James Watson"],
        correctIndex: 2,
        explanation: "Avusturyalı rahip ve bilim insanı Gregor Mendel, 1850-1860'lı yıllarda bezelye bitkisi üzerinde yaptığı deneylerle kalıtım yasalarını ortaya koymuş ve genetiğin temellerini atmıştır. Baskın ve çekinik gen kavramları da Mendel'in çalışmalarından doğmuştur."
      },
      {
        id: "s85",
        difficulty: "hard",
        question: "Radyoaktiviteyi kim keşfetmiştir?",
        options: ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "Niels Bohr"],
        correctIndex: 1,
        explanation: "Fransız fizikçi Henri Becquerel, 1896 yılında uranyum tuzlarının kendiliğinden radyasyon yaydığını fark ederek radyoaktiviteyi keşfetmiştir. Bu buluş, Pierre ve Marie Curie'nin polonyo ve radyum elementlerini keşfetmesiyle daha da geliştirilmiş; Becquerel bu çalışmalarıyla 1903 Nobel Fizik Ödülü'nü kazanmıştır."
      },
      {
        id: "s86",
        difficulty: "hard",
        question: "DNA'nın çift sarmal yapısını hangi bilim insanları keşfetmiştir?",
        options: ["Einstein ve Bohr", "Watson ve Crick", "Mendel ve Darwin", "Pasteur ve Koch"],
        correctIndex: 1,
        explanation: "James Watson ve Francis Crick, 1953 yılında Rosalind Franklin'in X-ışını kırınım verilerinden de yararlanarak DNA'nın çift sarmal yapısını ortaya koymuşlardır. Bu buluş, modern moleküler biyolojinin temelini oluşturmuş; Watson, Crick ve Wilkins 1962 Nobel Fizyoloji Ödülü'ne layık görülmüştür."
      },
      {
        id: "s87",
        difficulty: "hard",
        question: "Fotoelektrik etkiyi açıklayarak Nobel Ödülü kazanan bilim insanı kimdir?",
        options: ["Niels Bohr", "Max Planck", "Albert Einstein", "Werner Heisenberg"],
        correctIndex: 2,
        explanation: "Albert Einstein, 1905 yılında fotoelektrik etkiyi kuantum teorisini kullanarak açıklamış ve bu çalışmasıyla 1921 Nobel Fizik Ödülü'nü kazanmıştır. İronik biçimde Görelilik Teorisi değil fotoelektrik etki, Einstein'a Nobel'i kazandırmıştır."
      },
      {
        id: "s88",
        difficulty: "hard",
        question: "Ozon tabakasını tahrip ettiği bilinen maddeler hangileridir?",
        options: ["Karbondioksit (CO₂)", "Kloroflorokarbonlar (CFC)", "Metan (CH₄)", "Su buharı (H₂O)"],
        correctIndex: 1,
        explanation: "Klima, buzdolabı ve sprey kutularında kullanılan kloroflorokarbonlar (CFC), stratosfer tabakasına çıkarak ozon moleküllerini (O₃) parçalar. Ozon tabakasının incelmesi zararlı UV radyasyonunun yeryüzüne ulaşmasına neden olur; bu tehlike karşısında 1987'de imzalanan Montreal Protokolü CFC kullanımını kısıtlamıştır."
      },
      {
        id: "s89",
        difficulty: "hard",
        question: "Asit ile bazın nötralizasyon reaksiyonunun ürünleri nelerdir?",
        options: ["Oksit ve su", "Tuz ve su", "Alkol ve su", "Gaz ve asit"],
        correctIndex: 1,
        explanation: "Bir asit ile bir baz tepkimeye girdiğinde nötralizasyon reaksiyonu gerçekleşir ve ürünler tuz ile sudur. Örneğin hidroklorik asit (HCl) ile sodyum hidroksit (NaOH) tepkimesi; sodyum klorür (NaCl, sofra tuzu) ve su (H₂O) oluşturur."
      },
      {
        id: "s90",
        difficulty: "hard",
        question: "Atom çekirdeğini bir arada tutan temel kuvvet hangisidir?",
        options: ["Elektromanyetik kuvvet", "Gravitasyon kuvveti", "Güçlü nükleer kuvvet", "Zayıf nükleer kuvvet"],
        correctIndex: 2,
        explanation: "Güçlü nükleer kuvvet, çekirdekteki protonlar ve nötronları (nükleonlar) bir arada tutan temel kuvvettir. Elektromanyetik kuvvetten yaklaşık 100 kat güçlü olan bu kuvvet, yalnızca çok kısa mesafelerde (10⁻¹⁵ m) etkilidir ve çekirdeğin dağılmasını engeller."
      },
      {
        id: "s91",
        difficulty: "hard",
        question: "Mutlak sıfır kaçıncı dereceye karşılık gelir?",
        options: ["-100°C", "-173°C", "-273°C", "-373°C"],
        correctIndex: 2,
        explanation: "Mutlak sıfır, termometreler için teorik alt sınır olup -273.15°C (0 Kelvin) değerine karşılık gelir. Bu sıcaklıkta maddenin termal hareketinin teorik olarak durduğu kabul edilir; ancak Heisenberg'in belirsizlik ilkesi gereği madde tamamen hareketsiz kalamaz."
      },
      {
        id: "s92",
        difficulty: "hard",
        question: "Maddenin dördüncü hali hangisidir?",
        options: ["Kristal", "Plazma", "Bose-Einstein yoğuşması", "Ferrofluid"],
        correctIndex: 1,
        explanation: "Katı, sıvı ve gaz hallerinin yanı sıra maddenin dördüncü hali plazma olarak kabul edilir. Plazma, iyonlaşmış gazdan oluşur; güneş, yıldızlar ve şimşekler doğal plazma örnekleridir. Evrendeki toplam maddenin %99'undan fazlasının plazma halinde olduğu tahmin edilmektedir."
      },
      {
        id: "s93",
        difficulty: "hard",
        question: "Newton'un hareket yasalarına göre net kuvvetin sıfır olduğu bir cisim ne yapar?",
        options: ["Hızlanır", "Yavaşlar", "Sabit hızla hareket eder ya da durur", "Her zaman durur"],
        correctIndex: 2,
        explanation: "Newton'un Birinci Hareket Yasası'na (eylemsizlik yasası) göre bir cisim üzerine etki eden net kuvvet sıfırsa, cisim ya hareketsiz kalır ya da sabit hız ve doğrultuda hareket etmeye devam eder. Bu ilke Galileo'nun gözlemlerine dayanmakta olup günlük hayatta araç freni kavramıyla doğrudan ilişkilidir."
      },
      {
        id: "s94",
        difficulty: "hard",
        question: "Hangi biyolojik molekül kalıtsal bilgiyi taşır?",
        options: ["Protein", "Lipid", "DNA", "Karbonhidrat"],
        correctIndex: 2,
        explanation: "DNA (Deoksiribonükleik Asit), canlıların genetik bilgisini taşıyan ve bir nesilden diğerine aktaran çift sarmallı moleküldür. DNA'daki dört nükleotid bazının (Adenin, Timin, Guanin, Sitozin) dizilimi proteinlerin sentez talimatlarını kodlar."
      },
      {
        id: "s95",
        difficulty: "hard",
        question: "Evrenin genişlediğini gösteren 'Hubble Yasası' ne anlama gelir?",
        options: ["Gezegenler yıldızları iter", "Uzak galaksiler bizden uzaklaşmakta ve uzaklıkla orantılı hızlanmaktadır", "Işık hızı sabit değildir", "Evren döngüsel olarak genişler ve küçülür"],
        correctIndex: 1,
        explanation: "Edwin Hubble, 1929'da galaksilerin uzaklıklarıyla orantılı hızlarda bizden uzaklaştığını keşfetmiştir. Bu bulgu, evrenin genişlediğini ve geriye doğru izlendiğinde tek bir noktadan başladığını — Büyük Patlama (Big Bang) hipotezini — destekler."
      },
      {
        id: "s96",
        difficulty: "hard",
        question: "Periyodik tablodaki en hafif element hangisidir?",
        options: ["Helyum", "Lityum", "Hidrojen", "Berilyum"],
        correctIndex: 2,
        explanation: "Atom numarası 1 olan hidrojen, evrende en bol bulunan ve periyodik tablodaki en hafif elementtir. Yıldızların enerji üretiminde füzyon reaksiyonlarının yakıtını oluşturan hidrojen; aynı zamanda suyu (H₂O) meydana getiren elementin ta kendisidir."
      },
      {
        id: "s97",
        difficulty: "hard",
        question: "Virüsler canlılık sınıflandırmasında nasıl değerlendirilir?",
        options: ["Prokaryot canlılar", "Ökaryot canlılar", "Canlı ile cansız arasında sınır varlıklar", "Fungidir"],
        correctIndex: 2,
        explanation: "Virüsler; hücre yapısı bulunmayan, kendi başına çoğalamayan ve metabolizma göstermeyen yapılarıyla klasik canlı tanımına uymaz. Bununla birlikte genetik materyal (DNA veya RNA) taşımaları ve konak hücrelerde çoğalabilmeleri nedeniyle 'sınır varlıklar' olarak kabul edilirler."
      },
      {
        id: "s98",
        difficulty: "hard",
        question: "Fotosintezde açığa çıkan oksijen nereden gelir?",
        options: ["Karbondioksitten", "Glikozdan", "Sudan", "Kloroplasttan"],
        correctIndex: 2,
        explanation: "Fotosintez sırasında bitkiler, su (H₂O) moleküllerini ışık enerjisiyle parçalar (fotoliz) ve bu işlem sırasında açığa oksijen çıkar. Karbondioksit (CO₂) ise fotosentezde glikoz sentezi için karbon kaynağı olarak kullanılır; oksijen CO₂'den değil H₂O'dan gelir."
      },
      {
        id: "s99",
        difficulty: "hard",
        question: "Elektromanyetik spektrumda görünür ışığın hemen ardından gelen kısa dalga boylu ışınım hangisidir?",
        options: ["Kızılötesi", "Morötesi (UV)", "Mikrodalgalar", "Radyo dalgaları"],
        correctIndex: 1,
        explanation: "Morötesi (UV) ışınım, görünür ışığın mor ucunun hemen ötesinde yer alır ve 10-400 nm dalga boyuna sahiptir. Güneş; UVA, UVB ve UVC ışınımları yayar; ozon tabakası zararlı UVC ve UVB'nin büyük bölümünü absorbe eder. Aşırı UV maruziyeti deri kanseri riskini artırır."
      },
      {
        id: "s100",
        difficulty: "hard",
        question: "Suyun kimyasal formülü nedir?",
        options: ["HO₂", "H₂O₂", "H₂O", "OH"],
        correctIndex: 2,
        explanation: "Su, iki hidrojen atomu ile bir oksijen atomundan oluşan H₂O formüllü bileşiktir. Olağanüstü çözücü özelliği, yüksek spesifik ısı kapasitesi ve yüzey gerilimi nedeniyle yaşamın vazgeçilmezi olan su; Dünya yüzeyinin yaklaşık %71'ini kaplamaktadır."
      },
      {
        id: "s101",
        difficulty: "hard",
        question: "Periyodik tabloda kaç element bulunmaktadır?",
        options: ["104", "112", "118", "126"],
        correctIndex: 2,
        explanation: "Günümüzde periyodik tabloda 118 element yer almaktadır. Bunların 94'ü doğada bulunurken geri kalanları yapay olarak üretilmiştir. En son onaylanan dört element (113 Nihonyum, 115 Moskovyum, 117 Tennesin, 118 Oganesson) 2016'da tescil edildi. Elementler atom numaralarına göre sıralanır."
      },
      {
        id: "s102",
        difficulty: "hard",
        question: "Newton'un hangi hareket yasası 'Her eylem için eşit ve zıt bir tepki vardır' ilkesini ifade eder?",
        options: ["1. Hareket Yasası", "2. Hareket Yasası", "3. Hareket Yasası", "Evrensel Çekim Yasası"],
        correctIndex: 2,
        explanation: "Newton'un 3. Hareket Yasası'na göre bir cisim başka bir cisme kuvvet uyguladığında, ikinci cisim de eşit büyüklükte ve zıt yönde bir kuvvet uygular. Bu ilke roket itişinden yüzmeye, silah tepmesinden gündelik hayattaki sayısız etkileşime kadar geniş bir yelpazede geçerlidir. Eylem-tepki çiftleri her zaman farklı cisimler üzerinde etkir."
      },
      {
        id: "s103",
        difficulty: "hard",
        question: "Einstein'ın E = mc² formülünde 'c' neyi temsil eder?",
        options: ["Özgül ısı kapasitesi", "Işık hızı", "Coulomb sabiti", "Dalga frekansı"],
        correctIndex: 1,
        explanation: "E = mc² formülünde 'c', vakumdaki ışık hızını temsil eder: yaklaşık 299.792.458 m/s (saniyede ~300.000 km). Einstein'ın Özel Görelilik Teorisi kapsamında 1905'te ortaya koyduğu bu denklem, kütlenin ve enerjinin birbirine dönüşebileceğini gösterir. Küçük bir kütle büyük miktarda enerjiyle eşdeğerdir; bu ilke nükleer reaktörlerin ve atom bombalarının temelini oluşturur."
      },
      {
        id: "s104",
        difficulty: "hard",
        question: "İnsanlık tarihinin ilk yapay uydusu hangisidir?",
        options: ["Explorer 1", "Vostok 1", "Sputnik 1", "Luna 1"],
        correctIndex: 2,
        explanation: "Sovyetler Birliği'nin 4 Ekim 1957'de fırlattığı Sputnik 1, dünyanın yörüngesine oturtulan ilk yapay uydudur. Yaklaşık 83 kg ağırlığında ve 58 cm çapında olan Sputnik 1, radyo sinyalleri yayarak Dünya'yı 96 dakikada bir turladı. Bu başarı, uzay yarışını ve modern uydu teknolojisinin gelişimini tetikledi."
      },
      {
        id: "s105",
        difficulty: "hard",
        question: "Mutasyon biyolojide ne anlama gelir?",
        options: ["Hücrenin bölünme süreci", "DNA dizisindeki kalıcı değişiklik", "Protein sentez hatası", "Hücre zarının geçirgenlik değişimi"],
        correctIndex: 1,
        explanation: "Mutasyon, bir organizmanın DNA dizisinde meydana gelen kalıcı değişikliktir. Radyasyon, kimyasal maddeler veya DNA kopyalanma hataları gibi nedenlerle oluşabilir. Mutasyonlar zararlı (kanser gibi hastalıklara yol açabilir), yararlı (evrimsel avantaj sağlayabilir) veya nötr olabilir. Evrimsel değişimin temel kaynağını oluştururlar."
      },
      {
        id: "s106",
        difficulty: "hard",
        question: "Canlıların sınıflandırılmasını inceleyen bilim dalı nedir?",
        options: ["Ekoloji", "Taksonomi", "Etoloji", "Biyokimya"],
        correctIndex: 1,
        explanation: "Taksonomi (sistematik), canlıları ortak özelliklerine göre sınıflandıran bilim dalıdır. İsveçli bilim insanı Carl Linnaeus tarafından 18. yüzyılda sistematize edilen bu alan; alem, şube, sınıf, takım, aile, cins ve tür hiyerarşisini kullanır. Modern taksonomi, morfolojik özelliklerle birlikte DNA analizini de esas almaktadır."
      },
      {
        id: "s107",
        difficulty: "hard",
        question: "Modern periyodik tabloyu kim geliştirmiştir?",
        options: ["Antoine Lavoisier", "John Dalton", "Dmitri Mendeleev", "Marie Curie"],
        correctIndex: 2,
        explanation: "Rus kimyacı Dmitri Mendeleev, 1869'da elementleri artan atom ağırlıklarına göre düzenleyerek modern periyodik tablonun temelini attı. Dahası, tablosundaki boşlukları gözlemleyerek henüz keşfedilmemiş elementlerin özelliklerini doğru biçimde tahmin etti. Sonradan keşfedilen galyum, skandiyum ve germanyum bu tahminleri doğruladı."
      },
      {
        id: "s108",
        difficulty: "hard",
        question: "Ay, Dünya'nın etrafında yaklaşık kaç günde bir tam tur tamamlar?",
        options: ["14,8 gün", "27,3 gün", "29,5 gün", "33,2 gün"],
        correctIndex: 1,
        explanation: "Ay, Dünya'nın etrafında siderik (yıldızlara göre) periyotta yaklaşık 27,3 günde bir tur tamamlar. Ancak Güneş'e göre hesaplanan sinodik ay (Yeni Ay'dan Yeni Ay'a) yaklaşık 29,5 gündür. Bu fark, Dünya'nın güneş etrafında hareket etmesinden kaynaklanır; takvim ayları bu sinodik periyodu esas alır."
      },
      {
        id: "s109",
        difficulty: "hard",
        question: "Klorofil bitkide ne işe yarar?",
        options: ["Su iletimini sağlar", "Güneş ışığını absorbe ederek fotosenteze enerji sağlar", "Kök büyümesini düzenler", "Hücre duvarını güçlendirir"],
        correctIndex: 1,
        explanation: "Klorofil, bitki yapraklarına yeşil rengini veren ve fotosentezin merkezinde yer alan bir pigmenttir. Güneş ışığını (özellikle kırmızı ve mavi dalga boylarını) absorbe ederek bu enerjiyi karbondioksit ve suyu glikoza (şekere) ve oksijene dönüştürmek için kullanır. Klorofil olmadan bitkiler büyümek için gerekli enerjiyi üretemez."
      },
      {
        id: "s110",
        difficulty: "hard",
        question: "Güneş panelleri hangi enerjiyi elektriğe dönüştürür?",
        options: ["Isı enerjisi", "Rüzgâr enerjisi", "Güneş (ışık) enerjisi", "Kimyasal enerji"],
        correctIndex: 2,
        explanation: "Güneş panelleri (fotovoltaik hücreler), gün ışığındaki fotonları doğrudan elektrik enerjisine dönüştürür. Bu süreçte yarı iletken malzeme olan silikon, fotonları absorbe ederek elektronları serbest bırakır ve elektrik akımı oluşturur. Temiz ve yenilenebilir bir enerji kaynağı olan güneş enerjisi, küresel enerji dönüşümünün kilit bileşenlerinden biridir."
      },
      {
        id: "s111",
        difficulty: "easy",
        question: "Hangi gezegene 'Kızıl Gezegen' denir?",
        options: ["Venüs", "Mars", "Jüpiter", "Satürn"],
        correctIndex: 1,
        explanation: "Mars, yüzeyindeki demir oksit (pas) bakımından zengin toprağı nedeniyle kırmızımsı görüntüsünden ötürü 'Kızıl Gezegen' olarak anılır."
      },
      {
        id: "s112",
        difficulty: "easy",
        question: "Sodyum elementinin kimyasal sembolü nedir?",
        options: ["So", "Sd", "Na", "Sm"],
        correctIndex: 2,
        explanation: "Sodyum'un sembolü Na'dır; Latince adı 'natrium'dan gelir."
      },
      {
        id: "s113",
        difficulty: "easy",
        question: "Hangi gezegen Güneş Sistemi'nde Güneş'e en yakındır?",
        options: ["Venüs", "Dünya", "Merkür", "Mars"],
        correctIndex: 2,
        explanation: "Merkür, Güneş'e ortalama 58 milyon km uzaklıkta olan ve Güneş'e en yakın gezegendir."
      },
      {
        id: "s114",
        difficulty: "easy",
        question: "Atmosferimizde en bol bulunan gaz hangisidir?",
        options: ["Oksijen", "Karbondioksit", "Azot", "Argon"],
        correctIndex: 2,
        explanation: "Atmosferimizin yaklaşık %78'ini azot (nitrojen), %21'ini oksijen ve geri kalanını diğer gazlar oluşturur."
      },
      {
        id: "s115",
        difficulty: "easy",
        question: "Suyun kimyasal formülü nedir?",
        options: ["HO", "H2O", "OH2", "H2O2"],
        correctIndex: 1,
        explanation: "Su molekülü, iki hidrojen ve bir oksijen atomundan oluşur; formülü H2O olarak yazılır."
      },
      {
        id: "s116",
        difficulty: "easy",
        question: "İnsan vücudunun yaklaşık yüzde kaçı sudan oluşur?",
        options: ["%30", "%50", "%60", "%80"],
        correctIndex: 2,
        explanation: "Yetişkin insan vücudunun yaklaşık %60'ı sudur; bu oran yaşa, cinsiyete ve vücut kompozisyonuna göre değişir."
      },
      {
        id: "s117",
        difficulty: "easy",
        question: "Yer çekimi kuvvetini matematiksel olarak ilk tanımlayan bilim insanı kimdir?",
        options: ["Galileo", "Newton", "Einstein", "Kepler"],
        correctIndex: 1,
        explanation: "Isaac Newton, 1687'de yayımladığı 'Principia'da evrensel kütle çekim yasasını matematiksel olarak formülleştirdi."
      },
      {
        id: "s118",
        difficulty: "easy",
        question: "Periyodik tabloda 'O' sembolü hangi elementi temsil eder?",
        options: ["Altın", "Oksijen", "Osmiyum", "Olivin"],
        correctIndex: 1,
        explanation: "O sembolü, atom numarası 8 olan ve solunum için zorunlu olan oksijen elementini temsil eder."
      },
      {
        id: "s119",
        difficulty: "easy",
        question: "Saniyede ışığın boşluktaki yaklaşık hızı kaç km'dir?",
        options: ["3.000", "30.000", "300.000", "3.000.000"],
        correctIndex: 2,
        explanation: "Işık boşlukta saniyede yaklaşık 299.792 km, yani yuvarlak ifadeyle 300.000 km hızla yayılır."
      },
      {
        id: "s120",
        difficulty: "easy",
        question: "Hangi organel hücrede protein sentezler?",
        options: ["Mitokondri", "Ribozom", "Golgi cisimciği", "Lizozom"],
        correctIndex: 1,
        explanation: "Ribozomlar, mRNA üzerindeki kodlara göre amino asitleri birleştirerek protein sentezini gerçekleştirir."
      },
      {
        id: "s121",
        difficulty: "easy",
        question: "Periyodik tablodaki 'asal gazlar' hangi gruptadır?",
        options: ["1. Grup", "7. Grup", "8A (18) Grubu", "Geçiş elementleri"],
        correctIndex: 2,
        explanation: "Asal (soy) gazlar; helyum, neon, argon, kripton, ksenon ve radon olup periyodik tablonun 18. (8A) grubunu oluşturur."
      },
      {
        id: "s122",
        difficulty: "easy",
        question: "Bir bilgisayardaki 1 baytlık bellek kaç bit içerir?",
        options: ["4", "8", "16", "32"],
        correctIndex: 1,
        explanation: "Bilgisayar mimarisinde 1 bayt 8 bitten oluşur; 1 bayt 0-255 arası bir değer tutabilir."
      },
      {
        id: "s123",
        difficulty: "easy",
        question: "Hangisi bir yenilenebilir enerji kaynağı değildir?",
        options: ["Rüzgâr", "Güneş", "Doğal gaz", "Jeotermal"],
        correctIndex: 2,
        explanation: "Doğal gaz milyonlarca yılda oluşan fosil bir yakıttır; rüzgâr, güneş, jeotermal ve hidroelektrik ise yenilenebilir kaynaklardır."
      },
      {
        id: "s124",
        difficulty: "easy",
        question: "Hangi gezegen 'gaz devi' olarak adlandırılır?",
        options: ["Mars", "Venüs", "Jüpiter", "Merkür"],
        correctIndex: 2,
        explanation: "Jüpiter; Satürn, Uranüs ve Neptün ile birlikte ağırlıklı olarak hidrojen ve helyumdan oluşan gaz devleri grubundadır."
      },
      {
        id: "s125",
        difficulty: "easy",
        question: "Bir cismin sıcaklığını ölçmek için kullanılan birim hangisidir?",
        options: ["Kilogram", "Newton", "Kelvin", "Mol"],
        correctIndex: 2,
        explanation: "Uluslararası Birim Sistemi'nde (SI) sıcaklık birimi Kelvin (K)'dır; günlük yaşamda Celsius (°C) yaygın olarak kullanılır."
      },
      {
        id: "s126",
        difficulty: "easy",
        question: "İnsan DNA'sında bulunan baz çiftleri yaklaşık olarak kaç tanedir?",
        options: ["3 milyon", "30 milyon", "3 milyar", "30 milyar"],
        correctIndex: 2,
        explanation: "İnsan genomu yaklaşık 3 milyar baz çifti içerir; tüm bu bilgi her hücre çekirdeğindeki 23 çift kromozom üzerinde paketlenmiştir."
      },
      {
        id: "s127",
        difficulty: "easy",
        question: "Hangi cihaz çok küçük cisimleri büyütmeye yarar?",
        options: ["Teleskop", "Mikroskop", "Spektroskop", "Periskop"],
        correctIndex: 1,
        explanation: "Mikroskop, lens veya elektron demeti kullanarak çıplak gözle görülemeyen küçük cisim ve mikroorganizmaları büyüterek görüntülemeye yarar."
      },
      {
        id: "s128",
        difficulty: "medium",
        question: "Bir suyun pH değeri 7 ise bu çözelti nasıl tanımlanır?",
        options: ["Asidik", "Bazik", "Nötr", "Tuz"],
        correctIndex: 2,
        explanation: "pH değeri 7 olan çözeltiler nötrdür; 7'nin altı asidik, üstü baziktir."
      },
      {
        id: "s129",
        difficulty: "medium",
        question: "Standart koşullarda saf suyun donma noktası kaç °C'dir?",
        options: ["-100", "0", "32", "100"],
        correctIndex: 1,
        explanation: "Saf su 1 atm basınçta 0 °C'de donar; bu sıcaklık aynı zamanda Celsius ölçeğinin sıfırı olarak tanımlanmıştır."
      },
      {
        id: "s130",
        difficulty: "medium",
        question: "Periyodik tabloda atom numarası en yüksek doğal element hangisidir?",
        options: ["Uranyum", "Plütonyum", "Aktinyum", "Toryum"],
        correctIndex: 0,
        explanation: "Doğada gözle görülür miktarda bulunan en yüksek atom numaralı element, atom numarası 92 olan uranyumdur."
      },
      {
        id: "s131",
        difficulty: "medium",
        question: "Bir atomun çekirdeğinde hangi parçacıklar bulunur?",
        options: ["Yalnızca elektron", "Proton ve nötron", "Yalnızca nötron", "Proton ve elektron"],
        correctIndex: 1,
        explanation: "Atom çekirdeği, pozitif yüklü protonlar ve yüksüz nötronlardan oluşur; elektronlar ise çekirdeğin etrafında dolaşır."
      },
      {
        id: "s132",
        difficulty: "medium",
        question: "Big Bang teorisine göre evren yaklaşık kaç yıl önce başlamıştır?",
        options: ["4,5 milyar", "9 milyar", "13,8 milyar", "100 milyar"],
        correctIndex: 2,
        explanation: "Mevcut kozmolojik gözlemler ve CMB ölçümleri evrenin yaklaşık 13,8 milyar yıl önce başladığını gösterir."
      },
      {
        id: "s133",
        difficulty: "medium",
        question: "Hangi gezegenin halkaları en belirgindir?",
        options: ["Jüpiter", "Satürn", "Neptün", "Uranüs"],
        correctIndex: 1,
        explanation: "Tüm gaz devlerinin halkaları olsa da, Satürn'ün buz parçacıklarından oluşan halkaları en geniş ve en parlak olanlardır."
      },
      {
        id: "s134",
        difficulty: "medium",
        question: "Termodinamiğin birinci yasası neyi belirtir?",
        options: ["Enerji yoktan var, vardan yok edilemez", "Entropi her zaman artar", "Mutlak sıfıra ulaşılamaz", "Isı yalnızca soğuktan sıcağa akar"],
        correctIndex: 0,
        explanation: "Termodinamiğin birinci yasası enerjinin korunumunu ifade eder: Yalıtılmış bir sistemde enerji yoktan var ya da vardan yok edilemez, sadece dönüşür."
      },
      {
        id: "s135",
        difficulty: "medium",
        question: "Bir mol gaz, normal koşullarda (NTP) yaklaşık kaç litre hacim kaplar?",
        options: ["18 L", "22,4 L", "32 L", "100 L"],
        correctIndex: 1,
        explanation: "Normal şartlarda (0 °C, 1 atm) bir mol ideal gaz, Avogadro yasasına göre yaklaşık 22,4 litre hacim kaplar."
      },
      {
        id: "s136",
        difficulty: "medium",
        question: "Avogadro sayısı yaklaşık olarak kaçtır?",
        options: ["6,022 × 10^20", "6,022 × 10^23", "6,022 × 10^26", "6,022 × 10^30"],
        correctIndex: 1,
        explanation: "Avogadro sayısı, bir molde bulunan tanecik sayısıdır ve değeri 6,022 × 10^23'tür."
      },
      {
        id: "s137",
        difficulty: "medium",
        question: "Hangi bilim insanı 'Görelilik Teorisi'ni geliştirmiştir?",
        options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
        correctIndex: 1,
        explanation: "Albert Einstein, Özel Görelilik (1905) ve Genel Görelilik (1915) kuramlarını geliştirerek modern fiziğin temellerini değiştirmiştir."
      },
      {
        id: "s138",
        difficulty: "medium",
        question: "İnsan kromozomlarındaki DNA hangi temel baz çiftlerini içerir?",
        options: ["A-T ve G-C", "A-G ve C-T", "A-C ve G-T", "A-U ve G-C"],
        correctIndex: 0,
        explanation: "DNA'da Adenin Timin ile, Guanin ise Sitozin ile çift oluşturur (A-T ve G-C); RNA'da Timin yerine Urasil bulunur."
      },
      {
        id: "s139",
        difficulty: "medium",
        question: "İnternet protokol IPv4 adresi kaç bitten oluşur?",
        options: ["8", "16", "32", "64"],
        correctIndex: 2,
        explanation: "IPv4 adresleri 32 bit uzunluğundadır ve 4 sekizli (örn. 192.168.0.1) şeklinde gösterilir; IPv6 ise 128 bittir."
      },
      {
        id: "s140",
        difficulty: "medium",
        question: "Hangi galaksinin içinde Dünya ve Güneş Sistemi yer alır?",
        options: ["Andromeda", "Samanyolu", "Üçgen", "Centaurus A"],
        correctIndex: 1,
        explanation: "Güneş Sistemi, çubuklu sarmal bir galaksi olan Samanyolu'nda, Orion kolu adı verilen bölgede yer alır."
      },
      {
        id: "s141",
        difficulty: "medium",
        question: "Quantum mekaniği temel olarak hangi ölçekteki olayları inceler?",
        options: ["Galaktik", "Astronomik", "Atomik ve atom altı", "Moleküler"],
        correctIndex: 2,
        explanation: "Kuantum mekaniği, atom ve atom altı parçacıkların davranışlarını olasılıklar çerçevesinde inceleyen modern fizik dalıdır."
      },
      {
        id: "s142",
        difficulty: "medium",
        question: "İlk yapay uydu Sputnik 1, hangi yıl uzaya gönderilmiştir?",
        options: ["1947", "1957", "1969", "1981"],
        correctIndex: 1,
        explanation: "Sovyetler Birliği, Sputnik 1'i 4 Ekim 1957'de fırlatarak Dünya'nın yörüngesine giren ilk insan yapımı uyduyu uzaya yerleştirdi."
      },
      {
        id: "s143",
        difficulty: "medium",
        question: "Hangisi bir programlama paradigması değildir?",
        options: ["Nesne yönelimli", "Fonksiyonel", "Yapısal", "Basamaklı"],
        correctIndex: 3,
        explanation: "Nesne yönelimli, fonksiyonel ve yapısal yaklaşımlar yaygın programlama paradigmalarıdır; 'basamaklı' bir paradigmaya değil bir proje yönetim modeline (waterfall) gönderme yapar."
      },
      {
        id: "s144",
        difficulty: "medium",
        question: "Optik bir teleskobu icat eden ilk kişi olarak kim kabul edilir?",
        options: ["Galileo Galilei", "Hans Lippershey", "Johannes Kepler", "Isaac Newton"],
        correctIndex: 1,
        explanation: "İlk teleskop patent başvurusu 1608'de Hollandalı gözlükçü Hans Lippershey tarafından yapılmıştır; Galileo bu cihazı geliştirip gökyüzü gözlemine uygulamıştır."
      },
      {
        id: "s145",
        difficulty: "hard",
        question: "Heisenberg'in Belirsizlik İlkesi neyi söyler?",
        options: ["Bir parçacığın konumu ve momentumu eş zamanlı olarak tam doğrulukla bilinemez", "Enerji korunmaz", "Işık hızı sabit değildir", "Atomlar var olamaz"],
        correctIndex: 0,
        explanation: "Heisenberg'in Belirsizlik İlkesi, bir parçacığın konumu ile momentumunun (veya enerji ile zamanın) sınırlı bir doğrulukla aynı anda ölçülebileceğini söyler."
      },
      {
        id: "s146",
        difficulty: "hard",
        question: "Hangi parçacığın varlığı 2012'de CERN'de doğrulanmıştır?",
        options: ["Foton", "Elektron", "Higgs bozonu", "Nötron"],
        correctIndex: 2,
        explanation: "Higgs bozonu, parçacıklara kütle kazandırdığı düşünülen alanın taşıyıcısıdır; 4 Temmuz 2012'de CERN'in ATLAS ve CMS deneyleriyle keşfi açıklandı."
      },
      {
        id: "s147",
        difficulty: "hard",
        question: "İnsan genomunun dizilemesi resmen hangi yıl tamamlandı?",
        options: ["1995", "2003", "2010", "2015"],
        correctIndex: 1,
        explanation: "Uluslararası İnsan Genom Projesi, taslak diziyi 2001'de yayımladı; tam dizileme 2003'te resmen tamamlandığı duyuruldu."
      },
      {
        id: "s148",
        difficulty: "hard",
        question: "Hangi bilim dalı atmosferi inceler?",
        options: ["Hidroloji", "Meteoroloji", "Sismoloji", "Jeoloji"],
        correctIndex: 1,
        explanation: "Meteoroloji, atmosfer olaylarını ve hava durumunu inceleyen bilim dalıdır; sismoloji depremleri inceler."
      },
      {
        id: "s149",
        difficulty: "hard",
        question: "Termodinamiğin ikinci yasasına göre yalıtılmış bir sistemde entropi nasıl değişir?",
        options: ["Sürekli azalır", "Sabit kalır", "Asla artmaz", "Sürekli artar veya sabit kalır"],
        correctIndex: 3,
        explanation: "Termodinamiğin ikinci yasasına göre yalıtılmış bir sistemde toplam entropi (düzensizlik) zamanla artar veya en iyi durumda sabit kalır; asla azalmaz."
      },
      {
        id: "s150",
        difficulty: "hard",
        question: "1869'da periyodik tabloyu sistematik biçimde düzenleyen kimyager kimdir?",
        options: ["John Dalton", "Dmitri Mendeleyev", "Antoine Lavoisier", "Henry Moseley"],
        correctIndex: 1,
        explanation: "Rus kimyager Dmitri Mendeleyev, 1869'da elementleri artan atom kütlelerine göre düzenleyerek modern periyodik tablonun ilk biçimini ortaya koydu."
      },
      {
        id: "s151",
        difficulty: "hard",
        question: "Bir laser ışığını sıradan ışıktan ayıran temel özellik nedir?",
        options: ["Renksiz olması", "Eş fazlı (koherent) olması", "Görünmez olması", "Sürekli yön değiştirmesi"],
        correctIndex: 1,
        explanation: "Laser ışığı tek dalga boyunda, eş fazlı (koherent) ve dar yönlü olmasıyla sıradan ışıktan ayrılır."
      },
      {
        id: "s152",
        difficulty: "hard",
        question: "İlk başarılı insan kalp nakli sırasında hastayı ameliyat eden cerrah kimdir?",
        options: ["Christiaan Barnard", "Norman Shumway", "Michael DeBakey", "Walton Lillehei"],
        correctIndex: 0,
        explanation: "Güney Afrikalı Dr. Christiaan Barnard, 3 Aralık 1967'de Cape Town'da Louis Washkansky'ye dünyanın ilk başarılı insan kalp naklini yaptı."
      },
      {
        id: "s153",
        difficulty: "hard",
        question: "Karanlık madde için aşağıdakilerden hangisi doğrudur?",
        options: ["Görünür ışık yayar", "Galaksilerin dönüş hızlarını açıklamak için varlığı önerilmiştir", "Sıradan baryonik maddedir", "Sadece kara deliklerin içinde bulunur"],
        correctIndex: 1,
        explanation: "Karanlık madde, galaksilerin dönüş eğrileri ve evrenin yapısı gibi gözlemleri açıklamak için varlığı önerilen, ışıkla etkileşmeyen bir madde formudur."
      },
      {
        id: "s154",
        difficulty: "hard",
        question: "İlk bilgisayar virüsü olarak kabul edilen yazılımın adı nedir?",
        options: ["Morris Worm", "Creeper", "ILOVEYOU", "Stuxnet"],
        correctIndex: 1,
        explanation: "1971'de Bob Thomas tarafından ARPANET üzerinde deney amaçlı yazılan 'Creeper', ekrana 'I'm the creeper, catch me if you can!' yazan ilk kendi kendine yayılan programdır."
      },
      {
        id: "s155",
        difficulty: "hard",
        question: "CRISPR/Cas9 teknolojisi ne için kullanılır?",
        options: ["Hızlı internet", "Gen düzenleme", "Yapay zeka", "Yıldız haritalama"],
        correctIndex: 1,
        explanation: "CRISPR/Cas9, bakteri savunma sisteminden uyarlanmış, DNA üzerinde hedeflenen bölgeleri kesip değiştirmeye olanak tanıyan güçlü bir gen düzenleme aracıdır."
      },
      {
        id: "s156",
        difficulty: "hard",
        question: "Bir kara deliğin geri dönüş yapılamaz sınırına ne ad verilir?",
        options: ["Foton küresi", "Olay ufku", "Singülerlik", "Akresyon diski"],
        correctIndex: 1,
        explanation: "Olay ufku (event horizon), bir kara deliğin etrafında ışığın bile kaçamayacağı sınırı tanımlar."
      },
      {
        id: "s157",
        difficulty: "hard",
        question: "Bir programın çalışma anında yer ayırdığı dinamik bellek bölgesi hangisidir?",
        options: ["Stack", "Heap", "Register", "BIOS"],
        correctIndex: 1,
        explanation: "Heap; bir programın çalışma sırasında değişken boyutlu nesneleri için işletim sisteminden dinamik olarak yer ayırdığı bellek bölgesidir."
      },
      {
        id: "s158",
        difficulty: "hard",
        question: "Plütonyum elementinin atom numarası kaçtır?",
        options: ["82", "92", "94", "100"],
        correctIndex: 2,
        explanation: "Plütonyum, periyodik tabloda atom numarası 94 olan radyoaktif bir aktinid elementidir; 1940'ta Glenn Seaborg ve ekibi tarafından üretilmiştir."
      },
      {
        id: "s159",
        difficulty: "hard",
        question: "Maxwell denklemleri hangi alanı tanımlar?",
        options: ["Termodinamik", "Klasik mekanik", "Elektromanyetizma", "Kuantum mekaniği"],
        correctIndex: 2,
        explanation: "James Clerk Maxwell'in 19. yüzyılda formüle ettiği dört denklem, elektrik ve manyetik alanların davranışını ve elektromanyetik dalgaların temellerini tanımlar."
      },
      {
        id: "s160",
        difficulty: "hard",
        question: "Bir bilgisayar ağında 'TCP' kısaltması neyin karşılığıdır?",
        options: ["Transfer Control Protocol", "Transmission Control Protocol", "Total Communication Protocol", "Type Control Protocol"],
        correctIndex: 1,
        explanation: "TCP, Transmission Control Protocol'un kısaltmasıdır; veri paketlerinin güvenilir, sıralı ve hatasız iletilmesini sağlayan temel internet protokolüdür."
      },
      {
        id: "s161",
        difficulty: "easy",
        question: "Maddenin dördüncü hali nedir?",
        options: ["Süperkatı", "Plazma", "Bose-Einstein Yoğuşması", "Süpergaz"],
        correctIndex: 1,
        explanation: "Plazma, maddenin dördüncü halidir; yüksek sıcaklık veya güçlü elektromanyetik alanlar altında gazın iyonize olmasıyla oluşur. Evrendeki görünür maddenin %99'undan fazlası plazma halindedir; yıldızlar, şimşekler ve neon lambaları plazma içerir."
      },
      {
        id: "s162",
        difficulty: "easy",
        question: "Fotosentez sürecinde bitkiler güneş enerjisini ne üretmek için kullanır?",
        options: ["Oksijen ve su", "Glikoz ve oksijen", "Karbondioksit ve azot", "Protein ve yağ"],
        correctIndex: 1,
        explanation: "Fotosentezde bitkiler karbondioksit ve suyu güneş enerjisi yardımıyla glikoz ve oksijene dönüştürür: 6CO₂ + 6H₂O + ışık → C₆H₁₂O₆ + 6O₂. Bu süreç klorofil pigmenti aracılığıyla kloroplastlarda gerçekleşir."
      },
      {
        id: "s163",
        difficulty: "medium",
        question: "Newton'un üçüncü hareket yasası neyi ifade eder?",
        options: ["Her cisim eylemsiz kalmaya çalışır", "Kuvvet = kütle × ivme", "Her etkiye eşit büyüklükte ve zıt yönde bir tepki vardır", "Evrensel çekim kütleyle doğru, mesafeyle ters orantılıdır"],
        correctIndex: 2,
        explanation: "Newton'un üçüncü yasası (Etki-Tepki Yasası): A cisminin B cismine uyguladığı her kuvvete karşılık B, A'ya eşit büyüklükte ve zıt yönde bir kuvvet uygular. Roket itkisi, yüzme ve yürüme bu ilkeyle çalışır."
      },
      {
        id: "s164",
        difficulty: "medium",
        question: "DNA'da adenin (A) hangi baz ile eşleşir?",
        options: ["Guanin (G)", "Sitozin (C)", "Urasil (U)", "Timin (T)"],
        correctIndex: 3,
        explanation: "DNA'nın çift sarmalında baz çiftleşmesi kurala bağlıdır: Adenin (A) yalnızca Timin (T) ile, Guanin (G) ise yalnızca Sitozin (C) ile eşleşir. Bu Chargaff kuralı olarak bilinir. RNA'da ise Timin yerine Urasil kullanılır."
      },
      {
        id: "s165",
        difficulty: "medium",
        question: "Modern periyodik tabloda elementler hangi kritere göre sıralanır?",
        options: ["Atom kütlesine göre", "Proton sayısına (atom numarası) göre", "Elektron sayısına göre", "Nötron sayısına göre"],
        correctIndex: 1,
        explanation: "Modern periyodik tablo, elementleri artan atom numarasına (proton sayısına) göre sıralar; bu yöntemi ilk olarak Henry Moseley 1913'te önermiştir. Mendeleev'in 1869'daki ilk tablosu atom kütlesini esas alıyordu; atom numarası esası bazı tutarsızlıkları gidermiştir."
      },
      {
        id: "s166",
        difficulty: "medium",
        question: "Ses dalgaları hangi tür dalgadır?",
        options: ["Enine (transvers) dalgalar", "Boyuna (longitudinal) dalgalar", "Elektromanyetik dalgalar", "Durgun dalgalar"],
        correctIndex: 1,
        explanation: "Ses dalgaları, ortamdaki parçacıkların dalganın yayılma yönüne paralel titreşimiyle oluşan boyuna (longitudinal) dalgalardır. Bu nedenle ses boşlukta yayılamaz; maddesel bir ortama (katı, sıvı veya gaz) ihtiyaç duyar."
      },
      {
        id: "s167",
        difficulty: "hard",
        question: "CRISPR-Cas9 teknolojisi nedir?",
        options: ["Proteini katlamak için kullanılan bilgisayar simülasyonu", "DNA'yı hassas biçimde kesmek ve düzenlemek için kullanılan gen düzenleme aracı", "Yeni ilaç molekülleri sentezleyen nanobot sistemi", "Hücre zarının geçirgenliğini kontrol eden protein kanalı"],
        correctIndex: 1,
        explanation: "CRISPR-Cas9, bakterilerin doğal bağışıklık sisteminden ilham alınarak geliştirilen devrimci bir gen düzenleme teknolojisidir. Rehber RNA molekülü hedef DNA dizisini bulurken Cas9 enzimi o bölgeyi keser; bilim insanları istenmeyen genleri silebilir ya da yeni diziler ekleyebilir."
      },
      {
        id: "s168",
        difficulty: "hard",
        question: "Schrödinger'in Kedisi deneyi hangi kuantum mekaniği kavramını örneklemektedir?",
        options: ["Tünel etkisi", "Belirsizlik ilkesi", "Dalga-tanecik ikiliği", "Süperpozisyon ve gözlemin sonucu belirlemesi"],
        correctIndex: 3,
        explanation: "Erwin Schrödinger'in 1935'te önerdiği bu düşünce deneyi, kuantum süperpozisyonunu eleştirel biçimde örnekler: gözlemci ölçüm yapana kadar sistem birden fazla durumda aynı anda var olabilir. Gözlemlenene kadar hem ölü hem de diri sayılan kedi, bu kuantum belirsizliğinin absürtlüğünü vurgular."
      },
      {
        id: "s169",
        difficulty: "hard",
        question: "Kuantum mekaniğinde dalga fonksiyonunu (ψ) matematiksel olarak formüle eden bilim insanı kimdir?",
        options: ["Werner Heisenberg", "Niels Bohr", "Erwin Schrödinger", "Max Planck"],
        correctIndex: 2,
        explanation: "Erwin Schrödinger, 1926'da adıyla anılan Schrödinger denklemini yayımladı; bu denklem, kuantum sisteminin zaman içindeki evrimini dalga fonksiyonu (ψ) üzerinden tanımlar. Paralel olarak Werner Heisenberg matris mekaniği yaklaşımını geliştirmiş; iki formülasyonun matematiksel olarak eşdeğer olduğu daha sonra kanıtlanmıştır."
      },
      {
        id: "s170",
        difficulty: "hard",
        question: "Madde ile antimadde çarpıştığında ne meydana gelir?",
        options: ["Her iki madde nötr gazlara dönüşür", "Güçlü bir manyetik alan oluşur", "Her iki madde tamamen enerjiye dönüşür (yok oluşur)", "Yalnızca antimadde parçalanır"],
        correctIndex: 2,
        explanation: "Madde ile antimadde çarpışmasında her iki parçacık tamamen yok olur ve Einstein'ın E = mc² denklemine göre kütlelerinin tamamı enerjiye (genellikle gama ışınlarına) dönüşür. Bu süreç 'annihilasyon' (yokoluş) olarak adlandırılır ve bilimdeki en verimli enerji dönüşüm sürecini temsil eder."
      },
      {
        id: "s171",
        difficulty: "easy",
        question: "Işığın vakumdaki hızı yaklaşık kaç km/s'dir?",
        options: ["~30.000 km/s", "~150.000 km/s", "~300.000 km/s", "~600.000 km/s"],
        correctIndex: 2,
        explanation: "Işık, vakumda saniyede yaklaşık 299.792 km hızla yayılır. Einstein'ın özel görelilik teorisinde bu hız (c), evrendeki maksimum hız sınırı olarak belirlenir."
      },
      {
        id: "s172",
        difficulty: "easy",
        question: "DNA'nın çift sarmal yapısını 1953'te keşfeden bilim insanları kimlerdir?",
        options: ["Einstein ve Bohr", "Watson ve Crick", "Curie ve Röntgen", "Mendel ve Morgan"],
        correctIndex: 1,
        explanation: "James Watson ve Francis Crick, 1953'te Nature dergisinde yayımladıkları makaleyle DNA'nın çift sarmal yapısını açıklamış ve 1962'de Nobel Tıp Ödülü'ne layık görülmüştür. Rosalind Franklin'in X-ışını kristalografi görüntüleri bu keşfe kritik katkı sağlamıştır."
      },
      {
        id: "s173",
        difficulty: "easy",
        question: "Güneş Sistemi'nin en büyük gezegeni hangisidir?",
        options: ["Satürn", "Neptün", "Jüpiter", "Uranüs"],
        correctIndex: 2,
        explanation: "Jüpiter, Güneş Sistemi'nin en büyük gezegenidir; kütlesi diğer tüm gezegenlerin toplam kütlesinin 2,5 katıdır. Çapı yaklaşık 143.000 km olup karakteristik Büyük Kırmızı Lekesi yüzyıllardır süren dev bir fırtınayı temsil eder."
      },
      {
        id: "s174",
        difficulty: "medium",
        question: "Yarıiletkenler hangi özelliğiyle bilinir?",
        options: ["Elektriği hiç iletmez", "Elektriği her koşulda mükemmel iletir", "Elektrik iletkenliği sıcaklık, katkı maddesi ve ışık gibi koşullara göre değişir", "Elektriği yalnızca negatif kutuptan geçirir"],
        correctIndex: 2,
        explanation: "Silisyum ve germanyum gibi yarıiletkenler, saf hâllerinde düşük iletkenliğe sahipken katkı maddesi ekleme, sıcaklık değişimi ya da ışık ile bu özellik kontrol edilebilir biçimde değiştirilebilir. Modern elektronik ve bilgisayar teknolojisinin temeli yarıiletkenlerdir."
      },
      {
        id: "s175",
        difficulty: "medium",
        question: "Hangi bilim dalı, canlı organizmaların birbirleriyle ve çevreleriyle ilişkisini inceler?",
        options: ["Biyokimya", "Ekoloji", "Genetik", "Morfoloji"],
        correctIndex: 1,
        explanation: "Ekoloji, canlıların kendi türdeşleriyle, diğer türlerle ve abiyotik çevreyle (su, hava, toprak, iklim) olan etkileşimlerini araştıran biyoloji dalıdır. Popülasyon, topluluk, ekosistem ve biyosfer düzeylerinde inceleme yapar."
      },
      {
        id: "s176",
        difficulty: "medium",
        question: "Genel Görelilik Teorisi'ni kim geliştirmiştir?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
        correctIndex: 2,
        explanation: "Albert Einstein, 1915'te yayımladığı Genel Görelilik Teorisi'nde kütleçekimini uzay-zamanın eğriliği olarak tanımlamıştır. Bu teori, Newton'ın kütleçekim yasasını aşarak yoğun kütleli cisimler ve yüksek hızlar için doğru sonuçlar verir."
      },
      {
        id: "s177",
        difficulty: "hard",
        question: "CRISPR-Cas9 teknolojisi ne için kullanılır?",
        options: ["DNA dizisini okumak için", "DNA'yı belirli noktalarda kesmek ve düzenlemek için", "RNA'yı proteine dönüştürmek için", "Gen ekspresyonunu ölçmek için"],
        correctIndex: 1,
        explanation: "CRISPR-Cas9, belirli bir DNA dizisini tanıyarak kesen ve böylece genlerin eklenmesine, silinmesine veya değiştirilmesine olanak sağlayan gen düzenleme teknolojisidir. Jennifer Doudna ve Emmanuelle Charpentier bu çalışmaları nedeniyle 2020 Nobel Kimya Ödülü'nü almıştır."
      },
      {
        id: "s178",
        difficulty: "medium",
        question: "Nükleer füzyon ve fisyon arasındaki temel fark nedir?",
        options: ["Füzyon enerji tüketir, fisyon enerji üretir", "Füzyon küçük çekirdekleri birleştirir, fisyon büyük çekirdekleri parçalar", "Füzyon radyoaktif atık üretir, fisyon üretmez", "Füzyon yalnızca soğuk koşullarda gerçekleşir"],
        correctIndex: 1,
        explanation: "Nükleer füzyon, iki hafif atomu birleştirerek daha ağır bir çekirdek oluşturur ve büyük miktarda enerji açığa çıkarır; güneşteki enerji kaynağı budur. Fisyon ise uranyum gibi ağır bir atomu parçalayarak enerji üretir; mevcut nükleer santraller fisyon kullanır."
      },
      {
        id: "s179",
        difficulty: "hard",
        question: "Evrenin kütlesinin yaklaşık %68'ini oluşturduğu düşünülen ancak henüz doğrudan gözlemlenemeyen olgu nedir?",
        options: ["Kara delikler", "Karanlık madde", "Karanlık enerji", "Anti-madde"],
        correctIndex: 2,
        explanation: "Karanlık enerji, evrenin genişlemesini giderek hızlandıran ve toplam enerji-kütle içeriğinin yaklaşık %68'ini oluşturduğu tahmin edilen gizemli bir yapıdır. Karanlık madde (~%27) ve normal madde (~%5) de evrenin diğer bileşenlerini oluşturur."
      },
      {
        id: "s180",
        difficulty: "medium",
        question: "Ozon tabakası yerkürenin neresinde bulunur ve görevi nedir?",
        options: ["Troposferde; ısıyı hapseder", "Stratosferde; zararlı UV ışınımını filtreler", "Mezosferde; meteor parçalar", "Termosferde; auroral ışıkları oluşturur"],
        correctIndex: 1,
        explanation: "Stratosferik ozon tabakası, yerden yaklaşık 15-35 km yükseklikte yoğunlaşır. Bu tabaka, güneşten gelen zararlı UVB ve UVC ışınımının büyük bölümünü emerek canlıları deri kanseri, katarakt ve bağışıklık sistemi bozukluklarından korur."
      },
      {
        id: "s181",
        difficulty: "easy",
        question: "Kimyasal bir reaksiyonda katalizör ne işe yarar?",
        options: ["Reaktantları tüketir", "Reaksiyonun aktivasyon enerjisini düşürerek hızlanmasını sağlar", "Reaksiyon ürünlerini bozar", "Reaksiyonu tamamen durdurur"],
        correctIndex: 1,
        explanation: "Katalizör, kimyasal bir reaksiyonun aktivasyon enerjisini düşürerek hızını artıran ama kendisi kalıcı olarak tüketilmeyen maddedir. Biyolojik katalizörlere 'enzim' adı verilir ve canlılardaki metabolik reaksiyonları yönetir."
      },
      {
        id: "s182",
        difficulty: "hard",
        question: "Schrödinger'in kedisi düşünce deneyi neyi göstermeyi amaçlar?",
        options: ["Kedi fiziğinin kuantumla çeliştiğini", "Klasik nesnelere uygulanan kuantum süperpozisyonunun saçmalığını veya eksikliğini", "Gözlemin parçacıkları nasıl yarattığını", "Dalga-parçacık ikiliğini"],
        correctIndex: 1,
        explanation: "Erwin Schrödinger, 1935'te geliştirdiği düşünce deneyi aracılığıyla kuantum belirsizliğinin makroskobik bir nesneye uygulandığında ortaya çıkan saçmalığa dikkat çekmiştir. Kutunun açılmasına dek kedi hem canlı hem ölü kabul edilmektedir; bu Copenhagen yorumunun problemlerini vurgular."
      },
      {
        id: "s183",
        difficulty: "medium",
        question: "Kasırgalar kuzey yarımkürede hangi yönde döner?",
        options: ["Saat yönünde", "Saat yönünün tersine", "Her iki yönde de eşit", "Düz çizgi halinde ilerler"],
        correctIndex: 1,
        explanation: "Coriolis etkisi nedeniyle büyük hava sistemleri (kasırgalar, siklonlar) kuzey yarımkürede saat yönünün tersine, güney yarımkürede ise saat yönünde döner. Bu etki Dünya'nın kendi ekseni etrafındaki dönüşünden kaynaklanır."
      },
      {
        id: "s184",
        difficulty: "easy",
        question: "Işığın renkli bileşenlerine ayrılması hangi olayla açıklanır?",
        options: ["Kırılma (refraksiyon)", "Yansıma", "Soğurma", "Kırınım"],
        correctIndex: 0,
        explanation: "Bir cam prizmadan ya da su damlacıklarından geçen beyaz ışık, farklı dalga boylarına sahip renkler farklı açılarda kırıldığı için görünür tayfa ayrılır. Bu olay 'dispersiyon' olarak da adlandırılır ve gökkuşağı bu şekilde oluşur."
      },
      {
        id: "s185",
        difficulty: "hard",
        question: "Hem kimya hem fizikte kullanılan 'entropi' kavramı neyi ifade eder?",
        options: ["Bir sistemdeki toplam enerji miktarını", "Bir sistemin kullanılabilir enerjisini", "Bir sistemdeki düzensizlik ya da belirsizlik ölçüsünü", "Reaksiyon ısısını"],
        correctIndex: 2,
        explanation: "Entropi (S), bir sistemdeki mikroskobik düzensizlik veya serbestlik derecesi ölçüsüdür. Termodinamiğin ikinci yasasına göre izole bir sistemin entropisi kendiliğinden azalmaz; bu yüzden enerji dönüşümleri her zaman belirli düzensizlik artışıyla gerçekleşir."
      },
      {
        id: "s186",
        difficulty: "easy",
        question: "İnsan vücudunda en fazla bulunan element hangisidir?",
        options: ["Karbon", "Azot", "Oksijen", "Hidrojen"],
        correctIndex: 2,
        explanation: "Oksijen, insan vücudunun kütlesinin yaklaşık %65'ini oluşturarak en bol bulunan element unvanını taşır. Büyük bölümü su (H₂O) ve organik moleküller bünyesindedir. Bunu yaklaşık %18 ile karbon, %10 ile hidrojen izler."
      },
      {
        id: "s187",
        difficulty: "medium",
        question: "Doğal seçilimde 'adaptasyon' kavramı ne anlama gelir?",
        options: ["Bireyin kasıtlı olarak geliştirdiği yeni bir beceri", "Nesillerce süren seleksiyon baskısıyla bireylerin hayatta kalma ve üreme başarısını artıran kalıtsal özellik", "Bir türün diğer bir türe dönüşmesi süreci", "Popülasyondaki ani genetik değişim"],
        correctIndex: 1,
        explanation: "Adaptasyon, belirli çevresel koşullara uyumu artıran ve doğal seleksiyon sayesinde popülasyonda giderek yaygınlaşan kalıtsal özelliktir. Kökeni mutasyona dayanan bu özellikler, taşıyanlarına hayatta kalma ya da üreme avantajı sağlar."
      },
      {
        id: "s188",
        difficulty: "medium",
        question: "Periyodik tablodaki elementlerin büyük çoğunluğu hangi kategoriye girer?",
        options: ["Ametaller", "Metaller", "Soy gazlar", "Yarı metaller"],
        correctIndex: 1,
        explanation: "Periyodik tablodaki 118 elementin yaklaşık 90'ı metal olarak sınıflandırılır. Metaller genel olarak ısı ve elektriği iletir, parlak yüzeye sahiptir ve dövülebilir özelliktedir."
      },
      {
        id: "s189",
        difficulty: "hard",
        question: "Bir yıldızın kara deliğe dönüşmesi için Güneş kütlesinin yaklaşık kaç katı olması gerekir?",
        options: ["~0,5 katı", "~1,4 katı (Chandrasekhar sınırı)", "~3 katı (TOV sınırı)", "~10 katı"],
        correctIndex: 2,
        explanation: "Tolman-Oppenheimer-Volkoff (TOV) sınırı, bir nötron yıldızının destekleyebileceği maksimum kütleyi yaklaşık 2-3 Güneş kütlesi olarak belirler. Bu kütlenin üzerinde gravitasyonel çöküşü durduracak bilinen hiçbir kuvvet yoktur ve yıldız kaçınılmaz olarak kara deliğe dönüşür."
      },
      {
        id: "s190",
        difficulty: "medium",
        question: "Hangi element 'yarı metal' veya 'metaloit' olarak sınıflandırılır ve modern elektroniğin temelini oluşturur?",
        options: ["Klor", "Kükürt", "Silisyum", "Fosfor"],
        correctIndex: 2,
        explanation: "Silisyum (Si), periyodik tabloda metallerle ametaller arasında yer alır; metalik parlaklık göstermesi ama kırılgan olması ve yarı iletkenlik özellikleri nedeniyle metaloit olarak sınıflandırılır. Modern elektronik sanayiinin temelini oluşturur."
      }
    ]
  },
  {
    id: "religion",
    name: "Din",
    icon: "book",
    color: "#f59e0b",
    gradient: ["#f59e0b", "#d97706"],
    image: require("../assets/images/category_religion.png"),
    questions: [
      {
        id: "r1",
        difficulty: "easy",
        question: "Kuran-ı Kerim kaç sureden oluşmaktadır?",
        options: ["99", "110", "114", "120"],
        correctIndex: 2,
        explanation: "Kuran-ı Kerim, 114 sure ve 6.236 ayetten oluşmaktadır. En uzun sure 286 ayetle Bakara, en kısa sure ise 3 ayetle Kevser'dir."
      },
      {
        id: "r2",
        difficulty: "easy",
        question: "İslam'da zekat, toplam mal varlığının yüzde kaçı olarak ödenir?",
        options: ["%1", "%2.5", "%5", "%10"],
        correctIndex: 1,
        explanation: "Zekat, nisap miktarına ulaşmış mallara yılda bir kez %2.5 (kırkta bir) oranında hesaplanır. İslam'ın beş şartından biri olan zekat, toplumsal dayanışmanın temelidir."
      },
      {
        id: "r3",
        difficulty: "easy",
        question: "Hristiyanlar için haftalık toplu ibadet günü hangisidir?",
        options: ["Cuma", "Cumartesi", "Pazar", "Pazartesi"],
        correctIndex: 2,
        explanation: "Pazar günü, çoğu Hristiyan mezhebinde Hz. İsa'nın dirilişini simgelediğinden haftalık ibadet günü olarak kabul edilir. Yahudiler ise Cumartesi (Şabat) gününü kutsal sayar."
      },
      {
        id: "r4",
        difficulty: "easy",
        question: "Yahudilerin ibadet ettikleri mekânın adı nedir?",
        options: ["Kilise", "Camii", "Sinagog", "Tapınak"],
        correctIndex: 2,
        explanation: "Sinagog, Yahudilerin ibadet, eğitim ve toplantı amacıyla kullandığı yapıdır. Tarihteki büyük Kudüs Tapınağı'nın (Süleyman Mabedi) yıkılmasının ardından sinagoglar merkezi önem kazandı."
      },
      {
        id: "r5",
        difficulty: "easy",
        question: "Hz. Muhammed (s.a.v.) kaç yaşında ilk vahyi almıştır?",
        options: ["30", "35", "40", "45"],
        correctIndex: 2,
        explanation: "Hz. Muhammed, MS 610 yılında Hira Mağarası'nda 40 yaşındayken Cebrail aracılığıyla ilk vahyi almıştır. İlk inen ayetler Alak suresinin ilk beş ayetidir."
      },
      {
        id: "r6",
        difficulty: "easy",
        question: "'Karma' kavramı en belirgin biçimde hangi dinde yer alır?",
        options: ["Yahudilik", "Zerdüştlük", "İslam", "Hinduizm"],
        correctIndex: 3,
        explanation: "Karma, Hinduizm, Budizm ve Jainizm'de merkezi bir kavramdır. Kişinin eylemlerinin bu ve sonraki yaşamlar üzerinde belirleyici etkisi olduğunu ifade eder."
      },
      {
        id: "r7",
        difficulty: "easy",
        question: "İslam'da oruç ibadetinin başladığı vaktin adı nedir?",
        options: ["Sahur", "İftar", "İmsak", "Teravih"],
        correctIndex: 2,
        explanation: "İmsak vakti, oruç ibadetinin resmen başladığı sabah vaktidir. Sahur, imsaktan önce yenilen yemektir. İftar ise akşam ezanıyla orucun açıldığı vakittir."
      },
      {
        id: "r8",
        difficulty: "easy",
        question: "Budizm'deki 'Sekiz Kat Yol' hangi amaca hizmet eder?",
        options: ["Yeniden doğuma ulaşmak", "Tanrıya yaklaşmak", "Acıdan kurtuluşa ermek", "Cennet kazanmak"],
        correctIndex: 2,
        explanation: "Sekiz Kat Yol (Ariya Atthangika Magga), Buda'nın öğrettiği ve acı ile arzudan kurtularak Nirvana'ya ulaşmayı amaçlayan manevi pratikler bütünüdür."
      },
      {
        id: "r9",
        difficulty: "easy",
        question: "Pesah (Hamursuz Bayramı) Yahudiler için neyi simgeler?",
        options: ["Tevrat'ın verilişini", "Kudüs'ün fethini", "İsrailoğulları'nın Mısır'dan çıkışını", "Tapınak'ın inşasını"],
        correctIndex: 2,
        explanation: "Pesah, Hz. Musa önderliğinde İsrailoğulları'nın Mısır köleliğinden kurtuluşunu kutlar. Bugün Yahudilerin en önemli bayramlarından biri olarak yedi (veya sekiz) gün süren törenlerle anılır."
      },
      {
        id: "r10",
        difficulty: "easy",
        question: "Hinduizm'in kutsal metinleri olan Vedalar hangi dilde yazılmıştır?",
        options: ["Arapça", "Farsça", "Pali", "Sanskritçe"],
        correctIndex: 3,
        explanation: "Vedalar, MÖ 1500–500 yılları arasında Sanskritçe yazılmış dini metinlerdir. Rig Veda, Sama Veda, Yajur Veda ve Atharva Veda olmak üzere dört ana Veda vardır."
      },
      {
        id: "r11",
        difficulty: "easy",
        question: "Hristiyan inancında İsa'nın çarmıhtan dirilişini kutlayan bayram hangisidir?",
        options: ["Noel", "Paskalya", "Epiphany", "Pentekost"],
        correctIndex: 1,
        explanation: "Paskalya, Hristiyanlığın en önemli bayramı olup Hz. İsa'nın çarmıha gerildikten sonra üçüncü günde dirildiğine inanılan dönemi kutlar. Tarihi her yıl değişen bir bayramdır."
      },
      {
        id: "r12",
        difficulty: "easy",
        question: "Budizm'in sekiz yolunun ilki nedir?",
        options: ["Doğru niyet", "Doğru görüş", "Doğru söz", "Doğru eylem"],
        correctIndex: 1,
        explanation: "Buda'nın öğrettiği Sekiz Yollu Yol, doğru görüşle başlar. Bu yol, acının nedenini ve sona erdirilmesini anlama kapasitesidir. Diğerleri; niyet, söz, eylem, geçim, çaba, bilinç ve konsantrasyondur."
      },
      {
        id: "r13",
        difficulty: "easy",
        question: "İslamiyet'in doğduğu şehir hangisidir?",
        options: ["Medine", "Kudüs", "Mekke", "Bağdat"],
        correctIndex: 2,
        explanation: "İslamiyet, Hz. Muhammed'in 610 yılında ilk vahyi almasıyla Mekke'de doğmuştur. Hz. Muhammed, Mekke'de doğup büyümüş ve burada peygamberlik görevini almıştır."
      },
      {
        id: "r14",
        difficulty: "easy",
        question: "Yahudilik'te Şabat (Sebt) günü hangi gündür?",
        options: ["Pazar", "Cumartesi", "Cuma", "Perşembe"],
        correctIndex: 1,
        explanation: "Yahudilik'te Şabat, Cuma günü batımından Cumartesi günü batımına kadar süren kutsal dinlenme günüdür. Tevrat'a göre Allah altı günde yaratılışı tamamlayıp yedinci günde dinlenmiştir."
      },
      {
        id: "r15",
        difficulty: "easy",
        question: "Hangi din 'karma' kavramını merkeze alır?",
        options: ["Hristiyanlık", "Yahudilik", "Hinduizm", "İslamiyet"],
        correctIndex: 2,
        explanation: "Karma, Hinduizm ve Budizm'deki temel kavramlardan biridir. Bir kişinin geçmişteki eylemleri, gelecekteki deneyimlerini ve yeniden doğuşunu belirler. 'Her eylemin bir sonucu vardır' anlayışına dayanır."
      },
      {
        id: "r16",
        difficulty: "easy",
        question: "İslamiyet'te namaz günde kaç vakit kılınır?",
        options: ["3 vakit", "4 vakit", "5 vakit", "7 vakit"],
        correctIndex: 2,
        explanation: "İslamiyet'te namaz, günde beş vakit (sabah, öğle, ikindi, akşam, yatsı) kılınır. Bu beş vakit namaz, İslam'ın beş şartından birini oluşturur."
      },
      {
        id: "r17",
        difficulty: "easy",
        question: "Hristiyanlıkta 'Teslis' kavramı neyi ifade eder?",
        options: ["Hz. İsa'nın mucizeleri", "Baba, Oğul ve Kutsal Ruh'un birliği", "Melekler hiyerarşisi", "Hz. Meryem'in statüsü"],
        correctIndex: 1,
        explanation: "Teslis (Trinite), Baba, Oğul (İsa Mesih) ve Kutsal Ruh'un tek Tanrı içinde üç ayrı kişilik olduğuna dair temel Hristiyan doktrinidir. Hristiyan ilahiyatının köşe taşlarından biridir."
      },
      {
        id: "r18",
        difficulty: "easy",
        question: "Sihizm'in kurucusu kimdir?",
        options: ["Guru Nanak", "Guru Gobind Singh", "Guru Granth Sahib", "Guru Arjan Dev"],
        correctIndex: 0,
        explanation: "Guru Nanak Dev (1469-1539), Sihizm'in kurucusudur. Hindistan'ın Punjab bölgesinde doğan Guru Nanak, tüm insanlığın eşitliğini ve tek Tanrı'yı öğretmiştir."
      },
      {
        id: "r19",
        difficulty: "easy",
        question: "Hangi inanç sisteminde 'Nirvana'ya ulaşmak temel hedef sayılır?",
        options: ["Hinduizm", "Budizm", "Caynizm", "Taoizm"],
        correctIndex: 1,
        explanation: "Budizm'de Nirvana, acıdan ve yeniden doğum döngüsünden (samsara) kurtuluşu ifade eder. Aydınlanmaya ve tam özgürlüğe ulaşmak olarak tarif edilen Nirvana, Budizm'in nihai hedefidir."
      },
      {
        id: "r20",
        difficulty: "easy",
        question: "İslam'da zekat kime verilmez?",
        options: ["Fakirlere", "Yolculara", "Varlıklı akrabalara", "Borçlulara"],
        correctIndex: 2,
        explanation: "Zekat, İslam'ın beş şartından biri olup belirli oranlarda zenginler tarafından fakirlere, ihtiyaç sahiplerine ve diğer belirlenen gruplara verilir. Varlıklı kişilere verilmez."
      },
      {
        id: "r21",
        difficulty: "easy",
        question: "Hangi ülkede Budizm devlet dinidir?",
        options: ["Çin", "Japonya", "Tayland", "Endonezya"],
        correctIndex: 2,
        explanation: "Tayland, Budizm'in (Theravada mezhebi) devlet dini olduğu ülkelerden biridir. Nüfusun yaklaşık %95'i Budist olan Tayland'da din, kültürün ve devletin temel bir parçasıdır."
      },
      {
        id: "r22",
        difficulty: "easy",
        question: "Tevrat Yahudilik'te kaç kitaptan oluşur?",
        options: ["5 kitap", "10 kitap", "24 kitap", "39 kitap"],
        correctIndex: 0,
        explanation: "Tevrat (Torah), Yahudilik'in en temel kutsal metni olup Beş Kitap (Pentateuch) olarak da bilinir: Yaratılış, Çıkış, Levililer, Sayılar ve Tesniye. Hz. Musa'ya indirildiğine inanılır."
      },
      {
        id: "r23",
        difficulty: "easy",
        question: "Konfüçyüsçülükte en önemli erdem hangisidir?",
        options: ["Cesaret", "Ren (insaniyet/merhamet)", "Bilgelik", "Adalet"],
        correctIndex: 1,
        explanation: "Konfüçyüs'ün öğretilerinde Ren (仁), insaniyet, merhamet ve sevgi anlamına gelir ve en yüce erdem olarak kabul edilir. Ren'i hayata geçirmek, diğer tüm erdemlerin temelini oluşturur."
      },
      {
        id: "r24",
        difficulty: "easy",
        question: "İslam'da kurban bayramı neden kutlanır?",
        options: ["Hz. Muhammed'in doğumunu anmak için", "Hz. İbrahim'in oğlunu kurban etme sınavını hatırlamak için", "Ramazan orucunun bitişini kutlamak için", "Hz. Musa'nın Mısır'dan çıkışını anmak için"],
        correctIndex: 1,
        explanation: "Kurban Bayramı (Eid al-Adha), Hz. İbrahim'in Allah'ın emrine uyarak oğlunu kurban etmeye razı olmasını ve Allah'ın bu fedakarlığa karşılık bir koç göndermesini simgeler."
      },
      {
        id: "r25",
        difficulty: "easy",
        question: "Hangi din 'Ahimsa' (şiddetsizlik) ilkesini ön plana çıkarır?",
        options: ["Budizm ve Caynizm", "Hristiyanlık ve İslam", "Yahudilik ve Zerdüştlük", "Hinduizm ve Sihizm"],
        correctIndex: 0,
        explanation: "Ahimsa (şiddetsizlik), özellikle Caynizm'de merkezi bir ilke olmakla birlikte Budizm ve Hinduizm'de de önemli yer tutar. Mahatma Gandhi bu ilkeyi siyasi mücadelesinde temel almıştır."
      },
      {
        id: "r26",
        difficulty: "easy",
        question: "İslam'da Cuma namazı neden özeldir?",
        options: ["Haftanın tek zorunlu namazıdır", "Haftanın topluca kılınan öğle namazı yerine geçer", "Gece kılınan özel bir namazdır", "Yalnızca din adamları tarafından kılınır"],
        correctIndex: 1,
        explanation: "Cuma günü öğle vakti kılınan Cuma namazı, İslam'da erkekler için farz olan topluca kılınan bir namazdır. Öğle namazının yerini alır ve öncesinde hutbe okunur."
      },
      {
        id: "r27",
        difficulty: "easy",
        question: "Zerdüştlüğün kurucusu kimdir?",
        options: ["Zoroaster (Zerdüşt)", "Mani", "Baha'ullah", "Mahavira"],
        correctIndex: 0,
        explanation: "Zerdüştlük (Zoroastrianism), MÖ 6. yüzyılda İran'da yaşayan Zoroaster (Zerdüşt) tarafından kurulmuştur. İyilik ile kötülüğün savaşını ve tek yaratıcı Tanrı Ahura Mazda'yı merkeze alır."
      },
      {
        id: "r28",
        difficulty: "easy",
        question: "Yahudilikte en kutsal mekan olan Ağlama Duvarı hangi şehirdedir?",
        options: ["Tel Aviv", "Hayfa", "Kudüs", "Beersheba"],
        correctIndex: 2,
        explanation: "Ağlama Duvarı (Batı Duvarı), Kudüs'te yer alır ve Yahudilerin en kutsal ibadet mekanıdır. Hz. Süleyman'ın tapınağının yıkılmış olduğuna inanılan yerin kalıntısıdır."
      },
      {
        id: "r29",
        difficulty: "easy",
        question: "İslamiyet Hz. Muhammed'in kaçıncı peygamber olduğuna inanır?",
        options: ["İlk peygamber", "Son peygamber", "En büyük ama son değil", "Sadece Araplar için gönderilmiş bir peygamber"],
        correctIndex: 1,
        explanation: "İslam inancına göre Hz. Muhammed, Allah'ın insanlığa gönderdiği son peygamberdir. Hz. Adem'den başlayan peygamberler zincirinin sonuncusu olduğuna inanılır."
      },
      {
        id: "r30",
        difficulty: "easy",
        question: "Hangi dinin kutsal şehri Varanasi'dir?",
        options: ["Budizm", "Caynizm", "Hinduizm", "Sihizm"],
        correctIndex: 2,
        explanation: "Varanasi (Benares), Hindistan'ın Ganj nehri kıyısında yer alan ve Hinduizm'in en kutsal şehri olarak kabul edilen tarihi kenttir. Hindular burada ölmeyi ve yakılmayı kutsanmış sayar."
      },
      {
        id: "r31",
        difficulty: "easy",
        question: "Noel (Christmas) hangi olayı kutlar?",
        options: ["Hz. İsa'nın ölümünü", "Hz. İsa'nın dirilişini", "Hz. İsa'nın doğumunu", "Hz. İsa'nın vaftizini"],
        correctIndex: 2,
        explanation: "Noel (25 Aralık), Hristiyanlığın kutsal figürü Hz. İsa'nın doğumunu kutlar. Dini kökeninin yanı sıra küresel bir kültürel etkinlik haline gelmiş olup milyarlarca insan tarafından kutlanmaktadır."
      },
      {
        id: "r32",
        difficulty: "easy",
        question: "İslam'da Kadir Gecesi hangi ayda aranır?",
        options: ["Şaban", "Muharrem", "Ramazan", "Zilhicce"],
        correctIndex: 2,
        explanation: "Kadir Gecesi, Ramazan ayının son on gecesinde, özellikle tek gecelerde aranır. Kuran'a göre bu gece bin aydan hayırlıdır ve Kuran-ı Kerim bu gece indirilmeye başlanmıştır."
      },
      {
        id: "r33",
        difficulty: "easy",
        question: "İslam'da hac ibadeti nerede gerçekleşir?",
        options: ["Medine", "Kudüs", "Mekke", "İstanbul"],
        correctIndex: 2,
        explanation: "Hac ibadeti, Suudi Arabistan'daki Mekke şehri ve çevresinde her yıl Zilhicce ayının 8–13. günleri arasında gerçekleşir. Gücü yeten her Müslüman'ın ömründe bir kez yerine getirmesi farzdır."
      },
      {
        id: "r34",
        difficulty: "easy",
        question: "İslam'ın beş şartının birincisi nedir?",
        options: ["Namaz", "Oruç", "Kelime-i Şahadet", "Zekat"],
        correctIndex: 2,
        explanation: "İslam'ın beş şartı sırasıyla: Kelime-i Şahadet, namaz, oruç, zekat ve hac'tır. Kelime-i Şahadet; 'Allah'tan başka ilah yoktur ve Muhammed O'nun elçisidir' anlamına gelen iman ikrarıdır."
      },
      {
        id: "r35",
        difficulty: "easy",
        question: "Ramazan ayı ortalama kaç gün sürer?",
        options: ["20 gün", "25 gün", "29 veya 30 gün", "35 gün"],
        correctIndex: 2,
        explanation: "Ramazan, Hicri takvimde (kameri takvim) 9. aydır ve Ay'ın görünümüne bağlı olarak 29 veya 30 gün sürer. Kameri yıl solar yıldan 11 gün kısa olduğundan Ramazan her yıl farklı mevsimlere denk gelir."
      },
      {
        id: "r36",
        difficulty: "easy",
        question: "İslam'da namaz kılınırken yönelinen yön hangisidir?",
        options: ["Kudüs", "Medine", "Kabe (Mekke)", "Doğu"],
        correctIndex: 2,
        explanation: "Müslümanlar namaz kılarken Suudi Arabistan'daki Mekke şehrinde bulunan Kabe'ye yönelir. Bu yöne 'kıble' denir. İlk dönemde kıble Kudüs'tü; daha sonra Kabe'ye çevrildi."
      },
      {
        id: "r37",
        difficulty: "easy",
        question: "Hz. İsa'nın doğduğu şehir hangisidir?",
        options: ["Nasıra", "Kudüs", "Beytüllahim", "Şam"],
        correctIndex: 2,
        explanation: "Hristiyan ve İslam inancına göre Hz. İsa, günümüzdeki İsrail'in batı yakasında yer alan Beytüllahim'de (Bethlehem) doğmuştur. Daha sonra Nasıra'da yetiştiği için 'Nasıralı İsa' olarak da bilinir."
      },
      {
        id: "r38",
        difficulty: "medium",
        question: "Budizm'in kurucusu kimdir?",
        options: ["Guru Nanak", "Siddharta Gautama", "Mahavira", "Konfüçyüs"],
        correctIndex: 1,
        explanation: "Siddharta Gautama, MÖ 5. yüzyılda bugünkü Nepal'de doğmuş ve derin bir meditasyon deneyimiyle aydınlanmaya erişerek 'Buda' (Aydınlanmış Olan) unvanını almıştır. Budizm, onun öğretilerine dayanan bir öğreti ve yaşam biçimidir."
      },
      {
        id: "r39",
        difficulty: "medium",
        question: "Konfüçyüs hangi ülkede yaşayıp öğretmiştir?",
        options: ["Japonya", "Hindistan", "Çin", "Kore"],
        correctIndex: 2,
        explanation: "Konfüçyüs (Kong Fuzi), MÖ 551–479 yılları arasında Çin'de yaşamış, ahlak, yönetim ve sosyal ilişkiler üzerine derin öğretiler geliştirmiş filozoftur. Öğretileri 'Konfüçyüsçülük' adıyla Doğu Asya medeniyetini derinden etkilemiştir."
      },
      {
        id: "r40",
        difficulty: "medium",
        question: "Hinduizm'de yaratma, koruma ve yok etme tanrılarından oluşan üçlüye ne denir?",
        options: ["Dharma", "Karma", "Trimurti", "Samsara"],
        correctIndex: 2,
        explanation: "Trimurti, Hindu inancında Brahma (yaratıcı), Vişnu (koruyucu) ve Şiva (yok edici/dönüştürücü) tanrılarından oluşan kutsal üçlüdür. Bu üçlü, evrenin döngüsel doğasını simgeler."
      },
      {
        id: "r41",
        difficulty: "medium",
        question: "Caynizm'in en temel ahlaki ilkesi nedir?",
        options: ["Dharma", "Karma", "Ahimsa", "Moksha"],
        correctIndex: 2,
        explanation: "Ahimsa (şiddetsizlik), Caynizm'in en temel ahlaki ilkesidir. Hiçbir canlıya zarar vermemeyi öngören bu ilke; Budizm ve Hinduizm'de de önem taşır. Mahatma Gandhi bu ilkeyi siyasi mücadelesine taşımıştır."
      },
      {
        id: "r42",
        difficulty: "medium",
        question: "Hristiyanların kutsal kitabına genel olarak ne denir?",
        options: ["Tevrat", "Kuran", "İncil (Kitab-ı Mukaddes)", "Veda"],
        correctIndex: 2,
        explanation: "Hristiyanların kutsal kitabı İncil ya da Kitab-ı Mukaddes'tir (Biblia). Eski Ahit ve Yeni Ahit olmak üzere iki bölümden oluşur. Eski Ahit Yahudilerle ortaktır; Yeni Ahit ise Hz. İsa'nın hayatını ve öğretilerini içerir."
      },
      {
        id: "r43",
        difficulty: "medium",
        question: "İslam'da cuma namazı farz olarak kaç rekâttır?",
        options: ["4 rekât", "3 rekât", "2 rekât", "6 rekât"],
        correctIndex: 2,
        explanation: "Cuma namazının farzı 2 rekâttır. Öğle namazının yerini alan cuma namazı, imamın hutbe okumasının ardından cemaatle kılınır. Erkekler için farz olan bu namaz, özürsüz terk edilmesi haramdır."
      },
      {
        id: "r44",
        difficulty: "medium",
        question: "Hz. Musa'ya inen kutsal kitabın adı nedir?",
        options: ["Zebur", "İncil", "Tevrat", "Suhuf"],
        correctIndex: 2,
        explanation: "İslam ve Yahudi inancına göre Tevrat, Hz. Musa'ya Allah tarafından indirilen kutsal kitaptır. Yahudiliğin en temel metni olan Tevrat; Yaratılış, Çıkış, Levililer, Sayılar ve Tesniye olmak üzere beş kitaptan oluşur."
      },
      {
        id: "r45",
        difficulty: "medium",
        question: "Hristiyanlıkta vaftiz (Baptism) ne anlama gelir?",
        options: ["Günahların itirafı", "Oruç tutma", "Suyla arınma ve kilise topluluğuna kabul", "Kutsal ekmek yeme töreni"],
        correctIndex: 2,
        explanation: "Vaftiz, Hristiyanlıkta kişinin suyla arınması ve Hristiyan topluluğuna kabul törenidir. Çoğu mezhepte bebeklikte yapılır; bazı mezheplerde ise kişisel inanç kararının ardından yetişkinlikte uygulanır."
      },
      {
        id: "r46",
        difficulty: "medium",
        question: "Ramazan Bayramı (Eid al-Fitr) kaç gün sürer?",
        options: ["1 gün", "2 gün", "3 gün", "7 gün"],
        correctIndex: 2,
        explanation: "Ramazan Bayramı, oruç ayı Ramazan'ın sona ermesinin ardından 3 gün kutlanır. Müslümanlar bayram namazı kılar, zekât-ı fıtır verir, akrabalarını ziyaret eder ve hediyeleşir."
      },
      {
        id: "r47",
        difficulty: "medium",
        question: "Yahudilikte 'koşer' (kosher) ne anlama gelir?",
        options: ["Kutsal metin okuma", "Dini kurallara uygun yiyecek", "Şabat akşam duası", "Sinagog törenlerinin adı"],
        correctIndex: 1,
        explanation: "Koşer, Yahudi dini hukukuna (Halaha) göre izin verilen ve kurallara uygun biçimde hazırlanmış yiyeceği ifade eder. Domuz eti, deniz kabuklularının tüketimi yasaktır; et ve süt ürünleri bir arada yenmez."
      },
      {
        id: "r48",
        difficulty: "medium",
        question: "İslam'da hac ibadeti yılın hangi ayında yapılır?",
        options: ["Ramazan", "Muharrem", "Şaban", "Zilhicce"],
        correctIndex: 3,
        explanation: "Hac, Hicri takvimin son ayı olan Zilhicce'nin 8–13. günleri arasında gerçekleştirilir. Dünya genelinde milyonlarca Müslüman bu süre zarfında Mekke'ye akın eder ve yılın en büyük dini buluşması gerçekleşir."
      },
      {
        id: "r49",
        difficulty: "medium",
        question: "Hangi dinde 'reenkarnasyon' (yeniden doğuş) inancı merkezi yer tutar?",
        options: ["Yahudilik", "Hristiyanlık", "Hinduizm", "İslamiyet"],
        correctIndex: 2,
        explanation: "Reenkarnasyon (yeniden doğuş), özellikle Hinduizm, Budizm ve Caynizm'de merkezi bir inanç olup ruhun ölümün ardından farklı bir bedende yeniden doğduğunu öngörür. Bu döngü 'samsara' olarak bilinir."
      },
      {
        id: "r50",
        difficulty: "medium",
        question: "Sünni İslam'ın dört büyük hukuk mezhebi hangileridir?",
        options: ["Hanefi, Şafii, Maliki, Hanbeli", "Cafefi, Zeydi, İbadi, Hanefi", "Selefi, Vahabi, Sünni, Alevilik", "Maturidilik, Eşarilik, Mutezile, Mürcie"],
        correctIndex: 0,
        explanation: "Sünni İslam'ın dört büyük fıkıh mezhebi; İmam Ebu Hanife'ye atfedilen Hanefilik, İmam Malik'e atfedilen Malikilik, İmam Şafii'ye atfedilen Şafiilik ve İmam Ahmed b. Hanbel'e atfedilen Hanbelilik'tir."
      },
      {
        id: "r51",
        difficulty: "medium",
        question: "Hinduizm'de 'dharma' kavramı ne anlama gelir?",
        options: ["Ruhun ölümden sonra yeniden doğması", "Geçmiş eylemlerin geleceği etkilemesi", "Kozmik düzen, ahlaki görev ve doğru yaşam", "Acı ve arzudan kurtuluş"],
        correctIndex: 2,
        explanation: "Dharma, Hinduizm'de kozmik düzeni, ahlaki yasayı ve kişinin toplumsal konumuna göre yerine getirmesi gereken görevleri ifade eder. Evrensel bir ilke olarak doğruluk, dürüstlük ve erdem kavramlarını kapsar."
      },
      {
        id: "r52",
        difficulty: "medium",
        question: "İslam'da beş vakit namaz hangileridir?",
        options: ["Sabah, Kuşluk, Öğle, İkindi, Akşam", "Sabah, Öğle, İkindi, Akşam, Yatsı", "Sabah, Öğle, Cuma, Akşam, Yatsı", "Sabah, Kuşluk, Öğle, Akşam, Yatsı"],
        correctIndex: 1,
        explanation: "İslam'da beş vakit namaz sabah, öğle, ikindi, akşam ve yatsı olarak sıralanır. Namaz, İslam'ın beş şartından birini oluşturur ve Müslümanların günde beş kez kıldığı ibadettir."
      },
      {
        id: "r53",
        difficulty: "medium",
        question: "Hristiyanlıkta 'Üçlü Birlik' (Teslis) hangi unsurlardan oluşur?",
        options: ["Tanrı, Şeytan ve Melek", "Baba, Oğul ve Kutsal Ruh", "İsa, Meryem ve Yusuf", "Cennet, Dünya ve Cehennem"],
        correctIndex: 1,
        explanation: "Teslis (Trinitas), Hristiyan teolojisinde Tanrı'nın Baba, Oğul (İsa Mesih) ve Kutsal Ruh olmak üzere üç ayrı kişilikte tezahür ettiği inancıdır. Üç kişilik ayrı olsa da tek ve bölünmez bir Tanrı'yı oluşturur."
      },
      {
        id: "r54",
        difficulty: "medium",
        question: "Budizm'in kurucusu kimdir?",
        options: ["Konfüçyüs", "Lao Tzu", "Siddhartha Gautama", "Mahavira"],
        correctIndex: 2,
        explanation: "Budizm'in kurucusu Siddhartha Gautama'dır. MÖ 5-4. yüzyılda günümüz Nepal'inde yaşayan Gautama, uzun yıllar süren manevi arayışın ardından aydınlanmaya ulaşmış ve 'Buda' (Uyanmış Olan) unvanını almıştır."
      },
      {
        id: "r55",
        difficulty: "medium",
        question: "Yahudilikte kutsal gün Şabat (Sabbat) hangi güne karşılık gelir?",
        options: ["Cuma günü", "Cumartesi günü", "Pazar günü", "Pazartesi günü"],
        correctIndex: 1,
        explanation: "Şabat, Yaratılış'ın yedinci gününde Tanrı'nın dinlenmesine atıfla belirlenen Yahudi kutsal günüdür. Cuma günü batımından Cumartesi günü gece karanlığına kadar sürer; bu sürede çalışma ve birçok rutin etkinlik yasaktır."
      },
      {
        id: "r56",
        difficulty: "medium",
        question: "Kur'an-ı Kerim hangi dilde vahyedilmiştir?",
        options: ["Türkçe", "Arapça", "Farsça", "İbranice"],
        correctIndex: 1,
        explanation: "Kur'an-ı Kerim, Hz. Muhammed'e yaklaşık 610–632 yılları arasında Arapça olarak vahyedilmiştir. Arapça bu nedenle İslam dünyasında kutsal bir statü taşır; Kur'an'ın namazlarda ve ritüellerde asıl metniyle okunması gerekir."
      },
      {
        id: "r57",
        difficulty: "medium",
        question: "Hinduizm'in 'Trimurti' olarak bilinen üç büyük tanrısı kimlerdir?",
        options: ["Brahma, Vishnu ve Shiva", "Krishna, Rama ve Ganesha", "Lakshmi, Sarasvati ve Parvati", "Indra, Varuna ve Agni"],
        correctIndex: 0,
        explanation: "Trimurti (İlahi Üçlü), yaratıcı Brahma, koruyucu Vishnu ve yok edici Shiva'dan oluşur. Bu üçlü, evrenin yaratılış, sürdürülme ve çözülme döngüsünü simgeler; Hinduizm'in en temel ilahi kavramlarından biridir."
      },
      {
        id: "r58",
        difficulty: "medium",
        question: "Konfüçyanizm'in kurucusu kimdir?",
        options: ["Laozi", "Mozi", "Konfüçyüs (Kong Fuzi)", "Mencius"],
        correctIndex: 2,
        explanation: "Konfüçyanizm, MÖ 551–479 yılları arasında yaşayan Çinli düşünür Konfüçyüs tarafından kurulmuştur. Aile bağları, sosyal harmoni, ahlaki erdem ve toplumsal sorumlulukları ön plana çıkaran bu öğreti Doğu Asya kültürünü derinden etkilemiştir."
      },
      {
        id: "r59",
        difficulty: "medium",
        question: "Hristiyanlıkta Paskalya hangi olayı kutlar?",
        options: ["Hz. İsa'nın doğumunu", "Hz. İsa'nın ölümünü", "Hz. İsa'nın dirilişini", "Hz. İsa'nın vaftizini"],
        correctIndex: 2,
        explanation: "Paskalya (Easter), Hristiyanlıkta Hz. İsa'nın çarmıha gerildikten üç gün sonra dirildiğine inanılan günü kutlayan en önemli dini bayramdır. Hristiyan takvimiyle hesaplanan bu bayram, ilkbahar döneminde Noel'den sonra en büyük Hristiyan kutlamasıdır."
      },
      {
        id: "r60",
        difficulty: "medium",
        question: "Sihizm'in kutsal kitabı hangisidir?",
        options: ["Upanişadlar", "Guru Granth Sahib", "Avesta", "Tripitaka"],
        correctIndex: 1,
        explanation: "Guru Granth Sahib, Sihizm'in kutsal kitabıdır. 10. ve son Sih Guru'su Guru Gobind Singh tarafından ebedi Guru ilan edilen bu kitap, tüm Sih Guru'larının ve çeşitli azizlerin ilahi şiirlerini ve öğretilerini barındırır."
      },
      {
        id: "r61",
        difficulty: "medium",
        question: "İslam'ın beş şartından 'zekât' ne anlama gelir?",
        options: ["Mekke'ye kutsal yolculuk", "Oruç tutmak", "Maddi durumu yeterli olanlarca yoksullara verilen zorunlu bağış", "Günde beş vakit namaz kılmak"],
        correctIndex: 2,
        explanation: "Zekât, İslam'ın beş şartından biridir. Nisap miktarının üzerinde mala sahip olan Müslümanların, yılda bir kez servetlerinin belirli bir oranını (%2,5) yoksullara, borçlulara ve ihtiyaç sahiplerine vermesi farzdır."
      },
      {
        id: "r62",
        difficulty: "medium",
        question: "Hristiyanlığın kutsal kitabı nedir?",
        options: ["Tevrat", "Kuran", "İncil (Kutsal Kitap)", "Upanişadlar"],
        correctIndex: 2,
        explanation: "Hristiyanlığın kutsal kitabı İncil'i de kapsayan Kutsal Kitap'tır (Bible). Eski Ahit ve Yeni Ahit olmak üzere iki ana bölümden oluşur. Yeni Ahit, Hz. İsa'nın yaşamını, öğretilerini ve havarilerinin mektuplarını içerir."
      },
      {
        id: "r63",
        difficulty: "medium",
        question: "Budizm'in kurucusu kimdir?",
        options: ["Konfüçyüs", "Lao Tzu", "Siddhartha Gautama", "Mahavira"],
        correctIndex: 2,
        explanation: "Budizm'in kurucusu, MÖ 5.–4. yüzyılda yaşamış olan Siddhartha Gautama'dır. Bugünkü Nepal sınırları içinde doğan Siddhartha, derin meditasyon sonucunda aydınlanmaya ulaşmış ve 'Buda' (Aydınlanmış Olan) unvanını kazanmıştır."
      },
      {
        id: "r64",
        difficulty: "medium",
        question: "Yahudiliğin kutsal kitabı nedir?",
        options: ["Kuran", "Avesta", "Tevrat (Tora)", "Tripitaka"],
        correctIndex: 2,
        explanation: "Yahudiliğin temel kutsal metni Tevrat'tır (İbranicede Tora). Beş Kitap (Tekvin, Çıkış, Levililer, Sayılar, Tesniye) olarak bilinen bu eser, Hz. Musa'ya vahyedildiğine inanılır. Geniş anlamda Tanah (Eski Ahit'in İbranice versiyonu) Yahudi kutsal yazınının tamamını kapsar."
      },
      {
        id: "r65",
        difficulty: "medium",
        question: "Hristiyanlıkta Paskalya neyi kutlar?",
        options: ["Hz. İsa'nın doğumunu", "Hz. İsa'nın vaftizini", "Hz. İsa'nın çarmıha gerilişini", "Hz. İsa'nın ölümden dirilişini"],
        correctIndex: 3,
        explanation: "Paskalya (Easter), Hristiyan inancına göre Hz. İsa'nın çarmıha gerildikten üç gün sonra ölümden dirilişini kutlar. Hristiyanlığın en önemli bayramı olarak kabul edilen Paskalya, ilkbaharda Noel'den sonra gelen ilk Pazar günü kutlanır."
      },
      {
        id: "r66",
        difficulty: "medium",
        question: "İslam'da oruç hangi ayda tutulur?",
        options: ["Muharrem", "Şaban", "Ramazan", "Zilhicce"],
        correctIndex: 2,
        explanation: "Ramazan, İslam takvimine göre (hicri) dokuzuncu aydır. Bu ay boyunca oruç tutmak İslam'ın beş şartından biridir. İmsaktan (fecr vaktinden) akşam ezanına (iftar) kadar yiyecek, içecek ve diğer yasaklı şeylerden uzak durulur."
      },
      {
        id: "r67",
        difficulty: "medium",
        question: "Budizm'de 'nirvana' ne anlama gelir?",
        options: ["Cennet", "Yeniden doğuş", "Acıdan ve yeniden doğuş döngüsünden kurtuluş", "Ölüm sonrası hesap"],
        correctIndex: 2,
        explanation: "Budizm'de nirvana, arzuların, nefsin ve cehaletten kaynaklanan acının tamamen sönmesiyle ulaşılan özgürleşme halidir. Samsara denilen yeniden doğuş (reenkarnasyon) döngüsünü sona erdiren bu durum, Budizm'in nihai hedefidir."
      },
      {
        id: "r68",
        difficulty: "medium",
        question: "Konfüçyüs hangi ülkenin düşünürüdür?",
        options: ["Japonya", "Hindistan", "Çin", "Kore"],
        correctIndex: 2,
        explanation: "Konfüçyüs (Kung Fu-tzu, MÖ 551–479), Çinli bir düşünür ve eğitimcidir. Ahlak, aile değerleri, siyasi erdem ve sosyal düzeni ön plana çıkaran öğretileri, 'Konfüçyüsçülük' olarak bilinen felsefi sistemi doğurmuş; Doğu Asya kültürünü derinden etkilemiştir."
      },
      {
        id: "r69",
        difficulty: "medium",
        question: "Hac, İslam'ın kaçıncı şartıdır?",
        options: ["İkinci", "Üçüncü", "Dördüncü", "Beşinci"],
        correctIndex: 3,
        explanation: "Hac, İslam'ın beşinci şartıdır. Maddi ve bedeni gücü yeten her Müslümanın ömründe en az bir kez Mekke'deki Kâbe'yi ziyaret ederek yerine getirmesi gerekir. Hac, her yıl hicri Zilhicce ayının belirli günlerinde gerçekleştirilir."
      },
      {
        id: "r70",
        difficulty: "medium",
        question: "Yahudilikte Şabat hangi günü kapsar?",
        options: ["Cuma gece–Cumartesi gece", "Pazar–Pazartesi arası", "Perşembe gece–Cuma gece", "Cumartesi sabah–Pazar sabah"],
        correctIndex: 0,
        explanation: "Yahudilikte Şabat (Sabbath), Cuma günü güneş batımından Cumartesi günü üç yıldız görününceye kadar süren kutsal dinlenme günüdür. Tevrat'ta anlatılan yaratılışın yedinci günü olan Şabat'ta çalışmak ve belirli aktiviteler yasaktır."
      },
      {
        id: "r71",
        difficulty: "medium",
        question: "Hinduizm'de kutsal kabul edilen nehir hangisidir?",
        options: ["Nil", "Dicle", "Ganj (Ganges)", "İndus"],
        correctIndex: 2,
        explanation: "Ganj Nehri, Hinduizm'in en kutsal nehrisidir. Hindistan'da yaklaşık 2.500 km uzanan bu nehirde yıkanmanın günahları temizlediğine ve arındırdığına inanılır. Varanasi başta olmak üzere kıyısındaki birçok şehir, dinî törenler açısından büyük önem taşır."
      },
      {
        id: "r72",
        difficulty: "medium",
        question: "İslam'da 'kelime-i şehadet' ne anlama gelir?",
        options: ["Namaz kılmak", "Allah'ın birliğine ve Hz. Muhammed'in peygamberliğine şahitlik etmek", "Oruç niyeti", "Zekât vermek"],
        correctIndex: 1,
        explanation: "'Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abduhu ve rasulüh' şeklindeki kelime-i şehadet; Allah'tan başka ilah olmadığına ve Hz. Muhammed'in O'nun kulu ve elçisi olduğuna tanıklık etmektir. İslam'ın beş şartının birincisidir."
      },
      {
        id: "r73",
        difficulty: "medium",
        question: "Sih dinine ait en önemli kutsal mekân hangisidir?",
        options: ["Mekke", "Kudüs", "Altın Tapınak (Harmandir Sahib)", "Bodh Gaya"],
        correctIndex: 2,
        explanation: "Altın Tapınak (Harmandir Sahib), Hindistan'ın Amritsar şehrinde yer alır ve Sih inancının en kutsal mekânıdır. Altın kaplama kubbesinden dolayı bu adla anılan tapınak, her gün on binlerce ziyaretçi ağırlar ve tüm insanlara ücretsiz yemek sunan 'langar' geleneğiyle de tanınır."
      },
      {
        id: "r74",
        difficulty: "medium",
        question: "İslam'da kıble yönü nereye doğrudur?",
        options: ["Kudüs'e", "Medine'ye", "Mekke'deki Kâbe'ye", "Bağdat'a"],
        correctIndex: 2,
        explanation: "Kıble, İslam'da ibadet sırasında yönelinen yöndür ve Mekke'deki Kâbe'ye doğrudur. Kâbe, Müslümanlara göre Hz. İbrahim ve oğlu İsmail tarafından inşa edilen ilk ibadet evidir. Müslümanlar beş vakit namazda bu yöne döner."
      },
      {
        id: "r75",
        difficulty: "hard",
        question: "Hristiyanlıkta vaftiz ne anlama gelir?",
        options: ["Hac yolculuğu", "Günah çıkarma töreni", "Kiliseye kabul ve günahtan arınma ritüeli", "Evlilik töreni"],
        correctIndex: 2,
        explanation: "Vaftiz, Hristiyanlıkta kişinin inancını ikrar ettiği ve Kilise topluluğuna kabul edildiği temel sakramenttir. Su kullanılarak gerçekleştirilen bu ritüel, günahlardan arınmayı ve yeniden doğuşu simgeler. Vaftiz, birçok Hristiyan mezhebinde zorunlu kabul edilir."
      },
      {
        id: "r76",
        difficulty: "hard",
        question: "Konfüçyüsçülüğün temel ahlak kavramı olan 'rén' ne anlama gelir?",
        options: ["Bilgelik", "Cesaret", "İnsanlık sevgisi ve iyilik", "Dürüstlük"],
        correctIndex: 2,
        explanation: "Konfüçyüsçülüğün merkezi erdemi 'rén' (仁), insanlık sevgisi, şefkat ve başkalarına iyi davranma anlamına gelir. Konfüçyüs'e göre rén, tüm ahlaki erdemlerin temelidir; kişi bu erdemi ancak ailede ve toplumda uygun ilişkiler kurarak geliştirebilir."
      },
      {
        id: "r77",
        difficulty: "hard",
        question: "Yahudilikte Hanuka neyi kutlar?",
        options: ["Mısır'dan çıkışı", "Tapınağın yeniden adanmasını ve mucizevi yağ hikâyesini", "Tevrat'ın verilişini", "Yaratılışı"],
        correctIndex: 1,
        explanation: "Hanuka (Şükran Bayramı), MÖ 165'te Makedon Seleukos egemenliğine karşı ayaklanan Maccabee önderlerin Kudüs Tapınağı'nı yeniden ele geçirip adayışını ve tapınakta yalnızca bir günlük yağın sekiz gün yanmasındaki mucizeyi kutlar. Sekiz gece boyunca hanukiya adlı mumluktaki mumlar yakılır."
      },
      {
        id: "r78",
        difficulty: "hard",
        question: "Budizm'in 'Dört Yüce Gerçeği'nden birincisi nedir?",
        options: ["Nirvana'ya ulaşma yolu", "Yaşamın acı içerdiği (dukkha)", "Yeniden doğuş döngüsü", "Sekiz Aşamalı Yol"],
        correctIndex: 1,
        explanation: "Buda'nın öğrettiği Dört Yüce Gerçeğin birincisi 'dukkha'dır: Yaşam acı, tatminsizlik ve geçicilik içerir. İkinci gerçek acının kaynağını (arzu ve bağlılık), üçüncüsü acıdan kurtuluşun mümkün olduğunu, dördüncüsü ise bu kurtuluşa giden Sekiz Aşamalı Yolu açıklar."
      },
      {
        id: "r79",
        difficulty: "hard",
        question: "İslam'da zekat kimlere verilir?",
        options: ["Yalnızca din adamlarına", "Yalnızca akrabaya", "Fakirlere, borçlulara ve ihtiyaç sahiplerine", "Devlet hazinesine"],
        correctIndex: 2,
        explanation: "Kuran'da zekatın verileceği sekiz grup (asnaf) sayılmıştır: fakirler, miskinler (muhtaçlar), zekat toplayanlar, kalpleri İslam'a ısındırılacaklar, köleler, borçlular, Allah yolundaki hizmetler ve yolda kalanlar. Bu yönüyle zekat bir sosyal dayanışma kurumudur."
      },
      {
        id: "r80",
        difficulty: "hard",
        question: "Hinduizm'in kutsal metinlerinden 'Veda'lar nelerdir?",
        options: ["Sih duaları", "Budist öğretiler", "Hinduizm'in en eski kutsal yazın metinleri", "Jain ahlak kuralları"],
        correctIndex: 2,
        explanation: "Vedalar, Hinduizm'in MÖ 1500–1200 yıllarına tarihlenen en eski kutsal yazın metinleridir. Rig Veda, Sama Veda, Yajur Veda ve Atharva Veda olmak üzere dörde ayrılır. Kalıcılık ve kutsallık atfedilen bu metinler, Brahmin rahipleri tarafından nesilden nesile aktarılmıştır."
      },
      {
        id: "r81",
        difficulty: "hard",
        question: "Zerdüştlük (Mazdeizm) hangi ülkede doğmuştur?",
        options: ["Mısır", "Hindistan", "İran (Pers)", "Mezopotamya"],
        correctIndex: 2,
        explanation: "Zerdüştlük, MÖ 1500-1000 yılları arasında İran'da (eski Persia) peygamber Zerdüşt tarafından kurulmuştur. Ahura Mazda'ya tapınmayı esas alan bu din, iyilik ve kötülük arasındaki evrensel mücadeleyi öğretir."
      },
      {
        id: "r82",
        difficulty: "hard",
        question: "İslam'da hangi ay oruç tutulur?",
        options: ["Şevval", "Zilhicce", "Ramazan", "Muharrem"],
        correctIndex: 2,
        explanation: "Ramazan, İslam takviminin dokuzuncu ayıdır ve Müslümanların şafaktan gün batımına kadar yemek, içmek ve diğer bazı fiillerden uzak durduğu oruç ayıdır. Kur'an-ı Kerim'in ilk ayetlerinin Hz. Muhammed'e Ramazan'da indirildiğine inanılmaktadır."
      },
      {
        id: "r83",
        difficulty: "hard",
        question: "Yahudilik'te 'Bar Mitzvah' ne anlama gelir ve hangi yaşta gerçekleşir?",
        options: ["Doğum töreni, 1 yaşında", "Dini sorumluluk töreni, 13 yaşında", "Evlilik töreni, 18 yaşında", "Cenaze töreni, ölümde"],
        correctIndex: 1,
        explanation: "'Bar Mitzvah' İbranicede 'emirlerin oğlu' anlamına gelir ve Yahudi erkeklerinin 13 yaşında dini yükümlülüklerini üstlendiğini simgeleyen geçiş törenidir. Kız çocukları için ise 12 yaşında 'Bat Mitzvah' töreni düzenlenir."
      },
      {
        id: "r84",
        difficulty: "hard",
        question: "Budizm'deki 'Nirvana' kavramı ne anlama gelir?",
        options: ["Tanrı'nın cenneti", "Ruhun yeniden doğuşu", "Acı ve arzuların sona ermesi, aydınlanma", "Kötü ruhların kovulması"],
        correctIndex: 2,
        explanation: "Budizm'de Nirvana; istek, nefret ve yanılsamanın tamamen söndürülmesiyle ulaşılan aydınlanma hâlini ifade eder. Bu durumda yeniden doğuş döngüsü (samsara) sona erer ve bireysel acı ortadan kalkar. Pali ve Sanskritçede 'söndürme, dinginleşme' anlamına gelen Nirvana, Budizm'in nihai hedefidir."
      },
      {
        id: "r85",
        difficulty: "hard",
        question: "Hinduizm'in kutsal metinleri hangileridir?",
        options: ["Tevrat ve Talmud", "Vedalar ve Upanişadlar", "Tripitaka", "Avesta"],
        correctIndex: 1,
        explanation: "Hinduizm'in en eski ve kutsal metinleri Vedalar'dır (Rigveda, Samaveda, Yajurveda, Atharvaveda). Upanişadlar ise Veda geleneğinin felsefi yorumlarını içerir. Bunların yanı sıra Bhagavad Gita, Mahabharata ve Ramayana da Hinduizm'in önemli dini eserleri arasındadır."
      },
      {
        id: "r86",
        difficulty: "hard",
        question: "Hristiyanlıkta 'Kutsal Üçlü Birlik' (Trinity) hangi kavramları kapsar?",
        options: ["İsa, Meryem ve Yusuf", "Baba, Oğul ve Kutsal Ruh", "Allah, Melek ve İnsan", "İnanç, Umut ve Sevgi"],
        correctIndex: 1,
        explanation: "Hristiyanlığın temel inançlarından biri olan Kutsal Üçlü Birlik (Trinity) doktrini; Baba Tanrı, Oğul İsa Mesih ve Kutsal Ruh'un tek bir Tanrı'nın üç ayrı kişiliği olduğunu öğretir. Bu kavram Nicaea Konsili'nde (MS 325) resmileştirilmiştir."
      },
      {
        id: "r87",
        difficulty: "hard",
        question: "Sih dininin en kutsal mekânı nerededir?",
        options: ["Amritsar, Hindistan", "Varanasi, Hindistan", "Katmandu, Nepal", "Lahor, Pakistan"],
        correctIndex: 0,
        explanation: "Hindistan'ın Punjab eyaletindeki Amritsar şehrinde yer alan Harmandir Sahib (Altın Tapınak), Sikhizm'in en kutsal mekânıdır. Altın kaplama kubbesiyle ünlü olan tapınak, her gün yüz binlerce Sih ve ziyaretçiye kapılarını açmakta; herkese ücretsiz yemek (langar) sunmaktadır."
      },
      {
        id: "r88",
        difficulty: "hard",
        question: "İslam'da 'kıble' ne anlama gelir?",
        options: ["Namaz vakti", "Mekke'deki Kabe'nin bulunduğu yön", "Ramazan ayı", "Oruç niyeti"],
        correctIndex: 1,
        explanation: "Kıble, Müslümanların ibadet ederken yöneldikleri, Mekke'deki Kabe'nin bulunduğu yönü ifade eder. Dünya genelinde Müslümanlar namaz kılarken, Kur'an okurken ve çeşitli ibadetlerinde kıbleye yönelmektedir. Camilerdeki mihrap da kıble yönünü gösterir."
      },
      {
        id: "r89",
        difficulty: "hard",
        question: "Konfüçyanizm hangi ülkeden doğmuştur?",
        options: ["Japonya", "Kore", "Çin", "Hindistan"],
        correctIndex: 2,
        explanation: "Konfüçyanizm, MÖ 6-5. yüzyılda yaşayan Çinli düşünür Konfüçyüs'ün (Kong Zi) öğretilerine dayanan ahlak ve sosyal felsefe sistemidir. Toplumsal düzen, aile değerleri, atalar kültü, öğrenme ve ahlaki erdeme büyük önem veren bu düşünce sistemi Doğu Asya kültürlerini derinden etkilemiştir."
      },
      {
        id: "r90",
        difficulty: "hard",
        question: "Jainizm'in temel ilkesi olan 'Ahimsa' ne anlama gelir?",
        options: ["Meditasyon", "Şiddetsizlik / Canlılara zarar vermeme", "Oruç", "Tanrıya adanmışlık"],
        correctIndex: 1,
        explanation: "Ahimsa, Jainizm'in en temel ilkesi olup tüm canlılara zarar vermeme, şiddetsizlik demektir. Bu ilke o denli kapsamlıdır ki bazı Jain keşişler nefes alırken bile küçük canlıları yutmamak için ağızlarına maske takarlar. Mahatma Gandhi'nin pasif direniş felsefesini de büyük ölçüde Ahimsa ilkesi şekillendirmiştir."
      },
      {
        id: "r91",
        difficulty: "hard",
        question: "Hristiyanlık'ta Paskalya bayramı ne anlama gelir?",
        options: ["Hz. İsa'nın doğumu", "Hz. İsa'nın suya gömülmesi", "Hz. İsa'nın ölümden dirilişi", "Ruhun Güneşe yolculuğu"],
        correctIndex: 2,
        explanation: "Paskalya (Easter), Hristiyanlık'ta Hz. İsa Mesih'in çarmıha gerilmesinden üç gün sonra ölümden dirildiğine (diriliş/resurrection) dair inancı kutlayan en önemli bayramdır. Noel ile birlikte Hristiyanlığın iki büyük dini günü arasında yer alır."
      },
      {
        id: "r92",
        difficulty: "hard",
        question: "İslam'da 'hac' ibadeti nerede gerçekleştirilir?",
        options: ["Kudüs", "Medine", "Mekke", "İstanbul"],
        correctIndex: 2,
        explanation: "Hac, İslam'ın beş şartından biri olup her yıl Zilhicce ayında Suudi Arabistan'ın Mekke şehrinde gerçekleştirilir. Kâbe'yi tavaf etmeyi, Arafat'ta vakfe yapmayı ve çeşitli ritüelleri içeren bu ibadet, mali ve bedensel açıdan gücü yeten her Müslüman için ömürde bir kez farzdır."
      },
      {
        id: "r93",
        difficulty: "hard",
        question: "Zerdüştlüğün kutsal ateş tapınaklarında yanan ateş ne anlama gelir?",
        options: ["Cehennemi simgeler", "Tanrı Ahura Mazda'nın saflığını ve ışığını temsil eder", "Ruhların temizliğini sağlar", "Güneşin gücünü simgeler"],
        correctIndex: 1,
        explanation: "Zerdüştlükte ateş; yüce tanrı Ahura Mazda'nın saflığını, hakikatini ve nurunu simgeler. Ateş tapınaklarında sürekli yanan kutsal ateş, ibadet edenlerin Tanrı'nın varlığını hissettikleri odak noktasıdır. Bu nedenle Zerdüştler zaman zaman yanlışlıkla 'ateşe tapanlar' olarak anılır; oysa ateş yalnızca tanrısal saflığın sembolüdür."
      },
      {
        id: "r94",
        difficulty: "hard",
        question: "Yahudilikte Şabat (Sabbath) hangi günleri kapsar?",
        options: ["Pazar gün batımından Pazartesi gün doğumuna kadar", "Cuma gün batımından Cumartesi gün batımına kadar", "Cumartesi gün doğumundan Pazar gün doğumuna kadar", "Her Cuma yalnızca sabah"],
        correctIndex: 1,
        explanation: "Yahudilikte Şabat, kutsal istirahat günüdür ve Cuma günü gün batımından Cumartesi günü gün batımına kadar sürer. İbrani takviminde günler gün doğumu değil gün batımıyla başlar. Şabat'ta iş yapmak, ateş yakmak ve belirli faaliyetler yasaktır; bu süre ibadet, aile ve dinlenmeye ayrılır."
      },
      {
        id: "r95",
        difficulty: "hard",
        question: "Hristiyanlıkta 'Vaftiz' (Baptism) ne anlama gelir?",
        options: ["Dua etme şekli", "Günahların bağışlanması ve Hristiyanlığa kabul", "Evlilik töreni", "Cenaze ayini"],
        correctIndex: 1,
        explanation: "Vaftiz, suyla yapılan bir ritüel olup Hristiyan topluluğuna kabul edilmeyi, günahların bağışlanmasını ve yeni bir hayata başlamayı simgeler. Farklı Hristiyan mezheplerinde vaftiz uygulamaları değişiklik gösterir: bazıları bebeği suya daldırır, bazıları su serper, bazıları ise yetişkinleri vaftiz eder."
      },
      {
        id: "r96",
        difficulty: "hard",
        question: "İslam'ın beş şartı nelerdir?",
        options: ["Namaz, oruç, hac, cihad, zekat", "Kelime-i şehadet, namaz, oruç, zekat, hac", "Namaz, zekat, cihad, hac, sadaka", "Kelime-i şehadet, oruç, zekat, hac, cihad"],
        correctIndex: 1,
        explanation: "İslam'ın beş şartı (İslam'ın beş direği): 1) Kelime-i şehadet (Allah'tan başka tanrı olmadığını ve Muhammed'in O'nun elçisi olduğunu kabul etmek), 2) Namaz (günde beş vakit), 3) Oruç (Ramazan ayında), 4) Zekât (mali yardım), 5) Hac (Mekke'ye hac ziyareti)."
      },
      {
        id: "r97",
        difficulty: "hard",
        question: "Budizm'in kurucusu kimdir?",
        options: ["Konfüçyüs", "Siddhartha Gautama", "Mahavira", "Lao Tzu"],
        correctIndex: 1,
        explanation: "Budizm'in kurucusu Siddhartha Gautama'dır. MÖ 5-6. yüzyılda bugünkü Nepal sınırları içinde doğan Siddhartha, varlıklı bir prens olmasına rağmen yaşlılık, hastalık ve ölüm gibi acıları kavrayınca dünyevi hayatı terk etmiştir. Bodh Gaya'daki incir ağacı altında aydınlanmaya ulaşarak 'Buda' (uyanmış olan) adını almıştır."
      },
      {
        id: "r98",
        difficulty: "hard",
        question: "Taoizm'in temel kavramı 'Tao' ne anlama gelir?",
        options: ["Savaş ve zafer", "Evrenin temeli olan yol ve ilke", "Reenkarnasyon", "Ahlaki yükümlülük"],
        correctIndex: 1,
        explanation: "'Tao' Çincede 'yol' anlamına gelir ve Taoizm'de evrenin özünü, doğanın akışını ve tüm varoluşun temel ilkesini simgeler. Lao Tzu'ya atfedilen 'Tao Te Ching' adlı eserde doğayla uyum içinde yaşamak, bencillikten uzak durmak ve zorlamadan hareket etmek (wu wei) ilkeleri işlenmektedir."
      },
      {
        id: "r99",
        difficulty: "hard",
        question: "Yahudilikte 'Talmud' nedir?",
        options: ["Yahudilerin duası", "Yahudi sözlü hukukunu ve geleneklerini yorumlayan temel kaynak", "Peygamberlerin biyografisi", "İbrani alfabesinin ilk hali"],
        correctIndex: 1,
        explanation: "Talmud, Mişna (sözlü Tora'nın yazılı hâli) ile bu metni yorumlayan Gemara'dan oluşan kapsamlı bir Yahudi dini hukuku ve gelenekler derlemesidir. Filistin Talmud'u ve Babil Talmud'u olmak üzere iki versiyonu bulunan Talmud; hukuk, etik, felsefe ve folkloru bir arada barındırır."
      },
      {
        id: "r100",
        difficulty: "hard",
        question: "Hz. Muhammed hangi şehirde doğmuştur?",
        options: ["Medine", "Kudüs", "Bağdat", "Mekke"],
        correctIndex: 3,
        explanation: "İslam peygamberi Hz. Muhammed, MS 570 yılında Arabistan Yarımadası'ndaki Mekke şehrinde doğmuştur. 40 yaşında Hira Mağarası'nda ilk vahyi aldığına inanılmakta olup 622'de Mekke'den Medine'ye hicret etmiştir. 632 yılında Medine'de vefat etmiştir."
      },
      {
        id: "r101",
        difficulty: "hard",
        question: "İslam'da Hz. Muhammed'in Mekke'den Medine'ye hicretinin gerçekleştiği yıl hangi takvimin başlangıç noktasını oluşturur?",
        options: ["Miladi takvim", "Hicri takvim", "Rumi takvim", "Jülyen takvimi"],
        correctIndex: 1,
        explanation: "Hicri takvim, Hz. Muhammed'in MS 622 yılında Mekke'den Medine'ye yaptığı hicrete dayanmaktadır. Ay hareketlerine göre düzenlenen bu takvim, Miladi takvimden yaklaşık 11 gün kısa olduğu için Miladi yıllarla eşit ilerlemez. İslam dünyasında dini bayramların, Ramazan'ın ve diğer önemli günlerin belirlenmesinde hâlâ kullanılmaktadır."
      },
      {
        id: "r102",
        difficulty: "hard",
        question: "Yahudilikta 'Rosh Hashana' ne anlama gelir?",
        options: ["Vaat Edilen Topraklar Bayramı", "Büyük Af Günü", "Yahudi Yeni Yılı", "Hasat Festivali"],
        correctIndex: 2,
        explanation: "İbranice'de 'yılın başı' anlamına gelen Rosh Hashana, Yahudi yeni yılını kutlayan dini bayramdır. Tişri ayının ilk iki günü kutlanan bu festival, düşünce, tövbe ve yenilenme dönemi olarak kabul edilir. Şofar (koç boynuzu borusu) çalınması ve bal-elma yenilmesi bu bayramın simgesidir; ardından Yom Kippur (Kefaret Günü) gelir."
      },
      {
        id: "r103",
        difficulty: "hard",
        question: "Hinduizm'de döngüsel yeniden doğuş inancına ne ad verilir?",
        options: ["Nirvana", "Karma", "Samsara", "Dharma"],
        correctIndex: 2,
        explanation: "Samsara, Hinduizm, Budizm ve Jainizm'de ortak olan doğum, yaşam, ölüm ve yeniden doğuş döngüsünü tanımlar. Bu döngü kişinin karma (eylemlerin ahlaki sonuçları) tarafından yönlendirilir. Kurtuluş (moksha/nirvana), ruhun bu döngüden kurtulması ve mutlak gerçekliğe kavuşması anlamına gelir; her üç dinin de nihai hedefidir."
      },
      {
        id: "r104",
        difficulty: "hard",
        question: "Budizm'de 'Dört Asil Gerçek'in ilki nedir?",
        options: ["Sekiz Basamaklı Yol izlenmeli", "Dünyevî arzulardan vazgeçilmeli", "Hayat acı (Dukkha) barındırır", "Nirvana'ya erişim mümkündür"],
        correctIndex: 2,
        explanation: "Buda'nın ilk vaazında açıkladığı Dört Asil Gerçek'in ilki, 'Dukkha Gerçeği'dir: yaşamın acı, ıstırap ve tatminsizlik içerdiği. Diğerleri sırasıyla acının kaynağının arzu olduğu (Samudaya), acıya son verilebileceği (Nirodha) ve bu yolun Sekiz Basamaklı Yol olduğudur (Magga). Bu ilkeler Budist öğretinin çekirdeğini oluşturur."
      },
      {
        id: "r105",
        difficulty: "hard",
        question: "İslam'da namaz hangi yönde kılınır?",
        options: ["Güneş'in doğduğu yöne, doğuya", "Kudüs yönüne", "Kıble, yani Mekke yönüne", "Her Müslümanın yaşadığı şehrin yönüne"],
        correctIndex: 2,
        explanation: "İslam'da namaz kılarken yüzün çevrildiği yöne 'kıble' denir ve bu yön Mekke'deki Kâbe'ye doğrudur. Hicretin ilk yıllarında kıble Kudüs'tü; ancak Hicri 2. yılda (MS 624) Allah'ın emriyle Mekke'ye çevrildi. Camilerdeki 'mihrap' adlı niş, cemaate kıble yönünü göstermek için tasarlanmıştır."
      },
      {
        id: "r106",
        difficulty: "hard",
        question: "Taoizm'in temel öğretilerini içeren kutsal metin nedir?",
        options: ["Analektler", "Upanişadlar", "Tao Te Ching", "Zhuangzi"],
        correctIndex: 2,
        explanation: "Tao Te Ching (Dao De Jing), Taoizm'in kutsal kitabıdır ve MÖ 6. yüzyılda yaşadığı düşünülen Çinli filozof Laozi'ye atfedilmektedir. 81 kısa bölümden oluşan bu eser, 'Tao' (Yol) kavramını, doğaya uyumu, wu wei (eylemsiz eylem) ilkesini ve erdemi işler. Dünyada en çok çevrisi yapılan kitaplar arasındadır."
      },
      {
        id: "r107",
        difficulty: "hard",
        question: "Hinduizm'de 'Trimurti' adıyla anılan kutsal üçlü kimlerden oluşur?",
        options: ["İndra, Varuna, Agni", "Brahma, Vişnu, Şiva", "Ganeş, Lakşmi, Sarasvati", "Rama, Krişna, Hanuman"],
        correctIndex: 1,
        explanation: "Hindu kozmolojisinde evrenin işleyişini simgeleyen Trimurti (kutsal üçlü); yaratıcı Brahma, koruyucu Vişnu ve yıkıcı/dönüştürücü Şiva'dan oluşur. Brahma evreni yaratan, Vişnu dengeyi ve düzeni koruyan, Şiva ise eski döngüleri sona erdirip yeni bir yaratışı hazırlayan tanrıdır. Bu üçlü Hindu düşüncesindeki evrenin doğum-yaşam-ölüm döngüsünü yansıtır."
      },
      {
        id: "r108",
        difficulty: "hard",
        question: "Kur'an-ı Kerim kaç sureden oluşmaktadır?",
        options: ["99 sure", "112 sure", "114 sure", "120 sure"],
        correctIndex: 2,
        explanation: "Kur'an-ı Kerim; Fatiha suresiyle başlayan ve Nas suresiyle sona eren 114 sureden meydana gelir. Sureler ayet sayısına göre değil genel olarak uzunluktan kısaya doğru düzenlenmiştir; ancak Fatiha bu kuralın dışındadır. Toplamda yaklaşık 6.236 ayetten oluşan Kur'an, İslam inancına göre Allah'ın Hz. Muhammed'e Cebrail aracılığıyla indirdiği vahiydir."
      },
      {
        id: "r109",
        difficulty: "hard",
        question: "Shinto, hangi ülkenin geleneksel ve millî dinidir?",
        options: ["Çin", "Japonya", "Vietnam", "Kore"],
        correctIndex: 1,
        explanation: "Shinto, kökü kadim Japon kültürüne dayanan ve doğa ruhlarına (kami) inanç esasına dayalı Japonya'nın yerli dinidir. 'Kami'nin yolu' anlamına gelen Shinto'da tapınaklar (jinja) önemli mekânlardır; Tanrıça Amaterasu en yüce kami kabul edilir. Meiji döneminde (1868-1912) devlet dini ilan edilen Shinto, II. Dünya Savaşı'ndan sonra yeniden sivil bir din kimliğine büründü."
      },
      {
        id: "r110",
        difficulty: "hard",
        question: "İslam'da 'fıkıh' nedir?",
        options: ["Kur'an'ı ezberleme ilmi", "İslam hukuku ve dini hükümleri inceleyen ilim dalı", "Hadis toplama yöntemi", "Tasavvuf yolu"],
        correctIndex: 1,
        explanation: "Fıkıh (Arapça: anlayış, kavrayış), Kur'an, Sünnet, kıyas ve icmaya dayanarak Müslümanların davranışlarına ilişkin hükümleri belirleyen İslam hukukudur. Hanefî, Malikî, Şafiî ve Hanbelî olmak üzere dört büyük Sünni fıkıh mezhebi bulunmaktadır. Fıkıh; ibadet, aile hukuku, ticaret, miras ve ceza gibi pek çok alanı kapsar."
      },
      {
        id: "r111",
        difficulty: "easy",
        question: "İslam'da bir günde toplam kaç vakit namaz vardır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "İslam'ın beş şartından biri olan namaz, günde 5 vakit kılınır: sabah, öğle, ikindi, akşam ve yatsı."
      },
      {
        id: "r112",
        difficulty: "easy",
        question: "Müslümanların kutsal kitabı hangisidir?",
        options: ["İncil", "Tevrat", "Zebur", "Kur'an"],
        correctIndex: 3,
        explanation: "Kur'an-ı Kerim, Müslümanların kutsal kitabıdır ve Hz. Muhammed'e Cebrail aracılığıyla 23 yılda vahyedilmiştir."
      },
      {
        id: "r113",
        difficulty: "easy",
        question: "Hristiyanların büyük çoğunluğu için kutsal gün hangi gündür?",
        options: ["Cuma", "Cumartesi", "Pazar", "Pazartesi"],
        correctIndex: 2,
        explanation: "Hristiyanlık'ta Pazar, Hz. İsa'nın diriliş gününü temsil ettiği için ibadet ve dinlenme günü olarak kabul edilir."
      },
      {
        id: "r114",
        difficulty: "easy",
        question: "Yahudilik dininin kutsal kitabının adı nedir?",
        options: ["Kur'an", "Tevrat (Tora)", "İncil", "Avesta"],
        correctIndex: 1,
        explanation: "Yahudilik'in kutsal kitabı Tora'dır (Tevrat); İbranice kutsal yazıların ilk beş kitabını oluşturur."
      },
      {
        id: "r115",
        difficulty: "easy",
        question: "İslam'da Kâbe hangi şehirdedir?",
        options: ["Medine", "Kudüs", "Mekke", "Şam"],
        correctIndex: 2,
        explanation: "Müslümanların kıblesi olan Kâbe, Suudi Arabistan'ın Mekke şehrindeki Mescid-i Haram'ın ortasında yer alır."
      },
      {
        id: "r116",
        difficulty: "easy",
        question: "Buddha öğretilerinin temel unsuru olan dört önemli gerçek nelerdir?",
        options: ["Dört Soylu Gerçek", "Dört Vahiy", "Dört Yüce Kitap", "Dört Gizli İlke"],
        correctIndex: 0,
        explanation: "Budizm'in çekirdeğini oluşturan 'Dört Soylu Gerçek', acı, acının kaynağı, acının sona ermesi ve buna giden yolu (Sekiz Aşamalı Yol) anlatır."
      },
      {
        id: "r117",
        difficulty: "easy",
        question: "İslam'da oruç ibadeti hangi ay tutulur?",
        options: ["Şevval", "Şaban", "Ramazan", "Muharrem"],
        correctIndex: 2,
        explanation: "Müslümanlar hicri takvimin dokuzuncu ayı olan Ramazan'da oruç tutarlar; orucun terkedilmesi ancak şer'i mazeretle olur."
      },
      {
        id: "r118",
        difficulty: "easy",
        question: "Hindu inancında üç ana tanrı (Trimurti) hangileridir?",
        options: ["Brahma, Vishnu, Shiva", "Indra, Agni, Vayu", "Krishna, Rama, Hanuman", "Lakshmi, Parvati, Saraswati"],
        correctIndex: 0,
        explanation: "Hindu inancında Trimurti; yaratıcı Brahma, koruyucu Vishnu ve yok edici Shiva olmak üzere üç temel tanrıyı ifade eder."
      },
      {
        id: "r119",
        difficulty: "easy",
        question: "İslam dininde hac ibadeti yılın hangi ayında yapılır?",
        options: ["Ramazan", "Şaban", "Muharrem", "Zilhicce"],
        correctIndex: 3,
        explanation: "Hac, hicri takvimin son ayı olan Zilhicce'nin 8-13. günleri arasında Mekke ve çevresinde yapılan ibadettir."
      },
      {
        id: "r120",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi İslam'ın beş şartından biridir?",
        options: ["Vaftiz olmak", "Zekât vermek", "Pazar ayini", "Pagoda inşa etmek"],
        correctIndex: 1,
        explanation: "İslam'ın beş şartı; kelime-i şehadet, namaz, oruç, zekât ve hacdır."
      },
      {
        id: "r121",
        difficulty: "easy",
        question: "Kur'an'da kaç sure bulunur?",
        options: ["100", "114", "120", "144"],
        correctIndex: 1,
        explanation: "Kur'an-ı Kerim, en uzun sure Bakara ve en kısa sure Kevser olmak üzere toplam 114 sureden oluşur."
      },
      {
        id: "r122",
        difficulty: "easy",
        question: "Hz. Muhammed'in doğum şehri neresidir?",
        options: ["Medine", "Kudüs", "Mekke", "Taif"],
        correctIndex: 2,
        explanation: "Hz. Muhammed (s.a.v.) 571 yılında Mekke'de doğmuş, peygamberlik görevini de yine bu şehirde almıştır."
      },
      {
        id: "r123",
        difficulty: "easy",
        question: "İlk vahyin geldiği mağaranın adı nedir?",
        options: ["Sevr Mağarası", "Hira Mağarası", "Uhud Mağarası", "Kuba Mağarası"],
        correctIndex: 1,
        explanation: "Hz. Muhammed'e ilk vahiy, Mekke yakınlarındaki Nur Dağı üzerindeki Hira Mağarası'nda gelmiştir; ilk inen ayetler Alak suresinin ilk beş ayetidir."
      },
      {
        id: "r124",
        difficulty: "easy",
        question: "Sihizm dininin kurucusu kimdir?",
        options: ["Buda", "Konfüçyüs", "Guru Nanak", "Lao Tzu"],
        correctIndex: 2,
        explanation: "Sihizm, 15. yüzyılda Hindistan'ın Pencap bölgesinde Guru Nanak tarafından kurulan tek tanrılı bir dindir."
      },
      {
        id: "r125",
        difficulty: "easy",
        question: "Hristiyanlık'ta Hz. İsa'nın çarmıha gerildikten sonraki dirilişi hangi bayramla kutlanır?",
        options: ["Noel", "Paskalya", "Şükran Günü", "Pentekost"],
        correctIndex: 1,
        explanation: "Paskalya (Easter), Hz. İsa'nın çarmıha gerildikten üç gün sonra dirildiğine inanılan günü kutlayan Hristiyanlık'ın en önemli bayramıdır."
      },
      {
        id: "r126",
        difficulty: "easy",
        question: "Hangisi Sami dinlerinden biri değildir?",
        options: ["Yahudilik", "Hristiyanlık", "İslam", "Budizm"],
        correctIndex: 3,
        explanation: "Yahudilik, Hristiyanlık ve İslam, Hz. İbrahim soyundan geldiği kabul edilen Sami (İbrahimi) dinleridir; Budizm ise Hint kökenli bir dindir."
      },
      {
        id: "r127",
        difficulty: "easy",
        question: "İslam'da Cuma günü kılınan ve cemaatle eda edilen namaz hangisidir?",
        options: ["Bayram namazı", "Teravih namazı", "Cuma namazı", "Cenaze namazı"],
        correctIndex: 2,
        explanation: "Cuma namazı, Cuma günleri öğle vaktinde camide cemaatle kılınan ve hutbeyle birlikte eda edilen iki rekâtlık farz namazdır."
      },
      {
        id: "r128",
        difficulty: "medium",
        question: "Kur'an'daki en uzun sure hangisidir?",
        options: ["Yâsîn", "Bakara", "Âl-i İmrân", "Nisa"],
        correctIndex: 1,
        explanation: "Bakara suresi 286 ayetiyle Kur'an-ı Kerim'in en uzun suresidir; Kur'an'ın yaklaşık 1/12'sini oluşturur."
      },
      {
        id: "r129",
        difficulty: "medium",
        question: "Hz. Muhammed Mekke'den Medine'ye hangi yıl hicret etmiştir?",
        options: ["610", "622", "632", "650"],
        correctIndex: 1,
        explanation: "Hicret, MS 622 yılında gerçekleşmiştir ve Hicri takvimin başlangıcı kabul edilmiştir."
      },
      {
        id: "r130",
        difficulty: "medium",
        question: "İslam'a göre dört büyük melekten hangisi vahiy getirmekle görevlidir?",
        options: ["Mikail", "İsrafil", "Cebrail", "Azrail"],
        correctIndex: 2,
        explanation: "Cebrail (Cibril), Allah'ın peygamberlerine vahiy ulaştırmakla görevli melektir; Hz. Muhammed'e de Kur'an'ı bu melek getirmiştir."
      },
      {
        id: "r131",
        difficulty: "medium",
        question: "Hristiyan kutsal kitabının iki büyük bölümü hangileridir?",
        options: ["Tora ve Talmud", "Eski ve Yeni Ahit", "Mezmurlar ve Müjde", "Tevrat ve Zebur"],
        correctIndex: 1,
        explanation: "Hristiyanlığın kutsal kitabı, Yahudilikle ortak olan Eski Ahit (Tanah) ve Hz. İsa dönemine ait Yeni Ahit (İncil) bölümlerinden oluşur."
      },
      {
        id: "r132",
        difficulty: "medium",
        question: "Kâbe içinde bulunan ve hac sırasında öpülmesi sünnet olan siyah taşa ne ad verilir?",
        options: ["Hacerü'l-esved", "Makam-ı İbrahim", "Zemzem taşı", "Mültezem"],
        correctIndex: 0,
        explanation: "Hacerü'l-esved, Kâbe'nin doğu köşesinde bulunan ve Hz. İbrahim döneminden kaldığı kabul edilen kutsal siyah taştır."
      },
      {
        id: "r133",
        difficulty: "medium",
        question: "Yahudilik'te 'Şabat' günü hangi gündür?",
        options: ["Cuma", "Cumartesi", "Pazar", "Pazartesi"],
        correctIndex: 1,
        explanation: "Şabat, Yahudilikte Cuma akşamı gün batımıyla başlayıp Cumartesi akşamı sona eren ve dinlenme ile ibadete ayrılan kutsal gündür."
      },
      {
        id: "r134",
        difficulty: "medium",
        question: "İslam mezheplerinden Hanefi mezhebinin kurucusu kimdir?",
        options: ["İmam Şafii", "İmam Malik", "İmam Ebû Hanîfe", "Ahmed bin Hanbel"],
        correctIndex: 2,
        explanation: "Hanefi mezhebi, sekizinci yüzyılda Kûfe'de yaşamış Ebû Hanîfe Numan bin Sabit tarafından kurulmuş; en yaygın Sünni fıkıh mezhebidir."
      },
      {
        id: "r135",
        difficulty: "medium",
        question: "Vaftiz, hangi dinin temel sakramentlerinden biridir?",
        options: ["İslam", "Yahudilik", "Hristiyanlık", "Budizm"],
        correctIndex: 2,
        explanation: "Vaftiz, suyun semboliği üzerinden günahlardan arınma ve Hristiyan topluluğuna katılmayı temsil eden temel bir Hristiyan ayinidir."
      },
      {
        id: "r136",
        difficulty: "medium",
        question: "Hz. İbrahim'in oğullarından hangisi İslam geleneğinde Arapların atası kabul edilir?",
        options: ["İshak", "İsmail", "Yakup", "Yusuf"],
        correctIndex: 1,
        explanation: "İslam geleneğinde Hz. İsmail, Arapların atası ve Hz. Muhammed'in soy çizgisinin başlangıcı olarak kabul edilir."
      },
      {
        id: "r137",
        difficulty: "medium",
        question: "Budizm'de 'Nirvana' kavramı neyi ifade eder?",
        options: ["Yeni doğum", "Acıdan ve yeniden doğumdan kurtuluş", "Cennet", "Tövbe"],
        correctIndex: 1,
        explanation: "Nirvana; Budizm'de arzulardan, acıdan ve yeniden doğum döngüsünden tamamen kurtulmuş aydınlanma durumudur."
      },
      {
        id: "r138",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi 'Aleviliğin' temel kavramlarından biri değildir?",
        options: ["Cem", "Semah", "Zekât", "Musahiplik"],
        correctIndex: 2,
        explanation: "Cem, semah ve musahiplik Alevi-Bektaşi ibadet ve toplum hayatının temel kavramlarındandır; zekât ise daha çok Sünni İslam fıkhındaki belirli bir ibadetin adıdır."
      },
      {
        id: "r139",
        difficulty: "medium",
        question: "Hz. Muhammed'in son hac ziyaretinde okuduğu hutbeye ne ad verilir?",
        options: ["Cuma Hutbesi", "Veda Hutbesi", "Bayram Hutbesi", "Hicret Hutbesi"],
        correctIndex: 1,
        explanation: "Veda Hutbesi, Hz. Muhammed'in 632'deki Veda Haccı sırasında Arafat'ta okuduğu, eşitlik ve hakların korunmasına dair tarihi hutbedir."
      },
      {
        id: "r140",
        difficulty: "medium",
        question: "Vatikan'ın başında bulunan Katolik Kilisesi'nin lideri hangi unvanla anılır?",
        options: ["Patrik", "Hahambaşı", "Papa", "Halife"],
        correctIndex: 2,
        explanation: "Papa, Roma Katolik Kilisesi'nin ruhani lideri ve Vatikan Devleti'nin başıdır; doğrudan Aziz Petrus'un halefi olarak kabul edilir."
      },
      {
        id: "r141",
        difficulty: "medium",
        question: "Kur'an'ın 18. suresi olan ve haftada bir okunması tavsiye edilen sure hangisidir?",
        options: ["Yâsîn", "Kehf", "Mülk", "Vâkıa"],
        correctIndex: 1,
        explanation: "Kehf suresi, Kur'an'ın 18. suresidir; özellikle Cuma günleri okunması tavsiye edilen önemli surelerdendir."
      },
      {
        id: "r142",
        difficulty: "medium",
        question: "Hristiyanlıkta 12 öğrencisine ne ad verilir?",
        options: ["Şâkirtler", "Havariler", "Episkoposlar", "Aziz Beyleri"],
        correctIndex: 1,
        explanation: "Hz. İsa'nın seçtiği ve onun mesajını yaymakla görevlendirilen 12 öğrencisine 'havariler' (apostles) denir."
      },
      {
        id: "r143",
        difficulty: "medium",
        question: "İslam mezheplerinden Şafii'nin kurucusu kimdir?",
        options: ["İmam Malik", "İmam Şafii", "Ahmed bin Hanbel", "Ebû Hanîfe"],
        correctIndex: 1,
        explanation: "Şafii mezhebi, Muhammed bin İdris eş-Şafii tarafından (öl. 820) kurulmuş; usul-i fıkıh sistematiği bakımından önemli bir mezheptir."
      },
      {
        id: "r144",
        difficulty: "hard",
        question: "İslam'da 'Beytülmâl' kavramı neyi ifade eder?",
        options: ["Devlet hazinesi", "Halkın evi", "Resmi mahkeme", "Camii vakfı"],
        correctIndex: 0,
        explanation: "Beytülmâl, İslam devletinin gelirlerinin toplandığı ve harcandığı 'devlet hazinesi'dir; Hz. Ömer döneminde sistematik bir kurum hâline getirilmiştir."
      },
      {
        id: "r145",
        difficulty: "hard",
        question: "İlk dört halifeye İslam tarihinde verilen ortak ad nedir?",
        options: ["Emeviler", "Abbasiler", "Râşid Halifeler", "Fatımiler"],
        correctIndex: 2,
        explanation: "Hulefâ-i Râşidîn olarak anılan ilk dört halife; Hz. Ebû Bekir, Ömer, Osman ve Ali'dir; bu dönem 632-661 arasını kapsar."
      },
      {
        id: "r146",
        difficulty: "hard",
        question: "Yahudilikte Talmud hangi içerikleri kapsar?",
        options: ["Yalnızca dualar", "Sözlü gelenek ve dini yorumlar", "Yalnızca peygamber kıssaları", "Kanun kitabı değildir"],
        correctIndex: 1,
        explanation: "Talmud; Mişna (sözlü Tora) ve Gemara (yorumlar) bölümlerinden oluşan, Yahudi yasası, etik ve geleneklerini kapsayan temel ansiklopedik metindir."
      },
      {
        id: "r147",
        difficulty: "hard",
        question: "Hangi Hristiyan mezhebi Trento Konsili (1545-1563) ile teolojik çerçevesini netleştirmiştir?",
        options: ["Ortodoksluk", "Katoliklik", "Protestanlık", "Kıpti"],
        correctIndex: 1,
        explanation: "Trento Konsili, Karşı-Reform hareketi çerçevesinde Roma Katolik Kilisesi'nin doktrin, ayin ve disiplinini yeniden tanımlayan önemli bir konsildir."
      },
      {
        id: "r148",
        difficulty: "hard",
        question: "Sufi gelenekte 'fenâ' kavramı ne anlama gelir?",
        options: ["Arınma", "Benliğin Allah'ta yok olması (vuslat hâli)", "Gizli zikir", "Açık tövbe"],
        correctIndex: 1,
        explanation: "Fenâ; tasavvufta nefsanî isteklerin ve benlik duygusunun ilahi varlık karşısında 'yok olması', Hak'ta erimesi anlamına gelir."
      },
      {
        id: "r149",
        difficulty: "hard",
        question: "Hindu kutsal metinleri arasında en eski olanı hangisidir?",
        options: ["Mahabharata", "Ramayana", "Vedalar", "Upanishadlar"],
        correctIndex: 2,
        explanation: "Vedalar, MÖ ikinci binyıla uzanan ve Hinduizmin en eski kutsal metinler bütünüdür; dört ana koleksiyondan oluşur (Rig, Sama, Yajur, Atharva)."
      },
      {
        id: "r150",
        difficulty: "hard",
        question: "Kur'an'ı Mushaf hâline getiren halife kimdir?",
        options: ["Hz. Ebû Bekir", "Hz. Ömer", "Hz. Osman", "Hz. Ali"],
        correctIndex: 0,
        explanation: "Kur'an, Hz. Ebû Bekir döneminde Yemâme savaşındaki hafız kayıplarından sonra Zeyd bin Sabit başkanlığında bir komisyon tarafından mushaf hâline getirildi; Hz. Osman döneminde çoğaltıldı."
      },
      {
        id: "r151",
        difficulty: "hard",
        question: "İslam mezheplerinden 'Caferilik' hangi mezhep grubunun bir koludur?",
        options: ["Sünnilik", "Şiilik", "Hariciler", "Mutezile"],
        correctIndex: 1,
        explanation: "Caferilik, Şii İslam'ın en yaygın fıkıh mezhebidir; adını altıncı imam Cafer-i Sadık'tan alır ve özellikle İran'da yaygındır."
      },
      {
        id: "r152",
        difficulty: "hard",
        question: "Hangi konsil Hristiyanlıkta Nicene İnanç Bildirgesi'nin temellerini atmıştır?",
        options: ["Trento", "Vatikan I", "Nicaea (İznik) Konsili", "Konstantinopol IV"],
        correctIndex: 2,
        explanation: "İznik (Nicaea) Konsili, 325 yılında İmparator Konstantin tarafından toplanmış ve Hz. İsa'nın 'Tanrı ile aynı özden' olduğunu ifade eden Nicene İnancı'nı ortaya koymuştur."
      },
      {
        id: "r153",
        difficulty: "hard",
        question: "Tevrat'ın ilk beş kitabına genel olarak ne ad verilir?",
        options: ["Mezmurlar", "Tora (Pentateuch)", "Mişna", "Gemara"],
        correctIndex: 1,
        explanation: "Tevrat'ın ilk beş kitabı (Yaratılış, Çıkış, Levililer, Sayılar, Yasanın Tekrarı) Yahudilikte Tora veya Yunanca 'Pentateuch' olarak adlandırılır."
      },
      {
        id: "r154",
        difficulty: "hard",
        question: "Bahaî inancının kurucusu kimdir?",
        options: ["Bab", "Bahaullah", "Abdulbaha", "Şoghi Effendi"],
        correctIndex: 1,
        explanation: "Bahaî inancı, 19. yüzyılda İran'da Bahaullah (Mirza Hüseyin Ali Nuri) tarafından kurulmuş; tüm dinlerin birliği ve insanlığın tek bir aile olduğu öğretisini savunur."
      },
      {
        id: "r155",
        difficulty: "hard",
        question: "İslam'da 'icma' terimi neyi ifade eder?",
        options: ["Ortak namaz", "Müctehidlerin bir mesele üzerinde görüş birliğine varması", "Toplu zikir", "Cemaatle hac yapma"],
        correctIndex: 1,
        explanation: "İcma; bir konuda müctehit alimlerin görüş birliği etmesidir ve fıkıhta Kur'an ve sünnetten sonra üçüncü kaynak kabul edilir."
      },
      {
        id: "r156",
        difficulty: "hard",
        question: "Konfüçyüsçülük öğretisinin merkezindeki kavram hangisidir?",
        options: ["Karma", "Ren (insanlık ve erdem)", "Dharma", "Tevhid"],
        correctIndex: 1,
        explanation: "Konfüçyüs öğretisinin merkezindeki temel kavram olan 'Ren' (仁); merhamet, saygı, doğruluk gibi erdemlere dayanan insanlık ahlakını ifade eder."
      },
      {
        id: "r157",
        difficulty: "hard",
        question: "Hz. Muhammed'in defnedildiği şehir hangisidir?",
        options: ["Mekke", "Kudüs", "Medine", "Şam"],
        correctIndex: 2,
        explanation: "Hz. Muhammed, 632'de Medine'de vefat etmiş ve Mescid-i Nebevi içerisindeki 'Hücre-i Saadet' olarak bilinen odaya defnedilmiştir."
      },
      {
        id: "r158",
        difficulty: "hard",
        question: "Selçukluların resmi mezhebi hangisidir?",
        options: ["Maliki", "Hanefi-Sünni", "Şafii-Şii", "Caferi"],
        correctIndex: 1,
        explanation: "Büyük Selçuklu Devleti'nin ve Anadolu Selçuklularının resmi mezhebi Hanefi-Sünni İslam'dır; Nizamiye Medreseleri bu çizgiyi kurumsallaştırmıştır."
      },
      {
        id: "r159",
        difficulty: "hard",
        question: "Hıristiyanlıkta 'Aforoz' kavramı neyi ifade eder?",
        options: ["Kutsal yağ ile takdis", "Kişinin kilise topluluğundan ihraç edilmesi", "Bir günahın itiraf edilmesi", "Yeni bir ayin ihdası"],
        correctIndex: 1,
        explanation: "Aforoz; bir kişinin Kilise tarafından sakramentlere katılma hakkından mahrum bırakılarak topluluktan resmi olarak çıkarılmasıdır."
      },
      {
        id: "r160",
        difficulty: "hard",
        question: "İslam'ın ilk müezzini olarak bilinen sahabe kimdir?",
        options: ["Bilal-i Habeşi", "Selman-ı Farisi", "Süheyl-i Rumi", "Ammar bin Yasir"],
        correctIndex: 0,
        explanation: "Bilal-i Habeşi (Bilal bin Rabah), Hz. Muhammed tarafından İslam'ın ilk müezzini olarak görevlendirilmiş Habeşistanlı sahabedir."
      },
      {
        id: "r161",
        difficulty: "easy",
        question: "İslam dininin kaç şartı vardır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "İslam'ın beş şartı şunlardır: Kelime-i Şehadet, Namaz, Oruç (Ramazan), Zekat ve Hac. Bu beş temel yükümlülük Müslümanların inanç ve ibadet hayatının çerçevesini oluşturur."
      },
      {
        id: "r162",
        difficulty: "easy",
        question: "Kuran-ı Kerim toplam kaç sureden oluşur?",
        options: ["99", "112", "114", "120"],
        correctIndex: 2,
        explanation: "Kuran-ı Kerim, 114 sureden oluşmaktadır. En uzun sure 286 ayetten oluşan Bakara Suresi, en kısa sure ise 3 ayetten oluşan Kevser Suresi'dir."
      },
      {
        id: "r163",
        difficulty: "medium",
        question: "Yahudilikte haftalık kutsal istirahat günü olan 'Şabat' hangi gün kutlanır?",
        options: ["Cuma", "Cumartesi", "Pazar", "Pazartesi"],
        correctIndex: 1,
        explanation: "Şabat (Sabbath), Yahudilikte Cuma günü güneş batımından Cumartesi günü güneş batımına kadar süren kutsal istirahat günüdür. Tevrat'a göre Allah altı günde yaratılışı tamamlamış ve yedinci gün dinlenmiştir; bu gün Yahudiler için ibadet ve aile birlikteliğine adanır."
      },
      {
        id: "r164",
        difficulty: "medium",
        question: "Hristiyan takviminde Noel, İsa'nın doğumunu hangi tarihte kutlar?",
        options: ["6 Ocak", "25 Aralık", "31 Mart", "15 Ağustos"],
        correctIndex: 1,
        explanation: "Çoğu Hristiyan mezhebinde Noel, İsa Mesih'in doğumunu 25 Aralık'ta kutlar. Bu tarihin kesin doğum tarihi olmadığı bilinmektedir; ancak MS 4. yüzyıldan itibaren bu gün genel kabul görmüştür. Ortodoks kiliselerinin bir kısmı Jülyen takvimine göre 7 Ocak'ta kutlar."
      },
      {
        id: "r165",
        difficulty: "medium",
        question: "Budizm'de 'Nirvana' ne anlama gelir?",
        options: ["Cennete yükselmek", "Reenkarnasyon döngüsünden kurtularak acının sona ermesi", "Tanrıya dua etmek", "Dünya zevklerinden tamamen kaçınmak"],
        correctIndex: 1,
        explanation: "Nirvana, Budizm'de acıdan ve samsara (ölüm-doğum döngüsü) çemberinden kurtuluşu simgeler; arzuların, nefretin ve yanılsamanın söndürülmesiyle ulaşılan aydınlanma hâlidir. Siddhartha Gautama Bodh Gaya'da meditasyon sırasında Nirvanaya ulaşarak Buda adını almıştır."
      },
      {
        id: "r166",
        difficulty: "medium",
        question: "İslam'da 'zekat' ne anlama gelir ve kimler için farzdır?",
        options: ["Oruç tutmak; tüm Müslümanlar için", "Belirli nisap miktarının üzerinde mala sahip Müslümanların servetlerinin bir kısmını fakirlere vermesi", "Hacca gitmek; gücü yetenler için", "Namaz kılmak; tüm yetişkin Müslümanlar için"],
        correctIndex: 1,
        explanation: "Zekat, İslam'ın beş şartından biri olan mali ibadettir. Nisap miktarını aşan servete bir yıl sahip olan Müslümanların bu servetin %2,5'ini fakirlere ve belirtilen diğer gruplara dağıtması farzdır. Zekat, serveti toplumda dengeli biçimde dolaştırmayı amaçlar."
      },
      {
        id: "r167",
        difficulty: "hard",
        question: "Yahudilikte kutsal metin olarak kabul edilen 'Talmud' nedir?",
        options: ["Yalnızca İbrani alfabesiyle yazılmış şiir kitabı", "Mişna ve Gemara'dan oluşan Yahudi dini hukuk ve geleneklerinin kapsamlı yorumu", "Tevrat'ın Aramice çevirisi", "Yahudi ibadet duaları derlemesi"],
        correctIndex: 1,
        explanation: "Talmud, Yahudi dini hukukunu (Halacha), etiğini, hikâyelerini ve geleneğini içeren kapsamlı bir külliyattır. Mişna'nın Gemara adıyla bilinen yorumlarıyla birleşiminden oluşur; Babil Talmudu (Bavli) ve Kudüs Talmudu (Yeruşalmi) olmak üzere iki versiyonu mevcuttur."
      },
      {
        id: "r168",
        difficulty: "hard",
        question: "Hinduizm'de 'karma' kavramı ne anlama gelir?",
        options: ["Kötü ruhlardan koruyucu büyü", "Nedensellik yasası; eylemlerin gelecekte sonuç doğurması", "Ruhun ölüm sonrası yeni bedene geçmesi", "En yüce tanrının adı"],
        correctIndex: 1,
        explanation: "Karma (Sanskritçe: 'eylem/iş'), Hinduizm, Budizm ve Jainizm'deki nedensellik yasasıdır: bireyin düşünce, söz ve eylemlerinin bu yaşamda ya da gelecek yaşamlarda kaçınılmaz sonuçlar doğurduğunu öne sürer. İyi karma erdem, kötü karma ise acı ve bedel getirir."
      },
      {
        id: "r169",
        difficulty: "hard",
        question: "İslam tarihindeki ilk dört halifenin ortak adı nedir?",
        options: ["Sahabe-i Kiram", "Hulefa-i Raşidin (Dört Halife)", "Ehlibeyt", "Müctehidler"],
        correctIndex: 1,
        explanation: "Hz. Muhammed'in vefatının ardından sırasıyla görev yapan Hz. Ebubekir, Hz. Ömer, Hz. Osman ve Hz. Ali'ye Hulefa-i Raşidin (Doğru Yola İletilmiş Halifeler) denir. Bu dönem (632-661), İslam tarihinde adalet ve şura ile yönetimin simgesi kabul edilir."
      },
      {
        id: "r170",
        difficulty: "hard",
        question: "'Ekümenik Konsül' hangi dine aittir ve ne anlama gelir?",
        options: ["İslam; tüm Müslüman alimlerin toplandığı meclis", "Hristiyanlık; tüm kilise temsilcilerinin katıldığı dogma ve öğreti meselelerini karara bağlayan genel meclis", "Yahudilik; sinagoglarda yürütülen yüksek mahkeme", "Budizm; manastır keşişlerinin ortak kararlar aldığı kurul"],
        correctIndex: 1,
        explanation: "Ekümenik Konsül, Hristiyan kiliselerinin teolojik meseleleri, dogmaları ve kilise disiplinini tartışıp karara bağlamak amacıyla düzenlediği evrensel meclisidir. Tarihte 21 ekümenik konsül toplanmış; İznik (325), Efes (431) ve Kadıköy (451) konkülleri en belirleyici kararları alan toplantılar arasında yer almaktadır."
      },
      {
        id: "r171",
        difficulty: "easy",
        question: "İslam'ın beş şartından biri olan Hac hangi şehirde gerçekleştirilir?",
        options: ["Medine", "Kudüs", "Mekke", "Bağdat"],
        correctIndex: 2,
        explanation: "Hac, İslam'ın beş şartından sonuncusu olup gücü yeten her Müslümanın hayatında en az bir kez yerine getirmesi gereken Mekke'ye yapılan kutsal yolculuktur. Hac mevsimi Zilhicce ayının 8-13. günlerini kapsar."
      },
      {
        id: "r172",
        difficulty: "easy",
        question: "Budizm'in kurucusu kimdir?",
        options: ["Konfüçyüs", "Lao Tzu", "Siddhartha Gautama (Buda)", "Mahavira"],
        correctIndex: 2,
        explanation: "Budizm, MÖ 5.-4. yüzyıllarda yaşadığı kabul edilen Hindistanlı prens Siddhartha Gautama'nın aydınlanmasıyla doğmuştur. 'Buda' unvanı 'uyanmış ya da aydınlanmış kişi' anlamına gelir."
      },
      {
        id: "r173",
        difficulty: "easy",
        question: "İslam'da orucun tutulduğu kutsal ay hangisidir?",
        options: ["Muharrem", "Ramazan", "Şaban", "Zilhicce"],
        correctIndex: 1,
        explanation: "Ramazan, İslam takviminin (Hicri takvim) dokuzuncu ayı olup tüm yetişkin Müslümanlar için fecirden iftar vaktine kadar yeme-içmeden kaçınmayı zorunlu kılan oruç ayıdır. Bu ayda Kur'an'ın ilk vahyinin indirildiğine inanılır."
      },
      {
        id: "r174",
        difficulty: "easy",
        question: "Hristiyanlıkta Paskalya ne anlama gelir?",
        options: ["İsa'nın doğumu", "İsa'nın dirilişi", "Kutsal Ruh'un inişi", "İsa'nın vaftizi"],
        correctIndex: 1,
        explanation: "Paskalya (Easter), Hristiyan inancına göre İsa Mesih'in çarmıha gerilmesinin ardından üç gün sonra dirilişini kutlayan en önemli dini bayramdır. Tarihi her yıl değişen Paskalya, ilkbahardaki ilk dolunayı izleyen pazar günü kutlanır."
      },
      {
        id: "r175",
        difficulty: "medium",
        question: "Yahudilikte 'Şabat' ne anlama gelir?",
        options: ["Yılın başlangıcı", "Haftalık dinlenme günü (Cumartesi)", "Oruç bayramı", "Tapınak kurban töreni"],
        correctIndex: 1,
        explanation: "Şabat (Sabbat), Yaratılış anlatısındaki yedinci günü (Tanrı'nın dinlenme günü) temel alarak güneş batımından Cumartesi akşamına kadar süren Yahudi dinlenme ve ibadet günüdür. Bu sürede çalışmak ve birçok gündelik etkinlik yasaklanmıştır."
      },
      {
        id: "r176",
        difficulty: "medium",
        question: "Hinduizm'de 'Dharma' kavramı ne anlama gelir?",
        options: ["Yeniden doğum döngüsü", "Kozmik düzen, ahlaki görev ve doğru yaşam biçimi", "Yüce ruh ile birleşme", "Karmik yük"],
        correctIndex: 1,
        explanation: "Dharma, Hinduizm'de bireyin sosyal statüsüne, yaşına ve cinsiyetine göre belirlenmiş kozmik düzeni, ahlaki görevleri ve doğru davranış ilkelerini kapsar. Dharma'ya uymak iyi karma biriktirir; ihmal etmek ise olumsuz karma doğurur."
      },
      {
        id: "r177",
        difficulty: "medium",
        question: "Hristiyanlıktaki Teslis (Trinite) doktrini neyi ifade eder?",
        options: ["Üç ayrı tanrı olduğunu", "Tanrı'nın Baba, Oğul ve Kutsal Ruh olmak üzere üç kişiliğe sahip ama tek bir varlık olduğunu", "İsa'nın sadece insan olduğunu", "Kutsal Ruh'un meleklerden biri olduğunu"],
        correctIndex: 1,
        explanation: "Teslis (Trinity) doktrinine göre Hristiyan Tanrısı, özce tek ama üç eş sonsuz ve eş güçlü kişilikten (Baba, Oğul, Kutsal Ruh) oluşur. Bu öğreti 325'te İznik Konsülü'nde resmileştirilmiştir."
      },
      {
        id: "r178",
        difficulty: "medium",
        question: "Yahudilik, Hristiyanlık ve İslam hangi ortak atayı paylaşır?",
        options: ["Musa", "İbrahim", "İshak", "Yakup"],
        correctIndex: 1,
        explanation: "İbrahim (Avraham/Abraham), Yahudilik, Hristiyanlık ve İslam'ın ortak atası olarak kabul edildiğinden bu üç din 'İbrahimi dinler' olarak adlandırılır. Her üç dinde de İbrahim'in tek tanrıya olan derin inancı ve itaati vurgulanır."
      },
      {
        id: "r179",
        difficulty: "medium",
        question: "Taoizm'de 'Wu Wei' kavramı ne anlama gelir?",
        options: ["Savaşmadan kazanmak", "Doğayla uyum içinde zorlamadan eylemde bulunmak", "Evrenin döngüsel yapısı", "İç huzura ulaşmak için meditasyon"],
        correctIndex: 1,
        explanation: "'Wu Wei' (無為), Taoizm'in temel kavramı olup 'eylem yapmama' ya da doğanın akışına karşı çıkmadan uyum içinde hareket etme olarak çevrilir. Lao Tzu'ya göre zorlamak ya da kontrol etmeye çalışmak Tao'ya aykırıdır."
      },
      {
        id: "r180",
        difficulty: "hard",
        question: "Konfüçyüsçülükteki 'Ren' (仁) kavramı ne anlama gelir?",
        options: ["Ritüel uyum", "İnsancıllık, merhamet ve insana saygı", "Siyasi yönetim ilkesi", "Kozmik denge"],
        correctIndex: 1,
        explanation: "'Ren' (仁), Konfüçyüsçülüğün temel erdemi olup insana karşı sevgi ve merhameti ifade eder. Konfüçyüs'e göre Ren'e sahip kişi başkalarına kendisine yapılmasını istediği gibi davranır ('Altın Kural'); bu erdem diğer tüm erdemlerin temelidir."
      },
      {
        id: "r181",
        difficulty: "hard",
        question: "Budizm'de 'Şunyata' (boşluk) öğretisi neyi savunur?",
        options: ["Evrenin başlangıcının boş bir uzaydan oluştuğunu", "Tüm olayların ve olguların bağımsız ve kalıcı bir özden yoksun, birbirine bağımlı olduğunu", "Nirvana'nın hiçliğe ulaşmak anlamına geldiğini", "Meditasyonun zihinsel boşluğa yol açtığını"],
        correctIndex: 1,
        explanation: "Şunyata (Skt. śūnyatā), özellikle Mahayana Budizmi'nde tüm fenomenlerin bağımsız ve değişmez bir özden yoksun olduğunu öne sürer. Her şey diğer koşullara bağlı olarak ortaya çıkar (pratityasamutpada); bu nedenle 'ben' de dahil hiçbir şeyin sabit bir özü yoktur."
      },
      {
        id: "r182",
        difficulty: "medium",
        question: "İslam'da Sünni ve Şii ayrımı temel olarak neyi temsil eder?",
        options: ["Farklı dua ritüellerini", "Hz. Muhammed'in ölümünden sonra İslam liderliğinin kime ait olacağı konusundaki tarihsel anlaşmazlığı", "Farklı oruç pratiklerini", "Kur'an'ın farklı yorumlarını"],
        correctIndex: 1,
        explanation: "Sünni-Şii ayrılığı, Hz. Muhammed'in 632'deki ölümünden sonra İslam toplumunun kim tarafından yönetileceği sorusuna dayanır. Sünniler Hz. Ebubekir'in halife olarak seçilmesini meşru kabul ederken Şiiler liderliğin Hz. Ali ve soyuna ait olduğunu savunur."
      },
      {
        id: "r183",
        difficulty: "hard",
        question: "Hinduizm'de 'Advaita Vedanta' ekolünün temel savı nedir?",
        options: ["İki temel ilke olan Brahman ve Atman'ın birbirinden ayrı olduğu", "Bireysel ruhun (Atman) ile evrensel bilinç (Brahman) arasında hiçbir fark olmadığı", "Çok tanrılı sistemin en üstün ibadet biçimi olduğu", "Nirvana ve Moksha'nın özdeş kavramlar olduğu"],
        correctIndex: 1,
        explanation: "Adi Shankaracharya (8. yy.) tarafından sistemleştirilen Advaita Vedanta (ikiliksizlik), bireysel ruhun (Atman) ile mutlak gerçekliğin (Brahman) özünde aynı olduğunu savunur. Dünya çokluğu bir yanılsama (maya) olarak görülür; kurtuluş (moksha) bu özdeşliğin bilgeliğiyle gerçekleşir."
      },
      {
        id: "r184",
        difficulty: "medium",
        question: "Yahudiliğin temel hukuk ve yorum derlemesi olan Talmud kaç katmandan oluşur?",
        options: ["2 (Mişna ve Gemara)", "3 (Torah, Nevi'im, Ketuvim)", "5 (beş kitap)", "10 (on emir)"],
        correctIndex: 0,
        explanation: "Talmud, sözlü Yahudi geleneğini yazıya döken 'Mişna' (MS 2. yy.) ile Mişna'ya yapılan yorumları içeren 'Gemara'dan oluşan iki katmanlı bir yapıya sahiptir. Babilonya Talmudu (MS 500) ve Filistin Talmudu olmak üzere iki versiyonu vardır."
      },
      {
        id: "r185",
        difficulty: "easy",
        question: "Sikhizmin kutsal kitabı hangisidir?",
        options: ["Guru Granth Sahib", "Vedalar", "Avesta", "Tripitaka"],
        correctIndex: 0,
        explanation: "Guru Granth Sahib, Sikhizm'in kutsal kitabıdır ve onuncu Guru Gobind Singh tarafından ebedi guru ilan edilmiştir. İlk beş Sikh Guru'sunun yanı sıra Hindu ve İslam azizlerinden de ilahiler içerir."
      },
      {
        id: "r186",
        difficulty: "hard",
        question: "Zerdüştlüğün teolojisindeki temel ikilik neyi karşı karşıya getirir?",
        options: ["Yaşam ve ölüm", "İyilik tanrısı Ahura Mazda ile kötülük ruhu Angra Mainyu", "Ruh ile beden", "Kadın ve erkek"],
        correctIndex: 1,
        explanation: "Zerdüştlük (Zoroastrianizm), MÖ 6. yüzyılda İran'da Zerdüşt tarafından kurulmuştur. Bu inanç sisteminin merkezinde iyi güç Ahura Mazda ile kötü güç Angra Mainyu arasındaki kozmik mücadele yer alır."
      },
      {
        id: "r187",
        difficulty: "hard",
        question: "Sufizm'de 'Fena' ne anlama gelir?",
        options: ["Tanrı'ya karşı duyulan korku hissi", "Bireysel benliğin Tanrı'da erimesi ya da yok olması", "Dünyevi nimetlere karşı reddiye", "Günahlardan arınma ritüeli"],
        correctIndex: 1,
        explanation: "Fena (Arapça: فناء, yok oluş), Sufi geleneğinde bireysel benliğin Tanrı'ya olan aşkla eriyerek yok olması ve ilahi varlıkla birleşmesi sürecini tanımlar. Hallac-ı Mansur, Rumi ve İbn Arabi bu anlayışın en önemli temsilcileri arasında yer alır."
      },
      {
        id: "r188",
        difficulty: "medium",
        question: "İslam ilahiyatında Mutezile ekolünün temel özelliği nedir?",
        options: ["Sufi mistisizmine odaklanması", "Aklı ve felsefeyi İslami inanca entegre etmesi, ilahi adaleti savunması", "Sünni geleneği kesinlikle reddeden yaklaşımı", "Yalnızca hadis rivayetine dayanması"],
        correctIndex: 1,
        explanation: "Mutezile, 8.-9. yüzyıllarda gelişen İslam kelam ekolüdür. Tanrı'nın adaletini (adl) ve birliğini (tevhid) akılcı argümanlarla savunan Mutezile, Kur'an'ın yaratılmış olduğunu ve insanın özgür iradeye sahip olduğunu öne sürmüştür."
      },
      {
        id: "r189",
        difficulty: "easy",
        question: "Hristiyan inanışına göre Hz. İsa'nın doğumunu kutlayan bayram hangisidir?",
        options: ["Noel (Christmas)", "Paskalya (Easter)", "Pentikost (Pentecost)", "Epifani (Epiphany)"],
        correctIndex: 0,
        explanation: "Noel, 25 Aralık'ta İsa Mesih'in doğumunu kutlayan Hristiyan bayramıdır. Bazı Hristiyan toplulukları (Ortodoks kiliseler gibi) ise doğumu 7 Ocak'ta kutlar."
      },
      {
        id: "r190",
        difficulty: "medium",
        question: "Hangi dini öğretide karma ve yeniden doğum (reenkarnasyon) kavramları merkezi bir yer tutar?",
        options: ["Hristiyanlık", "İslam", "Yahudilik", "Hinduizm"],
        correctIndex: 3,
        explanation: "Hinduizm'de karma, kişinin eylemlerinin gelecek yaşamları üzerindeki etkisini tanımlar; reenkarnasyon ise ruhun ölümün ardından yeni bir bedende tekrar doğmasını ifade eder. Bu iki kavram Hindu kozmolojisinin temelini oluşturur."
      }
    ]
  },
  {
    id: "history",
    name: "Tarih",
    icon: "archive",
    color: "#a855f7",
    gradient: ["#a855f7", "#7c3aed"],
    image: require("../assets/images/category_history.png"),
    questions: [
      {
        id: "hist1",
        difficulty: "easy",
        question: "Türkiye Büyük Millet Meclisi hangi yılda kurulmuştur?",
        options: ["1918", "1919", "1920", "1921"],
        correctIndex: 2,
        explanation: "TBMM, 23 Nisan 1920'de Ankara'da kurulmuştur. Bu tarih, Kurtuluş Savaşı'nın örgütlenmesinde kritik bir adım olup her yıl Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanmaktadır."
      },
      {
        id: "hist2",
        difficulty: "easy",
        question: "Kurtuluş Savaşı'nı resmen sona erdiren antlaşma hangisidir?",
        options: ["Mondros Mütarekesi", "Sevr Antlaşması", "Mudanya Mütarekesi", "Lozan Antlaşması"],
        correctIndex: 3,
        explanation: "24 Temmuz 1923'te imzalanan Lozan Antlaşması, Türk Kurtuluş Savaşı'nı sona erdirmiş ve Türkiye'nin uluslararası alanda tanınmasını sağlamıştır."
      },
      {
        id: "hist3",
        difficulty: "easy",
        question: "I. Dünya Savaşı'nı fiilen başlatan olay nedir?",
        options: ["Osmanlı'nın savaşa girmesi", "Almanya'nın Belçika'yı işgali", "Arşidük Franz Ferdinand suikastı", "Rusya'nın seferberlik ilan etmesi"],
        correctIndex: 2,
        explanation: "Avusturya-Macaristan Veliahtı Arşidük Franz Ferdinand, 28 Haziran 1914'te Saraybosna'da Sırp milliyetçi Gavrilo Princip tarafından öldürüldü. Bu olay, I. Dünya Savaşı'nı tetikleyen sürecin başlangıcıdır."
      },
      {
        id: "hist4",
        difficulty: "easy",
        question: "Mısır'ı 1517'de fetheden Osmanlı padişahı kimdir?",
        options: ["Fatih Sultan Mehmet", "Kanuni Sultan Süleyman", "Yavuz Sultan Selim", "II. Bayezid"],
        correctIndex: 2,
        explanation: "Yavuz Sultan Selim, 1517'de Ridaniye Savaşı'nda Memluk Sultanlığı'nı yenerek Mısır'ı Osmanlı topraklarına kattı. Bu zaferle birlikte Halifelik de Osmanlılara geçti."
      },
      {
        id: "hist5",
        difficulty: "easy",
        question: "Latin alfabesi Türkiye'de hangi yılda kabul edilmiştir?",
        options: ["1924", "1926", "1928", "1932"],
        correctIndex: 2,
        explanation: "Atatürk önderliğinde 1928'de kabul edilen harf reformuyla Arap kökenli Osmanlı alfabesinden Latin kökenli Türk alfabesine geçildi. Bu, okuryazarlık oranını dramatik biçimde artırdı."
      },
      {
        id: "hist6",
        difficulty: "easy",
        question: "İpek Yolu'nun Doğu'daki başlangıç noktası olarak kabul edilen antik şehir hangisidir?",
        options: ["Pekin", "Şian (Chang'an)", "Semerkant", "Nanjing"],
        correctIndex: 1,
        explanation: "Şian (eski adıyla Chang'an), Çin'in tarihî başkenti ve İpek Yolu'nun doğu uç noktasıdır. İpek başta olmak üzere birçok mal bu şehirden hareket ederek Avrupa'ya ulaştırıldı."
      },
      {
        id: "hist7",
        difficulty: "easy",
        question: "II. Dünya Savaşı'nda toplam en fazla kaybın hangi cephede verildiği kabul edilir?",
        options: ["Pasifik Cephesi", "Kuzey Afrika Cephesi", "Doğu Cephesi (Almanya-SSCB)", "Normandiya Cephesi"],
        correctIndex: 2,
        explanation: "Almanya ile Sovyetler Birliği arasındaki Doğu Cephesi, tarihin en kanlı savaş cephesidir. Yaklaşık 30 milyon kişinin hayatını kaybettiği tahmin edilmekte olup tüm II. Dünya Savaşı kayıplarının yarısından fazlasını oluşturmaktadır."
      },
      {
        id: "hist8",
        difficulty: "easy",
        question: "Tanzimat Fermanı hangi Osmanlı padişahı döneminde ilan edilmiştir?",
        options: ["II. Mahmut", "Abdülmecid I", "Abdülaziz", "II. Abdülhamid"],
        correctIndex: 1,
        explanation: "Tanzimat Fermanı, 3 Kasım 1839'da Abdülmecid I döneminde ilan edildi. Bu ferman, Osmanlı'da modern anlamda hukuk devleti anlayışının temellerini attı."
      },
      {
        id: "hist9",
        difficulty: "easy",
        question: "Fransız Devrimi hangi yılda başlamıştır?",
        options: ["1765", "1776", "1789", "1804"],
        correctIndex: 2,
        explanation: "Fransız Devrimi, 1789'da Bastille Hapishanesi'nin basılmasıyla başladı. Özgürlük, eşitlik ve kardeşlik idealleri üzerine kurulu bu devrim, modern demokrasileri derinden etkiledi."
      },
      {
        id: "hist10",
        difficulty: "easy",
        question: "Hangi antik uygarlık dünyada ilk yazılı hukuk sistemini oluşturmuştur?",
        options: ["Eski Mısır", "Hitit", "Akad", "Sümer"],
        correctIndex: 3,
        explanation: "MÖ 2100 civarında Ur-Nammu tarafından derlenen Sümer Kanunları, bilinen en eski yazılı hukuk metinleridir. Daha çok bilinen Hammurabi Kanunları ise yaklaşık 300 yıl sonra yazılmıştır."
      },
      {
        id: "hist11",
        difficulty: "easy",
        question: "Magna Carta hangi yılda imzalanmıştır?",
        options: ["1066", "1215", "1348", "1453"],
        correctIndex: 1,
        explanation: "Magna Carta, 1215 yılında İngiltere Kralı John tarafından imzalanmıştır. Bu belge, kral otoritesini sınırlayan ve modern anayasacılığın temellerini atan tarihi bir belgedir."
      },
      {
        id: "hist12",
        difficulty: "easy",
        question: "Kolomb hangi kıtayı keşfetmiştir?",
        options: ["Afrika", "Asya", "Amerika", "Avustralya"],
        correctIndex: 2,
        explanation: "Kristof Kolomb, 1492 yılında Avrupa adına Amerika kıtasına ulaşmıştır. Ancak kıtaya ilk gelen Avrupalılar Vikings'ler olup Kolomb keşfini Hindistan zannetmiştir."
      },
      {
        id: "hist13",
        difficulty: "easy",
        question: "Süveyş Kanalı hangi yılda açılmıştır?",
        options: ["1847", "1869", "1898", "1914"],
        correctIndex: 1,
        explanation: "Süveyş Kanalı, Akdeniz ile Kızıldeniz'i birleştirmek amacıyla 1869 yılında açılmıştır. Bu kanal, Avrupa ile Asya arasındaki deniz yolunu önemli ölçüde kısaltmıştır."
      },
      {
        id: "hist14",
        difficulty: "easy",
        question: "Rus Devrimi hangi yılda gerçekleşmiştir?",
        options: ["1905", "1917", "1921", "1924"],
        correctIndex: 1,
        explanation: "Rus Devrimi 1917 yılında iki aşamada gerçekleşmiştir: Şubat Devrimi çarı tahttan indirmiş, Ekim Devrimi ise Bolşevikler önderliğinde Sovyet iktidarını kurmuştur."
      },
      {
        id: "hist15",
        difficulty: "easy",
        question: "Anadolu'daki ilk büyük Türk devleti hangisidir?",
        options: ["Osmanlı İmparatorluğu", "Selçuklu İmparatorluğu", "Karamanoğulları", "Danişmendliler"],
        correctIndex: 1,
        explanation: "Büyük Selçuklu İmparatorluğu'nun bir kolu olan Anadolu Selçukluları, 1077'den itibaren Anadolu'da hüküm sürmüştür. 1071'deki Malazgirt Savaşı ile Anadolu kapıları Türklere açılmıştır."
      },
      {
        id: "hist16",
        difficulty: "easy",
        question: "Berlin Duvarı hangi yılda yıkılmıştır?",
        options: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        explanation: "Berlin Duvarı, 9 Kasım 1989'da Doğu Almanya hükümetinin sınırları serbest bırakmasıyla yıkılmaya başlanmıştır. Bu olay, Soğuk Savaş'ın ve Demir Perde döneminin sembolik sonu sayılır."
      },
      {
        id: "hist17",
        difficulty: "easy",
        question: "Hangi uygarlık ilk yazıyı icat etmiştir?",
        options: ["Mısırlılar", "Babilliler", "Sümerler", "Persler"],
        correctIndex: 2,
        explanation: "Yazı, yaklaşık MÖ 3500-3100 yılları arasında Mezopotamya'daki Sümerler tarafından icat edilmiştir. Çivi yazısı adı verilen bu sistem, kil tabletlere çiziklerle yazılırdı."
      },
      {
        id: "hist18",
        difficulty: "easy",
        question: "Birinci Dünya Savaşı'nın fitilini ateşleyen olay nedir?",
        options: ["Almanya'nın Belçika'yı işgali", "Archduke Franz Ferdinand'ın suikastı", "Rusya'nın seferberlik ilan etmesi", "Osmanlı'nın Almanya yanında savaşa girmesi"],
        correctIndex: 1,
        explanation: "Avusturya-Macaristan Veliahtı Arşidük Franz Ferdinand, 28 Haziran 1914'te Saraybosna'da suikaste kurban gitmiştir. Bu olay, savaşın tetikleyicisi olmuştur."
      },
      {
        id: "hist19",
        difficulty: "easy",
        question: "Sanayi Devrimi önce hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "İngiltere", "Amerika Birleşik Devletleri"],
        correctIndex: 2,
        explanation: "Sanayi Devrimi, 18. yüzyılın ortasında İngiltere'de başlamıştır. Buhar makinesinin geliştirilmesi ve fabrikalarda seri üretimin başlaması, ekonomik ve toplumsal dönüşüme yol açmıştır."
      },
      {
        id: "hist20",
        difficulty: "easy",
        question: "Napolyon Bonapart hangi ülkede sürgüne gönderilmiştir?",
        options: ["Elba Adası", "Malta", "Korsika", "Azor Adaları"],
        correctIndex: 0,
        explanation: "Napolyon, ilk yenilgisinin ardından 1814'te İtalya kıyılarındaki Elba Adası'na sürgün edilmiştir. 1815'teki Waterloo Savaşı'ndan sonra ise güney Atlantik'teki Aziz Helena Adası'na sürgüne gönderilmiştir."
      },
      {
        id: "hist21",
        difficulty: "easy",
        question: "Hangi antlaşmayla Birinci Dünya Savaşı resmen sona ermiştir?",
        options: ["Sevr Antlaşması", "Lozan Antlaşması", "Versay Antlaşması", "Saint-Germain Antlaşması"],
        correctIndex: 2,
        explanation: "Versay Antlaşması, 28 Haziran 1919'da imzalanmış ve Almanya'nın koşulları kabul etmesiyle I. Dünya Savaşı resmen sona ermiştir. Antlaşmanın ağır koşulları, II. Dünya Savaşı'nın tohumlarını atmıştır."
      },
      {
        id: "hist22",
        difficulty: "easy",
        question: "Türkiye Büyük Millet Meclisi hangi yılda kurulmuştur?",
        options: ["1919", "1920", "1921", "1922"],
        correctIndex: 1,
        explanation: "Türkiye Büyük Millet Meclisi, 23 Nisan 1920'de Ankara'da açılmıştır. 23 Nisan bu nedenle Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanmaktadır."
      },
      {
        id: "hist23",
        difficulty: "easy",
        question: "Antik Yunan'da demokrasi hangi şehir devletinde ortaya çıkmıştır?",
        options: ["Sparta", "Korint", "Atina", "Teb"],
        correctIndex: 2,
        explanation: "Demokrasi, MÖ 5. yüzyılda Atina'da doğmuştur. Kleisthenes'in reformlarıyla başlayan süreç, Perikles döneminde doruğa ulaşmıştır. Ancak bu demokrasi yalnızca erkek vatandaşları kapsamaktaydı."
      },
      {
        id: "hist24",
        difficulty: "easy",
        question: "Romalı Julius Caesar hangi yılda öldürülmüştür?",
        options: ["MÖ 63", "MÖ 44", "MÖ 27", "MÖ 14"],
        correctIndex: 1,
        explanation: "Julius Caesar, MÖ 44 yılının Mart ayında 'İdes of March' (15 Mart) tarihinde Roma Senatosu'nda Brutus ve diğer senatörler tarafından suikaste kurban gitmiştir."
      },
      {
        id: "hist25",
        difficulty: "easy",
        question: "Hangi dönem 'Karanlık Çağlar' olarak bilinir?",
        options: ["Antik Çağ", "Orta Çağ'ın başları", "Rönesans dönemi", "Sanayi Devrimi öncesi"],
        correctIndex: 1,
        explanation: "Orta Çağ'ın ilk evreleri (MS 500-1000), Roma İmparatorluğu'nun çöküşünün ardından Avrupa'da kültürel, ekonomik ve entelektüel gerileme yaşandığından 'Karanlık Çağlar' olarak adlandırılır."
      },
      {
        id: "hist26",
        difficulty: "easy",
        question: "Moğol İmparatorluğu'nun kurucusu kimdir?",
        options: ["Kubilay Han", "Ögedey Han", "Cengiz Han", "Timur Lenk"],
        correctIndex: 2,
        explanation: "Cengiz Han (Temüçin), 1206 yılında Moğol kabilelerini birleştirerek Moğol İmparatorluğu'nu kurmuştur. Bu imparatorluk, tarihte en geniş kara imparatorluğu olma özelliğini taşır."
      },
      {
        id: "hist27",
        difficulty: "easy",
        question: "Hiroşima'ya atom bombası hangi yılda atılmıştır?",
        options: ["1943", "1944", "1945", "1946"],
        correctIndex: 2,
        explanation: "ABD, 6 Ağustos 1945'te Japonya'nın Hiroşima şehrine, 9 Ağustos'ta ise Nagazaki'ye atom bombası atmıştır. Bu saldırılar, Japonya'nın teslim olmasını ve II. Dünya Savaşı'nın sona ermesini hızlandırmıştır."
      },
      {
        id: "hist28",
        difficulty: "easy",
        question: "Atatürk'ün harf devrimi hangi yılda gerçekleşmiştir?",
        options: ["1924", "1926", "1928", "1932"],
        correctIndex: 2,
        explanation: "Türk Harf Devrimi, 1 Kasım 1928'de gerçekleşmiş; Arap alfabesi yerine Latin harfleri kabul edilmiştir. Bu değişiklik, okuma-yazma oranını ve modernleşmeyi önemli ölçüde hızlandırmıştır."
      },
      {
        id: "hist29",
        difficulty: "easy",
        question: "Haçlı Seferleri'nin temel amacı neydi?",
        options: ["Ticaret yollarını ele geçirmek", "Kudüs'ü Müslümanlardan geri almak", "Bizans İmparatorluğu'nu kurtarmak", "Yeni ülkeler keşfetmek"],
        correctIndex: 1,
        explanation: "Haçlı Seferleri (1096-1291), Hristiyanların Müslümanların kontrolündeki Kutsal Toprakları (özellikle Kudüs'ü) geri almak amacıyla düzenledikleri askeri seferlerdir. Papa II. Urban tarafından başlatılmıştır."
      },
      {
        id: "hist30",
        difficulty: "easy",
        question: "Avrupa Birliği'nin temeli sayılan Roma Antlaşması hangi yılda imzalanmıştır?",
        options: ["1945", "1951", "1957", "1963"],
        correctIndex: 2,
        explanation: "Roma Antlaşması, 25 Mart 1957'de Belçika, Fransa, İtalya, Lüksemburg, Hollanda ve Batı Almanya tarafından imzalanmıştır. Bu antlaşma, Avrupa Ekonomik Topluluğu'nu kurarak AB'nin temelini atmıştır."
      },
      {
        id: "hist31",
        difficulty: "easy",
        question: "Lozan Antlaşması hangi yılda imzalanmıştır?",
        options: ["1920", "1921", "1923", "1924"],
        correctIndex: 2,
        explanation: "Lozan Antlaşması, 24 Temmuz 1923'te İsviçre'nin Lozan şehrinde imzalanmıştır. Bu antlaşma, Türkiye Cumhuriyeti'nin uluslararası alanda tanınmasını sağlamıştır."
      },
      {
        id: "hist32",
        difficulty: "easy",
        question: "Osmanlı İmparatorluğu hangi yılda kurulmuştur?",
        options: ["1071", "1204", "1299", "1453"],
        correctIndex: 2,
        explanation: "Osmanlı İmparatorluğu, 1299 yılında Osman Bey tarafından kurulan küçük bir Anadolu beyliği olarak başlamıştır. Zamanla Üç Kıtaya yayılan bu imparatorluk yaklaşık 600 yıl hüküm sürmüştür."
      },
      {
        id: "hist33",
        difficulty: "easy",
        question: "İstanbul'u Osmanlı'ya katan padişah kimdir ve fetih hangi yılda gerçekleşti?",
        options: ["Yavuz Sultan Selim – 1517", "Kanuni Sultan Süleyman – 1521", "Fatih Sultan Mehmet – 1453", "II. Bayezid – 1481"],
        correctIndex: 2,
        explanation: "II. Mehmet (Fatih Sultan Mehmet), 29 Mayıs 1453'te İstanbul'u fethederek Bizans İmparatorluğu'na son vermiştir. Bu olay, Orta Çağ'ın sona erip Yeni Çağ'ın başladığının simgesi sayılır."
      },
      {
        id: "hist34",
        difficulty: "easy",
        question: "Büyük İskender hangi imparatorluğun hükümdarıydı?",
        options: ["Roma İmparatorluğu", "Pers İmparatorluğu", "Makedonya Krallığı", "Kartaca"],
        correctIndex: 2,
        explanation: "Büyük İskender (MÖ 356–323), Makedonya Krallığı'nın hükümdarıydı. MÖ 336'da babasının yerine geçerek Yunanistan'dan Hindistan'a uzanan devasa bir imparatorluk kurdu; hâlâ tarihin en büyük askeri dehası sayılır."
      },
      {
        id: "hist35",
        difficulty: "easy",
        question: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
        options: ["23 Nisan 1920", "30 Ağustos 1922", "29 Ekim 1923", "3 Mart 1924"],
        correctIndex: 2,
        explanation: "Türkiye Cumhuriyeti, 29 Ekim 1923'te Mustafa Kemal Atatürk önderliğinde ilan edilmiş; Atatürk cumhurbaşkanlığına seçilmiştir. Bu tarih her yıl Cumhuriyet Bayramı olarak kutlanmaktadır."
      },
      {
        id: "hist36",
        difficulty: "easy",
        question: "Amerika Birleşik Devletleri'nin Bağımsızlık Bildirisi hangi yılda ilan edilmiştir?",
        options: ["1763", "1776", "1789", "1812"],
        correctIndex: 1,
        explanation: "Amerika Bağımsızlık Bildirisi, 4 Temmuz 1776'da İngiliz kolonilerinin Büyük Britanya'dan bağımsızlıklarını ilan etmesiyle yayımlanmıştır. Thomas Jefferson tarafından kaleme alınan belge, modern demokrasinin mihenk taşlarından sayılır."
      },
      {
        id: "hist37",
        difficulty: "easy",
        question: "Osmanlı İmparatorluğu'nun tahttan indirilen son padişahı kimdir?",
        options: ["Sultan Reşad (V. Mehmet)", "Sultan Vahdettin (VI. Mehmet)", "Abdülhamid II", "Abdülmecid II"],
        correctIndex: 1,
        explanation: "VI. Mehmet Vahdettin, Osmanlı'nın son padişahıdır. Kurtuluş Savaşı dönemindeki tutumları nedeniyle TBMM tarafından tahttan indirilmiş ve 1922'de ülkeyi terk etmiştir."
      },
      {
        id: "hist38",
        difficulty: "medium",
        question: "Rönesans hareketi hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "İtalya", "İspanya"],
        correctIndex: 2,
        explanation: "Rönesans (yeniden doğuş), 14. yüzyılda İtalya'nın Floransa, Venedik ve Roma şehirlerinde başlamıştır. Antik Yunan ve Roma kültürüne dönüş, sanat, bilim ve edebiyatta devrimsel bir atılımı temsil etmektedir."
      },
      {
        id: "hist39",
        difficulty: "medium",
        question: "Amerikan İç Savaşı (1861–1865) hangi temel meseleden dolayı çıktı?",
        options: ["Batı topraklarının paylaşımı", "Kölelik ve güney eyaletlerinin ayrılık isteği", "Ticaret vergileri", "Dinî özgürlük"],
        correctIndex: 1,
        explanation: "Amerikan İç Savaşı, güney eyaletlerinin köleliği korumak ve birlikten ayrılmak istemesi üzerine çıktı. Kuzey (Union) ile Güney (Confederacy) arasındaki savaş, 1865'te Union'ın zaferiyle sona erdi ve kölelik kaldırıldı."
      },
      {
        id: "hist40",
        difficulty: "medium",
        question: "Fransız Devrimi'nin ünlü sloganı nedir?",
        options: ["Tanrı, Kral, Vatan", "Özgürlük, Eşitlik, Kardeşlik", "Halk, Toprak, Ekmek", "Barış, Adalet, İlerleme"],
        correctIndex: 1,
        explanation: "Fransız Devrimi'nin sloganı 'Liberté, Égalité, Fraternité' (Özgürlük, Eşitlik, Kardeşlik) olmuştur. Bu ilkeler modern cumhuriyetçiliğin ve demokratik değerlerin sembolü hâline gelmiştir."
      },
      {
        id: "hist41",
        difficulty: "medium",
        question: "Hindistan bağımsızlığını hangi yılda kazanmıştır?",
        options: ["1945", "1947", "1950", "1952"],
        correctIndex: 1,
        explanation: "Hindistan, 15 Ağustos 1947'de Büyük Britanya'dan bağımsızlığını kazanmıştır. Mahatma Gandhi önderliğinde yürütülen şiddetsiz bağımsızlık mücadelesi, dünyaya ilham veren bir direniş örneği olmuştur."
      },
      {
        id: "hist42",
        difficulty: "medium",
        question: "Bizans İmparatorluğu'nun başkenti neresidir?",
        options: ["Atina", "Roma", "İskenderiye", "Konstantinopolis (İstanbul)"],
        correctIndex: 3,
        explanation: "Bizans İmparatorluğu'nun (Doğu Roma) başkenti, MS 330'da kurulan Konstantinopolis'tir (bugünkü İstanbul). İmparatorluk, 1453'te Osmanlıların şehri fethine kadar bu şehri merkez olarak kullanmıştır."
      },
      {
        id: "hist43",
        difficulty: "medium",
        question: "Vasco da Gama hangi deniz yolunu keşfetmiştir?",
        options: ["Amerika kıyıları", "Hindistan'a Afrika üzerinden deniz yolu", "Pasifik Okyanusu", "Arktik deniz rotası"],
        correctIndex: 1,
        explanation: "Portekizli denizci Vasco da Gama, 1497-1499 yılları arasında Afrika'yı dolaşarak Hindistan'a deniz yoluyla ulaşmayı başarmıştır. Bu keşif, Portekiz'e Asya ticaretinde büyük bir üstünlük sağlamış ve Osmanlı'nın İpek Yolu üzerindeki kontrolünü zayıflatmıştır."
      },
      {
        id: "hist44",
        difficulty: "medium",
        question: "Çernobil nükleer felaketi hangi yılda yaşanmıştır?",
        options: ["1979", "1982", "1986", "1991"],
        correctIndex: 2,
        explanation: "Çernobil nükleer felaketi, 26 Nisan 1986'da Sovyetler Birliği'nin (bugünkü Ukrayna) Çernobil nükleer santralin 4 numaralı reaktörünün patlamasıyla yaşanmıştır. Tarihin en büyük nükleer kazası olarak kabul edilir."
      },
      {
        id: "hist45",
        difficulty: "medium",
        question: "Osmanlı'da Yeniçeri Ocağı'nı kaldıran padişah kimdir?",
        options: ["III. Selim", "II. Mahmut", "Abdülmecid I", "Abdülaziz"],
        correctIndex: 1,
        explanation: "II. Mahmut, 1826 yılında çıkardığı Hatt-ı Hümayun ile Yeniçeri Ocağı'nı kaldırdı. Bu olay 'Vaka-i Hayriye' (Hayırlı Olay) olarak bilinir. Yeniçeri Ocağı'nın yerine modern ordu anlayışıyla Asakir-i Mansure-i Muhammediye kuruldu."
      },
      {
        id: "hist46",
        difficulty: "medium",
        question: "Atatürk'ün soyadı kanunu hangi yılda çıkarıldı?",
        options: ["1928", "1930", "1932", "1934"],
        correctIndex: 3,
        explanation: "Soyadı Kanunu 21 Haziran 1934'te yürürlüğe girdi. Bu kanunla Türk vatandaşları soyadı almakla yükümlü oldu. Mustafa Kemal Atatürk, TBMM tarafından 'Atatürk' soyadıyla onurlandırıldı."
      },
      {
        id: "hist47",
        difficulty: "medium",
        question: "Birinci Dünya Savaşı'nda Osmanlı İmparatorluğu hangi tarafta yer aldı?",
        options: ["İtilaf Devletleri (İngiltere, Fransa, Rusya)", "İttifak Devletleri (Almanya, Avusturya-Macaristan)", "Tarafsız kaldı", "Her iki tarafla da anlaşma yaptı"],
        correctIndex: 1,
        explanation: "Osmanlı İmparatorluğu, 1914 yılında İttifak Devletleri (Almanya ve Avusturya-Macaristan) safında Birinci Dünya Savaşı'na girdi. Savaşın yenilgiyle bitmesi, imparatorluğun çöküşünü ve Anadolu'nun işgalini beraberinde getirdi."
      },
      {
        id: "hist48",
        difficulty: "medium",
        question: "Coğrafi Keşifler dönemi hangi yüzyılları kapsar?",
        options: ["11–13. yüzyıl", "13–15. yüzyıl", "15–17. yüzyıl", "17–19. yüzyıl"],
        correctIndex: 2,
        explanation: "Coğrafi Keşifler, 15. yüzyılın sonundan 17. yüzyıla uzanan dönemde Avrupalı denizcilerin yeni ticaret yolları ve kıtalar keşfettiği çağdır. Kolomb (1492), Vasco da Gama (1498) ve Magellan (1519) bu dönemin öncü isimleridir."
      },
      {
        id: "hist49",
        difficulty: "medium",
        question: "İkinci Dünya Savaşı hangi yılda sona ermiştir?",
        options: ["1943", "1944", "1945", "1946"],
        correctIndex: 2,
        explanation: "İkinci Dünya Savaşı, Almanya'nın 8 Mayıs 1945'te Avrupa'da, Japonya'nın ise Ağustos 1945'teki atom bombası saldırılarının ardından 2 Eylül 1945'te teslim olmasıyla sona erdi."
      },
      {
        id: "hist50",
        difficulty: "medium",
        question: "Atatürk hangi askeri okuldan mezun olmuştur?",
        options: ["İstanbul Üniversitesi", "Harp Akademisi (Harbiye)", "Galatasaray Lisesi", "Mülkiye Mektebi"],
        correctIndex: 1,
        explanation: "Mustafa Kemal, Manastır Askeri İdadisi'nden sonra İstanbul'daki Harp Okulu'nu (Harbiye) 1902'de ve Harp Akademisi'ni 1905'te kurmay yüzbaşı rütbesiyle tamamlamıştır."
      },
      {
        id: "hist51",
        difficulty: "medium",
        question: "Hangi Osmanlı padişahı 'Kanuni' lakabıyla anılmaktadır?",
        options: ["II. Bayezid", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "III. Murat"],
        correctIndex: 2,
        explanation: "Kanuni Sultan Süleyman (1520–1566), adaletli yönetimi ve kapsamlı hukuk reformları nedeniyle 'Kanuni' lakabını kazanmıştır. Batı'da ise 'Muhteşem Süleyman' (Suleiman the Magnificent) adıyla bilinir."
      },
      {
        id: "hist52",
        difficulty: "medium",
        question: "Amerika kıtasına Avrupa adına ilk ulaşan kaşif kimdir?",
        options: ["Amerigo Vespucci", "Ferdinand Magellan", "Vasco da Gama", "Kristof Kolomb"],
        correctIndex: 3,
        explanation: "Kristof Kolomb, İspanya adına yaptığı seyahatte 12 Ekim 1492'de Bahama Adaları'na ulaştı. Bu tarih Avrupa'nın Amerika kıtasıyla sürekli temasının başlangıcı sayılır; kıtaya adını veren ise Amerigo Vespucci'dir."
      },
      {
        id: "hist53",
        difficulty: "medium",
        question: "Fransız Devrimi hangi yılda başlamıştır?",
        options: ["1776", "1789", "1804", "1815"],
        correctIndex: 1,
        explanation: "Fransız Devrimi, 14 Temmuz 1789'da Bastille Hapishanesi'nin basılmasıyla simgesel olarak başladı. Özgürlük, eşitlik ve kardeşlik ilkelerini benimseyen bu devrim, Avrupa'nın siyasi tarihini köklü biçimde dönüştürdü."
      },
      {
        id: "hist54",
        difficulty: "medium",
        question: "Magna Carta hangi ülkede ve hangi yılda imzalanmıştır?",
        options: ["İspanya – 1215", "Fransa – 1305", "İngiltere – 1215", "Almanya – 1185"],
        correctIndex: 2,
        explanation: "Magna Carta (Büyük Özgürlük Fermanı), 1215'te İngiltere'de Kral John tarafından zorla imzalanan belgedir. Monarşinin keyfi yetkilerini kısıtlayan bu belge, modern anayasal demokrasinin öncüsü olarak kabul edilir."
      },
      {
        id: "hist55",
        difficulty: "medium",
        question: "İkinci Dünya Savaşı hangi yılda sona ermiştir?",
        options: ["1943", "1944", "1945", "1946"],
        correctIndex: 2,
        explanation: "İkinci Dünya Savaşı, Japonya'nın 2 Eylül 1945'te imzaladığı teslim belgesiyle resmen sona erdi. Avrupa'daki savaş ise 8 Mayıs 1945'te (Zafer Günü – V-E Day) bitmişti. Savaş toplam 70-85 milyon insanın hayatını kaybetmesine yol açtı."
      },
      {
        id: "hist56",
        difficulty: "medium",
        question: "İpek Yolu hangi iki bölgeyi birbirine bağlardı?",
        options: ["Hindistan ile Afrika", "Çin ile Akdeniz dünyası", "Avrupa ile Güney Amerika", "Arabistan ile Güneydoğu Asya"],
        correctIndex: 1,
        explanation: "MÖ 2. yüzyıldan MS 15. yüzyıla kadar kullanılan İpek Yolu, Çin'i Orta Asya ve Orta Doğu üzerinden Akdeniz dünyasına bağlayan ticaret yolları ağıydı. Yalnızca ipek değil; baharat, cam, kâğıt ve hastalıklar da bu yoldan taşındı."
      },
      {
        id: "hist57",
        difficulty: "medium",
        question: "Osmanlı Devleti hangi yılda kurulmuştur?",
        options: ["1071", "1299", "1453", "1517"],
        correctIndex: 1,
        explanation: "Osmanlı Devleti, 1299 yılında Osman Gazi tarafından Kuzey Batı Anadolu'da kurulmuştur. Küçük bir beylik olarak başlayan bu devlet, sonraki yüzyıllarda Avrupa, Asya ve Afrika'ya yayılan büyük bir imparatorluğa dönüştü."
      },
      {
        id: "hist58",
        difficulty: "medium",
        question: "'Rönesans' sözcüğü ne anlama gelir?",
        options: ["Yeni Başlangıç", "Yeniden Doğuş", "Devrim", "Aydınlanma"],
        correctIndex: 1,
        explanation: "Rönesans, Fransızca 'yeniden doğuş' anlamına gelir. 14–17. yüzyıllarda İtalya merkezli başlayan ve klasik Yunan-Roma kültürüne dönüşü esas alan bu hareket, sanat, bilim, felsefe ve edebiyatı derinden etkiledi."
      },
      {
        id: "hist59",
        difficulty: "medium",
        question: "Sanayi Devrimi hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "Amerika Birleşik Devletleri", "İngiltere"],
        correctIndex: 3,
        explanation: "Sanayi Devrimi, 18. yüzyılın ikinci yarısında İngiltere'de başlamıştır. Buhar makinesinin tekstil ve madencilik sektörlerine uyarlanması, fabrika sisteminin yaygınlaşması ve demiryollarının kurulması bu devrimin temel göstergeleridir."
      },
      {
        id: "hist60",
        difficulty: "medium",
        question: "'Yüzyıl Savaşları' hangi iki ülke arasında yaşanmıştır?",
        options: ["İngiltere ile İspanya", "Fransa ile İngiltere", "Fransa ile Almanya", "İngiltere ile Portekiz"],
        correctIndex: 1,
        explanation: "Yüzyıl Savaşları (1337–1453), Fransız tahtı üzerindeki hakimiyet anlaşmazlığından kaynaklanan İngiltere-Fransa çatışmalarıdır. Jeanne d'Arc'ın liderliğiyle Fransa üstün geldi; bu savaşlar modern ulus-devlet anlayışının şekillenmesine katkıda bulundu."
      },
      {
        id: "hist61",
        difficulty: "medium",
        question: "Büyük İskender hangi krallığın hükümdarıdır?",
        options: ["Yunanistan", "Makedonya", "Pers", "Roma"],
        correctIndex: 1,
        explanation: "Büyük İskender (MÖ 356–323), Makedonya Krallığı'nın hükümdarıdır. 20'li yaşlarında Makedonya'dan Mısır, Pers İmparatorluğu, Orta Asya ve Hindistan sınırlarına uzanan büyük bir imparatorluk kurmuş; gittiği her yerde Yunan kültürünü yaymıştır."
      },
      {
        id: "hist62",
        difficulty: "medium",
        question: "Osmanlı İmparatorluğu yaklaşık kaç yıl sürmüştür?",
        options: ["200 yıl", "400 yıl", "600 yıl", "800 yıl"],
        correctIndex: 2,
        explanation: "Osmanlı İmparatorluğu, 1299'da Osman Gazi'nin beyliğini ilan etmesiyle başlayıp 1922'de resmen sona erene kadar yaklaşık 623 yıl hüküm sürmüştür. En geniş döneminde Anadolu, Balkanlar, Ortadoğu ve Kuzey Afrika'ya yayılan imparatorluk, 36 padişah görmüştür."
      },
      {
        id: "hist63",
        difficulty: "medium",
        question: "Fransız Devrimi hangi yıl başlamıştır?",
        options: ["1776", "1789", "1804", "1815"],
        correctIndex: 1,
        explanation: "Fransız Devrimi, 1789'da Bastille Hapishanesi'nin basılmasıyla sembolik olarak başlamıştır. Kral XVI. Louis'nin yönetimine karşı patlak veren devrim, monarşiyi yıkmış, 'Özgürlük, Eşitlik, Kardeşlik' sloganıyla modern demokrasiye zemin hazırlamıştır."
      },
      {
        id: "hist64",
        difficulty: "medium",
        question: "I. Dünya Savaşı hangi yıl başlamıştır?",
        options: ["1908", "1911", "1914", "1917"],
        correctIndex: 2,
        explanation: "I. Dünya Savaşı, 28 Temmuz 1914'te Avusturya-Macaristan'ın Sırbistan'a savaş ilan etmesiyle başlamıştır. Tetikleyici olay, 28 Haziran 1914'te Arşidük Franz Ferdinand'ın Saraybosna'da suikaste kurban gitmesiydi. Savaş 11 Kasım 1918'de sona ermiştir."
      },
      {
        id: "hist65",
        difficulty: "medium",
        question: "II. Dünya Savaşı hangi yıl sona ermiştir?",
        options: ["1943", "1944", "1945", "1946"],
        correctIndex: 2,
        explanation: "II. Dünya Savaşı, Avrupa'da 8 Mayıs 1945'te (V-E Day) Almanya'nın teslim olmasıyla, Pasifik'te ise 2 Eylül 1945'te (V-J Day) Japonya'nın teslim olmasıyla sona ermiştir. Tarihte 70–85 milyon insanın hayatını kaybettiği en yıkıcı çatışmadır."
      },
      {
        id: "hist66",
        difficulty: "medium",
        question: "Türkiye Cumhuriyeti hangi yıl ilan edilmiştir?",
        options: ["1919", "1920", "1922", "1923"],
        correctIndex: 3,
        explanation: "Türkiye Cumhuriyeti, Mustafa Kemal Atatürk önderliğinde 29 Ekim 1923'te ilan edilmiştir. Kurtuluş Savaşı'nın ardından Ankara başkent seçilmiş; Atatürk cumhurbaşkanı, İsmet İnönü başbakan olmuştur."
      },
      {
        id: "hist67",
        difficulty: "medium",
        question: "İstanbul, Osmanlılar tarafından hangi yıl fethedilmiştir?",
        options: ["1389", "1402", "1453", "1517"],
        correctIndex: 2,
        explanation: "İstanbul (Konstantinopolis), Sultan II. Mehmed (Fatih Sultan Mehmed) önderliğindeki Osmanlı ordusu tarafından 29 Mayıs 1453'te fethedilmiştir. Bu olay, Bizans İmparatorluğu'nun sonunu getirmiş ve tarihsel olarak Orta Çağ'ın kapanışı kabul edilmektedir."
      },
      {
        id: "hist68",
        difficulty: "medium",
        question: "Magna Carta hangi yıl imzalanmıştır?",
        options: ["1066", "1215", "1320", "1414"],
        correctIndex: 1,
        explanation: "Magna Carta (Büyük Şart), 15 Haziran 1215'te İngiltere Kralı John tarafından baronların baskısıyla imzalanmıştır. Keyfi vergilendirmeyi ve tutuklamaları sınırlayan bu belge, hukuk devleti ve insan hakları anlayışının temel taşlarından sayılır."
      },
      {
        id: "hist69",
        difficulty: "medium",
        question: "Sanayi Devrimi hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "İngiltere", "Amerika Birleşik Devletleri"],
        correctIndex: 2,
        explanation: "Sanayi Devrimi, 18. yüzyılın ortasından 19. yüzyıla kadar İngiltere'de başlamış ve buradan dünyaya yayılmıştır. Buhar makinesinin yaygın kullanımı, fabrika sisteminin doğması ve demiryollarının gelişmesiyle tarım toplumundan sanayi toplumuna geçiş hızlanmıştır."
      },
      {
        id: "hist70",
        difficulty: "medium",
        question: "Soğuk Savaş hangi iki süper güç arasında yaşanmıştır?",
        options: ["İngiltere – Fransa", "ABD – Çin", "ABD – Sovyetler Birliği", "NATO – Varşova Paktı"],
        correctIndex: 2,
        explanation: "Soğuk Savaş (1947–1991), Amerika Birleşik Devletleri öncülüğündeki Batı Bloğu ile Sovyetler Birliği önderliğindeki Doğu Bloğu arasındaki siyasi, ekonomik ve ideolojik gerilim dönemdir. Doğrudan silahlı çatışma yaşanmamış, ancak vekâlet savaşları küresel istikrarsızlığa yol açmıştır."
      },
      {
        id: "hist71",
        difficulty: "medium",
        question: "İlk atom bombası hangi şehre atılmıştır?",
        options: ["Tokyo", "Nagasaki", "Osaka", "Hiroşima"],
        correctIndex: 3,
        explanation: "İlk atom bombası ('Little Boy'), 6 Ağustos 1945'te ABD uçağı Enola Gay tarafından Japonya'nın Hiroşima şehrine atılmıştır. Üç gün sonra Nagasaki'ye ikinci bomba atılmış; bu olaylar Japonya'nın teslimiyetini ve II. Dünya Savaşı'nın sona ermesini hızlandırmıştır."
      },
      {
        id: "hist72",
        difficulty: "medium",
        question: "Fransız Devrimi'nin üç temel sloganı nedir?",
        options: ["Barış, Eşitlik, Refah", "Tanrı, Kral, Vatan", "Özgürlük, Eşitlik, Kardeşlik", "Cumhuriyet, Demokrasi, Laiklik"],
        correctIndex: 2,
        explanation: "'Liberté, Égalité, Fraternité' (Özgürlük, Eşitlik, Kardeşlik), Fransız Devrimi'nin sembolik sloganıdır. Bugün Fransa Cumhuriyeti'nin resmi sloganı olmaya devam eden bu ifade, modern demokratik anlayışın temel değerlerini özetler."
      },
      {
        id: "hist73",
        difficulty: "medium",
        question: "Süveyş Kanalı hangi yıl açılmıştır?",
        options: ["1820", "1845", "1869", "1903"],
        correctIndex: 2,
        explanation: "Süveyş Kanalı, Mısır'da Akdeniz ile Kızıldeniz'i birleştiren yapay kanal olup 17 Kasım 1869'da açılmıştır. Fransız diplomat Ferdinand de Lesseps'in önderliğinde inşa edilen kanal, Avrupa ile Asya arasındaki deniz yolunu dramatik biçimde kısaltmıştır."
      },
      {
        id: "hist74",
        difficulty: "medium",
        question: "Piramitleri hangi uygarlık inşa etmiştir?",
        options: ["Sümerler", "Mayalar", "Aztekler", "Antik Mısırlılar"],
        correctIndex: 3,
        explanation: "Mısır Piramitleri, Antik Mısırlılar tarafından firavunlar için anıt mezar olarak inşa edilmiştir. Giza'daki Büyük Piramit (Keops Piramidi), MÖ yaklaşık 2560 yılında tamamlanmış ve yaklaşık 3.800 yıl boyunca dünyanın en yüksek yapısı olma özelliğini korumuştur."
      },
      {
        id: "hist75",
        difficulty: "hard",
        question: "Türkiye NATO'ya hangi yıl üye olmuştur?",
        options: ["1949", "1950", "1952", "1955"],
        correctIndex: 2,
        explanation: "Türkiye, NATO'nun (Kuzey Atlantik Antlaşması Örgütü) kuruluşundan üç yıl sonra, 18 Şubat 1952'de İtalya, Yunanistan ve diğer ülkelerle birlikte ittifaka katılmıştır. Türkiye'nin stratejik konumu, NATO'nun güney kanadını güçlendirmiştir."
      },
      {
        id: "hist76",
        difficulty: "hard",
        question: "Rusya'da Bolşevik Devrimi hangi yıl gerçekleşmiştir?",
        options: ["1905", "1914", "1917", "1920"],
        correctIndex: 2,
        explanation: "Bolşevik Devrimi (Ekim Devrimi), 7 Kasım 1917'de (Gregoryen takvimine göre) Vladimir Lenin önderliğindeki Bolşeviklerin iktidarı devirip Sovyet yönetimini kurmasıyla gerçekleşmiştir. Bu devrim, Sovyetler Birliği'nin kurulmasına (1922) giden yolun başlangıcıdır."
      },
      {
        id: "hist77",
        difficulty: "hard",
        question: "Hindistan'ı sömürgeleştiren Avrupalı güç hangisidir?",
        options: ["Fransa", "Portekiz", "Hollanda", "İngiltere"],
        correctIndex: 3,
        explanation: "Hindistan, Doğu Hindistan Şirketi aracılığıyla İngiliz etkisine girmiş; 1858'den itibaren doğrudan İngiliz Tacı yönetimine (British Raj) alınmıştır. Hindistan, 15 Ağustos 1947'de bağımsızlığını kazanarak İngiliz sömürgeciliğine son vermiştir."
      },
      {
        id: "hist78",
        difficulty: "hard",
        question: "I. Dünya Savaşı'nı resmen sona erdiren antlaşma hangisidir?",
        options: ["Lozan Antlaşması", "Versailles (Versay) Antlaşması", "Paris Antlaşması", "Brest-Litovsk Antlaşması"],
        correctIndex: 1,
        explanation: "Versailles Antlaşması, 28 Haziran 1919'da Paris yakınlarındaki Versailles Sarayı'nda imzalanarak I. Dünya Savaşı'nı resmen sona erdirmiştir. Almanya'ya ağır koşullar yükleyen antlaşma, savaş tazminatı ve toprak kayıplarını içermekte olup II. Dünya Savaşı'na giden süreçte etkili olmuştur."
      },
      {
        id: "hist79",
        difficulty: "hard",
        question: "Atatürk hangi yıl hayatını kaybetmiştir?",
        options: ["1934", "1936", "1938", "1941"],
        correctIndex: 2,
        explanation: "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanı olarak 10 Kasım 1938'de İstanbul Dolmabahçe Sarayı'nda hayatını kaybetmiştir. Vefatının yıl dönümü olan 10 Kasım'da Türkiye genelinde anma törenleri düzenlenmektedir."
      },
      {
        id: "hist80",
        difficulty: "hard",
        question: "Rönesans hareketi hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "İspanya", "İtalya"],
        correctIndex: 3,
        explanation: "Rönesans (Yeniden Doğuş), 14. yüzyılda İtalya'nın Floransa şehrinde başlamış; 15–16. yüzyıllarda Avrupa'ya yayılmıştır. Antik Yunan ve Roma kültürüne dönüşü simgeleyen bu dönem, sanat, bilim, felsefe ve edebiyatta devrimsel gelişmelere zemin hazırlamıştır."
      },
      {
        id: "hist81",
        difficulty: "hard",
        question: "Amerika Birleşik Devletleri hangi yıl bağımsızlığını ilan etmiştir?",
        options: ["1765", "1776", "1783", "1789"],
        correctIndex: 1,
        explanation: "ABD, 4 Temmuz 1776'da İngiltere'den bağımsızlığını ilan etmiştir. Bağımsızlık Bildirisi, Thomas Jefferson tarafından kaleme alınmış ve 13 koloni adına imzalanmıştır. Bu tarih her yıl 4 Temmuz'da kutlanmaktadır."
      },
      {
        id: "hist82",
        difficulty: "hard",
        question: "Atom bombası Japonya'nın hangi iki şehrine atılmıştır?",
        options: ["Tokyo ve Osaka", "Hiroşima ve Nagazaki", "Kyoto ve Kobe", "Nagoya ve Sapporo"],
        correctIndex: 1,
        explanation: "ABD, 6 Ağustos 1945'te Hiroşima'ya 'Little Boy', 9 Ağustos 1945'te ise Nagazaki'ye 'Fat Man' adlı atom bombalarını atmıştır. Bu saldırılar 200.000'i aşkın insanın hayatını kaybetmesine yol açmış; Japonya'nın teslim olmasını ve İkinci Dünya Savaşı'nın sona ermesini hızlandırmıştır."
      },
      {
        id: "hist83",
        difficulty: "hard",
        question: "Türkiye Cumhuriyeti hangi yılda kurulmuştur?",
        options: ["1919", "1920", "1923", "1928"],
        correctIndex: 2,
        explanation: "Türkiye Cumhuriyeti, Mustafa Kemal Atatürk önderliğinde 29 Ekim 1923'te ilan edilmiştir. Lozan Antlaşması (24 Temmuz 1923) ile uluslararası alanda tanınan yeni devletin ilk cumhurbaşkanı Mustafa Kemal Atatürk olmuştur."
      },
      {
        id: "hist84",
        difficulty: "hard",
        question: "Kristof Kolomb Amerika kıtasına hangi yılda ulaşmıştır?",
        options: ["1488", "1492", "1498", "1502"],
        correctIndex: 1,
        explanation: "Kristof Kolomb, İspanya Kraliyet desteğiyle çıktığı deniz seferinde 12 Ekim 1492'de Karayipler'deki Bahama adalarına ulaşmış ve bu noktayı yanlışlıkla Asya olarak tanımlamıştır. Bu keşif, Avrupa ile Amerika arasındaki kalıcı temasın başlangıcını oluşturmuştur."
      },
      {
        id: "hist85",
        difficulty: "hard",
        question: "Fransız Devrimi'nin temel sloganı neydi?",
        options: ["Tanrı, Kral, Vatan", "Özgürlük, Eşitlik, Kardeşlik", "İş, Aile, Vatan", "Barış, Ekmek, Toprak"],
        correctIndex: 1,
        explanation: "'Liberté, Égalité, Fraternité' (Özgürlük, Eşitlik, Kardeşlik) Fransız Devrimi'nin ve Fransız Cumhuriyeti'nin temel sloganıdır. 1789'da başlayan devrim bu üç ilkeyi tüm dünyaya yaymış; modern demokrasilerin doğmasını ve gelişmesini derinden etkilemiştir."
      },
      {
        id: "hist86",
        difficulty: "hard",
        question: "Osmanlı Devleti'nin kuruluşu hangi yıla tarihlenmektedir?",
        options: ["1071", "1176", "1299", "1453"],
        correctIndex: 2,
        explanation: "Osmanlı Devleti'nin kuruluşu geleneksel olarak 1299 yılına ve Osman Bey'in Anadolu'da bağımsız beyliğini ilan ettiği tarihe bağlanır. Altı yüz yılı aşan tarihi boyunca üç kıtaya yayılan Osmanlı İmparatorluğu, 1922 yılında sona ermiştir."
      },
      {
        id: "hist87",
        difficulty: "hard",
        question: "Sovyetler Birliği hangi yılda dağılmıştır?",
        options: ["1985", "1989", "1991", "1995"],
        correctIndex: 2,
        explanation: "Sovyetler Birliği (SSCB), 25 Aralık 1991'de resmen sona ermiştir. Mikhail Gorbaçov'un glasnost (açıklık) ve perestroika (yeniden yapılanma) reformları, Berlin Duvarı'nın yıkılması (1989) ve birlik cumhuriyetlerinin bağımsızlık ilanları bu çöküşü beraberinde getirmiştir."
      },
      {
        id: "hist88",
        difficulty: "hard",
        question: "Hangi antlaşma Birinci Dünya Savaşı'nı resmen sona erdirmiştir?",
        options: ["Lozan Antlaşması", "Versay Antlaşması", "Paris Antlaşması", "Berlin Antlaşması"],
        correctIndex: 1,
        explanation: "28 Haziran 1919'da imzalanan Versay (Versailles) Antlaşması, Almanya ile İtilaf Devletleri arasında Birinci Dünya Savaşı'nı resmen sona erdirmiştir. Almanya'ya ağır tazminat yükleri ve toprak kayıpları getiren bu antlaşmanın yarattığı hoşnutsuzluk, İkinci Dünya Savaşı'nın fitilini ateşleyen etkenlerden biri olarak değerlendirilmektedir."
      },
      {
        id: "hist89",
        difficulty: "hard",
        question: "Modern olimpiyat oyunları ilk kez hangi şehirde düzenlenmiştir?",
        options: ["Paris", "Londra", "Atina", "Roma"],
        correctIndex: 2,
        explanation: "Antik olimpiyatları canlandırmak amacıyla Pierre de Coubertin'in öncülüğünde 1896 yılında ilk modern olimpiyat oyunları Yunanistan'ın başkenti Atina'da düzenlenmiştir. 14 ülkenin katıldığı bu ilk olimpiyata yaklaşık 241 sporcu iştirak etmiştir."
      },
      {
        id: "hist90",
        difficulty: "hard",
        question: "Sanayi Devrimi önce hangi ülkede başlamıştır?",
        options: ["Fransa", "Almanya", "İngiltere", "ABD"],
        correctIndex: 2,
        explanation: "18. yüzyılın ortasından itibaren İngiltere'de başlayan Sanayi Devrimi; buhar makinesi, dokuma tezgâhı ve fabrika sisteminin gelişmesiyle üretim biçimini kökünden değiştirmiştir. Tarım ekonomisinden sanayi ekonomisine geçişi simgeleyen bu dönüşüm kısa sürede tüm dünyaya yayılmıştır."
      },
      {
        id: "hist91",
        difficulty: "hard",
        question: "Büyük İskender hangi krallığın hükümdarıydı?",
        options: ["Roma", "Pers", "Makedonya", "Mısır"],
        correctIndex: 2,
        explanation: "Büyük İskender (MÖ 356-323), Makedonya Krallığı'nın hükümdarıydı. Babası II. Filip'in ardından tahta geçen İskender, kısa sürede Anadolu, Mısır, Pers İmparatorluğu ve Hindistan sınırlarına kadar uzanan büyük bir imparatorluk kurmuştur."
      },
      {
        id: "hist92",
        difficulty: "hard",
        question: "Hangi imparatorluk 'Güneş batmayan imparatorluk' olarak anılmıştır?",
        options: ["Osmanlı İmparatorluğu", "Britanya İmparatorluğu", "Fransız İmparatorluğu", "İspanya İmparatorluğu"],
        correctIndex: 1,
        explanation: "Britanya İmparatorluğu, en geniş döneminde Dünya'nın her saat diliminde toprakları bulunduğundan 'Güneş batmayan imparatorluk' olarak anılmıştır. 19. yüzyılın sonunda Dünya kara yüzeyinin yaklaşık dörtte birini kontrol eden İmparatorluk, 20. yüzyılda dekolonizasyon süreciyle gerilemiştir."
      },
      {
        id: "hist93",
        difficulty: "hard",
        question: "Türkiye NATO'ya hangi yılda katılmıştır?",
        options: ["1945", "1949", "1952", "1955"],
        correctIndex: 2,
        explanation: "Türkiye, Kore Savaşı'ndaki etkin katılımının ardından 18 Şubat 1952'de NATO'ya (Kuzey Atlantik Antlaşması Örgütü) üye olmuştur. Yunanistan ile aynı tarihte üye olan Türkiye, Soğuk Savaş döneminde NATO'nun güneydoğu kanadını oluşturan stratejik bir üye olarak konumlanmıştır."
      },
      {
        id: "hist94",
        difficulty: "hard",
        question: "Amerika Birleşik Devletleri kaç eyaletten oluşmaktadır?",
        options: ["48", "49", "50", "52"],
        correctIndex: 2,
        explanation: "ABD, 1959 yılında Alaska ve Hawaii'nin katılımıyla 50 eyalete ulaşmıştır. İlk 13 kurucu eyaletle başlayan federasyon; bağımsızlık, satın alma ve fetih yoluyla topraklarını genişleterek mevcut yapısına kavuşmuştur."
      },
      {
        id: "hist95",
        difficulty: "hard",
        question: "Antik çağda demokrasinin doğduğu şehir devleti hangisidir?",
        options: ["Sparta", "Korint", "Atina", "Kartaca"],
        correctIndex: 2,
        explanation: "Demokrasinin doğduğu yer olarak kabul edilen Antik Atina'da MÖ 507-508'de Kleisthenes'in gerçekleştirdiği reformlarla vatandaşların yönetime doğrudan katıldığı ilk demokratik sistem kurulmuştur. Antik Yunancada 'demos' (halk) + 'kratos' (güç/iktidar) sözcüklerinden türetilen demokrasi kelimesi de Atina'dan gelmektedir."
      },
      {
        id: "hist96",
        difficulty: "hard",
        question: "Magna Carta hangi yılda imzalanmıştır?",
        options: ["1066", "1215", "1348", "1492"],
        correctIndex: 1,
        explanation: "Magna Carta Libertatum (Büyük Özgürlük Fermanı), 15 Haziran 1215'te İngiltere Kralı John tarafından baronların baskısıyla imzalanmıştır. Hükümdarın yetkilerini kısıtlayan bu belge, modern hukuk devleti ve anayasal monarşi anlayışının temel taşlarından biri olarak kabul edilmektedir."
      },
      {
        id: "hist97",
        difficulty: "hard",
        question: "Çin Seddi'nin inşasına hangi hanedan döneminde başlanmıştır?",
        options: ["Han Hanedanı", "Tang Hanedanı", "Qin Hanedanı", "Ming Hanedanı"],
        correctIndex: 2,
        explanation: "Çin Seddi'nin kökenleri daha önceki dönemlere uzansa da büyük ölçekli ve birleşik inşaat Qin Hanedanı döneminde (MÖ 221-206) ilk Çin İmparatoru Qin Shi Huang'ın gözetiminde başlamıştır. Ming Hanedanı döneminde (MS 1368-1644) ise seddin büyük bölümü bugün görülen biçimiyle yeniden inşa edilmiştir."
      },
      {
        id: "hist98",
        difficulty: "hard",
        question: "Birinci Dünya Savaşı hangi yıllar arasında yaşanmıştır?",
        options: ["1910-1914", "1914-1918", "1918-1922", "1939-1945"],
        correctIndex: 1,
        explanation: "Birinci Dünya Savaşı, 28 Temmuz 1914'te Avusturya-Macaristan'ın Sırbistan'a savaş ilan etmesiyle başlamış ve 11 Kasım 1918'de ateşkesle sona ermiştir. Yaklaşık 17 milyon insanın hayatını kaybettiği bu savaş; imparatorlukların çöküşüne ve siyasi haritanın köklü biçimde değişmesine yol açmıştır."
      },
      {
        id: "hist99",
        difficulty: "hard",
        question: "Amerikan Bağımsızlık Bildirisi hangi yılda ilan edilmiştir?",
        options: ["1770", "1776", "1783", "1789"],
        correctIndex: 1,
        explanation: "Amerika Birleşik Devletleri, İngiltere'nin 13 kolonisinin 4 Temmuz 1776'da yayımladığı Bağımsızlık Bildirisi ile bağımsızlığını ilan etmiştir. Thomas Jefferson'ın kaleme aldığı bildiri; 'tüm insanlar eşit yaratılmıştır' ilkesiyle insan hakları tarihinde önemli bir yer tutmaktadır."
      },
      {
        id: "hist100",
        difficulty: "hard",
        question: "Berlin Duvarı hangi yılda yıkılmıştır?",
        options: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        explanation: "Berlin Duvarı, 9 Kasım 1989'da Doğu Alman hükümetinin seyahat kısıtlamalarını kaldırdığını açıklamasının ardından Doğu ve Batı Berlinliler tarafından yıkılmıştır. 1961'de inşa edilen duvar; Soğuk Savaş'ın ve Doğu-Batı bölünmüşlüğünün en güçlü sembolü olmuştu. Yıkılması, Almanya'nın yeniden birleşmesini (1990) ve Sovyetler Birliği'nin çöküşünü simgeleyen dönüm noktası olmuştur."
      },
      {
        id: "hist101",
        difficulty: "hard",
        question: "Troya Savaşı Homeros'un hangi destanında ayrıntılı biçimde anlatılır?",
        options: ["Odysseia", "İlyada", "Aeneis", "Theogonia"],
        correctIndex: 1,
        explanation: "İlyada (Ilias), MÖ 8. yüzyılda Homeros'a atfedilen ve Troya Savaşı'nın son yılını anlatan destansı şiirdir. Akhilleus'un öfkesi etrafında şekillenen eser, Truva (İlion) şehrine kuşatmanın gidişatını ve savaşçıların kahramanlıklarını konu alır. Odysseia ise savaştan sonra Odisseus'un Truva'dan İthaka'ya dönerken yaşadığı on yıllık maceraya ayrılmıştır."
      },
      {
        id: "hist102",
        difficulty: "hard",
        question: "Çivi yazısını (cuneiform) icat eden medeniyet hangisidir?",
        options: ["Mısırlılar", "Sümerler", "Fenikeliler", "Hititler"],
        correctIndex: 1,
        explanation: "Çivi yazısı, MÖ 3400-3200 yılları arasında Mezopotamya'nın güneyinde yaşayan Sümerler tarafından icat edilmiştir. Kamış kalemle kil tabletlere kazınan bu yazı sistemi; ekonomik kayıtlar, hukuki belgeler ve edebi metinler için kullanıldı. Sonraki uygarlıklara (Akadlar, Babilliler, Hititler) geçen çivi yazısı MÖ 1. yüzyıla kadar kullanıldı."
      },
      {
        id: "hist103",
        difficulty: "hard",
        question: "Osmanlı Devleti'nin son padişahı kimdir?",
        options: ["II. Abdülhamid", "V. Mehmed Reşad", "VI. Mehmed Vahideddin", "II. Abdülmecid"],
        correctIndex: 2,
        explanation: "VI. Mehmed Vahideddin, Kasım 1918'den Kasım 1922'ye kadar saltanatta kalan son Osmanlı padişahıdır. 1. Dünya Savaşı'nın ardından işgal altındaki İstanbul'da müttefiklerle iş birliği yapması büyük tartışma yarattı. Türkiye Büyük Millet Meclisi saltanatı 1 Kasım 1922'de kaldırınca İngiliz savaş gemisiyle ülkeden ayrıldı ve 1926'da San Remo'da hayatını kaybetti."
      },
      {
        id: "hist104",
        difficulty: "hard",
        question: "Rönesans hangi ülkede ve hangi yüzyılda başlamıştır?",
        options: ["Fransa, 15. yüzyıl", "İngiltere, 14. yüzyıl", "İtalya, 14. yüzyıl", "Almanya, 16. yüzyıl"],
        correctIndex: 2,
        explanation: "Rönesans (Yeniden Doğuş), Antik Yunan-Roma kültürüne duyulan ilginin canlanmasıyla 14. yüzyılda İtalya'da başlamıştır. Floransa, Venedik ve Roma gibi şehirler Medici ailesi gibi hami sistemleri sayesinde Leonardo da Vinci, Michelangelo ve Raphael gibi sanatçıların yetiştiği merkezler oldu. Matbaanın icadıyla (1440'lar) Rönesans fikirleri tüm Avrupa'ya yayıldı."
      },
      {
        id: "hist105",
        difficulty: "hard",
        question: "Haçlı Seferlerinin temel amacı neydi?",
        options: ["Doğu Roma İmparatorluğu'nu yıkmak", "Akdeniz ticaretini ele geçirmek", "Kutsal Toprakları Müslümanlardan geri almak", "Moğol istilasını durdurmak"],
        correctIndex: 2,
        explanation: "Haçlı Seferleri (1096-1291), Papalık öncülüğünde başta Kudüs olmak üzere Kutsal Toprakları Müslümanlardan geri almak amacıyla düzenlenen askeri-dini seferlerdir. 1095'te Papa II. Urban'ın çağrısıyla başlayan süreçte sekiz büyük sefer gerçekleşti; 1099'da Kudüs ele geçirildi, ancak 1187'de Selahaddin Eyyubi tarafından yeniden alındı. Seferler Doğu-Batı ticaret ve kültür etkileşimini de yoğunlaştırdı."
      },
      {
        id: "hist106",
        difficulty: "hard",
        question: "Atatürk hangi yılda hayatını kaybetmiştir?",
        options: ["1934", "1936", "1938", "1942"],
        correctIndex: 2,
        explanation: "Mustafa Kemal Atatürk, 10 Kasım 1938 sabahı İstanbul Dolmabahçe Sarayı'nda hayatını kaybetmiştir. Uzun süredir karaciğer sirozu ile mücadele eden Atatürk, 57 yaşında vefat etti. Türk milletine modernleşme, cumhuriyet ve laiklik ilkelerini miras bırakan Atatürk'ün naaşı 1953'te Anıtkabir'e nakledilmiştir."
      },
      {
        id: "hist107",
        difficulty: "hard",
        question: "Avrupa'da matbaayı geliştirerek kitap basımını devrimleştiren kimdir?",
        options: ["Nikola Tesla", "Johannes Gutenberg", "Leonardo da Vinci", "Francis Bacon"],
        correctIndex: 1,
        explanation: "Alman kuyumcu Johannes Gutenberg, 1440'lı yıllarda hareketli metal harfler ve yağ bazlı mürekkep kullanan baskı makinesini geliştirdi. 1455'te bastığı Gutenberg İncili, Avrupa'nın ilk büyük baskı projesidir. Bu icat; bilginin yaygınlaşmasını, okuma oranlarının artmasını, Reform hareketini ve Rönesans'ın yayılmasını hızlandırdı."
      },
      {
        id: "hist108",
        difficulty: "hard",
        question: "Tutankamon'un mezarını hangi arkeolog keşfetmiştir?",
        options: ["Heinrich Schliemann", "Arthur Evans", "Howard Carter", "Flinders Petrie"],
        correctIndex: 2,
        explanation: "İngiliz Mısır bilimci Howard Carter, Lord Carnarvon'un finansmanıyla 4 Kasım 1922'de Kral Vadisi'nde Tutankamon'un neredeyse el değmemiş mezarını keşfetti. Altın maskesi, tahta, mobilyalar ve sayısız eserle dolu mezar, arkeoloji tarihinin en büyük keşiflerinden biri olarak kabul edilir. Mezarda bulunan 'firavun laneti' efsanesi dünya kamuoyunu derinden etkiledi."
      },
      {
        id: "hist109",
        difficulty: "hard",
        question: "Moğol İmparatorluğu'nun kurucusu kimdir?",
        options: ["Kubilay Han", "Ögedey Han", "Cengiz Han", "Timur"],
        correctIndex: 2,
        explanation: "Cengiz Han (Temuçin), dağınık Moğol ve Türk kabilelerini 1206'da birleştirerek Moğol İmparatorluğu'nu kurdu ve Büyük Han unvanını aldı. Kurduğu imparatorluk, ölümünün (1227) ardından torunları tarafından genişletilerek Pasifik kıyılarından Orta Avrupa'ya uzanan tarihin en büyük kara imparatorluğuna dönüştü. Cengiz Han'ın fetihleri milyonlarca insanın ölümüne neden olmuş, ama aynı zamanda 'Pax Mongolica' adıyla anılan bir ticaret ve kültür alışverişi ortamı yaratmıştır."
      },
      {
        id: "hist110",
        difficulty: "hard",
        question: "İstanbul'un fethinden önce bu şehrin adı neydi?",
        options: ["Bizans", "Troya", "Konstantinopolis", "Antakya"],
        correctIndex: 2,
        explanation: "İstanbul, Fatih Sultan Mehmet'in 1453'te Osmanlı ordularıyla fethinden önce Konstantinopolis adıyla biliniyordu. Şehir, MS 330'da Roma İmparatoru I. Konstantin tarafından kurulmuş ve Doğu Roma (Bizans) İmparatorluğu'nun başkenti olmuştur. 1453 fethi, orta çağın kapandığı ve yeni çağın başladığı dönüm noktası olarak tarihe geçmiştir."
      },
      {
        id: "hist111",
        difficulty: "easy",
        question: "Türkiye Cumhuriyeti hangi yıl ilan edilmiştir?",
        options: ["1919", "1920", "1923", "1925"],
        correctIndex: 2,
        explanation: "Türkiye Cumhuriyeti, TBMM'nin 29 Ekim 1923'te aldığı kararla resmen ilan edilmiş ve Mustafa Kemal ilk cumhurbaşkanı seçilmiştir."
      },
      {
        id: "hist112",
        difficulty: "easy",
        question: "I. Dünya Savaşı hangi yıl başlamıştır?",
        options: ["1905", "1914", "1918", "1939"],
        correctIndex: 1,
        explanation: "I. Dünya Savaşı, 28 Temmuz 1914'te Avusturya-Macaristan'ın Sırbistan'a savaş açmasıyla başlamış ve 1918'de sona ermiştir."
      },
      {
        id: "hist113",
        difficulty: "easy",
        question: "II. Dünya Savaşı hangi olayla başlamıştır?",
        options: ["Pearl Harbor saldırısı", "Almanya'nın Polonya'yı işgali", "Stalingrad Muharebesi", "Hiroşima'ya atom bombası"],
        correctIndex: 1,
        explanation: "II. Dünya Savaşı, 1 Eylül 1939'da Nazi Almanyası'nın Polonya'yı işgaliyle başlamıştır; iki gün sonra İngiltere ve Fransa savaşa girmiştir."
      },
      {
        id: "hist114",
        difficulty: "easy",
        question: "Cumhuriyet ilan edildiğinde Türkiye'nin başkenti hangi şehir olmuştur?",
        options: ["İstanbul", "Ankara", "İzmir", "Konya"],
        correctIndex: 1,
        explanation: "13 Ekim 1923'te alınan kararla Ankara, Türkiye'nin başkenti ilan edilmiş; 29 Ekim'de cumhuriyetin ilanından önce başkent kararı alınmıştır."
      },
      {
        id: "hist115",
        difficulty: "easy",
        question: "Çanakkale Deniz Zaferi hangi tarihtedir?",
        options: ["18 Mart 1915", "30 Ağustos 1922", "29 Ekim 1923", "23 Nisan 1920"],
        correctIndex: 0,
        explanation: "İtilaf donanmasının Çanakkale Boğazı'nı geçme girişiminin püskürtüldüğü Deniz Zaferi 18 Mart 1915'te kazanılmıştır."
      },
      {
        id: "hist116",
        difficulty: "easy",
        question: "Atatürk hangi savaşta 'Ben size taarruzu değil ölmeyi emrediyorum' demiştir?",
        options: ["Sakarya", "Çanakkale", "Büyük Taarruz", "Dumlupınar"],
        correctIndex: 1,
        explanation: "Mustafa Kemal, 25 Nisan 1915'te Çanakkale'de Conkbayırı'nda 57. Alay'a verdiği bu emirle savaşın kaderini değiştirmiştir."
      },
      {
        id: "hist117",
        difficulty: "easy",
        question: "TBMM hangi tarihte açıldı?",
        options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
        correctIndex: 1,
        explanation: "Türkiye Büyük Millet Meclisi, 23 Nisan 1920'de Ankara'da açılmış ve bu tarih Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanmaktadır."
      },
      {
        id: "hist118",
        difficulty: "easy",
        question: "Osmanlı Devleti'ni kim kurmuştur?",
        options: ["Orhan Bey", "Osman Bey", "I. Murad", "Ertuğrul Gazi"],
        correctIndex: 1,
        explanation: "Osmanlı Devleti, 1299'da Söğüt yöresinde Osman Bey tarafından kurulmuştur; devletin adı da kurucusundan gelmektedir."
      },
      {
        id: "hist119",
        difficulty: "easy",
        question: "Fatih Sultan Mehmet, İstanbul'u hangi yıl fethetmiştir?",
        options: ["1402", "1453", "1492", "1517"],
        correctIndex: 1,
        explanation: "Fatih Sultan Mehmet, 29 Mayıs 1453'te Konstantinopolis'i fethederek Doğu Roma İmparatorluğu'na son vermiş ve şehri Osmanlı'nın başkenti yapmıştır."
      },
      {
        id: "hist120",
        difficulty: "easy",
        question: "İlk Türk-İslam Devleti hangisidir?",
        options: ["Selçuklular", "Karahanlılar", "Osmanlı", "Gazneliler"],
        correctIndex: 1,
        explanation: "Karahanlılar, 840 yılı civarında kurulmuş ve hükümdarlarının topluca İslamiyet'i kabul ettiği ilk Türk-İslam devleti olarak kabul edilir."
      },
      {
        id: "hist121",
        difficulty: "easy",
        question: "Dünya tarihinin ilk yazılı antlaşması hangisidir?",
        options: ["Lozan", "Versay", "Kadeş", "Sevr"],
        correctIndex: 2,
        explanation: "MÖ 1274 civarında Hititler ile Mısırlılar arasında imzalanan Kadeş Antlaşması, tarihin bilinen ilk yazılı barış antlaşması olarak kabul edilir."
      },
      {
        id: "hist122",
        difficulty: "easy",
        question: "Hangi padişah 'Yavuz' lakabıyla bilinir?",
        options: ["I. Selim", "I. Süleyman", "II. Mehmet", "II. Bayezit"],
        correctIndex: 0,
        explanation: "I. Selim, sert ve kararlı kişiliği ile sefer sayısı bakımından bilinir; tarihe 'Yavuz' lakabıyla geçmiş ve hilafeti Osmanlı'ya getirmiştir."
      },
      {
        id: "hist123",
        difficulty: "easy",
        question: "Sanayi Devrimi ilk olarak hangi ülkede başlamıştır?",
        options: ["Fransa", "İngiltere", "Almanya", "ABD"],
        correctIndex: 1,
        explanation: "Sanayi Devrimi 18. yüzyılın ortalarında İngiltere'de buhar makinesi ve dokuma teknolojilerinin gelişmesiyle başlamış, sonra Avrupa'ya yayılmıştır."
      },
      {
        id: "hist124",
        difficulty: "easy",
        question: "ABD bağımsızlığını hangi yıl ilan etmiştir?",
        options: ["1492", "1776", "1789", "1812"],
        correctIndex: 1,
        explanation: "Amerika Birleşik Devletleri'nin Bağımsızlık Bildirgesi, 4 Temmuz 1776'da Philadelphia'da kabul edilmiş ve İngiliz egemenliğinden ayrıldığı ilan edilmiştir."
      },
      {
        id: "hist125",
        difficulty: "easy",
        question: "Hangi Osmanlı padişahı 'Kanuni' lakabıyla anılır?",
        options: ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Mahmut", "II. Abdülhamit"],
        correctIndex: 1,
        explanation: "I. Süleyman, kanunlaştırma faaliyetleri ve adaleti nedeniyle Türk halkı tarafından 'Kanuni' lakabıyla anılmıştır; Batı'da ise 'Muhteşem' olarak bilinir."
      },
      {
        id: "hist126",
        difficulty: "easy",
        question: "Kurtuluş Savaşı'nın resmi başlangıç tarihi olarak kabul edilen gün hangisidir?",
        options: ["19 Mayıs 1919", "30 Ekim 1918", "13 Kasım 1918", "16 Mart 1920"],
        correctIndex: 0,
        explanation: "Mustafa Kemal Paşa'nın Samsun'a çıkışı olan 19 Mayıs 1919, Kurtuluş Savaşı'nın resmi başlangıcı olarak kabul edilir."
      },
      {
        id: "hist127",
        difficulty: "easy",
        question: "Roma İmparatorluğu hangi yıl ikiye ayrılmıştır?",
        options: ["MS 235", "MS 313", "MS 395", "MS 476"],
        correctIndex: 2,
        explanation: "Roma İmparatorluğu, İmparator I. Theodosius'un 395'teki ölümünün ardından oğulları arasında Doğu (Bizans) ve Batı Roma olarak ikiye ayrılmıştır."
      },
      {
        id: "hist128",
        difficulty: "medium",
        question: "Lozan Antlaşması hangi tarihte imzalanmıştır?",
        options: ["10 Ağustos 1920", "11 Ekim 1922", "24 Temmuz 1923", "29 Ekim 1923"],
        correctIndex: 2,
        explanation: "Lozan Barış Antlaşması, 24 Temmuz 1923'te imzalanmış ve Türkiye'nin kurucu uluslararası belgesi olmuştur."
      },
      {
        id: "hist129",
        difficulty: "medium",
        question: "Saltanat hangi tarihte kaldırılmıştır?",
        options: ["1 Kasım 1922", "23 Nisan 1920", "29 Ekim 1923", "3 Mart 1924"],
        correctIndex: 0,
        explanation: "TBMM, 1 Kasım 1922'de aldığı kararla saltanatı kaldırmış; böylece son padişah Vahdettin yurtdışına çıkmıştır."
      },
      {
        id: "hist130",
        difficulty: "medium",
        question: "Hilafet hangi tarihte kaldırılmıştır?",
        options: ["1 Kasım 1922", "29 Ekim 1923", "3 Mart 1924", "5 Aralık 1934"],
        correctIndex: 2,
        explanation: "Halifelik, 3 Mart 1924'te Tevhid-i Tedrisat Kanunu ile aynı gün çıkarılan kanunla kaldırılmıştır."
      },
      {
        id: "hist131",
        difficulty: "medium",
        question: "Berlin Duvarı hangi yıl inşa edildi?",
        options: ["1949", "1955", "1961", "1968"],
        correctIndex: 2,
        explanation: "Berlin Duvarı, Doğu Almanya tarafından 13 Ağustos 1961'de Doğu Berlin'den Batı'ya kaçışları engellemek için inşa edildi."
      },
      {
        id: "hist132",
        difficulty: "medium",
        question: "Soğuk Savaş hangi iki süper güç arasında yaşanmıştır?",
        options: ["İngiltere - Almanya", "ABD - Sovyetler Birliği", "Çin - Japonya", "Fransa - İspanya"],
        correctIndex: 1,
        explanation: "Soğuk Savaş, 1947-1991 yılları arasında ABD ve müttefikleriyle Sovyetler Birliği ve Doğu Bloku arasındaki ideolojik, askeri ve teknolojik rekabettir."
      },
      {
        id: "hist133",
        difficulty: "medium",
        question: "Fransız İhtilali hangi yıl başlamıştır?",
        options: ["1776", "1789", "1815", "1848"],
        correctIndex: 1,
        explanation: "Fransız Devrimi, 14 Temmuz 1789'da Bastille Hapishanesi'nin basılmasıyla başlamış ve mutlak monarşinin sonunu getirmiştir."
      },
      {
        id: "hist134",
        difficulty: "medium",
        question: "Sevr Antlaşması hangi tarihte imzalanmıştır?",
        options: ["10 Ağustos 1920", "30 Ekim 1918", "11 Ekim 1922", "24 Temmuz 1923"],
        correctIndex: 0,
        explanation: "Sevr Antlaşması, 10 Ağustos 1920'de imzalanmış; ancak TBMM tarafından tanınmamış ve uygulanamamıştır."
      },
      {
        id: "hist135",
        difficulty: "medium",
        question: "Atatürk'ün Nutuk'u kaç günlük süreyi kapsayan olayları anlatır?",
        options: ["1 yıllık", "5 yıllık", "8 yıllık", "10 yıllık"],
        correctIndex: 2,
        explanation: "Nutuk, Atatürk'ün 19 Mayıs 1919'dan 1927'ye kadar geçen yaklaşık sekiz yıllık dönemi anlattığı, 1927'de okuduğu tarihi söylevidir."
      },
      {
        id: "hist136",
        difficulty: "medium",
        question: "Türkiye'de soyadı kanunu hangi yıl çıkarılmıştır?",
        options: ["1923", "1928", "1934", "1938"],
        correctIndex: 2,
        explanation: "Soyadı Kanunu 21 Haziran 1934'te kabul edilmiş ve 2 Ocak 1935'te yürürlüğe girmiştir; aynı yıl Mustafa Kemal'e 'Atatürk' soyadı verilmiştir."
      },
      {
        id: "hist137",
        difficulty: "medium",
        question: "Anadolu'da kurulan ilk Türk beyliği hangisidir?",
        options: ["Karamanoğulları", "Saltuklu Beyliği", "Osmanlı", "Mengücekliler"],
        correctIndex: 1,
        explanation: "Saltuklu Beyliği, 1071 Malazgirt zaferinin ardından Erzurum çevresinde Ebu'l Kasım Saltuk Bey tarafından kurulan ilk Türk beyliği kabul edilir."
      },
      {
        id: "hist138",
        difficulty: "medium",
        question: "Hangi olay 'Cumhuriyetin İlanı'nın hemen ardından, başkenti Ankara olarak teyit eden adım sayılır?",
        options: ["13 Ekim 1923 kararı", "23 Nisan 1920", "1 Kasım 1922", "3 Mart 1924"],
        correctIndex: 0,
        explanation: "Ankara, 13 Ekim 1923'te TBMM tarafından çıkarılan kanunla başkent ilan edilmiş; 29 Ekim'de Cumhuriyet ilan edilmiştir."
      },
      {
        id: "hist139",
        difficulty: "medium",
        question: "İkinci Dünya Savaşı hangi tarihte sona ermiştir?",
        options: ["8 Mayıs 1945 (Avrupa) / 2 Eylül 1945 (Pasifik)", "11 Kasım 1944", "6 Haziran 1944", "30 Nisan 1945"],
        correctIndex: 0,
        explanation: "II. Dünya Savaşı, Avrupa'da 8 Mayıs 1945'te Almanya'nın teslim olmasıyla, Pasifik'te 2 Eylül 1945'te Japonya'nın teslimiyle son buldu."
      },
      {
        id: "hist140",
        difficulty: "medium",
        question: "Sümerlere ait olan ünlü edebi eser hangisidir?",
        options: ["İlyada", "Gılgamış Destanı", "Mahabharata", "Şehname"],
        correctIndex: 1,
        explanation: "Gılgamış Destanı, Sümer kökenli, Akadlar tarafından da geliştirilmiş, dünyanın bilinen en eski edebi eserlerinden biridir."
      },
      {
        id: "hist141",
        difficulty: "medium",
        question: "Hangi savaş Bizans'ın Anadolu üzerindeki egemenliğini büyük ölçüde sona erdirmiştir?",
        options: ["Pasinler", "Malazgirt (1071)", "Niğbolu", "Mohaç"],
        correctIndex: 1,
        explanation: "Malazgirt Meydan Muharebesi, 26 Ağustos 1071'de Sultan Alparslan komutasındaki Selçuklu ordusunun Bizans ordusunu yenmesiyle Anadolu'yu Türklere açmıştır."
      },
      {
        id: "hist142",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Tanzimat Fermanı'nın ilan edildiği yıldır?",
        options: ["1789", "1839", "1876", "1908"],
        correctIndex: 1,
        explanation: "Tanzimat Fermanı, 3 Kasım 1839'da Sultan Abdülmecid döneminde Mustafa Reşit Paşa tarafından okunarak ilan edilmiştir."
      },
      {
        id: "hist143",
        difficulty: "medium",
        question: "Hangi padişah döneminde Osmanlı İmparatorluğu en geniş sınırlarına ulaşmıştır?",
        options: ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "IV. Murad", "II. Mehmet"],
        correctIndex: 1,
        explanation: "Osmanlı İmparatorluğu, 16. yüzyılda Kanuni Sultan Süleyman döneminde Avrupa, Asya ve Afrika'da en geniş sınırlarına ulaşmıştır."
      },
      {
        id: "hist144",
        difficulty: "medium",
        question: "Hangi olay 1917 Rus Devrimi'nin sonucudur?",
        options: ["Sovyetler Birliği'nin kurulması", "I. Dünya Savaşı'nın başlaması", "Berlin Duvarı'nın inşası", "Marshall Planı"],
        correctIndex: 0,
        explanation: "1917 Bolşevik Devrimi, Çarlık Rusyası'nı yıkmış ve sonrasında 1922'de Sovyet Sosyalist Cumhuriyetler Birliği'nin (SSCB) kurulmasıyla sonuçlanmıştır."
      },
      {
        id: "hist145",
        difficulty: "hard",
        question: "Hammurabi Kanunları hangi medeniyete aittir?",
        options: ["Sümer", "Babil", "Hitit", "Asur"],
        correctIndex: 1,
        explanation: "Hammurabi Kanunları, MÖ 1754 civarında Babil Kralı Hammurabi tarafından düzenlenmiş, dünyanın bilinen en eski yazılı kanun derlemelerinden biridir."
      },
      {
        id: "hist146",
        difficulty: "hard",
        question: "Tarihte 'Otuz Yıl Savaşları' hangi yıllar arasında yaşanmıştır?",
        options: ["1500-1530", "1618-1648", "1701-1731", "1789-1819"],
        correctIndex: 1,
        explanation: "Otuz Yıl Savaşları, 1618-1648 yılları arasında özellikle Almanya topraklarında Katolik-Protestan çekişmesi merkezli yaşanmış ve Vestfalya Antlaşması ile sonuçlanmıştır."
      },
      {
        id: "hist147",
        difficulty: "hard",
        question: "Vestfalya Barışı hangi savaşı sona erdirmiştir?",
        options: ["I. Dünya Savaşı", "Yedi Yıl Savaşları", "Otuz Yıl Savaşları", "Yüz Yıl Savaşları"],
        correctIndex: 2,
        explanation: "Vestfalya Barışı (1648), Otuz Yıl Savaşları'nı bitirmiş ve modern egemen ulus-devlet sisteminin temellerini atmıştır."
      },
      {
        id: "hist148",
        difficulty: "hard",
        question: "Hangi savaş Yunan-Pers savaşlarının dönüm noktası olarak bilinir ve 'Maraton koşusu' adının kaynağıdır?",
        options: ["Salamis Deniz Savaşı", "Maraton Muharebesi", "Termopil", "İssos"],
        correctIndex: 1,
        explanation: "MÖ 490'da Atinalıların Persleri yendiği Maraton Muharebesi, zaferi haber vermek için Atina'ya 42 km koşan ulağın hikayesinden 'maraton' koşusunun esin kaynağı olmuştur."
      },
      {
        id: "hist149",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Bizans İmparatorluğu'nun resmi dilidir (orta-geç dönem)?",
        options: ["Latince", "Yunanca", "Süryanice", "Ermenice"],
        correctIndex: 1,
        explanation: "Bizans İmparatorluğu, başlangıçta resmi dil olarak Latince'yi kullansa da Heraklios döneminden (7. yüzyıl) itibaren Yunanca resmi dil olmuştur."
      },
      {
        id: "hist150",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Vergilius'un eseridir?",
        options: ["İlyada", "Aeneis (Aeneid)", "Odysseia", "Şehname"],
        correctIndex: 1,
        explanation: "Aeneis, Roma şairi Vergilius tarafından Augustus döneminde yazılmış, Roma'nın efsanevi kuruluşunu konu alan epik bir şiirdir."
      },
      {
        id: "hist151",
        difficulty: "hard",
        question: "Atatürk Üniversitesi hangi yıl kurulmuştur?",
        options: ["1923", "1933", "1957", "1973"],
        correctIndex: 2,
        explanation: "Atatürk Üniversitesi, 1957'de Erzurum'da kurularak Anadolu'nun doğusunda eğitim ve araştırma için merkez hâline getirilen önemli bir üniversitedir."
      },
      {
        id: "hist152",
        difficulty: "hard",
        question: "1929 Büyük Buhran hangi olayla sembolleşmiştir?",
        options: ["Wall Street çöküşü (Kara Salı)", "Almanya'nın enflasyonu", "İngiltere genel grevi", "Fransa devalüasyonu"],
        correctIndex: 0,
        explanation: "Büyük Buhran, 29 Ekim 1929 'Kara Salı' olarak bilinen New York Borsası'nın çöküşüyle başlamış ve dünya ekonomisini sarsmıştır."
      },
      {
        id: "hist153",
        difficulty: "hard",
        question: "İngiltere'de '1066 Norman Fethi'nin galibi olan ünlü liderin adı nedir?",
        options: ["I. Edward", "Fatih William (William the Conqueror)", "Aslan Yürekli Richard", "Kral Harold"],
        correctIndex: 1,
        explanation: "Norman Dükü Fatih William, 1066 Hastings Muharebesi'nde İngiliz Kralı Harold'ı yenerek İngiltere tahtına oturmuş ve Norman hanedanını kurmuştur."
      },
      {
        id: "hist154",
        difficulty: "hard",
        question: "Çin Halk Cumhuriyeti hangi yıl ilan edilmiştir?",
        options: ["1911", "1924", "1949", "1976"],
        correctIndex: 2,
        explanation: "Çin Halk Cumhuriyeti, Mao Zedong önderliğindeki komünist hareketin iç savaştan galip çıkmasıyla 1 Ekim 1949'da ilan edilmiştir."
      },
      {
        id: "hist155",
        difficulty: "hard",
        question: "Aşağıdaki olaylardan hangisi 1908 II. Meşrutiyet'in ilanıyla doğrudan ilişkilidir?",
        options: ["İttihat ve Terakki Cemiyeti", "Tanzimat", "Islahat Fermanı", "Kuvayi Milliye"],
        correctIndex: 0,
        explanation: "II. Meşrutiyet'in 1908'de yeniden ilanı, Manastır ve Selanik merkezli faaliyet gösteren İttihat ve Terakki Cemiyeti'nin baskıları sonucunda gerçekleşmiştir."
      },
      {
        id: "hist156",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Yedi Yıl Savaşları' (1756-1763) sonucunda gerçekleşmemiştir?",
        options: ["İngiltere'nin Kuzey Amerika'da güçlenmesi", "Fransa'nın Hindistan'da etkisinin azalması", "ABD'nin bağımsızlığını ilan etmesi", "Prusya'nın büyük güç hâline gelmesi"],
        correctIndex: 2,
        explanation: "ABD'nin bağımsızlığı 1776'da, Yedi Yıl Savaşları'ndan sonra ayrı bir süreçte ilan edilmiştir; savaşın doğrudan sonucu değildir."
      },
      {
        id: "hist157",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi I. İnönü Savaşı'nın siyasi sonuçlarından değildir?",
        options: ["Londra Konferansı'nın toplanması", "1921 Anayasası'nın kabul edilmesi", "İstiklal Marşı'nın kabul edilmesi", "Saltanatın kaldırılması"],
        correctIndex: 3,
        explanation: "Saltanat, 1 Kasım 1922'de I. İnönü'den çok sonra kaldırılmıştır; diğer üç gelişme I. İnönü Zaferi'nin (Ocak 1921) kısa zamanda ortaya çıkardığı sonuçlardandır."
      },
      {
        id: "hist158",
        difficulty: "hard",
        question: "Türkiye Cumhuriyeti tarihinde 'Çok Partili Hayata Geçiş' resmi olarak hangi yıl başlamıştır?",
        options: ["1925", "1930", "1946", "1960"],
        correctIndex: 2,
        explanation: "1923-1945 arası Tek Parti dönemi yaşanmış; çok partili siyasi hayata Demokrat Parti'nin 7 Ocak 1946'da kurulmasıyla geçilmiştir."
      },
      {
        id: "hist159",
        difficulty: "hard",
        question: "İngilizlerin Hindistan üzerindeki Doğu Hindistan Şirketi yönetimi hangi yıl son bulmuş ve doğrudan İngiliz yönetimine geçilmiştir?",
        options: ["1820", "1858", "1900", "1947"],
        correctIndex: 1,
        explanation: "1857 Hindistan Ayaklanması'nın ardından 1858'de yetki Doğu Hindistan Şirketi'nden alınıp doğrudan İngiliz Tacı'na devredilmiş; Hindistan 1947'ye kadar İngiltere'ye bağlı kalmıştır."
      },
      {
        id: "hist160",
        difficulty: "hard",
        question: "Süveyş Kanalı hangi yıl açılmıştır?",
        options: ["1825", "1850", "1869", "1914"],
        correctIndex: 2,
        explanation: "Akdeniz ile Kızıldeniz'i birbirine bağlayan Süveyş Kanalı, Fransız mühendis Ferdinand de Lesseps'in çalışmaları sonucu 17 Kasım 1869'da hizmete açılmıştır."
      },
      {
        id: "hist161",
        difficulty: "easy",
        question: "Birinci Dünya Savaşı hangi yıllar arasında yaşanmıştır?",
        options: ["1905-1910", "1914-1918", "1918-1923", "1939-1945"],
        correctIndex: 1,
        explanation: "Birinci Dünya Savaşı, 1914'te Avusturya-Macaristan Veliahdı Arşidük Franz Ferdinand'ın Saraybosna'da öldürülmesiyle başlamış ve 11 Kasım 1918'de İtilaf Devletleri'nin zaferiyle sona ermiştir. Savaş 20 milyonu aşkın insanın hayatını kaybetmesine neden olmuştur."
      },
      {
        id: "hist162",
        difficulty: "easy",
        question: "Berlin Duvarı hangi yıl yıkılmıştır?",
        options: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        explanation: "Berlin Duvarı, Doğu Almanya'yı Batı Berlin'den ayırmak amacıyla 1961'de inşa edilmiş; 9 Kasım 1989'da komünist rejimlerin çöküş sürecinde Doğu Alman hükümetinin seyahat kısıtlamalarını kaldırmasıyla vatandaşlar tarafından yıkılmıştır."
      },
      {
        id: "hist163",
        difficulty: "medium",
        question: "Magna Carta hangi yılda ve hangi İngiliz Kralı tarafından imzalanmıştır?",
        options: ["1066, Kral Harold", "1215, Kral John", "1265, Kral Henry III", "1348, Kral Edward III"],
        correctIndex: 1,
        explanation: "Magna Carta (Büyük Şart), 15 Haziran 1215'te İngiltere Kralı John tarafından baronların baskısı sonucu imzalanmıştır. Kraliyet yetkisini sınırlayan ve hukuk önünde eşitliği tesis eden bu belge, modern anayasal hukukun ve insan hakları anlayışının öncüsü sayılır."
      },
      {
        id: "hist164",
        difficulty: "medium",
        question: "Fransız İhtilali hangi yılda başlamış ve hangi sloganla özdeşleşmiştir?",
        options: ["1776, Özgürlük veya Ölüm", "1789, Özgürlük, Eşitlik, Kardeşlik", "1799, Halk Egemenliği", "1815, Eşitlik ve Adalet"],
        correctIndex: 1,
        explanation: "Fransız İhtilali, 14 Temmuz 1789'da Bastille Hapishanesi'nin düşürülmesiyle başlamıştır. 'Liberté, Égalité, Fraternité' (Özgürlük, Eşitlik, Kardeşlik) sloganıyla modern demokrasinin, milliyetçiliğin ve laik devlet anlayışının temellerini atmıştır."
      },
      {
        id: "hist165",
        difficulty: "medium",
        question: "Osmanlı Devleti'nde saltanat resmen hangi yılda kaldırılmıştır?",
        options: ["1919", "1920", "1922", "1924"],
        correctIndex: 2,
        explanation: "Saltanat, 1 Kasım 1922'de TBMM kararıyla kaldırılmış; son Osmanlı padişahı Mehmed VI (Vahdettin) 17 Kasım 1922'de yurt dışına kaçmıştır. Hilafetin kaldırılması ise 3 Mart 1924'te gerçekleşmiştir."
      },
      {
        id: "hist166",
        difficulty: "medium",
        question: "İkinci Dünya Savaşı'nın Avrupa cephesinde sona erdiği tarih nedir?",
        options: ["8 Mayıs 1944", "8 Mayıs 1945", "2 Eylül 1945", "15 Ağustos 1945"],
        correctIndex: 1,
        explanation: "8 Mayıs 1945 (V-E Day / Victory in Europe Day), Nazi Almanya'sının teslimiyetiyle İkinci Dünya Savaşı'nın Avrupa cephesinde sona erdiği tarihtir. Pasifik cephesinde ise savaş, Japonya'nın 2 Eylül 1945'te teslim olmasıyla kapanmıştır."
      },
      {
        id: "hist167",
        difficulty: "hard",
        question: "Haçlı Seferleri tarihçiler tarafından genel olarak kaç büyük sefer olarak kabul edilmektedir?",
        options: ["4", "6", "8", "10"],
        correctIndex: 2,
        explanation: "Tarihçiler genellikle 1096-1270 yılları arasında düzenlenen 8 ana Haçlı Seferi'ni kabul etmektedir. Seferlerin temel amacı Kutsal Topraklar'ı (özellikle Kudüs'ü) Müslüman yönetiminden almaktı."
      },
      {
        id: "hist168",
        difficulty: "hard",
        question: "Japonya'nın resmi teslim belgesini imzaladığı tarih nedir?",
        options: ["6 Ağustos 1945", "15 Ağustos 1945", "2 Eylül 1945", "8 Eylül 1945"],
        correctIndex: 2,
        explanation: "Japonya'nın resmi teslim belgesi, 2 Eylül 1945'te Tokyo Körfezi'nde USS Missouri zırhlısının güvertesinde imzalanmıştır. Bu tarih, II. Dünya Savaşı'nın Pasifik cephesinin ve genel itibarıyla tüm savaşın resmen sona erdiği gün olarak tarihe geçmiştir."
      },
      {
        id: "hist169",
        difficulty: "hard",
        question: "İlk modern Olimpiyat Oyunları nerede ve hangi yılda düzenlenmiştir?",
        options: ["Londra, 1896", "Paris, 1900", "Atina, 1896", "Stokholm, 1912"],
        correctIndex: 2,
        explanation: "Modern Olimpiyat Oyunları, Pierre de Coubertin'in önderliğinde 6-15 Nisan 1896 tarihleri arasında Yunanistan'ın başkenti Atina'da düzenlenmiştir. 14 ülkeden 241 erkek sporcu 43 branşta mücadele etmiştir; kadın katılımı 1900 Paris Oyunları'nda başlamıştır."
      },
      {
        id: "hist170",
        difficulty: "hard",
        question: "Mao Zedong önderliğindeki Çin Komünist Partisi iktidarı hangi yılda ele geçirmiştir?",
        options: ["1945", "1947", "1949", "1952"],
        correctIndex: 2,
        explanation: "Çin İç Savaşı'nda Komünist Parti, Milliyetçi Hükümet (Kuomintang) kuvvetlerini mağlup ederek 1 Ekim 1949'da Çin Halk Cumhuriyeti'ni ilan etmiştir. Milliyetçi güçler ise Taiwan'a çekilmiş ve burada Çin Cumhuriyeti yönetimini sürdürmüştür."
      },
      {
        id: "hist171",
        difficulty: "easy",
        question: "1789 Fransız Devrimi'nin sloganındaki üç temel ilke nedir?",
        options: ["Özgürlük, Eşitlik, Kardeşlik", "Tanrı, Kral, Vatan", "Akıl, Adalet, İlerleme", "Halk, Güç, Eylem"],
        correctIndex: 0,
        explanation: "Fransız Devrimi'nin Liberté, Égalité, Fraternité (Özgürlük, Eşitlik, Kardeşlik) sloganı modern demokratik değerlerin temel taşlarından biri haline gelmiştir. Bu ilkeler ilerleyen yüzyıllarda dünya genelinde pek çok devrimci harekete ilham kaynağı olmuştur."
      },
      {
        id: "hist172",
        difficulty: "easy",
        question: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
        options: ["Osman I", "Orhan Bey", "Murad I", "Yıldırım Bayezid"],
        correctIndex: 0,
        explanation: "Osmanlı Devleti'nin kurucusu Osman I (Osman Bey), yaklaşık 1299'da Söğüt merkezli küçük bir Türkmen beyliğini imparatorluğa dönüştürecek sürecin başlatıcısıdır. Hanedan ve imparatorluk onun adını taşımaktadır."
      },
      {
        id: "hist173",
        difficulty: "easy",
        question: "İkinci Dünya Savaşı hangi yılda sona ermiştir?",
        options: ["1943", "1944", "1945", "1946"],
        correctIndex: 2,
        explanation: "İkinci Dünya Savaşı, Mayıs 1945'te Almanya'nın, Eylül 1945'te ise Japonya'nın teslim olmasıyla resmen sona ermiştir. Japonya'nın teslimiyeti, Ağustos 1945'te Hiroshima ve Nagasaki'ye atılan atom bombaları tarafından hızlandırılmıştır."
      },
      {
        id: "hist174",
        difficulty: "medium",
        question: "Magna Carta hangi ülkede ve hangi yılda imzalanmıştır?",
        options: ["Fransa, 1215", "İngiltere, 1215", "İngiltere, 1349", "Almanya, 1356"],
        correctIndex: 1,
        explanation: "Magna Carta (Büyük Şart), İngiliz baronlarının zorlamasıyla Kral John tarafından 1215'te imzalanmıştır. Monarşik iktidarı sınırlayan ilk yazılı anayasal metin olarak kabul edilir ve hukukun üstünlüğü ilkesinin temelini atar."
      },
      {
        id: "hist175",
        difficulty: "medium",
        question: "Hangi antlaşma Birinci Dünya Savaşı'nı resmen sona erdirmiştir?",
        options: ["Lozan Antlaşması", "Versay (Versailles) Antlaşması", "Saint-Germain Antlaşması", "Brest-Litovsk Antlaşması"],
        correctIndex: 1,
        explanation: "Versay Antlaşması, Haziran 1919'da Almanya ile İtilaf Devletleri arasında imzalanarak Birinci Dünya Savaşı'nı resmen sona erdirmiştir. Almanya'ya yüklenen ağır savaş tazminatları ve toprak kayıpları, İkinci Dünya Savaşı'na zemin hazırlayan koşullar arasında sayılmaktadır."
      },
      {
        id: "hist176",
        difficulty: "medium",
        question: "İpek Yolu ticaret ağı hangi iki uç noktayı birbirine bağlıyordu?",
        options: ["Roma ve İskenderiye", "Çin ve Akdeniz/Avrupa", "Hindistan ve Arabistan", "Orta Asya ve Afrika"],
        correctIndex: 1,
        explanation: "İpek Yolu, yaklaşık MÖ 2. yüzyıldan MS 15. yüzyıla dek Çin'i Orta Asya, Orta Doğu ve Akdeniz'e bağlayan ticaret rotaları ağıydı. İpek başta olmak üzere baharat, porselen ve cam gibi mallar; aynı zamanda kültür, din ve teknoloji bu yollarla taşındı."
      },
      {
        id: "hist177",
        difficulty: "easy",
        question: "Mısır piramitleri hangi dönemde inşa edilmiştir?",
        options: ["Orta Krallık döneminde", "Geç Dönem'de", "Yeni Krallık döneminde", "Eski Krallık döneminde"],
        correctIndex: 3,
        explanation: "Büyük piramitler (Giza piramitleri dahil) ağırlıklı olarak Eski Krallık döneminde (MÖ 2686–2181), özellikle 4. hanedan sırasında inşa edilmiştir. Keops Piramidi (Büyük Piramit), yaklaşık MÖ 2560'ta tamamlanmıştır."
      },
      {
        id: "hist178",
        difficulty: "easy",
        question: "Amerikan Bağımsızlık Bildirgesi hangi yılda ilan edilmiştir?",
        options: ["1775", "1776", "1783", "1789"],
        correctIndex: 1,
        explanation: "13 Amerikan kolonisinin Büyük Britanya'dan bağımsızlığını ilan ettiği belge, 4 Temmuz 1776'da Kongre tarafından kabul edilmiştir. Thomas Jefferson'un kaleme aldığı bu tarihi metin, modern demokratik düşüncenin temel belgelerinden biridir."
      },
      {
        id: "hist179",
        difficulty: "hard",
        question: "1962 Küba Füze Krizi nasıl çözüme kavuşmuştur?",
        options: ["NATO'nun askeri müdahalesi", "BM'nin zorunlu arabuluculuğu", "ABD ve SSCB arasında gizli müzakereler ve karşılıklı tavizler", "Küba'nın tek taraflı geri adımı"],
        correctIndex: 2,
        explanation: "13 gün süren kriz, Kennedy ve Kruşçev'in gizli kanallardan yürüttüğü müzakerelerle çözüldü. SSCB, Küba'daki füzeleri geri çekti; ABD ise Türkiye'deki füzelerini kaldırmayı ve Küba'ya saldırmamayı taahhüt etti. Bu kriz, nükleer savaşa en yakın olunan an olarak kabul edilir."
      },
      {
        id: "hist180",
        difficulty: "medium",
        question: "Türk Kurtuluş Savaşı'nın resmî başlangıcı olarak hangi tarih kabul edilir?",
        options: ["30 Ekim 1918", "19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923"],
        correctIndex: 1,
        explanation: "19 Mayıs 1919, Mustafa Kemal Atatürk'ün Samsun'a çıkışı ve Anadolu'da Kurtuluş Savaşı örgütlenmesini başlattığı tarih olarak kabul edilir. Bu tarih bugün 'Atatürk'ü Anma, Gençlik ve Spor Bayramı' olarak kutlanmaktadır."
      },
      {
        id: "hist181",
        difficulty: "easy",
        question: "Matbaa hangi dönemde icat edilmiş ve hangi alanda en büyük etkiyi yaratmıştır?",
        options: ["Orta Çağ; Haçlı Seferleri", "Rönesans; bilginin hızla yayılması ve okuma yazma oranının artması", "Aydınlanma; siyasi devrimler", "Sanayi Devrimi; fabrikacılık"],
        correctIndex: 1,
        explanation: "Johann Gutenberg'in yaklaşık 1450'de geliştirdiği hareketli matbaa, bilgiyi kitlelere ulaştırdı. Reformasyon, Bilimsel Devrim ve Aydınlanma Çağı'nın yayılmasını hızlandırdı; okuryazarlık oranlarını dramatik biçimde artırdı."
      },
      {
        id: "hist182",
        difficulty: "hard",
        question: "Birinci Dünya Savaşı'nın patlak vermesinde tetikleyici olay nedir?",
        options: ["Almanya'nın Fransa'ya saldırması", "Avusturya Arşidükü Franz Ferdinand'ın Saraybosna'da suikaste kurban gitmesi", "Rusya'nın Osmanlı İmparatorluğu'na savaş ilan etmesi", "İngiltere'nin Almanya'ya ültimatom vermesi"],
        correctIndex: 1,
        explanation: "28 Haziran 1914'te Bosnalı Sırp milliyetçi Gavrilo Princip, Avusturya Veliahtı Arşidük Franz Ferdinand ve eşini Saraybosna'da öldürdü. Bu suikast, Avrupa'daki ittifak sistemlerini harekete geçirerek zincirleme savaş ilanlarına ve 1. Dünya Savaşı'nın başlamasına yol açtı."
      },
      {
        id: "hist183",
        difficulty: "medium",
        question: "Rusya'da 1917'de gerçekleşen Ekim Devrimi hangi ideolojiyi iktidara taşımıştır?",
        options: ["Milliyetçilik", "Liberalizm", "Komünizm (Marksizm-Leninizm)", "Faşizm"],
        correctIndex: 2,
        explanation: "Vladimir Lenin önderliğindeki Bolşevikler, Ekim 1917'de iktidarı ele geçirerek dünyanın ilk komünist devletini kurdu. Bu devrim, Sovyet Sosyalist Cumhuriyetler Birliği'nin (SSCB) temelini attı ve 20. yüzyıl siyasetini köklü biçimde etkiledi."
      },
      {
        id: "hist184",
        difficulty: "easy",
        question: "1453'te Konstantinopolis'i fetheden Osmanlı padişahı kimdir?",
        options: ["I. Murad", "II. Mehmed (Fatih Sultan Mehmed)", "I. Selim", "I. Süleyman (Kanuni)"],
        correctIndex: 1,
        explanation: "Fatih Sultan Mehmed, 21 yaşında 29 Mayıs 1453'te Konstantinopolis'i fethetti ve kenti Osmanlı başkenti yaptı. Bu fetih Ortaçağ'ın sonu ve Yeniçağ'ın başlangıcı olarak kabul edilir; Bizans İmparatorluğu da bu tarihle son bulur."
      },
      {
        id: "hist185",
        difficulty: "medium",
        question: "Hangi antlaşmayla Osmanlı İmparatorluğu resmen sona ermiş ve Türkiye'nin uluslararası sınırları belirlenmiştir?",
        options: ["Sevr Antlaşması (1920)", "Lozan Antlaşması (1923)", "Mondros Ateşkes Antlaşması (1918)", "Mudanya Mütarekesi (1922)"],
        correctIndex: 1,
        explanation: "24 Temmuz 1923'te imzalanan Lozan Antlaşması, Türkiye Cumhuriyeti'nin uluslararası sınırlarını belirlemiş ve Osmanlı İmparatorluğu'nun hukuki mirasını resmen tasfiye etmiştir. Bu antlaşma Türk Kurtuluş Savaşı'nın siyasi zaferinin belgesidir."
      },
      {
        id: "hist186",
        difficulty: "medium",
        question: "Ortaçağ Avrupası'nda Haçlı Seferleri'nin temel amacı nedir?",
        options: ["Doğu ticaret yollarını ele geçirmek", "Kutsal Topraklar'ı (Kudüs) Müslümanlardan geri almak", "Konstantinopolis'i fethetmek", "Moğol istilasını durdurmak"],
        correctIndex: 1,
        explanation: "1095'te Papa II. Urban'ın çağrısıyla başlayan Haçlı Seferleri, öncelikle Müslüman egemenliğindeki Kudüs ve Kutsal Topraklar'ı Hristiyan denetimine almayı hedefliyordu. 1096-1291 yılları arasında sekiz büyük sefer düzenlenmiş; bu seferler siyasi, ticari ve kültürel açıdan kalıcı sonuçlar doğurmuştur."
      },
      {
        id: "hist187",
        difficulty: "hard",
        question: "Afrika'da hiçbir zaman tam anlamıyla sömürgeleştirilmemiş ve Avrupa'ya karşı zafer kazanmış ülke hangisidir?",
        options: ["Nijerya", "Güney Afrika", "Etiyopya", "Kenya"],
        correctIndex: 2,
        explanation: "Etiyopya, 1896'daki Adwa Savaşı'nda İtalya'yı yenerek Avrupa sömürgeciliğine direnen Afrika'nın en başarılı ülkesi olmuştur. 1936-1941 yılları arasında kısa süreli İtalyan işgaline maruz kalsa da tam sömürgeleştirilmekten kaçınan nadir Afrika devletlerinden biridir."
      },
      {
        id: "hist188",
        difficulty: "medium",
        question: "Büyük İskender'in imparatorluğu en geniş sınırlarına hangi dönemde ulaşmıştır?",
        options: ["MÖ 336 (tahta çıkışı)", "MÖ 330 (Pers İmparatorluğu'nun düşüşü)", "MÖ 326 (Hindistan seferi)", "MÖ 323 (ölümünden önce)"],
        correctIndex: 3,
        explanation: "Büyük İskender, MÖ 323'teki ölümünde en geniş sınırlarına ulaşmış imparatorluğunun başında bulunuyordu. Bu tarihte Makedonya'dan Hindistan'ın kuzeybatısına dek uzanan devasa bir coğrafya İskender'in hakimiyetindeydi."
      },
      {
        id: "hist189",
        difficulty: "easy",
        question: "İspanya'nın Amerika'ya gelişi sırasında en büyük ve gelişmiş Orta Amerika medeniyeti hangisiydi?",
        options: ["Maya", "Aztek", "İnka", "Olmek"],
        correctIndex: 1,
        explanation: "1519'da Hernán Cortés'in gelişi sırasında Aztek İmparatorluğu, bugünkü Meksika'da Tenochtitlan başkentiyle güçlü ve büyük bir devletti. 1521'de İspanyollar tarafından yıkılmadan önce nüfusu milyonları bulan organize bir imparatorluktu."
      },
      {
        id: "hist190",
        difficulty: "hard",
        question: "Gutenberg'in matbaa makinesini geliştirdiği dönemde kullandığı temel teknik yenilik nedir?",
        options: ["Ahşap blok baskı", "Hareketli metal harfler ve baskı presi", "Elektrikli baskı sistemi", "Renkli mürekkep kullanımı"],
        correctIndex: 1,
        explanation: "Gutenberg'in yaklaşık 1450'deki temel yeniliği, tek tek dökülebilen ve yeniden kullanılabilen metal harfleri (movable type) bir baskı presiyle birleştirmesidir. Bu sistem, el yazımı kitap üretiminin yerini alarak bilginin kitlesel yayılımını mümkün kıldı."
      }
    ]
  },
  {
    id: "geography",
    name: "Coğrafya",
    icon: "map-pin",
    color: "#06b6d4",
    gradient: ["#06b6d4", "#0284c7"],
    image: require("../assets/images/category_geography.png"),
    questions: [
      {
        id: "geo1",
        difficulty: "easy",
        question: "Türkiye'nin yüzölçümü en büyük gölü hangisidir?",
        options: ["Beyşehir Gölü", "Tuz Gölü", "Eğirdir Gölü", "Van Gölü"],
        correctIndex: 3,
        explanation: "Van Gölü, yaklaşık 3.713 km² yüzölçümüyle Türkiye'nin en büyük gölüdür. Doğu Anadolu'da bulunan bu sodalı göl, aynı zamanda dünyanın en büyük sodalı göllerinden biridir."
      },
      {
        id: "geo2",
        difficulty: "easy",
        question: "Dünyanın en büyük adası hangisidir?",
        options: ["İzlanda", "Madagaskar", "Yeni Gine", "Grönland"],
        correctIndex: 3,
        explanation: "Grönland, yaklaşık 2.166.000 km² yüzölçümüyle dünyanın en büyük adasıdır. Avustralya, kıta olarak sınıflandırıldığı için ada kategorisine dahil edilmez."
      },
      {
        id: "geo3",
        difficulty: "easy",
        question: "Panama Kanalı hangi iki okyanusu birleştirir?",
        options: ["Atlantik – Hint Okyanusu", "Pasifik – Hint Okyanusu", "Atlantik – Pasifik Okyanusu", "Kuzey Buz – Pasifik Okyanusu"],
        correctIndex: 2,
        explanation: "Panama Kanalı, Orta Amerika'daki Panama'dan geçerek Atlantik ile Pasifik okyanusu arasındaki deniz yolunu 8.000 km kısaltmaktadır. 1914'te açılmıştır."
      },
      {
        id: "geo4",
        difficulty: "easy",
        question: "Türkiye'nin yüzölçümü bakımından en büyük ili hangisidir?",
        options: ["Erzurum", "Sivas", "Van", "Konya"],
        correctIndex: 3,
        explanation: "Konya, yaklaşık 38.257 km² yüzölçümüyle Türkiye'nin en büyük ilidir. İç Anadolu'da yer alan Konya, tarımsal üretim açısından da ülkenin önde gelen illeri arasındadır."
      },
      {
        id: "geo5",
        difficulty: "easy",
        question: "Hem Avrupa hem de Afrika'da toprağı bulunan ülke hangisidir?",
        options: ["Portekiz", "Fransa", "İtalya", "İspanya"],
        correctIndex: 3,
        explanation: "İspanya, Kuzey Afrika'daki Ceuta ve Melilla özerk şehirleri aracılığıyla hem Avrupa hem de Afrika kıtasında toprağa sahiptir. Fransa da teknik olarak Fransız Güyanası gibi denizaşırı topraklarla çok kıtalıdır."
      },
      {
        id: "geo6",
        difficulty: "easy",
        question: "Akdeniz'in en büyük adası hangisidir?",
        options: ["Kıbrıs", "Korsika", "Sardunya", "Sicilya"],
        correctIndex: 3,
        explanation: "Sicilya, yaklaşık 25.711 km² yüzölçümüyle Akdeniz'in en büyük adasıdır. İtalya'ya ait olan adanın başkenti Palermo'dur."
      },
      {
        id: "geo7",
        difficulty: "easy",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Tuna", "Ren", "Ural", "Volga"],
        correctIndex: 3,
        explanation: "Volga Nehri, yaklaşık 3.530 km uzunluğuyla Avrupa'nın en uzun nehridir. Rusya'dan geçerek Hazar Denizi'ne dökülen Volga, tarihsel ve ekonomik açıdan büyük önem taşır."
      },
      {
        id: "geo8",
        difficulty: "easy",
        question: "Japonya kaç adadan oluşur (resmî kayda göre yaklaşık)?",
        options: ["4", "100", "1.000", "6.852"],
        correctIndex: 3,
        explanation: "Japonya Ulaştırma Bakanlığı'na göre ülke yaklaşık 6.852 adadan oluşmaktadır. Honshu, Kyushu, Shikoku ve Hokkaido dört ana büyük adadır; geri kalanı küçük adalardır."
      },
      {
        id: "geo9",
        difficulty: "easy",
        question: "Dünyanın tatlı su rezervlerinin yaklaşık yüzde kaçı Antarktika'dadır?",
        options: ["%30", "%50", "%70", "%90"],
        correctIndex: 2,
        explanation: "Antarktika buz tabakaları ve buz örtüsü, dünyanın toplam tatlı su rezervinin yaklaşık %70'ini barındırmaktadır. Bu nedenle Antarktika, küresel iklim ve su kaynakları açısından hayati öneme sahiptir."
      },
      {
        id: "geo10",
        difficulty: "easy",
        question: "Türkiye'nin en uzun kıyı şeridine sahip olduğu deniz hangisidir?",
        options: ["Karadeniz", "Marmara Denizi", "Ege Denizi", "Akdeniz"],
        correctIndex: 2,
        explanation: "Türkiye, yaklaşık 2.800 km kıyı şeridiyle en uzun kıyıyı Ege Denizi'nde sahiptir. Bu durum kısmen Ege kıyısının girintili-çıkıntılı yapısından ve çok sayıda yarımadadan kaynaklanmaktadır."
      },
      {
        id: "geo11",
        difficulty: "easy",
        question: "Dünyanın en derin gölü hangisidir?",
        options: ["Hazar Gölü", "Süperior Gölü", "Baykal Gölü", "Titicaca Gölü"],
        correctIndex: 2,
        explanation: "Sibirya'daki Baykal Gölü, yaklaşık 1.642 metre derinliğiyle dünyanın en derin gölüdür. Aynı zamanda dünyanın en büyük tatlı su rezervuarını barındırır."
      },
      {
        id: "geo12",
        difficulty: "easy",
        question: "Türkiye kaç komşu ülkeyle sınırı bulunur?",
        options: ["5", "6", "7", "8"],
        correctIndex: 3,
        explanation: "Türkiye; Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak ve Suriye olmak üzere 8 ülkeyle kara sınırına sahiptir."
      },
      {
        id: "geo13",
        difficulty: "easy",
        question: "Hangi kıta 'Karanlık Kıta' olarak da bilinir?",
        options: ["Asya", "Güney Amerika", "Afrika", "Avustralya"],
        correctIndex: 2,
        explanation: "Afrika, özellikle Avrupalı kaşiflerin kıtanın iç kesimlerini tanımlamadığı dönemde 'Karanlık Kıta' olarak anılmıştır. Bu isim, kıtanın keşfedilmemiş derinliklerini simgeliyordu."
      },
      {
        id: "geo14",
        difficulty: "easy",
        question: "Dünyanın en büyük ülkesi hangisidir?",
        options: ["Kanada", "Çin", "Amerika Birleşik Devletleri", "Rusya"],
        correctIndex: 3,
        explanation: "Rusya, yaklaşık 17,1 milyon km² yüzey alanıyla dünyanın en büyük ülkesidir. 11 farklı saat diliminde yer alan Rusya, hem Avrupa'nın hem de Asya'nın büyük bölümünü kapsar."
      },
      {
        id: "geo15",
        difficulty: "easy",
        question: "Nil Nehri hangi ülkeden geçmez?",
        options: ["Mısır", "Sudan", "Etiyopya", "Nijerya"],
        correctIndex: 3,
        explanation: "Nil Nehri; Uganda, Tanzania, Kenya, Etiyopya, Sudan ve Mısır'dan geçerek Akdeniz'e dökülür. Nijerya ise Batı Afrika'da yer almakta olup Nil'in havzasında bulunmamaktadır."
      },
      {
        id: "geo16",
        difficulty: "easy",
        question: "Hangi dağ zinciri Avrupa ile Asya'yı ayırır?",
        options: ["Alpler", "Kafkasya", "Ural Dağları", "Himalayalar"],
        correctIndex: 2,
        explanation: "Ural Dağları, geleneksel olarak Avrupa ile Asya kıtası arasındaki sınırı belirler. Rusya'nın batısında yer alan bu sıradağlar, coğrafi açıdan iki kıtayı birbirinden ayırır."
      },
      {
        id: "geo17",
        difficulty: "easy",
        question: "Dünya'nın en büyük yarımadası hangisidir?",
        options: ["Arabistan Yarımadası", "Hindistan Yarımadası", "Skandinav Yarımadası", "Antarktika Yarımadası"],
        correctIndex: 0,
        explanation: "Arabistan Yarımadası, yaklaşık 3,2 milyon km² yüzey alanıyla dünyanın en büyük yarımadasıdır. Suudi Arabistan, Yemen, Umman, BAE, Katar, Bahreyn ve Kuveyt bu yarımadada yer alır."
      },
      {
        id: "geo18",
        difficulty: "easy",
        question: "Hangi ülke hem Avrupa hem de Okyanusya'ya coğrafi olarak yakındır?",
        options: ["Yeni Zelanda", "Endonezya", "Papua Yeni Gine", "Filipinler"],
        correctIndex: 1,
        explanation: "Endonezya, Güneydoğu Asya'da konumlanmış 17.000'den fazla adadan oluşan bir takımadalar ülkesidir. Asya ile Avustralya/Okyanusya arasında köprü konumundadır."
      },
      {
        id: "geo19",
        difficulty: "easy",
        question: "Dünya'nın en yüksek başkenti hangisidir?",
        options: ["Quito", "La Paz", "Thimphu", "Addis Ababa"],
        correctIndex: 1,
        explanation: "La Paz (Bolivya), yaklaşık 3.640 metre yüksekliğiyle dünyanın en yüksek idari başkentidir. Anayasal başkent ise Sucre'dir. Yüksek rakımı nedeniyle ziyaretçiler yükseklik hastalığı yaşayabilir."
      },
      {
        id: "geo20",
        difficulty: "easy",
        question: "Türkiye'nin en doğudaki şehri hangisidir?",
        options: ["Van", "Ağrı", "Iğdır", "Hakkari"],
        correctIndex: 2,
        explanation: "Iğdır, Türkiye'nin en doğusunda yer alan illerden biridir. Ermenistan, Azerbaycan (Nahçıvan) ve İran sınırlarına komşu olan bu il, stratejik bir coğrafi konuma sahiptir."
      },
      {
        id: "geo21",
        difficulty: "easy",
        question: "Japonya kaç adadan oluşur?",
        options: ["Yaklaşık 1000", "Yaklaşık 3000", "Yaklaşık 6800", "Yaklaşık 10000"],
        correctIndex: 2,
        explanation: "Japonya, yaklaşık 6.800 adadan oluşan bir takımadalar ülkesidir. Ancak nüfusun büyük çoğunluğu dört ana adada (Honshu, Hokkaido, Kyushu ve Shikoku) yaşamaktadır."
      },
      {
        id: "geo22",
        difficulty: "easy",
        question: "Dünyanın en büyük gölü hangisidir?",
        options: ["Baykal Gölü", "Süperior Gölü", "Victoria Gölü", "Hazar Gölü"],
        correctIndex: 3,
        explanation: "Hazar Gölü (Hazar Denizi), yaklaşık 371.000 km² yüzey alanıyla dünyanın en büyük kapalı su kütlesidir. Çevresinde Rusya, Kazakistan, Türkmenistan, İran ve Azerbaycan yer alır."
      },
      {
        id: "geo23",
        difficulty: "easy",
        question: "Afrika'nın en büyük ülkesi hangisidir?",
        options: ["Nijerya", "Demokratik Kongo Cumhuriyeti", "Sudan", "Cezayir"],
        correctIndex: 3,
        explanation: "Cezayir, yaklaşık 2,38 milyon km² yüzey alanıyla Afrika'nın ve Arap dünyasının en büyük ülkesidir. Büyük bölümü Sahra Çölü'nden oluşmaktadır."
      },
      {
        id: "geo24",
        difficulty: "easy",
        question: "Hangi şehir en fazla ülkeyle komşudur?",
        options: ["Brüksel", "Cenova", "Frankfurt", "Viyana"],
        correctIndex: 0,
        explanation: "Brüksel, Belçika'nın başkenti olup Hollanda, Fransa, Lüksemburg ve Almanya ile sınır komşusudur. Aynı zamanda NATO ve AB'nin merkezi olarak uluslararası öneme sahiptir."
      },
      {
        id: "geo25",
        difficulty: "easy",
        question: "Türkiye'de kaç il bulunmaktadır?",
        options: ["73", "77", "81", "85"],
        correctIndex: 2,
        explanation: "Türkiye, idari açıdan 81 ile bölünmüştür. Her ilin bir valisi ve belediye başkanı bulunur. En kalabalık il İstanbul olup nüfusu 15 milyonu aşmaktadır."
      },
      {
        id: "geo26",
        difficulty: "easy",
        question: "Hangi ülke 'Ateş Ülkesi' anlamına gelen Tierra del Fuego'ya ev sahipliği yapar?",
        options: ["Brezilya", "Şili ve Arjantin", "Peru", "Ekvador"],
        correctIndex: 1,
        explanation: "Tierra del Fuego, Güney Amerika'nın en güneyindeki takımadalar bölgesidir ve Şili ile Arjantin arasında paylaşılmaktadır. Macellan Boğazı'nın güneyinde yer alır."
      },
      {
        id: "geo27",
        difficulty: "easy",
        question: "Ege Denizi hangi iki ülke arasında yer alır?",
        options: ["Türkiye ve Bulgaristan", "Türkiye ve Yunanistan", "Türkiye ve İtalya", "Yunanistan ve İtalya"],
        correctIndex: 1,
        explanation: "Ege Denizi, Türkiye ile Yunanistan arasında yer alır. Bu deniz, her iki ülke arasında zaman zaman egemenlik sorunlarına konu olan çok sayıda ada barındırır."
      },
      {
        id: "geo28",
        difficulty: "easy",
        question: "Dünyanın en kısa kıyı şeridine sahip ülke hangisidir?",
        options: ["Monako", "Vatikan", "Nauru", "Tuvalu"],
        correctIndex: 0,
        explanation: "Monako, yaklaşık 4 km kıyı şeridiyle dünyanın en kısa deniz kıyısına sahip ülkesidir. Fransa'ya komşu olan bu küçük prenslik, yalnızca 2 km²'lik alanıyla da dünyanın ikinci en küçük ülkesidir."
      },
      {
        id: "geo29",
        difficulty: "easy",
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Süphan Dağı", "Erciyes Dağı", "Ağrı Dağı", "Cilo Dağı"],
        correctIndex: 2,
        explanation: "Ağrı Dağı, 5.137 metre yüksekliğiyle Türkiye'nin en yüksek dağıdır. Doğu Anadolu'da İran ve Ermenistan sınırı yakınında yer alır ve Nuh'un Gemisi efsanesiyle de bilinir."
      },
      {
        id: "geo30",
        difficulty: "easy",
        question: "Hangi kıta tamamen Güney Yarımküre'de yer alır?",
        options: ["Afrika", "Avustralya", "Asya", "Güney Amerika"],
        correctIndex: 1,
        explanation: "Avustralya/Okyanusya ana kıtası, tamamen Güney Yarımküre'de yer alır. Afrika ve Güney Amerika kıtaları ise hem Kuzey hem de Güney Yarımküre'ye uzanmaktadır."
      },
      {
        id: "geo31",
        difficulty: "easy",
        question: "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
        options: ["Ege ve Akdeniz", "Karadeniz ve Marmara Denizi", "Marmara ve Ege Denizi", "Karadeniz ve Ege Denizi"],
        correctIndex: 1,
        explanation: "İstanbul Boğazı (Bosphorus), Karadeniz ile Marmara Denizi'ni birbirine bağlar. Çanakkale Boğazı ise Marmara ile Ege'yi birleştirir. Her iki boğaz birlikte Karadeniz'i Akdeniz'e bağlar."
      },
      {
        id: "geo32",
        difficulty: "easy",
        question: "Türkiye'nin başkenti hangi şehirdir?",
        options: ["İstanbul", "İzmir", "Ankara", "Bursa"],
        correctIndex: 2,
        explanation: "Ankara, 13 Ekim 1923'te Türkiye Cumhuriyeti'nin başkenti ilan edilmiştir. Atatürk, Kurtuluş Savaşı sırasında stratejik açıdan merkezi bir konum olan Ankara'yı başkent seçmiştir."
      },
      {
        id: "geo33",
        difficulty: "easy",
        question: "Güney Amerika'nın en yüksek dağı hangisidir?",
        options: ["Chimborazo", "Huascarán", "Aconcagua", "Monte Fitz Roy"],
        correctIndex: 2,
        explanation: "Aconcagua, 6.961 metre yüksekliğiyle Güney Amerika'nın ve Batı Yarımküre'nin en yüksek dağıdır. Arjantin'in Mendoza eyaletinde yer alır ve Andes Dağları'nın bir parçasıdır."
      },
      {
        id: "geo34",
        difficulty: "easy",
        question: "Asya'nın en uzun nehri hangisidir?",
        options: ["Ganj", "Mekong", "İndus", "Yangtze"],
        correctIndex: 3,
        explanation: "Yangtze (Chang Jiang), yaklaşık 6.300 km uzunluğuyla Asya'nın en uzun nehridir. Çin'i baştan başa katederek Doğu Çin Denizi'ne dökülür ve dünyanın üçüncü uzun nehri olarak kayıt altındadır."
      },
      {
        id: "geo35",
        difficulty: "easy",
        question: "Hindistan'ın başkenti hangi şehirdir?",
        options: ["Mumbai", "Kolkata", "Yeni Delhi", "Bangalore"],
        correctIndex: 2,
        explanation: "Yeni Delhi (New Delhi), Hindistan'ın başkentidir. Delhi metropol alanının bir parçası olan Yeni Delhi, İngiliz döneminde 1911'de başkent ilan edilmiş ve ülkenin yönetim merkezi olmuştur."
      },
      {
        id: "geo36",
        difficulty: "easy",
        question: "Japonya'nın başkenti hangi şehirdir?",
        options: ["Osaka", "Kyoto", "Nagoya", "Tokyo"],
        correctIndex: 3,
        explanation: "Tokyo, Japonya'nın başkenti ve dünyanın en kalabalık metropol alanlarından biridir. Yaklaşık 37 milyonluk büyük Tokyo nüfusuyla ekonomi, teknoloji ve kültür açısından küresel bir merkezdir."
      },
      {
        id: "geo37",
        difficulty: "easy",
        question: "Dünyanın en geniş delta hangisidir?",
        options: ["Nil Deltası", "Amazon Deltası", "Bengal Deltası (Ganj-Brahmaputra)", "Mississippi Deltası"],
        correctIndex: 2,
        explanation: "Ganj ve Brahmaputra nehirlerinin oluşturduğu Bengal Deltası, yaklaşık 105.000 km² yüzölçümüyle dünyanın en büyük deltasıdır. Bangladeş ve Hindistan arasında uzanır; Sundarbans yağmur ormanlarına ev sahipliği yapar."
      },
      {
        id: "geo38",
        difficulty: "medium",
        question: "Türkiye kaç farklı denizle çevrilidir?",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        explanation: "Türkiye; kuzeyinde Karadeniz, batısında Ege Denizi ve güneyinde Akdeniz olmak üzere 3 denizle çevrilidir. İstanbul ve Çanakkale Boğazları aracılığıyla Marmara Denizi de bu üçgenin ortasında yer alır."
      },
      {
        id: "geo39",
        difficulty: "medium",
        question: "Amazon Nehri hangi okyanusa dökülür?",
        options: ["Pasifik Okyanusu", "Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
        correctIndex: 1,
        explanation: "Amazon Nehri, Güney Amerika'yı baştan başa geçerek Brezilya'nın kuzeydoğu kıyısından Atlantik Okyanusu'na dökülür. Deşarj hacmi açısından dünyanın birinci nehridir; dakikada yaklaşık 300 milyon litre tatlı su taşır."
      },
      {
        id: "geo40",
        difficulty: "medium",
        question: "Norveç'in başkenti hangi şehirdir?",
        options: ["Bergen", "Trondheim", "Stavanger", "Oslo"],
        correctIndex: 3,
        explanation: "Oslo, Norveç'in başkenti ve en büyük şehridir. Oslofjord kıyısında kurulu olan şehir, yüksek yaşam standardı, doğa güzellikleri ve Nobel Barış Ödülü töreniyle ünlüdür."
      },
      {
        id: "geo41",
        difficulty: "medium",
        question: "Mısır'ın başkenti hangi şehirdir?",
        options: ["İskenderiye", "Giza", "Kahire", "Luksor"],
        correctIndex: 2,
        explanation: "Kahire (El-Kahire), Mısır'ın başkenti ve Afrika'nın en kalabalık şehridir. Nil Nehri kıyısında yer alan Kahire, Orta Doğu ve Kuzey Afrika'nın kültürel ve siyasi merkezi olarak öne çıkar."
      },
      {
        id: "geo42",
        difficulty: "medium",
        question: "Arjantin'in başkenti hangi şehirdir?",
        options: ["São Paulo", "Montevideo", "Santiago", "Buenos Aires"],
        correctIndex: 3,
        explanation: "Buenos Aires, Arjantin'in başkenti ve en büyük şehridir. La Plata Nehri kıyısında kurulan şehir, Latin Amerika'nın en önemli kültür ve ekonomi merkezlerinden biri olarak öne çıkmaktadır."
      },
      {
        id: "geo43",
        difficulty: "medium",
        question: "Tibet Platosu neden 'dünyanın çatısı' olarak anılır?",
        options: ["Kar örtüsüyle en uzun süre kaplı olduğu için", "En yüksek ortalama rakıma sahip kara kütlesi olduğu için", "Dünya'nın merkezine en yakın nokta olduğu için", "En fazla buzul barındırdığı için"],
        correctIndex: 1,
        explanation: "Tibet Platosu, ortalama 4.500 metre rakımuyla dünyanın en yüksek platosudur ve bu nedenle 'dünyanın çatısı' olarak anılır. Himalayalar, Karakorum ve diğer büyük dağ silsilelerine ev sahipliği yapar."
      },
      {
        id: "geo44",
        difficulty: "medium",
        question: "Karadeniz'e dökülen Avrupa'nın en uzun nehri hangisidir?",
        options: ["Ren Nehri", "Tuna Nehri", "Elbe Nehri", "Volga Nehri"],
        correctIndex: 1,
        explanation: "Tuna Nehri (Danube), yaklaşık 2.860 km uzunluğuyla 10 ülkenin topraklarından geçerek Karadeniz'e dökülen önemli bir nehirdir. Viyana, Budapeşte ve Belgrad gibi Avrupa başkentlerini birbirine bağlar."
      },
      {
        id: "geo45",
        difficulty: "medium",
        question: "Ege Denizi'nin en büyük adası hangi ülkeye aittir?",
        options: ["Türkiye", "Yunanistan", "İtalya", "Kıbrıs"],
        correctIndex: 1,
        explanation: "Girit (Crete), yaklaşık 8.336 km² yüzölçümüyle Ege Denizi'nin en büyük adasıdır ve Yunanistan'a aittir. Avrupa medeniyetinin en eski merkezlerinden biri olan Girit, Minos medeniyetine de ev sahipliği yapmıştır."
      },
      {
        id: "geo46",
        difficulty: "medium",
        question: "Hangi şehir hem Avrupa hem de Asya kıtasında yer alır?",
        options: ["Kahire", "Moskova", "İstanbul", "Tahran"],
        correctIndex: 2,
        explanation: "İstanbul, İstanbul Boğazı'nın iki yakasına yayılmasıyla hem Avrupa hem Asya kıtasında toprakları bulunan dünyanın tek büyük şehridir. Bu eşsiz coğrafi konumu İstanbul'u tarih boyunca stratejik bir merkez kılmıştır."
      },
      {
        id: "geo47",
        difficulty: "medium",
        question: "Sahra Çölü kaç ülkeyi kapsamaktadır?",
        options: ["6 ülke", "9 ülke", "11 ülke", "14 ülke"],
        correctIndex: 2,
        explanation: "Sahra Çölü, Afrika'nın kuzeyinde 9,2 milyon km² ile sıcak çöllerin en büyüğüdür. Fas, Cezayir, Tunus, Libya, Mısır, Sudan, Çad, Nijer, Mali, Moritanya ve Batı Sahra olmak üzere 11 ülkeyi kapsar."
      },
      {
        id: "geo48",
        difficulty: "medium",
        question: "Dünyanın en derin gölü hangisidir?",
        options: ["Hazar Gölü", "Süperior Gölü", "Titicaca Gölü", "Baykal Gölü"],
        correctIndex: 3,
        explanation: "Baykal Gölü, Rusya'nın Sibirya bölgesinde yer alır ve 1.637 metre derinliğiyle dünyanın en derin gölüdür. Aynı zamanda dünyanın en büyük tatlı su rezervidir; yüzey tatlı sularının yaklaşık %20'sini barındırır."
      },
      {
        id: "geo49",
        difficulty: "medium",
        question: "Orta Doğu'nun en uzun nehri hangisidir?",
        options: ["Dicle Nehri", "Fırat Nehri", "Ürdün Nehri", "Asi Nehri"],
        correctIndex: 1,
        explanation: "Fırat Nehri, Türkiye'den doğarak Suriye ve Irak'tan geçen ve yaklaşık 2.800 km uzunluğuyla Orta Doğu'nun en uzun nehridir. Dicle ile birleşerek Şattülarap'ı oluşturur ve Basra Körfezi'ne dökülür."
      },
      {
        id: "geo50",
        difficulty: "medium",
        question: "Dünyanın en büyük ülkesi yüzölçümü bakımından hangisidir?",
        options: ["Kanada", "Çin", "Amerika Birleşik Devletleri", "Rusya"],
        correctIndex: 3,
        explanation: "Rusya, yaklaşık 17,1 milyon km² yüzölçümüyle dünyanın en büyük ülkesidir. Avrupa ve Asya'ya yayılan bu ülke, 11 saat dilimini kapsar ve dünyanın toplam kara yüzeyinin yaklaşık %11'ini oluşturur."
      },
      {
        id: "geo51",
        difficulty: "medium",
        question: "Türkiye'nin coğrafi bölge sayısı kaçtır?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Türkiye, 1941 Coğrafya Kongresi'nde belirlenen 7 coğrafi bölgeye ayrılmıştır: Marmara, Ege, Akdeniz, İç Anadolu, Karadeniz, Doğu Anadolu ve Güneydoğu Anadolu. Bu bölgeler iklim, bitki örtüsü ve ekonomik yapı bakımından farklılık gösterir."
      },
      {
        id: "geo52",
        difficulty: "medium",
        question: "Dünyanın en uzun dağ silsilesi hangisidir?",
        options: ["Himalayalar", "And Dağları", "Kayalık Dağları", "Alpler"],
        correctIndex: 1,
        explanation: "And Dağları (Andes), Güney Amerika'nın batı kıyısı boyunca yaklaşık 7.000 km uzanan dünyanın en uzun kıtaiçi dağ silsilesidir. Bolivya, Peru, Kolombiya ve Arjantin'den geçen bu sıradağlar birçok aktif volkan barındırır."
      },
      {
        id: "geo53",
        difficulty: "medium",
        question: "Hangi ülke dünyanın en uzun kıyı şeridine sahiptir?",
        options: ["Norveç", "Avustralya", "Rusya", "Kanada"],
        correctIndex: 3,
        explanation: "Kanada, 202.080 km'lik kıyı şeridiyle dünyanın en uzun kıyı şeridine sahip ülkesidir. Karmaşık fiyordları, binlerce adası ve geniş sahil hattıyla bu rekor kolaylıkla açıklanmaktadır."
      },
      {
        id: "geo54",
        difficulty: "medium",
        question: "Amazon Nehri hangi okyanus/denize dökülür?",
        options: ["Büyük Okyanus", "Hint Okyanusu", "Atlantik Okyanusu", "Karayip Denizi"],
        correctIndex: 2,
        explanation: "Amazon Nehri, Brezilya'nın kuzey kıyısından Atlantik Okyanusu'na dökülür. Su debisi açısından dünyanın en büyük nehri olan Amazon, ortalama akış hızıyla Nil, Mississippi ve Yangtze'nin toplam debisinden fazla su taşır."
      },
      {
        id: "geo55",
        difficulty: "medium",
        question: "Hangi kıta en fazla ülke sayısına ev sahipliği yapar?",
        options: ["Asya", "Avrupa", "Afrika", "Amerika"],
        correctIndex: 2,
        explanation: "Afrika, 54 tanınan bağımsız devletiyle dünyanın en fazla ülke barındıran kıtasıdır. Bu sayı, dünya ülkelerinin yaklaşık %28'ine karşılık gelir. Nüfus ve yüzölçümü bakımından da küresel ölçekte kritik bir kıtadır."
      },
      {
        id: "geo56",
        difficulty: "medium",
        question: "Nil Nehri hangi denize/okyanus dökülür?",
        options: ["Kızıldeniz", "Hint Okyanusu", "Akdeniz", "Karadeniz"],
        correctIndex: 2,
        explanation: "Nil Nehri, Mısır'dan geçerek Akdeniz'e dökülür. Yaklaşık 6.650 km uzunluğuyla dünyanın en uzun nehri unvanını koruyan Nil, kadim Mısır uygarlığının can damarı olmuştur."
      },
      {
        id: "geo57",
        difficulty: "medium",
        question: "Dünyanın en büyük ada ülkesi (ada üzerinde kurulu en kalabalık ülke) hangisidir?",
        options: ["İzlanda", "Sri Lanka", "Madagaskar", "Endonezya"],
        correctIndex: 3,
        explanation: "Endonezya, 17.000'den fazla adadan oluşan ve 275 milyonu aşkın nüfusuyla dünyanın en büyük ada devletidir. Aynı zamanda dünyanın en fazla Müslüman nüfusunu barındıran ülkedir."
      },
      {
        id: "geo58",
        difficulty: "medium",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Ren", "Tuna", "Volga", "Dinyeper"],
        correctIndex: 2,
        explanation: "Volga Nehri, yaklaşık 3.690 km uzunluğuyla Avrupa'nın en uzun nehridir. Rusya topraklarından geçerek Hazar Denizi'ne dökülen Volga, Rus kültüründe 'Ana Nehir' olarak derin bir sembolik değer taşır."
      },
      {
        id: "geo59",
        difficulty: "medium",
        question: "Buenos Aires hangi ülkenin başkentidir?",
        options: ["Şili", "Uruguay", "Brezilya", "Arjantin"],
        correctIndex: 3,
        explanation: "Buenos Aires, Arjantin'in başkenti ve en büyük şehridir. Yaklaşık 15 milyon kişilik metropolitan nüfusuyla Güney Amerika'nın en büyük şehirlerinden biri olan Buenos Aires, Latin Amerika'nın önemli kültür ve ekonomi merkezlerinden biridir."
      },
      {
        id: "geo60",
        difficulty: "medium",
        question: "Hangi ülke hem Asya hem de Avrupa kıtasında topraklara sahiptir?",
        options: ["Ukrayna", "İran", "Türkiye", "Suriye"],
        correctIndex: 2,
        explanation: "Türkiye, Anadolu yarımadasıyla Asya'da, Trakya bölgesiyle de Avrupa'da topraklara sahiptir. Asya'daki bölüm yüzölçümün yaklaşık %97'sini oluştururken nüfusun büyük çoğunluğu da Asya yakasında yaşar."
      },
      {
        id: "geo61",
        difficulty: "medium",
        question: "Dünyanın en büyük çölü hangisidir?",
        options: ["Kalahari", "Gobi", "Sahra", "Antarktika"],
        correctIndex: 3,
        explanation: "Antarktika, yaklaşık 14,2 milyon km² alanıyla dünyanın en büyük çölüdür. 'Çöl' tanımı yağış miktarıyla belirlenir; Antarktika çok az yağış aldığından soğuk çöl sayılır. Sahra ise sıcak çöller arasında en büyüğüdür."
      },
      {
        id: "geo62",
        difficulty: "medium",
        question: "Türkiye'nin başkenti neresidir?",
        options: ["İstanbul", "İzmir", "Ankara", "Bursa"],
        correctIndex: 2,
        explanation: "Ankara, 1923'te Türkiye Cumhuriyeti'nin ilanıyla birlikte başkent olmuştur. Anadolu'nun merkezine yakın konumuyla seçilen şehir, İstanbul'dan sonra nüfus bakımından Türkiye'nin ikinci büyük kentidir."
      },
      {
        id: "geo63",
        difficulty: "medium",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Tuna", "Ren", "Volga", "Loire"],
        correctIndex: 2,
        explanation: "Volga Nehri, yaklaşık 3.531 km uzunluğuyla Avrupa'nın en uzun nehrididir. Rusya topraklarında doğan Volga, Hazar Denizi'ne dökülür. Rusya'nın 'ulusal nehri' olarak da anılan Volga, ekonomik ve tarihsel açıdan büyük önem taşır."
      },
      {
        id: "geo64",
        difficulty: "medium",
        question: "Japonya'nın başkenti neresidir?",
        options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
        correctIndex: 3,
        explanation: "Tokyo, Japonya'nın başkenti ve dünyanın en kalabalık şehir alanlarından biridir. Büyük Tokyo alanının nüfusu 37 milyonu aşar. Çağdaş teknoloji ile geleneksel Japon kültürünü bir arada barındıran şehir, küresel bir finans ve kültür merkezidir."
      },
      {
        id: "geo65",
        difficulty: "medium",
        question: "Dünyanın en derin gölü hangisidir?",
        options: ["Hazar Gölü", "Victoria Gölü", "Titicaca Gölü", "Baykal Gölü"],
        correctIndex: 3,
        explanation: "Rusya'da yer alan Baykal Gölü, yaklaşık 1.642 m maksimum derinliğiyle dünyanın en derin gölüdür. Ayrıca dünyanın en büyük tatlı su rezervuarı olan Baykal, Dünya'nın yüzey tatlı sularının yaklaşık %20'sini barındırır."
      },
      {
        id: "geo66",
        difficulty: "medium",
        question: "Avustralya'nın en büyük şehri hangisidir?",
        options: ["Melbourne", "Brisbane", "Canberra", "Sidney"],
        correctIndex: 3,
        explanation: "Sidney (Sydney), yaklaşık 5,3 milyon nüfusuyla Avustralya'nın en büyük şehridir. Opera Binası ve Harbour Bridge gibi simgeleriyle tanınan Sidney, ülkenin ekonomik ve kültürel merkezidir; Canberra ise başkenttir."
      },
      {
        id: "geo67",
        difficulty: "medium",
        question: "Türkiye'nin en uzun nehri hangisidir?",
        options: ["Fırat", "Dicle", "Sakarya", "Kızılırmak"],
        correctIndex: 3,
        explanation: "Kızılırmak, yaklaşık 1.355 km uzunluğuyla Türkiye'nin en uzun nehridir. Sivas'tan doğan nehir, Orta Anadolu'yu geçerek Karadeniz'e dökülür. Kıvrımlı yatağı ve kızıl renkli sedimenti nedeniyle bu adı almıştır."
      },
      {
        id: "geo68",
        difficulty: "medium",
        question: "Nil Nehri nereye dökülür?",
        options: ["Kızıldeniz'e", "Hint Okyanusu'na", "Akdeniz'e", "Atlantik Okyanusu'na"],
        correctIndex: 2,
        explanation: "Nil Nehri, yaklaşık 6.650 km uzunluğuyla Afrika'nın en uzun nehrididir. Burundi/Uganda'dan kaynaklanıp Sudan ve Mısır'ı geçerek Akdeniz'e dökülür. Antik Mısır uygarlığının gelişmesi Nil'in yıllık taşkınlarıyla sağlanan verimli topraklara borçludur."
      },
      {
        id: "geo69",
        difficulty: "medium",
        question: "Himalayalar hangi kıtada yer alır?",
        options: ["Afrika", "Avrupa", "Asya", "Güney Amerika"],
        correctIndex: 2,
        explanation: "Himalayalar, Asya kıtasının güneyinde Nepal, Hindistan, Tibet (Çin), Bhutan ve Pakistan sınırları boyunca uzanan dağ silsilesidir. Dünyanın en yüksek on dağının tamamı Himalayalar'dadır; bu dağlar Hint Okyanusu ile Orta Asya iklimini birbirinden ayıran doğal bir bariyer oluşturur."
      },
      {
        id: "geo70",
        difficulty: "medium",
        question: "Amazon Nehri hangi ülkede ağırlıklı olarak akar?",
        options: ["Arjantin", "Kolombiya", "Brezilya", "Peru"],
        correctIndex: 2,
        explanation: "Amazon Nehri, Peru ve Kolombiya'dan kaynaklansa da uzunluğunun büyük bölümü Brezilya'dan geçerek Atlantik Okyanusu'na dökülür. Debisi bakımından dünyanın en büyük nehri olan Amazon, dünyanın en geniş tropik yağmur ormanı olan Amazon Havzası'nı besler."
      },
      {
        id: "geo71",
        difficulty: "medium",
        question: "Dünyanın en küçük ülkesi hangisidir?",
        options: ["Monako", "San Marino", "Lihtenştayn", "Vatikan"],
        correctIndex: 3,
        explanation: "Vatikan (Vatikan Şehir Devleti), yaklaşık 0,44 km² alanıyla dünyanın en küçük bağımsız devletidir. Roma içinde yer alan bu şehir devleti, Katolik Kilisesi'nin merkezi olup Papa tarafından yönetilir."
      },
      {
        id: "geo72",
        difficulty: "medium",
        question: "Afrika'nın en yüksek dağı hangisidir?",
        options: ["Kenya Dağı", "Ruwenzori", "Atlas Dağları", "Kilimanjaro"],
        correctIndex: 3,
        explanation: "Kilimanjaro, 5.895 m yüksekliğiyle Afrika'nın en yüksek dağıdır. Tanzanya'da yer alan bu yanardağ, kalıcı kar ve buz örtüsüyle tropik Afrika'nın simgesidir; son yıllarda iklim değişikliği nedeniyle buzulların hızla eridiği gözlemlenmektedir."
      },
      {
        id: "geo73",
        difficulty: "medium",
        question: "Arjantin'in başkenti neresidir?",
        options: ["Rio de Janeiro", "Sao Paulo", "Montevideo", "Buenos Aires"],
        correctIndex: 3,
        explanation: "Buenos Aires, Arjantin'in başkenti ve en büyük şehridir. Güney Amerika'nın en kalabalık kentsel alanlarından biri olan şehir, tango müziği ve kültürünün beşiği olmasıyla da tanınır; 'Güney Amerika'nın Paris'i' olarak anılır."
      },
      {
        id: "geo74",
        difficulty: "medium",
        question: "Rusya'nın başkenti neresidir?",
        options: ["St. Petersburg", "Kiev", "Moskova", "Novosibirsk"],
        correctIndex: 2,
        explanation: "Moskova, Rusya'nın başkenti ve en büyük şehridir. Yaklaşık 12 milyonluk nüfusuyla Avrupa'nın en kalabalık şehirlerinden biridir. Kremlin Sarayı ve Kızıl Meydan, şehrin simgeleri arasında yer alır."
      },
      {
        id: "geo75",
        difficulty: "hard",
        question: "Dünyanın en büyük adası hangisidir?",
        options: ["Borneo", "Madagaskar", "Grönland", "Yeni Gine"],
        correctIndex: 2,
        explanation: "Grönland, yaklaşık 2,16 milyon km² yüzölçümüyle dünyanın en büyük adasıdır. Danimarka'ya özerk bir bölge olan Grönland'ın %80'inden fazlası kalıcı buz örtüsüyle kaplıdır. Resmi olarak Kuzey Amerika'ya bağlı sayılır, ancak coğrafi açıdan Arktik bölgededir."
      },
      {
        id: "geo76",
        difficulty: "hard",
        question: "Türkiye kaç komşu ülkeyle kara sınırı paylaşır?",
        options: ["5", "6", "7", "8"],
        correctIndex: 3,
        explanation: "Türkiye; Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak ve Suriye olmak üzere 8 ülkeyle kara sınırı paylaşır. Bu özellik Türkiye'yi hem stratejik hem de jeopolitik açıdan kritik bir konuma taşır."
      },
      {
        id: "geo77",
        difficulty: "hard",
        question: "Kanada'nın başkenti neresidir?",
        options: ["Toronto", "Montréal", "Vancouver", "Ottawa"],
        correctIndex: 3,
        explanation: "Ottawa, Kanada'nın başkentidir. Ontario eyaletinde yer alan şehir, Toronto ve Montréal'in ardından ülkenin dördüncü büyük şehridir. Başkent olarak 1857'de Kraliçe Victoria tarafından seçilmiştir."
      },
      {
        id: "geo78",
        difficulty: "hard",
        question: "Dünyanın en uzun dağ silsilesi hangisidir?",
        options: ["Himalayalar", "Rocky Dağları", "And Dağları (Andes)", "Alpler"],
        correctIndex: 2,
        explanation: "And Dağları (Andes), Güney Amerika'nın batı kıyısı boyunca yaklaşık 7.000 km uzanarak dünyanın en uzun kara dağ silsilesini oluşturur. Venezuela'dan Şili'ye kadar 7 ülkeyi geçen Andes, aktif yanardağlar ve yüksek platolar içerir."
      },
      {
        id: "geo79",
        difficulty: "hard",
        question: "Pasifik ve Atlantik okyanuslarını birleştiren yapay kanal hangisidir?",
        options: ["Süveyş Kanalı", "Korinth Kanalı", "Kiel Kanalı", "Panama Kanalı"],
        correctIndex: 3,
        explanation: "Panama Kanalı, Orta Amerika'nın dar kara şeridinden geçerek Pasifik ve Atlantik okyanuslarını birleştiren 82 km uzunluğundaki yapay kanaldır. 1914'te açılan kanal, küresel deniz ticaretini kısaltarak dünya ekonomisine büyük katkı sağlamıştır."
      },
      {
        id: "geo80",
        difficulty: "hard",
        question: "Ekvator hangi kıtaları geçer?",
        options: ["Yalnızca Afrika ve Güney Amerika", "Afrika, Güney Amerika ve Asya (Okyanusya)", "Yalnızca Afrika", "Asya, Afrika ve Avustralya"],
        correctIndex: 1,
        explanation: "Ekvator (0° enlem), Afrika, Güney Amerika ve Asya–Okyanusya kıtalarından geçer. Ekvator, Dünya'yı kuzey ve güney yarımküreye eşit olarak böler; boyunca tropikal iklim egemendir ve yıl boyunca gündüz-gece uzunlukları eşittir."
      },
      {
        id: "geo81",
        difficulty: "hard",
        question: "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
        options: ["Karadeniz ile Hazar Denizi", "Karadeniz ile Marmara Denizi", "Ege Denizi ile Marmara Denizi", "Akdeniz ile Ege Denizi"],
        correctIndex: 1,
        explanation: "İstanbul Boğazı (Boğaziçi), Karadeniz ile Marmara Denizi'ni birbirine bağlayan yaklaşık 31 km uzunluğundaki doğal su yoludur. Türkiye'nin iki kıtaya yayılan tek şehri olan İstanbul, bu boğaz sayesinde stratejik öneme sahiptir."
      },
      {
        id: "geo82",
        difficulty: "hard",
        question: "Amazon Nehri hangi kıtada yer almaktadır?",
        options: ["Afrika", "Asya", "Kuzey Amerika", "Güney Amerika"],
        correctIndex: 3,
        explanation: "Amazon Nehri, Güney Amerika kıtasında yer alır ve su hacmi bakımından dünyanın en büyük nehridir. Peru'daki And Dağları'ndan doğarak Brezilya üzerinden Atlantik Okyanusu'na dökülen Amazon; Amazon yağmur ormanlarını besleyerek dünyanın 'akciğeri' olarak anılmaktadır."
      },
      {
        id: "geo83",
        difficulty: "hard",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Tuna", "Ren", "Volga", "Elbe"],
        correctIndex: 2,
        explanation: "Yaklaşık 3.530 km uzunluğuyla Volga Nehri, Avrupa'nın en uzun nehridir. Rusya'nın kuzey kesimlerinden başlayarak Hazar Denizi'ne dökülen Volga; Rusya'nın tarihi, kültürel ve ekonomik açıdan en önemli nehirlerinden biridir."
      },
      {
        id: "geo84",
        difficulty: "hard",
        question: "Avustralya'nın başkenti neresidir?",
        options: ["Sidney", "Melbourne", "Brisbane", "Kanberra"],
        correctIndex: 3,
        explanation: "Avustralya'nın başkenti, çoğu kişinin sandığı gibi Sidney ya da Melbourne değil, Kanberra (Canberra) şehridir. Federal Başkent Bölgesi'nde yer alan Kanberra, 1913 yılında başkent olarak planlanmış ve 1927'de parlamento buraya taşınmıştır."
      },
      {
        id: "geo85",
        difficulty: "hard",
        question: "Dünyanın en küçük egemen devleti hangisidir?",
        options: ["San Marino", "Monako", "Vatikan", "Liechtenstein"],
        correctIndex: 2,
        explanation: "Vatikan (Holy See), yalnızca 0.44 km² yüzölçümü ve yaklaşık 800 kişilik nüfusuyla dünyanın en küçük bağımsız devletidir. Roma şehri içinde yer alan Vatikan, Katolik Kilisesi'nin merkezi ve Papa'nın ikametgâhıdır."
      },
      {
        id: "geo86",
        difficulty: "hard",
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Kaçkar Dağı", "Süphan Dağı", "Erciyes Dağı", "Ağrı Dağı"],
        correctIndex: 3,
        explanation: "5.137 metre yüksekliğiyle Ağrı Dağı, Türkiye'nin ve Doğu Anadolu'nun en yüksek noktasıdır. Türkiye-İran sınırına yakın konumdaki bu volkanik dağ; kar örtüsüyle kaplı zirvesi ve Nuh'un Gemisi efsanesiyle de önem taşımaktadır."
      },
      {
        id: "geo87",
        difficulty: "hard",
        question: "Afrika'nın en uzun nehri hangisidir?",
        options: ["Kongo", "Zambezi", "Nil", "Nijer"],
        correctIndex: 2,
        explanation: "Yaklaşık 6.650 km uzunluğuyla Nil Nehri, Afrika'nın ve dünyanın en uzun nehirleri arasındadır. Burundi ve Uganda'daki kaynaklardan başlayarak kuzeye doğru akan Nil, Akdeniz'e dökülmeden önce Mısır'dan geçer; Antik Mısır medeniyetini binlerce yıl boyunca beslemiştir."
      },
      {
        id: "geo88",
        difficulty: "hard",
        question: "Japonya'nın başkenti neresidir?",
        options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
        correctIndex: 2,
        explanation: "Tokyo (Japonca: 東京, 'Doğu Başkent'), Japonya'nın başkenti ve dünyanın en kalabalık büyük şehir alanlarından biridir. Tokyo Metropoliten Bölgesi, yaklaşık 37-38 milyon nüfusuyla küresel ölçekte en büyük kentsel yoğunlaşmadır."
      },
      {
        id: "geo89",
        difficulty: "hard",
        question: "Güney Amerika'nın en yüksek dağı hangisidir?",
        options: ["Chimborazo", "Kilimanjaro", "Aconcagua", "Ojos del Salado"],
        correctIndex: 2,
        explanation: "Arjantin-Şili sınırındaki And Dağları'nda yer alan Aconcagua, 6.961 metre yüksekliğiyle Güney Amerika'nın ve Batı ile Güney Yarıküre'nin en yüksek dağıdır. Her yıl binlerce dağcı Aconcagua'ya tırmanış denemesinde bulunmaktadır."
      },
      {
        id: "geo90",
        difficulty: "hard",
        question: "Dünyanın en büyük sıcak çölü hangisidir?",
        options: ["Gobi Çölü", "Arabistan Çölü", "Atacama Çölü", "Sahra Çölü"],
        correctIndex: 3,
        explanation: "Afrika'nın kuzeyinde yer alan Sahra Çölü, yaklaşık 9.2 milyon km² yüzölçümüyle dünyanın en büyük sıcak çölüdür. (Teknik olarak en büyük çöl Antarktika'dır; ancak Sahra en büyük sıcak çöldür.) On ülkeden fazlasına yayılan Sahra; kum tepeleri, kayalıklar ve vahalardan oluşmaktadır."
      },
      {
        id: "geo91",
        difficulty: "hard",
        question: "Hint Okyanusu'nun en büyük adası hangisidir?",
        options: ["Sri Lanka", "Madagaskar", "Sumatra", "Borneo"],
        correctIndex: 1,
        explanation: "Yaklaşık 587.000 km² yüzölçümüyle Madagaskar, Hint Okyanusu'nun ve dünyanın dördüncü büyük adasıdır. Afrika kıtasının güneydoğusunda, Mozambik Kanalı'nda konumlanan Madagaskar; milyonlarca yıllık yalıtılmışlığı sayesinde türlerin yaklaşık %90'ı başka yerlerde bulunmayan eşsiz bir biyoçeşitliliğe sahiptir."
      },
      {
        id: "geo92",
        difficulty: "hard",
        question: "Çin'in başkenti neresidir?",
        options: ["Şanghay", "Hong Kong", "Pekin (Beijing)", "Guangzhou"],
        correctIndex: 2,
        explanation: "Çin Halk Cumhuriyeti'nin başkenti Pekin'dir (Mandarin Çincesinde Beijing, yani 'Kuzey Başkent'). Yaklaşık 3.000 yıllık tarihe sahip olan Pekin; Yasak Şehir, Tiananmen Meydanı ve Çin Seddi gibi önemli tarihi ve kültürel alanları bünyesinde barındırır."
      },
      {
        id: "geo93",
        difficulty: "hard",
        question: "Dünyanın en büyük ülkesi hangisidir?",
        options: ["Kanada", "Çin", "ABD", "Rusya"],
        correctIndex: 3,
        explanation: "Yaklaşık 17.1 milyon km² yüzölçümüyle Rusya, dünyanın yüzölçümü açısından en büyük ülkesidir. Doğu Avrupa'dan Kuzey Asya'ya uzanan Rusya; 11 saat dilimine yayılmakta ve dünya kara kütlesinin yaklaşık sekizde birini kapsamaktadır."
      },
      {
        id: "geo94",
        difficulty: "hard",
        question: "Türkiye kaç ülkeyle kara sınırı paylaşmaktadır?",
        options: ["5", "6", "7", "8"],
        correctIndex: 3,
        explanation: "Türkiye; Yunanistan, Bulgaristan (batı); Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran (doğu); Irak ve Suriye (güney) olmak üzere 8 ülkeyle kara sınırı paylaşmaktadır. Bu coğrafi konum, Türkiye'yi Avrupa ile Asya arasında köprü konumuna taşımaktadır."
      },
      {
        id: "geo95",
        difficulty: "hard",
        question: "Nil Nehri hangi denize dökülmektedir?",
        options: ["Kızıldeniz", "Karadeniz", "Akdeniz", "Hint Okyanusu"],
        correctIndex: 2,
        explanation: "Dünyanın en uzun nehirlerinden biri olan Nil, güney kaynaklarından kuzeye doğru yaklaşık 6.650 km akarak Mısır'da geniş bir delta oluşturur ve Akdeniz'e dökülür. Nil Deltası, Mısır'ın en verimli tarım arazilerine ev sahipliği yapmaktadır."
      },
      {
        id: "geo96",
        difficulty: "hard",
        question: "Ekvador'un başkenti neresidir?",
        options: ["Guayaquil", "Kito (Quito)", "Cuenca", "Manta"],
        correctIndex: 1,
        explanation: "Kito (Quito), Ekvador'un başkenti olup And Dağları'nda yaklaşık 2.850 metre yükseklikte yer almaktadır. Ekvator'a yakınlığı, yüksek rakımını ve İspanya döneminden kalan tarihi dokusunu bir arada sunan Kito; 1978'de UNESCO Dünya Mirası listesine alınmıştır."
      },
      {
        id: "geo97",
        difficulty: "hard",
        question: "Antarktika hakkında hangisi doğrudur?",
        options: ["Dünyanın en sıcak kıtasıdır", "Dünyanın en kurak kıtasıdır", "Kalıcı insan nüfusu yaşamaktadır", "Tropikal ormanlarla kaplıdır"],
        correctIndex: 1,
        explanation: "Antarktika, yıllık yağış miktarı birçok yerinde 200 mm'nin altında kalan dünyanın en kurak kıtasıdır; bu özelliğiyle aynı zamanda dünyanın en büyük çölü sayılmaktadır. Ayrıca Dünya'nın en soğuk ve en rüzgârlı kıtası olan Antarktika'da kalıcı insan yerleşimi bulunmamakta, yalnızca bilimsel araştırma istasyonları faaliyet göstermektedir."
      },
      {
        id: "geo98",
        difficulty: "hard",
        question: "Panama Kanalı hangi iki okyanusu birbirine bağlamaktadır?",
        options: ["Atlantik ve Hint Okyanusu", "Atlantik ve Büyük Okyanus", "Büyük Okyanus ve Arktik Okyanus", "Hint ve Büyük Okyanus"],
        correctIndex: 1,
        explanation: "Panama Kanalı, Amerika kıtasını kesen yaklaşık 80 km uzunluğundaki yapay su yoludur ve Atlantik ile Büyük Okyanus'u (Pasifik) birbirine bağlar. 1914 yılında faaliyete giren kanal, gemilerin Güney Amerika'yı dolaşmadan iki okyanus arasında geçiş yapmasını sağlayarak küresel deniz ticaretinde devrim yaratmıştır."
      },
      {
        id: "geo99",
        difficulty: "hard",
        question: "Dünyanın hangi kıtasında çöl iklimi yoktur?",
        options: ["Afrika", "Avrupa", "Asya", "Avustralya"],
        correctIndex: 1,
        explanation: "Avrupa kıtası, diğer kıtalarda bulunan gerçek çöl iklimine sahip değildir. Kıta boyunca ılıman, Akdeniz, boreal ve tundra iklimleri hâkimdir. Avrupa'nın bazı bölgelerinde yarı kurak alanlar bulunsa da tam anlamıyla çöl iklimi gözlemlenmez."
      },
      {
        id: "geo100",
        difficulty: "hard",
        question: "Dünyanın en büyük gölü hangisidir?",
        options: ["Baykal Gölü", "Süperior Gölü", "Hazar Denizi", "Victoria Gölü"],
        correctIndex: 2,
        explanation: "Hazar Denizi, adında 'deniz' kelimesi geçmesine karşın teknik olarak bir göldür ve yaklaşık 371.000 km² yüzölçümüyle dünyanın en büyük gölü unvanını taşımaktadır. Rusya, Kazakistan, Türkmenistan, İran ve Azerbaycan'la çevrili olan Hazar; petrol ve doğal gaz rezervleriyle de önem taşımaktadır."
      },
      {
        id: "geo101",
        difficulty: "hard",
        question: "Türkiye'nin en uzun nehri hangisidir?",
        options: ["Fırat", "Sakarya", "Kızılırmak", "Yeşilırmak"],
        correctIndex: 2,
        explanation: "Kızılırmak, 1.355 km uzunluğuyla Türkiye'nin tamamen sınırlar içinde kalan en uzun nehridir. Sivas'taki Kızıldağ'dan doğarak Karadeniz'e dökülen Kızılırmak, adını taşıdığı kırmızımsı çamurlu sulardan alır. Deltasında oluşan Kızılırmak Tabiat Parkı, flamingo başta olmak üzere pek çok kuş türüne ev sahipliği yapar."
      },
      {
        id: "geo102",
        difficulty: "hard",
        question: "Hindistan'ın başkenti neresidir?",
        options: ["Mumbai", "Kalküta", "Yeni Delhi", "Bangalore"],
        correctIndex: 2,
        explanation: "Yeni Delhi, Hindistan'ın başkentidir ve ülkenin en büyük şehri olan Delhi metropolünün güney bölümünde yer alır. İngiliz sömürgesi döneminde 1911'de planlanan ve 1931'de açılan Yeni Delhi, ülkenin siyasi merkezi olup başta Hindistan Parlamentosu ve Cumhurbaşkanlığı Sarayı (Rashtrapati Bhavan) olmak üzere tüm önemli devlet kurumlarını barındırır."
      },
      {
        id: "geo103",
        difficulty: "hard",
        question: "Nil Nehrinin kaynağını besleyen en büyük göl hangisidir?",
        options: ["Tanganyika Gölü", "Malawi Gölü", "Viktorya Gölü", "Albert Gölü"],
        correctIndex: 2,
        explanation: "Viktorya Gölü, Afrika'nın en büyük gölü ve Beyaz Nil'in temel kaynağıdır. Uganda, Kenya ve Tanzanya arasında yer alan bu tatlı su gölü, 68.800 km² yüzölçümüyle dünyanın ikinci büyük tatlı su gölüdür. İngiltere Kraliçesi Victoria'nın adını taşıyan göl, 1858'de John Hanning Speke tarafından Avrupalılara tanıtılmıştır."
      },
      {
        id: "geo104",
        difficulty: "hard",
        question: "Arjantin'in başkenti neresidir?",
        options: ["São Paulo", "Santiago", "Montevideo", "Buenos Aires"],
        correctIndex: 3,
        explanation: "Buenos Aires, İspanyolca 'temiz havalar' anlamına gelen Arjantin'in başkenti ve en büyük şehridir. Río de la Plata kıyısında kurulu olan şehir; tango kültürünün beşiği, Güney Amerika'nın en önemli finans merkezlerinden biri ve kıtanın en kozmopolit kentlerinden biridir. Arjantin nüfusunun yaklaşık üçte biri Buenos Aires çevresinde yaşamaktadır."
      },
      {
        id: "geo105",
        difficulty: "hard",
        question: "Türkiye kaç ilden oluşmaktadır?",
        options: ["73", "76", "81", "84"],
        correctIndex: 2,
        explanation: "Türkiye, yönetim açısından 81 ile ayrılmaktadır. Bu illerin her birini bir vali yönetir ve iller ilçelere bölünür. En kalabalık il İstanbul (yaklaşık 15-16 milyon nüfus), en az nüfuslu il ise Bayburt'tur. 1989'da 67 il olan ülkede, çeşitli dönemlerde yapılan düzenlemelerle il sayısı 81'e çıkarılmıştır."
      },
      {
        id: "geo106",
        difficulty: "hard",
        question: "Brezilya'nın başkenti neresidir?",
        options: ["Rio de Janeiro", "São Paulo", "Brasilia", "Salvador"],
        correctIndex: 2,
        explanation: "Brasilia, 1960'ta kurulan ve aynı yıl Rio de Janeiro'nun yerine Brezilya'nın başkenti ilan edilen planlı bir şehirdir. Mimari olarak uçaktan bakıldığında uçak şeklinde göründüğü söylenen şehir, ünlü mimar Oscar Niemeyer ve şehir plancısı Lúcio Costa tarafından tasarlanmıştır. 1987'de UNESCO Dünya Mirası Listesi'ne girmiştir."
      },
      {
        id: "geo107",
        difficulty: "hard",
        question: "Süveyş Kanalı hangi iki denizi birbirine bağlar?",
        options: ["Karadeniz ve Ege Denizi", "Atlantik ve Hint Okyanusu", "Akdeniz ve Kızıldeniz", "Basra Körfezi ve Hürmüz Boğazı"],
        correctIndex: 2,
        explanation: "Mısır'daki Süveyş Kanalı, Akdeniz'i Kızıldeniz'e bağlayan yapay su yoludur. 1869'da açılan kanal, gemilerin Afrika'yı dolaşma zorunluluğunu ortadan kaldırarak Avrupa ile Asya arasındaki deniz yolunu dramatik biçimde kısalttı. 193 km uzunluğuyla dünya ticaretinin yaklaşık %12'si bu kanaldan geçmektedir."
      },
      {
        id: "geo108",
        difficulty: "hard",
        question: "Himalaya Dağları hangi iki levhanın çarpışmasıyla oluşmuştur?",
        options: ["Pasifik ve Avrasya levhaları", "Hint-Avustralya ve Avrasya levhaları", "Afrika ve Arap levhaları", "Nazca ve Güney Amerika levhaları"],
        correctIndex: 1,
        explanation: "Himalaya Dağları, yaklaşık 50-70 milyon yıl önce Hint-Avustralya levhasının Avrasya levhasına çarpmasıyla oluşmaya başlamıştır ve bugün de yılda birkaç milimetre yükselmeye devam etmektedir. Bu dağ silsilesinde dünyanın en yüksek 14 zirvesi yer almakta olup hepsinin yüksekliği 8.000 metrenin üzerindedir. Everest (8.848 m) bu zirvelerin en yücesidir."
      },
      {
        id: "geo109",
        difficulty: "hard",
        question: "Mezopotamya hangi iki nehir arasındaki toprakları tanımlar?",
        options: ["Nil ve Kongo", "İndus ve Ganj", "Dicle ve Fırat", "Yangtze ve Sarı Nehir"],
        correctIndex: 2,
        explanation: "Mezopotamya (Yunanca: 'iki nehir arası'), Dicle (Tigris) ve Fırat (Euphrates) nehirleri arasında kalan ve büyük bölümü günümüz Irak sınırları içinde yer alan bölgedir. 'Uygarlığın beşiği' olarak anılan bu topraklarda MÖ 4. binyılda Sümerler, ardından Akadlar, Babilliler ve Asurlular tarihte ilk şehirleri, yazıyı ve hukuk sistemlerini geliştirdi."
      },
      {
        id: "geo110",
        difficulty: "hard",
        question: "Avrupa'nın coğrafi açıdan en yüksek dağı hangisidir?",
        options: ["Mont Blanc", "Matterhorn", "Elbrus", "Gran Paradiso"],
        correctIndex: 2,
        explanation: "Rusya'nın Kafkasya bölgesinde yer alan Elbrus (5.642 m), Avrupa ile Asya sınırı olarak Kafkas Dağları'nın esas alındığı kabule göre Avrupa'nın en yüksek dağıdır. Fransa-İtalya sınırındaki Mont Blanc (4.808 m) ise Alp Dağları'nın ve Batı Avrupa'nın en yüksek noktasıdır. Hangi tanımın benimseneceğine göre bu iki dağ arasında tartışma sürmektedir."
      },
      {
        id: "geo111",
        difficulty: "easy",
        question: "Türkiye'nin başkenti hangi şehirdir?",
        options: ["İstanbul", "İzmir", "Ankara", "Bursa"],
        correctIndex: 2,
        explanation: "Türkiye'nin başkenti, 13 Ekim 1923'te alınan kararla başkent olarak ilan edilen Ankara'dır."
      },
      {
        id: "geo112",
        difficulty: "easy",
        question: "Türkiye'nin en kalabalık şehri hangisidir?",
        options: ["Ankara", "İstanbul", "İzmir", "Bursa"],
        correctIndex: 1,
        explanation: "İstanbul, 15 milyonu aşan nüfusuyla hem Türkiye'nin en kalabalık şehri hem de Avrupa'nın en kalabalık şehirlerinden biridir."
      },
      {
        id: "geo113",
        difficulty: "easy",
        question: "Karadeniz'e kıyısı olmayan ülke hangisidir?",
        options: ["Türkiye", "Rusya", "Romanya", "Yunanistan"],
        correctIndex: 3,
        explanation: "Karadeniz'e kıyısı olan ülkeler Türkiye, Bulgaristan, Romanya, Ukrayna, Rusya ve Gürcistan'dır; Yunanistan'ın Karadeniz kıyısı yoktur."
      },
      {
        id: "geo114",
        difficulty: "easy",
        question: "Tuz Gölü Türkiye'nin hangi bölgesindedir?",
        options: ["Marmara", "Ege", "İç Anadolu", "Doğu Anadolu"],
        correctIndex: 2,
        explanation: "Tuz Gölü, İç Anadolu Bölgesi'nde Aksaray, Konya ve Ankara illeri arasında uzanan, Türkiye'nin ikinci büyük gölüdür."
      },
      {
        id: "geo115",
        difficulty: "easy",
        question: "Avrupa kıtasının en uzun nehri hangisidir?",
        options: ["Tuna", "Volga", "Ren", "Don"],
        correctIndex: 1,
        explanation: "Volga, yaklaşık 3.530 km uzunluğuyla tamamı Rusya sınırları içerisinde akan ve Avrupa'nın en uzun nehridir; Hazar Denizi'ne dökülür."
      },
      {
        id: "geo116",
        difficulty: "easy",
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes", "Kaçkar", "Ağrı Dağı", "Süphan"],
        correctIndex: 2,
        explanation: "Ağrı Dağı, 5.137 metre yüksekliğiyle Türkiye'nin en yüksek dağıdır ve Doğu Anadolu Bölgesi'nde yer alır."
      },
      {
        id: "geo117",
        difficulty: "easy",
        question: "Akdeniz'e kıyısı olmayan ülke hangisidir?",
        options: ["İspanya", "İtalya", "Türkiye", "Portekiz"],
        correctIndex: 3,
        explanation: "Portekiz'in tüm kıyıları Atlas Okyanusu'na bakar; Akdeniz'e kıyısı yoktur."
      },
      {
        id: "geo118",
        difficulty: "easy",
        question: "Türkiye'nin en büyük adası hangisidir?",
        options: ["Bozcaada", "Gökçeada (İmroz)", "Marmara Adası", "Avşa"],
        correctIndex: 1,
        explanation: "Gökçeada (eski adıyla İmroz), yaklaşık 285 km² yüzölçümüyle Türkiye'nin en büyük adasıdır ve Çanakkale iline bağlıdır."
      },
      {
        id: "geo119",
        difficulty: "easy",
        question: "Atacama Çölü hangi kıtada yer alır?",
        options: ["Afrika", "Asya", "Güney Amerika", "Avustralya"],
        correctIndex: 2,
        explanation: "Atacama Çölü, ağırlıklı olarak Şili'de bulunan ve dünyanın en kurak çöllerinden biri olarak kabul edilen Güney Amerika çölüdür."
      },
      {
        id: "geo120",
        difficulty: "easy",
        question: "Hangi nehir Mısır'ın en önemli nehridir?",
        options: ["Kongo", "Nijer", "Nil", "Zambezi"],
        correctIndex: 2,
        explanation: "Nil Nehri, yaklaşık 6.650 km uzunluğuyla dünyanın en uzun nehirlerinden biridir ve eski çağlardan beri Mısır medeniyetinin yaşam kaynağıdır."
      },
      {
        id: "geo121",
        difficulty: "easy",
        question: "Yedi kıtadan hangisi en büyüktür?",
        options: ["Afrika", "Asya", "Avrupa", "Kuzey Amerika"],
        correctIndex: 1,
        explanation: "Asya, yaklaşık 44,58 milyon km² yüzölçümüyle dünyanın en büyük kıtasıdır ve dünya kara yüzölçümünün yaklaşık üçte birini kaplar."
      },
      {
        id: "geo122",
        difficulty: "easy",
        question: "Marmara Denizi hangi iki denizi birbirine bağlar?",
        options: ["Karadeniz - Akdeniz", "Karadeniz - Ege", "Akdeniz - Hazar", "Adriyatik - Ege"],
        correctIndex: 1,
        explanation: "Marmara Denizi, kuzeyde İstanbul Boğazı aracılığıyla Karadeniz'e, güneyde Çanakkale Boğazı aracılığıyla Ege Denizi'ne bağlanır."
      },
      {
        id: "geo123",
        difficulty: "easy",
        question: "Türkiye kaç coğrafi bölgeye ayrılır?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Türkiye 1941 Birinci Coğrafya Kongresi'nde belirlenen Karadeniz, Marmara, Ege, Akdeniz, İç Anadolu, Doğu Anadolu ve Güneydoğu Anadolu olmak üzere 7 coğrafi bölgeye ayrılır."
      },
      {
        id: "geo124",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi Türkiye'nin Ege Denizi'ndeki adalarından biridir?",
        options: ["Bozcaada", "Kıbrıs", "Girit", "Sakız"],
        correctIndex: 0,
        explanation: "Bozcaada (eski adı Tenedos) ve Gökçeada, Türkiye'ye ait Ege Denizi'ndeki en büyük iki adadır."
      },
      {
        id: "geo125",
        difficulty: "easy",
        question: "İskandinav yarımadasında hangi ülke bulunmaz?",
        options: ["İsveç", "Norveç", "Danimarka", "Finlandiya"],
        correctIndex: 3,
        explanation: "İskandinav yarımadasında İsveç ve Norveç bulunur; Danimarka ve Finlandiya İskandinav ülkeleri kabul edilse de yarımadanın asıl kara parçasında değildir."
      },
      {
        id: "geo126",
        difficulty: "easy",
        question: "Hangi okyanus en derin noktayı (Mariana Çukuru) içerir?",
        options: ["Atlas", "Hint", "Pasifik", "Arktik"],
        correctIndex: 2,
        explanation: "Pasifik Okyanusu, yaklaşık 11 km derinliğindeki Mariana Çukuru'nu (Challenger Derinliği) içerir ve dünyanın bilinen en derin okyanus noktasıdır."
      },
      {
        id: "geo127",
        difficulty: "easy",
        question: "Hangisi Avrupa'nın en uzun nehridir?",
        options: ["Tuna", "Ren", "Volga", "Don"],
        correctIndex: 2,
        explanation: "Volga Nehri, yaklaşık 3.530 km uzunluğuyla Avrupa'nın en uzun nehridir ve büyük bölümü Rusya topraklarındadır."
      },
      {
        id: "geo128",
        difficulty: "medium",
        question: "Türkiye'nin en doğu noktası hangi ildedir?",
        options: ["Ardahan", "Iğdır", "Ağrı", "Hakkari"],
        correctIndex: 1,
        explanation: "Türkiye'nin en doğu noktası, Iğdır ilinde yer alan Aralık ilçesinin doğusunda 44° 49' Doğu meridyenindedir."
      },
      {
        id: "geo129",
        difficulty: "medium",
        question: "Hangi ülke 'Bin Göller Ülkesi' olarak adlandırılır?",
        options: ["Norveç", "Finlandiya", "İsveç", "İzlanda"],
        correctIndex: 1,
        explanation: "Finlandiya, sınırları içinde 188.000'den fazla göl bulunması nedeniyle 'Bin Göller Ülkesi' olarak adlandırılır."
      },
      {
        id: "geo130",
        difficulty: "medium",
        question: "GAP (Güneydoğu Anadolu Projesi) hangi nehirler üzerinde inşa edilen barajları kapsar?",
        options: ["Sakarya - Kızılırmak", "Aras - Kura", "Fırat - Dicle", "Yeşilırmak - Çoruh"],
        correctIndex: 2,
        explanation: "GAP; Fırat ve Dicle nehirleri üzerinde inşa edilen 22 baraj ve 19 hidroelektrik santralle Güneydoğu Anadolu'da kalkınmayı hedefleyen entegre bir bölgesel projedir."
      },
      {
        id: "geo131",
        difficulty: "medium",
        question: "Cebelitarık Boğazı hangi iki kıtayı ayırır?",
        options: ["Avrupa - Asya", "Avrupa - Afrika", "Asya - Afrika", "Kuzey - Güney Amerika"],
        correctIndex: 1,
        explanation: "Cebelitarık Boğazı, İspanya ile Fas arasında yer alır ve Avrupa ile Afrika kıtalarını birbirinden ayırır."
      },
      {
        id: "geo132",
        difficulty: "medium",
        question: "K2 Dağı hangi sıradağ sisteminde yer alır?",
        options: ["Himalayalar", "Karakurum", "And Dağları", "Alpler"],
        correctIndex: 1,
        explanation: "Dünyanın ikinci en yüksek dağı olan 8.611 m yükseklikteki K2, Pakistan-Çin sınırında Karakurum Dağları'nda yer alır."
      },
      {
        id: "geo133",
        difficulty: "medium",
        question: "Hangi ülkenin başkenti deniz seviyesinden en yüksek başkentlerden biri olan La Paz'dır?",
        options: ["Şili", "Peru", "Bolivya", "Ekvador"],
        correctIndex: 2,
        explanation: "La Paz, deniz seviyesinden yaklaşık 3.640 metre yükseklikte bulunan Bolivya'nın yönetim merkezidir; resmi başkent ise Sucre'dir."
      },
      {
        id: "geo134",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Asya'nın en uzun nehridir?",
        options: ["Mekong", "Yangtze", "Sarı Nehir", "Lena"],
        correctIndex: 1,
        explanation: "Yangtze Nehri (Çang Jiang), yaklaşık 6.300 km uzunluğuyla Asya'nın en uzun, dünyanın da üçüncü en uzun nehridir."
      },
      {
        id: "geo135",
        difficulty: "medium",
        question: "Erciyes Dağı Türkiye'nin hangi şehrindedir?",
        options: ["Kayseri", "Erzurum", "Sivas", "Malatya"],
        correctIndex: 0,
        explanation: "Erciyes Dağı, 3.917 metre yüksekliğinde sönmüş bir volkandır ve Kayseri ilinin sınırları içinde yer alır."
      },
      {
        id: "geo136",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkiye'nin yarı çevresi denize değen ülkelerin başında gelmesinin sebebidir?",
        options: ["İklim çeşitliliği", "Üç tarafının denizlerle çevrili olması", "Bol akarsuyun bulunması", "Düz arazi yapısı"],
        correctIndex: 1,
        explanation: "Türkiye, kuzeyinde Karadeniz, batısında Ege ve güneyinde Akdeniz olmak üzere üç tarafı denizlerle çevrili olduğu için uzun bir kıyı şeridine sahiptir."
      },
      {
        id: "geo137",
        difficulty: "medium",
        question: "Atina hangi ülkenin başkentidir?",
        options: ["Bulgaristan", "Yunanistan", "Arnavutluk", "Sırbistan"],
        correctIndex: 1,
        explanation: "Atina, Yunanistan'ın başkenti olup demokrasinin ve klasik Batı uygarlığının doğum yeri olarak tanınır."
      },
      {
        id: "geo138",
        difficulty: "medium",
        question: "Hangi ülkenin para birimi Yen'dir?",
        options: ["Çin", "Kore", "Japonya", "Tayland"],
        correctIndex: 2,
        explanation: "Yen (¥), Japonya'nın resmi para birimidir ve dünyanın en çok işlem gören üçüncü para birimi olarak finans piyasalarında önemli bir yere sahiptir."
      },
      {
        id: "geo139",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkiye'de aktif olan büyük fay hattıdır?",
        options: ["San Andreas Fayı", "Kuzey Anadolu Fayı", "Doğu Pasifik Fayı", "Tian Shan Fayı"],
        correctIndex: 1,
        explanation: "Kuzey Anadolu Fay Hattı, 1.500 km'yi aşan uzunluğuyla Türkiye'nin en aktif fay hatlarından biridir; 1939 Erzincan ve 1999 Marmara depremleri burada gerçekleşmiştir."
      },
      {
        id: "geo140",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi 'Akdeniz iklimi' özelliği değildir?",
        options: ["Yazları sıcak ve kurak", "Kışları ılık ve yağışlı", "Yıl boyu bol kar yağışlı", "Makilik bitki örtüsü"],
        correctIndex: 2,
        explanation: "Akdeniz iklimi, yazları sıcak ve kurak, kışları ılık ve yağışlıdır; yoğun kar yağışı tipik bir özelliği değildir."
      },
      {
        id: "geo141",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkiye'nin önemli boğazlarından biri değildir?",
        options: ["Dardanelles (Çanakkale)", "Bosporus (İstanbul)", "Hürmüz", "Yok—her ikisi de Türkiye'dedir"],
        correctIndex: 2,
        explanation: "Hürmüz Boğazı; İran ile Umman arasında, Basra Körfezi'ni Umman Körfezi'ne bağlayan bir boğazdır ve Türkiye'de değildir."
      },
      {
        id: "geo142",
        difficulty: "medium",
        question: "Hangi ülkenin başkenti Reykjavík'tir?",
        options: ["İzlanda", "Norveç", "Finlandiya", "İrlanda"],
        correctIndex: 0,
        explanation: "Reykjavík, dünyanın en kuzeydeki başkentlerinden biridir ve İzlanda'nın başkentidir."
      },
      {
        id: "geo143",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkiye'nin komşu ülkelerinden biri değildir?",
        options: ["Gürcistan", "Bulgaristan", "Romanya", "İran"],
        correctIndex: 2,
        explanation: "Türkiye'nin komşuları; Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahcivan), İran, Irak ve Suriye'dir; Romanya komşu değildir."
      },
      {
        id: "geo144",
        difficulty: "hard",
        question: "Türkiye'nin en kuzey noktası hangi ildedir?",
        options: ["Sinop", "Kastamonu", "Samsun", "Ordu"],
        correctIndex: 0,
        explanation: "Türkiye'nin en kuzey noktası Sinop ilinin İnceburun kısmıdır (yaklaşık 42° 06' Kuzey paraleli)."
      },
      {
        id: "geo145",
        difficulty: "hard",
        question: "Dünyanın en büyük tropik yağmur ormanı hangi nehir havzasındadır?",
        options: ["Kongo", "Mississippi", "Amazon", "Mekong"],
        correctIndex: 2,
        explanation: "Amazon Yağmur Ormanları, ağırlıklı olarak Brezilya'da, Amazon Nehri havzasında yer alır ve dünyanın en büyük tropikal yağmur ormanıdır."
      },
      {
        id: "geo146",
        difficulty: "hard",
        question: "Sibirya'da bulunan dünyanın en eski ve derin gölü hangisidir?",
        options: ["Aral", "Hazar", "Baykal", "Balkaş"],
        correctIndex: 2,
        explanation: "Baykal Gölü, yaklaşık 25-30 milyon yıllık geçmişiyle dünyanın en eski gölü; 1.642 m derinliğiyle de en derin tatlı su gölüdür."
      },
      {
        id: "geo147",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türkiye'de bir aktif volkan kabul edilmez?",
        options: ["Erciyes", "Tendürek", "Hasandağı", "Kaçkar"],
        correctIndex: 3,
        explanation: "Erciyes, Tendürek ve Hasandağı sönmüş veya yarı aktif volkanik dağlardır; Kaçkar ise tortul ve granit yapılı bir tektonik dağdır."
      },
      {
        id: "geo148",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türkiye'nin en güney noktasıdır?",
        options: ["Beysehir", "Anamur Burnu", "Antalya", "Mersin"],
        correctIndex: 1,
        explanation: "Türkiye'nin en güney noktası, Mersin ilindeki Anamur Burnu (yaklaşık 35° 50' Kuzey paraleli)'dur."
      },
      {
        id: "geo149",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türkiye'nin Akdeniz'deki en büyük adasıdır?",
        options: ["Gökçeada", "Bozcaada", "Sedef", "Yok—Türkiye'nin Akdeniz'de büyük adası yoktur"],
        correctIndex: 3,
        explanation: "Türkiye'nin Akdeniz'de büyük bir adası yoktur; Gökçeada ve Bozcaada Ege Denizi'ndedir, Akdeniz'de küçük adacıklar mevcuttur."
      },
      {
        id: "geo150",
        difficulty: "hard",
        question: "Hangi nehir havzası dünyanın en büyük drenaj alanına sahiptir?",
        options: ["Nil", "Amazon", "Mississippi", "Yangtze"],
        correctIndex: 1,
        explanation: "Amazon Nehri, yaklaşık 7 milyon km²'lik drenaj havzasıyla dünyanın en geniş nehir havzasına sahiptir."
      },
      {
        id: "geo151",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türkiye'de tektonik bir göldür?",
        options: ["Tuz Gölü", "Manyas", "İznik", "Salda"],
        correctIndex: 2,
        explanation: "İznik Gölü, fay hatları boyunca oluşmuş tektonik bir göldür; Tuz Gölü kapalı havza, Salda krater olabilen volkanik bir göldür."
      },
      {
        id: "geo152",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Anatolya'nın çatısı' olarak da bilinen bölgedir?",
        options: ["İç Anadolu", "Doğu Anadolu", "Karadeniz", "Güneydoğu Anadolu"],
        correctIndex: 1,
        explanation: "Doğu Anadolu Bölgesi, Türkiye'nin ortalama yüksekliği en fazla olan bölgesi olduğu için 'Türkiye'nin çatısı' olarak adlandırılır."
      },
      {
        id: "geo153",
        difficulty: "hard",
        question: "Hangi ülke 'Doğu Asya'nın en kalabalık ülkesi' olarak bilinir?",
        options: ["Hindistan", "Çin", "Endonezya", "Japonya"],
        correctIndex: 1,
        explanation: "Çin, 1,4 milyarı aşan nüfusuyla 2024 itibarıyla Doğu Asya'nın en kalabalık ülkesidir; dünya genelinde Hindistan ile başa baş yarışır."
      },
      {
        id: "geo154",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Avrupa Birliği üyesi değildir?",
        options: ["Almanya", "Norveç", "Hollanda", "İsveç"],
        correctIndex: 1,
        explanation: "Norveç, EFTA üyesidir ancak iki ayrı referandumda Avrupa Birliği üyeliğini reddetmiştir."
      },
      {
        id: "geo155",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Pasifik Ateş Çemberi' üzerinde yer almaz?",
        options: ["Japonya", "Şili", "Endonezya", "Mısır"],
        correctIndex: 3,
        explanation: "Pasifik Ateş Çemberi; Pasifik Okyanusu çevresinde yoğun deprem ve volkan etkinliğinin görüldüğü kuşaktır; Mısır bu kuşağa dahil değildir."
      },
      {
        id: "geo156",
        difficulty: "hard",
        question: "Türkiye'de en fazla yıllık yağış alan il aşağıdakilerden hangisidir?",
        options: ["Antalya", "Rize", "Bursa", "Edirne"],
        correctIndex: 1,
        explanation: "Türkiye'de en fazla yıllık yağışı; Doğu Karadeniz'in nemli orografik etkisi nedeniyle yıllık ortalama 2.300 mm civarındaki yağışıyla Rize alır."
      },
      {
        id: "geo157",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Sirikit Krater Gölü' gibi krater kökenli bir Türk gölüdür?",
        options: ["Manyas", "Meke Gölü", "İznik", "Tuz Gölü"],
        correctIndex: 1,
        explanation: "Karaman'ın Meke Gölü, çevresinde tuz çökellerinin de bulunduğu bir maar (krater) kökenli göldür; tuzlanma nedeniyle son yıllarda neredeyse kurumuştur."
      },
      {
        id: "geo158",
        difficulty: "hard",
        question: "Hangi ülke karasal sınırları içinde tek başına en fazla zaman dilimini kapsar?",
        options: ["Çin", "ABD", "Rusya", "Brezilya"],
        correctIndex: 2,
        explanation: "Rusya, doğu-batı uzanımı nedeniyle 11 farklı zaman dilimini kapsar; Çin tek bir resmi zaman dilimi kullanır."
      },
      {
        id: "geo159",
        difficulty: "hard",
        question: "Hangi ada Atlas Okyanusu'nda Birleşik Krallık egemenliğindeki en büyük adadır?",
        options: ["İzlanda", "Falkland", "Büyük Britanya Adası", "Bermuda"],
        correctIndex: 2,
        explanation: "Büyük Britanya Adası, Avrupa'nın en büyük adası ve Birleşik Krallık'ın ana karasıdır; İskoçya, Galler ve İngiltere'yi içerir."
      },
      {
        id: "geo160",
        difficulty: "hard",
        question: "Hangi ülke karasal sınırları içinde Ekvator çizgisinin geçtiği en büyük ülkedir?",
        options: ["Brezilya", "Endonezya", "Kongo Demokratik Cumhuriyeti", "Kenya"],
        correctIndex: 0,
        explanation: "Ekvator çizgisi 13 ülkeden geçer; bunlar arasında en geniş yüzölçümüne sahip olan ülke Brezilya'dır."
      },
      {
        id: "geo161",
        difficulty: "easy",
        question: "Türkiye'nin başkenti hangi şehirdir?",
        options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
        correctIndex: 1,
        explanation: "Ankara, 13 Ekim 1923'ten itibaren Türkiye Cumhuriyeti'nin başkentidir. Anadolu'nun orta-kuzeyinde yer alan bu şehir, Cumhuriyet'in kuruluşuyla idari başkent seçilmiş ve bugün ülkenin ikinci büyük şehri konumundadır."
      },
      {
        id: "geo162",
        difficulty: "easy",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Tuna", "Ren", "Volga", "Dinyeper"],
        correctIndex: 2,
        explanation: "Volga, yaklaşık 3.531 km uzunluğuyla Avrupa'nın en uzun nehridir. Rusya topraklarında kaynayan ve Hazar Denizi'ne dökülen Volga, Rusya'nın tarih, ekonomi ve kültürü için büyük önem taşımaktadır."
      },
      {
        id: "geo163",
        difficulty: "medium",
        question: "Amazon Nehri hangi okyanusa dökülür?",
        options: ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu (Atlantik)", "Hint Okyanusu", "Kuzey Buz Denizi"],
        correctIndex: 1,
        explanation: "Amazon Nehri, yaklaşık 6.400 km uzunluğuyla dünyanın debisi en yüksek ve ikinci en uzun nehrini oluşturur. Güney Amerika'nın kuzeyinden doğuya doğru akarak Atlas Okyanusu'na dökülen nehrin havzası, dünya karasal biyoçeşitliliğinin yaklaşık %10'una ev sahipliği yapar."
      },
      {
        id: "geo164",
        difficulty: "medium",
        question: "Hangi iki kıtayı Süveyş Kanalı birbirinden ayırır?",
        options: ["Avrupa ve Asya", "Asya ve Afrika", "Afrika ve Amerika", "Asya ve Avustralya"],
        correctIndex: 1,
        explanation: "Süveyş Kanalı, Mısır topraklarında yer alır ve Asya ile Afrika kıtalarını birbirinden ayırırken Akdeniz ile Kızıldeniz'i birbirine bağlar. 1869'da açılan kanal, Avrupa-Asya ticaret yolunu Ümit Burnu'nu dolanmak zorunda kalmaksızın kısaltmıştır."
      },
      {
        id: "geo165",
        difficulty: "medium",
        question: "Dünya'nın en büyük okyanusu hangisidir?",
        options: ["Atlas Okyanusu", "Hint Okyanusu", "Kuzey Buz Denizi", "Büyük Okyanus (Pasifik)"],
        correctIndex: 3,
        explanation: "Pasifik Okyanusu, yaklaşık 165 milyon km² yüzölçümüyle dünyanın hem en büyük hem de en derin okyanusudur. Yeryüzü alanının yaklaşık üçte birine karşılık gelir ve Mariana Çukuru'nu (11.034 m derinliğiyle dünyanın en derin noktası) barındırır."
      },
      {
        id: "geo166",
        difficulty: "medium",
        question: "Dünyanın en kalabalık ülkesi hangisidir?",
        options: ["ABD", "Hindistan", "Çin", "Endonezya"],
        correctIndex: 1,
        explanation: "Hindistan, 2023 yılı itibarıyla 1,4 milyarı aşan nüfusuyla dünyada en fazla nüfusa sahip ülke konumuna gelmiştir; bu yıl Çin'i geride bırakmıştır. BM tahminlerine göre Hindistan nüfusunun yüzyılın ortasına kadar artmaya devam etmesi beklenmektedir."
      },
      {
        id: "geo167",
        difficulty: "hard",
        question: "Güney Kutbu'nda yer alan kıta hangisidir ve yüzölçümü yaklaşık kaçtır?",
        options: ["Avustralya, ~7,6 milyon km²", "Antarktika, ~14,2 milyon km²", "Arktika, ~14,0 milyon km²", "Afrika, ~30,3 milyon km²"],
        correctIndex: 1,
        explanation: "Antarktika, Güney Kutbu'nu çevreleyen ve yaklaşık 14,2 milyon km² yüzölçümüyle Avustralya ve Avrupa'dan büyük olan kıtadır. Kalıcı nüfusu bulunmaz; yalnızca araştırma üslerinde çalışan bilim insanları geçici olarak yaşar."
      },
      {
        id: "geo168",
        difficulty: "hard",
        question: "Dünya'nın Ekvator boyunca çevresinin uzunluğu yaklaşık kaçtır?",
        options: ["~32.000 km", "~40.075 km", "~46.000 km", "~51.500 km"],
        correctIndex: 1,
        explanation: "Dünya tam bir küre değil, kutuplardan biraz basık bir elipsoittir. Ekvator çevresinin uzunluğu yaklaşık 40.075 km'dir. Eratosthenes, MÖ 240'ta gölge açısı yöntemiyle bu değeri inanılmaz bir doğrulukla hesaplamıştır."
      },
      {
        id: "geo169",
        difficulty: "hard",
        question: "Yüzölçümü bakımından dünyanın en büyük ülkesi hangisidir?",
        options: ["Kanada", "Çin", "ABD", "Rusya"],
        correctIndex: 3,
        explanation: "Rusya, yaklaşık 17,1 milyon km² yüzölçümüyle dünyanın en büyük ülkesidir; 11 zaman diliminde yer alır ve Avrupa ile Asya kıtalarına yayılır. İkinci büyük ülke Kanada (~10 milyon km²), üçüncüsü ise ABD'dir (~9,8 milyon km²)."
      },
      {
        id: "geo170",
        difficulty: "hard",
        question: "'Bering Boğazı' hangi iki kara kütlesini birbirinden ayırır?",
        options: ["Kuzey Amerika ve Güney Amerika", "Avrupa ve Asya", "Asya ve Kuzey Amerika", "Asya ve Avustralya"],
        correctIndex: 2,
        explanation: "Bering Boğazı, Asya (Rusya/Sibirya) ile Kuzey Amerika (Alaska/ABD) kıtalarını birbirinden ayırır ve Kuzey Buz Denizi ile Pasifik arasındaki dar su yolunu oluşturur. Son buzul çağında deniz seviyesi daha düşük olduğunda bu bölge kara köprüsüydü; ilk insanların buradan Kuzey Amerika'ya geçtiği düşünülmektedir."
      },
      {
        id: "geo171",
        difficulty: "easy",
        question: "Dünyanın en uzun nehri hangisidir?",
        options: ["Amazon", "Nil", "Yangtze", "Mississippi"],
        correctIndex: 1,
        explanation: "Nil Nehri, yaklaşık 6.650 km uzunluğuyla genellikle dünyanın en uzun nehri olarak kabul edilir. Kaynağını Orta Afrika'dan alarak Kuzey Afrika boyunca akıp Akdeniz'e dökülür; Mısır medeniyetinin temelini oluşturur."
      },
      {
        id: "geo172",
        difficulty: "easy",
        question: "Afrika'nın en yüksek dağı hangisidir?",
        options: ["Mount Kenya", "Kilimanjaro", "Rwenzori", "Ras Dashen"],
        correctIndex: 1,
        explanation: "Tanzanya'da bulunan Kilimanjaro (5.895 m), Afrika'nın en yüksek zirvesidir. Aynı zamanda yürüyerek çıkılabilen en yüksek dağ olarak kabul edilir. Ekvatora yakın konumuna rağmen zirvesi yıl boyu karla kaplıdır."
      },
      {
        id: "geo173",
        difficulty: "medium",
        question: "Hangi ülke hem Avrupa hem de Asya kıtalarında toprak sahibidir?",
        options: ["Kazakistan", "Türkiye", "Azerbaycan", "Her üçü de"],
        correctIndex: 3,
        explanation: "Türkiye (Trakya ve Anadolu), Kazakistan (Ural Nehri'nin batısındaki topraklar) ve Azerbaycan (Nahçıvan özerk bölgesi dahil) hem Avrupa hem de Asya'da toprağa sahip ülkeler arasındadır. Rusya da bu gruba dahildir."
      },
      {
        id: "geo174",
        difficulty: "medium",
        question: "Hangi okyanus dünya okyanus alanının yaklaşık %46'sını kapsar?",
        options: ["Atlantik", "Hint Okyanusu", "Arktik Okyanusu", "Büyük Okyanus (Pasifik)"],
        correctIndex: 3,
        explanation: "Pasifik Okyanusu, yaklaşık 165 milyon km² ile dünyanın en büyük ve en derin okyanusu olup tüm karaların toplam alanından büyüktür. Aynı zamanda en derin yerin (Mariana Çukuru, ~11.000 m) bulunduğu okyanustur."
      },
      {
        id: "geo175",
        difficulty: "easy",
        question: "Güney Amerika'nın en büyük ülkesi hangisidir?",
        options: ["Arjantin", "Kolombiya", "Peru", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, yaklaşık 8,5 milyon km² yüzölçümüyle Güney Amerika'nın hem en büyük hem de en kalabalık ülkesidir. Dünyanın 5. büyük ülkesi olan Brezilya, Ekvador ve Şili dışında kıtanın tüm ülkeleriyle sınır paylaşır."
      },
      {
        id: "geo176",
        difficulty: "hard",
        question: "El Niño iklim olayı nedir?",
        options: ["Atlantik Okyanusu'nda görülen dönemsel fırtına sistemi", "Doğu Pasifik'te periyodik olarak yüzeye çıkan sıcak su kütlesi ve buna eşlik eden atmosferik değişimler", "Her yıl tekrarlayan Arktik yüksek basınç sistemi", "Büyük Sahra üzerinde oluşan toz fırtınaları"],
        correctIndex: 1,
        explanation: "El Niño, Doğu Pasifik'in ekvator kuşağında su yüzey sıcaklıklarının anormal biçimde yükselmesiyle bağlantılı iklim değişkenliğidir. Dünya genelinde yağış düzenlerini, fırtınaları ve tarımsal üretimi ciddi biçimde etkiler; Güney Osilasyonu ile birlikte ENSO adıyla anılır."
      },
      {
        id: "geo177",
        difficulty: "easy",
        question: "Hangi deniz tamamen karayla çevrilidir?",
        options: ["Karadeniz", "Adriyatik Denizi", "Hazar Denizi", "Baltık Denizi"],
        correctIndex: 2,
        explanation: "Hazar Denizi, hiçbir okyanusa bağlantısı bulunmayan dünyanın en büyük iç su kütlesidir. Teknik olarak göl özelliği taşısa da tarihsel ve jeopolitik nedenlerle 'deniz' olarak adlandırılmaktadır."
      },
      {
        id: "geo178",
        difficulty: "hard",
        question: "Dünyanın en büyük çölü hangisidir?",
        options: ["Sahra Çölü", "Gobi Çölü", "Arabistan Çölü", "Antarktika"],
        correctIndex: 3,
        explanation: "Antarktika, yaklaşık 14,2 milyon km² ile dünyanın en büyük çölüdür; zira yıllık yağış miktarı 200 mm'nin altında kalarak teknik olarak polar çöl kabul edilir. Sıcak çöller arasında en büyük olan Sahra ise yaklaşık 9,2 milyon km²'dir."
      },
      {
        id: "geo179",
        difficulty: "medium",
        question: "Hangi ülke dünyada en fazla sayıda aktif yanardağını barındırır?",
        options: ["İzlanda", "İtalya", "Endonezya", "Japonya"],
        correctIndex: 2,
        explanation: "Endonezya, 'Ateş Çemberi'nin tam ortasında yer alan coğrafyasıyla dünya genelinde 120'den fazla aktif yanardağına ev sahipliği yapar. Bu, herhangi bir ülkedeki en yüksek aktif yanardağ sayısını temsil eder."
      },
      {
        id: "geo180",
        difficulty: "easy",
        question: "Hangi ülke dünyada en fazla nüfusa sahiptir?",
        options: ["Hindistan", "Çin", "Amerika Birleşik Devletleri", "Endonezya"],
        correctIndex: 0,
        explanation: "BM verilerine göre Hindistan, 2023 yılı itibarıyla yaklaşık 1,43 milyar nüfusuyla Çin'i (yaklaşık 1,41 milyar) geçerek dünyanın en kalabalık ülkesi konumuna yükselmiştir."
      },
      {
        id: "geo181",
        difficulty: "medium",
        question: "Amazon Nehri hangi okyanusa dökülmektedir?",
        options: ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu (Atlantik)", "Hint Okyanusu", "Arktik Okyanusu"],
        correctIndex: 1,
        explanation: "Amazon Nehri, Peru'daki Andes Dağları'ndan doğar ve Brezilya boyunca yaklaşık 6.400 km akarak Atlantik Okyanusu'na dökülür. Dünyanın en geniş drenaj havzasına sahip olan Amazon, su hacmi bakımından diğer tüm nehirleri geride bırakır."
      },
      {
        id: "geo182",
        difficulty: "hard",
        question: "Çin'in 'Üç Boğaz Barajı' hangi nehir üzerinde kurulmuştur?",
        options: ["Sarı Irmak (Huang He)", "Yangtze Nehri", "Pearl Nehri", "Mekong Nehri"],
        correctIndex: 1,
        explanation: "Üç Boğaz Barajı (Three Gorges Dam), Yangtze Nehri üzerinde Hubei eyaletinde inşa edilmiş ve 2012'de tam kapasite işletmeye alınmıştır. Yaklaşık 22.500 MW kurulu gücüyle dünyanın en büyük hidroelektrik santralidir."
      },
      {
        id: "geo183",
        difficulty: "easy",
        question: "Kuzey Amerika'nın en büyük gölü hangisidir?",
        options: ["Süperior Gölü", "Michigan Gölü", "Huron Gölü", "Ontario Gölü"],
        correctIndex: 0,
        explanation: "Superior Gölü, yaklaşık 82.100 km² yüzey alanıyla Kuzey Amerika'nın ve dünyanın yüzey alanı bakımından en büyük tatlı su gölüdür. ABD ve Kanada sınırında yer alan bu göl, beş Büyük Göl'ün en büyüğüdür."
      },
      {
        id: "geo184",
        difficulty: "medium",
        question: "Roma şehrinin ortasından hangi nehir geçer?",
        options: ["Arno Nehri", "Po Nehri", "Tiber Nehri", "Volturno Nehri"],
        correctIndex: 2,
        explanation: "Tiber (İtalyanca: Tevere), Apenin Dağları'ndan kaynaklanarak Lazio bölgesini geçip Roma'nın merkezinden akarak Tyrrhen Denizi'ne dökülür. Roma uygarlığı bu nehrin kıyısında kurulmuştur."
      },
      {
        id: "geo185",
        difficulty: "easy",
        question: "Avrupa'nın en uzun nehri hangisidir?",
        options: ["Tuna", "Ren", "Volga", "Loire"],
        correctIndex: 2,
        explanation: "Volga, yaklaşık 3.530 km uzunluğuyla Avrupa'nın en uzun nehridir. Rusya içinde akarak Hazar Denizi'ne dökülür; Rus kültüründe ve tarihinde büyük simgesel öneme sahiptir."
      },
      {
        id: "geo186",
        difficulty: "hard",
        question: "Dünyanın en büyük mercan resifi sistemi nerede bulunur?",
        options: ["Malezya", "Avustralya", "Endonezya", "Filipinler"],
        correctIndex: 1,
        explanation: "Büyük Set Resifi (Great Barrier Reef), yaklaşık 2.300 km uzunluğuyla dünyanın en büyük mercan resifi sistemidir. Avustralya'nın kuzeydoğu kıyısı açıklarında yer alır ve uydu görüntülerinde gözlemlenebilen tek canlı yapıdır."
      },
      {
        id: "geo187",
        difficulty: "hard",
        question: "Himalayalar hangi iki tektonik levhanın çarpışmasıyla oluşmuştur?",
        options: ["Afrika ve Avrasya levhaları", "Hint-Avustralya ve Avrasya levhaları", "Pasifik ve Asya levhaları", "Arap ve Avrasya levhaları"],
        correctIndex: 1,
        explanation: "Himalayalar, yaklaşık 50-55 milyon yıl önce Hint-Avustralya levhasının Avrasya levhasıyla çarpışması sonucunda oluşmaya başlamıştır ve hâlâ yükselmektedir. Everest (8.849 m) dahil dünyanın en yüksek zirveleri bu dağ silsilesinde yer alır."
      },
      {
        id: "geo188",
        difficulty: "medium",
        question: "Hangi kıtada çöl alanı mutlak olarak en fazladır?",
        options: ["Avustralya", "Asya", "Afrika", "Güney Amerika"],
        correctIndex: 2,
        explanation: "Afrika, Sahra başta olmak üzere büyük Arap, Kalahari ve Namib çöllerine ev sahipliği yapmasıyla mutlak çöl alanı bakımından en büyük kıtadır. Sahra, yaklaşık 9,2 milyon km² ile dünyanın en büyük sıcak çölüdür."
      },
      {
        id: "geo189",
        difficulty: "medium",
        question: "Amazon yağmur ormanları dünya karasal biyoçeşitliliğinin yaklaşık ne kadarını barındırır?",
        options: ["%5", "%10", "%25", "%40"],
        correctIndex: 2,
        explanation: "Amazon yağmur ormanları, dünya karasal biyoçeşitliliğinin yaklaşık %10-25'ini barındırır. Bu alan, Brezilya'nın yanı sıra Kolombiya, Peru ve diğer sekiz ülkeye yayılmış olup yaklaşık 3 milyon farklı türe ev sahipliği yapar."
      },
      {
        id: "geo190",
        difficulty: "easy",
        question: "Türkiye, Suriye, Irak ve İran arasında paylaşılan tarihi coğrafi bölge hangisidir?",
        options: ["Mezopotamya", "Kürdistan", "Levant", "Anadolu"],
        correctIndex: 0,
        explanation: "Mezopotamya, Dicle ve Fırat nehirleri arasında kalan ve bugün büyük ölçüde Irak'ta yer alan tarihi bölgeye verilen addır. 'İki nehir arası ülke' anlamına gelen bu bölge, dünyanın ilk yazılı medeniyetlerine ev sahipliği yapmıştır."
      }
    ]
  },
  {
    id: "math",
    name: "Matematik",
    icon: "hash",
    color: "#ec4899",
    gradient: ["#ec4899", "#be185d"],
    image: require("../assets/images/category_math.png"),
    questions: [
      {
        id: "m1",
        difficulty: "easy",
        question: "0.999... (sonsuz dokuzlar) sayısı hangi değere tam olarak eşittir?",
        options: ["0.9999… ≠ 1, sadece yaklaşıktır", "1'e eşittir", "Tanımsızdır", "İrrasyonel bir sayıdır"],
        correctIndex: 1,
        explanation: "Matematiksel olarak 0.999... tam anlamıyla 1'e eşittir. Kanıt: x = 0.999... → 10x = 9.999... → 10x − x = 9 → 9x = 9 → x = 1. Bu, sonsuz seriler teorisinin temel bir sonucudur."
      },
      {
        id: "m2",
        difficulty: "easy",
        question: "Düzgün bir altıgenin iç açısı kaç derecedir?",
        options: ["108°", "120°", "135°", "150°"],
        correctIndex: 1,
        explanation: "Düzgün çokgenlerde iç açı = (n-2)×180/n formülüyle hesaplanır. Altıgen için n=6: (6-2)×180/6 = 720/6 = 120°. Beşgen için 108°, sekizgen için 135° olur."
      },
      {
        id: "m3",
        difficulty: "easy",
        question: "log₂(64) değeri kaçtır?",
        options: ["4", "5", "6", "7"],
        correctIndex: 2,
        explanation: "log₂(64) = 6'dır çünkü 2⁶ = 64'tür. Logaritma, 'tabanı 2 olan sayının sonucu 64 vermesi için gerekli üs' sorusunu yanıtlar."
      },
      {
        id: "m4",
        difficulty: "easy",
        question: "Bir düzgün beşgenin sahip olduğu köşegen sayısı kaçtır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "n kenarlı bir çokgende köşegen sayısı = n(n-3)/2 formülüyle bulunur. Beşgen için: 5×(5-3)/2 = 5×2/2 = 5. Dörtgenlerde 2, altıgenlerde 9 köşegen vardır."
      },
      {
        id: "m5",
        difficulty: "easy",
        question: "Bir küpün kenar uzunluğu 3 katına çıkarılırsa yüzey alanı kaç kat artar?",
        options: ["3 kat", "6 kat", "9 kat", "27 kat"],
        correctIndex: 2,
        explanation: "Yüzey alanı, uzunluğun karesiyle orantılı artar. Kenar 3 katına çıkarılınca yüzey alanı 3² = 9 kat artar. Hacim ise 3³ = 27 kat artar."
      },
      {
        id: "m6",
        difficulty: "easy",
        question: "Hem çift hem de asal olan tek sayı hangisidir?",
        options: ["1", "2", "4", "6"],
        correctIndex: 1,
        explanation: "2, hem çift hem de asal olan tek sayıdır. 1 asal kabul edilmez. Diğer çift sayılar (4, 6, 8...) 2'ye bölünebildiğinden asal değildir."
      },
      {
        id: "m7",
        difficulty: "easy",
        question: "İki tam sayının en büyük ortak bölenini bulmak için kullanılan klasik algoritma hangisidir?",
        options: ["Eratosten Kalburu", "Öklid Algoritması", "Newton Yöntemi", "Dinamik Programlama"],
        correctIndex: 1,
        explanation: "Öklid Algoritması (MÖ ~300), iki sayının EBOB'unu bulmak için büyük sayıyı küçüğe bölerek kalan kullanmaya dayalı iteratif bir yöntemdir. Hâlâ en verimli EBOB algoritmalarından biridir."
      },
      {
        id: "m8",
        difficulty: "easy",
        question: "π sayısı hangi sayı kategorisine girer?",
        options: ["Rasyonel sayı", "Tam sayı", "İrrasyonel sayı", "Karmaşık sayı"],
        correctIndex: 2,
        explanation: "π = 3.14159... irrasyonel bir sayıdır; yani iki tam sayının oranı olarak yazılamaz ve ondalık açılımı sonsuzdur, tekrar etmez. Ayrıca π aşkın (transandant) bir sayıdır."
      },
      {
        id: "m9",
        difficulty: "easy",
        question: "Möbius şeridi hangi özelliğiyle bilinir?",
        options: ["İki yüzü ve iki kenarı vardır", "Yalnızca bir yüzü ve bir kenarı vardır", "Üç boyutlu kapalı bir yüzeydir", "Sonsuz döngüde kendini kesiştirmez"],
        correctIndex: 1,
        explanation: "Möbius şeridi, topolojide yalnızca bir yüzeyi ve bir kenarı olan tuhaf bir yüzeydir. Düz bir kâğıt şeridinin bir ucu 180° bükülerek diğer ucuna yapıştırılmasıyla oluşturulur."
      },
      {
        id: "m10",
        difficulty: "easy",
        question: "Trigonometride cos(0°) değeri nedir?",
        options: ["0", "0.5", "√2/2", "1"],
        correctIndex: 3,
        explanation: "cos(0°) = 1'dir. Birim çember üzerinde 0 derecede X ekseni üzerindeki nokta (1, 0)'dır; bu noktanın x koordinatı kosinüsü verir. sin(0°) = 0, cos(90°) = 0, sin(90°) = 1'dir."
      },
      {
        id: "m11",
        difficulty: "easy",
        question: "0! (sıfırın faktöriyeli) kaçtır?",
        options: ["0", "1", "Tanımsız", "Sonsuz"],
        correctIndex: 1,
        explanation: "Matematiksel tanım gereği 0! = 1'dir. Faktöriyel, yalnızca negatif olmayan tam sayılar için tanımlıdır ve n! = n × (n-1) × ... × 1 şeklinde hesaplanır."
      },
      {
        id: "m12",
        difficulty: "easy",
        question: "Bir küpün kaç yüzü vardır?",
        options: ["4", "5", "6", "8"],
        correctIndex: 2,
        explanation: "Bir küpün 6 yüzü, 8 köşesi ve 12 kenarı vardır. Tüm yüzler eşit kare şeklindedir. Küp, düzenli çokyüzlülerin en bilinenidir."
      },
      {
        id: "m13",
        difficulty: "easy",
        question: "İki asal sayının toplamı hangi durumda tek sayı olur?",
        options: ["Her zaman", "Hiçbir zaman", "Birisi 2 olduğunda", "İkisi de tek olduğunda"],
        correctIndex: 2,
        explanation: "2 dışındaki tüm asal sayılar tektir. İki tek sayının toplamı çifttir. Tek sayı elde etmek için en küçük asal sayı olan 2 ile başka bir tek asal sayıyı toplamak gerekir."
      },
      {
        id: "m14",
        difficulty: "easy",
        question: "Pitagor teoreminde hipotenüs nasıl hesaplanır?",
        options: ["a + b", "a² + b²", "√(a² + b²)", "a × b"],
        correctIndex: 2,
        explanation: "Pitagor teoremi: a² + b² = c² ifadesindedir. Burada c hipotenüs, a ve b ise dik açının komşu kenarlarıdır. Hipotenüs: c = √(a² + b²) formülüyle bulunur."
      },
      {
        id: "m15",
        difficulty: "easy",
        question: "Hangi sayı hem çift hem de asal sayıdır?",
        options: ["1", "2", "4", "6"],
        correctIndex: 1,
        explanation: "2, hem çift hem de asal olan tek sayıdır. Diğer tüm çift sayılar 2'ye bölünebildiğinden asal değildir. 1 ise asal sayı tanımına uymadığı için asal kabul edilmez."
      },
      {
        id: "m16",
        difficulty: "easy",
        question: "5/8 ondalık olarak ne ifade eder?",
        options: ["0.525", "0.625", "0.725", "0.825"],
        correctIndex: 1,
        explanation: "5 ÷ 8 = 0,625'tir. Kesri ondalığa çevirmek için pay sayısını paydaya böleriz. 5/8 = 0,625 olduğundan bu sayı 0,625'tir."
      },
      {
        id: "m17",
        difficulty: "easy",
        question: "Logaritma log₁₀(1000) değeri nedir?",
        options: ["2", "3", "4", "10"],
        correctIndex: 1,
        explanation: "log₁₀(1000) = 3'tür çünkü 10³ = 1000'dir. Logaritma, bir üs fonksiyonunun tersidir; yani 10'u kaçıncı kuvvete yükseltince 1000 elde ederiz sorusunun yanıtı 3'tür."
      },
      {
        id: "m18",
        difficulty: "easy",
        question: "Bir dikdörtgenin çevresi nasıl hesaplanır?",
        options: ["uzunluk × genişlik", "2 × (uzunluk + genişlik)", "uzunluk + genişlik", "4 × uzunluk"],
        correctIndex: 1,
        explanation: "Dikdörtgenin çevresi 2 × (uzunluk + genişlik) formülüyle hesaplanır. Alan ise uzunluk × genişlik şeklinde bulunur."
      },
      {
        id: "m19",
        difficulty: "easy",
        question: "Yüzde 25 indirim uygulanan 200 TL'lik ürünün fiyatı nedir?",
        options: ["125 TL", "150 TL", "160 TL", "175 TL"],
        correctIndex: 1,
        explanation: "%25 indirim = 200 × 0,25 = 50 TL indirim. 200 - 50 = 150 TL. Alternatif olarak 200 × 0,75 = 150 TL şeklinde de hesaplanabilir."
      },
      {
        id: "m20",
        difficulty: "easy",
        question: "Bir üçgenin alanı nasıl hesaplanır?",
        options: ["taban × yükseklik", "(taban × yükseklik) / 2", "taban + yükseklik", "taban² × yükseklik"],
        correctIndex: 1,
        explanation: "Bir üçgenin alanı, (taban × yükseklik) / 2 formülüyle hesaplanır. Burada yükseklik, tabana dik olan iç yüksekliktir."
      },
      {
        id: "m21",
        difficulty: "easy",
        question: "İki sayının EBOB'u ne anlama gelir?",
        options: ["En Büyük Ortak Böleni", "En Büyük Ortak Bölen Olmayan", "En Büyük Ondalık Bölü", "En Büyük Ortak Birimi"],
        correctIndex: 0,
        explanation: "EBOB (En Büyük Ortak Bölen), iki veya daha fazla sayının ortak bölenlerinden en büyüğüdür. Örneğin 12 ve 18'in EBOB'u 6'dır çünkü her ikisi de 6'ya bölünür."
      },
      {
        id: "m22",
        difficulty: "easy",
        question: "(-3)² eşittir?",
        options: ["-9", "9", "-6", "6"],
        correctIndex: 1,
        explanation: "(-3)² = (-3) × (-3) = 9'dur. Negatif bir sayının çift kuvveti her zaman pozitiftir. Negatif işareti parantez içindeyse kuvvet de işarete uygulanır."
      },
      {
        id: "m23",
        difficulty: "easy",
        question: "Bir kürenin hacmi hangi formülle hesaplanır?",
        options: ["4πr²", "(4/3)πr³", "2πr³", "πr³"],
        correctIndex: 1,
        explanation: "Kürenin hacmi V = (4/3)πr³ formülüyle hesaplanır. Kürenin yüzey alanı ise 4πr² formülüyle bulunur. Burada r kürenin yarıçapıdır."
      },
      {
        id: "m24",
        difficulty: "easy",
        question: "Ondalık sayı 0,75'in kesir karşılığı nedir?",
        options: ["1/2", "2/3", "3/4", "5/6"],
        correctIndex: 2,
        explanation: "0,75 = 75/100 = 3/4'tür. Kesri sadeleştirmek için pay ve paydayı ortak bölenlerine böleriz: 75 ÷ 25 = 3, 100 ÷ 25 = 4, yani 3/4."
      },
      {
        id: "m25",
        difficulty: "easy",
        question: "3 + 4 × 2 işleminin sonucu nedir?",
        options: ["14", "11", "10", "9"],
        correctIndex: 1,
        explanation: "İşlem önceliği kuralına göre çarpma işlemi toplama işleminden önce yapılır: 4 × 2 = 8, ardından 3 + 8 = 11. Parantez kullanılmadığında bu kural geçerlidir."
      },
      {
        id: "m26",
        difficulty: "easy",
        question: "Koordinat sisteminde orijin noktası neresidir?",
        options: ["(1,1)", "(0,1)", "(1,0)", "(0,0)"],
        correctIndex: 3,
        explanation: "Kartezyen koordinat sisteminde orijin, x ve y eksenlerinin kesiştiği (0,0) noktasıdır. Tüm koordinatlar bu noktaya göre belirlenir."
      },
      {
        id: "m27",
        difficulty: "easy",
        question: "15 sayısının 40 olarak 100 üzerinden yüzdesi nedir?",
        options: ["%25", "%30", "%37,5", "%40"],
        correctIndex: 2,
        explanation: "15/40 = 0,375 = %37,5'tir. Yüzde hesabı için (küçük sayı ÷ büyük sayı) × 100 formülü kullanılır: (15 ÷ 40) × 100 = 37,5."
      },
      {
        id: "m28",
        difficulty: "easy",
        question: "Bir doğrunun eğimi 0 ise bu ne anlama gelir?",
        options: ["Doğru dikey", "Doğru yatay", "Doğru eğik", "Eğim tanımsız"],
        correctIndex: 1,
        explanation: "Eğim (m) = 0 olan bir doğru tamamen yatay, yani x eksenine paralel bir doğrudur. Dikey doğruların eğimi ise tanımsızdır (sonsuz)."
      },
      {
        id: "m29",
        difficulty: "easy",
        question: "1'den 10'a kadar olan sayıların toplamı nedir?",
        options: ["45", "50", "55", "60"],
        correctIndex: 2,
        explanation: "1+2+3+4+5+6+7+8+9+10 = 55'tir. Bu, Gauss formülüyle de hesaplanabilir: n×(n+1)/2 = 10×11/2 = 55."
      },
      {
        id: "m30",
        difficulty: "easy",
        question: "Olasılık teorisinde bir olayın olasılığı kaç ile kaç arasındadır?",
        options: ["0 ile 10 arası", "0 ile 1 arası", "1 ile 100 arası", "-1 ile 1 arası"],
        correctIndex: 1,
        explanation: "Olasılık değerleri 0 (imkansız olay) ile 1 (kesin olay) arasında değişir. Yüzde olarak ifade edildiğinde %0 ile %100 arasındadır."
      },
      {
        id: "m31",
        difficulty: "easy",
        question: "Hangi sayı ne asal ne de bileşik sayıdır?",
        options: ["0", "1", "2", "4"],
        correctIndex: 1,
        explanation: "1 sayısı, ne asal (yalnızca 1'den büyük tam sayılar asal olabilir) ne de bileşik sayı olarak kabul edilir. 1, özel bir kategori oluşturur. 2, tek çift asal sayıdır."
      },
      {
        id: "m32",
        difficulty: "easy",
        question: "Fibonacci dizisinin ilk altı terimi hangileridir?",
        options: ["1, 2, 3, 5, 8, 13", "0, 1, 1, 2, 3, 5", "1, 1, 2, 4, 8, 16", "0, 2, 4, 6, 8, 10"],
        correctIndex: 1,
        explanation: "Fibonacci dizisinde her terim, kendinden önceki iki terimin toplamıdır: 0, 1, 1, 2, 3, 5, 8, 13... Bu dizi doğada (çiçek yaprakları, kabuklar) sıkça görülür ve altın oranla yakından ilgilidir."
      },
      {
        id: "m33",
        difficulty: "easy",
        question: "Euler sayısı 'e' yaklaşık olarak kaçtır?",
        options: ["1,618", "2,718", "3,141", "4,669"],
        correctIndex: 1,
        explanation: "e ≈ 2,71828... olup irrasyonel ve transandant bir sayıdır. Doğal logaritmanın tabanı olan e, faiz hesabı, büyüme-çürüme modelleri ve diferansiyel denklemlerde geniş uygulama alanı bulur."
      },
      {
        id: "m34",
        difficulty: "easy",
        question: "√2 (2'nin karekökü) hangi sayı türüne girer?",
        options: ["Tam sayı", "Rasyonel sayı", "İrrasyonel sayı", "Karmaşık sayı"],
        correctIndex: 2,
        explanation: "√2 ≈ 1,41421… bir irrasyonel sayıdır; yani iki tam sayının oranı (p/q) olarak yazılamaz. Bu, Antik Yunan'da Pisagor okulu tarafından keşfedilmiş ve döneminde büyük şaşkınlık yaratmıştır."
      },
      {
        id: "m35",
        difficulty: "easy",
        question: "Asal sayıların sayısı kaçtır?",
        options: ["100", "10.000", "Sonlu ama bilinmiyor", "Sonsuz"],
        correctIndex: 3,
        explanation: "Asal sayıların sonsuz olduğunu MÖ 300'de Öklid kanıtlamıştır. Kanıt fikri: Eğer sonlu sayıda asal olsaydı, hepsinin çarpımına 1 ekleyince elde edilen sayı yeni bir asal sayı olurdu — bu çelişki gösterir ki asal sayılar sonsuzdur."
      },
      {
        id: "m36",
        difficulty: "easy",
        question: "Trigonometride sin²θ + cos²θ neye eşittir?",
        options: ["0", "π", "1", "2"],
        correctIndex: 2,
        explanation: "Pisagor trigonometrik özdeşliğine göre sin²θ + cos²θ = 1'dir. Bu özdeşlik, birim çemberin tanımından doğrudan çıkar ve trigonometrik hesaplamalarda sıklıkla kullanılır."
      },
      {
        id: "m37",
        difficulty: "easy",
        question: "2¹⁰ kaçtır?",
        options: ["256", "512", "1.024", "2.048"],
        correctIndex: 2,
        explanation: "2¹⁰ = 1.024'tür. Bu değer bilgisayar biliminde temel önem taşır; 1 kilobayt ≈ 1.024 bayt ve 1 megabayt ≈ 1.024 kilobayttır. İkinin kuvvetleri, ikili sayı sistemiyle doğrudan ilgilidir."
      },
      {
        id: "m38",
        difficulty: "medium",
        question: "Yarıçapı 5 cm olan bir dairenin alanı nedir?",
        options: ["10π cm²", "20π cm²", "25π cm²", "50π cm²"],
        correctIndex: 2,
        explanation: "Daire alanı A = πr² formülüyle hesaplanır. r = 5 cm için A = π × 5² = 25π cm² ≈ 78,54 cm² olur. Çevre ise C = 2πr = 10π cm ≈ 31,42 cm'dir."
      },
      {
        id: "m39",
        difficulty: "medium",
        question: "Türev (derivative) ne anlama gelir?",
        options: ["Toplam alan", "Anlık değişim oranı", "İki sayı arasındaki fark", "Bir fonksiyonun maksimum değeri"],
        correctIndex: 1,
        explanation: "Türev, bir fonksiyonun herhangi bir noktadaki anlık değişim oranını ifade eder. Geometrik olarak eğriye teğet doğrunun eğimidir. Fizik, mühendislik ve ekonomide geniş uygulama alanı bulur."
      },
      {
        id: "m40",
        difficulty: "medium",
        question: "İntegral (integral) matematiksel olarak ne anlama gelir?",
        options: ["Türevin tersi ve alan hesabı", "Sayıların çarpımı", "Mutlak değer fonksiyonu", "Logaritmanın tersi"],
        correctIndex: 0,
        explanation: "İntegral, türevin tersi olan antitürev işlemidir ve aynı zamanda bir eğri altındaki alanı hesaplamak için kullanılır. Newton-Leibniz teoremi, türev ve integrali birbirine bağlar."
      },
      {
        id: "m41",
        difficulty: "medium",
        question: "Pascal üçgeni ne amaçla kullanılır?",
        options: ["Asal sayıları bulmak", "Binom katsayılarını göstermek", "Geometrik şekil hesabı", "Trigonometrik değerler"],
        correctIndex: 1,
        explanation: "Pascal üçgeni, binom açılımlarındaki katsayıları görsel olarak düzenler: (a + b)ⁿ ifadesinin katsayıları, n. satırda sıralanır. Aynı zamanda kombinasyon değerlerini, Fibonacci sayılarını ve daha pek çok matematiksel ilişkiyi barındırır."
      },
      {
        id: "m42",
        difficulty: "medium",
        question: "n eleman arasından r tanesini seçmenin kombinasyon sayısı formülü nedir?",
        options: ["n × r", "n! / r!", "n! / (r! × (n-r)!)", "(n-r)! / n!"],
        correctIndex: 2,
        explanation: "Kombinasyon formülü C(n,r) = n! / (r! × (n-r)!) şeklinde ifade edilir. Permütasyondan farklı olarak kombinasyonda sıra önemli değildir; yalnızca seçilen elemanlar sayılır."
      },
      {
        id: "m43",
        difficulty: "medium",
        question: "Geometrik dizi nedir?",
        options: ["Her terim bir öncekinden sabit miktarda fazla olandır", "Her terim bir öncekinin sabit katı olandır", "Elemanları asal sayı olan dizidir", "Ardışık tam sayılardan oluşan dizidir"],
        correctIndex: 1,
        explanation: "Geometrik dizide her terim, kendinden öncekinin sabit bir oranla (ortak oran, q) çarpılmasıyla elde edilir. Örneğin 2, 6, 18, 54,… dizisinin ortak oranı 3'tür. Aritmetik dizide ise sabit bir sayı eklenir."
      },
      {
        id: "m44",
        difficulty: "medium",
        question: "Vektör ile skaler büyüklük arasındaki temel fark nedir?",
        options: ["Vektörün birimi yoktur", "Vektörün hem büyüklüğü hem yönü vardır", "Skaler sayıdan büyüktür", "Vektörler yalnızca fizikte kullanılır"],
        correctIndex: 1,
        explanation: "Skaler büyüklükler yalnızca sayısal değerle (örn. sıcaklık, kütle) tanımlanırken vektörler hem büyüklük hem de yönle (örn. kuvvet, hız, ivme) tanımlanır. Bu fark, mühendislik ve fiziğin temel ayrımlarından biridir."
      },
      {
        id: "m45",
        difficulty: "medium",
        question: "Negatif bir sayının karekökü gerçek sayı sisteminde nedir?",
        options: ["Sıfır", "Negatif sayı", "Sanal sayı (i)", "Tanımsızdır"],
        correctIndex: 2,
        explanation: "Gerçek sayılarda negatif bir sayının karekökü tanımlı değildir. Bunun için sanal sayı birimi i = √(−1) tanımlanmış ve karmaşık sayılar sistemi oluşturulmuştur. Elektrik mühendisliği ve kuantum fiziğinde geniş uygulama alanı bulur."
      },
      {
        id: "m46",
        difficulty: "medium",
        question: "İki sayının EKOK'u ne anlama gelir?",
        options: ["En Küçük Ortak Kat", "En Küçük Ortak Kesir", "En Küçük Ortak Bölen", "En Küçük Ortak Kümesi"],
        correctIndex: 0,
        explanation: "EKOK (En Küçük Ortak Kat), iki veya daha fazla sayının ortak katlarının en küçüğüdür. Örneğin 4 ve 6'nın EKOK'u 12'dir. Kesirlerde toplama ve çıkarma işlemlerinde ortak payda bulmak için kullanılır."
      },
      {
        id: "m47",
        difficulty: "medium",
        question: "Bir üçgenin iç açılarının toplamı kaç derecedir?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
        explanation: "Öklidyen (düz) geometride bir üçgenin iç açılarının toplamı her zaman 180°'dir. Bu temel geometri teoremi, paralel doğrular ve açı özellikleriyle kolayca ispatlanabilir."
      },
      {
        id: "m48",
        difficulty: "medium",
        question: "Permütasyon ile kombinasyon arasındaki temel fark nedir?",
        options: ["Permütasyonda tekrar yapılabilir", "Permütasyonda sıra önemlidir", "Kombinasyonda daha fazla sonuç çıkar", "İkisi aynı sonucu verir"],
        correctIndex: 1,
        explanation: "Permütasyonda seçilen elemanların sırası önemlidir (AB ≠ BA); kombinasyonda ise sıra fark etmez (AB = BA). Bu nedenle aynı n ve r değerleri için permütasyon sayısı her zaman kombinasyon sayısından büyük ya da eşittir."
      },
      {
        id: "m49",
        difficulty: "medium",
        question: "Altın oran (φ) yaklaşık olarak kaçtır?",
        options: ["1,414", "1,618", "2,236", "3,141"],
        correctIndex: 1,
        explanation: "Altın oran φ ≈ 1,6180… olup irrasyonel bir sayıdır. Fibonacci dizisindeki ardışık terimlerin oranı altın orana yaklaşır. Mimaride, sanatta ve doğada sıkça karşılaşılan bu oran estetik bir uyum simgesi sayılır."
      },
      {
        id: "m50",
        difficulty: "medium",
        question: "Olasılık teorisinde bağımsız iki olayın birlikte gerçekleşme olasılığı nasıl hesaplanır?",
        options: ["Olasılıkların toplamıyla", "Olasılıkların farkıyla", "Olasılıkların çarpımıyla", "Olasılıkların bölümüyle"],
        correctIndex: 2,
        explanation: "Bağımsız iki olayın (A ve B) birlikte gerçekleşme olasılığı P(A ve B) = P(A) × P(B) formülüyle bulunur. Örneğin bir paranın iki kez atılmasında iki tura gelme olasılığı: 1/2 × 1/2 = 1/4'tür."
      },
      {
        id: "m51",
        difficulty: "medium",
        question: "Koordinat düzleminde eğimi tanımsız olan (dikey) doğrunun denklemi nasıl ifade edilir?",
        options: ["y = b", "x = a", "y = mx + b", "ax + by = 0"],
        correctIndex: 1,
        explanation: "Dikey doğru x = a şeklinde ifade edilir ve eğimi tanımsızdır (sonsuz). Yatay doğru ise y = b şeklindedir ve eğimi 0'dır. Bu iki özel durum standart y = mx + b formuna uymaz."
      },
      {
        id: "m52",
        difficulty: "medium",
        question: "Pi sayısının (π) ilk iki ondalık basamağı nedir?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctIndex: 1,
        explanation: "Pi (π), bir dairenin çevresinin çapına oranıdır ve yaklaşık 3.14159... değerini alır. Ondalık açılımı sonsuzdur ve tekrar eden bir örüntü göstermez; bu nedenle irrasyonel (tam kesre dönüştürülemeyen) bir sayıdır."
      },
      {
        id: "m53",
        difficulty: "medium",
        question: "5! (5 faktöriyel) kaçtır?",
        options: ["60", "100", "120", "150"],
        correctIndex: 2,
        explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120. Faktöriyel (n!), 1'den n'e kadar tüm pozitif tam sayıların çarpımıdır. Kombinasyon ve permütasyon hesaplarında sıkça kullanılır."
      },
      {
        id: "m54",
        difficulty: "medium",
        question: "Fibonacci dizisinde 1, 1, 2, 3, 5, 8'den sonra gelen sayı nedir?",
        options: ["11", "12", "13", "14"],
        correctIndex: 2,
        explanation: "Fibonacci dizisinde her sayı, kendisinden önceki iki sayının toplamıdır: 5 + 8 = 13. Bu dizi doğada sarmal deniz kabuğu, çiçek yaprakları ve dal düzenlerinde sıklıkla karşılaşılan altın oranla yakından ilişkilidir."
      },
      {
        id: "m55",
        difficulty: "medium",
        question: "Bir dik üçgende en uzun kenar nasıl adlandırılır?",
        options: ["Kare kenar", "Hipotenüs", "Dik kenar", "Çevre kenarı"],
        correctIndex: 1,
        explanation: "Hipotenüs, dik açının karşısında yer alan ve dik üçgenin en uzun kenarıdır. Pisagor Teoremi'ne göre a² + b² = c² bağıntısı geçerlidir; burada c hipotenüsü, a ve b ise dik kenarları temsil eder."
      },
      {
        id: "m56",
        difficulty: "medium",
        question: "1 metrekarenin kaç santimetrekareye eşit olduğu nedir?",
        options: ["100 cm²", "1.000 cm²", "10.000 cm²", "100.000 cm²"],
        correctIndex: 2,
        explanation: "1 metre = 100 santimetre olduğundan 1 m² = 100 cm × 100 cm = 10.000 cm²'dir. Alan birimlerinde uzunluk biriminin karesi alınır; bu nedenle dönüşüm katsayısı da karesine çıkar."
      },
      {
        id: "m57",
        difficulty: "medium",
        question: "Altın oran (φ, Phi) yaklaşık hangi değere eşittir?",
        options: ["1.414", "1.618", "1.732", "2.718"],
        correctIndex: 1,
        explanation: "Altın oran (φ ≈ 1.618), iki büyüklük arasındaki oranın bütünün büyük parçaya olan oranına eşit olduğu özel sayıdır. Doğada sarmal deniz kabukları, Güneşçiçeği tohumu dizilişleri ve insan vücudu oranlarında karşılaşılır."
      },
      {
        id: "m58",
        difficulty: "medium",
        question: "Venn Diyagramı ne için kullanılır?",
        options: ["Grafik verilerini analiz etmek", "Kümeler arasındaki ilişkileri görsel göstermek", "Koordinat sistemlerini açıklamak", "Olasılık dağılımlarını hesaplamak"],
        correctIndex: 1,
        explanation: "Venn Diyagramı, kümeler arasındaki birleşim, kesişim ve farkı görsel olarak temsil etmek için kullanılır. 1880'de İngiliz matematikçi John Venn tarafından geliştirilmiş; mantık, istatistik ve küme teorisinde yaygın kullanım alanı bulmuştur."
      },
      {
        id: "m59",
        difficulty: "medium",
        question: "Düzgün altıgenin iç açılarının toplamı kaç derecedir?",
        options: ["540°", "720°", "900°", "1080°"],
        correctIndex: 1,
        explanation: "Bir n-genin iç açılar toplamı (n − 2) × 180° formülüyle hesaplanır. Altıgen için: (6 − 2) × 180° = 4 × 180° = 720°. Her bir iç açı ise 720° ÷ 6 = 120°'dir."
      },
      {
        id: "m60",
        difficulty: "medium",
        question: "Bir olayın gerçekleşme olasılığı hangi değer aralığında yer alır?",
        options: ["–1 ile 1 arasında", "0 ile 1 arasında", "0 ile 100 arasında", "1 ile 10 arasında"],
        correctIndex: 1,
        explanation: "Olasılık değeri 0 (imkânsız olay) ile 1 (kesin olay) arasında bir sayıdır. Yüzde olarak ifade edildiğinde %0 ile %100 arasında yer alır. Hiçbir olay negatif olasılıklı ya da 1'den büyük olamaz."
      },
      {
        id: "m61",
        difficulty: "medium",
        question: "Logaritmayı icat eden matematikçi kimdir?",
        options: ["Leonhard Euler", "John Napier", "Isaac Newton", "Carl Friedrich Gauss"],
        correctIndex: 1,
        explanation: "Logaritma, 17. yüzyıl başında İskoçyalı matematikçi John Napier tarafından icat edilmiştir. Uzun çarpma ve bölme işlemlerini basitleştirmek amacıyla geliştirilen logaritmalar, modern mühendislik, fizik ve bilgisayar biliminin temel araçlarından biridir."
      },
      {
        id: "m62",
        difficulty: "medium",
        question: "Pisagor teoremi hangisidir?",
        options: ["a + b = c", "a² + b² = c²", "a × b = c²", "a³ + b³ = c³"],
        correctIndex: 1,
        explanation: "Pisagor teoremi, bir dik üçgende iki dik kenarın karelerinin toplamının hipotenüsün (en uzun kenar) karesine eşit olduğunu ifade eder: a² + b² = c². MÖ 6. yüzyılda yaşayan Pisagor'a atfedilen bu teorem, geometrinin temel taşlarından biridir."
      },
      {
        id: "m63",
        difficulty: "medium",
        question: "Bir dairenin alanı hangi formülle hesaplanır?",
        options: ["2πr", "πr²", "πd", "2πr²"],
        correctIndex: 1,
        explanation: "Dairenin alanı = πr² formülüyle hesaplanır; burada r yarıçap, π ≈ 3,14159'dur. Çevre ise 2πr formülüyle bulunur. Bu formüller, Arşimet tarafından çevreler yöntemiyle ilk kez yaklaşık olarak hesaplanmıştır."
      },
      {
        id: "m64",
        difficulty: "medium",
        question: "Fibonacci dizisinin ilk beş terimi nedir?",
        options: ["1, 2, 4, 8, 16", "0, 1, 1, 2, 3", "1, 1, 2, 3, 5", "1, 3, 5, 7, 9"],
        correctIndex: 2,
        explanation: "Fibonacci dizisi 1, 1, 2, 3, 5, 8, 13, 21… şeklinde ilerler. Her terim, kendinden önceki iki terimin toplamına eşittir. İtalyan matematikçi Leonardo Fibonacci'ye atfedilen bu dizi, doğada (çiçek yaprakları, deniz kabukları) ve sanatta sıkça karşılaşılan altın oran ile yakın ilişkilidir."
      },
      {
        id: "m65",
        difficulty: "medium",
        question: "En küçük asal sayı hangisidir?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2,
        explanation: "En küçük asal sayı 2'dir. Asal sayı; 1'den ve kendisinden başka böleni olmayan pozitif tam sayıdır. 2, aynı zamanda çift olan tek asal sayıdır. 1 ise asal sayı tanımına girmez."
      },
      {
        id: "m66",
        difficulty: "medium",
        question: "Bir küpün yüzey alanı hangi formülle bulunur?",
        options: ["a³", "4a²", "6a²", "8a²"],
        correctIndex: 2,
        explanation: "Bir küpün 6 kare yüzü olduğundan yüzey alanı 6a² (a: kenar uzunluğu) formülüyle hesaplanır. Küpün hacmi ise a³ ile bulunur. Bu temel formüller uzay geometrisinin yapı taşlarındandır."
      },
      {
        id: "m67",
        difficulty: "medium",
        question: "Trigonometride sin(90°) kaçtır?",
        options: ["0", "0,5", "√2/2", "1"],
        correctIndex: 3,
        explanation: "sin(90°) = 1'dir. Birim çember tanımına göre 90° (π/2 radyan) açısında sinüs değeri 1'e, kosinüs değeri 0'a ulaşır. Bu değerler trigonometrik fonksiyonların maksimum noktasını simgeler."
      },
      {
        id: "m68",
        difficulty: "medium",
        question: "İstatistikte 'medyan' ne anlama gelir?",
        options: ["Verilerin ortalaması", "En sık tekrarlanan değer", "Sıralanmış verilerin ortasındaki değer", "Verilerin aralığı"],
        correctIndex: 2,
        explanation: "Medyan, küçükten büyüğe sıralanmış bir veri kümesinin tam ortasındaki değerdir. Çift sayıda veri varsa ortadaki iki değerin ortalaması alınır. Medyan, aykırı değerlerden aritmetik ortalamaya kıyasla daha az etkilendiğinden veri analizinde sıkça tercih edilir."
      },
      {
        id: "m69",
        difficulty: "medium",
        question: "0! (sıfır faktöriyel) kaçtır?",
        options: ["0", "1", "Tanımsız", "Sonsuz"],
        correctIndex: 1,
        explanation: "0! = 1 olarak tanımlanmıştır. Bu tanım, kombinatorik ve olasılık hesaplamalarında formüllerin tutarlı çalışması için matematiksel bir uzlaşımla belirlenmiştir. n! = n × (n-1) × … × 1 kuralını 0'a kadar uygulayınca da bu sonuca ulaşılır."
      },
      {
        id: "m70",
        difficulty: "medium",
        question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
        explanation: "Öklidyen geometride bir üçgenin iç açıları toplamı her zaman 180°'dir. Bu, Öklid'in paralel doğrular aksiyomuna dayanan temel bir geometri teoremidir. Küresel (eliptik) veya hiperbolik geometride bu toplam değişebilir."
      },
      {
        id: "m71",
        difficulty: "medium",
        question: "Sonsuzluk sembolü (∞) kim tarafından kullanılmaya başlanmıştır?",
        options: ["Isaac Newton", "Gottfried Wilhelm Leibniz", "John Wallis", "Leonhard Euler"],
        correctIndex: 2,
        explanation: "Sonsuzluk sembolü ∞ (lemniskat), 1655 yılında İngiliz matematikçi John Wallis tarafından kullanılmaya başlanmıştır. Latince 'sonsuz' anlamına gelen 'infinitas' sözcüğünden esinlenen sembol, bugün matematik ve fizikte standart olarak kullanılmaktadır."
      },
      {
        id: "m72",
        difficulty: "medium",
        question: "Türev neyi ifade eder?",
        options: ["Bir fonksiyonun toplam değişimini", "Bir fonksiyonun anlık değişim oranını", "Eğri altında kalan alanı", "İki sayı arasındaki farkı"],
        correctIndex: 1,
        explanation: "Türev, bir fonksiyonun belirli bir noktadaki anlık değişim oranını (eğimini) verir. f'(x) şeklinde gösterilir ve diferansiyel hesabın (kalkülüsün) temel kavramlarından biridir. Newton ve Leibniz bağımsız olarak 17. yüzyılda kalkülüsü geliştirmiştir."
      },
      {
        id: "m73",
        difficulty: "medium",
        question: "Olasılık değerleri hangi aralıkta yer alır?",
        options: ["-1 ile 1 arasında", "0 ile 1 arasında", "0 ile 100 arasında", "1 ile 10 arasında"],
        correctIndex: 1,
        explanation: "Olasılık değerleri 0 (imkânsız olay) ile 1 (kesin olay) arasında bir sayıdır. Yüzde olarak ifade edildiğinde %0 ile %100 arasında yer alır. Hiçbir olay negatif olasılıklı ya da 1'den büyük bir olasılığa sahip olamaz."
      },
      {
        id: "m74",
        difficulty: "medium",
        question: "Bir dikdörtgenin alanı nasıl hesaplanır?",
        options: ["(Uzunluk + Genişlik) × 2", "Uzunluk × Genişlik", "Uzunluk² + Genişlik²", "Uzunluk ÷ Genişlik"],
        correctIndex: 1,
        explanation: "Dikdörtgenin alanı = Uzunluk × Genişlik formülüyle hesaplanır. Çevresi ise (Uzunluk + Genişlik) × 2 ile bulunur. Dikdörtgen, dört dik açıdan oluşan; karşılıklı kenarları eşit ve paralel olan dörtgendir."
      },
      {
        id: "m75",
        difficulty: "hard",
        question: "İki sayının EBOB (En Büyük Ortak Bölen) ne anlama gelir?",
        options: ["İki sayının çarpımı", "İki sayının toplamı", "İki sayıyı birden bölen en büyük tam sayı", "İki sayının en küçük katı"],
        correctIndex: 2,
        explanation: "EBOB, iki ya da daha fazla tam sayıyı birden tam bölen en büyük pozitif tam sayıdır. Örneğin 12 ve 18'in EBOB'u 6'dır çünkü hem 12'yi hem 18'i bölen en büyük sayı 6'dır. EBOB hesaplamak için Öklid algoritması etkin biçimde kullanılabilir."
      },
      {
        id: "m76",
        difficulty: "hard",
        question: "Normal dağılım eğrisiyle özdeşleşen matematikçi kimdir?",
        options: ["Isaac Newton", "Blaise Pascal", "Carl Friedrich Gauss", "Pierre-Simon Laplace"],
        correctIndex: 2,
        explanation: "Normal dağılım, Gauss dağılımı olarak da bilinir çünkü Alman matematikçi Carl Friedrich Gauss bu dağılımı ayrıntılı biçimde incelemiştir. Simetrik çan eğrisi şekliyle tanınan normal dağılım, doğal ve sosyal bilimlerde en yaygın kullanılan olasılık dağılımıdır."
      },
      {
        id: "m77",
        difficulty: "hard",
        question: "Bir koni hacmi hangi formülle hesaplanır?",
        options: ["πr²h", "(1/2)πr²h", "(1/3)πr²h", "(2/3)πr³"],
        correctIndex: 2,
        explanation: "Koni hacmi = (1/3)πr²h formülüyle hesaplanır; r taban dairenin yarıçapı, h ise yüksekliktir. Silindir hacminin üçte birine eşit olan bu formül, Arşimet tarafından MÖ 3. yüzyılda ispatlanmıştır."
      },
      {
        id: "m78",
        difficulty: "hard",
        question: "Matematikte 'matris' nedir?",
        options: ["Asal sayıların listesi", "Bir fonksiyonun türevi", "Sayıların satır ve sütunlar halinde düzenlendiği dikdörtgensel dizi", "İki değişkenli denklem"],
        correctIndex: 2,
        explanation: "Matris, sayıların (ya da diğer matematiksel nesnelerin) satır ve sütunlar biçiminde dikdörtgensel bir tabloda düzenlendiği yapıdır. Doğrusal denklem sistemlerini çözmek, grafik dönüşümlerini ifade etmek ve yapay zekâ algoritmalarında geniş kullanım alanına sahiptir."
      },
      {
        id: "m79",
        difficulty: "hard",
        question: "Bir üçgenin alanı nasıl hesaplanır?",
        options: ["Taban × Yükseklik", "(Taban + Yükseklik) / 2", "(Taban × Yükseklik) / 2", "Taban² / Yükseklik"],
        correctIndex: 2,
        explanation: "Üçgenin alanı = (Taban × Yükseklik) / 2 formülüyle hesaplanır. Burada yükseklik, tabana dik inen doğru parçasının uzunluğudur. Bu formül, üçgeni paralel bir kenar ve aynı yüksekliğe sahip dikdörtgenin yarısı olarak düşünmekten kaynaklanır."
      },
      {
        id: "m80",
        difficulty: "hard",
        question: "√2 (karekök 2) sayısı ne tür bir sayıdır?",
        options: ["Tam sayı", "Rasyonel sayı", "İrrasyonel sayı", "Sanal sayı"],
        correctIndex: 2,
        explanation: "√2 ≈ 1,41421356… sonlu ya da periyodik olmayan ondalık açılıma sahip olduğundan irrasyonel bir sayıdır; kesir şeklinde yazılamaz. Pisagorcular tarafından MÖ 5. yüzyılda keşfedilen bu özellik, yalnızca tam sayıların var olduğu inancını yıkmış ve matematik tarihinde devrimsel bir kırılma noktası olmuştur."
      },
      {
        id: "m81",
        difficulty: "hard",
        question: "İki noktanın koordinat düzlemindeki uzaklığı hangi formülle bulunur?",
        options: ["|(x₂ - x₁)| + |(y₂ - y₁)|", "√((x₂ - x₁)² + (y₂ - y₁)²)", "(x₂ - x₁) × (y₂ - y₁)", "(x₁ + x₂)/2"],
        correctIndex: 1,
        explanation: "İki nokta arasındaki uzaklık, Öklid uzaklık formülüyle hesaplanır: d = √((x₂ - x₁)² + (y₂ - y₁)²). Bu formül, Pisagor teoreminin koordinat geometrisine uygulanmasından elde edilir."
      },
      {
        id: "m82",
        difficulty: "hard",
        question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
        explanation: "Düzlemsel (Öklid) geometride bir üçgenin iç açıları toplamı her zaman 180°'dir. Bu temel geometri kuralı, 'üçgen eşitsizliği' ile birlikte öğrencilerin ilk öğrendiği geometrik özelliklerden biridir; ancak küresel veya hiperbolik geometrilerde bu kural farklılaşabilir."
      },
      {
        id: "m83",
        difficulty: "hard",
        question: "0! (sıfırın faktöriyeli) kaçtır?",
        options: ["0", "1", "Tanımsız", "Sonsuz"],
        correctIndex: 1,
        explanation: "0! = 1'dir. Bu matematiksel tanım; boş kümenin permütasyon sayısının 1 olması ve n! = n × (n-1)! özyinelemeli formülüyle tutarlılık sağlamak amacıyla belirlenir. Faktöriyel; kombinatorik, olasılık ve analiz alanlarında sıkça kullanılır."
      },
      {
        id: "m84",
        difficulty: "hard",
        question: "x² + y² = r² denklemi neyi ifade eder?",
        options: ["Bir elips", "Bir parabol", "Merkezi orijinde olan bir çember", "Bir hiperbol"],
        correctIndex: 2,
        explanation: "x² + y² = r² denklemi, merkezi koordinat sisteminin orijininde (0,0) bulunan ve yarıçapı r olan bir çemberi tanımlar. Koordinat düzleminde bir noktanın orijine olan uzaklığı Pisagor teoremiyle √(x² + y²) = r şeklinde ifade edilebileceğinden bu denklem doğrudan çember tanımından türer."
      },
      {
        id: "m85",
        difficulty: "hard",
        question: "Asal sayılar arasında yer alan tek çift sayı hangisidir?",
        options: ["0", "1", "2", "4"],
        correctIndex: 2,
        explanation: "2, asal sayılar arasındaki tek çift sayıdır. Bir sayı yalnızca 1 ve kendisine bölünebiliyorsa asaldır. 2'den büyük tüm çift sayılar 2'ye bölünebildiğinden asal olamaz; bu nedenle 2 asal sayıların 'olağandışı' üyesidir."
      },
      {
        id: "m86",
        difficulty: "hard",
        question: "Bir küpün hacim formülü nedir?",
        options: ["3a", "a²", "a³", "6a²"],
        correctIndex: 2,
        explanation: "Kenar uzunluğu 'a' olan bir küpün hacmi a³ (a'nın küpü) formülüyle hesaplanır. Örneğin kenar uzunluğu 3 cm olan bir küpün hacmi 3³ = 27 cm³'tür. 6a² formülü ise küpün yüzey alanını verir."
      },
      {
        id: "m87",
        difficulty: "hard",
        question: "Trigonometride sin²θ + cos²θ ifadesi hangi değere eşittir?",
        options: ["0", "1", "2", "θ"],
        correctIndex: 1,
        explanation: "sin²θ + cos²θ = 1 ifadesi temel trigonometrik özdeşliktir (Pisagor özdeşliği). Birim çember tanımından elde edilen bu özdeşlik; türev, integral ve trigonometrik denklem çözümlerinde sıkça kullanılır."
      },
      {
        id: "m88",
        difficulty: "hard",
        question: "'e' sayısının (Euler sayısı) yaklaşık değeri nedir?",
        options: ["1.618", "2.718", "3.141", "4.669"],
        correctIndex: 1,
        explanation: "Euler sayısı 'e', yaklaşık 2.71828 değerine sahip irrasyonel ve transandant bir matematiksel sabittir. Doğal logaritmanın tabanı olan e; büyüme ve çürüme modelleri, bileşik faiz hesapları ve diferansiyel denklemlerde doğal olarak karşımıza çıkan temel matematik sabitlerinden biridir."
      },
      {
        id: "m89",
        difficulty: "hard",
        question: "Koordinat geometrisinde iki paralel doğrunun eğimleri arasındaki ilişki nedir?",
        options: ["Eğimleri birbirine eşittir", "Eğimleri toplam sıfır yapar", "Eğimlerin çarpımı -1'dir", "Eğimleri zıt işaretlidir"],
        correctIndex: 0,
        explanation: "İki paralel doğrunun eğimleri birbirine eşittir (m₁ = m₂). Dik iki doğrunun eğimlerinin çarpımı ise -1'dir (m₁ × m₂ = -1). Bu ilişkiler; geometri, analitik geometri ve mühendislik problemlerinde eğim analizi için temel araçlardır."
      },
      {
        id: "m90",
        difficulty: "hard",
        question: "Olasılık teorisinde bir olayın olasılığı hangi aralıkta tanımlanır?",
        options: ["-1 ile 1 arasında", "0 ile 1 arasında", "0 ile 100 arasında", "1 ile 10 arasında"],
        correctIndex: 1,
        explanation: "Bir olayın olasılığı 0 ile 1 arasında tanımlanır: P = 0 imkânsız bir olayı, P = 1 ise kesin olan bir olayı gösterir. Yüzde olarak ifade edildiğinde bu aralık %0 ile %100'e karşılık gelir. Kolmogorov'un aksiyomları modern olasılık teorisinin temelini oluşturur."
      },
      {
        id: "m91",
        difficulty: "hard",
        question: "Bir paralelkenarın alanı nasıl hesaplanır?",
        options: ["Taban × Taban", "Taban × Yükseklik / 2", "Taban × Yükseklik", "2 × (Taban + Yükseklik)"],
        correctIndex: 2,
        explanation: "Bir paralelkenarın alanı, taban ile yüksekliğin çarpımıyla elde edilir: A = taban × yükseklik. Dikdörtgen de özel bir paralelkenar olduğundan aynı formül geçerlidir. Üçgenin alanı ise bu formülün yarısıdır: A = (taban × yükseklik) / 2."
      },
      {
        id: "m92",
        difficulty: "hard",
        question: "İntegral işlemi matematiksel olarak ne anlama gelir?",
        options: ["Bir fonksiyonun maksimum değerini bulmak", "Türevin tersi ve bir eğrinin altındaki alanı hesaplamak", "Bir denklemin köklerini bulmak", "İki nokta arasındaki uzaklığı hesaplamak"],
        correctIndex: 1,
        explanation: "İntegral; türevin tersi işlemi (belirsiz integral) ve geometrik olarak bir eğrinin belirli sınırlar arasında x eksenine göre kapladığı alanı hesaplama (belirli integral) anlamına gelir. Newton ve Leibniz'in bağımsız olarak geliştirdiği integral hesabı; fizik, mühendislik ve ekonomide vazgeçilmez bir araçtır."
      },
      {
        id: "m93",
        difficulty: "hard",
        question: "Kompleks sayılarda 'i' (sanal birim) nedir?",
        options: ["Sonsuz değeri", "√-1", "π'nin yarısı", "e'nin karesi"],
        correctIndex: 1,
        explanation: "Sanal birim 'i', i² = -1 olacak şekilde tanımlanmıştır. Gerçek sayılar kümesinde negatif bir sayının karekökü alınamaz; bu sınırı aşmak için kompleks sayılar sistemi ve 'i' birimi tanımlanmıştır. a + bi biçimindeki kompleks sayılar; elektrik mühendisliği, kuantum fiziği ve sinyal işlemede geniş uygulama alanı bulur."
      },
      {
        id: "m94",
        difficulty: "hard",
        question: "Hangi sayı sistemi bilgisayarların temelini oluşturur?",
        options: ["Onluk (decimal)", "İkili (binary)", "Sekizlik (octal)", "Onaltılık (hexadecimal)"],
        correctIndex: 1,
        explanation: "Bilgisayarlar yalnızca iki durumu (0 ve 1, açık/kapalı, elektrik var/yok) temsil edebildiğinden temel olarak ikili (binary) sayı sistemini kullanır. Bu sistem; transistörlerin on-off durumlarına doğrudan karşılık gelen bitlerle (ikili rakamlar) çalışır. Onaltılık sistem ise ikiliyi daha okunabilir kılmak için kullanılır."
      },
      {
        id: "m95",
        difficulty: "hard",
        question: "Vektörün büyüklüğü nasıl hesaplanır?",
        options: ["Bileşenlerinin toplamı", "Bileşenlerinin karelerinin toplamının karekökü", "Bileşenlerinin çarpımı", "Bileşenlerinin farkı"],
        correctIndex: 1,
        explanation: "İki boyutlu bir v = (x, y) vektörünün büyüklüğü (normu) |v| = √(x² + y²) formülüyle hesaplanır. Üç boyutlu v = (x, y, z) için |v| = √(x² + y² + z²)'dir. Bu formül, Pisagor teoreminin çok boyutlu uzaya genelleştirilmesidir."
      },
      {
        id: "m96",
        difficulty: "hard",
        question: "Logaritma nedir?",
        options: ["Bir sayının çift sayı tabanındaki kuvveti", "Bir sayıyı elde etmek için tabanın hangi kuvvete yükseltildiğini gösteren işlem", "İki sayının toplamının kataloğu", "Karmaşık sayıların ters işlemi"],
        correctIndex: 1,
        explanation: "log_b(x) = y ifadesi, 'b tabanının y. kuvveti x'e eşittir' anlamına gelir: b^y = x. Örneğin log₁₀(1000) = 3 olup 10³ = 1000 demektir. Logaritmalar; büyük sayı aralıklarını sıkıştırmak (ses şiddeti, deprem ölçeği) ve üstel büyüme/çürümeyi modellemek için kullanılır."
      },
      {
        id: "m97",
        difficulty: "hard",
        question: "İki sayının geometrik ortalaması nasıl hesaplanır?",
        options: ["Toplamlarının yarısı", "Çarpımlarının karekökü", "Fark bölü ikisi", "Büyük bölü küçük"],
        correctIndex: 1,
        explanation: "İki pozitif sayı a ve b'nin geometrik ortalaması √(a × b) ile bulunur. Örneğin 4 ve 9'un geometrik ortalaması √(4 × 9) = √36 = 6'dır. Geometrik ortalama; faiz hesapları, büyüme oranları ve oransal karşılaştırmalarda aritmetik ortalamaya göre daha doğru sonuçlar verir."
      },
      {
        id: "m98",
        difficulty: "hard",
        question: "Bir matris çarpımı gerçekleştirilebilmesi için hangi koşul sağlanmalıdır?",
        options: ["Her iki matris kare matris olmalıdır", "İlk matrisin sütun sayısı ikinci matrisin satır sayısına eşit olmalıdır", "Her iki matrisin boyutları aynı olmalıdır", "Matrisler simetrik olmalıdır"],
        correctIndex: 1,
        explanation: "A × B matris çarpımının tanımlı olabilmesi için A matrisinin sütun sayısının (n) B matrisinin satır sayısına (n) eşit olması gerekir. (m×n) boyutundaki A ile (n×p) boyutundaki B matrisleri çarpıldığında (m×p) boyutunda yeni bir matris elde edilir. Matris çarpımı değişme özelliği taşımaz: A×B ≠ B×A."
      },
      {
        id: "m99",
        difficulty: "hard",
        question: "Fibonacci dizisinde her sayı nasıl elde edilir?",
        options: ["Önceki sayının iki katı alınarak", "Önceki iki sayının toplamı alınarak", "Önceki sayıya sabit bir sayı eklenerek", "Önceki sayının karesi alınarak"],
        correctIndex: 1,
        explanation: "Fibonacci dizisinde her sayı, kendinden önceki iki sayının toplamıdır: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... F(n) = F(n-1) + F(n-2) formülüyle tanımlanan bu dizi; doğada çiçek yapraklarında, kabuklu hayvanların sarmal yapısında ve sanat eserlerinde sıklıkla karşılaşılan 'altın oran' ile yakından ilişkilidir."
      },
      {
        id: "m100",
        difficulty: "hard",
        question: "Permütasyon ile kombinasyon arasındaki temel fark nedir?",
        options: ["Permütasyonda tekrar yoktur, kombinasyonda vardır", "Permütasyonda sıralama önemlidir, kombinasyonda önemli değildir", "Kombinasyon daha büyük sonuçlar verir", "İkisi aynı şeydir"],
        correctIndex: 1,
        explanation: "Permütasyonda seçim yapılırken sıralama önemlidir: ABC ile BAC farklı sayılır. Kombinasyonda ise sıralama fark etmez: ABC ve BAC aynı seçim sayılır. n elemandan r eleman seçimi için Permütasyon: P(n,r) = n!/(n-r)!; Kombinasyon: C(n,r) = n!/[r!(n-r)!] formülleri kullanılır."
      },
      {
        id: "m101",
        difficulty: "hard",
        question: "Bir dairenin çevresini hesaplamak için kullanılan formül nedir?",
        options: ["C = πr²", "C = 2πr", "C = πd²", "C = 4πr"],
        correctIndex: 1,
        explanation: "Bir dairenin çevresi C = 2πr formülüyle hesaplanır; burada r yarıçap, π ise yaklaşık 3,14159 değerini alan irrasyonel bir sabittir. Çap (d = 2r) kullanılarak aynı formül C = πd biçiminde de ifade edilebilir. Dairenin alanı ise A = πr² formülüyle bulunur; çevre ve alan formüllerini karıştırmamak önemlidir."
      },
      {
        id: "m102",
        difficulty: "hard",
        question: "Gerçek sayılar kümesinde negatif bir sayının karekökü nasıl tanımlanır?",
        options: ["Her zaman sıfırdır", "Negatif sayının kendisidir", "Tanımsızdır; sanal sayılar gerektirir", "Mutlak değerine eşittir"],
        correctIndex: 2,
        explanation: "Gerçek sayılar kümesinde negatif bir sayının karekökü tanımsızdır, çünkü hiçbir gerçek sayının karesi negatif olamaz. Bu sorunu çözmek için matematikçiler 'sanal birim' i'yi tanımlamıştır: i = √(−1). Böylece örneğin √(−4) = 2i olur. Gerçek ve sanal bileşenden oluşan sayılara 'karmaşık sayılar' denir ve mühendislik ile fizikte yaygın kullanım alanı bulur."
      },
      {
        id: "m103",
        difficulty: "hard",
        question: "Bir dikdörtgenin köşegen uzunluğu nasıl hesaplanır?",
        options: ["d = a + b", "d = (a × b) / 2", "d = √(a² + b²)", "d = 2(a + b)"],
        correctIndex: 2,
        explanation: "Dikdörtgenin köşegeni, Pisagor Teoremi uygulanarak d = √(a² + b²) formülüyle bulunur; burada a ve b dikdörtgenin iki kenar uzunluğudur. Dikdörtgenin köşegeni onu iki dik üçgene böler; her üçgende kenarlar a, b ve hipotenüs d'dir. Bu ilişki, uzay geometri ve koordinat sistemindeki mesafe hesaplamalarında da temel formüldür."
      },
      {
        id: "m104",
        difficulty: "hard",
        question: "Herhangi bir sayının sıfıra bölümü matematik açısından nedir?",
        options: ["Sıfır", "Sonsuz", "Bir", "Tanımsız"],
        correctIndex: 3,
        explanation: "Bir sayının sıfıra bölümü matematiksel olarak tanımsızdır. Eğer a/0 = k olsaydı, o zaman k × 0 = a olması gerekirdi; oysa her sayı ile sıfırın çarpımı sıfırdır. Bu çelişki sıfıra bölümü imkânsız kılar. Limit bağlamında böleni sıfıra yaklaştıran ifadeler pozitif ya da negatif sonsuza eğilim gösterebilir, ancak bu değer belirli bir sayı değildir."
      },
      {
        id: "m105",
        difficulty: "hard",
        question: "Matematikte 'türev' ne anlama gelir?",
        options: ["İki nokta arasındaki toplam değişim", "Bir fonksiyonun belirli bir noktadaki anlık değişim hızı", "Bir eğrinin altındaki alan", "İki değişken arasındaki fark"],
        correctIndex: 1,
        explanation: "Türev, bir fonksiyonun belirli bir noktadaki anlık değişim hızını ifade eder. Grafiksel olarak o noktadaki teğetin eğimine karşılık gelir. Leibniz ve Newton tarafından bağımsız olarak geliştirilen diferansiyel hesabın temel kavramı olan türev; fizik (hız, ivme), ekonomi (marjinal maliyet) ve mühendislik gibi pek çok alanda kullanılır."
      },
      {
        id: "m106",
        difficulty: "hard",
        question: "'Altın oran' (φ, phi) yaklaşık olarak hangi değere eşittir?",
        options: ["1,414", "1,618", "2,718", "3,141"],
        correctIndex: 1,
        explanation: "Altın oran φ (phi) ≈ 1,61803… değerini alan irrasyonel bir sayıdır. İki uzunluğun oranı, büyüğün küçüğe oranına eşit olduğunda altın oran elde edilir: (a+b)/a = a/b = φ. Fibonacci dizisinde ardışık iki sayının oranı giderek φ'ye yaklaşır. Sanat, mimari (Parthenon, piramitler) ve doğada (deniz kabukları, çiçek yaprakları) bu oranın izleri gözlemlenmektedir."
      },
      {
        id: "m107",
        difficulty: "hard",
        question: "İstatistikte 'medyan' nedir?",
        options: ["Tüm değerlerin toplamının eleman sayısına bölümü", "En sık tekrarlanan değer", "Sıralı veri kümesinin ortadaki değeri", "En büyük ve en küçük değer arasındaki fark"],
        correctIndex: 2,
        explanation: "Medyan, küçükten büyüğe sıralanmış bir veri kümesinin tam ortasındaki değerdir; çift sayıda eleman varsa ortadaki iki değerin aritmetik ortalaması alınır. Aşırı değerlerden (uç nokta) etkilenmediği için ortalama yerine tercih edilir. Örneğin gelir dağılımı analizlerinde, birkaç çok yüksek gelirin ortalamayı çarpıtmasını engellemek için medyan kullanılır."
      },
      {
        id: "m108",
        difficulty: "hard",
        question: "log₂(8) ifadesi kaça eşittir?",
        options: ["2", "3", "4", "16"],
        correctIndex: 1,
        explanation: "log₂(8) = 3, çünkü 2³ = 8'dir. Genel olarak logₐ(x) = y ifadesi 'a üzeri y, x'e eşittir' (aʸ = x) anlamına gelir. İkili logaritma (log₂) bilgisayar bilimleri ve bilgi teorisinde temel öneme sahiptir; verileri temsil etmek için gereken bit sayısı hesaplamalarında sıkça kullanılır."
      },
      {
        id: "m109",
        difficulty: "hard",
        question: "Bir koninin hacmi nasıl hesaplanır?",
        options: ["V = πr²h", "V = (1/2)πr²h", "V = (1/3)πr²h", "V = (2/3)πr³"],
        correctIndex: 2,
        explanation: "Koninin hacmi V = (1/3)πr²h formülüyle hesaplanır; r taban yarıçapı, h ise yüksekliktir. Bu değer, aynı tabana ve yüksekliğe sahip silindirin hacminin (V = πr²h) tam olarak üçte birine eşittir. Arşimet bu ilişkiyi MÖ 3. yüzyılda keşfetmiş ve geometrik cisimlerin hacimleri üzerine pek çok temel formülü geliştirmiştir."
      },
      {
        id: "m110",
        difficulty: "hard",
        question: "Modülo (mod) işlemi ne yapar?",
        options: ["İki sayının çarpımını verir", "Bölme işleminin kalanını verir", "Sayının mutlak değerini döndürür", "En büyük ortak böleni bulur"],
        correctIndex: 1,
        explanation: "Modülo işlemi, bir tam sayının başka bir tam sayıya bölümünden kalan değeri verir. Örneğin 17 mod 5 = 2, çünkü 17 = 3 × 5 + 2. Programlamada döngüsel işlemler, çift-tek kontrolü ve hash fonksiyonları gibi alanlarda yaygın olarak kullanılır. Kriptografi ve sayı teorisi de modülo aritmetiğine yoğun biçimde başvurur."
      },
      {
        id: "m111",
        difficulty: "easy",
        question: "Bir karenin kenar uzunluğu 5 cm ise alanı kaç cm²'dir?",
        options: ["10", "15", "25", "50"],
        correctIndex: 2,
        explanation: "Karenin alanı kenar uzunluğunun karesidir: 5 × 5 = 25 cm²."
      },
      {
        id: "m112",
        difficulty: "easy",
        question: "30'un %20'si kaçtır?",
        options: ["3", "5", "6", "9"],
        correctIndex: 2,
        explanation: "30'un %20'si: 30 × 0,20 = 6'dır."
      },
      {
        id: "m113",
        difficulty: "easy",
        question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        options: ["90", "180", "270", "360"],
        correctIndex: 1,
        explanation: "Düzlem (Öklid) geometrisinde herhangi bir üçgenin iç açıları toplamı her zaman 180°'dir."
      },
      {
        id: "m114",
        difficulty: "easy",
        question: "144'ün karekökü kaçtır?",
        options: ["10", "11", "12", "14"],
        correctIndex: 2,
        explanation: "12 × 12 = 144 olduğundan 144'ün karekökü 12'dir."
      },
      {
        id: "m115",
        difficulty: "easy",
        question: "0,5 kesir olarak nasıl yazılır?",
        options: ["1/2", "1/4", "2/3", "3/5"],
        correctIndex: 0,
        explanation: "0,5 ondalık sayısı, 1/2 (yarı) kesirine eşittir."
      },
      {
        id: "m116",
        difficulty: "easy",
        question: "Bir saat kaç saniyedir?",
        options: ["60", "600", "3.600", "6.000"],
        correctIndex: 2,
        explanation: "1 saat 60 dakika, 1 dakika 60 saniye olduğundan 1 saat 60 × 60 = 3.600 saniyedir."
      },
      {
        id: "m117",
        difficulty: "easy",
        question: "Bir doğru üzerinde kaç farklı nokta vardır?",
        options: ["1", "2", "Sonsuz", "100"],
        correctIndex: 2,
        explanation: "Bir doğru, sonsuz sayıda noktadan oluşan tek boyutlu bir geometrik nesnedir."
      },
      {
        id: "m118",
        difficulty: "easy",
        question: "Bir dik üçgenin en uzun kenarına ne ad verilir?",
        options: ["Dik kenar", "Hipotenüs", "Açıortay", "Yükseklik"],
        correctIndex: 1,
        explanation: "Dik üçgende dik açının karşısındaki en uzun kenara hipotenüs denir; uzunluğu Pisagor teoremi ile bulunur."
      },
      {
        id: "m119",
        difficulty: "easy",
        question: "Bir altıgenin kaç kenarı vardır?",
        options: ["4", "5", "6", "8"],
        correctIndex: 2,
        explanation: "Altıgen (heksagon), tanımı gereği 6 kenarlı ve 6 köşeli bir çokgendir."
      },
      {
        id: "m120",
        difficulty: "easy",
        question: "5! (5 faktöriyel) kaçtır?",
        options: ["20", "60", "120", "720"],
        correctIndex: 2,
        explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120'dir."
      },
      {
        id: "m121",
        difficulty: "easy",
        question: "12'nin pozitif tam böleninden kaç tane vardır?",
        options: ["4", "5", "6", "7"],
        correctIndex: 2,
        explanation: "12'nin pozitif bölenleri 1, 2, 3, 4, 6 ve 12 olmak üzere 6 tanedir."
      },
      {
        id: "m122",
        difficulty: "easy",
        question: "1 km kaç metredir?",
        options: ["10", "100", "1000", "10000"],
        correctIndex: 2,
        explanation: "1 kilometre (km), 10³ yani 1.000 metreye eşittir."
      },
      {
        id: "m123",
        difficulty: "easy",
        question: "Bir kutuda 6 kırmızı ve 4 mavi top var. Rastgele bir top çekmenin kırmızı olma olasılığı kaçtır?",
        options: ["3/5", "2/5", "1/2", "4/10"],
        correctIndex: 0,
        explanation: "Toplam top: 10. Kırmızı sayısı 6 olduğundan olasılık: 6/10 = 3/5."
      },
      {
        id: "m124",
        difficulty: "easy",
        question: "Bir dakika kaç milisaniyedir?",
        options: ["6.000", "10.000", "60.000", "600.000"],
        correctIndex: 2,
        explanation: "1 dakika 60 saniyedir, 1 saniye 1.000 milisaniyedir; toplam 60 × 1.000 = 60.000 milisaniyedir."
      },
      {
        id: "m125",
        difficulty: "easy",
        question: "Bir küpün kaç yüzü vardır?",
        options: ["4", "6", "8", "12"],
        correctIndex: 1,
        explanation: "Küp; 6 kare yüz, 12 kenar ve 8 köşeden oluşan üç boyutlu düzgün geometrik cisimdir."
      },
      {
        id: "m126",
        difficulty: "easy",
        question: "8'in iki katının yarısı kaçtır?",
        options: ["2", "4", "8", "16"],
        correctIndex: 2,
        explanation: "8'in iki katı 16'dır, yarısı ise 8'dir."
      },
      {
        id: "m127",
        difficulty: "easy",
        question: "Hangi sayı 'asal sayı'dır?",
        options: ["9", "15", "21", "23"],
        correctIndex: 3,
        explanation: "23 sayısı yalnızca 1 ve kendisine bölündüğünden asaldır; diğerleri 3 ya da 5'e bölünebilir."
      },
      {
        id: "m128",
        difficulty: "medium",
        question: "Bir dairenin yarıçapı 7 cm ise çevresi yaklaşık kaç cm'dir? (π ≈ 3,14)",
        options: ["21,98", "43,96", "49", "153,86"],
        correctIndex: 1,
        explanation: "Daire çevresi formülü 2πr olduğundan 2 × 3,14 × 7 ≈ 43,96 cm."
      },
      {
        id: "m129",
        difficulty: "medium",
        question: "x² - 9 = 0 denkleminin çözüm kümesi nedir?",
        options: ["{3}", "{-3}", "{0, 3}", "{-3, 3}"],
        correctIndex: 3,
        explanation: "x² = 9 ⇒ x = ±3, dolayısıyla çözüm kümesi {-3, 3}'tür."
      },
      {
        id: "m130",
        difficulty: "medium",
        question: "Bir sayının %30 fazlası ile %30 eksiği arasındaki fark, o sayının yüzde kaçıdır?",
        options: ["30", "40", "60", "70"],
        correctIndex: 2,
        explanation: "Fark = (1,3 - 0,7) × x = 0,6 × x = sayının %60'ı."
      },
      {
        id: "m131",
        difficulty: "medium",
        question: "log₁₀ 1000 değeri nedir?",
        options: ["1", "2", "3", "10"],
        correctIndex: 2,
        explanation: "Log₁₀(1000) = log₁₀(10³) = 3'tür."
      },
      {
        id: "m132",
        difficulty: "medium",
        question: "x + 5 = 12 denkleminin çözümü nedir?",
        options: ["5", "6", "7", "12"],
        correctIndex: 2,
        explanation: "x = 12 - 5 = 7'dir."
      },
      {
        id: "m133",
        difficulty: "medium",
        question: "Bir doğal sayının 4 katının 3 fazlası 31 ise sayı kaçtır?",
        options: ["6", "7", "8", "9"],
        correctIndex: 1,
        explanation: "4x + 3 = 31 ⇒ 4x = 28 ⇒ x = 7."
      },
      {
        id: "m134",
        difficulty: "medium",
        question: "f(x) = 2x + 5 fonksiyonunda f(3) kaçtır?",
        options: ["6", "8", "11", "13"],
        correctIndex: 2,
        explanation: "f(3) = 2 × 3 + 5 = 6 + 5 = 11."
      },
      {
        id: "m135",
        difficulty: "medium",
        question: "Bir üçgenin kenarları 3, 4 ve 5 cm ise alanı kaç cm²'dir?",
        options: ["6", "8", "10", "12"],
        correctIndex: 0,
        explanation: "Bu kenar uzunlukları bir dik üçgen oluşturur; alan = (3 × 4)/2 = 6 cm²."
      },
      {
        id: "m136",
        difficulty: "medium",
        question: "Bir çift zarın atılmasında üst yüzlerin toplamının 7 olma olasılığı kaçtır?",
        options: ["1/6", "1/8", "1/12", "1/36"],
        correctIndex: 0,
        explanation: "İki zar atışında 36 olası sonuçtan toplamı 7 olan 6 sonuç vardır: 6/36 = 1/6."
      },
      {
        id: "m137",
        difficulty: "medium",
        question: "100 sayısı 2 ve 5 cinsinden çarpanlarına nasıl ayrılır?",
        options: ["2² × 5²", "2³ × 5", "2 × 5³", "2² × 5³"],
        correctIndex: 0,
        explanation: "100 = 4 × 25 = 2² × 5²'dir."
      },
      {
        id: "m138",
        difficulty: "medium",
        question: "Bir doğru parçası 18 cm. Bu parçayı oranı 2:7 olacak şekilde ikiye bölersek kısa parça kaç cm'dir?",
        options: ["2", "4", "6", "8"],
        correctIndex: 1,
        explanation: "Toplam pay 2 + 7 = 9; bir birim 18/9 = 2 cm. Kısa parça 2 × 2 = 4 cm."
      },
      {
        id: "m139",
        difficulty: "medium",
        question: "Bir karekökün karesi her zaman neye eşittir?",
        options: ["Sayının kendisi", "Sayının iki katı", "Sayının yarısı", "Daima 0"],
        correctIndex: 0,
        explanation: "Negatif olmayan bir x sayısı için (√x)² = x'tir; bu, karekök tanımının doğal sonucudur."
      },
      {
        id: "m140",
        difficulty: "medium",
        question: "Bir dairenin alanı 154 cm² ise yarıçapı yaklaşık kaç cm'dir? (π ≈ 22/7)",
        options: ["5", "7", "11", "14"],
        correctIndex: 1,
        explanation: "πr² = 154 ⇒ r² = 154 × 7 / 22 = 49 ⇒ r = 7 cm."
      },
      {
        id: "m141",
        difficulty: "medium",
        question: "ln(e) değeri nedir?",
        options: ["0", "1", "e", "10"],
        correctIndex: 1,
        explanation: "ln, e tabanına göre logaritmadır; ln(e) = 1."
      },
      {
        id: "m142",
        difficulty: "medium",
        question: "Bir küpün hacmi 64 cm³ ise bir kenarı kaç cm'dir?",
        options: ["2", "4", "6", "8"],
        correctIndex: 1,
        explanation: "Hacim = a³ = 64 ⇒ a = 4 cm."
      },
      {
        id: "m143",
        difficulty: "medium",
        question: "5 ardışık doğal sayının toplamı 75 ise en küçüğü kaçtır?",
        options: ["11", "13", "15", "17"],
        correctIndex: 1,
        explanation: "Ortadaki sayı 75/5 = 15. En küçüğü 15 - 2 = 13'tür."
      },
      {
        id: "m144",
        difficulty: "medium",
        question: "Pisagor teoremi hangi üçgen türünde geçerlidir?",
        options: ["Eşkenar üçgen", "İkizkenar üçgen", "Dik üçgen", "Geniş açılı üçgen"],
        correctIndex: 2,
        explanation: "Pisagor teoremi yalnızca dik üçgenlerde geçerlidir: hipotenüsün karesi, dik kenarların karelerinin toplamına eşittir."
      },
      {
        id: "m145",
        difficulty: "hard",
        question: "Türev kavramının kullanıldığı matematiğin alt dalı hangisidir?",
        options: ["Aritmetik", "Cebir", "Analiz (kalkülüs)", "Geometri"],
        correctIndex: 2,
        explanation: "Türev, bir fonksiyonun değişim hızını ölçer ve diferansiyel hesabın temel kavramıdır; analiz (kalkülüs) bu kavramı içerir."
      },
      {
        id: "m146",
        difficulty: "hard",
        question: "Türevsiz tabirle: lim_(x→0) (sin x / x) değeri nedir?",
        options: ["0", "1", "π", "Tanımsız"],
        correctIndex: 1,
        explanation: "Bu klasik limit, kalkülüsün temel sonuçlarından biridir ve değeri tam olarak 1'dir."
      },
      {
        id: "m147",
        difficulty: "hard",
        question: "Bir küre yüzeyinin alanı formülü hangisidir?",
        options: ["πr²", "2πr", "4πr²", "(4/3)πr³"],
        correctIndex: 2,
        explanation: "Küre yüzeyi alanı 4πr², hacmi ise (4/3)πr³ formülü ile bulunur."
      },
      {
        id: "m148",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi rasyonel sayı değildir?",
        options: ["1/3", "0,75", "√2", "-7"],
        correctIndex: 2,
        explanation: "√2 sayısı, hiçbir tam sayının oranı olarak yazılamayan irrasyonel bir sayıdır."
      },
      {
        id: "m149",
        difficulty: "hard",
        question: "Bir dik üçgende dik kenarlardan biri 8, hipotenüs 10 ise diğer dik kenar kaçtır?",
        options: ["2", "4", "6", "9"],
        correctIndex: 2,
        explanation: "Pisagor: 10² = 8² + b² ⇒ 100 = 64 + b² ⇒ b² = 36 ⇒ b = 6."
      },
      {
        id: "m150",
        difficulty: "hard",
        question: "İki sayının aritmetik ortalaması 10, geometrik ortalaması 8 ise iki sayının çarpımı kaçtır?",
        options: ["32", "60", "64", "100"],
        correctIndex: 2,
        explanation: "Geometrik ortalama √(ab) = 8 ⇒ ab = 64."
      },
      {
        id: "m151",
        difficulty: "hard",
        question: "Bir üçgende iç açıortayların kesiştiği nokta hangi merkezdir?",
        options: ["Diklik merkezi", "Ağırlık merkezi", "İç teğet merkezi", "Çevrel çember merkezi"],
        correctIndex: 2,
        explanation: "Üçgenin iç açıortayları, iç teğet çemberin merkezini (incenter) verir."
      },
      {
        id: "m152",
        difficulty: "hard",
        question: "0,3 sayısının (devirli olarak 3 tekrar ediyor) kesir karşılığı nedir?",
        options: ["1/3", "3/10", "1/10", "3/100"],
        correctIndex: 0,
        explanation: "0,333... = 1/3'tür; bu klasik bir devirli ondalık-rasyonel ilişkisidir."
      },
      {
        id: "m153",
        difficulty: "hard",
        question: "Bir küpün köşegeninin uzunluğu, kenar uzunluğunun kaç katıdır?",
        options: ["√2", "√3", "2", "2√2"],
        correctIndex: 1,
        explanation: "Kenarı a olan küpün uzun köşegeni a√3'tür; üç boyutlu Pisagor uygulanır."
      },
      {
        id: "m154",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi bir doğal logaritma tabanıdır?",
        options: ["10", "2", "e", "π"],
        correctIndex: 2,
        explanation: "Doğal logaritma 'ln' fonksiyonunun tabanı, irrasyonel ve aşkın bir sayı olan e ≈ 2,71828'dir."
      },
      {
        id: "m155",
        difficulty: "hard",
        question: "Bir geometrik dizinin ilk terimi 3, ortak çarpanı 2 olduğunda 5. terimi kaçtır?",
        options: ["24", "32", "48", "96"],
        correctIndex: 2,
        explanation: "a₅ = a₁ × r⁴ = 3 × 16 = 48."
      },
      {
        id: "m156",
        difficulty: "hard",
        question: "Bir polinomun 3. dereceden olması ne anlama gelir?",
        options: ["3 terimi vardır", "En yüksek üssü 3'tür", "3 farklı kökü vardır", "3 katsayıya sahiptir"],
        correctIndex: 1,
        explanation: "Polinomun derecesi, terimlerinden değişkenin en yüksek üssüne göre belirlenir; 3. derece polinomda en büyük üs 3'tür."
      },
      {
        id: "m157",
        difficulty: "hard",
        question: "(a + b)² ifadesinin açılımı nedir?",
        options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"],
        correctIndex: 1,
        explanation: "(a + b)² = a² + 2ab + b²; kare alma kuralının temel açılımıdır."
      },
      {
        id: "m158",
        difficulty: "hard",
        question: "log_a(b) tanımlı olabilmesi için aşağıdakilerden hangisi sağlanmalıdır?",
        options: ["a > 0, a ≠ 1, b > 0", "a < 0, b > 0", "a = 1, b > 0", "a > 0, b < 0"],
        correctIndex: 0,
        explanation: "Logaritma fonksiyonu için taban a; 0'dan büyük ve 1'den farklı, argüman b ise pozitif olmalıdır."
      },
      {
        id: "m159",
        difficulty: "hard",
        question: "Bir matrisin determinantının sıfır olması ne anlama gelir?",
        options: ["Matris simetriktir", "Matris tersi alınabilir", "Matris tekildir, tersi yoktur", "Matris birim matristir"],
        correctIndex: 2,
        explanation: "Determinantı 0 olan kare matrisler 'tekil' kabul edilir ve tersleri yoktur."
      },
      {
        id: "m160",
        difficulty: "hard",
        question: "log10(1000) ifadesinin değeri kaçtır?",
        options: ["1", "2", "3", "10"],
        correctIndex: 2,
        explanation: "log10(1000), 10 sayısının kaçıncı kuvvetinin 1000 yaptığını sorar; 10³ = 1000 olduğu için sonuç 3'tür."
      },
      {
        id: "m161",
        difficulty: "easy",
        question: "2³ + 3² ifadesinin değeri kaçtır?",
        options: ["12", "17", "19", "24"],
        correctIndex: 1,
        explanation: "2³ = 8 ve 3² = 9 olduğundan 2³ + 3² = 8 + 9 = 17'dir. Üs işlemlerinde önce üs hesaplanır, ardından toplama yapılır."
      },
      {
        id: "m162",
        difficulty: "easy",
        question: "Bir dikdörtgenin alanı nasıl hesaplanır?",
        options: ["Uzunluk + Genişlik", "2 × (Uzunluk + Genişlik)", "Uzunluk × Genişlik", "Uzunluk² + Genişlik²"],
        correctIndex: 2,
        explanation: "Dikdörtgenin alanı = Uzunluk × Genişlik formülüyle hesaplanır. Örneğin uzunluğu 8 cm, genişliği 5 cm olan bir dikdörtgenin alanı 8 × 5 = 40 cm²'dir. Çevre ise 2 × (Uzunluk + Genişlik) formülüyle bulunur."
      },
      {
        id: "m163",
        difficulty: "medium",
        question: "(a + b)² açılımı hangisidir?",
        options: ["a² + b²", "a² + ab + b²", "a² + 2ab + b²", "2a² + 2b²"],
        correctIndex: 2,
        explanation: "(a + b)² = a² + 2ab + b² şeklinde açılır. Bu özdeşlik, kare alma sırasında çapraz terimin (2ab) göz ardı edilmemesi gerektiğini hatırlatır; sık yapılan bir hata olan (a + b)² = a² + b² yanlışından kaçınmak önemlidir."
      },
      {
        id: "m164",
        difficulty: "medium",
        question: "1000'in %15'i kaçtır?",
        options: ["100", "125", "150", "175"],
        correctIndex: 2,
        explanation: "1000'in %15'i = 1000 × 15/100 = 1000 × 0,15 = 150'dir. Yüzde hesabında miktarı 100'e bölüp yüzde değeriyle çarpmak en pratik yöntemdir."
      },
      {
        id: "m165",
        difficulty: "medium",
        question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
        explanation: "Düzlemsel bir üçgenin üç iç açısının toplamı her zaman 180°'dir. Dik üçgende bir açı 90°, diğer iki açı da toplamları 90° olacak biçimde tamamlanır. Küresel geometride bu kural geçerli değildir."
      },
      {
        id: "m166",
        difficulty: "medium",
        question: "Bir dairenin çevre uzunluğunu hesaplama formülü hangisidir?",
        options: ["π × r²", "2 × π × r", "π × d²", "4 × π × r"],
        correctIndex: 1,
        explanation: "Daire çevresi = 2 × π × r formülüyle hesaplanır; burada r yarıçap, π ise yaklaşık 3,14159'dur. Çap (d = 2r) bilindiğinde formül π × d olarak da yazılabilir."
      },
      {
        id: "m167",
        difficulty: "hard",
        question: "sin²θ + cos²θ ifadesinin değeri her zaman kaçtır?",
        options: ["0", "1", "2", "θ'ya bağlıdır"],
        correctIndex: 1,
        explanation: "sin²θ + cos²θ = 1 ifadesi, temel trigonometrik özdeşliktir; Pisagor teoreminden türetilir. Birim çember üzerindeki herhangi bir (cos θ, sin θ) noktası için bu özdeşlik her zaman geçerlidir."
      },
      {
        id: "m168",
        difficulty: "hard",
        question: "Gauss'un 1'den 100'e kadar tamsayıların toplamını bulmak için kullandığı formül hangisidir?",
        options: ["n × (n+1)", "n × (n+1) / 2", "n² / 2", "n × (n-1) / 2"],
        correctIndex: 1,
        explanation: "Gauss'un formülü S = n × (n + 1) / 2'dir. 100 sayısı için S = 100 × 101 / 2 = 5050. Bu formül aritmetik dizilerin toplamının temelidir; efsaneye göre Gauss bu sonucu ilkokul çağında birkaç saniyede bulmuştur."
      },
      {
        id: "m169",
        difficulty: "hard",
        question: "Türev ve integral arasındaki ilişkiyi açıklayan temel matematik teoremi hangisidir?",
        options: ["Pisagor Teoremi", "Fermat'ın Son Teoremi", "Kalkülüsün Temel Teoremi", "Bayes Teoremi"],
        correctIndex: 2,
        explanation: "Kalkülüsün Temel Teoremi, türev ve integral işlemlerinin birbirinin tersi olduğunu kanıtlar. Bu köprü teoremi Newton ve Leibniz tarafından bağımsız olarak geliştirilmiş, belirli integrallerin hesaplanmasında da temel araçtır."
      },
      {
        id: "m170",
        difficulty: "hard",
        question: "Riemann Hipotezi neyi öngörür?",
        options: ["Tüm asal sayılar 6k±1 formundadır", "Tüm çift sayılar iki asal sayının toplamıdır", "Riemann zeta fonksiyonunun önemsiz olmayan tüm sıfırları reel kısmı 1/2 olan doğru üzerindedir", "Sonsuz sayıda ikiz asal çift vardır"],
        correctIndex: 2,
        explanation: "Riemann Hipotezi (1859), Bernhard Riemann tarafından öne sürülmüş ve henüz kanıtlanamamış Milenyum Ödülü problemlerinden biridir. Zeta fonksiyonunun kompleks sıfırlarının tamamının Re(s) = 1/2 doğrusu üzerinde bulunduğunu öngörür; kanıtlanması asal sayıların dağılımı hakkında kritik içgörüler sunacaktır."
      },
      {
        id: "m171",
        difficulty: "easy",
        question: "Bir üçgenin iç açılarının toplamı kaç derecedir?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
        explanation: "Herhangi bir düzlemsel (Öklid geometrisinde) üçgenin üç iç açısının toplamı daima 180°'dir. Bu temel özellik, Öklid'in paralel postulatıyla doğrudan ilişkilidir."
      },
      {
        id: "m172",
        difficulty: "easy",
        question: "Pi (π) sayısı yaklaşık olarak nedir?",
        options: ["2,71", "3,14", "3,71", "4,00"],
        correctIndex: 1,
        explanation: "Pi (π), bir çemberin çevresinin çapına oranı olup yaklaşık 3,14159 değerini alır. Hiç tekrar etmeyen ve sonlanmayan ondalık gösterimiyle irrasyonel bir sayıdır."
      },
      {
        id: "m173",
        difficulty: "medium",
        question: "Fibonacci dizisinde her terim nasıl hesaplanır?",
        options: ["Önceki terimin iki katı alınarak", "Önceki iki terimin toplamı alınarak", "Önceki terimin karesi alınarak", "Her terime sabit bir sayı eklenerek"],
        correctIndex: 1,
        explanation: "Fibonacci dizisi 0, 1, 1, 2, 3, 5, 8, 13, 21... şeklinde devam eder; her terim kendisinden önceki iki terimin toplamıdır. Bu dizi doğada sarmal kabuklar, çiçek yaprakları ve dal dağılımlarında karşımıza çıkar."
      },
      {
        id: "m174",
        difficulty: "medium",
        question: "Asal sayı ne demektir?",
        options: ["1'den büyük, sadece 1 ve kendisine kalansız bölünebilen doğal sayı", "Yalnızca çift olan sayı", "Kendi karesi olan sayı", "Tam kare sayı"],
        correctIndex: 0,
        explanation: "Asal sayılar 1'den büyük, tam olarak 1 ve kendisi dışında başka bir bölenine sahip olmayan doğal sayılardır. 2, 3, 5, 7, 11, 13 ilk asal sayılardır. 2, tek çift asal sayıdır."
      },
      {
        id: "m175",
        difficulty: "easy",
        question: "Logaritma hangi işlemin tersidir?",
        options: ["Üs alma", "Kök alma", "Türev alma", "İntegral alma"],
        correctIndex: 0,
        explanation: "log_b(x) = y ifadesi, b^y = x anlamına gelir; yani logaritma, üs almanın tersidir. 10 tabanındaki logaritma (log₁₀) 'ortak logaritma', e tabanındaki ise 'doğal logaritma' (ln) adını alır."
      },
      {
        id: "m176",
        difficulty: "medium",
        question: "Olasılık teorisinde iki bağımsız olayın aynı anda gerçekleşme olasılığı nasıl hesaplanır?",
        options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A) / P(B)"],
        correctIndex: 1,
        explanation: "İki olay birbirinden bağımsızsa (yani birinin gerçekleşmesi diğerini etkilemiyorsa) birlikte gerçekleşme olasılıkları P(A ∩ B) = P(A) × P(B) formülüyle hesaplanır."
      },
      {
        id: "m177",
        difficulty: "easy",
        question: "Pisagor teoremi neyi ifade eder?",
        options: ["Bir üçgenin alanı taban × yükseklik / 2 dir", "Dik üçgende hipotenüsün karesi, diğer iki kenar karelerinin toplamına eşittir", "Bütün açıları eşit bir üçgen eşkenardır", "Bir üçgenin dış açısı karşı iç açının iki katıdır"],
        correctIndex: 1,
        explanation: "Pisagor teoremi: Dik üçgende dik açıya karşı gelen kenar (hipotenüs) c'nin karesi, diğer iki kenar (a ve b) karelerinin toplamına eşittir: c² = a² + b². MÖ ~570'te yaşayan Pisagor bu teoreme adını vermiştir."
      },
      {
        id: "m178",
        difficulty: "medium",
        question: "Matris çarpmada A × B ile B × A her zaman eşit midir?",
        options: ["Evet, matris çarpma komütatiftir", "Hayır, matris çarpma genel olarak komütatif değildir", "Sadece kare matrisler için eşittir", "Sadece birim matrisler için eşittir"],
        correctIndex: 1,
        explanation: "Matris çarpması genellikle komütatif değildir; yani A × B ≠ B × A. Bu özellik lineer cebirin temel farklılaştırıcılarından biridir. Skalerler ya da birim (I) matrislerle çarpma gibi özel durumlar istisnadır."
      },
      {
        id: "m179",
        difficulty: "hard",
        question: "Cantor'un küme teorisine göre sonsuzluk nasıl tanımlanır?",
        options: ["Sayılamayan en büyük doğal sayı", "Sonlu olmayan, farklı mertebeler içeren matematiksel kavram", "Yalnızca negatif sayılar kümesi", "Sonsuz çarpmaya eşit bir değer"],
        correctIndex: 1,
        explanation: "Georg Cantor, sonsuzluğun tek ve tekbiçimli olmadığını kanıtladı. Doğal sayılar (ℵ₀) ve gerçel sayılar (2^ℵ₀) farklı büyüklükte sonsuz kümeler oluşturur. Bu buluş sonsuzluğun hiyerarşik bir yapıya sahip olduğunu ortaya koyar."
      },
      {
        id: "m180",
        difficulty: "medium",
        question: "Bir üçgenin alanını hesaplama formülü nedir?",
        options: ["alan = taban + yükseklik", "alan = taban × yükseklik", "alan = ½ × taban × yükseklik", "alan = taban² × yükseklik"],
        correctIndex: 2,
        explanation: "Bir üçgenin alanı, taban uzunluğu ile tabana ait yüksekliğin çarpımının yarısıdır: A = ½ × b × h. Bu formül tüm üçgen türleri (dik, dar ve geniş açılı) için geçerlidir."
      },
      {
        id: "m181",
        difficulty: "hard",
        question: "'Goldbach Sanısı' neyi öne sürmektedir?",
        options: ["Her asal sayının tek olduğunu", "2'den büyük her çift sayının iki asal sayının toplamı olduğunu", "Sonsuz sayıda ikiz asal olduğunu", "Her tam sayının en fazla dört tam kare sayının toplamı olduğunu"],
        correctIndex: 1,
        explanation: "1742'de Christian Goldbach'ın önerdiği ve henüz kanıtlanamamış olan Goldbach Sanısı şöyle der: 2'den büyük her çift tam sayı, iki asal sayının toplamı olarak yazılabilir. Örnek: 10 = 3 + 7 = 5 + 5. Denenmiş tüm sayılar bu sanıyı doğrulasa da genel kanıt henüz bulunamamıştır."
      },
      {
        id: "m182",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi irrasyonel bir sayıdır?",
        options: ["3/7", "0,333...", "√2", "4/9"],
        correctIndex: 2,
        explanation: "√2 ≈ 1,41421356... değeri hiç tekrar etmeyen, sonlanmayan bir ondalık kesir olduğundan irrasyoneldir; yani p/q biçiminde yazılamaz. Irrasyonelliği ilk kez Pisagorcular tarafından fark edilmiş ve büyük şaşkınlık yaratmıştır."
      },
      {
        id: "m183",
        difficulty: "easy",
        question: "İki kümede ortak elemanları gösteren küme işlemi hangisidir?",
        options: ["Birleşim (∪)", "Kesişim (∩)", "Tümleyen (A')", "Fark (A - B)"],
        correctIndex: 1,
        explanation: "Kesişim (∩), iki ya da daha fazla kümede eş zamanlı bulunan elemanlardan oluşan kümedir. A = {1, 2, 3} ve B = {2, 3, 4} için A ∩ B = {2, 3}."
      },
      {
        id: "m184",
        difficulty: "hard",
        question: "Olasılık teorisinde Bayes Teoremi ne açıklar?",
        options: ["Bağımsız olayların çarpma kuralını", "Yeni kanıt ışığında olasılıkların nasıl güncelleneceğini", "Normal dağılımın standart sapmasını", "Büyük sayılar yasasını"],
        correctIndex: 1,
        explanation: "Bayes Teoremi: P(A|B) = P(B|A) × P(A) / P(B). Bu formül, B olayının gerçekleştiğini bildikten sonra A olayının olasılığını hesaplamayı sağlar. Makine öğrenmesi, tıbbi tanı ve istatistiksel çıkarımda yaygın biçimde kullanılır."
      },
      {
        id: "m185",
        difficulty: "medium",
        question: "İkili (binary) sayı sisteminde '1010' sayısı ondalık sistemde neye karşılık gelir?",
        options: ["8", "10", "12", "16"],
        correctIndex: 1,
        explanation: "İkili '1010' = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10 (ondalık). İkili sistem yalnızca 0 ve 1 rakamlarını kullanır; bilgisayar sistemlerinin temel sayı sistemidir."
      },
      {
        id: "m186",
        difficulty: "hard",
        question: "Türev hesabında 'zincir kuralı' ne zaman kullanılır?",
        options: ["İki fonksiyonun toplamının türevi alınırken", "Bir fonksiyonun başka bir fonksiyonun içine geçirildiği bileşik fonksiyon durumunda", "İki fonksiyonun çarpımının türevi alınırken", "Sabit bir katsayının türevi alınırken"],
        correctIndex: 1,
        explanation: "Zincir kuralı, f(g(x)) biçimindeki bileşik fonksiyonların türevini hesaplamak için kullanılır: [f(g(x))]' = f'(g(x)) · g'(x). Örneğin (sin x)² nin türevi 2 sin x · cos x şeklinde hesaplanır."
      },
      {
        id: "m187",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi bir üçgen oluşturabilir?",
        options: ["2, 3, 7", "1, 1, 3", "3, 4, 5", "1, 2, 4"],
        correctIndex: 2,
        explanation: "Üçgen eşitsizliğine göre herhangi iki kenar toplamı üçüncü kenardan büyük olmalıdır. 3 + 4 = 7 > 5 ✓; ayrıca 3² + 4² = 9 + 16 = 25 = 5² olduğundan (3,4,5) klasik Pisagor üçlüsüdür."
      },
      {
        id: "m188",
        difficulty: "medium",
        question: "Diferansiyel denklemde 'başlangıç koşulu' ne anlama gelir?",
        options: ["Denklemin türev derecesi", "Bilinmeyen fonksiyonun belirli bir noktadaki değeri", "Denklemin çözüm aralığı", "Değişkenlerden birinin sabit tutulması"],
        correctIndex: 1,
        explanation: "Başlangıç koşulu, diferansiyel denklemin özel çözümünü belirlemek için kullanılan ek bilgidir. Örneğin dy/dx = 2x denkleminin genel çözümü y = x² + C'dir; y(0) = 3 başlangıç koşulu C = 3'ü verir ve özel çözüm y = x² + 3 olur."
      },
      {
        id: "m189",
        difficulty: "medium",
        question: "Permütasyon ve kombinasyon arasındaki temel fark nedir?",
        options: ["Permütasyon tekrar içerebilir, kombinasyon içeremez", "Permütasyonda sıra önemlidir, kombinasyonda sıra önemli değildir", "Permütasyon daha az hesaplama gerektirir", "Kombinasyon yalnızca ikili seçimler için kullanılır"],
        correctIndex: 1,
        explanation: "Permütasyonda seçilen elemanların sırası önemlidir (AB ≠ BA); kombinasyonda sıra fark etmez (AB = BA). n elemandan r seçmek için permütasyon P(n,r) = n!/(n-r)!, kombinasyon ise C(n,r) = n!/(r!(n-r)!) formülüyle hesaplanır."
      },
      {
        id: "m190",
        difficulty: "hard",
        question: "Euler sayısı e (≈ 2,718) hangi özelliğiyle bilinir?",
        options: ["En küçük asal sayıdır", "Türevi kendisine eşit olan e^x fonksiyonunun tabanıdır", "Bir çemberin çevresini çapına bölen sabittir", "Altın oran olarak bilinir"],
        correctIndex: 1,
        explanation: "Euler sayısı e ≈ 2,71828... değeriyle, türevi kendisine eşit olan f(x) = e^x fonksiyonunun tabanıdır. Bu eşsiz özellik onu doğal logaritmanın tabanı ve diferansiyel denklemlerin, bileşik faizin ve olasılık teorisinin temel sabiti yapar."
      }
    ]
  },
  {
    id: "sports",
    name: "Spor",
    icon: "activity",
    color: "#f97316",
    gradient: ["#f97316", "#ea580c"],
    image: require("../assets/images/category_sports.png"),
    questions: [
      {
        id: "sp1",
        difficulty: "easy",
        question: "'The Greatest' (En Büyük) lakabıyla anılan efsanevi sporcu kimdir?",
        options: ["Michael Jordan", "Pelé", "Muhammad Ali", "Roger Federer"],
        correctIndex: 2,
        explanation: "Muhammad Ali (Cassius Clay), 'The Greatest' lakabıyla boks tarihinin en efsanevi ismi olarak kabul edilir. Üç kez dünya ağır sıklet şampiyonu olan Ali, spor tarihinin en etkili figürlerinden biridir."
      },
      {
        id: "sp2",
        difficulty: "easy",
        question: "Tenis'te 'Grand Slam' kaç farklı turnuvadan oluşmaktadır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 1,
        explanation: "Grand Slam; Australian Open, Roland Garros (Fransa Açık), Wimbledon ve US Open olmak üzere dört büyük turnuvadan oluşur. Tüm dördünü aynı yıl kazanmak 'Calendar Grand Slam' olarak adlandırılır."
      },
      {
        id: "sp3",
        difficulty: "easy",
        question: "NBA tarihinin en fazla sayı atan oyuncusu kimdir (2024 itibarıyla)?",
        options: ["Kobe Bryant", "Michael Jordan", "Kareem Abdul-Jabbar", "LeBron James"],
        correctIndex: 3,
        explanation: "LeBron James, Şubat 2023'te Kareem Abdul-Jabbar'ı geçerek NBA tarihinin en fazla sayı atan oyuncusu oldu. LeBron bu rekoru hâlâ aktif oyuncu olarak sürdürmektedir."
      },
      {
        id: "sp4",
        difficulty: "easy",
        question: "Futbolda penaltı noktası, kale çizgisinden kaç metre uzaklıktadır?",
        options: ["9 metre", "11 metre", "12 metre", "16.5 metre"],
        correctIndex: 1,
        explanation: "FIFA kurallarına göre penaltı noktası, kale çizgisinin tam ortasından 11 metre uzaklıktadır. 16.5 metrelik mesafe ise ceza sahası çizgisine karşılık gelir."
      },
      {
        id: "sp5",
        difficulty: "easy",
        question: "En fazla FIFA Dünya Kupası şampiyonluğuna sahip ülke hangisidir?",
        options: ["Almanya", "Arjantin", "İtalya", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, 1958, 1962, 1970, 1994 ve 2002 yıllarında kazandığı 5 şampiyonlukla FIFA Dünya Kupası'nın en başarılı ülkesidir. Almanya ve İtalya 4'er kez şampiyon olmuştur."
      },
      {
        id: "sp6",
        difficulty: "easy",
        question: "Triatlon yarışması hangi üç spor dalını kapsamaktadır?",
        options: ["Kürek – Bisiklet – Koşu", "Yüzme – Bisiklet – Koşu", "Yüzme – Koşu – Atlama", "Bisiklet – Koşu – Engelli"],
        correctIndex: 1,
        explanation: "Triatlon; açık suda yüzme, bisiklet ve koşu dallarından oluşur. En zorlu triatlon olan Ironman, 3.86 km yüzme + 180.25 km bisiklet + 42.2 km koşudan oluşur."
      },
      {
        id: "sp7",
        difficulty: "easy",
        question: "Japonya'nın ulusal sporu olarak kabul edilen geleneksel dövüş sanatı hangisidir?",
        options: ["Judo", "Karate", "Aikido", "Sumo güreşi"],
        correctIndex: 3,
        explanation: "Sumo güreşi, yüzyıllık gelenekleriyle Japonya'nın ulusal sporu kabul edilmektedir. Bir sumo güreşçisi (rikishi) rakibini daireden dışarı iterse ya da yere düşürürse maçı kazanır."
      },
      {
        id: "sp8",
        difficulty: "easy",
        question: "Tour de France bisiklet yarışında genel klasman liderinin giydiği formanın rengi nedir?",
        options: ["Kırmızı forma", "Mavi forma", "Sarı forma", "Beyaz forma"],
        correctIndex: 2,
        explanation: "Sarı forma (maillot jaune), Tour de France'da o ana kadar en az sürede en çok mesafeyi kat eden yarışçıya verilir. 1919'dan bu yana sarı renktir. Noktalı forma ise dağ klasmanı liderini simgeler."
      },
      {
        id: "sp9",
        difficulty: "easy",
        question: "Standart maraton yarış mesafesi kaç kilometredir?",
        options: ["35 km", "38.5 km", "40 km", "42.195 km"],
        correctIndex: 3,
        explanation: "Maraton mesafesi 42.195 km'dir. Bu mesafe, 1908 Londra Olimpiyatları'nda Kraliyet ailesinin talebine göre belirlendi. Ardından 1921'de IAAF tarafından standart mesafe olarak onaylandı."
      },
      {
        id: "sp10",
        difficulty: "easy",
        question: "Serbest dalışta (static apnea) nefes tutma dünya rekoru yaklaşık ne kadardır?",
        options: ["5 dakika", "10 dakika", "24 dakika", "1 saat"],
        correctIndex: 2,
        explanation: "Branko Petrović, 2024 yılında 24 dakika 37 saniyelik statik apne dünya rekoru kırdı. Bu sporcular, dalıştan önce hiperventilasyon ve oksijen toleransı teknikleriyle hazırlanır."
      },
      {
        id: "sp11",
        difficulty: "easy",
        question: "Teniste bir sette kazanmak için kaç oyun kazanılmalıdır?",
        options: ["4 oyun", "5 oyun", "6 oyun", "7 oyun"],
        correctIndex: 2,
        explanation: "Teniste bir set kazanmak için genellikle 6 oyun kazanılması gerekir; ancak 5-5'e gelince 7-5 veya 7-6 (tiebreak) ile set bitirilebilir. Maç formatı turnuvaya göre değişir."
      },
      {
        id: "sp12",
        difficulty: "easy",
        question: "FIFA Dünya Kupasını en fazla kaç kez kazanan ülke hangisidir?",
        options: ["Almanya", "İtalya", "Arjantin", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, 1958, 1962, 1970, 1994 ve 2002 yıllarında 5 kez FIFA Dünya Kupası kazanarak bu unvandaki rekorun sahibidir."
      },
      {
        id: "sp13",
        difficulty: "easy",
        question: "Bir boks maçında nakavt (KO) ne anlama gelir?",
        options: ["Rakibin puana göre galip gelmesi", "Rakibin yere düşüp 10 saniye içinde kalkamaması", "Rakibin zaman aşımına uğraması", "Hakemin maçı durdurması"],
        correctIndex: 1,
        explanation: "Nakavt (Knock Out-KO), bir boksörün yumruk ya da kombinasyon sonucunda yere düşmesi ve hakem 10 sayarken ayağa kalkamaması durumudur. Teknik nakavt (TKO) ise hakemin müsabakayı durdurmasıdır."
      },
      {
        id: "sp14",
        difficulty: "easy",
        question: "Olimpiyat bayrağındaki beş halka neyi simgeler?",
        options: ["Olimpiyatların beş değerini", "Beş kıtayı", "İlk beş Olimpiyat şehrini", "Beş kurucu ülkeyi"],
        correctIndex: 1,
        explanation: "Olimpiyat bayrağındaki beş halka, dünya uluslarının katıldığı beş kıtayı (Afrika, Amerika, Asya, Avrupa ve Okyanusya) temsil etmektedir. Halkalar birbirinin içinden geçerek birliği simgeler."
      },
      {
        id: "sp15",
        difficulty: "easy",
        question: "Hangi spor kulübü 'El Clasico' maçlarında Real Madrid ile karşılaşır?",
        options: ["Atletico Madrid", "Valencia", "Barcelona", "Sevilla"],
        correctIndex: 2,
        explanation: "El Clasico, İspanya La Liga'nın iki büyük takımı Real Madrid ile FC Barcelona arasındaki rekabete verilen isimdir. Bu maçlar, dünyanın en çok izlenen kulüp karşılaşmaları arasındadır."
      },
      {
        id: "sp16",
        difficulty: "easy",
        question: "Golf sporunda 'birdie' ne anlama gelir?",
        options: ["Deliği 2 vuruş fazlasıyla tamamlamak", "Deliği 1 vuruş fazlasıyla tamamlamak", "Deliği 1 vuruş eksiyle tamamlamak", "Deliği standart vuruş sayısıyla tamamlamak"],
        correctIndex: 2,
        explanation: "Birdie, golfçünün bir deliği par'ın (standart vuruş sayısı) 1 altında tamamlamasıdır. Eagle 2 altında, albatross 3 altında, bogey ise 1 üstünde tamamlamak demektir."
      },
      {
        id: "sp17",
        difficulty: "easy",
        question: "NBA'de düzenli sezonda 72 galibiyet alarak rekora imza atan ilk takım hangisidir?",
        options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        correctIndex: 2,
        explanation: "Chicago Bulls, 1995-96 sezonunda Michael Jordan liderliğinde düzenli sezonu 72-10'luk rekorla kapattı. Bu başarı 20 yıl boyunca rekor olarak kaldı; ancak 2015-16 sezonunda Golden State Warriors 73 galibiyet alarak bu rekoru kırdı."
      },
      {
        id: "sp18",
        difficulty: "easy",
        question: "Türkiye'de en çok taraftara sahip futbol kulübü hangisidir?",
        options: ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Trabzonspor"],
        correctIndex: 0,
        explanation: "Çeşitli anketlere göre Fenerbahçe, Türkiye'de en fazla taraftara sahip kulüp olarak öne çıkmaktadır. Ancak Galatasaray ve Beşiktaş da milyonlarca taraftarıyla sıkı bir rekabet içindedir."
      },
      {
        id: "sp19",
        difficulty: "easy",
        question: "Hangi sporda 'checkmate' (şah mat) terimi kullanılır?",
        options: ["Satranç", "Dama", "Tavla", "Go"],
        correctIndex: 0,
        explanation: "Şah mat (checkmate), satrançta bir oyuncunun rakibinin şahını ele geçirilmekten kurtaracak hamle yapamadığı durumu ifade eder. Bu durumda oyun sona erer ve şah matı yapan taraf kazanır."
      },
      {
        id: "sp20",
        difficulty: "easy",
        question: "Bir hafif atletizm yarışmasında 100 metre neyi ölçer?",
        options: ["Dayanıklılığı", "Kısa mesafe süratini", "Atlama gücünü", "Teknik yeteneği"],
        correctIndex: 1,
        explanation: "100 metre sprint, atletizmin en prestijli kısa mesafe koşularından biridir ve sporcunun patlayıcı hız kapasitesini ölçer. Dünya rekoru Usain Bolt'a ait olup 9,58 saniyedir."
      },
      {
        id: "sp21",
        difficulty: "easy",
        question: "Su topu takımı kaç oyuncudan oluşur?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Su topu takımında sahada bir kaleci dahil 7 oyuncu yer alır. Her takımın kadroda toplam 13 oyuncusu bulunabilir. Türkiye bu sporda önemli başarılar elde etmiştir."
      },
      {
        id: "sp22",
        difficulty: "easy",
        question: "Hangi Türk sporcu 2004 Atina Olimpiyatları'nda altın madalya kazanmıştır?",
        options: ["Halil Mutlu", "Hasan Şahin", "Naim Süleymanoğlu", "Taner Sağır"],
        correctIndex: 3,
        explanation: "Taner Sağır, 2004 Atina Olimpiyatları'nda halter müsabakasında altın madalya kazanmıştır. Türkiye bu olimpiyatlarda halterde önemli başarılar elde etmiştir."
      },
      {
        id: "sp23",
        difficulty: "easy",
        question: "Amerikan futbolunda 'touchdown' kaç puan kazandırır?",
        options: ["3 puan", "6 puan", "7 puan", "8 puan"],
        correctIndex: 1,
        explanation: "Amerikan futbolunda touchdown 6 puan kazandırır. Ardından gelen ekstra puan denemesiyle 1 (tekme) veya 2 (iki puanlık dönüşüm) ek puan kazanılabilir. Field goal ise 3 puan değerindedir."
      },
      {
        id: "sp24",
        difficulty: "easy",
        question: "Hangi ülke en fazla Olimpiyat madalyası kazanmıştır?",
        options: ["Rusya", "Çin", "Amerika Birleşik Devletleri", "Almanya"],
        correctIndex: 2,
        explanation: "Amerika Birleşik Devletleri, tarihsel Olimpiyat madalya tablosunda 2000'den fazla madalyayla açık ara birinci konumdadır. Yaz ve Kış Olimpiyatları toplamı değerlendirildiğinde bu üstünlük daha da belirginleşir."
      },
      {
        id: "sp25",
        difficulty: "easy",
        question: "Futbolda ofsayt kuralına göre oyuncu nerede olmalıdır?",
        options: ["Rakip kale çizgisinde", "Topla aynı hizada veya gerisinde", "Son savunma oyuncusundan önde", "Merkez çizgisinin gerisinde"],
        correctIndex: 1,
        explanation: "Ofsayt kuralına göre, top gönderildiği anda saldırı oyuncusunun topla aynı hizada veya gerisinde olması (ya da son iki savunma oyuncusundan geride olması) gerekir. Aksi halde ofsayt pozisyonundadır."
      },
      {
        id: "sp26",
        difficulty: "easy",
        question: "Hangi sporda 'smash' terimi kullanılır?",
        options: ["Futbol", "Hentbol", "Badminton", "Güreş"],
        correctIndex: 2,
        explanation: "Smash, badminton ve teniste rakete sert bir vuruşla yapılan ve rakip sahaya hızla inen ataktır. Özellikle badminton'da smash, bir maçı belirleyen önemli bir teknik vuruştur."
      },
      {
        id: "sp27",
        difficulty: "easy",
        question: "Türk spor tarihinde 'Naim Süleymanoğlu' hangi spor dalında ün kazanmıştır?",
        options: ["Güreş", "Halter", "Boks", "Atletizm"],
        correctIndex: 1,
        explanation: "Naim Süleymanoğlu, üç Olimpiyat altın madalyası (1988, 1992, 1996) kazanarak 'Cep Herkülü' lakabını alan Türk haltercisidir. Tarihin en büyük haltercilerinden biri olarak kabul edilir."
      },
      {
        id: "sp28",
        difficulty: "easy",
        question: "Bir kriket takımında kaç oyuncu bulunur?",
        options: ["9", "10", "11", "12"],
        correctIndex: 2,
        explanation: "Kriket, her iki takımda 11'er oyuncudan oluşan iki ekip arasında oynanır. Özellikle İngiltere, Hindistan, Avustralya ve diğer İngiliz Milletler Topluluğu ülkelerinde popüler bir spordur."
      },
      {
        id: "sp29",
        difficulty: "easy",
        question: "Hangi ülke en fazla FIFA Dünya Kupası ev sahipliği yapmıştır?",
        options: ["Almanya", "Fransa", "Brezilya", "Meksika"],
        correctIndex: 3,
        explanation: "Meksika, 1970 ve 1986 olmak üzere iki kez FIFA Dünya Kupası'na ev sahipliği yaparak bu açıdan rekor kırmıştır. 2026 Dünya Kupası'na da ABD ve Kanada ile birlikte ev sahipliği yapacaktır."
      },
      {
        id: "sp30",
        difficulty: "easy",
        question: "Türkiye'nin ilk Olimpiyat madalyası kaç yılında kazanılmıştır?",
        options: ["1928", "1936", "1948", "1952"],
        correctIndex: 1,
        explanation: "Türkiye, ilk Olimpiyat madalyasını 1936 Berlin Olimpiyatları'nda güreşte kazanmıştır. Türk güreşçiler o günden bu yana Türkiye'nin en çok madalya kazandığı disiplin olmuştur."
      },
      {
        id: "sp31",
        difficulty: "easy",
        question: "Hangi sporda 'hat trick' terimi kullanılır?",
        options: ["Tenis ve Futbol", "Futbol ve Basketbol", "Kriket ve Futbol", "Golf ve Beyzbol"],
        correctIndex: 2,
        explanation: "Hat trick, futbolda bir oyuncunun aynı maçta 3 gol atmasını, kriket'te ise bir bowlerin art arda 3 wicket almasını ifade eder. Terimi ilk kullanan branş kriket olmuştur."
      },
      {
        id: "sp32",
        difficulty: "easy",
        question: "Olimpiyatların tarihinde en fazla altın madalya kazanan sporcu kimdir?",
        options: ["Carl Lewis", "Mark Spitz", "Usain Bolt", "Michael Phelps"],
        correctIndex: 3,
        explanation: "Michael Phelps, olimpiyat tarihinin en başarılı sporcusudur. 4 olimpiyata katılarak toplam 23 altın, 3 gümüş ve 2 bronz olmak üzere 28 olimpiyat madalyası kazanmıştır. Hepsi yüzme branşındadır."
      },
      {
        id: "sp33",
        difficulty: "easy",
        question: "Formula 1'de en fazla Dünya Şampiyonluğu kazanan pilot kimdir (2024 itibarıyla)?",
        options: ["Ayrton Senna", "Niki Lauda", "Michael Schumacher / Lewis Hamilton (eşit)", "Sebastian Vettel"],
        correctIndex: 2,
        explanation: "Michael Schumacher (2000–2004) ve Lewis Hamilton (2008, 2014–2015, 2017–2018, 2020) 7'şer F1 Dünya Şampiyonluğu kazanarak tüm zamanların rekoru paylaşmaktadır. Max Verstappen ise 4 şampiyonlukla üçüncü konumdadır."
      },
      {
        id: "sp34",
        difficulty: "easy",
        question: "Teniste 'ace' ne anlama gelir?",
        options: ["Rakibin ağa vurması", "Rakibin servis hatası", "Rakibin hiç dokunamadığı servis", "Set içinde kazanılan son sayı"],
        correctIndex: 2,
        explanation: "Ace, rakibin raket değdirmeden kaçırdığı servis vuruşudur. Doğrudan sayı kazandırır. Güçlü servisi bulunan oyuncular Ace sayısı rekorları kırar; John Isner ve Ivo Karlovic bu alanda öne çıkan isimlerdir."
      },
      {
        id: "sp35",
        difficulty: "easy",
        question: "Eskrim sporunda kullanılan üç silah hangilerinden oluşur?",
        options: ["Kılıç, mızrak, gürz", "Floret, kılıç, épée", "Floret, yay, hançer", "Epée, bıçak, pala"],
        correctIndex: 1,
        explanation: "Eskrimde üç silah kullanılır: Floret (hafif, sadece gövdeye vuruş), kılıç (bütün vücuda vuruş, baskı hakkı yok) ve épée (en ağır, tüm vücuda vuruş, zamansal öncelik yok). Her silahın farklı kuralları bulunur."
      },
      {
        id: "sp36",
        difficulty: "easy",
        question: "Biatlon hangi iki sporu birleştirir?",
        options: ["Yüzme ve Koşu", "Kayak Koşusu ve Atış", "Buz Pateni ve Hokey", "Slalom ve Kros Ülke"],
        correctIndex: 1,
        explanation: "Biatlon, kros ülke kayak koşusu ile tüfekle atışı birleştiren kış olimpiyat disiplinidir. Sporcular belirlenen mesafelerde kayak yapar ve atış pistlerinde hedef vurur; ıskalamalar ekstra ceza koşusunu gerektirir."
      },
      {
        id: "sp37",
        difficulty: "easy",
        question: "Super Bowl hangi spor dalının şampiyonluk maçıdır?",
        options: ["Beyzbol", "Amerikan Futbolu", "Basketbol", "Buz Hokeyi"],
        correctIndex: 1,
        explanation: "Super Bowl, National Football League'in (NFL) yıllık şampiyonluk maçıdır. Her yıl Şubat ayında düzenlenen bu karşılaşma, dünyanın en çok izlenen tekil spor etkinliğidir; reklam gelirleri açısından da rekorlar kırar."
      },
      {
        id: "sp38",
        difficulty: "medium",
        question: "Kriket'te bir oyuncunun tek oturuşta 100 koşu (run) yapmasına ne denir?",
        options: ["Hat trick", "Grand slam", "Century", "Perfect game"],
        correctIndex: 2,
        explanation: "Kriket'te bir vurucu (batsman), tek bir oturuşta 100 veya daha fazla koşu yaptığında 'century' (yüzyıl) yapmiş sayılır. Bu, kriket'in en prestijli bireysel başarılarından biridir. Sachin Tendulkar uluslararası century rekorunu elinde bulundurmaktadır."
      },
      {
        id: "sp39",
        difficulty: "medium",
        question: "NBA tarihinde tek bir maçta en fazla sayı atan oyuncu kimdir?",
        options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Wilt Chamberlain"],
        correctIndex: 3,
        explanation: "Wilt Chamberlain, 2 Mart 1962'de Philadelphia Warriors formasıyla New York Knicks'e karşı tek maçta 100 sayı atarak NBA'in kırılmaz bireysel sayı rekorunu kırdı. Bu başarı hâlâ kimse tarafından yaklaşılamamış bir rekordur."
      },
      {
        id: "sp40",
        difficulty: "medium",
        question: "Futbolda VAR nedir?",
        options: ["Yardımcı hakem kolu işareti", "Video Yardımcı Hakemi sistemi", "Ofsayt çizgisi belirleme yazılımı", "Skor tabelası uygulaması"],
        correctIndex: 1,
        explanation: "VAR (Video Assistant Referee), futbolda kritik hakem kararlarını video analiziyle denetleyen teknolojidir. Gol, penaltı, kırmızı kart ve kimlik hatası gibi dört kategoride devreye girer ve 2018 FIFA Dünya Kupası'ndan itibaren uluslararası düzeyde kullanılmaktadır."
      },
      {
        id: "sp41",
        difficulty: "medium",
        question: "Türkiye'nin Olimpiyat tarihinde en fazla madalya kazanan sporcusu kimdir?",
        options: ["Taner Sağır", "Naim Süleymanoğlu", "Halil Mutlu", "Rıza Kayaalp"],
        correctIndex: 1,
        explanation: "Naim Süleymanoğlu, 1988, 1992 ve 1996 Olimpiyatlarında üç kez altın madalya alarak Türkiye adına en fazla olimpiyat altın madalyasına sahip sporcu unvanını kazanmıştır. 'Cep Herkülü' lakabıyla dünya tarihinin en büyük haltercilerinden biri sayılır."
      },
      {
        id: "sp42",
        difficulty: "medium",
        question: "Polo sporunun temel özelliği nedir?",
        options: ["Su içinde oynanan takım sporudur", "Atlara binilerek ahşap tokmakla top vurma sporudur", "Kapalı alanda oynanan raket sporudur", "Okla hedef vurma sporudur"],
        correctIndex: 1,
        explanation: "Polo, atlar üzerinde yarışan iki takımın ahşap tokmaklar (mallet) kullanarak topu rakip kaleye sokma oyunudur. Dünyanın en eski takım sporlarından biri sayılan polo, Pers, Moğol ve İngiliz kültüründe köklü bir geçmişe sahiptir."
      },
      {
        id: "sp43",
        difficulty: "medium",
        question: "Formula 1'de yarışın bitmesini bildiren bayrak hangi renktedir?",
        options: ["Kırmızı", "Sarı", "Mavi", "Damalı (siyah-beyaz)"],
        correctIndex: 3,
        explanation: "F1'de siyah-beyaz damalı bayrak (checkered flag), yarışın sona erdiğini ifade eder. Kırmızı bayrak yarışın durdurulmasını, sarı bayrak tehlike uyarısını, mavi bayrak ise daha hızlı bir aracın geçiş yapacağını bildirir."
      },
      {
        id: "sp44",
        difficulty: "medium",
        question: "Halterde iki temel olimpiyat disiplini nelerdir?",
        options: ["Kopmaz ve Uzun Kopmaz", "Kopmaz (Snatch) ve İtme (Clean & Jerk)", "Silkme ve Uzun Silkme", "Tek Elle Kaldırma ve Çift Elle Kaldırma"],
        correctIndex: 1,
        explanation: "Olimpik halterde iki disiplin bulunur: Kopmaz (Snatch) – barı tek harekette başın üstüne kaldırmak; İtme (Clean & Jerk) – barı önce omuzlara, ardından başın üstüne iki harekette kaldırmak. Toplam ağırlık sıralamayı belirler."
      },
      {
        id: "sp45",
        difficulty: "medium",
        question: "Galatasaray hangi Avrupa kupasını kazanmıştır?",
        options: ["UEFA Şampiyonlar Ligi", "UEFA Kupası (Avrupa Ligi)", "UEFA Süper Kupası", "UEFA Konferans Ligi"],
        correctIndex: 1,
        explanation: "Galatasaray, 2000 yılında UEFA Kupası'nı (bugünkü adıyla Avrupa Ligi) kazanmıştır. Aynı sene Şampiyonlar Ligi galibinden alınan UEFA Süper Kupası'nı da kazanan Galatasaray, Türk futbol tarihinin bu alandaki tek şampiyonudur."
      },
      {
        id: "sp46",
        difficulty: "medium",
        question: "Tenis kortlarında oynanan yüzey türleri nelerdir?",
        options: ["Çim, toprak ve sert zemin", "Beton, ahşap ve çim", "Çim, kauçuk ve kum", "Kil, beton ve plastik"],
        correctIndex: 0,
        explanation: "Profesyonel teniste üç temel yüzey vardır: Çim (Wimbledon), kırmızı toprak / kil (Roland Garros) ve sert zemin / beton (Australian Open, US Open). Her yüzey topun zıplama hızını ve tarzını farklı etkiler."
      },
      {
        id: "sp47",
        difficulty: "medium",
        question: "FIFA Dünya Kupası'nın en çok izlenen organizasyon olmasının temel nedeni nedir?",
        options: ["Tek ülkede yapılması", "Katılımcı sayısının az olması", "Futbolun dünya genelinde en yaygın spor olması", "Her yıl düzenlenmesi"],
        correctIndex: 2,
        explanation: "Futbol, dünya genelinde en fazla oynanan ve izlenen spordur. 200'den fazla ülkenin katıldığı FIFA Dünya Kupası, her 4 yılda bir düzenlenmesi ve küresel futbol kültürüyle birleşince dünyanın en çok izlenen spor organizasyonuna dönüşür."
      },
      {
        id: "sp48",
        difficulty: "medium",
        question: "Türkiye Millî Futbol Takımı'nın FIFA Dünya Kupası'ndaki en iyi derecesi nedir?",
        options: ["Çeyrek final", "Yarı final", "3. yer", "Final"],
        correctIndex: 2,
        explanation: "Türkiye, 2002 Güney Kore–Japonya Dünya Kupası'nda 3. sırayı elde ederek tarihinin en başarılı sonucuna ulaştı. Yarı finalde Brezilya'ya yenilen milli takım, üçüncülük maçında Güney Kore'yi yenerek bronz madalyayı aldı."
      },
      {
        id: "sp49",
        difficulty: "medium",
        question: "Judo'da kuşak sistemi başlangıçtan zirveye sırasıyla nasıl ilerler?",
        options: ["Beyaz → Sarı → Yeşil → Mavi → Kahverengi → Siyah", "Beyaz → Mavi → Kırmızı → Siyah", "Sarı → Turuncu → Yeşil → Siyah", "Beyaz → Mor → Kahverengi → Siyah"],
        correctIndex: 0,
        explanation: "Judo'da kuşak sıralaması genel olarak şöyledir: Beyaz, sarı, turuncu, yeşil, mavi, kahverengi ve siyah. Siyah kuşak kendi içinde 1. dan'dan 10. dan'a kadar derecelendirilir. Sistem, Judo'nun kurucusu Jigoro Kano tarafından tasarlanmıştır."
      },
      {
        id: "sp50",
        difficulty: "medium",
        question: "Hangi Türk sporcusu 'Avrupa'nın en iyi futbolcusu' unvanı olan Ballon d'Or'u kazanmıştır?",
        options: ["Hakan Şükür", "Emre Belözoğlu", "Arda Turan", "Hiçbiri – bir Türk sporcu bu ödülü kazanmamıştır"],
        correctIndex: 3,
        explanation: "Ballon d'Or (Altın Top), France Football dergisi tarafından verilmektedir. 2024 itibarıyla hiçbir Türk futbolcu bu ödülü kazanamamıştır. Hakan Şükür ve Arda Turan Türk futbolunun uluslararası arenada en tanınan isimleri olmakla birlikte bu ödüle ulaşamamışlardır."
      },
      {
        id: "sp51",
        difficulty: "medium",
        question: "Bir futbol maçında topun oyun alanı dışına atılması sırasında son dokunan oyuncu rakip takımdansa ne verilir?",
        options: ["Kornec atışı", "Taç atışı", "Serbest vuruş", "Penaltı"],
        correctIndex: 1,
        explanation: "Taç atışı (throw-in), top yan çizgiden dışarı çıktığında, son dokunan oyuncunun rakip takımında olan tarafa verilir. Oyuncunun her iki eli ve her iki ayağı kurallara uygun pozisyonda olmalıdır."
      },
      {
        id: "sp52",
        difficulty: "medium",
        question: "Hangi ülke en fazla FIFA Dünya Kupası şampiyonluğu kazanmıştır?",
        options: ["Almanya", "Arjantin", "İtalya", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, 5 Dünya Kupası şampiyonluğuyla (1958, 1962, 1970, 1994, 2002) rekoru elinde bulundurmaktadır. Almanya ve İtalya 4'er, Arjantin ve Fransa ise 3'er kez şampiyon olmuştur."
      },
      {
        id: "sp53",
        difficulty: "medium",
        question: "Teniste 'grand slam' terimi ne anlama gelir?",
        options: ["Bir seti 6-0 kazanmak", "Aynı sezonda 4 büyük turnuvayı kazanmak", "Rakibi üst üste 3 set yenmek", "Art arda 10 maç kazanmak"],
        correctIndex: 1,
        explanation: "Teniste 'grand slam', bir oyuncunun aynı takvim yılı içinde Avustralya Açık, Roland Garros (Fransa Açık), Wimbledon ve ABD Açık olmak üzere dört büyük turnuvayı kazanmasıdır. Tarihin en nadir spor başarılarından biridir."
      },
      {
        id: "sp54",
        difficulty: "medium",
        question: "Basketbolda faul sonucu yapılan 1 sayılık atış nasıl adlandırılır?",
        options: ["Serbest atış", "Üçlük", "Layup", "Dunk"],
        correctIndex: 0,
        explanation: "Basketbolda faul sonrası atılan ve 1 sayı değerindeki atışlar 'serbest atış' (free throw) olarak adlandırılır. Atışlar, potanın 4,57 m (15 feet) gerisindeki serbest atış çizgisinden gerçekleştirilir."
      },
      {
        id: "sp55",
        difficulty: "medium",
        question: "Modern Olimpiyat Oyunları ilk kez hangi yılda düzenlenmiştir?",
        options: ["1888", "1892", "1896", "1900"],
        correctIndex: 2,
        explanation: "Modern Olimpiyat Oyunları, Yunanistan'ın Atina şehrinde 1896 yılında düzenlenmiştir. Pierre de Coubertin'in girişimiyle yeniden hayata geçirilen bu oyunlara 14 ülkeden 241 sporcu katılmıştır."
      },
      {
        id: "sp56",
        difficulty: "medium",
        question: "Hangi ülkede sumo güreşi geleneksel milli spor olarak kabul edilmektedir?",
        options: ["Çin", "Güney Kore", "Japonya", "Moğolistan"],
        correctIndex: 2,
        explanation: "Sumo, Japonya'nın geleneksel ve milli sporudur. İki güreşçinin birbirini halka dışına çıkarmaya ya da yere düşürmeye çalıştığı bu spor, asırlık Şinto dini törenlerine dayanır ve birçok ritüeli korumaktadır."
      },
      {
        id: "sp57",
        difficulty: "medium",
        question: "Maraton koşusunun resmi uzunluğu kaç kilometredir?",
        options: ["40,00 km", "41,12 km", "42,195 km", "43,50 km"],
        correctIndex: 2,
        explanation: "Maraton, 42,195 km (26 mil 385 yarda) uzunluğundaki uzun mesafe koşusudur. Bu standart uzunluk, 1908 Londra Olimpiyatları'nda belirlendi. Antik Yunanistan'da Maratonlu haberci Pheidippides'in efsanevi koşusuna atıfla adını almıştır."
      },
      {
        id: "sp58",
        difficulty: "medium",
        question: "Usain Bolt'un 100 metre dünya rekoru kaç saniyedir?",
        options: ["9.48 saniye", "9.58 saniye", "9.69 saniye", "9.72 saniye"],
        correctIndex: 1,
        explanation: "Jamaikalı sprinter Usain Bolt, 9.58 saniyeyle 100 metre dünya rekoruna sahiptir. Bu rekor 2009 Berlin Dünya Şampiyonası'nda kırılmıştır. Bolt aynı zamanda 200 metrede 19.19 saniyelik dünya rekorunu da elinde bulundurur."
      },
      {
        id: "sp59",
        difficulty: "medium",
        question: "Voleybolda bir takımdan sahada kaç oyuncu yer alır?",
        options: ["5", "6", "7", "8"],
        correctIndex: 1,
        explanation: "Voleybolda her takımdan 6 oyuncu sahada yer alır; 3 ön sıra ve 3 arka sıra şeklinde konumlanır. Maç, genel kuralda ilk 3 seti kazanan takımın galibiyetiyle 5 set üzerinden oynanır."
      },
      {
        id: "sp60",
        difficulty: "medium",
        question: "Hangi spor dalında 'grand slam', 'set' ve 'servis' terimleri kullanılır?",
        options: ["Badminton", "Masa Tenisi", "Tenis", "Squash"],
        correctIndex: 2,
        explanation: "Tenis, 'grand slam' (büyük turnuvaları kazanmak), 'set' (belirli sayıda oyun kazanmayı içeren bölüm) ve 'servis' (topu oyuna sokma) gibi kendine özgü terminolojiye sahiptir. Bu terimler özellikle uluslararası tenis camiasında standart olarak kullanılmaktadır."
      },
      {
        id: "sp61",
        difficulty: "medium",
        question: "Dünya genelinde en fazla lisanslı sporcuya sahip spor dalı hangisidir?",
        options: ["Basketbol", "Kriket", "Futbol", "Yüzme"],
        correctIndex: 2,
        explanation: "Futbol, dünya genelinde yaklaşık 265 milyon lisanslı oyuncusu ve 4 milyarı aşkın taraftarıyla dünyanın en popüler ve en fazla oynanan spor dalıdır. Uluslararası futbol federasyonu FIFA'nın 211 üye ülkesi bulunmaktadır."
      },
      {
        id: "sp62",
        difficulty: "medium",
        question: "Olimpiyat bayrağındaki beş halka neyi temsil eder?",
        options: ["Beş kıtayı", "Beş spor dalını", "Beş kurucu ülkeyi", "Beş olimpik değeri"],
        correctIndex: 0,
        explanation: "Olimpiyat halkası, Avrupa (mavi), Afrika (siyah), Amerika (kırmızı), Asya (sarı) ve Okyanusya (yeşil) olmak üzere dünyanın beş kıtasını temsil eder. Sembol, 1913'te Baron Pierre de Coubertin tarafından tasarlanmış ve 1920 Antwerp Oyunları'ndan itibaren kullanılmaktadır."
      },
      {
        id: "sp63",
        difficulty: "medium",
        question: "Teniste 'ace' ne anlama gelir?",
        options: ["Oyunu kazanmak", "Rakibin değdiremediği geçerli servis", "İki kez servis hatası", "Set galibiyeti"],
        correctIndex: 1,
        explanation: "Ace, rakip oyuncunun raket ile hiç temas kuramadığı geçerli servistir ve puan doğrudan servis yapan oyuncuya verilir. Güçlü ve isabetli servis yapan oyuncular bu teknikle önemli avantaj sağlar; Roger Federer, Pete Sampras ve Isner dünya ace rekorları arasında yer alır."
      },
      {
        id: "sp64",
        difficulty: "medium",
        question: "Brezilya FIFA Dünya Kupası'nı kaç kez kazanmıştır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "Brezilya, 1958, 1962, 1970, 1994 ve 2002 yıllarındaki şampiyonluklarıyla FIFA Dünya Kupası'nı rekorsuz 5 kez kazanan tek ülkedir. Pele (3 kez), Ronaldo ve Rivaldo gibi efsanevi oyuncuları yetiştiren Brezilya, 'Samba futbolunun' simgesidir."
      },
      {
        id: "sp65",
        difficulty: "medium",
        question: "NBA tarihinde en fazla şampiyonluk hangi takımlara aittir?",
        options: ["Chicago Bulls ve Miami Heat", "Golden State Warriors ve San Antonio Spurs", "Boston Celtics ve Los Angeles Lakers", "Philadelphia 76ers ve Detroit Pistons"],
        correctIndex: 2,
        explanation: "Boston Celtics 18 şampiyonlukla NBA tarihinin en başarılı takımıdır; Los Angeles Lakers da 17 şampiyonlukla yakın takipte gelmektedir (bazı kaynaklarda güncel sayım değişebilir). Bu iki takım, NBA'nin uzun tarihine damga vurmuştur."
      },
      {
        id: "sp66",
        difficulty: "medium",
        question: "Voleybolda bir takım sahada kaç oyuncuyla oynar?",
        options: ["5", "6", "7", "9"],
        correctIndex: 1,
        explanation: "Voleybolda her takım, sahada aynı anda 6 oyuncuyla yer alır. Oyuncular saat yönünde rotasyon yapar. Her sette en az 25 sayıya ulaşan ve en az 2 sayı farkla öne geçen takım seti kazanır. Maçlar genellikle 3-5 set üzerinden oynanır."
      },
      {
        id: "sp67",
        difficulty: "medium",
        question: "Maraton koşusu resmi olarak kaç kilometre sürer?",
        options: ["40 km", "42,195 km", "45 km", "50 km"],
        correctIndex: 1,
        explanation: "Maraton, 42,195 km (26 mil 385 yard) uzunluğundaki yol koşusudur. Bu mesafe, 1908 Londra Olimpiyatları'nda Olimpik Stadyum bitiş çizgisine göre standartlaştırılmıştır. Efsaneye göre 490'da Atina-Marathon muharebesi habercisinin koştuğu mesafeye atıfla adını almıştır."
      },
      {
        id: "sp68",
        difficulty: "medium",
        question: "Tour de France ne tür bir spor müsabakasıdır?",
        options: ["Formula 1 yarışı", "Bisiklet yarışı", "Atletizm yarışı", "Kano yarışı"],
        correctIndex: 1,
        explanation: "Tour de France, her yıl temmuz ayında Fransa'da düzenlenen dünyaca ünlü bisiklet yarışıdır. Yaklaşık 3.500 km'lik parkuru birden fazla aşamada (etap) kat eden yarış, 1903'ten bu yana düzenlenmektedir. Sarı forma (maillot jaune), genel lideri simgeler."
      },
      {
        id: "sp69",
        difficulty: "medium",
        question: "Badminton'da topun yerine ne kullanılır?",
        options: ["Küçük lastik top", "Tüylü top (Shuttlecock)", "Köpük top", "Plastik bilye"],
        correctIndex: 1,
        explanation: "Badminton'da tenis topunun yerine, mantar taban üzerine saplanamış birkaç tüyden oluşan tüylü top (shuttlecock/volán) kullanılır. Hafif ve aerodinamik yapısı nedeniyle raket darbesiyle yüksek hız kazanabilen bu top, rüzgara karşı iç mekânda daha iyi performans gösterir."
      },
      {
        id: "sp70",
        difficulty: "medium",
        question: "Türkiye'nin geleneksel sporu olarak bilinen yağlı güreş en çok nerede düzenlenir?",
        options: ["Konya", "Ankara", "İstanbul", "Edirne (Kırkpınar)"],
        correctIndex: 3,
        explanation: "Kırkpınar Yağlı Güreşleri, Edirne'de her yıl yapılan ve dünyanın en eski süregelen spor müsabakalarından biri sayılan etkinliktir. UNESCO tarafından Somut Olmayan Kültürel Miras Listesi'ne alınan Kırkpınar'ın tarihi 1361'e kadar uzanmaktadır."
      },
      {
        id: "sp71",
        difficulty: "medium",
        question: "Judo sporundaki 'judo' kelimesi Japoncada ne anlama gelir?",
        options: ["Sert yol", "Nazik/yumuşak yol", "Düşman yenme yolu", "Denge yolu"],
        correctIndex: 1,
        explanation: "Judo, Japoncada 'ju' (nazik, yumuşak) ve 'do' (yol, sanat) sözcüklerinden oluşur; 'nazik yol' anlamına gelir. 1882'de Jigoro Kano tarafından geliştirilen judo, rakibi kendi gücüyle yenmek yerine onun kuvvetini kullanma ilkesine dayanır ve 1964'ten itibaren Olimpiyat disiplinidir."
      },
      {
        id: "sp72",
        difficulty: "medium",
        question: "Wimbledon tenis turnuvası hangi ülkede düzenlenir?",
        options: ["Fransa", "Avustralya", "Amerika Birleşik Devletleri", "İngiltere"],
        correctIndex: 3,
        explanation: "Wimbledon, Londra'nın Wimbledon semtinde düzenlenen Grand Slam tenis turnuvasıdır. 1877'den bu yana kesintisiz (II. Dünya Savaşı yılları hariç) gerçekleştirilen Wimbledon, çimli kortlarıyla diğer Grand Slam turnuvalarından ayrılır ve en prestijli tenis organizasyonlarından biri olarak kabul edilir."
      },
      {
        id: "sp73",
        difficulty: "medium",
        question: "Futbolda oyuncuya gösterilen kırmızı kart ne anlama gelir?",
        options: ["Uyarı", "Sahadan ihraç", "Penaltı cezası", "Geçici uzaklaştırma"],
        correctIndex: 1,
        explanation: "Futbolda kırmızı kart, oyuncunun sahadan ihraç edilmesi anlamına gelir. Kırmızı kart gören oyuncu hem o maçın kalanında hem de genellikle sonraki maçta oynayamaz. İki sarı kart veya doğrudan kırmızı kart çıkarılabilir; karşılaşmayı sert ihlal veya kaba hareket nedeniyle sona erer."
      },
      {
        id: "sp74",
        difficulty: "medium",
        question: "Roger Federer hangi ülkeyi temsil etmektedir?",
        options: ["Avustralya", "Almanya", "Avusturya", "İsviçre"],
        correctIndex: 3,
        explanation: "Roger Federer, İsviçre'yi temsil eden efsanevi tenisçidir. Kariyeri boyunca 20 Grand Slam şampiyonluğu kazanan Federer; Wimbledon'da 8, Avustralya Açık'ta 6, ABD Açık'ta 5 ve Fransa Açık'ta 1 zafer elde etmiştir. 2022'de aktif kariyerine son vermiştir."
      },
      {
        id: "sp75",
        difficulty: "hard",
        question: "Formula 1'de kırmızı bayrak ne anlama gelir?",
        options: ["Yarış lideri değişti", "Pit stop zorunluluğu", "Yarış geçici olarak durduruldu", "Güvenlik aracı devrede"],
        correctIndex: 2,
        explanation: "Formula 1'de kırmızı bayrak gösterildiğinde tüm yarışçılar hızlarını düşürerek pit şeridine ya da belirlenen bir noktaya geçmek zorundadır. Kaza, olumsuz hava koşulları veya pist tehlikesi nedeniyle yarışın geçici durdurulması amacıyla kullanılır."
      },
      {
        id: "sp76",
        difficulty: "hard",
        question: "Süper Bowl hangi sporun şampiyonluk maçıdır?",
        options: ["Beyzbol", "Amerikan Futbolu (NFL)", "Basketbol", "Buz Hokeyi"],
        correctIndex: 1,
        explanation: "Süper Bowl, Amerikan Futbolu'nun en üst profesyonel ligi olan NFL'in (Ulusal Futbol Ligi) şampiyonluk maçıdır. Her yıl ocak/şubat ayında düzenlenen Süper Bowl, dünya genelinde izlenme oranı en yüksek spor organizasyonlarından biridir; reklam kuşakları da ayrıca büyük ilgi görür."
      },
      {
        id: "sp77",
        difficulty: "hard",
        question: "Masa tenisinde fileni (neti) oluşturan ağın yüksekliği kaçtır?",
        options: ["10 cm", "12,25 cm", "15,25 cm", "20 cm"],
        correctIndex: 2,
        explanation: "Masa tenisinde file yüksekliği 15,25 cm'dir. Masanın uzunluğu 274 cm, genişliği 152,5 cm ve yüksekliği 76 cm olarak standartlaştırılmıştır. Bu spor, 1988'den itibaren Olimpiyat programına dahil edilmiştir."
      },
      {
        id: "sp78",
        difficulty: "hard",
        question: "Türkiye'de olimpiyatlarda en fazla madalya hangi spor dalından gelmiştir?",
        options: ["Atletizm", "Judo", "Güreş", "Halter"],
        correctIndex: 2,
        explanation: "Güreş, Türkiye'nin olimpiyat tarihinde en fazla madalya kazandığı spor dalıdır. Serbest güreş ve Greko-Romen branşlarında pek çok dünya ve olimpiyat şampiyonu yetiştiren Türkiye, bu alanda tarihsel olarak dünyanın en başarılı ülkelerinden biri sayılmaktadır."
      },
      {
        id: "sp79",
        difficulty: "hard",
        question: "Kriket sporunda 'wicket' nedir?",
        options: ["Topun sahayı terk ettiği alan", "Üç tahtadan oluşan hedef direği", "Oyuncunun koştuğu bölge", "Sahanın orta çizgisi"],
        correctIndex: 1,
        explanation: "Kriket'te wicket, birbirine yakın dikilmiş üç tahta direkle (stump) ve üstlerine yerleştirilen iki küçük parçayla (bail) oluşturulan hedeftir. Vurucu (batsman) wicket'ini korurken atıcı (bowler) topu wicket'e isabet ettirerek ya da vurucu wicket'e değdirerek onu oyun dışı bırakmaya çalışır."
      },
      {
        id: "sp80",
        difficulty: "hard",
        question: "Dünyada en çok izlenen spor organizasyonu hangisidir?",
        options: ["Olimpiyat Oyunları", "NBA Finalleri", "FIFA Dünya Kupası", "Wimbledon Tenis"],
        correctIndex: 2,
        explanation: "FIFA Dünya Kupası, dört yılda bir düzenlenen ve küresel izlenme oranı en yüksek spor organizasyonudur. 2022 Katar Dünya Kupası finalinin yaklaşık 1,5 milyar kişi tarafından canlı izlendiği tahmin edilmektedir. FIFA'nın 211 üye ülkesi bulunmakta; bu sayı BM üye sayısını aşmaktadır."
      },
      {
        id: "sp81",
        difficulty: "hard",
        question: "Bir futbol maçı standart olarak kaç dakika sürer?",
        options: ["80 dakika", "90 dakika", "100 dakika", "120 dakika"],
        correctIndex: 1,
        explanation: "Standart bir futbol maçı, her biri 45 dakika olan iki devreden oluşur ve toplamda 90 dakika sürer. Beraberlikle biten eleme maçlarında uzatma olarak 2×15 dakika daha oynanabilir."
      },
      {
        id: "sp82",
        difficulty: "hard",
        question: "Tenis'in dört Grand Slam turnuvası hangilerdir?",
        options: ["Wimbledon, Roland Garros, US Open, Çin Açık", "Wimbledon, Roland Garros, US Open, Avustralya Açık", "Wimbledon, İtalya Açık, US Open, Avustralya Açık", "Wimbledon, Roland Garros, Kanada Açık, Avustralya Açık"],
        correctIndex: 1,
        explanation: "Tenisteki dört Grand Slam turnuvası: Avustralya Açık (Ocak, Melbourne), Roland Garros/Fransa Açık (Mayıs-Haziran, Paris), Wimbledon (Haziran-Temmuz, Londra) ve US Open'dır (Ağustos-Eylül, New York). Tüm Grand Slam'larda şampiyon olan oyuncu 'Altın Slam' başarısına ulaşmış olur."
      },
      {
        id: "sp83",
        difficulty: "hard",
        question: "Hangi ülke futbol Dünya Kupası'nı en fazla kazanmıştır?",
        options: ["Almanya", "Arjantin", "İtalya", "Brezilya"],
        correctIndex: 3,
        explanation: "Brezilya, 1958, 1962, 1970, 1994 ve 2002 yıllarında olmak üzere 5 kez FIFA Dünya Kupası'nı kazanarak rekor sahibidir. 'Sarı Kanarya' olarak anılan Brezilya, her Dünya Kupası'na katılma başarısı gösteren tek ülkedir."
      },
      {
        id: "sp84",
        difficulty: "hard",
        question: "Voleybolda her takımda sahada kaç oyuncu bulunur?",
        options: ["5", "6", "7", "9"],
        correctIndex: 1,
        explanation: "Voleybolda her takımdan sahada 6 oyuncu aynı anda yer alır. Libero adı verilen savunma oyuncusu diğer oyunculardan farklı renkli forma giyer ve belirli kurallara tabidir. Set sistemiyle oynanan voleybolda en fazla 5 set oynanır."
      },
      {
        id: "sp85",
        difficulty: "hard",
        question: "Tour de France bisiklet yarışı kaç günden oluşur ve hangi ülkede düzenlenir?",
        options: ["14 gün, İsviçre", "21 gün, Fransa", "30 gün, Belçika", "10 gün, İtalya"],
        correctIndex: 1,
        explanation: "Tour de France, her yıl Temmuz ayında yaklaşık 21 etap ve 3.500 km boyunca Fransa'da düzenlenen dünyanın en prestijli bisiklet yarışıdır. 1903'ten bu yana yapılan yarışta genel lider sarı mayoyu (maillot jaune) giyerken en iyi dağcı noktalı kırmızı-beyaz, en iyi genç ise beyaz mayo takar."
      },
      {
        id: "sp86",
        difficulty: "hard",
        question: "Naim Süleymanoğlu hangi spor dalında dünya rekorları kırmıştır?",
        options: ["Güreş", "Halter", "Boks", "Judo"],
        correctIndex: 1,
        explanation: "Naim Süleymanoğlu, halter sporunda 3 olimpiyat altın madalyası (1988, 1992, 1996) ve sayısız dünya rekoru kırmasıyla 'Pound for Pound' (vücut ağırlığına oranla en güçlü sporcu) unvanını kazanmıştır. 'Küçük Herkül' lakabıyla anılan Süleymanoğlu, halter tarihinin en büyük isimlerinden biri olarak kabul edilmektedir."
      },
      {
        id: "sp87",
        difficulty: "hard",
        question: "Formula 1'de yarışı birinci bitiren sürücü kaç puan kazanır?",
        options: ["10", "15", "25", "50"],
        correctIndex: 2,
        explanation: "2010 sezonundan itibaren geçerli olan puanlama sistemine göre Formula 1'de birinci olan sürücü 25 puan kazanır. Puanlar sırayla: 1. 25, 2. 18, 3. 15, 4. 12, 5. 10, 6. 8, 7. 6, 8. 4, 9. 2, 10. 1 şeklindedir. En hızlı tur puanı da 1 ek puan sağlar."
      },
      {
        id: "sp88",
        difficulty: "hard",
        question: "Olimpiyat ateşi geleneksel olarak nerede yakılır?",
        options: ["Atina, Yunanistan", "Olimpia, Yunanistan", "Paris, Fransa", "Londra, İngiltere"],
        correctIndex: 1,
        explanation: "Olimpiyat ateşi, antik olimpiyatların orijinal mekânı olan Yunanistan'ın Olimpia kentinde güneş ışınlarıyla yakılır. Yansıtıcı bir ayna yardımıyla tutuşturulan ateş, meşale koşusuyla ev sahibi şehre taşınır ve açılış töreninde olimpiyat kazanına aktarılarak oyunlar süresince yanar."
      },
      {
        id: "sp89",
        difficulty: "hard",
        question: "Hangi ülke tarihte en fazla olimpiyat madalyası kazanmıştır?",
        options: ["Rusya", "Çin", "Almanya", "ABD"],
        correctIndex: 3,
        explanation: "ABD, modern olimpiyatların tüm tarihinde en fazla toplam madalya kazanan ülkedir. 1896'dan bu yana binlerce madalya toplayan ABD; özellikle atletizm, yüzme ve jimnastik gibi madalya zengini branşlarda üstün performans sergilemiştir."
      },
      {
        id: "sp90",
        difficulty: "hard",
        question: "Futbolda ofsayt kuralına göre bir oyuncu ne zaman ofsayt sayılır?",
        options: ["Top çıkarken rakip sahada bulunduğunda", "Topu son oyuncudan önce aldığında", "Rakip kaleye yakın bölgede top alırken son iki rakip oyuncudan daha ilerdeyse", "Savunma bölgesinde topa dokunduğunda"],
        correctIndex: 2,
        explanation: "Ofsayt, bir oyuncunun top oynanırken rakip yarı sahada son iki rakip oyuncudan (genellikle kaleci ve son defans oyuncusu) daha ileri konumda olup top aldığı durumdur. Kural yalnızca pasın verildiği anda geçerlidir; topun gittiği noktada değil, pasın çıktığı anda pozisyon önemlidir."
      },
      {
        id: "sp91",
        difficulty: "hard",
        question: "Ping Pong (masa tenisi) topunun standart çapı ne kadardır?",
        options: ["30 mm", "35 mm", "40 mm", "45 mm"],
        correctIndex: 2,
        explanation: "2000 yılında yapılan değişiklikle masa tenisi topunun standart çapı 38 mm'den 40 mm'ye yükseltilmiştir. 2015'ten itibaren ise 40+ mm plastik toplar kullanıma girmiştir. Bu değişiklikler topun görünürlüğünü artırmak ve hızını biraz düşürmek amacıyla yapılmıştır."
      },
      {
        id: "sp92",
        difficulty: "hard",
        question: "Golf'te 'birdie' terimi ne anlama gelir?",
        options: ["Par'ın iki altında delik tamamlamak", "Par'ın bir altında delik tamamlamak", "Par'a eşit delik tamamlamak", "Par'ın bir üstünde delik tamamlamak"],
        correctIndex: 1,
        explanation: "Golf'te birdie, belirlenmiş par sayısının bir altında vurarak deliği tamamlamak anlamına gelir. Örneğin par 4 olan bir deliği 3 vuruşta bitirmek birdie'dir. Eagle ise par'ın iki altını ifade eder. Bu terimler 19. yüzyıl Amerikan argosundan gelen 'bird' (harika şey) sözcüğünden türemiştir."
      },
      {
        id: "sp93",
        difficulty: "hard",
        question: "Türkiye'nin milli futbol takımı hangi FIFA konfederasyonuna üyedir?",
        options: ["CAF", "CONCACAF", "AFC", "UEFA"],
        correctIndex: 3,
        explanation: "Türkiye Futbol Federasyonu (TFF), 1962 yılından itibaren UEFA (Union of European Football Associations - Avrupa Futbol Birlikleri Birliği) üyesidir. Türkiye milli futbol takımının en büyük başarısı 2002 FIFA Dünya Kupası'ndaki üçüncülüktür."
      },
      {
        id: "sp94",
        difficulty: "hard",
        question: "Hentbolda oyun alanında kale çizgisine olan ve koruma bölgesini belirleyen mesafe kaç metredir?",
        options: ["4 metre", "5 metre", "6 metre", "8 metre"],
        correctIndex: 2,
        explanation: "Hentbolda kalecinin ve topun yere çarptığı noktanın girebileceği kale çizgisine 6 metrelik mesafe, 'd' şeklinde çizilmiş korunan alan oluşturur. Atıcılar bu çizginin dışından atış yapmak zorundadır; yalnızca hava toplarında bu çizginin üzerinden geçilerek giriş yapılabilir."
      },
      {
        id: "sp95",
        difficulty: "hard",
        question: "Basketbolda NBA'de maç kaç dakikadan oluşur?",
        options: ["32 dakika (4×8)", "40 dakika (4×10)", "48 dakika (4×12)", "60 dakika (4×15)"],
        correctIndex: 2,
        explanation: "NBA (Kuzey Amerika Basketbol Ligi) maçları, her biri 12 dakikadan oluşan 4 periyotla toplam 48 dakika oynanır. FIBA (uluslararası) basketbolda ise periyotlar 10 dakikadır ve maçlar toplam 40 dakikada tamamlanır. Beraberlikte uzatma periyotları uygulanır."
      },
      {
        id: "sp96",
        difficulty: "hard",
        question: "Atletizmde 400 metre engelli koşuda kaç engel aşılmalıdır?",
        options: ["8", "10", "12", "15"],
        correctIndex: 1,
        explanation: "400 metre engelli koşuda atletler 10 engeli aşmak zorundadır. Her engelin yüksekliği erkeklerde 91.4 cm, kadınlarda ise 76.2 cm'dir. Engeller düzenli aralıklarla yerleştirilmiştir; birinci engel start çizgisinden 45 metre, sonraki engeller birbirinden 35 metre uzaklıktadır."
      },
      {
        id: "sp97",
        difficulty: "hard",
        question: "Kriket sporunda 'wicket' ne anlama gelir?",
        options: ["Topun fırlatılma şekli", "Üç direk ve iki çubuktan oluşan hedef düzeneği", "Oyuncu değişikliği", "Sayı tahtası"],
        correctIndex: 1,
        explanation: "Krikette wicket; birbirine yakın dikilmiş üç direkçik (stump) üzerine iki küçük çubuk (bail) yerleştirilerek oluşturulan hedeftir. Atış yapan oyuncu (bowler) topu bu hedefe yönlendirirken karşı oyuncu (batsman) wicket'i korumaya çalışır. Wicket'i devirilen oyuncu oyun dışı kalır (out)."
      },
      {
        id: "sp98",
        difficulty: "hard",
        question: "Dünya'nın en yüksek rakımlı resmi futbol sahası nerededir?",
        options: ["Tibet, Çin", "La Paz, Bolivya", "Quito, Ekvador", "Katmandu, Nepal"],
        correctIndex: 1,
        explanation: "Bolivya'nın başkenti La Paz yakınlarındaki El Alto şehrinde bulunan Estadio Hernando Siles, yaklaşık 3.637 metre yüksekliğiyle dünyanın resmi maçların oynandığı en yüksek rakımlı futbol sahalarından biridir. Yüksek rakımda azalan oksijen nedeniyle rakip takımlar burada oynamayı oldukça zorlu bulmaktadır."
      },
      {
        id: "sp99",
        difficulty: "hard",
        question: "Yüzme sporunda 'butterfly' (kelebek) stili nasıl tanımlanır?",
        options: ["Sırt üstü yüzülen stil", "Her iki kolun aynı anda ileriye atıldığı ve yunus tekmeyle ilerlenen stil", "Suda yürüme tekniği", "Tek kolun öne atıldığı ve yanlamasına ilerlenen stil"],
        correctIndex: 1,
        explanation: "Kelebek stili (butterfly), her iki kolun eş zamanlı olarak ileriye fırlatıldığı ve bacakların birlikte 'yunus tekme' (dolphin kick) şeklinde hareket ettiği yüzme tekniğidir. Stiller arasında en fazla güç gerektiren teknik olan kelebek stili, antrenman gerektiren ritmi ve koordinasyonuyla olimpiyatların görkemli disiplinlerinden biridir."
      },
      {
        id: "sp100",
        difficulty: "hard",
        question: "Türk halk güreş geleneği olan Kırkpınar'ın yapıldığı şehir hangisidir?",
        options: ["İstanbul", "Ankara", "Edirne", "Bursa"],
        correctIndex: 2,
        explanation: "Kırkpınar Yağlı Güreşleri, her yıl Trakya'nın tarihi şehri Edirne'de düzenlenmektedir. 1346 yılından bu yana kesintisiz sürdürülen Kırkpınar, dünyanın en eski devam eden spor organizasyonu unvanını taşımakta olup 2010 yılında UNESCO tarafından İnsanlığın Somut Olmayan Kültürel Mirası listesine alınmıştır."
      },
      {
        id: "sp101",
        difficulty: "hard",
        question: "FIFA Dünya Kupası kaç yılda bir düzenlenir?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation: "FIFA Dünya Kupası, dört yılda bir düzenlenen ve dünyanın en büyük spor etkinliği olarak kabul edilen futbol turnuvasıdır. İlk kez 1930'da Uruguay'da düzenlenen turnuvaya bugün 211 FIFA üyesi ülkeden 32 (2026'dan itibaren 48) milli takım katılmaktadır. En fazla şampiyonluk Brezilya'ya aittir (5 kez)."
      },
      {
        id: "sp102",
        difficulty: "hard",
        question: "Atletizmde 'dekatlon' kaç farklı spor dalını kapsar?",
        options: ["7", "8", "10", "12"],
        correctIndex: 2,
        explanation: "Dekatlon, iki gün boyunca gerçekleştirilen ve on farklı atletizm branşını kapsayan kombinasyon disiplinidir: 100 m, uzun atlama, gülle atma, yüksek atlama, 400 m, 110 m engelli, disk atma, sırıkla yüksek atlama, cirit atma ve 1500 m. Her branştan toplam puan hesaplanır; dekatlon şampiyonu geleneksel olarak 'dünyanın en büyük atleti' olarak anılır."
      },
      {
        id: "sp103",
        difficulty: "hard",
        question: "Olimpiyat bayrağındaki beş halka hangi kıtaları temsil eder?",
        options: ["Avrupa, Asya, Afrika, Kuzey Amerika, Güney Amerika", "Afrika, Amerika, Asya, Avrupa, Okyanusya", "Avrupa, Asya, Afrika, Antarktika, Amerika", "Asya, Avrupa, Okyanusya, Kuzey Amerika, Antarktika"],
        correctIndex: 1,
        explanation: "Olimpiyat bayrağındaki beş iç içe geçmiş halka; Afrika, Amerika (Kuzey ve Güney), Asya, Avrupa ve Okyanusya kıtalarını temsil eder. 1914'te Pierre de Coubertin tarafından tasarlanan bayrak, beş kıtanın dünya sporundaki birliğini simgeler. Halkaların renkleri (mavi, sarı, siyah, yeşil, kırmızı) ve beyaz zemin birlikte dünya bayraklarında en az bir rengi barındırmaktadır."
      },
      {
        id: "sp104",
        difficulty: "hard",
        question: "Uluslararası Olimpiyat Komitesi'nin (IOC) merkezi hangi şehirdedir?",
        options: ["Cenevre", "Lozan", "Zürih", "Bern"],
        correctIndex: 1,
        explanation: "Uluslararası Olimpiyat Komitesi (IOC), 1894'te kurulan ve Olimpiyat Oyunları'nı yöneten en üst spor kuruluşudur; merkezi İsviçre'nin Lozan şehrindedir. IOC, ev sahibi şehirleri seçer, Olimpiyat Şartı'nı denetler ve sporda küresel adalet, doping karşıtı kurallar gibi standartları belirler. Lozan aynı zamanda Dünya Anti-Doping Ajansı (WADA) başta olmak üzere pek çok uluslararası spor kuruluşuna ev sahipliği yapar."
      },
      {
        id: "sp105",
        difficulty: "hard",
        question: "Eskrimde kullanılan üç farklı silah nelerdir?",
        options: ["Kılıç, mızrak, yay", "Flöre, epe, kılıç", "Hançer, kama, pala", "Rapier, sabre, dagger"],
        correctIndex: 1,
        explanation: "Olimpik eskrimde üç ayrı silah kategorisi vardır: Flöre (foil) — yalnızca gövde geçerli hedef; Epe (épée) — tüm vücut geçerli hedef ve en ağır silah; Kılıç (sabre) — bel üstü geçerli hedef, hem kesme hem dürtme sayılır. Her kategorinin kendine özgü hedef alanı ve puanlama kuralları vardır. Eskrim, 1896'daki ilk modern Olimpiyatlardan bu yana sürekli yer alan dallardan biridir."
      },
      {
        id: "sp106",
        difficulty: "hard",
        question: "Taekwondo hangi ülkenin ulusal sporu olarak kabul edilir?",
        options: ["Japonya", "Çin", "Kuzey Kore", "Güney Kore"],
        correctIndex: 3,
        explanation: "Taekwondo, Güney Kore'nin milli sporu ve dünya genelinde en yaygın dövüş sanatlarından biridir. 'Ayak (tae) - el (kwon) - yol (do)' anlamına gelen bu sanat, özellikle yüksek tekme tekniklerini ön plana çıkarır. 1988 Seul Olimpiyatlarında gösteri sporu, 2000 Sidney'den itibaren Olimpik disiplin olarak yer almaktadır. Dünya genelinde 80 milyonun üzerinde uygulayıcısı olduğu tahmin edilmektedir."
      },
      {
        id: "sp107",
        difficulty: "hard",
        question: "En fazla Formula 1 Grand Prix yarışı kazanan pilot kimdir?",
        options: ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel"],
        correctIndex: 2,
        explanation: "Britanyalı pilot Lewis Hamilton, 103 Grand Prix zaferini rekor olarak F1 tarihine yazdırmıştır (2024 itibarıyla). Aynı zamanda 7 Dünya Şampiyonluğu ile Michael Schumacher'in rekoruna eşitleyerek bu rekoru da paylaşır. Hamilton; Abu Dhabi, Silverstone, Monza ve daha pek çok pisteki üstün performansıyla F1'in en başarılı pilotu unvanını elinde bulundurmaktadır."
      },
      {
        id: "sp108",
        difficulty: "hard",
        question: "Amerikan futbolunda 'touchdown' kaç puan değerindedir?",
        options: ["3", "4", "6", "7"],
        correctIndex: 2,
        explanation: "Amerikan futbolunda bir touchdown 6 puan değerindedir. Oyuncunun topu taşıyarak veya pas alarak karşı takımın son bölgesine (end zone) ulaşması ya da burada pasın tutulmasıyla gerçekleşir. Ardından takım 1 puanlık ekstra sayı (PAT/extra point) veya 2 puanlık dönüşüm denemesini tercih edebilir. Alan golü ise 3 puan değerindedir."
      },
      {
        id: "sp109",
        difficulty: "hard",
        question: "Wimbledon tenis turnuvası hangi zemin türünde oynanır?",
        options: ["Toprak (kil)", "Sert zemin (beton/asfalt)", "Çim", "Halı"],
        correctIndex: 2,
        explanation: "1877'den bu yana Londra'nın Wimbledon semtinde düzenlenen Grand Slam turnuvası, yılın en prestijli tenis etkinliği olma özelliğini korumaktadır ve çim zeminde oynanmaktadır. Çim, topun hızlı ve alçak sekmesini sağladığından servis-voley oyun tarzını ön plana çıkarır. Turnuvada beyaz kıyafet zorunluluğu ve kraliyet ailesinin geleneksel katılımı simgesel önem taşır."
      },
      {
        id: "sp110",
        difficulty: "hard",
        question: "Türkiye'nin olimpiyat tarihinde en çok madalya kazandığı spor dalı hangisidir?",
        options: ["Boks", "Halter", "Güreş", "Judo"],
        correctIndex: 2,
        explanation: "Güreş, Türkiye'nin olimpiyat tarihindeki madalya sayısı en yüksek spor dalıdır. Türk güreşçiler Serbest ve Grekoromen stillerinde onlarca olimpiyat madalyası kazanmıştır. Hamza Yerlikaya, Rıza Kayaalp ve Taha Akgül gibi isimler dünya şampiyonluklarıyla adından söz ettirmiştir. Kırkpınar Yağlı Güreş Festivali ise 1346'dan bu yana kesintisiz süregelen dünyanın en eski spor organizasyonudur."
      },
      {
        id: "sp111",
        difficulty: "easy",
        question: "Bir futbol maçı normalde kaç dakika sürer?",
        options: ["60", "80", "90", "120"],
        correctIndex: 2,
        explanation: "Standart bir futbol maçı 45'er dakikalık iki devreden oluşur, toplam 90 dakika sürer; uzatmalar bu sürenin dışındadır."
      },
      {
        id: "sp112",
        difficulty: "easy",
        question: "Bir voleybol takımında sahada aynı anda kaç oyuncu yer alır?",
        options: ["5", "6", "7", "11"],
        correctIndex: 1,
        explanation: "Voleybol kurallarına göre her takımda sahada aynı anda 6 oyuncu yer alır."
      },
      {
        id: "sp113",
        difficulty: "easy",
        question: "Bir basketbol takımında sahada aynı anda kaç oyuncu vardır?",
        options: ["4", "5", "6", "7"],
        correctIndex: 1,
        explanation: "FIBA ve NBA kurallarında her takım sahada aynı anda 5 oyuncuyla mücadele eder."
      },
      {
        id: "sp114",
        difficulty: "easy",
        question: "Olimpiyat oyunları kaç yılda bir düzenlenir?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation: "Modern Olimpiyat Oyunları, hem yaz hem kış olimpiyatları olmak üzere her 4 yılda bir düzenlenir."
      },
      {
        id: "sp115",
        difficulty: "easy",
        question: "Yaşar Doğu hangi spor dalında dünya şampiyonu olmuştur?",
        options: ["Boks", "Halter", "Güreş", "Atletizm"],
        correctIndex: 2,
        explanation: "Yaşar Doğu, Türk güreş tarihinin efsanevi isimlerinden biridir; 1948 Londra Olimpiyatları'nda altın madalya kazanmış ve 1951'de dünya şampiyonu olmuştur."
      },
      {
        id: "sp116",
        difficulty: "easy",
        question: "Türkiye'nin Süper Lig'deki 'Üç Büyükler' takımları hangileridir?",
        options: ["Beşiktaş, Galatasaray, Trabzonspor", "Galatasaray, Fenerbahçe, Beşiktaş", "Galatasaray, Fenerbahçe, Trabzonspor", "Fenerbahçe, Beşiktaş, Bursaspor"],
        correctIndex: 1,
        explanation: "Türk futbolunda 'Üç Büyükler' geleneksel olarak Galatasaray, Fenerbahçe ve Beşiktaş'tır."
      },
      {
        id: "sp117",
        difficulty: "easy",
        question: "Maraton koşusunun mesafesi yaklaşık kaç kilometredir?",
        options: ["21", "32", "42", "50"],
        correctIndex: 2,
        explanation: "Maraton, 42,195 km uzunluğundadır; bu mesafe 1908 Londra Olimpiyatları'nda standart hâline getirilmiştir."
      },
      {
        id: "sp118",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi bir kış sporu değildir?",
        options: ["Kayak", "Buz pateni", "Snowboard", "Sörf"],
        correctIndex: 3,
        explanation: "Sörf, su üzerinde yapılan bir yaz sporudur; diğerleri kar veya buz üzerinde yapılan kış sporlarıdır."
      },
      {
        id: "sp119",
        difficulty: "easy",
        question: "Bir golf turunda standart olarak kaç delik vardır?",
        options: ["9", "12", "18", "21"],
        correctIndex: 2,
        explanation: "Standart bir golf sahası ve turu 18 delikten oluşur; 9 delikli pist daha kısa formattır."
      },
      {
        id: "sp120",
        difficulty: "easy",
        question: "Bir buz hokeyi takımı sahada kaleci dahil kaç oyuncuyla maça başlar?",
        options: ["5", "6", "7", "11"],
        correctIndex: 1,
        explanation: "Buz hokeyinde her takım sahada kaleci dahil 6 oyuncuyla mücadele eder."
      },
      {
        id: "sp121",
        difficulty: "easy",
        question: "Penaltı atışı hangi sporda kullanılır?",
        options: ["Tenis", "Voleybol", "Futbol", "Basketbol"],
        correctIndex: 2,
        explanation: "Penaltı; futbolda ceza sahası içinde yapılan kural ihlali sonrası verilen, 11 metreden tek kişilik atış hakkıdır."
      },
      {
        id: "sp122",
        difficulty: "easy",
        question: "FIFA hangi sporun uluslararası federasyonudur?",
        options: ["Basketbol", "Futbol", "Voleybol", "Hentbol"],
        correctIndex: 1,
        explanation: "FIFA (Fédération Internationale de Football Association), 1904'te Paris'te kurulmuş ve dünya futbolunu yöneten en üst kuruluştur."
      },
      {
        id: "sp123",
        difficulty: "easy",
        question: "Tenis maçında '40-40' skoru nasıl adlandırılır?",
        options: ["Game", "Deuce", "Set", "Match point"],
        correctIndex: 1,
        explanation: "Tenis oyununda 40-40 eşitliği 'deuce' olarak adlandırılır; oyunu kazanmak için 2 sayı üst üste alınması gerekir."
      },
      {
        id: "sp124",
        difficulty: "easy",
        question: "Bir Formula 1 yarışı genelde hangi mesafeye yakındır?",
        options: ["50 km", "100 km", "300 km", "1000 km"],
        correctIndex: 2,
        explanation: "Bir Formula 1 yarışı, Monaco hariç tipik olarak yaklaşık 305 km mesafe veya en fazla 2 saatte tamamlanmasıyla biter."
      },
      {
        id: "sp125",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi su sporu değildir?",
        options: ["Yüzme", "Su topu", "Su kayağı", "Atletizm"],
        correctIndex: 3,
        explanation: "Atletizm; koşu, atlama ve atma branşlarını içeren kara sporudur; su sporu değildir."
      },
      {
        id: "sp126",
        difficulty: "easy",
        question: "Bir basketbol maçı NBA kurallarına göre kaç periyottan oluşur?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation: "NBA'de bir maç 12'şer dakikalık 4 periyottan oluşur; FIBA'da ise 10'ar dakikalık 4 periyot uygulanır."
      },
      {
        id: "sp127",
        difficulty: "easy",
        question: "Şampiyonlar Ligi futbol turnuvası hangi kıtada düzenlenir?",
        options: ["Avrupa", "Asya", "Amerika", "Afrika"],
        correctIndex: 0,
        explanation: "UEFA Şampiyonlar Ligi, Avrupa kulüplerinin katıldığı, dünyanın en prestijli kulüpler arası futbol turnuvasıdır."
      },
      {
        id: "sp128",
        difficulty: "medium",
        question: "İlk Dünya Kupası hangi yıl düzenlendi?",
        options: ["1920", "1930", "1950", "1962"],
        correctIndex: 1,
        explanation: "İlk FIFA Dünya Kupası 1930'da Uruguay'da düzenlendi; ev sahibi Uruguay turnuvayı kazandı."
      },
      {
        id: "sp129",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Olimpiyat sembolündeki halka renklerinden biri değildir?",
        options: ["Mavi", "Sarı", "Mor", "Yeşil"],
        correctIndex: 2,
        explanation: "Olimpiyat halkalarında mavi, sarı, siyah, yeşil ve kırmızı renkler kullanılır; mor halka yoktur."
      },
      {
        id: "sp130",
        difficulty: "medium",
        question: "Aşağıdakilerden hangi futbol kulübü Şampiyonlar Ligi'ni en çok kez kazanmıştır?",
        options: ["Bayern Münih", "Real Madrid", "Liverpool", "AC Milan"],
        correctIndex: 1,
        explanation: "Real Madrid, Şampiyonlar Ligi tarihinde 2024 itibarıyla 15 şampiyonlukla en çok kez kupayı kaldıran kulüptür."
      },
      {
        id: "sp131",
        difficulty: "medium",
        question: "Şampiyonlar Ligi 2024-25 sezonu öncesi resmi adı 'UEFA Şampiyonlar Ligi' olan kupanın bir önceki adı neydi?",
        options: ["UEFA Kupası", "Avrupa Şampiyon Kulüpler Kupası", "Avrupa Federasyon Kupası", "Avrupa Süper Kupası"],
        correctIndex: 1,
        explanation: "1992'den önce Şampiyonlar Ligi, 'Avrupa Şampiyon Kulüpler Kupası' adı altında düzenleniyordu."
      },
      {
        id: "sp132",
        difficulty: "medium",
        question: "Türkiye Süper Lig'i hangi yıl kurulmuştur?",
        options: ["1959", "1965", "1970", "1980"],
        correctIndex: 0,
        explanation: "Türkiye'de profesyonel ulusal futbol ligi olan Türkiye 1.Lig (sonradan Süper Lig), 1959-60 sezonunda başlamıştır."
      },
      {
        id: "sp133",
        difficulty: "medium",
        question: "Hangi sporda 'birdie', 'eagle' ve 'bogey' terimleri kullanılır?",
        options: ["Bilardo", "Golf", "Bowling", "Kriket"],
        correctIndex: 1,
        explanation: "Birdie (par-1), eagle (par-2) ve bogey (par+1) golfta belirli bir delikteki vuruş sayısının par'a göre durumunu ifade eden terimlerdir."
      },
      {
        id: "sp134",
        difficulty: "medium",
        question: "Türkiye, 2002 FIFA Dünya Kupası'nı kaçıncı sırada bitirmiştir?",
        options: ["Birinci", "İkinci", "Üçüncü", "Dördüncü"],
        correctIndex: 2,
        explanation: "Türkiye, 2002 Japonya-Güney Kore Dünya Kupası'nda Güney Kore'yi 3-2 yenerek üçüncülük kazanmış ve tarihindeki en başarılı sonucunu elde etmiştir."
      },
      {
        id: "sp135",
        difficulty: "medium",
        question: "Bir Olimpiyat maratonu kaç metredir?",
        options: ["21.097", "26.000", "42.195", "50.000"],
        correctIndex: 2,
        explanation: "Olimpiyat ve uluslararası maraton mesafesi 42.195 metre (42,195 km)'dir."
      },
      {
        id: "sp136",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Olimpiyat sloganıdır?",
        options: ["Citius, Altius, Fortius", "Pax Olympica", "Veni, Vidi, Vici", "Per Aspera ad Astra"],
        correctIndex: 0,
        explanation: "Olimpiyat sloganı 'Citius, Altius, Fortius' (Daha hızlı, daha yüksek, daha güçlü) Latincedir; 2021'de '- Communiter' (Birlikte) eklenmiştir."
      },
      {
        id: "sp137",
        difficulty: "medium",
        question: "1996 Atlanta Olimpiyatları'nda Türkiye'nin ilk altın madalyasını hangi sporcu kazandı?",
        options: ["Hamza Yerlikaya", "Naim Süleymanoğlu", "Halil Mutlu", "Mahmut Demir"],
        correctIndex: 1,
        explanation: "Naim Süleymanoğlu (Cep Herkülü), 1988, 1992 ve 1996 Olimpiyatları'nda halterde altın madalya kazanan ilk sporcudur; 1996'da Atlanta'da Türkiye'nin halterdeki altınını kazandı."
      },
      {
        id: "sp138",
        difficulty: "medium",
        question: "Hangi sporda 'love' terimi sıfır anlamına gelir?",
        options: ["Voleybol", "Tenis", "Futbol", "Basketbol"],
        correctIndex: 1,
        explanation: "Tenis terminolojisinde sıfır sayı, 'love' olarak ifade edilir (örn. 15-love, 30-love)."
      },
      {
        id: "sp139",
        difficulty: "medium",
        question: "Hangi sporda 'safety car' uygulanır?",
        options: ["Yelkencilik", "Formula 1", "Atletizm", "Bisiklet"],
        correctIndex: 1,
        explanation: "Safety car (güvenlik aracı), Formula 1 ve diğer pist motor sporlarında pistteki tehlikeli durumlarda yarışın hızını yavaşlatmak için kullanılır."
      },
      {
        id: "sp140",
        difficulty: "medium",
        question: "İlk modern Olimpiyat Oyunları'nın yapıldığı yıl hangisidir?",
        options: ["1888", "1896", "1908", "1924"],
        correctIndex: 1,
        explanation: "İlk modern Olimpiyat Oyunları, 1896'da Yunanistan'ın başkenti Atina'da düzenlenmiştir."
      },
      {
        id: "sp141",
        difficulty: "medium",
        question: "Hangi tenisçi kariyeri boyunca en çok Grand Slam tekler şampiyonluğuna sahip erkek oyuncudur (2024 itibarıyla)?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokoviç", "Pete Sampras"],
        correctIndex: 2,
        explanation: "Novak Djokoviç, 2024 itibarıyla 24 Grand Slam tekler şampiyonluğuyla erkek tenis tarihinde rekorun sahibidir."
      },
      {
        id: "sp142",
        difficulty: "medium",
        question: "FIFA Dünya Kupası'nın günümüzdeki kupasını tasarlayan İtalyan heykeltıraş kimdir?",
        options: ["Silvio Gazzaniga", "Antonio Canova", "Aldo Rossi", "Enzo Mari"],
        correctIndex: 0,
        explanation: "Mevcut FIFA Dünya Kupası, 1971'de İtalyan heykeltıraş Silvio Gazzaniga tarafından tasarlanmış ve 1974'ten itibaren kullanılmaktadır."
      },
      {
        id: "sp143",
        difficulty: "medium",
        question: "Hangi spor müsabakası 'Tour de France' adıyla bilinir?",
        options: ["Maraton", "Bisiklet", "Yelken", "At yarışı"],
        correctIndex: 1,
        explanation: "Tour de France, Fransa'da her yıl Temmuz ayında düzenlenen, dünyanın en prestijli profesyonel bisiklet yarışlarından biridir."
      },
      {
        id: "sp144",
        difficulty: "medium",
        question: "Türk halterci Halil Mutlu'nun en parlak olimpiyat altın sayısı kaçtır?",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        explanation: "Halil Mutlu; 1996 Atlanta, 2000 Sydney ve 2004 Atina Olimpiyatları'nda olmak üzere üst üste 3 olimpiyat altın madalyası kazanmıştır."
      },
      {
        id: "sp145",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi hentbol sahasında oyuncu sayısıdır (kaleci dahil)?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
        explanation: "Hentbolda her takım sahada kaleci dahil 7 oyuncuyla mücadele eder."
      },
      {
        id: "sp146",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türk milli sporlarından birisidir?",
        options: ["Eskrim", "Yağlı güreş", "Boks", "Cirit"],
        correctIndex: 1,
        explanation: "Yağlı güreş, Türk halk geleneğinde yer alan ve geleneksel Türk milli sporu kabul edilen güreş türüdür; Cirit de bir başka geleneksel Türk sporudur."
      },
      {
        id: "sp147",
        difficulty: "hard",
        question: "Real Madrid'in efsane teknik direktörü Alfredo Di Stefano hangi ülkenin uyrukluğunu taşımıştır?",
        options: ["İspanyol", "Brezilyalı", "Arjantinli (sonra İspanyol)", "İtalyan"],
        correctIndex: 2,
        explanation: "Alfredo Di Stefano Arjantin doğumlu; sonradan İspanyol vatandaşlığı almış ve Real Madrid'in 1956-60 arası 5 ardışık Avrupa Kupası'nın baş aktörü olmuştur."
      },
      {
        id: "sp148",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi olimpik bir spor değildir?",
        options: ["Eskrim", "Tenis", "Squash", "Triatlon"],
        correctIndex: 2,
        explanation: "Squash, çeşitli denemelere rağmen henüz Olimpiyatlar programına dahil edilmemiştir; LA 2028'de yer alması bekleniyor."
      },
      {
        id: "sp149",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Pierre de Coubertin'in mirası ile ilişkilidir?",
        options: ["FIFA'nın kurulması", "Modern Olimpiyat hareketinin başlatılması", "Tour de France'ın kurulması", "Wimbledon'un kurulması"],
        correctIndex: 1,
        explanation: "Fransız tarihçi Baron Pierre de Coubertin, modern Olimpiyat hareketinin kurucusu olarak bilinir; 1894'te Uluslararası Olimpiyat Komitesi'ni kurmuştur."
      },
      {
        id: "sp150",
        difficulty: "hard",
        question: "1956-60 döneminde Avrupa Şampiyon Kulüpler Kupası'nı (Şampiyonlar Ligi'nin öncülü) üst üste 5 kez kazanan kulüp hangisidir?",
        options: ["Bayern Münih", "Liverpool", "Real Madrid", "AC Milan"],
        correctIndex: 2,
        explanation: "Real Madrid, 1956'dan 1960'a kadar Avrupa Şampiyon Kulüpler Kupası'nı üst üste 5 kez kazanarak bu turnuvanın ilk dönemine damga vurmuştur."
      },
      {
        id: "sp151",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Galatasaray'ın 2000 yılında kazandığı Avrupa kupasıdır?",
        options: ["UEFA Şampiyonlar Ligi", "UEFA Kupası", "Cup Winners' Cup", "Süper Kupa"],
        correctIndex: 1,
        explanation: "Galatasaray, 2000'de finalde Arsenal'ı penaltılarla yenerek UEFA Kupası'nı; ardından da Real Madrid'i mağlup ederek UEFA Süper Kupası'nı kazanmıştır."
      },
      {
        id: "sp152",
        difficulty: "hard",
        question: "Wimbledon turnuvası hangi zemin türünde oynanır?",
        options: ["Toprak", "Çim", "Hard court", "Halı"],
        correctIndex: 1,
        explanation: "Wimbledon, dünyanın en eski ve hâlâ çim zeminde oynanan tek Grand Slam tenis turnuvasıdır."
      },
      {
        id: "sp153",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Ordinaryüs' lakabıyla anılan ünlü Türk futbolcusudur?",
        options: ["Metin Oktay", "Lefter Küçükandonyadis", "Hakan Şükür", "Tanju Çolak"],
        correctIndex: 1,
        explanation: "Lefter Küçükandonyadis (1925-2012), Fenerbahçe'nin efsanevi futbolcusudur ve futbol sahalarındaki ustalığı nedeniyle 'Ordinaryüs' lakabıyla anılır."
      },
      {
        id: "sp154",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Türk basketbol millî takımının 2010 FIBA Dünya Şampiyonası'nda elde ettiği sonuçtur?",
        options: ["Birincilik", "İkincilik", "Üçüncülük", "Dördüncülük"],
        correctIndex: 1,
        explanation: "Türkiye, 2010 İstanbul'da düzenlenen FIBA Dünya Şampiyonası'nda finalde ABD'ye yenilerek tarihindeki en başarılı basketbol sonucunu - ikincilik - elde etti."
      },
      {
        id: "sp155",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Pele'nin oynadığı kulüplerden biri değildir?",
        options: ["Santos", "New York Cosmos", "Real Madrid", "Yok—o yalnızca bu ikisinde oynamıştır"],
        correctIndex: 2,
        explanation: "Pele kariyerinin büyük kısmını Brezilya'nın Santos kulübünde, son yıllarını ise NY Cosmos'ta geçirmiştir; Real Madrid'de hiç oynamamıştır."
      },
      {
        id: "sp156",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Ironman' triatlon yarışmasının toplam mesafesidir?",
        options: ["50 km", "113 km", "226 km", "300 km"],
        correctIndex: 2,
        explanation: "Ironman; 3,86 km yüzme + 180,25 km bisiklet + 42,2 km koşu olmak üzere toplam yaklaşık 226 km mesafe içerir."
      },
      {
        id: "sp157",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Roland Garros (Fransa Açık) tenis turnuvasının zeminidir?",
        options: ["Çim", "Toprak (clay)", "Hard court", "Sentetik halı"],
        correctIndex: 1,
        explanation: "Roland Garros, Grand Slam'ler arasında turuncu toprak (clay) zeminde oynanan tek turnuvadır."
      },
      {
        id: "sp158",
        difficulty: "hard",
        question: "İlk modern Olimpiyat Oyunları'nda kazanılan ilk altın madalya hangi branştadır?",
        options: ["100 metre koşu", "Üç adım atlama", "Maraton", "Disk atma"],
        correctIndex: 1,
        explanation: "1896 Atina Olimpiyatları'nda ilk altın madalya, Amerikalı James Connolly tarafından üç adım atlamada (triple jump) kazanılmıştır."
      },
      {
        id: "sp159",
        difficulty: "hard",
        question: "Erkekler tek kategorisinde en çok Wimbledon şampiyonluğu kazanan tenisçi kimdir?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
        correctIndex: 1,
        explanation: "Roger Federer, 8 kez (2003, 2004, 2005, 2006, 2007, 2009, 2012, 2017) Wimbledon Açık erkekler tekler şampiyonu olarak bu turnuvada en çok kupa kaldıran erkek tenisçidir."
      },
      {
        id: "sp160",
        difficulty: "hard",
        question: "Modern boks ringinin standart şekli nedir?",
        options: ["Daire", "Üçgen", "Kare", "Altıgen"],
        correctIndex: 2,
        explanation: "Boks ringi, adına 'ring' (halka) denmesine rağmen kare şeklindedir; uluslararası standartta bir kenarı 6,1 metre civarındadır."
      },
      {
        id: "sp161",
        difficulty: "easy",
        question: "Futbolda bir maçın normal süresi kaç dakikadır?",
        options: ["80 dakika", "90 dakika", "100 dakika", "120 dakika"],
        correctIndex: 1,
        explanation: "FIFA kurallarına göre futbolda normal oyun süresi, her biri 45 dakikalık iki devreden oluşan toplam 90 dakikadır. Beraberlik ve eleme aşamalarında ek süreler (2 × 15 dakika) ve penaltı atışları uygulanabilir."
      },
      {
        id: "sp162",
        difficulty: "easy",
        question: "Yaz Olimpiyat Oyunları kaç yılda bir düzenlenir?",
        options: ["2 yılda bir", "3 yılda bir", "4 yılda bir", "5 yılda bir"],
        correctIndex: 2,
        explanation: "Modern Olimpiyat Oyunları, 1896'dan bu yana dört yılda bir düzenlenmekte olup bu süre 'Olimpiyat' olarak adlandırılır. Kış Olimpiyatları da ayrıca dört yılda bir yapılır; ancak Yaz ve Kış Olimpiyatları birbirinden iki yıl arayla dönüşümlü gerçekleşir."
      },
      {
        id: "sp163",
        difficulty: "medium",
        question: "NBA hangi sporun en prestijli profesyonel ligi olarak bilinir?",
        options: ["Amerikan Futbolu", "Beyzbol", "Basketbol", "Buz Hokeyi"],
        correctIndex: 2,
        explanation: "NBA (National Basketball Association), 1946'da kurulan ve 30 takımdan oluşan Kuzey Amerika profesyonel basketbol ligidir. Michael Jordan, LeBron James, Kobe Bryant ve Magic Johnson gibi efsaneleri yetiştirmiştir."
      },
      {
        id: "sp164",
        difficulty: "medium",
        question: "Teniste 'Grand Slam' başlığı hangi dört turnuvanın tamamını kapsar?",
        options: ["Wimbledon, US Open, Roland Garros, Avustralya Açık", "Wimbledon, US Open, İtalya Açık, Fransa Açık", "Wimbledon, US Open, Kanada Açık, Japonya Açık", "Wimbledon, Davis Cup, Roland Garros, Avustralya Açık"],
        correctIndex: 0,
        explanation: "Teniste Grand Slam; Avustralya Açık (sert kort), Roland Garros (kil kort), Wimbledon (çim kort) ve US Open (sert kort) turnuvalarından oluşur. Bir oyuncu tüm bu dört turnuvayı aynı takvim yılında kazanırsa 'Takvim Grand Slam'ı' başarmış olur."
      },
      {
        id: "sp165",
        difficulty: "medium",
        question: "FIFA Dünya Kupası'nı en fazla kazanan ülke hangisidir?",
        options: ["Almanya, 4 kez", "Arjantin, 3 kez", "İtalya, 4 kez", "Brezilya, 5 kez"],
        correctIndex: 3,
        explanation: "Brezilya, 1958, 1962, 1970, 1994 ve 2002 yıllarında olmak üzere rekor 5 FIFA Dünya Kupası şampiyonluğuyla en başarılı ülkedir. 4 şampiyonlukla Almanya ve İtalya ikinci sıradadır."
      },
      {
        id: "sp166",
        difficulty: "medium",
        question: "Hangi Türk güreşçi iki olimpiyat altın madalyasıyla 'Kâinatın Güreşçisi' unvanını almıştır?",
        options: ["Hamza Yerlikaya", "Rıza Kayaalp", "Yaşar Doğu", "Süleyman Atlı"],
        correctIndex: 0,
        explanation: "Hamza Yerlikaya, 1996 Atlanta ve 2000 Sidney Olimpiyat Oyunları'nda serbest güreşte altın madalya kazanarak iki kez olimpik şampiyon olan efsanevi Türk güreşçidir. Birçok Dünya ve Avrupa şampiyonluğunu da bünyesinde barındıran Yerlikaya 'Kâinatın Güreşçisi' unvanıyla anılmaktadır."
      },
      {
        id: "sp167",
        difficulty: "hard",
        question: "Formula 1 tarihinde en fazla Dünya Şampiyonluğu kazanan pilot kimdir ve kaç kez kazanmıştır?",
        options: ["Ayrton Senna, 3 kez", "Michael Schumacher, 7 kez", "Lewis Hamilton, 7 kez", "Hem Schumacher hem Hamilton, 7'şer kez"],
        correctIndex: 3,
        explanation: "Michael Schumacher (1994, 1995, 2000-2004) ve Lewis Hamilton (2008, 2014-2015, 2017-2020) Formula 1 tarihinin en çok şampiyon olan pilotlarıdır; ikisi de 7'şer şampiyonlukla bu rekoru paylaşmaktadır."
      },
      {
        id: "sp168",
        difficulty: "hard",
        question: "Judo'da siyah kuşak kendi içinde 'dan' derecelerine ayrılır; teorik maksimum dan derecesi kaçtır?",
        options: ["5. Dan", "7. Dan", "9. Dan", "10. Dan"],
        correctIndex: 3,
        explanation: "Judo'da siyah kuşak kendi içinde 1'den 10'a kadar dan derecerine ayrılır; 10. Dan teorik üst sınırdır. Pratikte 9. Dan çok nadir, 10. Dan ise yalnızca birkaç kişiye fahri olarak verilmiştir. Judo'nun kurucusu Jigoro Kano 10. Dan sahibidir."
      },
      {
        id: "sp169",
        difficulty: "hard",
        question: "1936 Berlin Olimpiyat Oyunları'nda dört altın madalya kazanan Afrikalı-Amerikalı atlet kimdir?",
        options: ["Jesse Owens", "Carl Lewis", "Usain Bolt", "Jim Thorpe"],
        correctIndex: 0,
        explanation: "Jesse Owens, Nazi Almanyası'nın ırkçı üstünlük propagandasına rağmen 1936 Berlin Olimpiyat Oyunları'nda 100m, 200m, uzun atlama ve 4×100m bayrak yarışında dört altın madalya kazanan efsanevi atletizm sporcusudur."
      },
      {
        id: "sp170",
        difficulty: "hard",
        question: "ICC Kriket Dünya Kupası'nı en fazla kazanan ülke hangisidir?",
        options: ["Hindistan", "Avustralya", "Pakistan", "Batı Hint Adaları"],
        correctIndex: 1,
        explanation: "Avustralya, ICC Kriket Dünya Kupası'nı 1987, 1999, 2003, 2007, 2015 ve 2023 yıllarında olmak üzere rekor 6 kez kazanmıştır. Batı Hint Adaları ve Hindistan ikişer kez şampiyon olmuştur."
      },
      {
        id: "sp171",
        difficulty: "easy",
        question: "FIFA Dünya Kupası kaç yılda bir düzenlenir?",
        options: ["2 yılda bir", "3 yılda bir", "4 yılda bir", "5 yılda bir"],
        correctIndex: 2,
        explanation: "FIFA Dünya Kupası, 1930'dan bu yana (2. Dünya Savaşı nedeniyle 1942 ve 1946 hariç) dört yılda bir düzenlenmektedir. 2026'dan itibaren 48 takımla oynanan turnuva biçimine geçilmiştir."
      },
      {
        id: "sp172",
        difficulty: "easy",
        question: "Tenis'te 'Love' ne anlama gelir?",
        options: ["40-40 beraberliği", "Avantaj puanı", "Sıfır (0) puan", "Servis hatası"],
        correctIndex: 2,
        explanation: "Tenis'te 'love', sıfır puan anlamına gelir. Sayım 15, 30, 40 ve oyun (game) şeklinde ilerler. 40-40 beraberliğine 'deuce', sonraki kazanılan puana ise 'advantage' (avantaj) denir."
      },
      {
        id: "sp173",
        difficulty: "easy",
        question: "Olimpiyat Oyunları'nın sembolü olan beş halkada hangi renkler kullanılmaz?",
        options: ["Mavi", "Sarı", "Turuncu", "Siyah"],
        correctIndex: 2,
        explanation: "Olimpiyat halkalarının renkleri mavi, sarı, siyah, yeşil ve kırmızıdır. Turuncu, olimpiyat sembolünde yer almaz. Bu beş renk dünyanın beş kıtasını temsil eder."
      },
      {
        id: "sp174",
        difficulty: "medium",
        question: "NBA'de 'triple-double' ne anlama gelir?",
        options: ["Bir oyuncunun üç maçta üst üste 50+ sayı atması", "Bir oyuncunun tek maçta üç istatistik kategorisinde 10 veya üzeri değere ulaşması", "Üç potaya art arda 3'lük atılması", "Maçta üç kez teknik faul yenilmesi"],
        correctIndex: 1,
        explanation: "Triple-double, bir oyuncunun tek maçta sayı, ribaund ve asist kategorilerinin (bazen blok veya top çalma) her birinde 10 veya üzeri değer elde etmesidir. Russell Westbrook, sezonluk triple-double ortalamasını gerçekleştiren en efsanevi oyunculardan biridir."
      },
      {
        id: "sp175",
        difficulty: "medium",
        question: "Türkiye Süper Ligi'nde en fazla şampiyonluk kazanan takım hangisidir?",
        options: ["Fenerbahçe", "Beşiktaş", "Trabzonspor", "Galatasaray"],
        correctIndex: 3,
        explanation: "Galatasaray, 2023-24 sezonuna kadar 24 şampiyonlukla Türk futbol tarihinin en başarılı takımıdır. Fenerbahçe 19, Beşiktaş 16, Trabzonspor ise 8 şampiyonlukla öne çıkan diğer büyük kulüplerdir."
      },
      {
        id: "sp176",
        difficulty: "easy",
        question: "Yüzme sporunda olimpik havuzun standart uzunluğu kaç metredir?",
        options: ["25 metre", "50 metre", "75 metre", "100 metre"],
        correctIndex: 1,
        explanation: "Olimpik standart yüzme havuzu 50 metre uzunluğunda, 25 metre genişliğinde ve en az 2 metre derinliğinde olup 10 kulvara sahiptir. Kısa havuzlar ise 25 metre uzunluğundadır."
      },
      {
        id: "sp177",
        difficulty: "medium",
        question: "Wimbledon tenis turnuvası hangi zemin türünde oynanır?",
        options: ["Kırmızı toprak (kil)", "Sert zemin", "Çim", "Halı"],
        correctIndex: 2,
        explanation: "1877'den bu yana Londra'nın Wimbledon semtinde düzenlenen Grand Slam turnuvası, geleneksel çim kort üzerinde oynanır. Bu özelliğiyle diğer Grand Slam turnuvalarından (Roland Garros: kil; US Open ve Avustralya Açık: sert zemin) ayrılır."
      },
      {
        id: "sp178",
        difficulty: "easy",
        question: "Standart bir futbol maçı kaç dakika sürer?",
        options: ["80 dakika", "90 dakika", "100 dakika", "120 dakika"],
        correctIndex: 1,
        explanation: "Standart bir futbol maçı, iki yarısı 45'er dakika olan toplam 90 dakikalık süreyi kapsar. İkramiye süre (stopaj) hakeme bağlıdır; beraberlik ya da eleme aşamasındaki maçlarda 2×15 dakikalık uzatma eklenir."
      },
      {
        id: "sp179",
        difficulty: "hard",
        question: "Formula 1'de 'DRS' (Drag Reduction System) nedir?",
        options: ["Fren sistemi yardımı", "Arka kanada açılan kanat; direnci azaltarak hızlanmayı kolaylaştırır", "Pit stop sırasında kullanılan otomatik lastik değiştirme sistemi", "Yakıt verimliliğini artıran motor sistemi"],
        correctIndex: 1,
        explanation: "DRS (Sürükleme Azaltma Sistemi), F1 araçlarının arka kanat düzlemini belirli koşullarda açmasına olanak tanır. Bu sayede hava direnci azalır ve düzlüklerde 10-12 km/s ek hız kazanılabilir. Yalnızca onaylı DRS bölgelerinde ve öndeki araçla belirli bir fark dahilinde etkinleştirilebilir."
      },
      {
        id: "sp180",
        difficulty: "medium",
        question: "Tenis'te Grand Slam unvanı kazanmak ne anlama gelir?",
        options: ["Dört farklı yüzeyde turnuva kazanmak", "Bir takvim yılında dört büyük tenis turnuvasını (Avustralya Açık, Roland Garros, Wimbledon, US Open) kazanmak", "Bir yılda en az 12 turnuva kazanmak", "Sıralamada 1 numara olmak"],
        correctIndex: 1,
        explanation: "Bir takvim yılında dört Grand Slam turnuvasının tamamını kazanmak 'Calendar Grand Slam' olarak adlandırılır ve son derece nadirdir. Bu başarıyı gerçekleştiren isimlerin başında Steffi Graf (1988) gelir."
      },
      {
        id: "sp181",
        difficulty: "easy",
        question: "Voleybolda bir sette kaç sayıyla galibiyet kazanılır?",
        options: ["21", "25", "30", "15"],
        correctIndex: 1,
        explanation: "Voleybolda bir seti kazanmak için 25 sayıya ulaşmak (ve en az 2 sayı farkla önde olmak) gerekir. 24-24 beraberliğinde maç, biri 2 sayı fark yapana dek devam eder. Beşinci set (tiebreak) ise 15 sayı üzerinden oynanır."
      },
      {
        id: "sp182",
        difficulty: "medium",
        question: "Atletizmde 4×100 metre bayrak yarışında değiştirme işlemi nerede yapılmalıdır?",
        options: ["Koşucunun istediği her an", "20 metrelik değiştirme bölgesi içinde", "Sadece koşucular yan yana geldiğinde", "Finişten önce herhangi bir noktada"],
        correctIndex: 1,
        explanation: "4×100 m bayrak yarışında bayrak, her düzlüğün sonunda belirlenen 20 metrelik değiştirme bölgesi (exchange zone) içinde bir sonraki koşucuya teslim edilmelidir. Bu bölge dışında yapılan aktarım diskualifikasyona neden olur."
      },
      {
        id: "sp183",
        difficulty: "easy",
        question: "Basketbolda üç sayı çizgisi dışından atılan potanın değeri kaçtır?",
        options: ["1 sayı", "2 sayı", "3 sayı", "4 sayı"],
        correctIndex: 2,
        explanation: "NBA'de üç sayı çizgisinin dışından atılan ve potaya giren atışlar 3 sayı değerindedir. Serbest atışlar 1 sayı, çizgi içinden yapılan atışlar ise 2 sayı değerindedir."
      },
      {
        id: "sp184",
        difficulty: "hard",
        question: "Lance Armstrong'un 7 Tour de France şampiyonluğu neden iptal edilmiştir?",
        options: ["Yarış sırasındaki kaza nedeniyle diskalifiye", "Doping kullanımı (EPO ve kan dopingi) nedeniyle USADA tarafından ömür boyu men", "Katılım belgeleri yanlış düzenlendiği için", "Ekip değiştirmesi nedeniyle uyumsuzluk"],
        correctIndex: 1,
        explanation: "Lance Armstrong, USADA soruşturması sonucunda 2012'de ömür boyu spor yasağıyla karşılaşmıştır. 1998 sonrasına ait tüm yarış sonuçları iptal edilmiş; 7 Tour de France şampiyonluğu ise doping kullanımı gerekçesiyle silinmiştir."
      },
      {
        id: "sp185",
        difficulty: "medium",
        question: "Kriket sporunda 'century' ne anlama gelir?",
        options: ["Bir maçta 100 koşu (run) yapmak", "Bir maçta 100 isabet sağlamak", "Bir sezonda 100 maç oynamak", "100 yıllık kriket şampiyonası"],
        correctIndex: 0,
        explanation: "Kriket'te 'century' (yüzlük), bir vurucu oyuncunun tek bir vuruş sırası (innings) içinde 100 ya da daha fazla koşu yapmasıdır. Kriket tarihinin en fazla century kaydı Sachin Tendulkar'a aittir (100 uluslararası century)."
      },
      {
        id: "sp186",
        difficulty: "hard",
        question: "Olimpik güreşte 'teknik üstünlükle galibiyet' ne zaman ilan edilir?",
        options: ["Güreşçi 5 sayı fark açtığında", "Güreşçi 8 sayı fark açtığında", "Güreşçi 10 sayı fark açtığında", "Güreşçi 12 sayı fark açtığında"],
        correctIndex: 2,
        explanation: "Olimpik ve uluslararası güreşte teknik üstünlükle (teknik falla) galibiyet, bir sporcunun rakibine karşı 10 ya da daha fazla sayı fark açması durumunda ilan edilir. Bu kural maçı erken sonlandırır."
      },
      {
        id: "sp187",
        difficulty: "easy",
        question: "Hangisi bir Amerikan sporu değildir?",
        options: ["Beysbol", "Amerikan futbolu", "Kriket", "Basketbol"],
        correctIndex: 2,
        explanation: "Kriket, kökleri 16. yüzyıl İngiltere'sine uzanan bir spordur ve Güney Asya, Avustralya ve Karayipler'de büyük popülariteye sahiptir. Beysbol, Amerikan futbolu ve basketbol ise kökleri ABD'ye dayanan sporlardır."
      },
      {
        id: "sp188",
        difficulty: "easy",
        question: "İlk modern Olimpiyat Oyunları nerede ve hangi yılda düzenlenmiştir?",
        options: ["Paris, 1896", "Atina, 1896", "Londra, 1908", "Stockholm, 1912"],
        correctIndex: 1,
        explanation: "Pierre de Coubertin'in öncülüğüyle modern Olimpiyat Oyunları, eski Olimpiyat geleneğinin yeniden canlandırılması amacıyla 1896'da Atina'da düzenlenmiştir. 14 ülkeden yaklaşık 241 erkek sporcu 43 farklı dalda mücadele etmiştir."
      },
      {
        id: "sp189",
        difficulty: "hard",
        question: "Halter sporunda 'snatch' ve 'clean & jerk' hareketlerinin farkı nedir?",
        options: ["Snatch barı alnın üstüne taşır, clean & jerk omuzlara alır", "Snatch tek hamlede barı başın üstüne kaldırır; clean & jerk iki hamlede önce omuzlara sonra başın üstüne kaldırır", "Snatch daha ağır bar kullanır", "Snatch yalnızca ayaklar geniş açıkken yapılır"],
        correctIndex: 1,
        explanation: "Halter sporunda snatch (kopma), barın tek kesintisiz hareketle yerden başın üstüne kaldırılmasıdır. Clean & jerk (silkme) ise iki aşamalıdır: ilk hamlede bar omuz seviyesine (clean), ikinci hamlede ise başın üstüne (jerk) kaldırılır."
      },
      {
        id: "sp190",
        difficulty: "medium",
        question: "Olimpiyat güreşinde kaç farklı stil kullanılır?",
        options: ["1 (serbest)", "2 (serbest ve grekoromen)", "3 (serbest, grekoromen, judo)", "4 (serbest, grekoromen, sambo, judo)"],
        correctIndex: 1,
        explanation: "Olimpik güreş iki stilde icra edilir: serbest güreş (tüm vücut teknikleri kullanılabilir) ve grekoromen güreş (bel altı tutmalar ve bacak saldırıları yasaktır). Kadınlar yalnızca serbest güreşte olimpiyatlarda yarışır."
      }
    ]
  },
  {
    id: "cinema",
    name: "Sinema",
    icon: "film",
    color: "#8b5cf6",
    gradient: ["#8b5cf6", "#7c3aed"],
    image: require("../assets/images/category_cinema.png"),
    questions: [
      {
        id: "cin1",
        difficulty: "easy",
        question: "2024 itibarıyla tüm zamanların en yüksek gişe hasılatına sahip film hangisidir?",
        options: ["Avengers: Endgame", "Titanik", "Avatar (2009)", "Top Gun: Maverick"],
        correctIndex: 2,
        explanation: "Avatar (2009), yeniden gösterimlerle birlikte yaklaşık 2.92 milyar dolar hasılat yaparak tüm zamanların en yüksek gişeli filmi konumundadır. Avengers: Endgame bu rekoru kısa süreliğine elde etmişti."
      },
      {
        id: "cin2",
        difficulty: "easy",
        question: "Cannes Film Festivali'nin en prestijli ödülünün adı nedir?",
        options: ["Altın Aslan", "Altın Ayı", "Altın Palmiye", "Altın Küre"],
        correctIndex: 2,
        explanation: "Altın Palmiye (Palme d'Or), yılda bir düzenlenen Cannes Film Festivali'nin en yüksek ödülüdür. Altın Aslan Venedik'e, Altın Ayı ise Berlin Film Festivali'ne aittir."
      },
      {
        id: "cin3",
        difficulty: "easy",
        question: "'Vatandaş Kane' filmini yöneten sinemacı kimdir?",
        options: ["John Ford", "Alfred Hitchcock", "Billy Wilder", "Orson Welles"],
        correctIndex: 3,
        explanation: "Orson Welles, 1941 yapımı Citizen Kane'i 25 yaşında yönetmiştir. Pek çok sinemacı ve eleştirmen tarafından tüm zamanların en büyük filmi olarak gösterilen bu yapım, anlatı teknikleri açısından devrimci kabul edilir."
      },
      {
        id: "cin4",
        difficulty: "easy",
        question: "James Bond karakterini ilk kez beyaz perdede canlandıran aktör kimdir?",
        options: ["Roger Moore", "George Lazenby", "Sean Connery", "Timothy Dalton"],
        correctIndex: 2,
        explanation: "Sean Connery, 1962 yapımı Dr. No filmiyle James Bond rolünü ilk kez üstlendi. Connery, toplam 6 resmi Bond filminde rol aldı."
      },
      {
        id: "cin5",
        difficulty: "easy",
        question: "Pixar'ın ilk tam uzun metrajlı bilgisayar animasyon filmi hangisidir?",
        options: ["Finding Nemo", "A Bug's Life", "Monsters, Inc.", "Toy Story"],
        correctIndex: 3,
        explanation: "Toy Story (1995), dünyanın ilk tam uzun metrajlı bilgisayar animasyon filmidir. John Lasseter yönetiminde çekilen film, Pixar ve Disney iş birliğinin kilometre taşıdır."
      },
      {
        id: "cin6",
        difficulty: "easy",
        question: "Nuri Bilge Ceylan 2014 Cannes Film Festivali'nde hangi filmiyle Altın Palmiye kazandı?",
        options: ["Uzak", "Bir Zamanlar Anadolu'da", "Üç Maymun", "Kış Uykusu"],
        correctIndex: 3,
        explanation: "Nuri Bilge Ceylan, 2014'te 'Kış Uykusu' filmiyle Altın Palmiye ödülü kazanan ilk Türk yönetmeni oldu. Çehov'un kısa hikâyelerinden ilham alan film, Kapadokya'da çekilmiştir."
      },
      {
        id: "cin7",
        difficulty: "easy",
        question: "The Dark Knight'ta Joker karakterini canlandırarak ölümünden sonra Oscar kazanan aktör kimdir?",
        options: ["Jack Nicholson", "Jared Leto", "Joaquin Phoenix", "Heath Ledger"],
        correctIndex: 3,
        explanation: "Heath Ledger, Christopher Nolan'ın The Dark Knight (2008) filmindeki Joker performansı için 2009 Oscar'ında En İyi Yardımcı Erkek Oyuncu ödülünü kazandı. Ledger, filmin çıkışından önce hayatını kaybetmişti."
      },
      {
        id: "cin8",
        difficulty: "easy",
        question: "Harry Potter film serisi kaç filmden oluşmaktadır?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Harry Potter serisi, 2001-2011 yılları arasında 8 filmden oluşur. J.K. Rowling'in 7 kitaplık serisinin son kitabı 'Ölüm Yadigarları', iki ayrı film olarak çekildi."
      },
      {
        id: "cin9",
        difficulty: "easy",
        question: "Ingmar Bergman hangi ülkenin sinemacısıdır?",
        options: ["Danimarka", "Norveç", "Finlandiya", "İsveç"],
        correctIndex: 3,
        explanation: "Ingmar Bergman, ölüm, yalnızlık ve Tanrı'nın sessizliği gibi temaları işleyen İsveçli usta yönetmendir. 'Yedinci Mühür', 'Vahşi Çilek Tarlası' ve 'Persona' en ünlü yapıtlarıdır."
      },
      {
        id: "cin10",
        difficulty: "easy",
        question: "Dünyada yılda en fazla film üreten ülke hangisidir?",
        options: ["Amerika Birleşik Devletleri", "Çin", "Japonya", "Hindistan"],
        correctIndex: 3,
        explanation: "Hindistan, Bollywood (Bombay/Mumbai), Tollywood ve diğer bölgesel endüstrilerle birlikte yılda yaklaşık 1.800-2.000 film üreterek Hollywood'u geride bırakmaktadır."
      },
      {
        id: "cin11",
        difficulty: "easy",
        question: "Hangi yıl ilk Cannes Film Festivali düzenlenmiştir?",
        options: ["1939", "1946", "1952", "1960"],
        correctIndex: 1,
        explanation: "Cannes Film Festivali, II. Dünya Savaşı nedeniyle ertelenmesinin ardından ilk kez 1946 yılında Fransa'nın Cannes şehrinde düzenlenmiştir. En prestijli ödülü Altın Palmiye'dir."
      },
      {
        id: "cin12",
        difficulty: "easy",
        question: "Hangi aktör en fazla Oscar kazanmıştır?",
        options: ["Daniel Day-Lewis", "Jack Nicholson", "Meryl Streep", "Katharine Hepburn"],
        correctIndex: 3,
        explanation: "Katharine Hepburn, dört En İyi Kadın Oyuncu Oscar'ıyla (1933, 1967, 1968, 1981) tarihte en fazla oyunculuk Oscar'ı kazanan kişidir. Erkek oyuncular arasında Daniel Day-Lewis 3 Oscar ile öne çıkar."
      },
      {
        id: "cin13",
        difficulty: "easy",
        question: "'Here's looking at you, kid' repliğiyle hangi film bilinir?",
        options: ["Schindler'in Listesi", "Forrest Gump", "Casablanca", "Gone with the Wind"],
        correctIndex: 2,
        explanation: "Casablanca (1942), Humphrey Bogart ve Ingrid Bergman'ın başrollerini paylaştığı klasik Amerikan filmidir. 'Here's looking at you, kid' (Seni izliyorum, canım) repliği, sinema tarihinin en ikonik sözleri arasında yer alır."
      },
      {
        id: "cin14",
        difficulty: "easy",
        question: "Hangi animasyon stüdyosu Toy Story'yi yapmıştır?",
        options: ["DreamWorks", "Warner Bros.", "Pixar", "Blue Sky"],
        correctIndex: 2,
        explanation: "Toy Story (1995), Pixar Animation Studios tarafından yapılan ve tamamen bilgisayar animasyonuyla oluşturulan ilk uzun metrajlı filmdir. John Lasseter tarafından yönetilmiştir."
      },
      {
        id: "cin15",
        difficulty: "easy",
        question: "Christopher Nolan'ın zihin oyunlarıyla bilinen filmi hangisidir?",
        options: ["Interstellar", "The Dark Knight", "Inception", "Dunkirk"],
        correctIndex: 2,
        explanation: "Inception (Başlangıç, 2010), Christopher Nolan tarafından yazılıp yönetilen ve rüya içinde rüya konseptini işleyen, zihin büken bir bilim kurgu filmidir. Leonardo DiCaprio başrolde yer almaktadır."
      },
      {
        id: "cin16",
        difficulty: "easy",
        question: "Hangi aktör Batman rolünü en uzun süre oynamıştır?",
        options: ["Michael Keaton", "Christian Bale", "Ben Affleck", "Val Kilmer"],
        correctIndex: 1,
        explanation: "Christian Bale, Christopher Nolan'ın Dark Knight üçlemesinde (2005, 2008, 2012) üç film boyunca Batman rolünü oynamış ve bu karaktere yeni bir derinlik katmıştır."
      },
      {
        id: "cin17",
        difficulty: "easy",
        question: "İlk renkli Oscar kazanan film hangisidir?",
        options: ["Rüzgar Gibi Geçti", "Büyük Umut", "Sihirbaz Oz", "Cleopatra"],
        correctIndex: 0,
        explanation: "Rüzgar Gibi Geçti (Gone with the Wind, 1939), 8 Oscar kazanmış ve renkli filmler arasında büyük bir prestij kazanmıştır. Ayrıca enflasyona göre ayarlanmış en yüksek hasılatlı film olma özelliğini korumaktadır."
      },
      {
        id: "cin18",
        difficulty: "easy",
        question: "Godfather (Baba) filminde Don Corleone rolünü kim oynamıştır?",
        options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Jack Nicholson"],
        correctIndex: 2,
        explanation: "Marlon Brando, Francis Ford Coppola'nın 1972 yapımı 'The Godfather' filminde Don Vito Corleone'yi canlandırmıştır. Bu rol, Oscar dahil pek çok ödül kazanmış ve sinema tarihinin en ünlü karakterlerinden biri olmuştur."
      },
      {
        id: "cin19",
        difficulty: "easy",
        question: "Hangi Türk filmi uluslararası arenada en büyük ticari başarıyı elde etmiştir?",
        options: ["Babam ve Oğlum", "Kurtlar Vadisi Irak", "Diriliş Ertuğrul", "Recep İvedik"],
        correctIndex: 1,
        explanation: "Kurtlar Vadisi Irak (2006), gişede 30 milyon doların üzerinde hasılat yaparak yabancı ülkelerde en çok izlenen Türk filmi unvanını kazanmıştır. Özellikle Almanya ve Ortadoğu'da büyük ilgi gördü."
      },
      {
        id: "cin20",
        difficulty: "easy",
        question: "Hangi yönetmen 'Şüpheli 007' James Bond serisiyle özdeşleşmiştir?",
        options: ["Terrence Young", "Albert 'Cubby' Broccoli", "Lewis Gilbert", "John Glen"],
        correctIndex: 0,
        explanation: "Terence Young, 1962'deki ilk James Bond filmi 'Dr. No'yu, ardından 'Rusya'dan Sevgilerle' ve 'Thunderball'u yöneterek serinin tonunu ve tarzını belirleyen yönetmen olmuştur."
      },
      {
        id: "cin21",
        difficulty: "easy",
        question: "Avatar filminin geçtiği gezegen ve bölge hangisidir?",
        options: ["Naboo - Theed", "Pandora - Hometree", "Endor - Moon", "Tatooine - Mos Eisley"],
        correctIndex: 1,
        explanation: "James Cameron'ın 2009 yapımı Avatar filmi, Alfa Centauri güneş sistemindeki Pandora adlı Ay'da geçmektedir. Na'vi halkının yurdu olan devasa Hometree, filmin merkezi mekânıdır."
      },
      {
        id: "cin22",
        difficulty: "easy",
        question: "Hangi film 'Beklenti ile ilgili hayaller' temasıyla Oscar kazanmıştır?",
        options: ["La La Land", "The Artist", "Birdman", "Moonlight"],
        correctIndex: 3,
        explanation: "Moonlight (2016), Damien Chazelle'in La La Land'ına karşı En İyi Film Oscar'ını kazanarak sinema tarihinin en dramatik Oscar törenlerinden birine sahne olmuştur. Barry Jenkins'in yönettiği film büyük beğeni toplamıştır."
      },
      {
        id: "cin23",
        difficulty: "easy",
        question: "Hangi sinemacı 'Sansürsüz' (Pulp Fiction) filmini yönetmiştir?",
        options: ["David Lynch", "Joel Coen", "Quentin Tarantino", "Martin Scorsese"],
        correctIndex: 2,
        explanation: "Pulp Fiction (1994), Quentin Tarantino tarafından yazılıp yönetilmiş, doğrusal olmayan anlatısı ve keskin diyaloglarıyla sinema tarihinin en etkili filmlerinden biri kabul edilmektedir."
      },
      {
        id: "cin24",
        difficulty: "easy",
        question: "Hangi Türk oyuncu 'Şahsiyet' dizisiyle uluslararası Emmy ödülü kazanmıştır?",
        options: ["Haluk Bilginer", "Şener Şen", "Tarık Akan", "Kadir İnanır"],
        correctIndex: 0,
        explanation: "Haluk Bilginer, 2018 yılında 'Şahsiyet' dizisindeki performansıyla Uluslararası Emmy Ödülleri'nde En İyi Erkek Oyuncu ödülünü kazanmıştır. Bu ödül, Türk bir oyuncunun bu alanda kazandığı ilk Emmy'dir."
      },
      {
        id: "cin25",
        difficulty: "easy",
        question: "Hangi yıl ilk sesli film (talkie) Hollywood'da gösterime girmiştir?",
        options: ["1922", "1927", "1932", "1935"],
        correctIndex: 1,
        explanation: "İlk sesli (talkie) Hollywood filmi The Jazz Singer, 1927 yılında vizyona girmiştir. Bu tarihten itibaren sessiz film dönemi hızla sona ermiş ve sesli sinema yaygınlaşmıştır."
      },
      {
        id: "cin26",
        difficulty: "easy",
        question: "Hangi aktör 'The Dark Knight' filminde Joker'i oynamış ve Oscar kazanmıştır?",
        options: ["Jared Leto", "Joaquin Phoenix", "Heath Ledger", "Jack Nicholson"],
        correctIndex: 2,
        explanation: "Heath Ledger, Christopher Nolan'ın 2008 yapımı 'The Dark Knight' filmindeki Joker performansı nedeniyle ölümünden sonra En İyi Yardımcı Erkek Oyuncu Oscar'ına layık görülmüştür."
      },
      {
        id: "cin27",
        difficulty: "easy",
        question: "Hangi animasyon filmi 'Hakuna Matata' şarkısıyla tanınır?",
        options: ["Tarzan", "Jungle Book", "The Lion King", "Aladdin"],
        correctIndex: 2,
        explanation: "Hakuna Matata, Disney'in 1994 yapımı Aslan Kral (The Lion King) animasyon filmindeki unutulmaz şarkıdır. Elton John'un müziklerine Tim Rice'ın sözlerini yazdığı film, büyük bir kültürel fenomen olmuştur."
      },
      {
        id: "cin28",
        difficulty: "easy",
        question: "Hangi film aksiyon türünde en yüksek box office hasılatına sahiptir?",
        options: ["Mission: Impossible 7", "Top Gun: Maverick", "John Wick 4", "Spider-Man: No Way Home"],
        correctIndex: 3,
        explanation: "Spider-Man: No Way Home (2021), dünya genelinde yaklaşık 1,9 milyar dolar hasılat yaparak Marvel tarihinin en yüksek hasılatlı süper kahraman filmleri arasında yerini almıştır."
      },
      {
        id: "cin29",
        difficulty: "easy",
        question: "Yılmaz Güney'in Cannes Film Festivali Altın Palmiye ödülü kazandığı film hangisidir?",
        options: ["Sürü", "Yol", "Umut", "Arkadaş"],
        correctIndex: 1,
        explanation: "Yılmaz Güney, senaryosunu yazdığı ve Şerif Gören'in yönettiği 'Yol' (1982) filmiyle Cannes'da Altın Palmiye ödülünü kazanmıştır. Güney, filmi cezaevinden senaryo yazarak kontrol etmiştir."
      },
      {
        id: "cin30",
        difficulty: "easy",
        question: "Hangi film 'You shall not pass!' repliğiyle ünlüdür?",
        options: ["Narnia Günlükleri", "Yüzüklerin Efendisi: Yüzük Kardeşliği", "Harry Potter ve Felsefe Taşı", "Hobbit"],
        correctIndex: 1,
        explanation: "'You shall not pass!' (Geçemezsin!), Peter Jackson'ın 2001 yapımı 'Yüzüklerin Efendisi: Yüzük Kardeşliği' filminde Gandalf'ın Balrog'a söylediği ve sinema tarihinin en ikonik repliklerinden biri haline gelen sözdür."
      },
      {
        id: "cin31",
        difficulty: "easy",
        question: "Hangi film 2023 yılında en yüksek gişe hasılatını elde etmiştir?",
        options: ["Oppenheimer", "Indiana Jones 5", "Mission Impossible 7", "Barbie"],
        correctIndex: 3,
        explanation: "Barbie (2023), Greta Gerwig'in yönettiği ve Margot Robbie ile Ryan Gosling'in başrollerini paylaştığı film, 1,4 milyar doların üzerindeki hasılatıyla 2023'ün gişe rekortmeni oldu."
      },
      {
        id: "cin32",
        difficulty: "easy",
        question: "Sinema tarihini başlatan Lumière Kardeşler hangi ülkelidir?",
        options: ["Amerikan", "Alman", "Fransız", "İtalyan"],
        correctIndex: 2,
        explanation: "Auguste ve Louis Lumière, 28 Aralık 1895'te Paris'te ilk halka açık film gösterimini gerçekleştiren Fransız mucitlerdir. Geliştirdikleri Cinématographe cihazı ile modern sinemanın temeli atılmıştır."
      },
      {
        id: "cin33",
        difficulty: "easy",
        question: "Tarihte En İyi Film Oscar'ı dahil en fazla Oscar ödülü kazanan filmler hangileridir?",
        options: ["Schindler'in Listesi (7 Oscar)", "Ben-Hur, Titanic ve Yüzüklerin Efendisi: Kralın Dönüşü (11'er Oscar)", "Avatar (10 Oscar)", "Godfather (9 Oscar)"],
        correctIndex: 1,
        explanation: "Ben-Hur (1959), Titanic (1997) ve Yüzüklerin Efendisi: Kralın Dönüşü (2003) Oscar tarihinin en başarılı filmleridir; her biri 11 ödül kazanmıştır. Kralın Dönüşü ayrıca aday olduğu her kategoride ödülü almayı başarmıştır."
      },
      {
        id: "cin34",
        difficulty: "easy",
        question: "'E.T. Uzaylı' (E.T. the Extra-Terrestrial, 1982) filmini kim yönetmiştir?",
        options: ["George Lucas", "James Cameron", "Steven Spielberg", "Martin Scorsese"],
        correctIndex: 2,
        explanation: "Steven Spielberg, 1982'de çektiği E.T. the Extra-Terrestrial filmini yönetmiştir. Küçük bir çocuk ile kayıp bir uzaylının dostluğunu anlatan film, 1980'lerin gişe rekortmeni olmuş ve Spielberg'ün kariyerinin simgelerinden biri hâline gelmiştir."
      },
      {
        id: "cin35",
        difficulty: "easy",
        question: "Akira Kurosawa hangi ülkenin efsanevi sinemacısıdır?",
        options: ["Çin", "Japonya", "Güney Kore", "Vietnam"],
        correctIndex: 1,
        explanation: "Akira Kurosawa (1910–1998), Yedi Samuray, Rashomon ve Ran gibi başyapıtlarıyla tanınan Japon yönetmendir. Batılı filmleri derinden etkileyen üslubu ve anlatı teknikleriyle 'Doğu'nun Hitchcock'u' olarak nitelendirilen bir sinemacıdır."
      },
      {
        id: "cin36",
        difficulty: "easy",
        question: "Marvel Sinematik Evreni'nin (MCU) ilk filmi hangisidir?",
        options: ["Captain America", "Thor", "Iron Man", "The Incredible Hulk"],
        correctIndex: 2,
        explanation: "Iron Man (2008), Robert Downey Jr.'ın Tony Stark rolüyle hayat verdiği ve Marvel Sinematik Evreni'ni başlatan ilk filmdir. Bu filmle başlayan MCU serisi, sinema tarihinin en başarılı franchise'ı hâline gelmiştir."
      },
      {
        id: "cin37",
        difficulty: "easy",
        question: "'I'll be back' (Geri döneceğim) repliğiyle hangi film özdeşleşmiştir?",
        options: ["Rambo", "RoboCop", "The Terminator", "Predator"],
        correctIndex: 2,
        explanation: "'I'll be back', James Cameron'ın 1984 yapımı The Terminator (Terminatör) filminde Arnold Schwarzenegger'ın canlandırdığı T-800 karakterinin söylediği ikonik repliğidir. Bu cümle, sinema tarihinin en çok alıntılanan sözleri arasına girmiştir."
      },
      {
        id: "cin38",
        difficulty: "medium",
        question: "'Schindler'in Listesi' filmini kim yönetmiştir?",
        options: ["Roman Polanski", "Steven Spielberg", "Ridley Scott", "Francis Ford Coppola"],
        correctIndex: 1,
        explanation: "Schindler's List (1993), II. Dünya Savaşı'nda Yahudi işçileri kurtaran Oskar Schindler'in hikâyesini anlatan ve Steven Spielberg tarafından yönetilen bir yapımdır. 7 Oscar kazanan film, sinema tarihinin en etkili savaş filmlerinden biri sayılır."
      },
      {
        id: "cin39",
        difficulty: "medium",
        question: "Oscar ödüllerini düzenleyen organizasyonun adı nedir?",
        options: ["Hollywood Sinema Birliği", "BAFTA", "AMPAS (Amerikan Sinema Sanatları ve Bilimleri Akademisi)", "Cannes Film Komitesi"],
        correctIndex: 2,
        explanation: "Oscar Ödülleri'nin resmî adı 'Akademi Ödülleri'dir ve AMPAS (Academy of Motion Picture Arts and Sciences) tarafından düzenlenmektedir. 1929'dan bu yana her yıl verilen ödüller, sinemanın en prestijli takdirnamesi olarak kabul edilir."
      },
      {
        id: "cin40",
        difficulty: "medium",
        question: "Quentin Tarantino'nun yönettiği ilk uzun metrajlı film hangisidir?",
        options: ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown"],
        correctIndex: 2,
        explanation: "Reservoir Dogs (Rezervuar Köpekleri, 1992), Quentin Tarantino'nun ilk uzun metrajlı filmidir. Düşük bütçeyle çekilen bu banka soygunu filmi, Sundance Film Festivali'nde büyük beğeni toplayarak Tarantino'yu sinema dünyasına tanıttı."
      },
      {
        id: "cin41",
        difficulty: "medium",
        question: "James Bond serisi 2024 itibarıyla kaç resmi EON Productions filmi kapsamaktadır?",
        options: ["20", "22", "25", "28"],
        correctIndex: 2,
        explanation: "James Bond serisi, EON Productions bünyesinde çekilen 25 resmi filmden oluşur. Serinin en son filmi Daniel Craig'in son Bond filmi olan 'No Time to Die'dır (2021). Yeni Bond'un kim olacağı 2024 itibarıyla henüz açıklanmamıştır."
      },
      {
        id: "cin42",
        difficulty: "medium",
        question: "Stanley Kubrick'in en çok saygı gören uzay temalı filmi hangisidir?",
        options: ["A Clockwork Orange", "2001: A Space Odyssey", "Full Metal Jacket", "Barry Lyndon"],
        correctIndex: 1,
        explanation: "2001: A Space Odyssey (1968), Stanley Kubrick'in Arthur C. Clarke'ın romanından uyarladığı ve vizyoner görsel efektleriyle döneminin çok ötesinde kabul edilen başyapıtıdır. HAL 9000 adlı yapay zeka karakteri ve senfoniye eşlik eden uzay görüntüleri kült statüsüne ulaşmıştır."
      },
      {
        id: "cin43",
        difficulty: "medium",
        question: "'La La Land' (2016) filminin yönetmeni kimdir?",
        options: ["Christopher Nolan", "David Fincher", "Damien Chazelle", "Wes Anderson"],
        correctIndex: 2,
        explanation: "La La Land, Damien Chazelle tarafından yazılıp yönetilmiştir. Ryan Gosling ve Emma Stone'un başrollerini paylaştığı müzikal film, 6 Oscar kazanmış; En İyi Film Oscar'ı ise dramatik bir hatayla önce duyurulmuş, ardından Moonlight'a verildiği açıklanmıştır."
      },
      {
        id: "cin44",
        difficulty: "medium",
        question: "Federico Fellini hangi ülkenin sinemasında efsane hâline gelmiş yönetmendir?",
        options: ["Fransa", "İspanya", "İtalya", "Arjantin"],
        correctIndex: 2,
        explanation: "Federico Fellini (1920–1993), La Dolce Vita, 8½ ve Amarcord gibi başyapıtlarıyla İtalyan sinemasının simgesi hâline gelmiş bir yönetmendir. Öznel ve rüyamsı anlatısıyla dünya sinemasını derinden etkileyen Fellini, 4 Oscar ödülü kazanmıştır."
      },
      {
        id: "cin45",
        difficulty: "medium",
        question: "Bong Joon-ho'nun En İyi Film Oscar'ı kazanan filmi hangisidir?",
        options: ["Snowpiercer", "The Host", "Okja", "Parazit (Parasite)"],
        correctIndex: 3,
        explanation: "Parasite (Parazit, 2019), Bong Joon-ho'nun yönettiği ve Oscar tarihinde İngilizce olmayan ilk 'En İyi Film' ödülünü kazanan yapımdır. Aynı gece En İyi Uluslararası Film, En İyi Yönetmen ve En İyi Orijinal Senaryo ödüllerini de alarak tarihe geçmiştir."
      },
      {
        id: "cin46",
        difficulty: "medium",
        question: "'The Silence of the Lambs' (Kuzuların Sessizliği, 1991) filminde Hannibal Lecter rolünü kim üstlenmiştir?",
        options: ["Al Pacino", "Anthony Hopkins", "Robert De Niro", "Gary Oldman"],
        correctIndex: 1,
        explanation: "Anthony Hopkins, Kuzuların Sessizliği'nde cannibalist seri katil Dr. Hannibal Lecter'ı canlandırmış ve bu rol için En İyi Erkek Oyuncu Oscar'ını kazanmıştır. Hopkins'in yalnızca 16 dakikalık ekran süresiyle bu ödülü alması Oscar tarihinin en çarpıcı başarılarından sayılır."
      },
      {
        id: "cin47",
        difficulty: "medium",
        question: "Hangi film 'There's no place like home' repliğiyle ünlüdür?",
        options: ["Snow White", "The Wizard of Oz", "Cinderella", "Peter Pan"],
        correctIndex: 1,
        explanation: "'There's no place like home' (Eve benzer bir yer yoktur), Victor Fleming'in 1939 yapımı 'The Wizard of Oz' (Oz Büyücüsü) filminde Dorothy karakterinin söylediği ikonik repliğidir. Judy Garland'ın canlandırdığı Dorothy'nin macerası, sinema tarihinin en sevilen yapıtlarından biridir."
      },
      {
        id: "cin48",
        difficulty: "medium",
        question: "Pixar'ın 'Up' (Yukarı Bak, 2009) filmi hangi yaşlı karakterin hikâyesini anlatır?",
        options: ["Emekli bir astronot", "Yaşlı bir büyükbaba ve keşifçi", "Emekli bir aşçı", "Yaşlı bir müzisyen"],
        correctIndex: 1,
        explanation: "Up, balonlarla evini havaya kaldıran yaşlı Carl Fredricksen ile genç izci Russell'ın Venezuela ormanlarına giden macerasını anlatır. Filmin açılış sahnesi, duygusal gücüyle sinema tarihinin en etkileyici başlangıçlarından biri olarak kabul edilmektedir."
      },
      {
        id: "cin49",
        difficulty: "medium",
        question: "Wes Anderson'un görsel üslubu hangi özellikle öne çıkar?",
        options: ["Hızlı kurgu ve aksiyon sahneleri", "Simetrik çerçeveler ve pastel renk paleti", "Belgesel tarzı el kamerası kullanımı", "Doğaçlama diyaloglar"],
        correctIndex: 1,
        explanation: "Wes Anderson, Grand Budapest Hotel, Moonrise Kingdom ve The Royal Tenenbaums gibi filmlerinde simetrik kamera çerçeveleri, canlı pastel renk paleti ve titiz set tasarımıyla tanınır. Bu özgün estetik 'Wes Anderson tarzı' olarak pop kültürde de geniş yankı uyandırmıştır."
      },
      {
        id: "cin50",
        difficulty: "medium",
        question: "'Interstellar' (2014) filminin yönetmeni kimdir?",
        options: ["Denis Villeneuve", "Ridley Scott", "Christopher Nolan", "Alfonso Cuarón"],
        correctIndex: 2,
        explanation: "Interstellar (2014), Christopher Nolan tarafından yönetilmiş, insanlığın hayatta kalması için başka gezegenler arayan astronotların hikâyesini anlatan bilim kurgu filmidir. Matthew McConaughey ve Anne Hathaway'in rol aldığı film, kara delikler ve zaman yayılması gibi bilimsel teorileri dramatik biçimde işlemektedir."
      },
      {
        id: "cin51",
        difficulty: "medium",
        question: "Türkiye'de en fazla seyirci izleyen yerli film serisi hangisidir?",
        options: ["Kurtlar Vadisi", "Babam ve Oğlum", "Recep İvedik", "Dünyayı Kurtaran Adam"],
        correctIndex: 2,
        explanation: "Recep İvedik serisi (2008'den itibaren), Şahan Gökbakar'ın yarattığı karakterin yer aldığı filmlerle Türkiye'nin gişede en yüksek hasılat yapan yerli film serisi hâline gelmiştir. Seri, Türk sinema tarihindeki seyirci rekoru kıran yapımlar arasında öne çıkar."
      },
      {
        id: "cin52",
        difficulty: "medium",
        question: "'Yüzüklerin Efendisi' üçlemesinin yönetmeni kimdir?",
        options: ["Ridley Scott", "James Cameron", "Peter Jackson", "Christopher Nolan"],
        correctIndex: 2,
        explanation: "J.R.R. Tolkien'in romanından uyarlanan 'Yüzüklerin Efendisi' üçlemesi (2001–2003), Yeni Zelandalı yönetmen Peter Jackson tarafından çekilmiştir. Filmler toplam 17 Oscar ödülü kazanmış; üçüncü film 'Kral'ın Dönüşü' ise 11 Oscar ile tarihe geçmiştir."
      },
      {
        id: "cin53",
        difficulty: "medium",
        question: "'Baba (The Godfather)' filminin yönetmeni kimdir?",
        options: ["Martin Scorsese", "Francis Ford Coppola", "Brian De Palma", "Sidney Lumet"],
        correctIndex: 1,
        explanation: "The Godfather (1972), Mario Puzo'nun romanından uyarlayarak Francis Ford Coppola tarafından yönetilmiştir. Üç Oscar ödülü kazanan film; En İyi Film, Yönetmen ve Senaryo dallarında aday olmuş; sinemanın en iyi filmleri arasında gösterilmektedir."
      },
      {
        id: "cin54",
        difficulty: "medium",
        question: "'Star Wars' evrenini yaratan kişi kimdir?",
        options: ["Steven Spielberg", "George Lucas", "J.J. Abrams", "Ridley Scott"],
        correctIndex: 1,
        explanation: "Star Wars (1977), George Lucas tarafından yaratılmış ve yönetilmiştir. Uzay operası türünü yeniden tanımlayan bu film, sinema efektleri, karakter tasarımı ve müziğiyle sinema tarihinin dönüm noktalarından biri olmuştur."
      },
      {
        id: "cin55",
        difficulty: "medium",
        question: "Nuri Bilge Ceylan hangi filmiyle Cannes'da Altın Palmiye ödülünü almıştır?",
        options: ["Bir Zamanlar Anadolu'da", "Üç Maymun", "Kış Uykusu", "İklimler"],
        correctIndex: 2,
        explanation: "Türk yönetmen Nuri Bilge Ceylan, 'Kış Uykusu' (2014) adlı filmiyle Cannes Film Festivali'nde Altın Palmiye ödülünü kazanmıştır. Bu başarı Türk sineması adına kazanılan en prestijli ödüldür."
      },
      {
        id: "cin56",
        difficulty: "medium",
        question: "Sinema tarihinde ilk ticari başarıya ulaşan sesli film hangisidir?",
        options: ["Metropolis (1927)", "The Jazz Singer (1927)", "Sunrise (1927)", "The Birth of a Nation (1915)"],
        correctIndex: 1,
        explanation: "'The Jazz Singer' (1927), sinema tarihinde sesli konuşma ve şarkının yer aldığı ilk ticari başarılı yapımdır. Al Jolson'ın başrolde oynadığı bu film, sinemanın 'sesli dönem'e geçişinin simgesi olarak kabul edilmektedir."
      },
      {
        id: "cin57",
        difficulty: "medium",
        question: "'James Bond' rolünü ilk kez hangi aktör canlandırmıştır?",
        options: ["Roger Moore", "Timothy Dalton", "Pierce Brosnan", "Sean Connery"],
        correctIndex: 3,
        explanation: "İskoç aktör Sean Connery, 1962 yapımı 'Dr. No' filmiyle James Bond rolünü oynayan ilk aktördür. Connery, Bond'u toplam altı resmi filmde canlandırmış; ikonik suave ve gizemli Bond portresini şekillendirmiştir."
      },
      {
        id: "cin58",
        difficulty: "medium",
        question: "Sinema dünyasının en prestijli ödülü hangisidir?",
        options: ["Altın Küre", "BAFTA", "Oscar (Akademi Ödülleri)", "Emmy"],
        correctIndex: 2,
        explanation: "Oscar Ödülleri (Academy Awards), 1929'dan bu yana ABD Film Sanatları ve Bilimleri Akademisi tarafından düzenlenmektedir. Film dünyasının en prestijli ödülü olarak dünya genelinde milyonlarca izleyicinin takip ettiği ödül töreni sinemaya verilen en büyük armağan sayılır."
      },
      {
        id: "cin59",
        difficulty: "medium",
        question: "Christopher Nolan'ın 2010 yapımı 'Inception' filmi hangi temayı işler?",
        options: ["Zaman yolculuğu", "Rüyalar içine girerek bilinçaltına fikir yerleştirme", "Paralel evrenler arasında geçiş", "Yapay zeka ile insanın savaşı"],
        correctIndex: 1,
        explanation: "'Inception' (2010), Christopher Nolan tarafından yazılıp yönetilen bilim kurgu gerilim filmidir. İnsanların birbirinin rüyasına girip bilgi çalabileceği ya da fikir yerleştirebileceği (inception) bir evrende geçer. Film 4 Oscar ödülü kazanmıştır."
      },
      {
        id: "cin60",
        difficulty: "medium",
        question: "Steven Spielberg'in yönettiği filmler arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Schindler'in Listesi", "E.T. (1982)", "Pulp Fiction (1994)", "Jaws (1975)"],
        correctIndex: 2,
        explanation: "Pulp Fiction (1994), Quentin Tarantino'nun yazdığı ve yönettiği bir filmdir. Schindler'in Listesi, E.T. ve Jaws ise Steven Spielberg'in imzasını taşır. Spielberg, modern Hollywood'un en üretken ve etkili yönetmenlerinden biridir."
      },
      {
        id: "cin61",
        difficulty: "medium",
        question: "Hangi animasyon filmi Disney'in en yüksek gişe hasılatını yapan geleneksel 2D animasyonu olarak kabul edilir?",
        options: ["Küçük Deniz Kızı", "Güzel ve Çirkin", "Aslan Kral", "Mulan"],
        correctIndex: 2,
        explanation: "Aslan Kral (The Lion King, 1994), Walt Disney Animation Studios'un geleneksel (2D) animasyon filmlerinin gişe rekorunu kırmıştır. Hans Zimmer'in müziği ve Elton John'un şarkılarıyla unutulmaz olan filmde Simba'nın krallığa yükselişi anlatılır."
      },
      {
        id: "cin62",
        difficulty: "medium",
        question: "'Schindler'in Listesi' filmini kim yönetmiştir?",
        options: ["Martin Scorsese", "Steven Spielberg", "Francis Ford Coppola", "Stanley Kubrick"],
        correctIndex: 1,
        explanation: "'Schindler'in Listesi' (1993), Steven Spielberg'in yönettiği ve II. Dünya Savaşı döneminde Yahudileri kurtaran Alman iş insanı Oskar Schindler'in gerçek hikâyesini anlatan dramadır. Film 7 Oscar ödülü kazanmış ve sinema tarihinin en önemli yapıtlarından biri olarak kabul edilmiştir."
      },
      {
        id: "cin63",
        difficulty: "medium",
        question: "James Bond karakterini sinemada ilk canlandıran aktör kimdir?",
        options: ["Roger Moore", "Pierce Brosnan", "Sean Connery", "Timothy Dalton"],
        correctIndex: 2,
        explanation: "Sean Connery, James Bond'u ilk kez 'Dr. No' (1962) filminde canlandırmıştır. İskoç asıllı aktör bu rolü toplamda 6 resmi Bond filminde üstlenmiş; hâlâ pek çok eleştirmen ve hayran tarafından en iyi 007 olarak kabul edilmektedir."
      },
      {
        id: "cin64",
        difficulty: "medium",
        question: "'The Dark Knight' filminde Joker rolünü hangi aktör canlandırmıştır?",
        options: ["Jack Nicholson", "Joaquin Phoenix", "Jared Leto", "Heath Ledger"],
        correctIndex: 3,
        explanation: "Heath Ledger, Christopher Nolan'ın 2008 yapımı 'The Dark Knight' filmindeki Joker yorumuyla sinema tarihinin en ikonik kötü adamlarından birini canlandırmıştır. Rol için kendini aşırı derecede hazırlayan Ledger, filmin vizyon öncesinde hayatını kaybetmiş; ölümünün ardından bu rol için En İyi Yardımcı Erkek Oyuncu Oscar'ı almıştır."
      },
      {
        id: "cin65",
        difficulty: "medium",
        question: "'Titanic' (1997) filmi kaç Oscar ödülü kazanmıştır?",
        options: ["7", "9", "11", "14"],
        correctIndex: 2,
        explanation: "James Cameron'ın yönettiği 'Titanic' (1997), 14 Oscar adaylığıyla 11 Oscar kazanarak 'Ben-Hur' ile birlikte Oscar tarihinde en çok ödül alan film rekorunu paylaşmaktadır. Film o dönemin gişe rekorunu kırmış; 200 milyonun üzerinde dolar bütçesiyle üretilmiştir."
      },
      {
        id: "cin66",
        difficulty: "medium",
        question: "'Forrest Gump' (1994) filminde Forrest Gump'ı hangi aktör canlandırmıştır?",
        options: ["Dustin Hoffman", "Robin Williams", "Tom Hanks", "Kevin Costner"],
        correctIndex: 2,
        explanation: "Tom Hanks, Robert Zemeckis'in yönettiği 'Forrest Gump' (1994) filminde zekâ özürlü ama olağanüstü bir yaşam öyküsüne sahip olan Forrest Gump'ı canlandırmıştır. Hanks bu rol için En İyi Erkek Oyuncu Oscar'ını kazanmıştır; aynı ödülü önceki yıl da 'Philadelphia' filmiyle almış ve arka arkaya iki kez Oscar kazanan az sayıda oyuncudan biri olmuştur."
      },
      {
        id: "cin67",
        difficulty: "medium",
        question: "'Parasite' filmiyle Oscar tarihi yazan ülke hangisidir?",
        options: ["Japonya", "Çin", "Güney Kore", "Tayvan"],
        correctIndex: 2,
        explanation: "Bong Joon-ho yönetimindeki 'Parasite' (2019), İngilizce olmayan dilde En İyi Film Oscar'ı kazanan ilk yapım olarak tarihe geçmiştir. Güney Kore yapımı film, o yıl En İyi Film, En İyi Yönetmen, En İyi Uluslararası Film ve En İyi Özgün Senaryo olmak üzere 4 Oscar ödülü kazanmıştır."
      },
      {
        id: "cin68",
        difficulty: "medium",
        question: "Cannes Film Festivali hangi ülkede düzenlenir?",
        options: ["İtalya", "İspanya", "Almanya", "Fransa"],
        correctIndex: 3,
        explanation: "Cannes Film Festivali, her yıl Fransa'nın Cannes şehrinde düzenlenen ve dünya sinemasının en prestijli etkinliği olarak kabul edilen uluslararası film festivalidir. 1946'dan bu yana gerçekleştirilen festivalde en yüksek ödül 'Altın Palmiye'dir (Palme d'Or)."
      },
      {
        id: "cin69",
        difficulty: "medium",
        question: "'The Godfather' romanının yazarı kimdir?",
        options: ["Stephen King", "Francis Ford Coppola", "Mario Puzo", "Truman Capote"],
        correctIndex: 2,
        explanation: "Mario Puzo, 1969'da yayımlanan 'The Godfather' (Baba) romanının yazarıdır. Puzo aynı zamanda Francis Ford Coppola ile birlikte bu romanın 1972 ve 1974'te çekilen iki film uyarlamasının senaryosunu da kaleme almıştır. Her iki film de Oscar ödülüne layık görülmüştür."
      },
      {
        id: "cin70",
        difficulty: "medium",
        question: "'Inception' (2010) filminin yönetmeni kimdir?",
        options: ["David Fincher", "Ridley Scott", "Christopher Nolan", "Denis Villeneuve"],
        correctIndex: 2,
        explanation: "Christopher Nolan, 'Inception' (2010) filminin hem yönetmeni hem de senaryo yazarıdır. Rüya içinde rüya kavramını işleyen bilim kurgu yapımı, özgün anlatı yapısıyla eleştirmenlerden büyük övgü almış; dört Oscar ödülü kazanmıştır."
      },
      {
        id: "cin71",
        difficulty: "medium",
        question: "'Star Wars' serisini başlatan yönetmen kimdir?",
        options: ["Steven Spielberg", "James Cameron", "Ridley Scott", "George Lucas"],
        correctIndex: 3,
        explanation: "George Lucas, 'Star Wars: Bölüm IV – Yeni Bir Umut' (1977) filmiyle bu efsanevi uzay destanını başlatmıştır. Seriyi 2012'de Disney'e satan Lucas, dizi üzerindeki tüm haklarını bu şirkete devretmiştir. 'Star Wars', sinema tarihinin en yüksek hasılatlı ve etkili franchiselarından biridir."
      },
      {
        id: "cin72",
        difficulty: "medium",
        question: "Türk sinemasının öncüsü olarak kabul edilen yönetmen kimdir?",
        options: ["Yılmaz Güney", "Nuri Bilge Ceylan", "Muhsin Ertuğrul", "Atıf Yılmaz"],
        correctIndex: 2,
        explanation: "Muhsin Ertuğrul, Türk sinemasının öncüsü ve kurucusu kabul edilir. 1922'de 'Leblebici Horhor Ağa' ile yönetmenliğe başlayan Ertuğrul, Türk sinemasının ilk döneminde 30'dan fazla film çekmiştir; aynı zamanda tiyatronun da önemli bir ismidir."
      },
      {
        id: "cin73",
        difficulty: "medium",
        question: "'Psycho' (1960) filminin yönetmeni kimdir?",
        options: ["Orson Welles", "Billy Wilder", "John Ford", "Alfred Hitchcock"],
        correctIndex: 3,
        explanation: "Alfred Hitchcock, gerilim ve korku türünün ustası olarak 'Psycho' (1960) dahil pek çok klasik yapımı sinemaya kazandırmıştır. 'Vertigo', 'Rear Window' ve 'The Birds' gibi filmleriyle 'Gerilim Ustası' unvanını alan Hitchcock, modern sinema dilini derinden etkilemiştir."
      },
      {
        id: "cin74",
        difficulty: "medium",
        question: "Oscar töreninde 'En İyi Film' ödülünün resmi adı nedir?",
        options: ["Best Director", "Best Picture", "Golden Globe", "Grand Prix"],
        correctIndex: 1,
        explanation: "Oscar (Akademi Ödülleri) töreninde 'En İyi Film' ödülünün resmi adı 'Best Picture' (En İyi Resim)'dir. Akademi'nin en prestijli ödülü olan Best Picture, genellikle törenin sonunda açıklanır; filmin yapımcılarına verilir."
      },
      {
        id: "cin75",
        difficulty: "hard",
        question: "'Pulp Fiction' (1994) filminin yönetmeni kimdir?",
        options: ["Robert Rodriguez", "Joel Coen", "Oliver Stone", "Quentin Tarantino"],
        correctIndex: 3,
        explanation: "Quentin Tarantino, 'Pulp Fiction' (1994) filminin hem yönetmeni hem de senaryo yazarıdır. Doğrusal olmayan anlatı yapısıyla dikkat çeken film, Cannes'da Altın Palmiye ödülü kazanmıştır. Tarantino'nun bu filmi, 1990'ların sinemada en etkili yapıtlarından biri sayılmaktadır."
      },
      {
        id: "cin76",
        difficulty: "hard",
        question: "'Roma' (2018) filminin yönetmeni kimdir?",
        options: ["Guillermo del Toro", "Alejandro González Iñárritu", "Alfonso Cuarón", "Carlos Reygadas"],
        correctIndex: 2,
        explanation: "Alfonso Cuarón, 'Roma' (2018) filminin hem yönetmeni hem de görüntü yönetmenidir. Meksika'nın başkenti Mexico City'deki Roma semtinde geçen siyah-beyaz yapım; Altın Aslan (Venedik), BAFTA ve 3 Oscar ödülü (En İyi Yönetmen, En İyi Uluslararası Film, En İyi Görüntü Yönetmeni) kazanmıştır."
      },
      {
        id: "cin77",
        difficulty: "hard",
        question: "Charlie Chaplin'in sinemadaki en ünlü karakteri ne ad taşır?",
        options: ["The Kid", "Monsieur Verdoux", "The Tramp (Serseri)", "The Great Dictator"],
        correctIndex: 2,
        explanation: "Charlie Chaplin'in ikonik karakteri 'The Tramp' (Serseri veya Küçük Adam), bol kostüm, küçük şapka, baston ve yürüyüşüyle hemen tanınan sessiz sinema tarihinin en sevilen figürü olmuştur. Bu karakter, Chaplin'in 1914–1936 yılları arasında pek çok filminde yer almıştır."
      },
      {
        id: "cin78",
        difficulty: "hard",
        question: "Yılmaz Güney'in Cannes'da Altın Palmiye kazanan filmi (1982) hangisidir?",
        options: ["Umut", "Sürü", "Yol", "Duvar"],
        correctIndex: 2,
        explanation: "'Yol' (1982), Şerif Gören tarafından yönetilmiş; ancak senaryosunu cezaevinden Yılmaz Güney yazmıştır. Türkiye'den kaçarak kurgu aşamasında filmin sorumluluğunu üstlenen Güney, 1982 Cannes Film Festivali'nde Costa-Gavras'ın 'Missing' filmiyle Altın Palmiye'yi paylaşmıştır."
      },
      {
        id: "cin79",
        difficulty: "hard",
        question: "'Avatar' (2009) filminin yönetmeni kimdir?",
        options: ["Michael Bay", "Steven Spielberg", "Peter Jackson", "James Cameron"],
        correctIndex: 3,
        explanation: "James Cameron, 'Avatar' (2009) filminin yönetmenidir. Devrim niteliğindeki 3D ve motion capture teknolojisiyle çekilen film, yayımlandığında tüm zamanların gişe rekoru kırmıştır (yaklaşık 2,9 milyar dolar). 2022'de yayımlanan devam filmi 'The Way of Water' da büyük gişe başarısı elde etmiştir."
      },
      {
        id: "cin80",
        difficulty: "hard",
        question: "'Toy Story' (1995) hangi animasyon stüdyosu tarafından yapılmıştır?",
        options: ["DreamWorks Animation", "Walt Disney Animation", "Pixar Animation Studios", "Blue Sky Studios"],
        correctIndex: 2,
        explanation: "'Toy Story' (1995), Pixar Animation Studios tarafından yapılan ve sinema tarihinin ilk tam uzun metrajlı bilgisayar animasyonu filmidir. John Lasseter tarafından yönetilen film, animasyon sinemasında bir dönüm noktası olmuş; Pixar'ı Hollywood'un en saygın stüdyolarından biri hâline getirmiştir."
      },
      {
        id: "cin81",
        difficulty: "hard",
        question: "'Casablanca' (1942) filminde başrolü oynayan ünlü aktör kimdir?",
        options: ["Cary Grant", "James Stewart", "Humphrey Bogart", "Gregory Peck"],
        correctIndex: 2,
        explanation: "Casablanca, 1942 yılında çekilen ve Humphrey Bogart ile Ingrid Bergman'ın başrollerini paylaştığı klasik Hollywood filmidir. Film, 1943 Oscar töreninde En İyi Film, En İyi Yönetmen ve En İyi Senaryo dallarında ödül almıştır."
      },
      {
        id: "cin82",
        difficulty: "hard",
        question: "'Yüzüklerin Efendisi' üçlemesini kim yönetmiştir?",
        options: ["James Cameron", "Ridley Scott", "Peter Jackson", "Steven Spielberg"],
        correctIndex: 2,
        explanation: "Yeni Zelandalı yönetmen Peter Jackson, J.R.R. Tolkien'in romanından uyarlanan 'Yüzüklerin Efendisi' üçlemesini yönetmiştir (2001-2003). Üçüncü film 'Kral'ın Dönüşü' (2003), Academy Award'da aday olduğu tüm 11 dalda ödül kazanarak bu rekoru bugüne dek kimseyle paylaşmamaktadır."
      },
      {
        id: "cin83",
        difficulty: "hard",
        question: "Cannes Film Festivali'nin en büyük ödülü nedir?",
        options: ["Altın Aslan", "Altın Palmiye", "Altın Ayı", "Altın Küre"],
        correctIndex: 1,
        explanation: "Cannes Film Festivali'nin en prestijli ödülü 'Altın Palmiye' (Palme d'Or)'dir. Altın Aslan Venedik Film Festivali'ne, Altın Ayı ise Berlin Film Festivali'ne aittir. Cannes 1946'dan bu yana düzenlenen, sinema dünyasının en gözde festivallerinden biridir."
      },
      {
        id: "cin84",
        difficulty: "hard",
        question: "Türk sinemasının öncüsü ve 'babası' olarak kabul edilen isim kimdir?",
        options: ["Yılmaz Güney", "Muhsin Ertuğrul", "Lütfi Ömer Akad", "Metin Erksan"],
        correctIndex: 1,
        explanation: "Muhsin Ertuğrul, Türk sinema tarihinin ilk yönetmeni ve kurucusu olarak kabul edilmektedir. 1922-1953 yılları arasında pek çok filmi sinemaya uyarlayan Ertuğrul, Türk sinemasını tiyatrodan bağımsızlaştırma çabaları nedeniyle 'Türk sinemasının babası' olarak anılmaktadır."
      },
      {
        id: "cin85",
        difficulty: "hard",
        question: "'Parasite' (2019) filmi hangi ülkenin yapımıdır ve hangi Oscar ödüllerini kazanmıştır?",
        options: ["Japonya — En iyi Film, En iyi Yönetmen", "Güney Kore — En iyi Film, En iyi Uluslararası Film, En iyi Yönetmen, En iyi Özgün Senaryo", "Çin — En iyi Film, En iyi Kostüm", "Tayvan — En iyi Yabancı Dil Filmi"],
        correctIndex: 1,
        explanation: "Bong Joon-ho yönetimindeki Güney Kore yapımı 'Parasite' (Parazit), 2020'deki Oscar töreninde En İyi Film, En İyi Uluslararası Film, En İyi Yönetmen ve En İyi Özgün Senaryo ödüllerini kazanmıştır. İngilizce dışındaki bir dilde çekilen ilk 'En İyi Film' Oscar'ı olan bu başarı, sinema tarihinde devrim niteliğinde kabul edilmektedir."
      },
      {
        id: "cin86",
        difficulty: "hard",
        question: "'2001: A Space Odyssey' filmini kim yönetmiştir?",
        options: ["Ridley Scott", "Stanley Kubrick", "Steven Spielberg", "George Lucas"],
        correctIndex: 1,
        explanation: "Stanley Kubrick'in 1968'de yönettiği '2001: A Space Odyssey (Uzay Macerası)', Arthur C. Clarke'ın eserinden uyarlanmış ve bilim kurgu sinemasının başyapıtı sayılmaktadır. Yapay zeka HAL 9000'ı konu alan film; görsel efektleri, felsefik içeriği ve müzik seçimiyle bugün de sinemacılara ilham kaynağı olmaktadır."
      },
      {
        id: "cin87",
        difficulty: "hard",
        question: "Nuri Bilge Ceylan hangi filmiyle Cannes'da 'Altın Palmiye' ödülü kazanmıştır?",
        options: ["Bir Zamanlar Anadolu'da", "Uzak", "Kış Uykusu", "Ahlat Ağacı"],
        correctIndex: 2,
        explanation: "Nuri Bilge Ceylan, 2014 Cannes Film Festivali'nde 'Kış Uykusu' (Winter Sleep) filmiyle Altın Palmiye ödülüne layık görülmüştür. Bu başarıyla Türk sinema tarihinin en prestijli uluslararası ödülünü kazanan Ceylan, önceki filmlerinde de Cannes'dan çeşitli ödüller almıştır."
      },
      {
        id: "cin88",
        difficulty: "hard",
        question: "'The Dark Knight'ta Joker rolünü canlandıran oyuncu kimdir ve bu performansla hangi ödülü kazanmıştır?",
        options: ["Jack Nicholson — Oscar Yardımcı Erkek Oyuncu", "Heath Ledger — Ölümünden sonra Oscar Yardımcı Erkek Oyuncu", "Jared Leto — MTV Ödülü", "Joaquin Phoenix — BAFTA"],
        correctIndex: 1,
        explanation: "Heath Ledger, Christopher Nolan'ın 'Kara Şövalye' (The Dark Knight, 2008) filminde canlandırdığı Joker rolüyle En İyi Yardımcı Erkek Oyuncu Oscar'ını kazanmıştır. Ne var ki Ledger, filmin çekimleri tamamlandıktan birkaç ay sonra yalnızca 28 yaşında hayatını kaybettiği için ödülü ölümünden sonra almıştır."
      },
      {
        id: "cin89",
        difficulty: "hard",
        question: "'Forrest Gump' filminde başrolü hangi oyuncu canlandırmıştır?",
        options: ["Mel Gibson", "Tom Hanks", "Robin Williams", "Kevin Costner"],
        correctIndex: 1,
        explanation: "Tom Hanks, 1994 yapımı 'Forrest Gump' filminde saf yürekli ve zeki Forrest Gump karakterini canlandırmış; bu performansıyla ikinci kez Art Arda Oscar Erkek Oyuncu ödülü kazanmıştır (1993'te Philadelphia filmiyle de almıştı). Film, 1960'lar ve 70'lerin ABD tarihini sıradan bir insanın gözünden anlatmaktadır."
      },
      {
        id: "cin90",
        difficulty: "hard",
        question: "Bollywood sinema sektörü hangi ülkenin sinema endüstrisine verilen addır?",
        options: ["Pakistan", "Bangladeş", "Hindistan", "Sri Lanka"],
        correctIndex: 2,
        explanation: "Bollywood, Hindistan'ın Mumbai (eski adıyla Bombay) merkezli Hindi dilinde film yapan sinema endüstrisine verilen isimdir. 'Bombay' ve 'Hollywood' kelimelerinin birleşiminden türetilmiştir. Yıllık ürettiği film sayısı (1500+) ve seyirci kitlesiyle Bollywood, dünyada en büyük sinema endüstrilerinden biridir."
      },
      {
        id: "cin91",
        difficulty: "hard",
        question: "İlk sesli film olarak tarihe geçen yapım hangisidir?",
        options: ["Metropolis (1927)", "Sunrise (1927)", "The Jazz Singer (1927)", "Wings (1927)"],
        correctIndex: 2,
        explanation: "'The Jazz Singer' (Caz Şarkıcısı, 1927), Warner Bros. yapımı ve Alan Crosland yönetiminde çekilen sinema tarihinin ilk uzun metrajlı sesli filmidir. Al Jolson'ın oynadığı filmde senkronize ses kullanılmıştır; bu buluş 'sinemada sesli dönem'in başlangıcını simgeler ve sessiz sinema dönemine son verir."
      },
      {
        id: "cin92",
        difficulty: "hard",
        question: "Marvel Sinematik Evreni'nin (MCU) ilk filmi hangisidir?",
        options: ["Thor (2011)", "Iron Man (2008)", "Captain America (2011)", "The Avengers (2012)"],
        correctIndex: 1,
        explanation: "Marvel Sinematik Evreni (MCU), Jon Favreau yönetiminde ve Robert Downey Jr.'ın başrolünde çekilen 'Iron Man' (2008) filmiyle başlamıştır. Bu filmin ardından gelen serilerin tümü birbiriyle bağlantılı bir evren oluşturmuş; MCU, sinema tarihinin en büyük franchise'ına dönüşmüştür."
      },
      {
        id: "cin93",
        difficulty: "hard",
        question: "'Interstellar' (2014) filmini kim yönetmiştir?",
        options: ["Ridley Scott", "Denis Villeneuve", "Christopher Nolan", "J.J. Abrams"],
        correctIndex: 2,
        explanation: "Christopher Nolan'ın yönettiği 'Interstellar' (2014), insanlığın yeni yaşanabilir gezegenler arayışını konu alan bilim kurgu filmidir. Kara deliklerin görselleştirilmesi için fizikçi Kip Thorne ile işbirliği yapılan film, doğru bilimsel formüller ve görseller içermesiyle de takdir toplamıştır."
      },
      {
        id: "cin94",
        difficulty: "hard",
        question: "'Ayla' (2017) filminin gerçek hikayesi hangi savaşa dayanmaktadır?",
        options: ["Birinci Dünya Savaşı", "Kore Savaşı", "Vietnam Savaşı", "Körfez Savaşı"],
        correctIndex: 1,
        explanation: "'Ayla: Savaşın Kızı' filmi, Kore Savaşı (1950-1953) döneminde Türk askeri Süleyman Dilbirliği ile himayesine aldığı Koreli yetim kız Kim En Sun'un (Ayla) gerçek hikayesine dayanmaktadır. Türkiye'nin 2018 Oscar törenine aday gösterdiği film, ülkemizde en çok izlenen filmler arasına girmiştir."
      },
      {
        id: "cin95",
        difficulty: "hard",
        question: "Türk sinemasının efsanevi ismi Türkan Şoray hangi lakapla tanınmaktadır?",
        options: ["Sinemamızın Prensesi", "Sultana", "Yeşilçam'ın Yıldızı", "Türk Sinemasının Kraliçesi"],
        correctIndex: 1,
        explanation: "Türkan Şoray, onlarca yıl Türk sinemasının en parlak yıldızlarından biri olarak kabul edilmiş ve 'Sultan' lakabıyla tanınmıştır. 1960'lardan günümüze pek çok filmde rol alan Şoray, hem oyunculuğu hem de yönetmenliğiyle Türk sinema tarihine damgasını vurmuştur."
      },
      {
        id: "cin96",
        difficulty: "hard",
        question: "Oscar Ödülleri'nde (Academy Awards) En Fazla ödül kazanan film hangisi ya da hangileridir?",
        options: ["Titanic tek başına 14 Oscar aldı", "Ben-Hur, Titanic ve LOTR: Kral'ın Dönüşü her biri 11'er Oscar kazandı", "Schindler's List 12 Oscar aldı", "Gone with the Wind 15 Oscar aldı"],
        correctIndex: 1,
        explanation: "Academy Awards tarihinde en fazla Oscar kazanan filmler arasında 'Ben-Hur' (1959), 'Titanic' (1997) ve 'Yüzüklerin Efendisi: Kral'ın Dönüşü' (2003) yer almaktadır; her biri 11 Oscar kazanmıştır. 'Kral'ın Dönüşü', aday olduğu tüm 11 kategoride ödül kazanması bakımından rekor kırmıştır."
      },
      {
        id: "cin97",
        difficulty: "hard",
        question: "Animasyon kategorisinde ilk Oscar ödülü hangi filmle ve hangi yılda verilmiştir?",
        options: ["Shrek, 2002", "Toy Story, 1996", "Beauty and the Beast, 1992", "Spirited Away, 2003"],
        correctIndex: 0,
        explanation: "En İyi Animasyon Filmi Oscar kategorisi ilk kez 2002 töreniyle verilmiş ve ilk ödülü DreamWorks'ün yapımı 'Shrek' (2001) kazanmıştır. Bu kategorinin oluşturulmasından önce, 'Beauty and the Beast' (1991) gibi animasyon filmler En İyi Film kategorisine aday gösterilmişti."
      },
      {
        id: "cin98",
        difficulty: "hard",
        question: "'Şoförün Kızı', 'Selvi Boylum Al Yazmalım' gibi filmlerle tanınan Türk yönetmen kimdir?",
        options: ["Atıf Yılmaz", "Ertem Eğilmez", "Halit Refiğ", "Memduh Ün"],
        correctIndex: 0,
        explanation: "Atıf Yılmaz, 60 yılı aşkın kariyerinde 80'den fazla film yöneterek Türk sinemasının en üretken ve önemli isimleri arasına girmiştir. Kadın psikolojisini ve toplumsal sorunları ustalıkla işlediği filmlerinde Hülya Koçyiğit, Türkan Şoray ve Müjde Ar gibi isimlere başrolleri vermiştir."
      },
      {
        id: "cin99",
        difficulty: "hard",
        question: "'Schindler's List' (1993) filminin yönetmeni kimdir?",
        options: ["Martin Scorsese", "Oliver Stone", "Clint Eastwood", "Steven Spielberg"],
        correctIndex: 3,
        explanation: "Steven Spielberg'in yönettiği 'Schindler's List' (Schindler'in Listesi), Holokost'ta Yahudi işçilerini kurtarmak için çaba gösteren Oskar Schindler'in gerçek hikayesini konu almaktadır. 1993'te 7 Oscar kazanan film; Best Picture (En İyi Film) ve Best Director (En İyi Yönetmen) dahil pek çok prestijli ödüle layık görülmüştür."
      },
      {
        id: "cin100",
        difficulty: "hard",
        question: "Türk yapımı 'Kurtlar Vadisi Pusu' hangi popüler TV serisinden sinemaya uyarlanmıştır?",
        options: ["Diriliş Ertuğrul", "Kurtlar Vadisi", "Ezel", "Behzat Ç."],
        correctIndex: 1,
        explanation: "'Kurtlar Vadisi Pusu' (2010), Türkiye'nin en uzun soluklu ve en çok izlenen aksiyon dizisi olan 'Kurtlar Vadisi'nin sinema versiyonudur. Özellikle Kuzey Irak'taki Türk operasyonlarını konu alan film, Türkiye'de gişe rekorları kırarak en çok izlenen yerli filmler arasına girmiştir."
      },
      {
        id: "cin101",
        difficulty: "hard",
        question: "'Avatar' (2009) filmini kim yönetmiştir?",
        options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"],
        correctIndex: 2,
        explanation: "James Cameron'ın yönettiği Avatar (2009), 3D teknolojisini ve motion-capture tekniklerini en ileri düzeyde kullanan bilim kurgu filmidir. Pandora gezegeninde yerli Na'vi halkı ile insanların çatışmasını anlatan film, dünya genelinde yaklaşık 2,9 milyar dolar hasılat yaparak gişe rekorunu yenilemiştir. 2022'deki Avatar: Suyun Yolu ise bu rekoru yaklaşık 2,32 milyar dolarla geride bırakamadı."
      },
      {
        id: "cin102",
        difficulty: "hard",
        question: "Türkiye'nin Oscar'a aday gösterdiği ilk uzun metrajlı film hangisidir?",
        options: ["Susuz Yaz", "Yol", "At", "Şeker Portakalı"],
        correctIndex: 1,
        explanation: "Yılmaz Güney'in senaristliğini yaptığı, Şerif Gören'in yönettiği 'Yol' (1982), Türkiye'nin Oscar'a aday gösterdiği ilk film olma özelliğini taşır. Aynı yıl Cannes'da Altın Palmiye kazanan film, cezaevinden çıkan mahkumların izin haftasını anlatan etkileyici bir dramadır. Güney, senaristlik sürecini cezaevinde sürdürmüş; filmden kaçarak sürgünde kurgusunu tamamlamıştır."
      },
      {
        id: "cin103",
        difficulty: "hard",
        question: "Stanley Kubrick'in 'Şining' (The Shining, 1980) filminde başrolü oynayan oyuncu kimdir?",
        options: ["Robert De Niro", "Al Pacino", "Jack Nicholson", "Dustin Hoffman"],
        correctIndex: 2,
        explanation: "Jack Nicholson, Stephen King'in aynı adlı romanından uyarlanan ve Stanley Kubrick'in yönettiği 'Şining' filminde Jack Torrance rolünü üstlendi. Uzak bir otelde kış bekçisi olarak çalışmaya başlayan karakterin yavaş yavaş deliye dönüşünü anlatan film, korku sinemasının başyapıtları arasında gösterilmektedir. Nicholson'ın 'Here's Johnny!' sahnesi sinema tarihine geçmiştir."
      },
      {
        id: "cin104",
        difficulty: "hard",
        question: "'Titanic' (1997) filmi kaç Oscar Ödülü kazanmıştır?",
        options: ["7", "9", "11", "13"],
        correctIndex: 2,
        explanation: "James Cameron'ın yönettiği Titanic, 70. Akademi Ödülleri'nde 11 Oscar kazanarak 'Ben-Hur' (1959) ve 'Lord of the Rings: The Return of the King' (2003) ile birlikte tarihteki en çok Oscar alan filmler arasına girdi. 14 dalda aday gösterilen film; En İyi Film, En İyi Yönetmen ve En İyi Sinematografi başta olmak üzere teknik ve yaratıcı alanlarda ödül aldı."
      },
      {
        id: "cin105",
        difficulty: "hard",
        question: "'Joker' (2019) filminde Arthur Fleck / Joker rolünü hangi oyuncu canlandırmıştır?",
        options: ["Heath Ledger", "Jared Leto", "Joaquin Phoenix", "Jack Nicholson"],
        correctIndex: 2,
        explanation: "Joaquin Phoenix, Todd Phillips'in yönettiği 'Joker' filminde Gotham'ın marjinalleşmiş komedyeni Arthur Fleck'i, sonradan ikonlaşan Joker'e dönüşümünü nüanslı ve bunaltıcı bir performansla canlandırdı. Phoenix bu rol için En İyi Erkek Oyuncu Oscar'ı kazandı. Bütçesinin çok üzerinde hasılat yapan ve tartışma yaratan film, bağımsız mahiyetteki süper kahraman filmlerinin mihenk taşlarından biri oldu."
      },
      {
        id: "cin106",
        difficulty: "hard",
        question: "Francis Ford Coppola'nın yönettiği 'The Godfather' (Baba, 1972) filminde Don Vito Corleone'yi hangi oyuncu canlandırmıştır?",
        options: ["Robert De Niro", "Al Pacino", "Marlon Brando", "James Caan"],
        correctIndex: 2,
        explanation: "Marlon Brando, Francis Ford Coppola'nın yönettiği 'The Godfather'da Corleone mafya ailesinin lideri Don Vito Corleone'yi oynadı ve bu performansıyla En İyi Erkek Oyuncu Oscar'ı kazandı. Mario Puzo'nun aynı adlı romanından uyarlanan film, üç bölümlük bir serinin ilk halkası olarak bugün de sinema tarihinin en iyi filmleri arasında gösterilmektedir."
      },
      {
        id: "cin107",
        difficulty: "hard",
        question: "Netflix'in ilk Türkçe dizi (Türkiye orijinal yapım) hangisidir?",
        options: ["Atiye", "Fatma", "Hakan: Muhafız", "Çukur"],
        correctIndex: 2,
        explanation: "Hakan: Muhafız (The Protector), 2018 yılında yayınlanan ve Netflix'in ilk Türkçe orijinal dizisi unvanını taşıyan fantastik aksiyon dizisidir. Ay Yapım tarafından hazırlanan dizi; İstanbul'u korumaya seçilmiş bir gencin maceralarını konu alır. Dizi, uluslararası platformda gösterilmesi sayesinde Türk yapımlarına olan küresel ilgiyi artırmış ve ardından gelen Türkçe Netflix orijinal projelerinin önünü açmıştır."
      },
      {
        id: "cin108",
        difficulty: "hard",
        question: "'Harry Potter' film serisinde Harry Potter rolünü canlandıran oyuncu kimdir?",
        options: ["Rupert Grint", "Tom Felton", "Daniel Radcliffe", "Eddie Redmayne"],
        correctIndex: 2,
        explanation: "Daniel Radcliffe, J.K. Rowling'in büyük ilgi gören romanlarından uyarlanan sekiz Harry Potter filminde (2001-2011) başrol olan Harry Potter'ı oynadı. 11 yaşındayken role seçilen Radcliffe, filmlerin büyük çoğunluğunu çocukluk ve gençlik yıllarında tamamladı. Emma Watson (Hermione Granger) ve Rupert Grint (Ron Weasley) ile birlikte oluşturdukları üçlü, nesil tanımlayan bir sinema ikonuna dönüştü."
      },
      {
        id: "cin109",
        difficulty: "hard",
        question: "'I'll be back' (Ben geri döneceğim) repliğiyle hangi film akıllara gelmektedir?",
        options: ["RoboCop", "Terminatör", "Die Hard", "Predator"],
        correctIndex: 1,
        explanation: "'I'll be back' repliği, James Cameron'ın 1984'te yönettiği bilim kurgu klasiği 'The Terminator'da Arnold Schwarzenegger'in canlandırdığı T-800 adlı android karakter tarafından söylenmektedir. Zaman içinde sinema tarihinin en ikonik diyaloglarından biri hâline gelen bu kısa cümle, pek çok popüler kültür referansına ilham vermiştir. AFI'nin 'Sinema Tarihinin En İyi 100 Film Repliği' listesinde üst sıralarda yer alır."
      },
      {
        id: "cin110",
        difficulty: "hard",
        question: "'Recep İvedik' karakterini kim yaratmış ve canlandırmıştır?",
        options: ["Cem Yılmaz", "Kemal Sunal", "Şahan Gökbakar", "Yılmaz Erdoğan"],
        correctIndex: 2,
        explanation: "Recep İvedik, Türk komedyen, oyuncu ve yapımcı Şahan Gökbakar tarafından yaratılan ve canlandırılan karakterdir. 2008'de vizyona giren ilk filmin ardından serinin devamları geldi; Recep İvedik filmleri, Türk sinema tarihinin en çok izlenen filmleri arasında yer almaktadır. Kaba mizahı, sosyal eleştiriyi ve Türk gündelik yaşamına dair gözlemleri harmanlayan karakter, kültürel bir fenomene dönüşmüştür."
      },
      {
        id: "cin111",
        difficulty: "easy",
        question: "'Kelebek' filminin başrolünde hangi oyuncu yer alır?",
        options: ["Robert Redford", "Steve McQueen", "Paul Newman", "Burt Lancaster"],
        correctIndex: 1,
        explanation: "1973 yapımı 'Papillon' (Kelebek) filminde başrolü Steve McQueen oynamıştır; Dustin Hoffman da yan rolde yer almıştır."
      },
      {
        id: "cin112",
        difficulty: "easy",
        question: "'Schindler'in Listesi' filminin yönetmeni kimdir?",
        options: ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Francis Ford Coppola"],
        correctIndex: 0,
        explanation: "1993 yapımı 'Schindler's List', Steven Spielberg tarafından yönetilmiş ve En İyi Film dahil 7 Oscar kazanmıştır."
      },
      {
        id: "cin113",
        difficulty: "easy",
        question: "'G.O.R.A.' filminin başrol oyuncusu ve senaristi kimdir?",
        options: ["Yılmaz Erdoğan", "Cem Yılmaz", "Şahan Gökbakar", "Ata Demirer"],
        correctIndex: 1,
        explanation: "2004 yapımı 'G.O.R.A.', Cem Yılmaz'ın hem senaristi hem de başrol oyuncusu olduğu, Türk sinemasının en çok izlenen bilim kurgu komedilerinden biridir."
      },
      {
        id: "cin114",
        difficulty: "easy",
        question: "Walt Disney'in ilk uzun metrajlı animasyon filmi hangisidir?",
        options: ["Pinokyo", "Bambi", "Pamuk Prenses ve Yedi Cüceler", "Külkedisi"],
        correctIndex: 2,
        explanation: "Pamuk Prenses ve Yedi Cüceler (Snow White and the Seven Dwarfs), 1937'de gösterime giren ilk Walt Disney uzun metrajlı animasyon filmidir."
      },
      {
        id: "cin115",
        difficulty: "easy",
        question: "'Bisikletim' (The Bicycle Thief) filmi hangi sinema akımının başyapıtıdır?",
        options: ["Fransız Yeni Dalga", "İtalyan Neo-Realizmi", "Alman Ekspresyonizmi", "Sovyet Montajı"],
        correctIndex: 1,
        explanation: "1948 yapımı Vittorio De Sica filmi 'Ladri di Biciclette', İtalyan Neo-Realizminin başyapıtlarından kabul edilir."
      },
      {
        id: "cin116",
        difficulty: "easy",
        question: "'Avatar' (2009) filminin yönetmeni kimdir?",
        options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Christopher Nolan"],
        correctIndex: 1,
        explanation: "Avatar, James Cameron tarafından yönetilmiş; vizyona girdiği yıllarda dünya gişe rekorlarını alt üst etmiştir."
      },
      {
        id: "cin117",
        difficulty: "easy",
        question: "Türk sinemasının ilk Cumhuriyet dönemi yönetmenlerinden biri olan 'Tek Adam' kimdir?",
        options: ["Lütfi Akad", "Atıf Yılmaz", "Yılmaz Güney", "Muhsin Ertuğrul"],
        correctIndex: 3,
        explanation: "Muhsin Ertuğrul, 1922'den itibaren Türk sinemasının uzun yıllar tek hâkim yönetmeni olduğu için 'Tek Adam Dönemi' onunla anılır."
      },
      {
        id: "cin118",
        difficulty: "easy",
        question: "Marvel Sinematik Evreni'nin ilk filmi hangisidir?",
        options: ["Iron Man", "Hulk", "Thor", "Captain America"],
        correctIndex: 0,
        explanation: "Marvel Sinematik Evreni (MCU), Jon Favreau'nun yönettiği 2008 yapımı Iron Man ile başlamıştır."
      },
      {
        id: "cin119",
        difficulty: "easy",
        question: "Hangi film 'Beyaz Köpek' (White Dog) gibi cinsten ünlü 'animal-rights' tartışması başlatmıştır?",
        options: ["Free Willy", "Beyaz Köpek", "101 Dalmaçyalı", "Babe"],
        correctIndex: 0,
        explanation: "1993 yapımı 'Free Willy' (Özgür Willy), tutsak orcaların durumunu gündeme getirerek hayvan hakları farkındalığı yaratmıştır."
      },
      {
        id: "cin120",
        difficulty: "easy",
        question: "'Forrest Gump' (1994) filminin başrol oyuncusu kimdir?",
        options: ["Tom Hanks", "Kevin Costner", "Mel Gibson", "Tom Cruise"],
        correctIndex: 0,
        explanation: "Tom Hanks, 'Forrest Gump' filmindeki rolüyle 1995'te En İyi Erkek Oyuncu Oscar'ını kazanmış; bu, üst üste ikinci Oscar'ı olmuştur (önceki yıl 'Philadelphia' ile)."
      },
      {
        id: "cin121",
        difficulty: "easy",
        question: "'Yüzüklerin Efendisi' üçlemesinin yönetmeni kimdir?",
        options: ["Peter Jackson", "Guillermo del Toro", "Tim Burton", "Ridley Scott"],
        correctIndex: 0,
        explanation: "Üçleme (2001-2003), Yeni Zelandalı yönetmen Peter Jackson tarafından yönetilmiş ve son film 'Kralın Dönüşü' 11 Oscar kazanmıştır."
      },
      {
        id: "cin122",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi bir Türk dizi başarısı olan platformdur?",
        options: ["TRT 1", "Show TV", "Star TV", "Hepsi"],
        correctIndex: 3,
        explanation: "Türk dizileri TRT 1, Show TV, Star TV ve diğer ulusal kanallarda başarıyla yayınlanmakta ve dünya genelinde milyonlarca izleyiciye ulaşmaktadır."
      },
      {
        id: "cin123",
        difficulty: "easy",
        question: "'Yedi Samuray' (Seven Samurai) filminin yönetmeni kimdir?",
        options: ["Akira Kurosawa", "Yasujirō Ozu", "Hayao Miyazaki", "Takeshi Kitano"],
        correctIndex: 0,
        explanation: "1954 yapımı 'Yedi Samuray', Japon yönetmen Akira Kurosawa tarafından çekilmiş; Hollywood dahil dünya sinemasını derinden etkilemiş bir başyapıttır."
      },
      {
        id: "cin124",
        difficulty: "easy",
        question: "Türk sinemasında 'Vizontele' filminin yönetmeni kimdir?",
        options: ["Yılmaz Erdoğan", "Cem Yılmaz", "Çağan Irmak", "Tolga Karaçelik"],
        correctIndex: 0,
        explanation: "2001 yapımı 'Vizontele', Yılmaz Erdoğan ve Ömer Faruk Sorak ortak yönetimiyle çekilmiş, Türk sinemasında büyük gişe başarısı yakalamıştır."
      },
      {
        id: "cin125",
        difficulty: "easy",
        question: "'Titanic' (1997) filminde başrolde hangi iki oyuncu yer alır?",
        options: ["Tom Cruise - Nicole Kidman", "Leonardo DiCaprio - Kate Winslet", "Brad Pitt - Cate Blanchett", "Johnny Depp - Penélope Cruz"],
        correctIndex: 1,
        explanation: "James Cameron'un yönettiği Titanic'te aşk hikâyesini Leonardo DiCaprio (Jack) ve Kate Winslet (Rose) canlandırmıştır."
      },
      {
        id: "cin126",
        difficulty: "easy",
        question: "Hangi film 'Selam Sabah, Vietnam!' (Good Morning, Vietnam!) adıyla bilinir?",
        options: ["Bir komedi-drama, başrolde Robin Williams", "Bir savaş belgeseli", "Bir aşk filmi", "Bir bilim kurgu"],
        correctIndex: 0,
        explanation: "1987 yapımı 'Good Morning, Vietnam', başrolünde Robin Williams'ın olduğu, savaş döneminde radyo DJ'liği yapan bir askerin hikâyesini anlatan komedi-dramadır."
      },
      {
        id: "cin127",
        difficulty: "easy",
        question: "'Hababam Sınıfı' filmlerinin senaryosu hangi yazara aittir?",
        options: ["Aziz Nesin", "Rıfat Ilgaz", "Yaşar Kemal", "Ömer Seyfettin"],
        correctIndex: 1,
        explanation: "Hababam Sınıfı; Rıfat Ilgaz'ın 1957'de yayımlanan aynı adlı romanından uyarlanmış ve Türk sinema tarihine geçen bir mizahi seriye dönüşmüştür."
      },
      {
        id: "cin128",
        difficulty: "medium",
        question: "1972 yapımı 'Baba' (The Godfather) filminin yönetmeni kimdir?",
        options: ["Martin Scorsese", "Francis Ford Coppola", "Sergio Leone", "Stanley Kubrick"],
        correctIndex: 1,
        explanation: "The Godfather, Francis Ford Coppola tarafından yönetilmiş ve 'En İyi Film' dâhil 3 Oscar kazanmıştır."
      },
      {
        id: "cin129",
        difficulty: "medium",
        question: "Yılmaz Güney'in 1982'de Cannes Altın Palmiye'yi kazanan filminin senaryosunu yazıp yönetmenliğini üstlendiği eseri hangisidir?",
        options: ["Sürü", "Yol", "Arkadaş", "Endişe"],
        correctIndex: 1,
        explanation: "Yılmaz Güney, hapisten kaçışından sonra senaryosunu yazıp Şerif Gören'in çektiği 'Yol' ile 1982 Cannes'da Costa-Gavras'ın 'Missing'iyle Altın Palmiye'yi paylaştı."
      },
      {
        id: "cin130",
        difficulty: "medium",
        question: "Hitchcock'un 'Sapık' (Psycho) filminde ünlü duş sahnesinin müziğini kim bestelemiştir?",
        options: ["John Williams", "Bernard Herrmann", "Ennio Morricone", "Hans Zimmer"],
        correctIndex: 1,
        explanation: "Bernard Herrmann, Hitchcock filmlerinin pek çoğunun müziğini bestelemiş; 'Psycho' (1960) için yazdığı keskin yaylılar duş sahnesinin ikoniğidir."
      },
      {
        id: "cin131",
        difficulty: "medium",
        question: "Christopher Nolan'ın 'Başlangıç' (Inception) filmi hangi yıl gösterime girdi?",
        options: ["2008", "2010", "2012", "2014"],
        correctIndex: 1,
        explanation: "Inception, 2010 yazında vizyona girmiş ve 4 Oscar (görüntü yönetmeni, ses, ses kurgusu ve görsel efekt) kazanmıştır."
      },
      {
        id: "cin132",
        difficulty: "medium",
        question: "Türk sinemasında 'Babam ve Oğlum' filmini yöneten kimdir?",
        options: ["Çağan Irmak", "Reha Erdem", "Semih Kaplanoğlu", "Yeşim Ustaoğlu"],
        correctIndex: 0,
        explanation: "2005 yapımı 'Babam ve Oğlum' filmi, Çağan Irmak tarafından yönetilmiş ve Türk sinemasında en çok izlenen ve en duygusal filmlerden biri olarak yer almıştır."
      },
      {
        id: "cin133",
        difficulty: "medium",
        question: "1994 yapımı 'Forrest Gump' filminin yönetmeni kimdir?",
        options: ["Steven Spielberg", "Robert Zemeckis", "Ron Howard", "Clint Eastwood"],
        correctIndex: 1,
        explanation: "Forrest Gump, Robert Zemeckis tarafından yönetilmiş ve 'En İyi Film', 'En İyi Yönetmen' ve 'En İyi Erkek Oyuncu' (Tom Hanks) dahil 6 Oscar kazanmıştır."
      },
      {
        id: "cin134",
        difficulty: "medium",
        question: "Animasyon filmi 'Ratatouille'da ana karakter kim/ne tür bir karakterdir?",
        options: ["Bir restoran sahibi", "Bir farelik karakter (chef Remy)", "Bir aşçı şefin kızı", "Bir gazeteci"],
        correctIndex: 1,
        explanation: "Pixar yapımı 'Ratatouille' (2007), yemek yapmaya tutkun bir fare olan Remy'nin Paris'in ünlü restoranında şef olma macerasını anlatır."
      },
      {
        id: "cin135",
        difficulty: "medium",
        question: "Aşağıdaki filmlerden hangisi bir Akira Kurosawa filmidir?",
        options: ["Yedi Samuray", "Tokyo Story", "Çocukluğum", "Sıkışmış"],
        correctIndex: 0,
        explanation: "Yedi Samuray (Shichinin no Samurai), 1954 yapımı Akira Kurosawa'nın efsanevi filmi olup pek çok modern aksiyon ve western filmine ilham vermiştir."
      },
      {
        id: "cin136",
        difficulty: "medium",
        question: "1989 yapımı 'Cinema Paradiso' filminin yönetmeni kimdir?",
        options: ["Federico Fellini", "Giuseppe Tornatore", "Vittorio De Sica", "Bernardo Bertolucci"],
        correctIndex: 1,
        explanation: "Cinema Paradiso, Giuseppe Tornatore tarafından yönetilmiş ve 1990 'En İyi Yabancı Film' Oscar'ını kazanmıştır."
      },
      {
        id: "cin137",
        difficulty: "medium",
        question: "Cem Yılmaz'ın 'GORA' filmi hangi yıl gösterime girmiştir?",
        options: ["2002", "2004", "2006", "2008"],
        correctIndex: 1,
        explanation: "GORA, 2004'te gösterime girmiş ve dönemin Türkiye gişe rekorlarını kıran bilim kurgu komedi filmidir; yönetmeni Ömer Faruk Sorak'tır."
      },
      {
        id: "cin138",
        difficulty: "medium",
        question: "Hangi yönetmen 'Once Upon a Time in America' filmini yönetmiştir?",
        options: ["Sergio Leone", "Sergio Corbucci", "Federico Fellini", "Brian De Palma"],
        correctIndex: 0,
        explanation: "1984 yapımı 'Once Upon a Time in America', İtalyan western ustası Sergio Leone'nin son filmi ve modern bir epik gangster destanıdır."
      },
      {
        id: "cin139",
        difficulty: "medium",
        question: "Pixar'ın 'WALL·E' filminin başrolünde olan robot türü nedir?",
        options: ["Bir savaş robotu", "Bir çöp temizleyici robot", "Bir tarım robotu", "Bir uzay aracı pilotu"],
        correctIndex: 1,
        explanation: "WALL·E (2008), Dünya'da çöp toplamak üzere bırakılmış son robot olan WALL·E'nin yalnızlığı ve aşkını anlatan Pixar yapımıdır."
      },
      {
        id: "cin140",
        difficulty: "medium",
        question: "Aşağıdaki filmlerden hangisi 4. Oscar kazanan ilk yabancı dilde 'En İyi Film' ödüllü filmidir?",
        options: ["Roma", "Parazit (Parasite)", "Crouching Tiger Hidden Dragon", "La Vita è Bella"],
        correctIndex: 1,
        explanation: "Bong Joon-ho'nun yönettiği Güney Kore yapımı 'Parazit' (2019), 'En İyi Film' Oscar'ı kazanan ilk yabancı dilde film olmuştur."
      },
      {
        id: "cin141",
        difficulty: "medium",
        question: "Türk yönetmen Semih Kaplanoğlu'nun Berlin Film Festivali'nde Altın Ayı kazandığı filmi hangisidir?",
        options: ["Yumurta", "Süt", "Bal", "Bağlılık Hasan"],
        correctIndex: 2,
        explanation: "Semih Kaplanoğlu'nun 'Yusuf Üçlemesi'nin son halkası olan 'Bal' (2010), 60. Berlin Film Festivali'nde Altın Ayı kazanmıştır."
      },
      {
        id: "cin142",
        difficulty: "medium",
        question: "Hangi yönetmen 'Mavi Üçleme' (Three Colors: Blue, White, Red) filmlerini yönetmiştir?",
        options: ["Krzysztof Kieslowski", "Roman Polanski", "Andrzej Wajda", "Pedro Almodóvar"],
        correctIndex: 0,
        explanation: "1993-94 yıllarında çekilen Üç Renk üçlemesi, Polonyalı yönetmen Krzysztof Kieslowski tarafından yönetilmiştir."
      },
      {
        id: "cin143",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi 1990'lar Türk sinemasında 'Yeni Sinema' kuşağının ilk popüler filmlerinden biridir?",
        options: ["Eşkıya", "Selvi Boylum Al Yazmalım", "Sevmek Zamanı", "Tabutta Rövaşata"],
        correctIndex: 0,
        explanation: "Yavuz Turgul'un yönettiği 1996 yapımı 'Eşkıya', Türk sinemasının yeni döneminin gişe ve eleştirmen başarısı olan dönüm noktası filmidir."
      },
      {
        id: "cin144",
        difficulty: "hard",
        question: "1960 Cannes Film Festivali'nde Altın Palmiye kazanan Federico Fellini filmi hangisidir?",
        options: ["8½", "La Dolce Vita", "Amarcord", "La Strada"],
        correctIndex: 1,
        explanation: "La Dolce Vita, Federico Fellini'nin 1960'ta Cannes Altın Palmiye'sini kazanan ünlü filmidir; 'paparazzi' kelimesi de bu filmden gelir."
      },
      {
        id: "cin145",
        difficulty: "hard",
        question: "Yılmaz Güney'in yönettiği son film hangisidir?",
        options: ["Yol", "Sürü", "Duvar", "Endişe"],
        correctIndex: 2,
        explanation: "Yılmaz Güney'in 1983'te Fransa'da çektiği son filmi 'Duvar', Cannes'da gösterilmiş ve büyük yankı uyandırmıştır."
      },
      {
        id: "cin146",
        difficulty: "hard",
        question: "Federico Fellini'nin '8½' filmi hangi yıl gösterime girdi?",
        options: ["1953", "1963", "1973", "1983"],
        correctIndex: 1,
        explanation: "Federico Fellini'nin yaratıcı krizini anlattığı '8½' (Otto e Mezzo), 1963'te gösterime girmiş ve 'En İyi Yabancı Film' Oscar'ı dahil pek çok ödül kazanmıştır."
      },
      {
        id: "cin147",
        difficulty: "hard",
        question: "Hangi yönetmen 'Hayatın Güzelliği' (La Vita è Bella) ile en iyi yabancı film Oscar'ı kazandı?",
        options: ["Roberto Benigni", "Giuseppe Tornatore", "Bernardo Bertolucci", "Vittorio De Sica"],
        correctIndex: 0,
        explanation: "Roberto Benigni, 1997 yapımı 'La Vita è Bella' (Hayat Güzeldir) ile hem yönetmen hem başrol oyuncusu olarak Oscar kazanmış; ayrıca 'En İyi Yabancı Film' Oscar'ını da almıştır."
      },
      {
        id: "cin148",
        difficulty: "hard",
        question: "Sergei Eisenstein'in 1925 yapımı, montaj sinemasının başyapıtı sayılan filmi hangisidir?",
        options: ["Ekim", "Potemkin Zırhlısı", "İvan'ın Çocukluğu", "Korkunç İvan"],
        correctIndex: 1,
        explanation: "Battleship Potemkin (Potemkin Zırhlısı, 1925), Eisenstein'in Sovyet montaj sinemasını şekillendiren ve 'Odessa Merdivenleri' sahnesiyle ikoniğine kavuşan filmidir."
      },
      {
        id: "cin149",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Fransız Yeni Dalga' akımının önde gelen yönetmenlerinden biri değildir?",
        options: ["Jean-Luc Godard", "François Truffaut", "Claude Chabrol", "Federico Fellini"],
        correctIndex: 3,
        explanation: "Federico Fellini bir İtalyan yönetmen olup İtalyan sinema akımına aittir; diğerleri Fransız Yeni Dalga'nın temel yönetmenleridir."
      },
      {
        id: "cin150",
        difficulty: "hard",
        question: "Stanley Kubrick'in '2001: A Space Odyssey' filminde kullanılan ünlü açılış müziği hangisinden alınmıştır?",
        options: ["Beethoven 9. Senfoni", "Wagner Tannhäuser uvertürü", "Richard Strauss 'Also Sprach Zarathustra'", "Holst 'Gezegenler'"],
        correctIndex: 2,
        explanation: "1968 yapımı '2001: Bir Uzay Macerası'nın ikonik açılışında Richard Strauss'un 'Also Sprach Zarathustra' eserinin başlangıcı kullanılmıştır."
      },
      {
        id: "cin151",
        difficulty: "hard",
        question: "Türk yönetmen Reha Erdem'in 2008'de Antalya Altın Portakal kazandığı 'Hayat Var' filminin temel mekânı neresidir?",
        options: ["İstanbul Boğazı kıyısındaki bir gecekondu", "Karadeniz dağlarında bir köy", "Ege kıyılarında bir plaj", "Doğu Anadolu'da bir ova"],
        correctIndex: 0,
        explanation: "Hayat Var, Boğaz kıyısındaki bir gecekondu mahallesinde yaşayan 14 yaşındaki Hayat'ın hayatını anlatan, gerçeküstü atmosferli bir Reha Erdem filmidir."
      },
      {
        id: "cin152",
        difficulty: "hard",
        question: "Hangi yönetmen 'Solaris' (1972) filmini yönetmiştir?",
        options: ["Andrei Tarkovsky", "Sergei Parajanov", "Aleksandr Sokurov", "Mikhail Kalatozov"],
        correctIndex: 0,
        explanation: "Solaris (1972), Sovyet/Rus yönetmen Andrei Tarkovsky'nin Stanislaw Lem'in romanından uyarladığı bilim kurgu klasiğidir."
      },
      {
        id: "cin153",
        difficulty: "hard",
        question: "Türk sinemasında ilk renkli film hangisidir?",
        options: ["Halıcı Kız (1953)", "İstanbul Kadınları (1948)", "Aysel Bataklı Damın Kızı (1934)", "Kara Murat: Fatihin Fermanı (1973)"],
        correctIndex: 0,
        explanation: "Halıcı Kız (1953), Muhsin Ertuğrul tarafından yönetilen ve Türk sinemasının ilk renkli filmi olarak kabul edilen yapımdır."
      },
      {
        id: "cin154",
        difficulty: "hard",
        question: "Christopher Nolan'ın 'Memento' (2000) filminin anlatım yapısı nasıldır?",
        options: ["Geleneksel doğrusal anlatı", "Geri-ileri zaman atlamaları ve ters kronolojik anlatı", "Tek mekânda, tek zamanda anlatı", "Sadece flashback'lerle anlatım"],
        correctIndex: 1,
        explanation: "Memento, ana hikâyenin ters kronolojiyle (sondan başa) renkli sahneler ve ileri kronolojiyle siyah-beyaz sahneler arasında dönüşümlü olarak aktarıldığı yenilikçi bir anlatı yapısına sahiptir."
      },
      {
        id: "cin155",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Apu Üçlemesi'nin yönetmenidir?",
        options: ["Satyajit Ray", "Mira Nair", "Mike Newell", "Ang Lee"],
        correctIndex: 0,
        explanation: "Hindistanlı yönetmen Satyajit Ray, Bengalce çekilen 'Apu Üçlemesi' (Pather Panchali, Aparajito, Apur Sansar) ile uluslararası sanat sinemasının en önemli isimlerinden biri olmuştur."
      },
      {
        id: "cin156",
        difficulty: "hard",
        question: "Aşağıdaki filmlerden hangisi 'Roma' (2018) ile En İyi Yönetmen Oscar'ını kazanan yönetmen Alfonso Cuarón'un başka bir başyapıtıdır?",
        options: ["Children of Men", "El Crimen del Padre Amaro", "El Laberinto del Fauno", "Birdman"],
        correctIndex: 0,
        explanation: "Children of Men (Son Umut, 2006), Alfonso Cuarón'un yönettiği distopik bilim kurgu filmidir; tek planlı uzun sahneleriyle teknik açıdan da hayranlık uyandırır."
      },
      {
        id: "cin157",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'Citizen Kane' filminde yönetmen, senarist ve başrol olan kişidir?",
        options: ["Orson Welles", "Howard Hawks", "John Ford", "Frank Capra"],
        correctIndex: 0,
        explanation: "1941 yapımı 'Citizen Kane', Orson Welles'in hem yönetmen hem senarist hem de başrol oyuncusu olduğu, sinema tarihinin en etkili filmlerinden biri olarak kabul edilen yapıttır."
      },
      {
        id: "cin158",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Hindistan'ın Bollywood sinemasında prodüksiyon merkezi olan şehirdir?",
        options: ["Yeni Delhi", "Mumbai (Bombay)", "Bangalor", "Çennay"],
        correctIndex: 1,
        explanation: "Bollywood, Hindistan'ın Mumbai (eski adıyla Bombay) şehrinde üretilen Hindi dilindeki film endüstrisini ifade eden popüler bir terimdir."
      },
      {
        id: "cin159",
        difficulty: "hard",
        question: "'Apocalypse Now' filminin yönetmeni kimdir?",
        options: ["Stanley Kubrick", "Francis Ford Coppola", "Martin Scorsese", "Oliver Stone"],
        correctIndex: 1,
        explanation: "1979 yapımı 'Apocalypse Now' (Kıyamet), Vietnam Savaşı'nı konu alan ve Joseph Conrad'ın 'Karanlığın Yüreği' romanından esinlenen, Francis Ford Coppola tarafından yönetilen kült filmdir."
      },
      {
        id: "cin160",
        difficulty: "hard",
        question: "1942 yapımı 'Casablanca' filminin başrol erkek oyuncusu kimdir?",
        options: ["Cary Grant", "Humphrey Bogart", "James Stewart", "Gary Cooper"],
        correctIndex: 1,
        explanation: "Sinemanın klasiklerinden 'Casablanca'da Rick Blaine karakterini Humphrey Bogart canlandırmış; başrol kadın oyuncu ise Ingrid Bergman olmuştur."
      },
      {
        id: "cin161",
        difficulty: "easy",
        question: "Disney animasyon filmi 'Aslan Kral'ın (The Lion King) ana karakterinin adı nedir?",
        options: ["Nala", "Simba", "Mufasa", "Timon"],
        correctIndex: 1,
        explanation: "'Aslan Kral' (The Lion King, 1994), Disney'in en sevilen animasyon filmlerinden biridir. Ana karakter genç aslan Simba, babasının Scar tarafından öldürülmesinin ardından kaçıp büyür ve ailesinin intikamını almak için yurduna döner. Film, Shakespeare'in Hamlet oyunundan ilham almıştır."
      },
      {
        id: "cin162",
        difficulty: "easy",
        question: "'Titanic' (1997) filminde Jack Dawson rolünü oynayan oyuncu kimdir?",
        options: ["Brad Pitt", "Tom Hanks", "Leonardo DiCaprio", "Johnny Depp"],
        correctIndex: 2,
        explanation: "James Cameron'ın yönettiği 'Titanic' filminde genç ve fakir ressam Jack Dawson'ı Leonardo DiCaprio canlandırmıştır. Film, 11 Oscar ödülüyle sinema tarihinin en çok ödül alan filmleri arasına girmiştir."
      },
      {
        id: "cin163",
        difficulty: "medium",
        question: "Hem 'Titanic' hem de 'Avatar' filmlerini yöneten sinemacı kimdir?",
        options: ["Ridley Scott", "Steven Spielberg", "Christopher Nolan", "James Cameron"],
        correctIndex: 3,
        explanation: "James Cameron, 1997'de 'Titanic' ile 2009'da 'Avatar'ı yöneterek her ikisini de dönemin gişe rekorunu kıran filmler hâline getirmiştir. Cameron, özel efektler ve 3D teknolojisini sinemaya kazandırmasıyla da tanınmaktadır."
      },
      {
        id: "cin164",
        difficulty: "medium",
        question: "'Baba' (The Godfather, 1972) filminde Don Vito Corleone'yu oynayan efsanevi oyuncu kimdir?",
        options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Jack Nicholson"],
        correctIndex: 2,
        explanation: "Marlon Brando, Francis Ford Coppola'nın yönettiği 'The Godfather'da Don Vito Corleone rolüyle Oscar kazanmıştır; ancak protestosunu göstermek için ödülü geri çevirmiştir. Filmdeki 'reddedilemeyecek bir teklif' sahnesi popüler kültürün ikonlarından biri hâline gelmiştir."
      },
      {
        id: "cin165",
        difficulty: "medium",
        question: "Hangi film 2020 Oscar töreninde En İyi Film ödülü kazanan ilk yabancı dilli film olmuştur?",
        options: ["Oldboy", "Train to Busan", "Parasite (Parazit)", "The Handmaiden"],
        correctIndex: 2,
        explanation: "Bong Joon-ho'nun yönettiği Güney Kore yapımı 'Parasite' (Parazit, 2019), 2020 Oscar töreni'nde En İyi Film, En İyi Yönetmen, En İyi Uluslararası Film ve En İyi Özgün Senaryo dallarında ödül kazanarak yabancı dilli bir filmin En İyi Film ödülü alan ilk örneği oldu."
      },
      {
        id: "cin166",
        difficulty: "medium",
        question: "Cannes Film Festivali'nde verilen en prestijli ödülün adı nedir?",
        options: ["Altın Aslan", "Altın Ayı", "Altın Palmiye", "Altın Küre"],
        correctIndex: 2,
        explanation: "Altın Palmiye (Palme d'Or), her yıl Fransa'nın Cannes şehrinde düzenlenen Cannes Film Festivali'nin en yüksek ödülüdür. Türkiye'den Nuri Bilge Ceylan 2014'te 'Kış Uykusu' filmiyle Altın Palmiye kazanmıştır."
      },
      {
        id: "cin167",
        difficulty: "hard",
        question: "Alfred Hitchcock'un 'Psycho' (1960) filmindeki Norman Bates karakteri gerçek hayatta hangi seri katilden ilham almıştır?",
        options: ["Charles Manson", "Ted Bundy", "Ed Gein", "Jeffrey Dahmer"],
        correctIndex: 2,
        explanation: "'Psycho'nun Norman Bates karakteri büyük ölçüde 1950'lerde yakalanan ABD'li seri katil Ed Gein'den ilham almıştır. Ed Gein aynı zamanda 'Silence of the Lambs' (Hannibal Lecter) ve 'Texas Chainsaw Massacre' filmlerine de ilham kaynağı olmuştur."
      },
      {
        id: "cin168",
        difficulty: "hard",
        question: "Stanley Kubrick'in '2001: A Space Odyssey' (1968) filmindeki HAL 9000 ne tür bir varlıktır?",
        options: ["Uzaylı", "Yapay Zekâlı Gemi Bilgisayarı", "Robot", "Uzay İstasyonu Kaptanı"],
        correctIndex: 1,
        explanation: "HAL 9000 (Heuristically Algorithmic Computer), '2001: A Space Odyssey' filmindeki soğukkanlı yapay zekâlı gemi bilgisayarıdır. HAL, mürettebat üzerinde tam kontrol sağlamak için görevi sabote eder ve sinema tarihinin en ikonik yapay zekâ tasvirlerinden biri olarak kabul edilir."
      },
      {
        id: "cin169",
        difficulty: "hard",
        question: "Türk sinemasında Cannes'da Altın Palmiye kazanan yönetmen kimdir?",
        options: ["Yılmaz Güney", "Nuri Bilge Ceylan", "Ferzan Özpetek", "Zeki Demirkubuz"],
        correctIndex: 1,
        explanation: "Nuri Bilge Ceylan, 2014'te 'Kış Uykusu' filmiyle Cannes'da Altın Palmiye kazanmıştır; bu, bir Türk filmi için elde edilen en prestijli sinema ödülüdür. Daha önce 'Bir Zamanlar Anadolu'da' (2011) ile Cannes Büyük Ödülü'nü de kazanmıştır."
      },
      {
        id: "cin170",
        difficulty: "hard",
        question: "Anthony Burgess'in 'Otomatik Portakal' (A Clockwork Orange) adlı romanını beyazperdeye aktaran yönetmen kimdir?",
        options: ["Stanley Kubrick", "Ridley Scott", "Francis Ford Coppola", "Martin Scorsese"],
        correctIndex: 0,
        explanation: "Stanley Kubrick, Anthony Burgess'in 1962 tarihli distopik romanını 1971'de sinemaya uyarlamıştır. Film; şiddet, özgür irade ve devlet denetimi temalarını işlemekte olup Alex DeLarge karakterini Malcolm McDowell canlandırmıştır."
      },
      {
        id: "cin171",
        difficulty: "easy",
        question: "Hangi filmler şimdiye kadar en fazla Oscar ödülü kazanma rekorunu paylaşmaktadır?",
        options: ["Lawrence of Arabia (12)", "Ben-Hur (11), Titanik (11) ve The Lord of the Rings: The Return of the King (11)", "Gone with the Wind (10) ve Schindler's List (10)", "Avatar (9) ve Gladiator (9)"],
        correctIndex: 1,
        explanation: "Ben-Hur (1959), Titanik (1997) ve The Lord of the Rings: The Return of the King (2003) filmleri 11'er Oscar ile şimdiye kadar en çok Oscar alan filmler olma rekorunu paylaşmaktadır."
      },
      {
        id: "cin172",
        difficulty: "easy",
        question: "Sessiz film döneminin en ünlü komedyeni kimdir?",
        options: ["Buster Keaton", "Harold Lloyd", "Charlie Chaplin", "Stan Laurel"],
        correctIndex: 2,
        explanation: "Charlie Chaplin, 1910'lar ve 1920'lerde geliştirdiği 'Küçük Aylak' karakteriyle sessiz sinema döneminin en tanınan ve etkili komedyeni olmuştur. Chaplin hem yönetmen hem senarist hem de besteci olarak sinema tarihine geçmiştir."
      },
      {
        id: "cin173",
        difficulty: "easy",
        question: "Walt Disney Studios'un ürettiği ilk uzun metrajlı animasyon filmi hangisidir?",
        options: ["Bambi", "Pinokyo", "Pamuk Prenses ve Yedi Cüceler", "Dumbo"],
        correctIndex: 2,
        explanation: "Pamuk Prenses ve Yedi Cüceler (Snow White and the Seven Dwarfs), 1937'de gösterime giren Walt Disney Studios'un ilk uzun metrajlı animasyon filmidir. Eleştirmenler ve seyirci tarafından coşkuyla karşılanan film sinema tarihinde bir dönüm noktası olmuştur."
      },
      {
        id: "cin174",
        difficulty: "medium",
        question: "Film yönetmenliği bağlamında 'auteur teorisi' ne anlama gelir?",
        options: ["Filmlerin kolektif bir ekip ürünü olduğu görüşü", "Yönetmenin filmin birincil yaratıcı sesi ve sanatsal vizyonunun belirleyicisi olduğu fikri", "Seyirci tercihlerinin film üretimini yönlendirmesi gerektiği ilkesi", "Senaryo yazarının filmde en önemli rol oynadığı anlayışı"],
        correctIndex: 1,
        explanation: "1950'lerde Fransız Yeni Dalga eleştirmenleri (özellikle François Truffaut) tarafından geliştirilen auteur teorisine göre film yönetmeni, tıpkı bir yazar ya da ressam gibi eserinin başlıca yaratıcısıdır ve filmde kişisel bir imza bırakır."
      },
      {
        id: "cin175",
        difficulty: "medium",
        question: "Japon yönetmen Akira Kurosawa'nın dünya sinemasına en büyük katkısı nedir?",
        options: ["Renkli filmin Japonya'ya getirilmesi", "Doğrusal olmayan anlatı yapısı ve görsel stilin Batı sinemasını derinden etkilemesi", "Animasyon tekniklerinin geliştirilmesi", "Ses tasarımının sinemada ilk kez kullanılması"],
        correctIndex: 1,
        explanation: "Akira Kurosawa, Rashomon (1950), Yedi Samuray (1954) ve Ran (1985) gibi yapıtlarıyla hem görsel anlatı hem de kurgu tekniklerinde Batı yönetmenlerini (Leone, Coppola, Lucas) derinden etkilemiştir. Rashomon'un doğrusal olmayan anlatısı sinema tarihinde devrim yaratmıştır."
      },
      {
        id: "cin176",
        difficulty: "easy",
        question: "Hangi aktör 'Joker' rolünü 2019 yapımı filmde canlandırmıştır?",
        options: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto"],
        correctIndex: 1,
        explanation: "Joaquin Phoenix, Todd Phillips'in yönettiği 2019 yapımı Joker filminde Arthur Fleck / Joker'i canlandırmış ve bu performansıyla 92. Akademi Ödülleri'nde En İyi Erkek Oyuncu Oscar'ını kazanmıştır."
      },
      {
        id: "cin177",
        difficulty: "medium",
        question: "İtalyan sinemacı Federico Fellini'nin en önemli yapıtı olarak kabul edilen film hangisidir?",
        options: ["Cinema Paradiso", "La Dolce Vita", "8½", "Amarcord"],
        correctIndex: 2,
        explanation: "Federico Fellini'nin 1963 yapımı 8½ filmi, bir yönetmenin yaratıcı krizi üzerinden bilinçdışı ve rüya imgelerini harmanlayan yarı-otobiyografik yapısıyla sinema tarihinin başyapıtları arasında gösterilir. Film, 'film içinde film' anlatı yapısına öncülük etmiştir."
      },
      {
        id: "cin178",
        difficulty: "medium",
        question: "Renk teorisinde 'tamamlayıcı renkler' hangi renklere verilen addır?",
        options: ["Birbirine karıştırıldığında beyaz elde edilen renkler", "Renk çemberinde birbirine zıt konumda olan renkler", "Aynı tona ait açık ve koyu varyasyonlar", "Sıcak ve soğuk renk grupları"],
        correctIndex: 1,
        explanation: "Tamamlayıcı (complementary) renkler, renk çemberinde birbirine tam karşı konumda yer alan renklerdir. Örneğin kırmızı-yeşil, mavi-turuncu, sarı-mor. Bu renkler yan yana geldiğinde güçlü kontrast oluşturarak birbirini görsel olarak öne çıkarır."
      },
      {
        id: "cin179",
        difficulty: "easy",
        question: "Hangi müzik türü 1950'lerde Amerika'da ortaya çıkmış ve genç nesli derinden etkilemiştir?",
        options: ["Caz", "Blues", "Rock and Roll", "Country"],
        correctIndex: 2,
        explanation: "Rock and roll, 1950'lerin ortasında büyük ölçüde blues, rhythm and blues ve country etkilerini birleştirerek ortaya çıktı. Elvis Presley, Chuck Berry ve Little Richard bu türün öncü isimleri arasındadır."
      },
      {
        id: "cin180",
        difficulty: "hard",
        question: "Empresyonizm sanat akımının en belirgin özelliği nedir?",
        options: ["Gerçekliği fotoğraf kesinliğinde aktarma çabası", "Işığın ve rengin anlık etkisini yakalamak amacıyla boya fırçasını serbest ve görünür tutma", "Doğanın geometrik biçimlere indirgenmesi", "Yalnızca siyah-beyaz ton kullanımı"],
        correctIndex: 1,
        explanation: "Empresyonizm, 19. yüzyılın ikinci yarısında Fransa'da Monet, Renoir ve Degas öncülüğünde gelişen bir sanat akımıdır. Geleneksel atölye anlayışı yerine açık havada çalışmayı benimseyen empresyonistler, anlık ışık ve renk etkilerini görünür kısa fırça darbeleriyle tuvale taşıdı."
      },
      {
        id: "cin181",
        difficulty: "medium",
        question: "Kariyeri boyunca en fazla En İyi Yönetmen Oscar'ı kazanan yönetmen kimdir?",
        options: ["Steven Spielberg", "Martin Scorsese", "William Wyler", "John Ford"],
        correctIndex: 2,
        explanation: "William Wyler, kariyeri boyunca 3 En İyi Yönetmen Oscar'ı kazanarak bu kategoride rekor kırmıştır: Mrs. Miniver (1943), The Best Years of Our Lives (1947) ve Ben-Hur (1960). Spielberg iki, Scorsese bir Oscar'a sahiptir."
      },
      {
        id: "cin182",
        difficulty: "hard",
        question: "Fransız Yeni Dalga (Nouvelle Vague) sinemasının en belirgin özelliği hangisidir?",
        options: ["Büyük stüdyo sistemini benimseme ve geniş kitleye yönelik filmler üretme", "Düşük bütçe, dış mekân çekimi ve auteur yaklaşımı", "Yalnızca tarihi konuları işleme", "Müzikal unsurları ön plana çıkarma"],
        correctIndex: 1,
        explanation: "Fransız Yeni Dalgası (1950'ler-60'lar), stüdyo sistemine karşı çıkarak doğaçlama, düşük bütçe, dış mekân çekimleri, auteur yaklaşımı ve kesintili kurgu (jump cut) gibi unsurları benimsedi. Godard, Truffaut ve Resnais bu akımın başlıca temsilcileridir."
      },
      {
        id: "cin183",
        difficulty: "medium",
        question: "'Guernica' adlı ünlü tabloyu kim yapmıştır ve hangi olayı konu alır?",
        options: ["Vincent van Gogh; Birinci Dünya Savaşı", "Pablo Picasso; 1937 İspanya İç Savaşı'nda Guernica'nın bombalanması", "Salvador Dalí; İspanyol İç Savaşı", "Georges Braque; İkinci Dünya Savaşı"],
        correctIndex: 1,
        explanation: "Pablo Picasso, 1937'de İspanya İç Savaşı sırasında Alman ve İtalyan bombardıman uçaklarının Bask şehri Guernica'yı tahrip etmesi üzerine bu anıt-tabloyu yarattı. Kübist biçim dili ve tek renk paletiyle savaşın vahşetini simgeleyen tablo bugün Madrid'deki Reina Sofía Müzesi'nde sergilenmektedir."
      },
      {
        id: "cin184",
        difficulty: "easy",
        question: "Resim sanatında 'fresk' (fresco) nedir?",
        options: ["Tuval üzerine yağlıboya", "Islak sıva üzerine su bazlı boyayla yapılan duvar resmi", "Taş zemine kazıma tekniği", "Ahşap üzerine yumurtalı boya"],
        correctIndex: 1,
        explanation: "Fresk, yaş sıva üzerine su bazlı pigmentler uygulanarak yapılan duvar ya da tavan resmi tekniğidir. Boya kururken sıvaya işlediğinden son derece dayanıklıdır. Michelangelo'nun Sistine Şapeli tavanı (1512) bu tekniğin en ünlü örneğidir."
      },
      {
        id: "cin185",
        difficulty: "medium",
        question: "Filmde 'diegetic sound' (diegetik ses) ne demektir?",
        options: ["Filmin atmosferi için stüdyoda eklenen arka plan müziği", "Film karakterlerinin de duyabileceği anlatı evreninin içinden gelen ses", "Yönetmenin kendi sesi ve yorumları", "Post-prodüksiyonda eklenen tüm ses efektleri"],
        correctIndex: 1,
        explanation: "Diegetik ses, filmin kurgusal dünyasında var olan ve karakterlerin de duyabileceği seslerdir: konuşma, gerçek mekân gürültüsü, ekranda görünen müzik aleti sesi gibi. Non-diegetik ses ise yalnızca izleyicinin duyduğu fon müziği ya da anlatıcı sesidir."
      },
      {
        id: "cin186",
        difficulty: "easy",
        question: "Birden fazla müzik enstrümanı tarafından birlikte seslendirilen büyük orkestra için yazılmış uzun biçimli müzik formu nedir?",
        options: ["Sonat", "Konçerto", "Senfoni", "Fug"],
        correctIndex: 2,
        explanation: "Senfoni, genellikle dört bölümden oluşan ve tam senfonik orkestra (yaylılar, nefesliler, vurmalılar) tarafından icra edilen büyük ölçekli bir müzik biçimidir. Beethoven, Mozart ve Brahms bu formun en önemli bestecileri arasında yer alır."
      },
      {
        id: "cin187",
        difficulty: "hard",
        question: "Sigmund Freud'un 'Uncanny' (tekinsizlik) kavramı sanatta ne anlama gelir?",
        options: ["Tamamen karanlık olan her görüntü", "Tanıdık olduğu hâlde rahatsız edici bir yabancılık duygusu uyandıran sanatsal unsur", "Ölümü doğrudan temsil eden semboller", "Bilinç dışı dürtülerin bastırılması"],
        correctIndex: 1,
        explanation: "Freud, 1919'da 'Das Unheimliche' adlı makalesinde 'tekinsizliği' (uncanny), tanıdık olanın tuhaf ve ürkütücü bir boyut kazandığı anlar olarak tanımlar. Gotik edebiyat, korku filmleri ve belirli sürrealist sanat yapıtları bu kavramı yoğun biçimde kullanır."
      },
      {
        id: "cin188",
        difficulty: "medium",
        question: "Hangi yönetmen 'Schindler's List', 'Saving Private Ryan' ve 'Lincoln' filmlerini çekmiştir?",
        options: ["Martin Scorsese", "Clint Eastwood", "Steven Spielberg", "Ridley Scott"],
        correctIndex: 2,
        explanation: "Steven Spielberg, ikisi Oscar'lı Schindler's List (1993) ve Saving Private Ryan (1998) ile Lincoln (2012) başta olmak üzere tarihsel dramalar, bilim kurgu filmleri ve macera yapıtlarıyla en etkili film yönetmenlerinden biri sayılır."
      },
      {
        id: "cin189",
        difficulty: "hard",
        question: "Stanley Kubrick'in '2001: A Space Odyssey' filmindeki HAL 9000 adı neyin kısaltmasıdır?",
        options: ["Üç harf ileri kaydırılmış IBM'den", "Proje numarası 2001'den", "Heuristic ALgorithmic Computer'dan", "Kubrick'in rasgele seçtiği harflerden"],
        correctIndex: 2,
        explanation: "HAL 9000, 'Heuristic ALgorithmic Computer' ifadesinin kısaltmasıdır. IBM ile alfabetik yakınlığı konusunda Kubrick ve Arthur C. Clarke kasıtlı bir gizleme olmadığını belirtmiştir. Filmin yapay zeka temasındaki etkileyiciliği bugün hâlâ tartışılmaktadır."
      },
      {
        id: "cin190",
        difficulty: "medium",
        question: "Işıkta (RGB sistemi) tüm renkler birleştirildiğinde hangi renk elde edilir?",
        options: ["Siyah", "Beyaz", "Gri", "Gümüş"],
        correctIndex: 1,
        explanation: "Işıkta (eklemeli renk karışımı - RGB sistemi) kırmızı, yeşil ve mavi tüm renkler birleştirildiğinde beyaz elde edilir. Boyada ise (çıkarıcı renk karışımı - CMYK) tüm renkler karıştırılınca koyu kahverengi-siyahımsı bir renk oluşur."
      }
    ]
  },
  {
    id: "language",
    name: "Dil & Kelime",
    icon: "book-open",
    color: "#f72585",
    gradient: ["#f72585", "#7209b7"],
    image: require("../assets/images/category_language.png"),
    questions: [
      {
        id: "dil1",
        difficulty: "easy",
        question: "Türk alfabesi kaç harften oluşur?",
        options: ["26", "28", "29", "32"],
        correctIndex: 2,
        explanation: "Türk alfabesi, 1928 yılında Latin kökenli olarak kabul edilmiş ve 29 harften oluşmaktadır. Bu harflerin 8'i sesli (a, e, ı, i, o, ö, u, ü), 21'i sessiz harftir."
      },
      {
        id: "dil2",
        difficulty: "easy",
        question: "Türkçe hangi dil ailesine aittir?",
        options: ["Hint-Avrupa dil ailesi", "Semitik dil ailesi", "Türk dil ailesi (Altay)", "Çin-Tibet dil ailesi"],
        correctIndex: 2,
        explanation: "Türkçe, Altay dil teorisine göre sınıflandırılan Türk dil ailesine aittir. Bu aile; Özbekçe, Kazakça, Uygurca, Azerbaycanca ve Kırgızca gibi dilleri de kapsamaktadır."
      },
      {
        id: "dil3",
        difficulty: "easy",
        question: "Türkiye'de Latin alfabesine geçiş hangi yılda gerçekleşmiştir?",
        options: ["1923", "1928", "1932", "1935"],
        correctIndex: 1,
        explanation: "Türkiye, 1 Kasım 1928 tarihinde Arap kökenli Osmanlı alfabesini bırakarak Latin harflerinden oluşan yeni Türk alfabesini kabul etmiştir. Bu reformla okuma yazma oranı kısa sürede önemli ölçüde artmıştır."
      },
      {
        id: "dil4",
        difficulty: "easy",
        question: "Dünyada en çok insan tarafından konuşulan dil hangisidir?",
        options: ["İspanyolca", "İngilizce", "Mandarin Çincesi", "Hintçe"],
        correctIndex: 2,
        explanation: "Mandarin Çincesi, yaklaşık 1 milyar 100 milyon anadil konuşucusuyla dünyada en çok konuşulan dildir. İkinci sırada İspanyolca, üçüncü sırada ise İngilizce yer almaktadır."
      },
      {
        id: "dil5",
        difficulty: "easy",
        question: "'Serendipity' (seredipite) kelimesi ne anlama gelir?",
        options: ["Derin hüzün", "Güzel bir tesadüf", "Sonsuz merak", "Hızlı değişim"],
        correctIndex: 1,
        explanation: "Serendipity, beklenmedik bir anda ya da tesadüf sonucu güzel ve değerli bir şey bulmayı ifade eder. Türkçe'de tam karşılığı olmayan bu kelime, İngiliz yazar Horace Walpole tarafından 1754'te türetilmiştir."
      },
      {
        id: "dil6",
        difficulty: "easy",
        question: "Hangi kelime Türkçe kökenlidir?",
        options: ["Kalem", "Defter", "Ordu", "Kitap"],
        correctIndex: 2,
        explanation: "'Ordu' kelimesi saf Türkçe kökenlidir ve Moğolcaya da geçmiştir. 'Kalem' Arapçadan, 'defter' Farsçadan, 'kitap' ise Arapçadan Türkçeye girmiştir."
      },
      {
        id: "dil7",
        difficulty: "easy",
        question: "'Karikatür' kelimesi hangi dilden Türkçeye geçmiştir?",
        options: ["Almanca", "Fransızca", "İtalyanca", "İspanyolca"],
        correctIndex: 1,
        explanation: "'Karikatür' kelimesi Fransızca 'caricature' sözcüğünden Türkçeye geçmiştir. Fransızca bu kelime ise İtalyanca 'caricatura'dan alınmış olup 'abart, yükleme' anlamına gelir."
      },
      {
        id: "dil8",
        difficulty: "easy",
        question: "Türkçede büyük ünlü uyumu ne demektir?",
        options: ["Kelimedeki tüm harflerin büyük yazılması", "Ünlü harflerin art arda gelmesi", "Bir kelimedeki ünlülerin sırt ya da ön damak ünlüsü olarak uyum içinde olması", "Bir cümlede tüm ünlülerin eşit sayıda olması"],
        correctIndex: 2,
        explanation: "Büyük ünlü uyumu; bir kelimede art ünlüler (a, ı, o, u) ya da ön ünlüler (e, i, ö, ü) arasında uyum olmasını gerektirir. Örneğin 'çocuk' kelimesinde tümü art ünlüdür; 'güzel' kelimesinde tümü ön ünlüdür."
      },
      {
        id: "dil9",
        difficulty: "easy",
        question: "Aşağıdaki hangisi bir palindromdur (ters çevrildiğinde aynı okunan)?",
        options: ["Kalem", "Ata", "Masa", "Kitap"],
        correctIndex: 1,
        explanation: "Palindrom, ters çevrildiğinde de aynı okunan sözcük ya da cümledir. 'Ata' kelimesi a-t-a olup ters okunduğunda da 'ata' dır. Başka Türkçe palindrom örnekleri: 'ana', 'ebe', 'kazak'."
      },
      {
        id: "dil10",
        difficulty: "easy",
        question: "'Mütevazı' kelimesinin doğru anlamı hangisidir?",
        options: ["Kibirli, kendini beğenmiş", "Alçak gönüllü, gösterişsiz", "Zengin ve şatafatlı", "Sert ve kararlı"],
        correctIndex: 1,
        explanation: "'Mütevazı' Arapça kökenli bir kelimedir ve alçak gönüllü, kibar, gösterişten uzak anlamına gelir. Yanlışlıkla 'müteveffâ' (ölmüş, merhum) ile karıştırılmamalıdır."
      },
      {
        id: "dil11",
        difficulty: "easy",
        question: "Dünyanın en fazla ülkede resmi dil olan dili hangisidir?",
        options: ["Fransızca", "İspanyolca", "İngilizce", "Arapça"],
        correctIndex: 2,
        explanation: "İngilizce, yaklaşık 60 ülkede resmi ya da ortak resmi dil statüsündedir. İkinci sırada Fransızca (~29 ülke), üçüncü sırada ise Arapça (~25 ülke) yer alır."
      },
      {
        id: "dil12",
        difficulty: "easy",
        question: "'Hezeyan' kelimesi ne anlama gelir?",
        options: ["Derin uyku", "Anlamsız, tutarsız konuşma ya da düşünce", "Coşkulu sevinç", "Ağır yorgunluk"],
        correctIndex: 1,
        explanation: "'Hezeyan' Arapça kökenlidir ve anlamsız, tutarsız, gerçekle bağdaşmayan konuşma ya da düşünce hâlini ifade eder. Tıp dilinde ateşli hastalıklarda görülen bilinç bulanıklığına da hezeyan denir."
      },
      {
        id: "dil13",
        difficulty: "easy",
        question: "Türkçede 'ç' harfi hangi sesi verir?",
        options: ["'c' gibi yumuşak ses", "'ch' gibi sert, ötümsüz ses", "'j' gibi fısıltılı ses", "'dj' gibi çift ses"],
        correctIndex: 1,
        explanation: "'Ç' harfi Türkçede 'ch' in İngilizce 'chair' kelimesindeki gibi sert, ötümsüz bir sesi temsil eder. 'C' ise buna karşılık yumuşak ve ötümlü sesi verir (İngilizce 'judge' deki 'dg' gibi)."
      },
      {
        id: "dil14",
        difficulty: "easy",
        question: "Dünya üzerinde yaklaşık kaç dil konuşulmaktadır?",
        options: ["1.000 – 1.500", "2.500 – 3.000", "7.000 – 7.500", "12.000 – 15.000"],
        correctIndex: 2,
        explanation: "Dünyada yaklaşık 7.000 ile 7.500 arasında dil konuşulmaktadır. Ancak bu dillerin yaklaşık yarısının yüzyılın sonuna kadar yok olma riski taşıdığı tahmin edilmektedir."
      },
      {
        id: "dil15",
        difficulty: "easy",
        question: "'Amalgam' kelimesinin anlamı nedir?",
        options: ["Ayrılık, parçalanma", "Farklı unsurların bir araya gelmesiyle oluşan karışım", "Metalik bir zehir", "Derin bir sessizlik"],
        correctIndex: 1,
        explanation: "'Amalgam' kelimesi, farklı unsurların birleşiminden oluşan karışımı ya da alaşımı ifade eder. Dişçilikte kullanılan cıva-gümüş alaşımına da amalgam denir. Mecazi anlamda 'harmanlama' ya da 'sentez' anlamında kullanılır."
      },
      {
        id: "dil16",
        difficulty: "easy",
        question: "Aşağıdaki hangi kelime yazımı doğrudur?",
        options: ["Faalliyet", "Faaliyet", "Faliyet", "Falliyet"],
        correctIndex: 1,
        explanation: "'Faaliyet' kelimesi Arapça kökenlidir ve TDK yazım kurallarına göre doğru yazımı 'faaliyet' şeklindedir. Kelime 'f-a-a-l-i-y-e-t' olarak yazılır; tek 'l' ile ve iki 'a' ile yazılır."
      },
      {
        id: "dil17",
        difficulty: "easy",
        question: "Örtmece (euphemism) ne demektir?",
        options: ["Bir kelimeyi ters anlamda kullanmak", "Kaba ya da rahatsız edici bir kavramı yumuşak bir ifadeyle dile getirmek", "Bir sözcüğü gereksiz yere tekrar etmek", "Yabancı kelimeler kullanmak"],
        correctIndex: 1,
        explanation: "Örtmece (euphemism), toplumda kaba, tabu ya da rahatsız edici bulunan kavramları daha yumuşak, nazik ifadelerle anlatma sanatıdır. Örneğin 'öldü' yerine 'hayatını kaybetti' ya da 'vefat etti' demek bir örtmecedir."
      },
      {
        id: "dil18",
        difficulty: "easy",
        question: "Dünyanın bilinen en eski yazı sistemi hangisidir?",
        options: ["Mısır hiyeroglifleri", "Çivi yazısı (Sümer)", "Fenike alfabesi", "Çin piktogramları"],
        correctIndex: 1,
        explanation: "Mezopotamya'da Sümerler tarafından geliştirilen çivi yazısı (cuneiform), yaklaşık MÖ 3400'e tarihlenen en eski yazı sistemi olarak kabul edilmektedir. Kil tabletler üzerine kamış kalıpla baskı yapılarak oluşturulmuştur."
      },
      {
        id: "dil19",
        difficulty: "easy",
        question: "'Fonetik' bilim dalı neyi inceler?",
        options: ["Kelimelerin tarihsel kökenlerini", "Dil seslerinin fiziksel özelliklerini ve üretimini", "Dilbilgisi kurallarını", "Şiir ve ritim yapısını"],
        correctIndex: 1,
        explanation: "Fonetik (ses bilgisi), insan dilindeki seslerin fiziksel özelliklerini, üretimini, iletimini ve algılanmasını inceleyen dilbilim dalıdır. Bir sesi nasıl çıkardığımız, hangi organları kullandığımız fonetik ile incelenir."
      },
      {
        id: "dil20",
        difficulty: "easy",
        question: "Aşağıdaki hangi kelime Fransızca kökenlidir?",
        options: ["Fıstık", "Tren", "Çanta", "Kepçe"],
        correctIndex: 1,
        explanation: "'Tren' kelimesi Fransızca 'train' sözcüğünden Türkçeye geçmiştir. 'Fıstık' ve 'çanta' Arapça kökenli, 'kepçe' ise Türkçe kökenlidir."
      },
      {
        id: "dil21",
        difficulty: "easy",
        question: "Dile ait bir özellik olarak 'aglutinatif' (eklemeli) ne anlama gelir?",
        options: ["Dilde hiç ek kullanılmaz", "Kelimeler çok sayıda ek alarak yeni anlamlar kazanır", "Her sözcük ayrı ayrı yazılır", "Dil tamamen resmi kurallardan oluşur"],
        correctIndex: 1,
        explanation: "Aglutinatif (eklemeli) dillerde sözcükler, çok sayıda ek alarak yeni anlam ve görevler kazanır. Türkçe tipik bir eklemeli dildir. Örneğin 'ev' sözcüğü 'evlerinizden' biçiminde çok ek alabilir."
      },
      {
        id: "dil22",
        difficulty: "easy",
        question: "'Sinestezi' edebi sanatı ne anlama gelir?",
        options: ["Bir duyuyu başka bir duyuyla ifade etmek", "Karşıt iki kavramı yan yana kullanmak", "Bir sözcüğü mecazi anlamda kullanmak", "Sesi taklit eden kelimeler kullanmak"],
        correctIndex: 0,
        explanation: "Sinestezi, bir duyuya ait algıyı başka bir duyunun sözcükleriyle anlatma sanatıdır. Örneğin 'kadifemsi bir ses', 'acı bir bakış' ya da 'mor bir hüzün' ifadeleri sinesteziye örnektir."
      },
      {
        id: "dil23",
        difficulty: "easy",
        question: "Türkçede 'ğ' harfi nasıl telaffuz edilir?",
        options: ["'g' gibi sert okunur", "Genellikle önceki sesi uzatır ya da sessiz kalır", "'j' gibi fısıltılı okunur", "'k' gibi sert okunur"],
        correctIndex: 1,
        explanation: "'Ğ' (yumuşak ge) Türkçede genellikle telaffuz edilmez; kendisinden önceki sesi uzatır. Örneğin 'dağ' kelimesinde 'ğ' okunmaz, 'a' sesi uzar. Ancak bazı ağızlarda hafif bir 'y' sesi gibi duyulabilir."
      },
      {
        id: "dil24",
        difficulty: "easy",
        question: "Aşağıdaki hangi ifade 'haploloji' kavramını tanımlar?",
        options: ["Bir kelimenin birden fazla anlamı olması", "Benzer iki heceyi yan yana söylemekten kaçınmak için birini düşürmek", "Dil seslerinin birbirine benzeşmesi", "Yabancı kelimeleri yerelleştirmek"],
        correctIndex: 1,
        explanation: "Haploloji, benzer ya da aynı olan iki heceyi yan yana söylemek yerine birini düşürme eğilimidir. Türkçede 'şişecilik' yerine 'şişçilik' söylenmesi bu olguya örnektir."
      },
      {
        id: "dil25",
        difficulty: "easy",
        question: "'İstasyon' kelimesi hangi dilden Türkçeye geçmiştir?",
        options: ["Arapçadan", "Almancadan", "Fransızcadan", "İtalyancadan"],
        correctIndex: 2,
        explanation: "'İstasyon' kelimesi Fransızca 'station' sözcüğünden Türkçeye geçmiştir. Fransızca bu sözcük ise Latince 'statio' (durma yeri) kökünden türemiştir."
      },
      {
        id: "dil26",
        difficulty: "easy",
        question: "Türkçede yansıma (taklidi) sözcüklere hangi örnek verilebilir?",
        options: ["Kitap", "Hışırtı", "Masa", "Okul"],
        correctIndex: 1,
        explanation: "Yansıma sözcükler, doğadaki sesleri taklit eden kelimelerdir. 'Hışırtı', yaprakların çıkardığı sesi taklit ettiğinden bir yansıma kelimesidir. Diğer örnekler: 'fısıltı', 'gürültü', 'miyav', 'havlama'."
      },
      {
        id: "dil27",
        difficulty: "easy",
        question: "Türkçenin en eski yazılı belgesi kabul edilen anıt hangisidir?",
        options: ["Kutadgu Bilig", "Orhun Yazıtları", "Divan-ü Lügati't-Türk", "Codex Cumanicus"],
        correctIndex: 1,
        explanation: "Orhun (Göktürk) Yazıtları, 8. yüzyılda (720–735) dikilen ve Türkçenin bilinen en eski yazılı belgesi olarak kabul edilen anıtlardır. Bilge Kağan ve Kül Tigin adına diktirilen bu taşlar, bugünkü Moğolistan'da yer almaktadır."
      },
      {
        id: "dil28",
        difficulty: "easy",
        question: "'Kıymet' kelimesi hangi dil kökenlidir?",
        options: ["Türkçe", "Farsça", "Arapça", "Rumca"],
        correctIndex: 2,
        explanation: "'Kıymet' kelimesi Arapça 'qīma' (değer) kökünden türemiştir. Türkçe karşılığı 'değer' olan bu kelime, Osmanlı Türkçesi aracılığıyla günümüz Türkçesine yerleşmiştir."
      },
      {
        id: "dil29",
        difficulty: "easy",
        question: "Türkçe'de 'ikiz sözcükler' nedir?",
        options: ["Aynı anlamdaki iki farklı kelime", "Aralarına çizgi ya da boşluk konarak yan yana yazılan ve birlikte anlam kazanan sözcük çiftleri", "Arka arkaya iki kez tekrar edilen kelimeler", "Zıt anlamlı iki kelime"],
        correctIndex: 1,
        explanation: "İkiz sözcükler (ikileme), iki sözcüğün yan yana gelerek yeni ya da pekiştirilmiş bir anlam oluşturduğu yapılardır. Örnekler: 'büyük küçük', 'eğri büğrü', 'çoluk çocuk', 'allak bullak'. Bu yapılar Türkçenin zengin kelime oyunlarından biridir."
      },
      {
        id: "dil30",
        difficulty: "easy",
        question: "Aşağıdaki hangi dil Türkçeyle en yakın akraba olan dildir?",
        options: ["Macarca", "Moğolca", "Azerbaycanca", "Farsça"],
        correctIndex: 2,
        explanation: "Azerbaycanca, Türkçeyle aynı Oğuz Türkçesi alt grubuna ait olduğundan en yakın akraba dildir. İki dil arasındaki benzerlik o kadar yüksektir ki Türkçe ve Azerbaycanca konuşanlar büyük ölçüde birbirini anlayabilmektedir."
      },
      {
        id: "dil31",
        difficulty: "easy",
        question: "'Palindrom' ne anlama gelir?",
        options: ["Yalnızca sesli harflerden oluşan sözcük", "Soldan sağa ve sağdan sola aynı okunan sözcük ya da cümle", "Yabancı dilden alınan sözcük", "Birden fazla anlamı olan sözcük"],
        correctIndex: 1,
        explanation: "Palindrom, soldan sağa ve sağdan sola aynı biçimde okunan sözcük, sayı ya da cümledir. Örnekler: 'kayak', 'radar', 'kanak'. Sayısal örnek: 121, 12321. Palindromlar dil oyunlarında ve kriptografide sıklıkla karşımıza çıkar."
      },
      {
        id: "dil32",
        difficulty: "easy",
        question: "Türkçede 'zarf' (belirteç) hangi işlevi yerine getirir?",
        options: ["İsimlerin yerini tutar", "Eylemleri, sıfatları ya da başka zarfları niteler", "Özneyi belirtir", "Cümleleri birbirine bağlar"],
        correctIndex: 1,
        explanation: "Zarf (belirteç), fiilleri, sıfatları ya da başka zarfları niteleyen sözcük türüdür. 'Hızlı koştu' cümlesinde 'hızlı' zarftır; 'koştu' eylemini nitelemektedir. Zaman, durum, miktar ve yer zarfları başlıca alt türleridir."
      },
      {
        id: "dil33",
        difficulty: "easy",
        question: "'Oksimoron' söz sanatı nedir?",
        options: ["Sözcüğün farklı seslerle yinelenmesi", "Birbiriyle çelişen iki kavramı bir arada kullanmak", "Bir duyuyu başka bir duyuyla anlatmak", "Önemli bir şeyi küçümseyerek anlatmak"],
        correctIndex: 1,
        explanation: "Oksimoron, birbiriyle çelişen ya da zıt anlama gelen iki sözcüğü yan yana koyarak anlam derinliği oluşturan söz sanatıdır. 'Acı tatlı', 'sessiz çığlık', 'karanlık aydınlık' ve 'yaşayan ölü' oksimoron örnekleridir."
      },
      {
        id: "dil34",
        difficulty: "easy",
        question: "İngilizce alfabesinde kaç harf bulunur?",
        options: ["24", "25", "26", "27"],
        correctIndex: 2,
        explanation: "İngilizce alfabesi A'dan Z'ye 26 harften oluşur. Karşılaştırmak gerekirse Türkçe alfabesi 29, Rusça Kiril alfabesi 33 ve Arapça alfabesi 28 harfe sahiptir."
      },
      {
        id: "dil35",
        difficulty: "easy",
        question: "'Empati' sözcüğünün Türkçe karşılığı nedir?",
        options: ["Sempati", "Duygudaşlık", "Sevecenlik", "Hoşgörü"],
        correctIndex: 1,
        explanation: "Empati, başkasının duygularını ve bakış açısını anlama yetisidir; önerilen Türkçe karşılığı 'duygudaşlık'tır. Yunanca 'em-' (içinde) ve 'pathos' (his, acı) köklerinden gelir; sempati ise genel olarak bir kişiye duyulan yakınlık ve üzüntü paylaşımını ifade eder."
      },
      {
        id: "dil36",
        difficulty: "easy",
        question: "Dünyada en fazla konuşulan yapay (tasarlanmış) yardımcı dil hangisidir?",
        options: ["Volapük", "İdo", "Interlingua", "Esperanto"],
        correctIndex: 3,
        explanation: "Esperanto, Leh göz doktoru L.L. Zamenhof tarafından 1887'de kamuoyuyla paylaşılmış ve günümüzde en fazla konuşulan yapay yardımcı dildir. Dünya genelinde yaklaşık 2 milyon konuşucusu olduğu tahmin edilmektedir."
      },
      {
        id: "dil37",
        difficulty: "easy",
        question: "'Metafor' ile 'benzetme (teşbih)' arasındaki temel fark nedir?",
        options: ["Metaforda 'gibi, sanki' gibi sözcükler kullanılır, benzetmede kullanılmaz", "Benzetmede 'gibi, sanki' gibi sözcükler kullanılır, metaforda kullanılmaz", "İkisi tamamen aynı söz sanatıdır", "Metafor yalnızca şiirde, benzetme yalnızca nesirde kullanılır"],
        correctIndex: 1,
        explanation: "Benzetmede (teşbihte) 'gibi', 'sanki', 'kadar' gibi karşılaştırma ögeleri açıkça kullanılır ('aslan gibi güçlü'). Metaforda ise iki unsur doğrudan özdeşleştirilir, bağlaç kullanılmaz ('O bir aslandır'). Metafor, daha yoğun ve dolaysız bir imge oluşturur."
      },
      {
        id: "dil38",
        difficulty: "medium",
        question: "'Deyim' nasıl tanımlanır?",
        options: ["Gerçek anlamında kullanılan tek sözcük", "Sözcüklerin gerçek anlamından saptırılıp kalıplaştığı mecazi söz öbeği", "Yabancı dilden alınan ifade", "İki sözcüğün birleşimiyle oluşan yeni kelime"],
        correctIndex: 1,
        explanation: "Deyim, sözcüklerin gerçek anlamlarının dışında kalıplaşmış ve mecazi bir anlam kazandığı ifadedir. 'Ağzı sıkı', 'dal budak salmak', 'gözü tok olmak' Türkçe deyim örnekleridir. Deyimler kültürel birikimin yansımasıdır."
      },
      {
        id: "dil39",
        difficulty: "medium",
        question: "Türkçede 'büyük ünlü uyumu' kuralı neyi ifade eder?",
        options: ["Sözcükteki tüm ünsüzlerin uyumlu olması", "Sözcük içindeki ünlülerin hepsinin ya kalın ya da ince olması", "Sözcüğün sonundaki sessizin değişmesi", "Yabancı sözcüklerin Türkçe kurallara uydurulması"],
        correctIndex: 1,
        explanation: "Büyük ünlü uyumu (palatal harmony), Türkçede bir sözcük içindeki ünlülerin tümünün ya kalın (a, ı, o, u) ya da ince (e, i, ö, ü) grupta yer alması kuralıdır. 'Ev-ler-de-ki-ler-den' kelimesindeki tüm ünlüler incedir; bu kural Türkçenin temel ses bilgisi özelliklerinden biridir."
      },
      {
        id: "dil40",
        difficulty: "medium",
        question: "Türkçede 'ikileme' (ikiz sözcük) ne anlama gelir?",
        options: ["Aynı sözcüğün iki kez peş peşe yazılması", "İki sözcüğün birleşerek yeni ya da pekiştirilmiş anlam oluşturduğu yapı", "Zıt anlamlı iki sözcüğün bir cümlede kullanılması", "Yabancı sözcüklere Türkçe ek eklenmesi"],
        correctIndex: 1,
        explanation: "İkileme (ikileme ya da tekrar), iki sözcüğün yan yana gelerek anlam pekiştirmesi ya da yeni bir anlam üretmesiyle oluşan yapıdır. Örnekler: 'büyük küçük', 'eğri büğrü', 'allak bullak', 'çoluk çocuk'. İkilemeler Türkçenin söz varlığını zenginleştiren önemli yapılardandır."
      },
      {
        id: "dil41",
        difficulty: "medium",
        question: "Türkçede kaç ünlü (sesli) harf vardır?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Türkçede 8 ünlü harf bulunur: a, e, ı, i, o, ö, u, ü. Bu sekiz ünlü, kalın-ince ve düz-yuvarlak gibi özelliklerine göre gruplandırılır; büyük ünlü uyumu adı verilen ses uyumu kuralının temelini oluşturur."
      },
      {
        id: "dil42",
        difficulty: "medium",
        question: "'Sinonim' ne anlama gelir?",
        options: ["Zıt anlamlı sözcük", "Eş anlamlı sözcük", "Çok anlamlı sözcük", "Ses benzerliği olan sözcük"],
        correctIndex: 1,
        explanation: "Sinonim (eş anlamlı sözcük), aynı ya da çok yakın anlamı taşıyan iki ayrı sözcüktür. Örneğin 'ev' ve 'konut', 'güzel' ve 'şık' sinonim çiftleridir. Dilbilimde anlamca tam örtüşen iki sözcüğün bulunması nadirdir; çoğunlukla nüans farkları mevcuttur."
      },
      {
        id: "dil43",
        difficulty: "medium",
        question: "'Antonim' ne anlama gelir?",
        options: ["Eş anlamlı sözcük", "Zıt anlamlı sözcük", "Yabancı kökenli sözcük", "Kısaltma"],
        correctIndex: 1,
        explanation: "Antonim, zıt anlamlı sözcük demektir. 'Sıcak–soğuk', 'aydınlık–karanlık', 'açık–kapalı' gibi örnekler antonim çiftleridir. Antonimler sözlükbilimde anlamsal karşıtlık ilişkisiyle tanımlanır; bağlam değiştiğinde zıtlık ilişkisi de değişebilir."
      },
      {
        id: "dil44",
        difficulty: "medium",
        question: "'Aforizma' ne demektir?",
        options: ["Uzun bir destanı kısaltma", "Kısa ve özlü düşünce cümlesi/vecize", "Olumsuz anlam taşıyan söz", "Yabancı dilde yazılmış metin"],
        correctIndex: 1,
        explanation: "Aforizma, derin bir düşünceyi ya da deneyimi son derece kısa ve çarpıcı biçimde ifade eden cümledir. Yunan filozofu Hipokrat'ın tıbbi ilkeleri için kullandığı 'aphorismos' sözcüğünden gelir. 'Bana kitaplığını göster, sana kim olduğunu söyleyeyim.' örnek bir aforizmadır."
      },
      {
        id: "dil45",
        difficulty: "medium",
        question: "'Öfemizm' (eufemizm) ne anlama gelir?",
        options: ["Abartılı anlatım", "Kaba bir kavramı daha nazik bir ifadeyle karşılama", "Sözcüğün gerçek anlamı dışında kullanımı", "Argo sözcük"],
        correctIndex: 1,
        explanation: "Öfemizm, kaba, çirkin ya da rahatsız edici bir kavramı daha yumuşak veya kabul edilebilir bir ifadeyle karşılamaktır. Örneğin 'hayatını kaybetti' yerine 'öldü' yerine kullanılması bir öfemizmdir. Politikada, tıpta ve günlük dilde sıkça başvurulan bir dil stratejisidir."
      },
      {
        id: "dil46",
        difficulty: "medium",
        question: "İngilizce'de en sık kullanılan kelime hangisidir?",
        options: ["'a'", "'is'", "'the'", "'and'"],
        correctIndex: 2,
        explanation: "İngilizce metinlerde en sık kullanılan kelime 'the' (belirli artikül/tanımlık)'dir. Pek çok frekans analizi çalışması 'the'nin toplam sözcük kullanımının yaklaşık %7'sini oluşturduğunu göstermektedir. İngilizce'de özel isimlerin önünde veya tanımlanmış nesneleri göstermek için kullanılır."
      },
      {
        id: "dil47",
        difficulty: "medium",
        question: "'Alliterasyon' (aliterasyon) sanatı nedir?",
        options: ["İki dilde birden yazılmış metin", "Aynı sesle başlayan sözcükleri arka arkaya kullanma sanatı", "Sözcükleri tersine okuma", "Eski sözcükleri yeniden canlandırma"],
        correctIndex: 1,
        explanation: "Alliterasyon (aliterasyon), art arda gelen sözcüklerin aynı sesle ya da harfle başlamasıdır. Ses estetiğini güçlendiren bu sanat, şiir ve edebiyatta yaygın biçimde kullanılır. Türkçede 'Sarı saçlı sarı gözlü sararıp solmuş bir sevgili' alliterasyona örnek verilebilir."
      },
      {
        id: "dil48",
        difficulty: "medium",
        question: "'Anagram' ne anlama gelir?",
        options: ["İki sözcüğün birleşmesi", "Bir sözcüğün harflerinin yeniden düzenlenmesiyle farklı sözcük ya da cümle oluşturma", "Sözcüğün kısaltılmış hali", "Yabancı sözcüğün Türkçeye alınması"],
        correctIndex: 1,
        explanation: "Anagram, bir sözcük ya da cümlenin harflerinin yeniden düzenlenerek farklı bir anlam oluşturulmasıdır. İngilizce'de 'listen' → 'silent', 'earth' → 'heart' bilinen örneklerdir. Türkçede 'arı' → 'ira', 'kara' → 'arka' gibi anagramlar bulunabilir."
      },
      {
        id: "dil49",
        difficulty: "medium",
        question: "Anadil olarak konuşanların sayısı bakımından dünyanın en yaygın dili hangisidir?",
        options: ["İspanyolca", "İngilizce", "Mandarin Çincesi", "Hintçe (Hindi)"],
        correctIndex: 2,
        explanation: "Mandarin Çincesi (Standart Çince), yaklaşık 900 milyon ile 1 milyar anadil konuşanıyla dünyanın en yaygın anadilidir. Toplam konuşucu sayısı (ikinci dil dahil) bakımından ise İngilizce daha geniş bir coğrafyada kullanılmaktadır."
      },
      {
        id: "dil50",
        difficulty: "medium",
        question: "Türkçede kaç sessiz (ünsüz) harf bulunur?",
        options: ["19", "20", "21", "23"],
        correctIndex: 2,
        explanation: "Türkçe alfabesinde 29 harf yer alır; bunların 21'i sessiz (ünsüz) harftir: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z. Geri kalan 8'i ünlüdür. Türkçe, düzenli ses yapısıyla dünyanın en düzenli yazı-ses uyumuna sahip dillerinden biridir."
      },
      {
        id: "dil51",
        difficulty: "medium",
        question: "'Homonim' nedir?",
        options: ["Aynı anlama gelen farklı sözcükler", "Yazılışı ve okunuşu aynı ama anlamı farklı sözcükler", "Yabancı kökenli sözcükler", "Eril ve dişil karşılığı olan sözcükler"],
        correctIndex: 1,
        explanation: "Homonim, yazılışı ve söylenişi aynı olan ama birbirinden bağımsız anlamlar taşıyan sözcüklerdir. Türkçede 'yüz' (rakam 100 / insan yüzü / yüzmek eylemi), 'kara' (renk / toprak / kötü) bilinen homonim örnekleridir. Dilbilimde bu durum 'sözcük çok anlamlılığı'ndan ayrı tutulur."
      },
      {
        id: "dil52",
        difficulty: "medium",
        question: "Türkçede 'bağlaç' ne işlevi görür?",
        options: ["Fiil çekimi yapar", "Sözcük, sözcük öbeği veya cümleleri birbirine bağlar", "Ad durumu bildirir", "Nesneyi belirler"],
        correctIndex: 1,
        explanation: "Bağlaç, sözcükleri, sözcük öbeklerini veya cümleleri birbiriyle bağlayan ve gramer ilişkisini gösteren sözcük türüdür. Türkçede 've, ya, ama, fakat, çünkü, ise, de/da' sık kullanılan bağlaçlardır. Bağlaçların büyük çoğunluğu başlı başına anlamı olmayan gramer öğeleridir."
      },
      {
        id: "dil53",
        difficulty: "medium",
        question: "'Retorik soru' nedir?",
        options: ["Yanıtı bilinmeyen soru", "Cevap beklenmeyen, vurgu ya da etki amacıyla sorulan soru", "Cevabı çok uzun olan soru", "Yanlış gramerle kurulan soru"],
        correctIndex: 1,
        explanation: "Retorik soru, gerçek bir cevap beklenmeden etkiyi güçlendirmek, düşündürmek ya da karşı tarafı yönlendirmek amacıyla sorulan sorudur. 'Bu kadar açık bir gerçeği görmemek mümkün mü?' gibi cümleler retorik soru örneklerinden biridir. Özellikle hitabet ve edebiyatta yaygın kullanılır."
      },
      {
        id: "dil54",
        difficulty: "medium",
        question: "'Lakonik' ifade ne anlama gelir?",
        options: ["Uzun ve ayrıntılı anlatım", "Az sözcükle çok şey anlatan kısa ve yoğun ifade", "Şiirsel ve süslü anlatım", "Yüksek sesle söylenen söz"],
        correctIndex: 1,
        explanation: "Lakonik ifade; az sözcükle, öz ve etkili biçimde çok şey anlatma tarzıdır. Bu terim, sözlü anlatımda kısalığıyla bilinen antik Yunan'ın Sparta bölgesi (Lakonya) sakinlerine atıfla kullanılır. 'Siz buyurun, biz de gelelim.' yanıtı verilen bir tehdit karşısında Spartalıların verdiği efsanevi kısa yanıt buna örnek gösterilir."
      },
      {
        id: "dil55",
        difficulty: "medium",
        question: "Sözlük yazma ve derleme bilimine ne denir?",
        options: ["Dilbilim (linguistik)", "Fonetik", "Leksikografi (sözlükbilim)", "Morfoloji"],
        correctIndex: 2,
        explanation: "Leksikografi (sözlükbilim), sözlüklerin hazırlanması, düzenlenmesi ve içeriğine ilişkin ilkeleri inceleyen dilbilim dalıdır. Sözlükbilimci, sözcüklerin anlamını, kökenini, kullanım biçimlerini ve örnek cümlelerini derleyerek sözlük oluşturur."
      },
      {
        id: "dil56",
        difficulty: "medium",
        question: "Türkçede 'isim tamlaması' nedir?",
        options: ["Bir fiil ile ismin bir araya gelmesi", "Bir ismin sıfatla nitelenmesi", "Bir ismin başka bir ismi nitelediği ve iki isim arasında anlam ilişkisi kuran yapı", "Zamirin yüklem görevini üstlenmesi"],
        correctIndex: 2,
        explanation: "İsim tamlaması, bir ismin (tamlayan) başka bir ismi (tamlanan) nitelediği ya da onunla anlam ilişkisi kurduğu sözdizimsel yapıdır. 'Türkiye'nin bayrağı' (belirtili isim tamlaması) ve 'demir kapı' (belirtisiz isim tamlaması) örnek verilebilir."
      },
      {
        id: "dil57",
        difficulty: "medium",
        question: "'Akronim' nedir?",
        options: ["Eski dilde kullanılan sözcük", "Bir kelimenin zıt anlamlısı", "Birden fazla sözcüğün ilk harflerinin bir araya gelerek oluşturduğu kısaltma", "Yabancı sözcüğün ses uyumuna göre değiştirilmiş hali"],
        correctIndex: 2,
        explanation: "Akronim, birden fazla sözcükten oluşan bir öbeğin ilk harflerinin birleştirilerek yeni bir kısaltma oluşturulmasıdır. 'NATO' (North Atlantic Treaty Organization), 'UNESCO' ve Türkçede 'TBMM' (Türkiye Büyük Millet Meclisi) bilinen akronim örnekleridir."
      },
      {
        id: "dil58",
        difficulty: "medium",
        question: "'Epitet' ne demektir?",
        options: ["İki zıt kavramın bir arada kullanımı", "Bir kişi ya da nesneyi niteleyen kalıplaşmış sıfat", "Kısaltılmış sözcük", "Tekrar eden ses yapısı"],
        correctIndex: 1,
        explanation: "Epitet, belirli bir kişi, nesne ya da kavramı tanımlamak için sıklıkla kullanılan, neredeyse kalıplaşmış sıfat ya da nitelendirmedir. 'Bilge Kral Süleyman', 'Demir Lady', 'Mavi Tuna' gibi ifadeler epitet örnekleridir. Homeros'un destanlarındaki 'hızlı ayaklı Aşil' de klasik bir epitettir."
      },
      {
        id: "dil59",
        difficulty: "medium",
        question: "'Mecaz-ı mürsel' (ad aktarması) sanatı nedir?",
        options: ["Benzetme yoluyla anlam aktarma", "İki zıt kavramı bir arada kullanma", "Parça-bütün veya neden-sonuç ilişkisine dayalı söz sanatı", "Ses benzerliğine dayalı söz oyunu"],
        correctIndex: 2,
        explanation: "Mecaz-ı mürsel (ad aktarması), benzerlik ilgisi dışında, parça-bütün, neden-sonuç, yer-insan gibi yakınlık ilgisiyle bir sözcüğün başka bir sözcük yerine kullanılmasıdır. Örneğin 'bütün okul sınava girdi' ifadesinde 'okul' yerine 'öğrenciler' kastedilmektedir."
      },
      {
        id: "dil61",
        difficulty: "medium",
        question: "'Hezimete uğramak' deyimi ne anlama gelir?",
        options: ["Büyük bir zafer kazanmak", "Ağır bir yenilgiye uğramak", "Beklenmedik bir durumla karşılaşmak", "Yorgunluktan düşmek"],
        correctIndex: 1,
        explanation: "Arapça kökenli 'hezimet' sözcüğü büyük yenilgi, bozgun anlamına gelir. 'Hezimete uğramak' ise bir savaşta, yarışmada ya da mücadelede ağır yenilgiye uğramak demektir. Zıt anlamlısı 'zafer kazanmak'tır."
      },
      {
        id: "dil62",
        difficulty: "medium",
        question: "Edebi sanatlarda 'mazmun' ne anlama gelir?",
        options: ["Şiirde tekrarlanan nakarat", "Şiirde kalıplaşmış sembolik anlam taşıyan söz ya da kavram", "Yabancı dilden alınan sözcük", "Dizeler arasındaki uyak"],
        correctIndex: 1,
        explanation: "Mazmun (Arapça: mzmun — içerik), Divan şiirinde yüzyıllar içinde kalıplaşmış, belirli çağrışımlar uyandıran sembolik anlam birimlerine verilen addır. Örneğin 'gonca' gençliği, 'bülbül' âşığı, 'gül' sevgiliyi simgeler. Mazmunlar Divan edebiyatının temel anlam taşıyıcılarıdır."
      },
      {
        id: "dil63",
        difficulty: "medium",
        question: "'Kinaye' sanatı nedir?",
        options: ["Bir şeyi abartarak anlatma", "Bir sözü hem gerçek hem mecaz anlamıyla birlikte kullanma", "Zıt kavramları bir arada söyleme", "Bir varlığa insan özelliği yükleme"],
        correctIndex: 1,
        explanation: "Kinaye; bir ifadenin hem gerçek hem mecaz anlamının birlikte akla gelmesini sağlayan söz sanatıdır. Gerçek anlam öne çıkarılarak arka planda asıl kastedilen mecaz anlam sezdirilir. 'Eli açık biridir' cümlesinde hem 'cömert' hem de 'eli gerçekten açık' anlamı çağrışım yapar."
      },
      {
        id: "dil64",
        difficulty: "medium",
        question: "'Kafiye' (uyak) nedir?",
        options: ["Şiirde mısra başlarındaki ses tekrarı", "Şiirde dize sonlarındaki ses benzerliği", "İki şiiri birbirine bağlayan dize", "Şiirin her bölümünün ortak adı"],
        correctIndex: 1,
        explanation: "Kafiye (uyak), şiirde genellikle dize sonlarında ya da belirli noktalarda yer alan ses benzerliğidir. Tam kafiye, yarım kafiye, zengin kafiye gibi türleri bulunan kafiye sistemi; şiire musiki, ritim ve estetik değer kazandırır."
      },
      {
        id: "dil65",
        difficulty: "medium",
        question: "'Teşbih' sanatı nedir?",
        options: ["Zıt kavramları bir arada kullanma", "Bir varlığı insan gibi konuşturma", "Bir şeyi başka bir şeye benzeterek anlatma", "Bir kavramı somutlaştırma"],
        correctIndex: 2,
        explanation: "Teşbih (benzetme), en basit söz sanatlarından biridir; bir şeyi başka bir şeye benzeterek anlatmayı içerir. Benzetmenin dört ögesi vardır: benzeyen, kendisine benzetilen, benzetme yönü ve benzetme edatı. 'Aslan gibi güçlü' ifadesinde benzetme edatı 'gibi'dir."
      },
      {
        id: "dil66",
        difficulty: "medium",
        question: "'İstiare' sanatı nedir?",
        options: ["Teşbihin benzetme edatı ve benzetme yönü eksik formu", "Ses tekrarına dayanan bir figür", "Zıt anlamlı sözcükleri yan yana getirme", "Bir kavramın anlamını daraltma"],
        correctIndex: 0,
        explanation: "İstiare, teşbihin benzetme edatı ve benzetme yönü belirtilmeksizin yapılan kısaltılmış biçimidir. Açık istiare (benzetilen söylenir, benzeyen söylenmez) ve kapalı istiare (benzeyen söylenir, benzetilen söylenmez) olmak üzere iki türü vardır. Örneğin 'Gözlerinden iki yıldız parladı' kapalı istiaredir."
      },
      {
        id: "dil67",
        difficulty: "medium",
        question: "Türkçede 'soru eki' hangisidir ve nasıl yazılır?",
        options: ["'-ki' her zaman bitişik yazılır", "'-mI' ayrı yazılır, ünlü uyumuna uyar", "'-mi' daima bitişik yazılır", "'-mI' sözcüğe bitişik yazılır"],
        correctIndex: 1,
        explanation: "Türkçedeki soru eki -mI (mı/mi/mu/mü) ünlü uyumuna uyarak farklı biçimlerde yazılır ve fiilden ayrı yazılır: 'Geldi mi?', 'Bilir misin?', 'Oldu mu?' gibi. Soru eki yalnızca ek fiilden sonra bitişik yazılır: 'güzel miyim?' → 'güzel miyim'."
      },
      {
        id: "dil68",
        difficulty: "medium",
        question: "'Argo' kelimesi dil bilgisinde ne anlama gelir?",
        options: ["Klasik edebiyat dili", "Resmi yazışmalarda kullanılan dil", "Belirli gruplara özgü, standart dışı söz varlığı", "Yabancı dilden doğrudan alıntı"],
        correctIndex: 2,
        explanation: "Argo, belirli toplumsal gruplara (hırsızlar, gençler, askerler vb.) özgü, standart dilden ayrışan özel söz varlığıdır. Zaman zaman tabu ya da kaba ifadeler de içerebilir. Argo sözcükler zamanla standart dile geçebilir; örneğin Türkçede 'abza', 'çakma' gibi sözcükler argo kökenlidir."
      },
      {
        id: "dil69",
        difficulty: "medium",
        question: "'Yansıma sözcük' (onomatope) nedir?",
        options: ["İki farklı dilin karışmasından doğan sözcük", "Doğadaki veya çevredeki sesleri taklit eden sözcük", "Anlam genişlemesine uğrayan sözcük", "Başka dilden alınan sözcük"],
        correctIndex: 1,
        explanation: "Yansıma sözcükler, doğadaki sesleri ya da eylemlerin çıkardığı sesleri taklit ederek oluşturulan sözcüklerdir. Türkçede 'miyavlamak', 'böğürmek', 'tıkırdamak', 'çatırdamak' gibi örnekler yansıma köklüdür. Bu sözcükler sessel (fonetik) motivasyona sahiptir."
      },
      {
        id: "dil70",
        difficulty: "medium",
        question: "'Tezat' sanatı nedir?",
        options: ["Söylenenin tersini ima etme", "Zıt anlamlı kavramları bir arada, bilinçli olarak kullanma", "Bir kavramı abartarak anlatma", "Tekrar yoluyla anlam pekiştirme"],
        correctIndex: 1,
        explanation: "Tezat, birbirine zıt anlamlı sözcük, kavram ya da durumları bir arada kullanarak etki ve anlam derinliği yaratan söz sanatıdır. 'Gülerek ağladı', 'Ölümsüz ölüm', 'karanlık ışık' gibi ifadeler tezat içerir. Tezat şiir ve nesirde dramatik etki yaratmak için kullanılır."
      },
      {
        id: "dil71",
        difficulty: "medium",
        question: "Türkçede ünlü uyumunun temel kuralı nedir?",
        options: ["Sözcükteki tüm sessizler aynı olmalıdır", "Ek, kökün son ünlüsüne uyarak değişmelidir", "Her hecede mutlaka bir ünlü bulunur", "Sözcük daima ünlüyle başlamalıdır"],
        correctIndex: 1,
        explanation: "Türkçede ünlü uyumu (ses uyumu), eklerin kökteki veya son hece ünlüsüne uyarak kalın ya da ince, düz ya da yuvarlak biçimler almasını zorunlu kılar. Örneğin '-de/-da' yer belirtme eki: 'evde' (ince ünlü) ama 'okulda' (kalın ünlü). Bu kural Türkçenin en temel özelliklerinden biridir."
      },
      {
        id: "dil72",
        difficulty: "medium",
        question: "'Fonem' ne anlama gelir?",
        options: ["Dildeki en küçük anlam birimi", "Dilde anlam ayırt eden en küçük ses birimi", "Hecedeki ünlü sayısı", "Sözcükteki toplam ses sayısı"],
        correctIndex: 1,
        explanation: "Fonem, dil biliminde bir dilde anlam farkı yaratabilen en küçük ses birimidir. Örneğin Türkçede 'bal' ve 'dal' sözcüklerinde /b/ ve /d/ birer fonemdir; bu seslerin değişmesi sözcüğün anlamını değiştirir. Türkçenin 29 fonemi vardır."
      },
      {
        id: "dil73",
        difficulty: "medium",
        question: "'Morfoloji' (biçim bilgisi) dil biliminde neyi inceler?",
        options: ["Cümle yapısını ve sözcük dizilimini", "Sözcüklerin iç yapısını, biçim birimlerini (morfemleri) ve türetme kurallarını", "Ses sistemini ve ses değişmelerini", "Dil tarihi ve evrimini"],
        correctIndex: 1,
        explanation: "Morfoloji (biçim bilgisi), sözcüklerin iç yapısını, morfem adı verilen anlam taşıyan en küçük dil birimlerini ve bunların nasıl bir araya geldiğini inceler. Türkçe sözcükler kök + yapım ekleri + çekim ekleri şeklinde analiz edilir: 'geliyordum' = gel + iyor + du + m."
      },
      {
        id: "dil74",
        difficulty: "medium",
        question: "'Anlam daralması' nedir?",
        options: ["Bir sözcüğün zaman içinde daha geniş anlam kazanması", "Bir sözcüğün zaman içinde daha dar, sınırlı anlam kazanması", "Sözcüklerin yabancı dillere geçmesi", "Sözcüğün olumsuz anlam kazanması"],
        correctIndex: 1,
        explanation: "Anlam daralması, bir sözcüğün tarihsel süreçte daha geniş bir anlam alanından daha dar bir alana çekilmesidir. Türkçede 'oğlan' sözcüğü başlangıçta 'çocuk' anlamında kullanılırken günümüzde yalnızca 'erkek çocuk' anlamına gelir. Bu, anlam daralmasının klasik bir örneğidir."
      },
      {
        id: "dil75",
        difficulty: "hard",
        question: "'Mecaz' ne demektir?",
        options: ["Bir sözcüğün sözlükteki temel anlamı", "Bir sözcüğün gerçek anlamı dışında kullanılması", "İki sözcüğün sessel benzerliği", "Eklerin sözcük anlamını değiştirmesi"],
        correctIndex: 1,
        explanation: "Mecaz, bir sözcük ya da ifadenin gerçek (sözlük) anlamı dışında, çeşitli anlam ilişkilerine dayanarak kullanılmasıdır. 'Elleri yanıyor' ifadesinde 'yanmak' sözcüğü mecaz anlamda (çok çalışmak) kullanılmıştır. Mecaz; istiare, mecaz-ı mürsel, kinaye, teşbih gibi alt türlere ayrılır."
      },
      {
        id: "dil76",
        difficulty: "hard",
        question: "'Sone' ne tür bir edebi formdur?",
        options: ["14 dizeden oluşan ve belirli uyak düzenine sahip şiir biçimi", "3 kıtadan oluşan halk şiiri türü", "Uzun anlatı şiiri türü", "Müzikli sahne oyunu"],
        correctIndex: 0,
        explanation: "Sone (İtalyanca: sonetto), 14 dizeden oluşan, kökleri Orta Çağ İtalyan şiirine dayanan ve belirli uyak şemasına sahip lirik şiir biçimidir. İtalyan (Petrarca) ve İngiliz (Shakespeare) olmak üzere iki ana biçimi vardır. Shakespeare'nin 154 sonesinden oluşan külliyatı edebiyatın başyapıtlarındandır."
      },
      {
        id: "dil77",
        difficulty: "hard",
        question: "'Nesir' ne demektir?",
        options: ["Uyaklı ve ölçülü yazı", "Şiir biçiminde olmayan, günlük dile yakın düzyazı", "Manzum hikaye türü", "Yalnızca edebi metinlere verilen isim"],
        correctIndex: 1,
        explanation: "Nesir, ölçü ve uyak gibi şiire özgü kurallar taşımayan, doğal dil akışına yakın düzyazı biçimidir. Roman, hikaye, deneme, makale, biyografi gibi türler nesir kapsamında değerlendirilir. Nesrin karşıtı nazım (şiir) biçimidir."
      },
      {
        id: "dil78",
        difficulty: "hard",
        question: "Türkçede 'geniş zaman' eki hangisidir?",
        options: ["-yor", "-ecek / -acak", "-r / -ar / -er", "-mış / -miş"],
        correctIndex: 2,
        explanation: "Türkçede geniş zaman eki -r'dir; fiil kök ya da gövdesine göre -ar veya -er biçimlerini alır. 'Gelir', 'gider', 'okur', 'yazar' gibi. Geniş zaman, süregelen alışkanlıkları, genel gerçekleri ve kalıcı durumları ifade etmek için kullanılır."
      },
      {
        id: "dil79",
        difficulty: "hard",
        question: "'Bağlaç' hangi görevi üstlenir?",
        options: ["İsimlere belirlilik katar", "Fiillerin zamanını belirtir", "Sözcükleri, öbekleri veya cümleleri birbirine bağlar", "Eylemlerin kişisini gösterir"],
        correctIndex: 2,
        explanation: "Bağlaçlar; sözcükleri, sözcük öbeklerini veya cümleleri birbirine bağlayan dilbilgisel işlev sözcükleridir. Türkçede 've', 'ama', 'fakat', 'çünkü', 'ya da', 'hem...hem' sık kullanılan bağlaçlardandır. Bağlaçlar tek başlarına bir anlam taşımaz, bağladıkları ögeler arasında anlam ilişkisi kurarlar."
      },
      {
        id: "dil80",
        difficulty: "hard",
        question: "'Atasözü' ile 'deyim' arasındaki temel fark nedir?",
        options: ["Atasözleri kısa, deyimler uzundur", "Atasözleri tam bir yargı bildirir; deyimler kalıplaşmış söz öbekleridir ve yargı bildirmez", "Deyimler her zaman eylemle biter", "Atasözleri yazılı, deyimler sözlü kaynaklıdır"],
        correctIndex: 1,
        explanation: "Atasözleri, uzun deneyimlerin ürünü olan ve tam bir yargı bildiren kalıplaşmış sözlerdir: 'Damlaya damlaya göl olur.' Deyimler ise birden fazla sözcüğün bir araya gelmesiyle oluşan, kalıplaşmış ve mecaz anlam taşıyan söz öbekleridir; tek başlarına tam bir yargı bildirmezler: 'Eli açık olmak.'"
      },
      {
        id: "dil81",
        difficulty: "hard",
        question: "'Eş anlamlı sözcükler' (sinonimler) ne anlama gelir?",
        options: ["Yazılışları aynı ancak anlamları farklı sözcükler", "Aynı ya da çok yakın anlama gelen farklı sözcükler", "Kökten türeyen sözcükler", "Farklı dillerdeki karşılıklı sözcükler"],
        correctIndex: 1,
        explanation: "Eş anlamlı sözcükler (sinonimler), aynı ya da çok yakın anlamı farklı ses yapısıyla ifade eden sözcüklerdir. Örneğin 'güzel'—'hoş'—'şirin'; 'hızlı'—'çabuk'—'süratli'. Tam eş anlamlılık nadirdir; sözcükler çoğunlukla ince anlam nüanslarıyla ayrışır."
      },
      {
        id: "dil82",
        difficulty: "hard",
        question: "'Zıt anlamlı sözcükler' (antonimler) nasıl tanımlanır?",
        options: ["Aynı kökten türeyen sözcükler", "Birbirinin tam tersini ifade eden sözcükler", "Aynı sesi taşıyan farklı sözcükler", "Birlikte kullanılması zorunlu sözcükler"],
        correctIndex: 1,
        explanation: "Antonimler (zıt anlamlı sözcükler), birbirinin karşıt anlamını taşıyan sözcüklerdir: 'güzel'–'çirkin', 'sıcak'–'soğuk', 'açık'–'kapalı'. Antonimler karşıtlık, karşılıklılık veya derecelilik açısından farklı ilişkiler içerebilir: 'erkek'–'kadın' (karşılıklı), 'sıcak'–'soğuk' (dereceli)."
      },
      {
        id: "dil83",
        difficulty: "hard",
        question: "'Sentaks' (söz dizimi) dil biliminde neyi inceler?",
        options: ["Sözcüklerin iç yapısını", "Cümle yapısını ve sözcüklerin dizilim kurallarını", "Dildeki ses değişimlerini", "Sözcüklerin anlam dönüşümlerini"],
        correctIndex: 1,
        explanation: "Sentaks (sözdizimi), cümle kuruluşunu, sözcük ve öbeklerin cümledeki dizilimini, öğeler arasındaki ilişkileri ve cümle türlerini inceleyen dil bilim dalıdır. Türkçe sözdiziminin temel özelliği 'Özne + Tümleç + Yüklem' sırasıdır; yüklem her zaman cümle sonunda yer alır."
      },
      {
        id: "dil84",
        difficulty: "hard",
        question: "'Anlam genişlemesi' ne demektir?",
        options: ["Bir sözcüğün daha dar anlam kazanması", "Bir sözcüğün tarihsel süreçte daha geniş anlam alanı kazanması", "Sözcüğün kötü anlam kazanması", "Sözcüğün başka dile geçmesi"],
        correctIndex: 1,
        explanation: "Anlam genişlemesi, bir sözcüğün zaman içinde ilk anlamından daha geniş bir kullanım alanı kazanmasıdır. Türkçede 'yazmak' sözcüğü başlangıçta yalnızca 'çizmek, kazımak' anlamını taşırken zamanla 'harf/rakam oluşturmak, metin üretmek' gibi geniş anlamlara ulaşmıştır."
      },
      {
        id: "dil85",
        difficulty: "hard",
        question: "Türk dilinin ait olduğu dil ailesi hangisidir?",
        options: ["Hint-Avrupa dil ailesi", "Sami dil ailesi", "Türk dil ailesi (Altay)", "Sino-Tibet dil ailesi"],
        correctIndex: 2,
        explanation: "Türkçe, Türk dil ailesi içinde yer alır. Bu aile; Türkiye Türkçesi, Azerice, Özbekçe, Kazakça, Uygurca gibi yaklaşık 30-40 akraba dilden oluşur ve Orta Asya'dan Anadolu'ya, Balkanlara uzanan geniş bir coğrafyada konuşulur. Bazı dilbilimciler Türk dillerini daha geniş bir hipotez olan 'Altay dil ailesi' içinde değerlendirir."
      },
      {
        id: "dil86",
        difficulty: "hard",
        question: "'Oxymoron' sanatı ne anlama gelir?",
        options: ["Aynı sözcüğü yan yana tekrarlama", "Birbiriyle çelişen ya da zıt kavramları bir söz öbeğinde birleştirme", "Bir konuyu abartarak anlatma", "Dolaylı yoldan ima etme"],
        correctIndex: 1,
        explanation: "Oxymoron, zıt ya da çelişen iki kavramı aynı söz öbeğinde ustaca birleştiren söz sanatıdır. 'Acı tatlı', 'kuru gözyaşı', 'sessiz fırtına', 'yaşayan ölü' gibi ifadeler oxymoron'dur. Yunanca 'oxys' (keskin) ve 'moros' (aptal) sözcüklerinin birleşiminden türemiş bu terim, dili hem paradoksal hem de etkileyici kılar."
      },
      {
        id: "dil87",
        difficulty: "hard",
        question: "'Üst dil' (metalanguage) ne demektir?",
        options: ["Resmi dil", "Bir dili açıklamak veya tanımlamak için kullanılan dil", "Şiirsel dil", "Yabancı dil"],
        correctIndex: 1,
        explanation: "Üst dil (metalanguage veya metadil), bir başka dili ya da dil sistemini tanımlamak, açıklamak ve analiz etmek için kullanılan dildir. Gramer terimleri (isim, fiil, cümle vb.) bir üst dil oluşturur. Dil bilimciler dili incelerken kendi araçları olan dili üst dil olarak kullanırlar."
      },
      {
        id: "dil88",
        difficulty: "hard",
        question: "'Edebi türler' genel olarak kaç ana grupta incelenir?",
        options: ["İki: nazım ve nesir", "Üç: şiir, roman ve tiyatro", "Dört: epik, lirik, dramatik, didaktik", "Beş: şiir, roman, hikaye, tiyatro, deneme"],
        correctIndex: 2,
        explanation: "Batı edebiyat geleneğinde edebi türler genellikle dört ana başlık altında ele alınır: Epik (destansı anlatı — destan, roman, hikaye), Lirik (duygu ağırlıklı şiir), Dramatik (sahne için yazılan türler — trajedi, komedi) ve Didaktik (öğretici türler — fabl, mesel). Bu sınıflandırma Aristoteles'e dayanmaktadır."
      },
      {
        id: "dil89",
        difficulty: "hard",
        question: "'Monolog' ne anlama gelir?",
        options: ["İki kişi arasındaki diyalog", "Bir kişinin kendi kendine ya da seyirciye yönelik tek taraflı konuşması", "Sahne yönermeleri", "Toplu söylenen şarkı"],
        correctIndex: 1,
        explanation: "Monolog, tiyatroda ya da edebi metinlerde yalnızca bir kişi tarafından gerçekleştirilen, karşılıklı alışveriş içermeyen konuşmadır. İç monolog ise bir karakterin düşüncelerini doğrudan akıp gitmesiyle yansıtan anlatı tekniğidir; James Joyce ve Virginia Woolf gibi yazarlar bu teknikle tanınır."
      },
      {
        id: "dil90",
        difficulty: "hard",
        question: "Türkçede 'türeme sözcük' nasıl oluşur?",
        options: ["Yabancı sözcüklerin Türkçeleştirilmesiyle", "Bir köke yapım eki getirilerek yeni sözcük oluşturulmasıyla", "İki sözcüğün birleştirilmesiyle", "Sözcüğün sesel dönüşümüyle"],
        correctIndex: 1,
        explanation: "Türeme sözcük (türetilmiş sözcük), bir kök ya da gövdeye yapım eki getirilerek elde edilen yeni sözcüktür. Örneğin 'göz' kökünden 'gözlük', 'gözlemek', 'gözlem', 'gözlemci' türetilebilir. Türkçe eklemeli (aglütinatif) bir dil olduğundan sözcük türetme mekanizması son derece verimlidir."
      },
      {
        id: "dil91",
        difficulty: "hard",
        question: "'Alliterasyon' sanatı nedir?",
        options: ["Dize sonlarında uyak oluşturma", "Art arda gelen sözcüklerin aynı ses ya da hece ile başlaması", "Sözcükleri mecaz anlamda kullanma", "Zıt kavramları bir arada söyleme"],
        correctIndex: 1,
        explanation: "Alliterasyon, bir dize veya cümlede art arda gelen sözcüklerin aynı harf ya da sesle başlamasına dayanan ses sanatıdır. Türkçede 'Sarı saçlı, sarı gözlü sevgilim' gibi örneklerle karşılaşılır. İngilizce'de 'Peter Piper picked a peck of pickled peppers' ünlü bir alliterasyon örneğidir."
      },
      {
        id: "dil92",
        difficulty: "hard",
        question: "'Anagram' nedir?",
        options: ["Bir sözcüğün kısaltılması", "Bir sözcükteki harflerin yeniden düzenlenmesiyle başka bir sözcük oluşturulması", "Sesteş sözcüklerin listesi", "Sözcüğün tarihi kökeni"],
        correctIndex: 1,
        explanation: "Anagram, bir sözcük ya da cümledeki harflerin sıralanışı değiştirilerek farklı bir sözcük ya da anlam oluşturulmasıdır. Türkçede 'arı'→'ira', 'lale'→'ella', İngilizce'de 'listen'→'silent' bilinen örneklerdir. Anagram, dil oyunlarında ve kriptografide geniş kullanım alanı bulur."
      },
      {
        id: "dil93",
        difficulty: "hard",
        question: "'Lirizm' ne anlama gelir?",
        options: ["Destansı ve kahramanlık dolu anlatım", "Şiirde duygu yoğunluğunu ve müzikal niteliği ön plana çıkaran özellik", "Söz sanatlarının tamamı", "Nesir biçimini benimseme eğilimi"],
        correctIndex: 1,
        explanation: "Lirizm, şiirde ya da yazın eserlerinde kişisel duyguların, iç dünya deneyimlerinin ve müzikal dilin ön plana çıkarıldığı niteliktir. 'Lirik' sözcüğü Antik Yunan'da 'lyra' (çengi çalgısı) eşliğinde söylenen şiirlerden gelmektedir; bu tür şiirler güçlü duygusal ifadesiyle öne çıkar."
      },
      {
        id: "dil94",
        difficulty: "hard",
        question: "'Söylem' (discourse) kavramı ne anlama gelir?",
        options: ["Tek sözcüklük ifade", "Cümle üzerindeki, bağlamsal anlam taşıyan dil kullanımı", "Sözlük tanımı", "Dilbilgisel hata"],
        correctIndex: 1,
        explanation: "Söylem (discourse), dil biliminde tek tek cümleleri aşan, bağlamsal anlam taşıyan, sosyal ve ideolojik boyutları bulunan dil kullanımını ifade eder. Bir konuşma, metin, tartışma ya da iktidar ilişkisini yansıtan dil pratiği söylem olarak incelenebilir. Michel Foucault söylem kavramını felsefi ve sosyal teoride merkeze taşımıştır."
      },
      {
        id: "dil95",
        difficulty: "hard",
        question: "Türkçede 'bileşik sözcük' nasıl oluşur?",
        options: ["Bir köke çekim eki getirilerek", "İki ya da daha fazla sözcüğün birleşerek yeni bir anlam oluşturmasıyla", "Yabancı dilden alıntıyla", "Sesin değişmesiyle"],
        correctIndex: 1,
        explanation: "Bileşik sözcükler, birden fazla sözcüğün bir araya gelerek yeni, bütüncül bir anlam kazandığı sözcüklerdir. Türkçede 'hanımeli', 'gecekondu', 'başyapıt', 'gündoğumu', 'karabiber' bileşik sözcüklere örnektir. Bileşik sözcükler bitişik ya da ayrı yazılabilir; Türk Dil Kurumu bu konuda kılavuz yayımlar."
      },
      {
        id: "dil96",
        difficulty: "hard",
        question: "'Halk etimolojisi' ne anlama gelir?",
        options: ["Bir sözcüğün gerçek tarihsel kökeninin araştırılması", "Bir sözcüğün kökeninin yanlış biçimde açıklanması ya da o yönde değiştirilmesi", "Argo sözcüklerin kökenini inceleme", "Yabancı sözcüklerin Türkçeleştirilme süreci"],
        correctIndex: 1,
        explanation: "Halk etimolojisi, bir sözcüğün gerçek kökeninden farklı biçimde, genellikle tanıdık sözcüklere benzetilerek yanlış yorumlanması ve zamanla bu yanlış biçimin yaygınlaşmasıdır. Örneğin İngilizce 'crayfish' (ıstakoz) sözcüğü balık olmadığı hâlde 'fish' (balık) sözcüğünü içerir; bu halk etimolojisinin izini taşır."
      },
      {
        id: "dil97",
        difficulty: "hard",
        question: "'Eş sesli sözcükler' (sesteşler/homofonlar) nasıl tanımlanır?",
        options: ["Aynı anlama gelen farklı sözcükler", "Yazılışları ya da seslenimleri aynı, anlamları farklı sözcükler", "Aynı kökten türeyen sözcükler", "Yabancı dilden alıntılanan sözcükler"],
        correctIndex: 1,
        explanation: "Eş sesli sözcükler (sesteşler/homofonlar), sesletimi veya yazılışı aynı olan ama birbirinden tamamen farklı anlamlar taşıyan sözcüklerdir. Türkçede 'yüz' (sayı — 100), 'yüz' (çehre) ve 'yüz' (yüzmek, yüz-) sözcükleri sesteştir. Bağlam, bu tür sözcüklerin hangi anlamda kullanıldığını belirler."
      },
      {
        id: "dil98",
        difficulty: "hard",
        question: "'Alegori' nedir?",
        options: ["Kısa ve öz anlatı", "Soyut kavramları somut olay ve karakterlerle uzun soluklu anlatan mecazlı anlatı", "Şiirde ses tekrarı", "Bir kişiyi örnek göstererek anlatma"],
        correctIndex: 1,
        explanation: "Alegori, soyut kavramların (erdem, kötülük, adalet vb.) somut karakter, olay ve nesneler aracılığıyla örtülü biçimde anlatıldığı uzun soluklu metafordur. George Orwell'ın 'Hayvan Çiftliği' (totalitarizmin eleştirisi) ve John Bunyan'ın 'Pilgrim's Progress' adlı eserleri klasik alegori örnekleridir."
      },
      {
        id: "dil99",
        difficulty: "hard",
        question: "Türkçede 'ad tamlaması' (isim tamlaması) nasıl oluşur?",
        options: ["Sıfat + isim birleşimiyle", "Bir ismin başka bir ismi nitelendirmesiyle: tamlayan + tamlanan", "Fiil + isim birleşimiyle", "İki sıfatın bir araya gelmesiyle"],
        correctIndex: 1,
        explanation: "Ad (isim) tamlaması, bir ismin (tamlayan) başka bir ismi (tamlanan) belirtmesiyle oluşan sözcük öbeğidir. Belirtili isim tamlamasında tamlayan '-nın/-nin/-nun/-nün', tamlanan ise '-ı/-i/-u/-ü' eklerini alır: 'evin bahçesi'. Belirtisiz tamlamada tamlayan ek almaz: 'taş köprü'."
      },
      {
        id: "dil100",
        difficulty: "hard",
        question: "'Şiirde redif' ne anlama gelir?",
        options: ["Dize başlarındaki ses tekrarı", "Uyaktan sonra tekrarlanan aynı ek ya da sözcük", "Şiirde sessiz harflerin dizilişi", "Dizelerin uzunluk ölçüsü"],
        correctIndex: 1,
        explanation: "Redif, Türk şiirinde dize sonlarında kafiyeye ek olarak aynı biçimde tekrarlanan ek ya da sözcüktür. Örneğin iki dize 'gelirken' — 'giderken' biçiminde bitiyorsa '-ken' eki redifi oluşturur. Redif Arap ve Fars şiir geleneğinden Türk şiirine geçmiş olup uyak sistemini zenginleştirir."
      },
      {
        id: "dil60",
        difficulty: "medium",
        question: "'Palindrom' nedir?",
        options: ["İki dilin karışımından oluşan metin", "Soldan sağa ve sağdan sola aynı okunan sözcük veya cümle", "Çok uzun bir bileşik sözcük", "Anlamı belirsiz olan sözcük"],
        correctIndex: 1,
        explanation: "Palindrom, soldan sağa ve sağdan sola okunduğunda aynı sonucu veren sözcük ya da cümledir. İngilizce'de 'racecar', 'level'; Türkçede 'ata', 'kazak', 'ala' basit palindrom örnekleridir. 'Bir yaz araba arabarayaz iri' gibi cümle düzeyinde palindromlar da oluşturulabilir."
      },
      {
        id: "dil101",
        difficulty: "hard",
        question: "Türkçede 'büyük ünlü uyumu' ne anlama gelir?",
        options: ["Sözcükteki ünsüzlerin sertlik-yumuşaklık bakımından uyumu", "Sözcükteki ünlülerin kalınlık-incelik bakımından uyumu", "Cümledeki sözcüklerin hece sayısı bakımından denkliği", "Ön ek ile kök arasındaki ses benzeşmesi"],
        correctIndex: 1,
        explanation: "Büyük ünlü uyumu (palatovelar uyum), Türkçenin temel ses bilgisi kurallarından biridir: bir sözcükteki ünlüler, ya hep kalın (a, ı, o, u) ya da hep ince (e, i, ö, ü) olmalıdır. Bu kural Türkçe köklerinde geçerlidir; yabancı kökenli sözcüklerde ve bazı eklerde uyum aranmaz. Örneğin 'kalem' Arapça kökenli olduğundan uyuma uymaz."
      },
      {
        id: "dil102",
        difficulty: "hard",
        question: "Bir sözcük ya da ifadenin tersini ima ederek söylenmesine ne denir?",
        options: ["Mecaz", "İroni (Söylembilim)", "Hüsn-i talil", "Teşbih"],
        correctIndex: 1,
        explanation: "İroni (veya söylembilim), söylenenin gerçek anlamının tam tersini kasteden söz sanatıdır. 'Ne kadar akıllıca bir hareket!' cümlesinin aslında aptallığı kastederek söylenmesi ironidir. Antik Yunan'dan bu yana edebiyat, siyasi söylem ve gündelik dilde yaygın biçimde kullanılan ironi; mizahın, eleştirinin ve edebî anlatımın güçlü bir aracıdır."
      },
      {
        id: "dil103",
        difficulty: "hard",
        question: "'Örtmece' (euphemism) nedir?",
        options: ["İki dilin karışımından oluşan hibrit ifade", "Kaba veya rahatsız edici bir kavramı daha nazik bir ifadeyle karşılama", "Bir sözcüğün zıt anlamlısını kullanma sanatı", "Birden fazla anlam taşıyan sözcükler için kullanılan terim"],
        correctIndex: 1,
        explanation: "Örtmece (örtülü anlatım/euphemism), toplumsal açıdan kaba, rahatsız edici veya tabu sayılan bir kavramı daha yumuşak, nötr ya da dolaylı bir ifadeyle karşılama yöntemidir. 'Hayatını kaybetti' (öldü), 'çalışanların azaltılması' (işçi çıkarma) ve 'boy uzaması güç' (kısa) örtmece kullanımına örnek gösterilebilir. Her kültürün kendine özgü örtmece repertuarı mevcuttur."
      },
      {
        id: "dil104",
        difficulty: "hard",
        question: "Türkçede 'eylem' ile 'fiil' sözcükleri arasındaki fark nedir?",
        options: ["Eylem geçişli, fiil geçişsiz eylemleri karşılar", "Eylem Türkçe, fiil Arapça kökenli; ikisi de aynı anlama gelir", "Eylem daha geniş kapsamlı; fiil yalnızca sözlü eylemleri kapsar", "Fiil tekil, eylem çoğul çekimlerde kullanılır"],
        correctIndex: 1,
        explanation: "Eylem ve fiil, dilbilgisinde 'kişi, zaman ve kip eki alabilen; oluş, kılış veya durum bildiren sözcük türü' için kullanılan iki eş anlamlı terimdir. 'Fiil' Arapça 'fe'ale' (yapmak) kökünden gelirken 'eylem' Türkçe 'eylemek' fiilinden türemiştir. Türk Dil Kurumu (TDK) her iki terimi de kabul etmekte, ancak 'eylem' öz Türkçe karşılık olarak tercih edilmektedir."
      },
      {
        id: "dil105",
        difficulty: "hard",
        question: "'Retorik' ne anlama gelir?",
        options: ["Yabancı dillerdeki sözcüklerin Türkçe karşılıklarını bulma sanatı", "Etkili, ikna edici konuşma ve yazma sanatı", "Dilbilgisel hataları inceleyip düzelten bilim dalı", "Yazılı metinlerin ses uyumunu düzenleyen kural bütünü"],
        correctIndex: 1,
        explanation: "Retorik (hitabet), bir izleyici kitlesi üzerinde etki yaratmak için dilin ikna edici biçimde kullanılmasını inceleyen disiplindir. Aristoteles, retoriği 'herhangi bir konuda mevcut ikna araçlarını keşfetme yetisi' olarak tanımlamıştır. Logos (mantık), ethos (güvenilirlik) ve pathos (duygu) olmak üzere üç temel ikna biçimi üzerine kurulan retorik; politika, hukuk, eğitim ve medyada kilit öneme sahiptir."
      },
      {
        id: "dil106",
        difficulty: "hard",
        question: "Bir dilin belirli bir bölgede konuşulan yerel biçimine ne ad verilir?",
        options: ["Jargon", "Slang (argo)", "Diyalekt (ağız/lehçe)", "Pidgin"],
        correctIndex: 2,
        explanation: "Diyalekt (Türkçede ağız ya da lehçe), belirli bir coğrafi bölge veya toplumsal gruba özgü, söz varlığı, söyleyiş ve dilbilgisi bakımından standart dilden ayrılan konuşma biçimidir. Türkçede Karadeniz, Ege ve Doğu Anadolu ağızları bu kategoriye girer. Dilbilimde standart bir dil ile diyalekt arasındaki sınır siyasi ve toplumsal faktörlere göre değişkenlik gösterir."
      },
      {
        id: "dil107",
        difficulty: "hard",
        question: "'Anadil' ve 'resmi dil' kavramları arasındaki temel fark nedir?",
        options: ["Anadil devlet okullarında, resmi dil yalnızca evde öğrenilir", "Anadil kişinin ilk edindiği dildir; resmi dil devlet ve kamusal alanda kullanılan yasal dildir", "Anadil sözlü, resmi dil yalnızca yazılı iletişim içindir", "İkisi arasında hiçbir fark yoktur; eş anlamlıdır"],
        correctIndex: 1,
        explanation: "Anadil (ana dili), bireyin doğumdan itibaren ailesinden doğal ortamda edindiği ilk dildir. Resmi dil ise bir devletin hukuki düzenlemeler, eğitim, yargı ve kamusal iletişim gibi resmi alanlarda kullandığı yasal statüye sahip dildir. Bir ülkede birden fazla resmi dil olabilir (İsviçre: Almanca, Fransızca, İtalyanca, Romanca); ya da nüfusun büyük bölümünün anadili resmi dil olmayabilir."
      },
      {
        id: "dil108",
        difficulty: "hard",
        question: "Türkçede 'hece' nasıl tanımlanır?",
        options: ["Sözcükteki ünsüz sayısı", "Bir solukta çıkarılan, mutlaka bir ünlü içeren ses birimi", "İki virgül arasındaki cümle parçası", "Anlam taşıyan en küçük dil birimi"],
        correctIndex: 1,
        explanation: "Hece, bir solukta çıkarılan ve mutlaka bir ünlü çevresinde örgütlenen ses birimidir. Türkçede her hece tam olarak bir ünlü içerir; ünsüzler tek başına hece oluşturamaz. 'Kalem' sözcüğü 'ka-lem' biçiminde iki hece taşır. Türkçe şiirde hece ölçüsü (hece vezni) bu birime dayanır; belirli sayıda heceden oluşan dizeler şiirin ritmini belirler."
      },
      {
        id: "dil109",
        difficulty: "hard",
        question: "'Telaffuz' sözcüğü ne anlama gelir?",
        options: ["Yazılı metni seslendirme kuralları bütünü", "Sözcükleri doğru ve anlaşılır biçimde seslendirme", "Yabancı dildeki sözcükleri ana dile aktarma", "Şiirde kullanılan ses tekrarı"],
        correctIndex: 1,
        explanation: "Telaffuz (Arapça: lafzetme), sözcükleri sesin tonlama, vurgu, uzunluk ve eklemlenme özellikleri bakımından doğru ve net biçimde seslendirme eylemidir. İletişimin anlaşılırlığını doğrudan etkileyen telaffuz; dil öğretimi, konuşma terapisi ve fonetik gibi alanlarda temel inceleme konusudur. Türkçede telaffuz büyük ölçüde yazımla örtüşür; bu, dili öğrenenler açısından önemli bir avantajdır."
      },
      {
        id: "dil110",
        difficulty: "hard",
        question: "'Noktalı virgül' (;) hangi durumlarda kullanılır?",
        options: ["Yalnızca İngilizce metinlere özgü bir işarettir, Türkçede kullanılmaz", "Birbiriyle anlam ilişkisi olan ama bağımsız cümleleri ya da uzun sıralı ögeleri ayırmak için", "Doğrudan alıntının başladığını belirtmek için", "Yalnızca şiirde dize sonlarında kullanılır"],
        correctIndex: 1,
        explanation: "Noktalı virgül (;), virgülden daha güçlü, noktadan daha zayıf bir duraksamayı işaret eden noktalama işaretidir. İki ana işlevi vardır: (1) kendi içinde virgül içeren uzun sıralı ögeleri ayırmak; (2) anlamca birbiriyle ilişkili ama bağımsız iki cümleyi bağlantı bağlacı kullanmaksızın birleştirmek. Türkçe Yazım Kılavuzu'nda belirtilen kurallara göre dikkatli kullanılmalıdır."
      },
      {
        id: "dil111",
        difficulty: "easy",
        question: "'Pırıl pırıl' kelimesi hangi sözcük türüne girer?",
        options: ["İsim", "İkileme", "Bağlaç", "Edat"],
        correctIndex: 1,
        explanation: "'Pırıl pırıl', anlamı pekiştirmek için aynı kelimenin tekrarlanmasıyla oluşan bir ikilemedir."
      },
      {
        id: "dil112",
        difficulty: "easy",
        question: "Türkçede ünlü harf sayısı kaçtır?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Türkçe alfabede a, e, ı, i, o, ö, u, ü olmak üzere 8 ünlü harf bulunur."
      },
      {
        id: "dil113",
        difficulty: "easy",
        question: "Aşağıdaki kelimelerden hangisi 'eş anlamlıdır' kavramıyla bağdaşır?",
        options: ["Sıcak - Soğuk", "Mutlu - Sevinçli", "Karanlık - Aydınlık", "Yüksek - Alçak"],
        correctIndex: 1,
        explanation: "Eş anlamlı (sinonim) kelimeler birbirine yakın anlam taşır; 'Mutlu' ve 'Sevinçli' bu ilişkinin örneğidir."
      },
      {
        id: "dil114",
        difficulty: "easy",
        question: "'Karşı' kelimesi hangi sözcük türüne girer?",
        options: ["Sadece isim", "Sadece sıfat", "Sadece edat", "Birden fazla türde kullanılabilir"],
        correctIndex: 3,
        explanation: "'Karşı' kelimesi cümledeki kullanıma göre isim, sıfat, edat veya zarf olarak işlev görebilir; çok anlamlı ve çok türlüdür."
      },
      {
        id: "dil115",
        difficulty: "easy",
        question: "'Kalem' kelimesi hangi sözcük türüne girer?",
        options: ["İsim", "Sıfat", "Zarf", "Bağlaç"],
        correctIndex: 0,
        explanation: "'Kalem', somut bir varlığı karşılayan isimdir."
      },
      {
        id: "dil116",
        difficulty: "easy",
        question: "Türkçede en uzun ek 'leştir-' aşağıdaki kelimelerden hangisinde kullanılır?",
        options: ["Güzelleştirmek", "Güneşli", "Geceleri", "Kapıdan"],
        correctIndex: 0,
        explanation: "'Güzelleştirmek' kelimesi 'güzel' köküne '-leştir' fiil yapım eki ve '-mek' mastar eki getirilerek oluşturulmuştur."
      },
      {
        id: "dil117",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi 'zıt anlam' örneğidir?",
        options: ["Kalın - Dolu", "Hızlı - Yavaş", "Bekar - Bekar", "Tatlı - Şekerli"],
        correctIndex: 1,
        explanation: "Zıt anlamlı (karşıt) kelimeler birbiriyle ters anlam taşır; 'Hızlı - Yavaş' bu ilişkiyi örnekler."
      },
      {
        id: "dil118",
        difficulty: "easy",
        question: "'Hangisi büyük harfle başlamalıdır?' sorusunun yanıtı için hangisi doğrudur?",
        options: ["Cümle başındaki kelimeler", "Özel isimler", "Kitap başlıkları", "Hepsi"],
        correctIndex: 3,
        explanation: "Türkçe yazım kurallarına göre cümle başı, özel isim ve kitap-başlık gibi pek çok yerde büyük harf kullanımı zorunludur."
      },
      {
        id: "dil119",
        difficulty: "easy",
        question: "'Çok' kelimesi hangi sözcük türüne girer?",
        options: ["İsim", "Sıfat", "Zarf", "Hem sıfat hem zarf"],
        correctIndex: 3,
        explanation: "'Çok' kelimesi miktar bildirdiğinde sıfat (çok kitap), bir fiili nitelediğinde zarf (çok sevdim) olarak kullanılabilir."
      },
      {
        id: "dil120",
        difficulty: "easy",
        question: "'Geliyorum' kelimesinde kaç hece vardır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 1,
        explanation: "'Ge-li-yo-rum' şeklinde hecelenir; 4 hecelidir."
      },
      {
        id: "dil121",
        difficulty: "easy",
        question: "Türkçe'de 'Ünlü uyumu' kuralı kaç türdür?",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        explanation: "Türkçe'de iki temel ünlü uyumu vardır: büyük ünlü uyumu (kalınlık-incelik) ve küçük ünlü uyumu (düzlük-yuvarlaklık)."
      },
      {
        id: "dil122",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi 'sözlük' anlamı dışında kullanılan bir deyimdir?",
        options: ["Kafayı yemek", "Pencere açmak", "Kitap okumak", "Su içmek"],
        correctIndex: 0,
        explanation: "'Kafayı yemek', sözlük anlamından farklı olarak 'aklını yitirmek, çıldırmak' anlamına gelen mecazlı bir deyimdir."
      },
      {
        id: "dil123",
        difficulty: "easy",
        question: "'Yarın' kelimesi cümlenin neresinde olursa olsun hangi türdedir?",
        options: ["İsim", "Zaman zarfı", "Sıfat", "Edat"],
        correctIndex: 1,
        explanation: "'Yarın' kelimesi 'gelecek gün' anlamıyla cümlede zaman bildirir ve genellikle zaman zarfı olarak kullanılır."
      },
      {
        id: "dil124",
        difficulty: "easy",
        question: "'Bisiklet' kelimesi hangi dilden Türkçeye geçmiştir?",
        options: ["Arapça", "Fransızca", "İngilizce", "Almanca"],
        correctIndex: 1,
        explanation: "'Bisiklet', Fransızca 'bicyclette' kelimesinden Türkçeye geçmiş, Latince kökenli iki tekerlekli aracın adıdır."
      },
      {
        id: "dil125",
        difficulty: "easy",
        question: "'Bakkal' kelimesi hangi dilden gelmedir?",
        options: ["Türkçe", "Arapça", "Farsça", "Yunanca"],
        correctIndex: 1,
        explanation: "'Bakkal', Arapça 'baqqāl' (baklacı, sebze-meyve satıcısı) kelimesinden Türkçeye geçmiştir."
      },
      {
        id: "dil126",
        difficulty: "easy",
        question: "Aşağıdakilerden hangisi 'mecaz anlam' örneği değildir?",
        options: ["Soğuk insan", "Yüksek dağ", "Sıcak karşılama", "Acı söz"],
        correctIndex: 1,
        explanation: "'Yüksek dağ' gerçek anlamdır; diğer üçü mecaz (yan) anlamla kullanılan ifadelerdir."
      },
      {
        id: "dil127",
        difficulty: "easy",
        question: "İngilizce 'window' kelimesinin Türkçe karşılığı nedir?",
        options: ["Kapı", "Pencere", "Çatı", "Duvar"],
        correctIndex: 1,
        explanation: "İngilizce 'window' kelimesinin Türkçe karşılığı 'pencere'dir."
      },
      {
        id: "dil128",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkçeye Farsçadan geçmiş bir kelimedir?",
        options: ["Bahçe", "Otel", "Telefon", "Robot"],
        correctIndex: 0,
        explanation: "'Bahçe', Farsça 'bağçe' kelimesinden Türkçeye geçmiş; çiçek, sebze ve meyve yetiştirilen alan anlamındadır."
      },
      {
        id: "dil129",
        difficulty: "medium",
        question: "Türkçede 'hangisi olumsuzluk eki olabilir'?",
        options: ["-mı", "-me/-ma", "-ler", "-lik"],
        correctIndex: 1,
        explanation: "'-me / -ma' ekleri fiillere getirilerek olumsuzluk anlamı katar (gel-me, yap-ma)."
      },
      {
        id: "dil130",
        difficulty: "medium",
        question: "'Şule' adı hangi dilden gelir ve ne anlama gelir?",
        options: ["Türkçe - kadın adı", "Arapça - alev", "Farsça - çiçek", "Yunanca - güneş"],
        correctIndex: 1,
        explanation: "'Şule', Arapça'dan gelir ve 'alev, parlak ışık' anlamına gelir; Türkçede yaygın bir kadın adıdır."
      },
      {
        id: "dil131",
        difficulty: "medium",
        question: "'Bilgisayar' kelimesi nasıl bir kelimedir?",
        options: ["Türetilmiş", "Birleşik", "Yansıma", "Alıntı"],
        correctIndex: 1,
        explanation: "'Bilgisayar', 'bilgi' ve 'saymak' kelimelerinin birleşmesiyle oluşan, Türk Dil Kurumu tarafından önerilmiş birleşik bir kelimedir."
      },
      {
        id: "dil132",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi bir 'pekiştirme sıfatı'dır?",
        options: ["Yumuşacık", "Hızlı", "Soğuk", "Mavi"],
        correctIndex: 0,
        explanation: "'Yumuşacık', 'yumuşak' sıfatına -cık eki getirilerek anlam pekiştirilmiş bir pekiştirme sıfatıdır."
      },
      {
        id: "dil133",
        difficulty: "medium",
        question: "Türkçede 'da/de' bağlacı ile '-da/-de' hâl ekinin yazımı nasıl ayırt edilir?",
        options: ["Bağlaç ayrı, hâl eki bitişik yazılır", "Her ikisi bitişik yazılır", "Her ikisi ayrı yazılır", "Hâl eki ayrı, bağlaç bitişik yazılır"],
        correctIndex: 0,
        explanation: "Bulunma hâl eki '-da/-de' kelimeye bitişik yazılır (evde); 'de/da' bağlacı ise daima ayrı yazılır (Ali de gelecek)."
      },
      {
        id: "dil134",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi bir Türkçe atasözüdür?",
        options: ["Carpe diem", "Veni vidi vici", "Damlaya damlaya göl olur", "Cogito ergo sum"],
        correctIndex: 2,
        explanation: "'Damlaya damlaya göl olur', küçük tasarrufların büyük birikim oluşturduğunu anlatan klasik bir Türk atasözüdür."
      },
      {
        id: "dil135",
        difficulty: "medium",
        question: "'Düşünmek' fiilinin emir kipinin 2. tekil şahıs çekimi nedir?",
        options: ["Düşün", "Düşünüyor", "Düşündü", "Düşüneydi"],
        correctIndex: 0,
        explanation: "Emir kipinin ikinci tekil şahıs çekimi 'düşün' şeklindedir; ek almadan kullanılır."
      },
      {
        id: "dil136",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi Türkçedeki 'ek-fiil'lerden biri değildir?",
        options: ["-dır", "-imiş", "-iken", "-ler"],
        correctIndex: 3,
        explanation: "'-dır', '-imiş', '-iken' ek-fiilin (cevheri fiil) çekimleridir; '-ler' ise çoğul ekidir."
      },
      {
        id: "dil137",
        difficulty: "medium",
        question: "Bir kelimenin söz varlığında çağrıştırdığı yan ve mecaz anlamların hepsine birden ne denir?",
        options: ["Sözlük anlamı", "Konuşma anlamı", "Çağrışım (konnotasyon)", "Düz anlam"],
        correctIndex: 2,
        explanation: "Konnotasyon (çağrışım), bir kelimenin sözlük anlamı dışında akla getirdiği duygusal ve kültürel anlamların tümüdür."
      },
      {
        id: "dil138",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi bir 'isim tamlaması'dır?",
        options: ["Kırmızı elbise", "Okulun bahçesi", "Çok güzel", "Hızla koştu"],
        correctIndex: 1,
        explanation: "İsim tamlaması, en az iki ismin anlamca birleşmesiyle oluşur; 'okulun bahçesi' belirtili isim tamlamasıdır."
      },
      {
        id: "dil139",
        difficulty: "medium",
        question: "Türkçede 'sıfat tamlaması' örneği hangisidir?",
        options: ["Kitap okudum", "Bahçedeki çocuk", "Mavi kalem", "Hızla koştu"],
        correctIndex: 2,
        explanation: "'Mavi kalem', 'mavi' (sıfat) + 'kalem' (isim) yapısıyla bir sıfat tamlamasıdır."
      },
      {
        id: "dil140",
        difficulty: "medium",
        question: "Türkçenin alt dil ailesi hangisidir?",
        options: ["Hint-Avrupa", "Sami", "Altay (Türk dilleri)", "Bantu"],
        correctIndex: 2,
        explanation: "Türkçe, Türk dilleri ailesinin Oğuz koluna mensuptur; Türk dilleri Altay dil ailesi kapsamında değerlendirilir (tartışmalı olsa da)."
      },
      {
        id: "dil141",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi 'birleşik fiil' örneğidir?",
        options: ["Geliyor", "Gelmek", "Yardım etmek", "Geldim"],
        correctIndex: 2,
        explanation: "'Yardım etmek', isim ve yardımcı fiilin (etmek) birleşimiyle oluşan birleşik fiildir."
      },
      {
        id: "dil142",
        difficulty: "medium",
        question: "Türk Dil Kurumu (TDK) hangi yıl kurulmuştur?",
        options: ["1923", "1928", "1932", "1945"],
        correctIndex: 2,
        explanation: "Türk Dil Kurumu, Atatürk'ün talimatıyla 12 Temmuz 1932'de Türk Dili Tetkik Cemiyeti adıyla kurulmuş, daha sonra adı TDK'ye dönüşmüştür."
      },
      {
        id: "dil143",
        difficulty: "medium",
        question: "Aşağıdaki kelimelerden hangisi büyük ünlü uyumuna uymaz?",
        options: ["evler", "çocuklar", "kitap", "kapılar"],
        correctIndex: 2,
        explanation: "'Kitap' kelimesi Arapça kökenli alıntı bir sözcüktür; içinde hem ince ünlü 'i' hem de kalın ünlü 'a' bulunduğundan büyük ünlü uyumuna uymaz."
      },
      {
        id: "dil144",
        difficulty: "medium",
        question: "Aşağıdakilerden hangisi bir 'edat' (ilgeç) örneğidir?",
        options: ["ile", "ben", "geldi", "kalem"],
        correctIndex: 0,
        explanation: "'İle', cümlede tek başına anlamı olmayan ancak başka bir kelimeye bağlanarak anlam taşıyan bir edattır."
      },
      {
        id: "dil145",
        difficulty: "hard",
        question: "Türkçede 'eylem (fiil) çatısı' kavramı kaç ana grupta incelenir?",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        explanation: "Eylem çatıları nesne ile özne ilişkisi açısından iki ana grupta incelenir: nesne-yüklem ilişkisine göre (etken-edilgen) ve özne-yüklem ilişkisine göre (etken-dönüşlü-işteş)."
      },
      {
        id: "dil146",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'edilgen çatı' örneğidir?",
        options: ["Cüneyt kapıyı açtı", "Kapı açıldı", "Cüneyt kapıyı açtırıyor", "Cüneyt kapıyı kendisi açar"],
        correctIndex: 1,
        explanation: "'Kapı açıldı' cümlesinde kapı edilgen biçimdedir; eylemi gerçekleştiren özne belirtilmemiştir, edilgen çatıdadır."
      },
      {
        id: "dil147",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'belgisiz sıfat' örneğidir?",
        options: ["Bu kitap", "Birkaç çocuk", "Mavi gözler", "Yedi cüce"],
        correctIndex: 1,
        explanation: "Belgisiz sıfatlar varlıkları sayıca veya nicelikçe belirsiz bir şekilde nitelendirir; 'birkaç çocuk' belgisiz sıfat tamlamasıdır."
      },
      {
        id: "dil148",
        difficulty: "hard",
        question: "'Suç' ve 'kabahat' arasındaki fark için hangisi doğrudur?",
        options: ["Eş anlamlıdır", "İkisi de aynı yasal şiddete sahiptir", "Suç daha ağır, kabahat daha hafif kategoridedir", "İkisi de yasal terim değildir"],
        correctIndex: 2,
        explanation: "Hukuk dilinde 'suç' daha ağır ve cezai içerikli; 'kabahat' ise idari yaptırımı gerektiren daha hafif eylemleri ifade eder."
      },
      {
        id: "dil149",
        difficulty: "hard",
        question: "Türkçede 'devrik cümle' nedir?",
        options: ["Yüklemi sonda olmayan cümle", "Eksiltili cümle", "Birleşik cümle", "Şart cümlesi"],
        correctIndex: 0,
        explanation: "Devrik cümle; yüklemi cümle sonunda olmayan, ögelerin alışılmış sıralamasının değiştirildiği cümlelerdir (örn: 'Geldim ben.')."
      },
      {
        id: "dil150",
        difficulty: "hard",
        question: "Türkçeye Farsçadan geçmiş bir tamlama yapısı hangisidir?",
        options: ["İsim tamlaması (Türk usulü)", "Sıfat tamlaması", "Farsça izafet (terkîb-i izâfî)", "Belirtisiz isim tamlaması"],
        correctIndex: 2,
        explanation: "Farsça izafet (örn: 'Şair-i Rum', 'Sultan-i Süleyman'), Osmanlı Türkçesinde yoğun kullanılmış bir Farsça tamlama yapısıdır."
      },
      {
        id: "dil151",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'eş sesli' (sesteş) bir kelime örneğidir?",
        options: ["Yüz (sayı) - Yüz (yüzmek)", "Ev - Yuva", "Mutlu - Sevinçli", "Soğuk - Sıcak"],
        correctIndex: 0,
        explanation: "Sesteş (eş sesli) kelimeler yazılışları ve okunuşları aynı, anlamları farklı kelimelerdir; 'yüz' (100) ile 'yüz' (yüzme fiili) buna örnektir."
      },
      {
        id: "dil152",
        difficulty: "hard",
        question: "'Önsöz' anlamına gelen Arapça kökenli edebiyat terimi hangisidir?",
        options: ["Mukaddime", "Hatime", "Tezkire", "Münacat"],
        correctIndex: 0,
        explanation: "Mukaddime, Arapça'dan gelen bir terim olup eserin başında yer alan giriş ya da 'önsöz' anlamına gelir; İbn Haldun'un meşhur eseri de bu adı taşır."
      },
      {
        id: "dil153",
        difficulty: "hard",
        question: "Türkçede 'Geniş zaman' eki hangisidir?",
        options: ["-yor", "-r / -ır / -er / -ar", "-mış", "-acak"],
        correctIndex: 1,
        explanation: "Geniş zaman ekleri ünlü uyumuna göre değişen 'r, ır, ir, ur, ür, er, ar' biçimleridir; örn. 'gel-ir', 'oku-r'."
      },
      {
        id: "dil154",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi bir Latin atasözüdür?",
        options: ["Carpe diem", "Damlaya damlaya göl olur", "Bana arkadaşını söyle", "Kanaat tükenmez bir hazinedir"],
        correctIndex: 0,
        explanation: "'Carpe diem' (Anı yakala), Latin şair Horatius'a ait, Latince'nin bilinen en ünlü atasözü ifadelerinden biridir."
      },
      {
        id: "dil155",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'iyelik eki' örneğidir?",
        options: ["-ler / -lar", "-im, -in, -i, -imiz, -iniz, -leri", "-de / -da", "-den / -dan"],
        correctIndex: 1,
        explanation: "İyelik ekleri (iyilik/aitlik) nesnenin kime ait olduğunu gösterir: ev-im, ev-in, ev-i, ev-imiz, ev-iniz, ev-leri."
      },
      {
        id: "dil156",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi Osmanlı Türkçesinin alfabesidir?",
        options: ["Latin alfabesi", "Kiril alfabesi", "Arap alfabesi (Osmanlıca)", "Yunan alfabesi"],
        correctIndex: 2,
        explanation: "Osmanlı Türkçesi, 1928 Harf Devrimi'ne kadar Arap alfabesinin Türkçeye uyarlanmış biçimi olan 'Osmanlıca' ile yazılmıştır."
      },
      {
        id: "dil157",
        difficulty: "hard",
        question: "Türkçede 'Yansıma' kelimelerden biri hangisidir?",
        options: ["Şangırtı", "Mutlu", "Bahçe", "Kapı"],
        correctIndex: 0,
        explanation: "Yansıma kelimeler, doğadaki sesleri taklit eden kelimelerdir; 'şangırtı' camın kırılma sesini ifade eden tipik bir yansımadır."
      },
      {
        id: "dil158",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi bir 'cümle türü' değildir?",
        options: ["Kurallı cümle", "Devrik cümle", "Eksiltili cümle", "Çoğul cümle"],
        correctIndex: 3,
        explanation: "Kurallı, devrik ve eksiltili cümle Türkçede yaygın cümle türleridir; 'çoğul cümle' diye bir kategori yoktur."
      },
      {
        id: "dil159",
        difficulty: "hard",
        question: "Türkçede 'ulama' (liaison) ne anlama gelir?",
        options: ["Sessiz harfle biten kelimenin sonraki ünlüyle birleşip akıcı okunması", "Yumuşak harflerin sertleşmesi", "Aynı kelimenin tekrarı", "İki cümlenin virgülle bağlanması"],
        correctIndex: 0,
        explanation: "Ulama; sessiz harfle biten bir kelimenin sonraki kelimenin ilk ünlüsüyle birleşerek akıcı söylenmesi olayıdır (örn: 'kalem aldım' → 'kale-maldım')."
      },
      {
        id: "dil160",
        difficulty: "hard",
        question: "Aşağıdakilerden hangisi 'aliterasyon' örneğidir?",
        options: ["Aynı seslerin tekrarlanmasıyla ses uyumu sağlanması", "Aynı kelimenin iki kez kullanılması", "Sıfatların ardışık kullanımı", "Karşıt anlamlı kelimelerin yan yana getirilmesi"],
        correctIndex: 0,
        explanation: "Aliterasyon; bir mısra ya da cümlede aynı veya benzer sessiz harflerin tekrar edilmesiyle oluşturulan ses sanatıdır (örn: 'Karac'oğlan kara kuru kara saçlı...')."
      },
      {
        id: "dil161",
        difficulty: "easy",
        question: "Türkçede soru eki hangi seslerden oluşur?",
        options: ["-ma/-me", "-mı/-mi/-mu/-mü", "-lar/-ler", "-dan/-den"],
        correctIndex: 1,
        explanation: "Türkçede soru eki -mı/-mi/-mu/-mü (büyük ünlü uyumuna göre değişir) olup cümlelerde fiil ya da isimden sonra ayrı yazılır: 'Geldin mi?', 'Güzel mi?' Bu ek yalnızca soru cümlelerinde kullanılır."
      },
      {
        id: "dil162",
        difficulty: "easy",
        question: "'Sözcük' ve 'kelime' arasındaki fark nedir?",
        options: ["Sözcük yazılı, kelime sözlü dilde kullanılır", "Sözcük Türkçe kaynaklı, kelime Arapça kaynaklı olup ikisi aynı anlama gelir", "Kelime iki heceden fazla olan sözcükler için kullanılır", "Sözcük daha geniş kapsamlı bir terimdir"],
        correctIndex: 1,
        explanation: "Sözcük ve kelime aynı anlama gelen eş anlamlı terimlerdir; 'sözcük' öz Türkçe, 'kelime' ise Arapça kökenlidir. Türk Dil Kurumu (TDK) her ikisini de geçerli kabul etmekle birlikte özleştirme politikası çerçevesinde 'sözcük' tercih edilmektedir."
      },
      {
        id: "dil163",
        difficulty: "medium",
        question: "'Üst dil' (meta-dil) kavramı dilbilimde ne anlama gelir?",
        options: ["Birden fazla ülkede konuşulan ortak dil", "Bir dili tanımlamak ve açıklamak amacıyla kullanılan dil ya da sembol sistemi", "Bilgisayar programlama dillerinin genel adı", "Ölü dillerin araştırılması"],
        correctIndex: 1,
        explanation: "Üst dil (metalanguage), başka bir dili veya sembol sistemini tanımlamak, analiz etmek ve açıklamak için kullanılan dildir. Örneğin bir dilbilgisi kitabının dili (Türkçe), açıkladığı nesne dile (Türkçe kuralları) göre üst dildir."
      },
      {
        id: "dil164",
        difficulty: "medium",
        question: "Türkçede 'geniş zaman' kipi hangi eklerle kurulur?",
        options: ["-dı/-di/-du/-dü", "-acak/-ecek", "-ıyor/-iyor/-uyor/-üyor", "-ar/-er ve -ır/-ir/-ur/-ür"],
        correctIndex: 3,
        explanation: "Türkçede geniş zaman (aorist), -ar/-er ve -ır/-ir/-ur/-ür ekleriyle kurulur: 'gelir', 'gider', 'yazar', 'okur'. Bu kip, alışkanlıkları, kalıcı gerçekleri ve genel doğruları ifade eder."
      },
      {
        id: "dil165",
        difficulty: "medium",
        question: "Bir dilde anlam farklılaştıran en küçük ses birimine ne denir?",
        options: ["Hece", "Morfem", "Fonem", "Grafem"],
        correctIndex: 2,
        explanation: "Fonem, bir dilde iki sözcüğü birbirinden ayırt etmeye yarayan en küçük soyut ses birimidir. Türkçede 'kara' ve 'kura' sözcükleri yalnızca /a/-/u/ fonemleri bakımından farklılaşır; dolayısıyla /a/ ve /u/ ayrı fonemlerdir."
      },
      {
        id: "dil166",
        difficulty: "medium",
        question: "Türkçede cümlenin iki zorunlu temel ögesi nelerdir?",
        options: ["Özne, Yüklem, Zarf", "Özne ve Yüklem", "Nesne, Tümleç, Zarf", "Özne, Nesne, Yüklem"],
        correctIndex: 1,
        explanation: "Türkçe cümlenin iki temel ögesi özne (kim/ne yapıyor?) ve yüklemdir (ne yapıyor/nedir?). Nesne, tümleç ve zarflar ise yardımcı ögelerdir. Yüklem her zaman zorunlu; özne ise gizli olduğunda fiil çekiminden anlaşılabildiğinden cümlede yer almayabilir."
      },
      {
        id: "dil167",
        difficulty: "hard",
        question: "'Sapir-Whorf Hipotezi' (Dilsel Görelilik) ne öne sürer?",
        options: ["Tüm diller aynı evrensel gramer yapısını paylaşır", "Konuşulan dilin yapısı, konuşucunun dünyayı algılama ve düşünme biçimini etkiler", "İnsanlar dili çocuklukta değil erişkinlikte öğrenir", "Yazılı dil sözlü dile her zaman öncelik tanınmalıdır"],
        correctIndex: 1,
        explanation: "Edward Sapir ve Benjamin Lee Whorf tarafından geliştirilen dilsel görelilik hipotezine göre konuşulan dil, konuşucunun düşünce yapısını ve dünyayı algılayış biçimini şekillendirir. Güçlü versiyonu dilin düşünceyi belirlediğini, zayıf versiyonu ise etkilediğini savunur."
      },
      {
        id: "dil168",
        difficulty: "hard",
        question: "Türkçede 'dönüşlü eylem' (reflexive verb) nedir ve hangi ekle oluşturulur?",
        options: ["Başkasına yaptırılan eylem; -dır ekiyle", "Öznenin eylemi kendine yaptığı yapı; -n/-(i)n ekiyle oluşturulur", "İki öznenin birbirine yaptığı eylem; -ş ekiyle", "Edilgen yapı; -(i)l ekiyle"],
        correctIndex: 1,
        explanation: "Dönüşlü eylemler, öznenin yaptığı eylemin yine özneye yöneldiği yapılardır: 'yıka-n-mak', 'giyi-n-mek', 'tara-n-mak'. Bu yapılar -n/-(i)n ekiyle türetilir. -ş eki 'işteş (karşılıklı) eylem', -(i)l eki ise 'edilgen eylem' oluşturmak için kullanılır."
      },
      {
        id: "dil169",
        difficulty: "hard",
        question: "'Morfoloji' dilbiliminin hangi alanını kapsar?",
        options: ["Sözcüklerin cümle içindeki sırasını inceleyen dal", "Dillerin tarihsel gelişimini ve akrabalığını inceleyen dal", "Sözcüklerin yapısını, biçimsel özelliklerini ve ek sistemini inceleyen dal", "Dilin seslerini inceleyen dal"],
        correctIndex: 2,
        explanation: "Morfoloji (biçimbilim), sözcüklerin iç yapısını, kökleri, ekleri ve sözcük oluşturma süreçlerini inceleyen dilbilim dalıdır. Türkçe gibi eklemeli dillerde morfoloji kritik öneme sahiptir; anlamlı birimlerin (morfem) sözcüklere eklenmesiyle dilbilgisel ilişkiler ifade edilir."
      },
      {
        id: "dil170",
        difficulty: "hard",
        question: "'Sözdizim' (syntax) dilbiliminde neyi inceler?",
        options: ["Sözcüklerin ses yapısını", "Sözcüklerin anlam ilişkilerini", "Sözcüklerin ve öbeklerin cümle içindeki düzenleniş kurallarını", "Dillerin tarihsel kökenlerini"],
        correctIndex: 2,
        explanation: "Sözdizim, sözcüklerin, öbeklerin ve tümcelerin dilin kurallarına uygun biçimde bir araya getirilme ilkelerini inceleyen dilbilim dalıdır. Noam Chomsky'nin 1957'de geliştirdiği üretici dönüşümsel dilbilgisi modern sözdizim teorisine temel oluşturmuştur. Türkçede temel sözdizim düzeni özne-nesne-yüklem (S-O-V) biçimindedir."
      },
      {
        id: "dil171",
        difficulty: "easy",
        question: "Türkçe hangi dil ailesine aittir?",
        options: ["Hint-Avrupa", "Sami", "Çin-Tibet", "Türk dilleri (Türki diller)"],
        correctIndex: 3,
        explanation: "Türkçe, Türk dilleri ailesine aittir. Bu aile; Türkiye Türkçesi, Azerice, Özbekçe, Kazakça, Uygurca ve daha pek çok dili kapsar. Türk dilleri aglütinatif (eklemeli) yapısıyla bilinir."
      },
      {
        id: "dil172",
        difficulty: "easy",
        question: "Gabriel García Márquez'in 'Yüzyıllık Yalnızlık' adlı romanı hangi edebi akıma örnek gösterilir?",
        options: ["Realizm", "Natüralizm", "Sihirli Gerçekçilik (Magic Realism)", "Gotik kurgu"],
        correctIndex: 2,
        explanation: "Büyülü gerçekçilik, olağandışı ya da fantastik unsurların olağan günlük yaşamın ayrılmaz parçası olarak aktarıldığı bir edebi tekniktir. García Márquez'in 1967 tarihli 'Yüzyıllık Yalnızlık' romanı bu akımın en önemli örneği sayılır."
      },
      {
        id: "dil173",
        difficulty: "easy",
        question: "Shakespeare'in 'Olmak ya da olmamak, işte bütün mesele bu' ifadesini hangi oyununda kullandı?",
        options: ["Kral Lear", "Othello", "Hamlet", "Macbeth"],
        correctIndex: 2,
        explanation: "Bu ünlü söz, William Shakespeare'in 'Hamlet' (yaklaşık 1600) adlı trajedisinin üçüncü perdesinin ilk sahnesinde Prens Hamlet tarafından söylenir. Bu monolog, varoluşsal bir sorgulamanın sembolü olarak geniş bir kültürel etki alanına yayılmıştır."
      },
      {
        id: "dil174",
        difficulty: "medium",
        question: "Dilbilimde 'morfoloji' ne anlama gelir?",
        options: ["Dilin tarihsel gelişimini inceleyen dal", "Sözcük yapısını ve biçimbirimlerini inceleyen dal", "Dil edinimini inceleyen dal", "Dilin ses sistemini inceleyen dal"],
        correctIndex: 1,
        explanation: "Morfoloji, dilbilimin sözcük yapısını inceleyen dalıdır. Sözcüklerin morfemlere (anlamlı en küçük dil birimlerine) nasıl ayrıldığını, çekim ve yapım eklerinin işlevlerini araştırır. Örneğin 'kitaplar' sözcüğü 'kitap + lar' biçimbirimi analizi yapılabilir."
      },
      {
        id: "dil175",
        difficulty: "medium",
        question: "Franz Kafka'nın 'Dönüşüm' adlı hikayesindeki ana karakter hangi varlığa dönüşür?",
        options: ["Kurtadama", "Büyük bir böceğe (haşereye)", "Ağaca", "Bir taşa"],
        correctIndex: 1,
        explanation: "Kafka'nın 1915'te yayımlanan hikayesinde Gregor Samsa sabah uyandığında kendini büyük bir böceğe dönüşmüş bulur. Bu metamorfoz, yabancılaşmayı, aile içi dinamikleri ve modern çalışma hayatının baskısını sembolik biçimde ele alır."
      },
      {
        id: "dil176",
        difficulty: "hard",
        question: "Dilbilimde 'Sapir-Whorf Hipotezi' ne öne sürer?",
        options: ["Her dilin aynı temel kavramları ifade edebildiği", "Bir kişinin kullandığı dilin düşünce ve algı biçimini şekillendirdiği", "Dillerin tüm evrensel grameri paylaştığı", "Dil ediniminin yaşla birlikte imkânsız hale geldiği"],
        correctIndex: 1,
        explanation: "Sapir-Whorf Hipotezi (dilsel görecelik), kişinin konuştuğu dilin dünyayı algılama ve kavrama biçimini etkilediğini öne sürer. Güçlü versiyonu (dilsel determinizm) tartışmalı olmakla birlikte, zayıf versiyonu (dilin düşünceyi etkilediği) geniş çevrelerce kabul görür."
      },
      {
        id: "dil177",
        difficulty: "hard",
        question: "Edebiyatta 'stream of consciousness' (bilinç akışı) anlatım tekniği ne anlama gelir?",
        options: ["Birden fazla anlatıcının dönüşümlü aktardığı hikaye yapısı", "Karakterin iç dünyasının, düşüncelerinin ve duygularının kesintisiz ve serbest biçimde aktarılması", "Olayların geriye dönük flashback tekniğiyle anlatılması", "Anlatıcının kendisi hakkında konuştuğu özgün anlatı"],
        correctIndex: 1,
        explanation: "Bilinç akışı, bir karakterin iç ses, düşünce ve hisleri serbest ve kesintisiz biçimde aktarır. Virginia Woolf (Mrs. Dalloway), James Joyce (Ulysses) ve William Faulkner bu tekniğin öncüleri arasında yer alır."
      },
      {
        id: "dil178",
        difficulty: "medium",
        question: "Hangi Türk şairi Divan edebiyatının en büyük temsilcileri arasında sayılır?",
        options: ["Nazım Hikmet", "Yunus Emre", "Fuzuli", "Orhan Veli"],
        correctIndex: 2,
        explanation: "Fuzuli (1494-1556), başta Leyla ile Mecnun mesnevisi olmak üzere Türkçe, Farsça ve Arapça yazdığı derin lirik şiirleriyle Divan edebiyatının zirve isimlerinden biri kabul edilir. Beşeri ve ilahi aşkı iç içe işlemesiyle tanınır."
      },
      {
        id: "dil179",
        difficulty: "medium",
        question: "Türkçede 'ağaçlardan' sözcüğü kaç morfemden oluşur?",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        explanation: "'Ağaç-lar-dan' üç morfemden oluşur: 'ağaç' (kök), '-lar' (çoğul yapım eki) ve '-dan' (ayrılma durumu çekim eki). Türkçe eklemeli (aglütinatif) yapısı nedeniyle sözcüklere sıralı ekler getirilerek anlam zenginleştirilir."
      },
      {
        id: "dil180",
        difficulty: "hard",
        question: "James Joyce'un 'Ulysses' (1922) romanı hangi mitolojik yapıta dayandırılarak yapılandırılmıştır?",
        options: ["Homeros'un İlyada'sı", "Dante'nin İlahi Komedya'sı", "Homeros'un Odysseia'sı", "Vergilius'un Aeneis'i"],
        correctIndex: 2,
        explanation: "James Joyce'un Ulysses'i, Homeros'un Odysseia'sını modern Dublin'de (16 Haziran 1904) bilinç akışı ve çok katmanlı anlatı teknikiyle yeniden yorumlar. Her bölüm Odysseia'nın bir bölümüne karşılık gelir; Bloom-Odysseus, Molly-Penelope, Stephen-Telemakhos olarak eşleştirilir."
      },
      {
        id: "dil181",
        difficulty: "easy",
        question: "Dünyanın en fazla kişi tarafından ana dil olarak konuşulan Avrupa dili hangisidir?",
        options: ["İngilizce", "Fransızca", "İspanyolca", "Portekizce"],
        correctIndex: 2,
        explanation: "İspanyolca, yaklaşık 485-490 milyon ana dil konuşucusuyla Avrupa dillerinin en fazla ana dil konuşucusuna sahip olanıdır. Ağırlıklı olarak Latin Amerika ülkelerinde yaygın olup toplam konuşucu sayısı bakımından da dünya genelinde üst sıralarda yer alır."
      },
      {
        id: "dil182",
        difficulty: "medium",
        question: "Dilbilimde 'fonoloji' neyi inceler?",
        options: ["Sözcüklerin anlamını", "Dilin ses sistemini ve ses birimlerinin işlevini", "Cümle yapısını", "Dilin tarihsel değişimini"],
        correctIndex: 1,
        explanation: "Fonoloji, bir dilin ses sistemini; ses birimlerini (fonemleri), ses değişimlerini ve tonlamaları inceleyen dilbilim dalıdır. Türkçedeki büyük ünlü uyumu gibi kurallı ses değişim ilkelerini araştırır."
      },
      {
        id: "dil183",
        difficulty: "medium",
        question: "Türkçenin Latin alfabesine geçişi hangi yılda gerçekleşmiştir?",
        options: ["1923", "1926", "1928", "1932"],
        correctIndex: 2,
        explanation: "Atatürk'ün önderliğinde gerçekleştirilen Dil Devrimi kapsamında, Kasım 1928'de Latin kökenli Türk alfabesi benimsenmiştir. Bu reform okuma-yazma oranının artmasında belirleyici rol oynamış ve Türkçenin modernleşmesine büyük katkı sağlamıştır."
      },
      {
        id: "dil184",
        difficulty: "easy",
        question: "Birden fazla kişi arasındaki yazılı ya da sözlü konuşmaya ne ad verilir?",
        options: ["Monolog", "Diyalog", "Epik", "Lirik"],
        correctIndex: 1,
        explanation: "Diyalog, iki ya da daha fazla kişi arasında gerçekleşen karşılıklı konuşmadır. Tiyatro, roman ve sinema metinlerinde diyalog; karakterlerin düşünce, duygu ve çatışmalarını aktarmanın temel yöntemidir."
      },
      {
        id: "dil185",
        difficulty: "hard",
        question: "Metinlerarasılık (intertextuality) kavramı Julia Kristeva tarafından nasıl tanımlanmıştır?",
        options: ["Bir metnin başka bir metni birebir alıntılaması", "Her metnin başka metinlerin dokusundan örülü olduğu ve anlamın metinler arası ilişkilerden doğduğu fikri", "Bir yazarın tüm yapıtlarının birbiriyle tutarlı olması gerekliliği", "Metnin yazarın bilinçdışını yansıtması"],
        correctIndex: 1,
        explanation: "Julia Kristeva, 1967'de geliştirdiği 'metinlerarasılık' kavramıyla her metnin, geçmiş metinlerden alınan unsurların yeniden düzenlenmesinden oluştuğunu öne sürer. Roland Barthes'ın 'yazarın ölümü' tezi ve Bakhtin'in 'diyalogizm' anlayışıyla yakın ilişkilidir."
      },
      {
        id: "dil186",
        difficulty: "medium",
        question: "Orhan Pamuk hangi romanıyla Nobel Edebiyat Ödülü'nden önce dünya çapında tanınırlık elde etmiştir?",
        options: ["Sessiz Ev", "Kara Kitap", "Benim Adım Kırmızı", "Kar"],
        correctIndex: 2,
        explanation: "Orhan Pamuk, 2006'da Nobel Edebiyat Ödülü'ne layık görülmeden önce özellikle Benim Adım Kırmızı (1998) romanıyla uluslararası okuyucu kitlesine ulaşmıştır. 16. yüzyıl Osmanlı İstanbul'unda geçen bu roman, kimlik ve görme temalarını kurgusal gizemin içinde işler."
      },
      {
        id: "dil187",
        difficulty: "easy",
        question: "Hangi yazar 'Don Kişot' romanını yazmıştır?",
        options: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca", "Jorge Luis Borges"],
        correctIndex: 1,
        explanation: "Miguel de Cervantes (1547-1616) tarafından yazılan Don Kişot (Don Quijote), 1605 ve 1615 yıllarında iki bölüm halinde yayımlanmıştır. Modern Batı romanının kurucu yapıtı olarak kabul edilir."
      },
      {
        id: "dil188",
        difficulty: "hard",
        question: "'Kıyas' (analoji) dilbilimde nasıl tanımlanır?",
        options: ["Tarihsel ses değişimlerinin kurallarla açıklanması", "Bir sözcük ya da biçimin başka bir modeli örnek alarak yeni biçim türetmesi ya da düzensizlikten kurtarılması", "İki dilin ortak köken paylaşıp paylaşmadığını belirleme yöntemi", "Anlamların zamanla değişim süreci"],
        correctIndex: 1,
        explanation: "Kıyas (analoji), dilde kurala aykırı biçimlerin kurallı modeller temelinde düzeltilmesi ya da yeni sözcüklerin var olan kalıplar esas alınarak türetilmesidir. Türkçede 'gelmek' fiilinin geniş zaman çekimi 'gelir' örnek alınarak 'demek' fiili de 'der' biçiminde çekilir."
      },
      {
        id: "dil189",
        difficulty: "medium",
        question: "Dilbilimde 'semantik' neyi inceler?",
        options: ["Sözcüklerin ses yapısını", "Dilin anlam boyutunu", "Cümlelerin sözdizimsel yapısını", "Tarihsel dil değişimlerini"],
        correctIndex: 1,
        explanation: "Semantik, dilbilimin anlam incelemesini yapan dalıdır. Sözcük anlamları (leksikal semantik), cümle anlamları (cümlesel semantik) ve anlam ilişkileri (eş anlamlılık, zıt anlamlılık, anlam genişlemesi gibi) bu alanın başlıca konularındandır."
      },
      {
        id: "dil190",
        difficulty: "hard",
        question: "Noam Chomsky'nin 'Evrensel Gramer' teorisi ne öne sürer?",
        options: ["Tüm dillerin aynı sözcükleri paylaştığını", "İnsan beyninin dil öğrenimine önceden uyarlanmış, diller arasında paylaşılan soyut ilkeler içerdiğini", "Gramerin yalnızca kültürel öğrenmeyle kazanıldığını", "Yalnızca konuşulan dillerin gramer kuralı içerdiğini"],
        correctIndex: 1,
        explanation: "Noam Chomsky, 1957'den itibaren geliştirdiği Evrensel Gramer teorisiyle tüm insanların doğuştan dil edinme aygıtına (Language Acquisition Device) sahip olduğunu ve tüm dillerin ortak soyut ilkeleri paylaştığını öne sürer. Bu teori dilbilim ve bilişsel bilimi köklü biçimde etkilemiştir."
      }
    ]
  }
];
