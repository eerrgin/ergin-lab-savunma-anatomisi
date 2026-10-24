export type AudienceId =
  | "birey"
  | "sosyal"
  | "tasarimci"
  | "gelistirici"
  | "yonetici"
  | "kurum";

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "pair"; do: string[]; dont: string[] }
  | { type: "note"; title: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] };

export type Source = { label: string; href: string };

export type Chapter = {
  slug: string;
  code: string;
  kicker: string;
  title: string;
  summary: string;
  audiences: AudienceId[];
  readMin: number;
  blocks: Block[];
  sources: Source[];
};

export const audiences: { id: AudienceId; label: string; hint: string }[] = [
  { id: "birey", label: "Birey", hint: "Posta, telefon, banka" },
  { id: "sosyal", label: "Sosyal medya", hint: "Profil, mesaj, dolandırıcılık" },
  { id: "tasarimci", label: "Web tasarımcısı", hint: "Site, form, tema, müşteri" },
  { id: "gelistirici", label: "Geliştirici", hint: "Kod, depo, bağımlılık" },
  { id: "yonetici", label: "Sistem yöneticisi", hint: "Sunucu, erişim, yedek" },
  { id: "kurum", label: "Kurum", hint: "Ekip, para, olay düzeni" },
];

export function audienceLabel(id: AudienceId): string {
  return audiences.find((item) => item.id === id)?.label ?? id;
}

export const layers: { n: string; name: string; text: string; slug: string }[] = [
  {
    n: "01",
    name: "İnsan",
    text: "Acele etme. İkinci kanaldan doğrula. Utanmadan haber ver.",
    slug: "oltalama",
  },
  {
    n: "02",
    name: "Kimlik",
    text: "Ayrı parolalar, geçiş anahtarı, kurtarma kodu kasada.",
    slug: "kimlik",
  },
  {
    n: "03",
    name: "Cihaz",
    text: "Kilit, güncelleme, şifreli disk, az eklenti.",
    slug: "cihaz",
  },
  {
    n: "04",
    name: "Hesap yüzeyi",
    text: "Sosyal profil, bağlı uygulama, açık oturum.",
    slug: "sosyal",
  },
  {
    n: "05",
    name: "Uygulama",
    text: "Site, form, kod ve sırlar. Arayüz gizlemesi yetki değildir.",
    slug: "web",
  },
  {
    n: "06",
    name: "Emanet",
    text: "Sunucu, yönetim kapısı, ayrılan kişi, yama.",
    slug: "sistem",
  },
  {
    n: "07",
    name: "Kurtarma",
    text: "Yedek, prova, ilk saat planı. Asıl dayanıklılık burada.",
    slug: "kultur",
  },
];
