//#region node_modules/.nitro/vite/services/ssr/assets/model-BKqueAn-.js
var audiences = [
	{
		id: "birey",
		label: "Birey",
		hint: "Posta, telefon, banka"
	},
	{
		id: "sosyal",
		label: "Sosyal medya",
		hint: "Profil, mesaj, dolandırıcılık"
	},
	{
		id: "tasarimci",
		label: "Web tasarımcısı",
		hint: "Site, form, tema, müşteri"
	},
	{
		id: "gelistirici",
		label: "Geliştirici",
		hint: "Kod, depo, bağımlılık"
	},
	{
		id: "yonetici",
		label: "Sistem yöneticisi",
		hint: "Sunucu, erişim, yedek"
	},
	{
		id: "kurum",
		label: "Kurum",
		hint: "Ekip, para, olay düzeni"
	}
];
function audienceLabel(id) {
	return audiences.find((item) => item.id === id)?.label ?? id;
}
var layers = [
	{
		n: "01",
		name: "İnsan",
		text: "Acele etme. İkinci kanaldan doğrula. Utanmadan haber ver.",
		slug: "oltalama"
	},
	{
		n: "02",
		name: "Kimlik",
		text: "Ayrı parolalar, geçiş anahtarı, kurtarma kodu kasada.",
		slug: "kimlik"
	},
	{
		n: "03",
		name: "Cihaz",
		text: "Kilit, güncelleme, şifreli disk, az eklenti.",
		slug: "cihaz"
	},
	{
		n: "04",
		name: "Hesap yüzeyi",
		text: "Sosyal profil, bağlı uygulama, açık oturum.",
		slug: "sosyal"
	},
	{
		n: "05",
		name: "Uygulama",
		text: "Site, form, kod ve sırlar. Arayüz gizlemesi yetki değildir.",
		slug: "web"
	},
	{
		n: "06",
		name: "Emanet",
		text: "Sunucu, yönetim kapısı, ayrılan kişi, yama.",
		slug: "sistem"
	},
	{
		n: "07",
		name: "Kurtarma",
		text: "Yedek, prova, ilk saat planı. Asıl dayanıklılık burada.",
		slug: "kultur"
	}
];
//#endregion
export { audiences as n, layers as r, audienceLabel as t };
