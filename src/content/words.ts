/** Tarayıcıda parola cümlesi için sade Türkçe sözcükler. Saldırı sözlüğü değildir. */
export const WORDS = [
  "nehir",
  "lamba",
  "defter",
  "zeytin",
  "kuzey",
  "merdiven",
  "pencere",
  "harita",
  "ekmek",
  "limon",
  "istasyon",
  "bulut",
  "cetvel",
  "pusula",
  "rüzgar",
  "kalem",
  "fener",
  "kitap",
  "bahçe",
  "deniz",
  "kahve",
  "orman",
  "köprü",
  "vagon",
  "nane",
  "saat",
  "çekirdek",
  "yelken",
  "sepet",
  "mendil",
  "fincan",
  "söğüt",
  "tebeşir",
  "peron",
  "oda",
  "kumsal",
  "ızgara",
  "nar",
  "iplik",
  "zil",
  "ocak",
  "radar",
  "ada",
  "taş",
  "yol",
  "gece",
  "sabah",
  "dağ",
  "göl",
  "çay",
  "tuz",
  "bal",
  "üzüm",
  "incir",
  "ceviz",
  "biber",
  "sofra",
  "masa",
  "sandalye",
  "avlu",
  "çatı",
  "kuyu",
  "değirmen",
  "tarla",
  "bağ",
  "iskele",
  "liman",
  "dümen",
  "halat",
  "çapa",
  "fırtına",
  "şafak",
  "alacakaranlık",
  "yıldız",
  "ay",
  "kış",
  "yaz",
  "ilkbahar",
  "sonbahar",
  "mercan",
  "kervan",
] as const;

export function passphraseBits(count: number): number {
  return Math.round(Math.log2(WORDS.length) * count);
}

export function makePassphrase(count: number): string[] {
  const picked: string[] = [];
  const used = new Set<number>();
  while (picked.length < count) {
    const index = randomIndex(WORDS.length);
    if (used.has(index)) continue;
    used.add(index);
    picked.push(WORDS[index]);
  }
  return picked;
}

function randomIndex(max: number): number {
  const limit = Math.floor(0x1_0000_0000 / max) * max;
  const buf = new Uint32Array(1);
  let value = 0;
  do {
    crypto.getRandomValues(buf);
    value = buf[0] ?? 0;
  } while (value >= limit);
  return value % max;
}
