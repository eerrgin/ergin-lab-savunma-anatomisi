import { i as __toESM } from "../_runtime.mjs";
import { J as notFound, S as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chapters-lAjOD0S0.js
var chapters = [
	{
		slug: "sozlesme",
		code: "01",
		kicker: "SINIR",
		title: "Bu laboratuvarın sözleşmesi",
		summary: "Ne öğretir, neyi bilinçli olarak yazmaz, depoyu yanlış okumamak için duran çerçeve.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici",
			"yonetici",
			"kurum"
		],
		readMin: 6,
		sources: [{
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}, {
			label: "USOM",
			href: "https://www.usom.gov.tr/"
		}],
		blocks: [
			{
				type: "p",
				text: "ERGİN LAB bir saldırı okulu değildir. Kişisel hesabı olan kişi, sosyal medyada yaşayan kişi, müşterisinin sitesini tutan tasarımcı, kod teslim eden geliştirici ve sistemi ayakta tutan yönetici aynı soruya cevap versin diye yazıldı: beni veya emanetimdeki sistemi, kötü niyetli birinin işine yaramaz hale nasıl getiririm?"
			},
			{
				type: "p",
				text: "Okumak tek başına kimseyi internetten silmez. Uygulanan katman, fırsatçı saldırganın işini pahalılaştırır. Otomatik denemelerin çoğu parola tekrarına, eski yazılıma, açık yönetim paneline ve aceleyle tıklanan mektuba dayanır. Bu el kitabı o kapıları kapatır. Sihirli bir duvar vaat etmez."
			},
			{
				type: "h",
				text: "Bilinçli eksik"
			},
			{
				type: "p",
				text: "Metin bilinçli olarak eksiktir. Eksik olan, başkasına zarar verme tarifidir. Depoda istismar kodu, zararlı örnek, oltalama kiti, kırma sözlüğü, uzaktan erişim tarifi ve adım adım sızma yoktur. Bir tekniğin adını, savunmacı onu tanısın diye anarız. Nasıl kurulacağını yazmayız. Bu, sansür değil sözleşmedir. GitHub ve benzeri ev sahipleri de bu çizgiyi saldırı aracı ile eğitim metnini ayırmak için kullanır."
			},
			{
				type: "note",
				title: "Hukuk yönelimi, avukatlık değil",
				text: "Yetkisiz erişim, veriyi bozma, sistemi durdurma ve başkasının hesabına girme çoğu ülkede suçtur. Türkiye’de 5237 sayılı Türk Ceza Kanunu’nun bilişim hükümleri bu alanı düzenler. Kendi sisteminde deniyor olman, başkasının sistemine uzanmanı meşrulaştırmaz. Bu sayfa hukuki danışmanlık değildir. Şüphen varsa avukata sor."
			},
			{
				type: "pair",
				do: [
					"Öğren, sertleştir, güncelle, yedekle, prova et.",
					"Şüpheliyse dur. Kodu kimseye okuma.",
					"Açığı, sistemin sahibine, en az bilgiyle ve kullanmadan bildir.",
					"Olay olursa izi koru, kahramanlıkla silme."
				],
				dont: [
					"İznin olmayan sistemde deneme, tarama veya hesap denemesi yapma.",
					"Bulduğun açığı önce kalabalığa saçma.",
					"Başkasının verisini kopyalayıp kanıt diye saklama.",
					"Bu metni saldırı anlatısına çevirip yeniden paylaşma."
				]
			},
			{
				type: "h",
				text: "Sorumlu bildirim"
			},
			{
				type: "list",
				items: [
					"Açığı kullanma. İçeriden veri çekme. Müşteri listesini ekran görüntüsü yapıp dolaştırma.",
					"Kuruluşun güvenlik adresine veya security.txt dosyasında yazan kanala yaz.",
					"Ne gördüğünü, hangi adreste gördüğünü ve nasıl fark ettiğini söyle. Çalışan bir istismar ekleme.",
					"Kamuya anlatmadan önce sahibine makul bir süre tanımak yaygın etiktir. Süre, insanların hâlâ açıkta olduğu bir bahaneye dönüşmesin.",
					"Kendi laboratuvarın için sorun bildirmek istersen depodaki SECURITY dosyasındaki çizgi geçerlidir: istismar paketi gönderme."
				]
			}
		]
	},
	{
		slug: "yuzey",
		code: "02",
		kicker: "ANATOMİ",
		title: "Tehdit yüzeyi",
		summary: "Saldırganın sihirli kapısı yoktur. Çalınan kimlik, kandırılan insan, bakımsız sistem.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici",
			"yonetici",
			"kurum"
		],
		readMin: 7,
		sources: [{
			label: "NIST Siber Güvenlik Çerçevesi",
			href: "https://www.nist.gov/cyberframework"
		}, {
			label: "OWASP Top 10",
			href: "https://owasp.org/www-project-top-ten/"
		}],
		blocks: [
			{
				type: "p",
				text: "Çoğu olay üç kapıdan biridir. Birincisi çalınmış kimlik: aynı parola, açık oturum, ele geçen posta. İkincisi kandırılmış insan: acele, korku, otorite, kaçırılacak fırsat. Üçüncüsü bakımsız sistem: güncellenmeyen panel, internete açık yönetim, denenmemiş yedek, işten ayrılan kişinin hâlâ duran anahtarı."
			},
			{
				type: "p",
				text: "Derinlemesine savunma, tek bir süper parolaya veya tek bir duvara güvenmemektir. Bir katman delinirse diğeri durdurur. İnsan yavaşlar, kimlik ikinci bir kanıt ister, cihaz kilitlidir, uygulama yetkiyi sunucuda keser, yedek ayrı bir yerdedir. Katman tek başına duruyorsa o bir duvar değil, bir dilektir."
			},
			{
				type: "h",
				text: "Beş soru"
			},
			{
				type: "list",
				items: [
					"Kim zarar vermek ister, kim de umursamadan zarar verir? Dolandırıcı, eski ortak, rakip, fırsatçı otomatik tarama. İkisi de aynı açık kapıdan girer.",
					"Neyi koruyorsun? Posta, para, müşteri, fotoğraf, depo, itibar, yönetim yetkisi.",
					"O şey nerede duruyor? Telefon, bulut, ajansın klasörü, eski dizüstü, unutulmuş alan adı.",
					"Kim erişebiliyor? Sen, aile, eski çalışan, eklenti, üçüncü parti sohbet aracı, ortak admin hesabı.",
					"Kaybedersen ilk saat ne yapacaksın? Yazılı değilse o saat panik saatidir."
				]
			},
			{
				type: "note",
				title: "Envanter yoksa savunma yoktur",
				text: "Kişide envanter bir sayfadır: posta, banka, sosyal hesaplar, alan adı, parola kasasının anahtarı, yedeğin yeri. Kurumda aynı sayfa sunucu, panel, sertifika, çalışan ve ayrılan kişiyi de taşır. Sahipsiz varlık en kolay kapıdır. Unutulmuş kampanya alt alan adı, terk edilmiş test sitesi, kimsenin bakmadığı depo."
			},
			{
				type: "pair",
				do: [
					"Varlıklarını bir sayfaya yaz. Hesap, alan adı, sunucu, yedek, yönetici.",
					"Her varlık için bir sahip koy. Sahipsiz satırı bu ay kapat veya devret.",
					"Büyük sistemi de aynı beş soruyla küçült. Kurum, kişisel modelin kalabalık halidir."
				],
				dont: [
					"Bizi kimse hedeflemez deme. Otomatik tarama hedef seçmez, açık arar.",
					"Güvenliği tek bir ürüne, tek bir kişiye veya tek bir parolaya bağlama.",
					"Listede olmayan hesabı yok sayma. Eski ajansın hâlâ tuttuğu alan adı senin yüzündür."
				]
			},
			{
				type: "h",
				text: "Sözlük, tarif değil"
			},
			{
				type: "list",
				items: [
					"Oltalama: seni aceleyle sır vermeye veya yanlış kapıya sokmaya çalışan mesaj.",
					"Oturum: parola doğru diye günlerce açık kalan kapı. Parola değişince kapanmayabilir.",
					"En az yetki: herkesin, her aracın, işi için gereken kadar erişmesi. Fazlası değil.",
					"Yama: bilinen arızayı kapatan resmi güncelleme. Ertelemek, kapıyı açık bırakmaktır.",
					"Tedarik zinciri: kullandığın temanın, paketin, eklentinin ve ajansın da senin kapın olması.",
					"Derinlemesine savunma: bir katman düşünce işin bitmemesi."
				]
			}
		]
	},
	{
		slug: "kimlik",
		code: "03",
		kicker: "KİMLİK",
		title: "Kimlik katmanı",
		summary: "Parola kasası, geçiş anahtarı, kurtarma kodu ve SMS’in neden yedek kaldığı.",
		audiences: [
			"birey",
			"sosyal",
			"yonetici",
			"kurum"
		],
		readMin: 8,
		sources: [{
			label: "FIDO Alliance · Passkeys",
			href: "https://fidoalliance.org/passkeys/"
		}, {
			label: "NCSC · çevrimiçi güvenlik",
			href: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online"
		}],
		blocks: [
			{
				type: "p",
				text: "Kimlik katmanı delinirse diğer her şey dekor olur. Posta ele geçtiyse bankanın şifre sıfırlaması, mağazanın kodu ve sosyal hesabın kurtarması oraya düşer. Bu yüzden sıra postadadır. Sonra para. Sonra iş ve sosyal hesap."
			},
			{
				type: "h",
				text: "Hatırlanacak tek sır"
			},
			{
				type: "list",
				items: [
					"Saygın bir parola kasası kullan. Önemli hesapların parolası uzun, rastgele ve birbirinden farklı olsun.",
					"İnsanın hatırladığı sır, kasasının ana parolası olsun. Onu da bir parola cümlesi yap. Araçlar sayfasındaki üretici alıştırma içindir; para ve posta için kasanın kendi üretecini yeğle.",
					"Aynı parolayı posta ile oyun sitesinde kullanma. Sızan bir forum, postayı da açar.",
					"Tarayıcının kayıtlı parolası, ayrı bir kasadan zayıftır. Hele ortak bilgisayarda hiç.",
					"Kasanın ana parolasını sohbete, nota uygulamasının ilk satırına ve e-postanın taslağına yazma."
				]
			},
			{
				type: "h",
				text: "İkinci kanıt"
			},
			{
				type: "steps",
				items: [
					{
						title: "Geçiş anahtarı",
						text: "Destekleyen hesapta ilk tercih. Cihazın kilidine bağlıdır, oltalama sitesine yazılmaz."
					},
					{
						title: "Uygulama doğrulaması",
						text: "Anahtar yoksa doğrulama uygulaması. Kodları buluta ekran görüntüsü diye koyma."
					},
					{
						title: "SMS yedek kalsın",
						text: "Kısa mesaj, hiç yoktan iyidir ve SIM değişimine açıktır. Tek kanıtın o olmasın."
					},
					{
						title: "Kurtarma kodu",
						text: "Bir kez gösterilir. Kasa veya kağıt. Galeri, sohbet ve masaüstü olmaz."
					}
				]
			},
			{
				type: "pair",
				do: [
					"Yönetici hesaplarında donanım anahtarı veya geçiş anahtarı kullan.",
					"Kurtarma postası ve telefonu yılda bir gerçekten senin mi diye açıp bak.",
					"Güvenlik sorusunu parola gibi rastgele yap. Annenin adı herkese açık bir hayattır.",
					"Ortak hesap yerine kasada paylaşılan kasa kullan. Parolayı mesajla iletme."
				],
				dont: [
					"Kodu okuyana hesabı teslim etme. Destek dahil.",
					"Doğrulama uygulamasını ve parolayı aynı kırılgan notta tutma.",
					"Eski eşin, eski ajansın, eski stajyerin oturumunu açık bırakma.",
					"Her şeyi hatırlarım diye kasayı reddetme. Unutulan parola, zayıf paroladan daha sık teslim olur."
				]
			},
			{
				type: "note",
				title: "Yeni hayatın ilk saati",
				text: "Yeni bir posta açıyorsan sıra şudur: benzersiz parola, çok adımlı doğrulama, kurtarma kodunu kasaya koy, sonra banka ve sosyal hesabı bu postaya bağla. Ters sıra, boş postayı sonradan ele geçirene bütün kapıları verir."
			}
		]
	},
	{
		slug: "oltalama",
		code: "04",
		kicker: "İNSAN",
		title: "Oltalama ve sosyal mühendislik",
		summary: "Acele, korku, otorite ve kaçırılacak fırsat. Savunmacının baktığı sinyaller.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici",
			"yonetici",
			"kurum"
		],
		readMin: 8,
		sources: [{
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}],
		blocks: [
			{
				type: "p",
				text: "Oltalama bir yazım yanlışı yarışması değildir. Düzgün cümle de kandırır. Savunmacı talebe bakar: senden ne isteniyor, hangi kapıdan, neden şimdi, bu isteği başka bir kanaldan doğrulayabiliyor musun."
			},
			{
				type: "h",
				text: "Durmanı gerektiren talepler"
			},
			{
				type: "list",
				items: [
					"Parola, tek kullanımlık kod, kart veya cüzdan kurtarma sözcüğü.",
					"Ödeme hedefinin, IBAN’ın veya fatura hesabının değişmesi.",
					"Hediye kartı alıp kodunu okuman.",
					"Tanımadığın bir dosyayı çalıştırman veya uzak bağlantı kurman.",
					"Sıradan bir günde yapılmayacak bir işin, bugün, hemen, gizlice yapılması.",
					"Sesin tanıdık olması. Taklit sesle arayan, müdürün acil havalesini isteyebilir. Bildiğin numaradan geri ara."
				]
			},
			{
				type: "pair",
				do: [
					"Kurumun uygulamasını veya sitesini kendin aç. Mektuptaki bağlantıyı değil.",
					"Para ve hesap değişikliğini, daha önce konuştuğun numaradan doğrula. Mektuptaki numarayı arama.",
					"Beklemediğin QR kodunu, özellikle yapıştırılmış olanı, resmi uygulamayla değiştir.",
					"Şüpheli mektubu, bağlantısına basmadan, iş yerinde bildir.",
					"Araçlar sayfasındaki karar masasında refleksi prova et. Oradaki kurumlar kurmacadır."
				],
				dont: [
					"Korku, süre ve utanç aynı cümledeyse devam etme.",
					"Destek olduğunu söyleyen yoruma, profildeki linke veya açılır pencereye sır yazma.",
					"Beklenmedik bir OAuth ekranında posta kutusunun tamamına izin verme.",
					"Ekip arkadaşını, tıkladı diye utandırma. Suskunluk bir sonraki olayı gizler."
				]
			},
			{
				type: "note",
				title: "İkinci kanal",
				text: "İkinci kanal, mesajın içinden çıkan kanal değildir. Sen, daha önceden bildiğin numarayı, yer imini veya yan masadaki kişiyi kullanırsın. Saldırgan mektubun içine sahte bir doğrulama numarası da koyar. O numara ikinci kanal sayılmaz."
			},
			{
				type: "h",
				text: "Tasarım bunu eğitmesin"
			},
			{
				type: "p",
				text: "Web tasarımcısı ve geliştirici, kullanıcıya destek sana kodu soracak diye eğitim veren metin yazmaz. Parolayı gömülü bir çerçeveye, üçüncü parti sohbete veya e-posta taslağına yazdırmaz. Her kötü arayüz, bir sonraki gerçek oltalamayı inandırıcı yapar."
			}
		]
	},
	{
		slug: "sosyal",
		code: "05",
		kicker: "PROFİL",
		title: "Sosyal medya kullanıcısı",
		summary: "Herkese açık hayat, sahte destek, sahte yatırım ve ele geçen hesabın çevreyi kandırması.",
		audiences: ["sosyal", "birey"],
		readMin: 8,
		sources: [{
			label: "NCSC · çevrimiçi güvenlik",
			href: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online"
		}],
		blocks: [
			{
				type: "p",
				text: "Sosyal hesap bir günlük değil, bir kimlik kapısıdır. Ele geçirilince senin sesinle çevrene bağış linki, sahte iş ve sahte aşk yazılır. Koruma, hem kapıyı kilitlemek hem de herkese açık hayatı küçültmektir."
			},
			{
				type: "h",
				text: "Herkese açık bırakma"
			},
			{
				type: "list",
				items: [
					"Canlı konum, evin kapı numarası, çocuğun okulu, bilet, plaka, otel anahtar kartı.",
					"Tatildeyiz paylaşımını dönüşe bırak. Boş ev duyurusu yapma.",
					"Doğum gününü ve ailenin adını, güvenlik sorusu hâlâ buysa, profilde tutma. Soruyu rastgeleleştir.",
					"İş hesabı ile kişisel hesabın parolası aynı olmasın. Biri düşünce diğeri durabilsin.",
					"Ortak hesap ve eski ilişkinin açık oturumu: bugün kapat, cihazlardan çık."
				]
			},
			{
				type: "h",
				text: "Dolandırıcının cümleleri"
			},
			{
				type: "list",
				items: [
					"Yorumdaki sahte destek: bize DM gel, hesabını kurtaralım. Resmi uygulamadan gir.",
					"Takipçi, mavi tik, çekiliş. Mağaza dışı bir uygulama hesap isterse reddet.",
					"Yatırım grubu, tanımadığın hocanın kesin kazancı, önce küçük sonra büyük havale.",
					"Acele hastalık, gözaltı, gümrük. Parayı, arayanın verdiği hesaba değil, aileyi bildiğin numaradan arayarak doğrula.",
					"Tanıştığın kişinin kısa sürede yatırıma, hediye karta veya paket taşımaya geçmesi."
				]
			},
			{
				type: "pair",
				do: [
					"Çok adımlı doğrulamayı aç. Kurtarma kodunu galeriye koyma.",
					"Bağlı uygulamaları ve oturum açılmış cihazları yılda en az bir kez sök.",
					"Hesap çalınınca çevrene sen yaz: benden link ve para isteği gelirse ben değilim.",
					"Çocuk ve yaşlı hesabını birlikte otur, izinleri birlikte kapat.",
					"Platformun kendi yardım sayfasını yer imine al. Olay anında arama sonucundaki ilana güvenme."
				],
				dont: [
					"İndirilen takipçi aracına hesabı bağlama.",
					"Tanımadığın cihazdan gelen giriş kodunu birine iletme.",
					"Özel fotoğrafı, sonra silerim diyerek güvenmediğin kişiye verme. Kopya sende kalmaz.",
					"Açıklamadaki link kısaltıcısına, kampanya bitmiş olsa bile, yönetim yetkisi verme."
				]
			},
			{
				type: "note",
				title: "Ele geçen hesabın ilk üç işi",
				text: "Temiz bir cihazdan resmi kurtarma akışına gir. Parolayı ve oturumları yenile. Çevrene, o hesabın ağzından yazılan para ve link talebinin sahte olduğunu söyle. Ayrıntılı sıra Olay sayfasında."
			}
		]
	},
	{
		slug: "cihaz",
		code: "06",
		kicker: "CİHAZ",
		title: "Cihaz, tarayıcı ve posta",
		summary: "Kilit, güncelleme, eklenti, yönlendirme kuralı ve kayıp telefon.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici"
		],
		readMin: 7,
		sources: [{
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}],
		blocks: [
			{
				type: "p",
				text: "Cihaz, kimliğin oturduğu masadır. Kilitsiz telefon, bütün kasanın anahtarını taşır. Güncellenmeyen tarayıcı ve fazladan bir eklenti, o anahtarı başkasına okutur. Postadaki gizli bir yönlendirme kuralı ise parolayı değiştirsen bile mektupların kopyasını dışarı yollar."
			},
			{
				type: "list",
				items: [
					"Ekran kilidi her cihazda. Kısa ve başkasına söylenen PIN olmasın.",
					"Sistem, tarayıcı ve uygulamalar resmi mağazadan güncellensin. Crack diye anılan kırık uygulama kurma.",
					"Disk şifrelemesini kapatma. Dizüstü çalınırsa hesaplar kadar diskteki evrak da gider.",
					"Eklentiyi azalt. Okuma aracı, kupon aracı ve ücretsiz indirici, sayfanın içini görür.",
					"Herkese açık ağda yönetim yapma. Posta ve banka için kendi bağlantını yeğle.",
					"Kayıp cihazda satıcının bul-ve-kilitle aracını, sonra hesap oturumlarını kapatmayı aynı gün yap."
				]
			},
			{
				type: "h",
				text: "Postanın gizli kapıları"
			},
			{
				type: "steps",
				items: [
					{
						title: "Yönlendirme",
						text: "Ayarlarda başka adrese giden kural var mı bak. Sen eklemediysen hesap ele geçmiştir."
					},
					{
						title: "Filtre",
						text: "Bazı kurallar mektubu gelen kutusuna düşürmeden siler veya saklar. Banka uyarıların yok oluyorsa burada bak."
					},
					{
						title: "Bağlı uygulama",
						text: "Postayı okuma izni almış eski araçları kapat. İzin verdiğini hatırlamadığın her satır şüphelidir."
					},
					{
						title: "Kurtarma",
						text: "Yedek posta ve telefon hâlâ senin. Eski iş adresine kurtarma düşmesin."
					}
				]
			},
			{
				type: "pair",
				do: [
					"Otomatik güncellemeyi aç. Erteleme alışkanlığını bir iş gibi yönet.",
					"İş ve kişisel tarayıcı profilini ayır. Müşteri panelini reklam tarayıcısında açma.",
					"Paylaşılan bilgisayarda oturumu kapat, parolayı kaydetme."
				],
				dont: [
					"Tanımadığın USB belleği iş makinesine takma.",
					"Ekran paylaşımında posta kutusunu ve kasayı açık bırakma.",
					"Kırık lisans, bedava premium ve indirilmiş masaüstü uygulamasına güvenme."
				]
			}
		]
	},
	{
		slug: "web",
		code: "07",
		kicker: "SITE",
		title: "Web tasarımcısının savunması",
		summary: "Alan adı, form, gömü, korsan tema, terk edilmiş DNS ve security.txt.",
		audiences: ["tasarimci", "gelistirici"],
		readMin: 9,
		sources: [{
			label: "RFC 9116 · security.txt",
			href: "https://www.rfc-editor.org/rfc/rfc9116"
		}, {
			label: "OWASP Top 10",
			href: "https://owasp.org/www-project-top-ten/"
		}],
		blocks: [
			{
				type: "p",
				text: "Tasarımcı çoğu zaman saldırı yazmaz, kapıyı açık bırakır. Korsan tema, varsayılan yönetici, sohbete yapışmış FTP şifresi, bitmiş kampanyanın unutulan alt alan adı ve her sayfaya gömülmüş üçüncü parti betik. Kötü niyetli geliştirici bu kapıları senden daha düzenli tarar."
			},
			{
				type: "h",
				text: "Yayınlamadan önce"
			},
			{
				type: "list",
				items: [
					"Alan adı hesabında çok adımlı doğrulama ve kayıtçı kilidi olsun. Alan adı giderse site senin olmaktan çıkar.",
					"Sertifika kendiliğinden yenilensin. Süresi dolmuş kilit ekranı, panikle yanlış bağlantıya bastırır.",
					"Yönetim panelinin varsayılan adı ve parolası canlıda kalamaz. Adresi gizlemek yetki değildir.",
					"Korsan, nulled, cracked tema ve eklenti kurma. Bedava görünen paket, kapının kendisidir.",
					"Kullanmadığın eklentiyi sil. Kapalı duran eski eklenti de güncellenmezse kapıdır.",
					"Staging sitesinde gerçek müşteri verisi tutma. Test şifresi canlı parola olmasın.",
					"Güncellemeden önce yedek al. Temayı denemeden bütün siteye basma."
				]
			},
			{
				type: "h",
				text: "Form, gömü, dosya"
			},
			{
				type: "list",
				items: [
					"Topladığın her alan bir emanettir. Kullanmayacağın kimliği, kimlik fotokopisini ve parolayı isteme.",
					"Parolayı formdan alıp düz e-posta ile kendine yollama.",
					"Sohbet, analitik, yazı tipi ve ödeme gömüsü birer güvenilen çalışandır. Listele. Gereksizini sök.",
					"Anahtarı ön yüze gömme. Tarayıcıya inen sır, herkese açıktır.",
					"Yüklenen dosyayı çalıştırılabilir bir klasöre koyma. Tür ve boyut sınırı koy. İşin gerektirmiyorsa yükleme hiç olmasın.",
					"Hata sayfasında sunucu yolu, sürüm ve veritabanı cümlesi gösterme.",
					"İletişim formuna hız sınırı düşün. Doğrulama anahtarını sayfanın içine yazma."
				]
			},
			{
				type: "pair",
				do: [
					"security.txt yayınla: /.well-known/security.txt içine iletişim adresini koy. İyi niyetli bildirim sana ulaşsın.",
					"Kampanya bitince DNS kaydını kaldır. Terk edilmiş alt alan adı başkasının eline geçebilir.",
					"Müşteri sırrını parola kasasında tut. Sohbet, ortak tablo ve iş notu düz metin kasa değildir.",
					"Yönetim hesabını kişiye bağla. Ortak yönetici şifresini ajans sohbetinde bırakma.",
					"Çerez bandını güvenlik sanma. Toplamadığın veriyi korumak zorunda kalmazsın."
				],
				dont: [
					"Müşterinin panel şifresini mesajda, faturada veya tema dosyasında bırakma.",
					"Kullanıcıya destek senden kod isteyecek diye metin yazma.",
					"İznin olmayan rakip sitede tarama aracı çalıştırma. Kendi siten olsa bile, ne yaptığını bilmediğin aracı yedeksiz basma.",
					"Güvenliği yalnızca gizlenmiş bir düğmeyle sağlamış sayma."
				]
			},
			{
				type: "note",
				title: "Başlıklar ne işe yarar",
				text: "HTTPS bütün sitede olsun. HSTS, tarayıcıya bu ada yalnızca güvenli bağlan demektir. Çerezde Secure, HttpOnly ve SameSite bayrakları oturumu komşu sitelerin okumasını zorlaştırır. İçerik güvenliği politikası, sayfaya sonradan karışan betiği kısıtlar. Bunlar çerçevedir, istismar tarifi değildir. Ayrıntıyı resmi barındırma ve çatı belgeleriyle uygula. Bayrağı kapatarak sorunu çözme."
			}
		]
	},
	{
		slug: "yazilim",
		code: "08",
		kicker: "KOD",
		title: "Geliştiricinin teslim disiplini",
		summary: "Sırlar, sunucuda yetki, bağımlılık, günlük ve depo hesabının kendisi.",
		audiences: [
			"gelistirici",
			"tasarimci",
			"yonetici"
		],
		readMin: 9,
		sources: [{
			label: "OWASP ASVS",
			href: "https://owasp.org/www-project-application-security-verification-standard/"
		}, {
			label: "OWASP Top 10",
			href: "https://owasp.org/www-project-top-ten/"
		}],
		blocks: [
			{
				type: "p",
				text: "Güvenli teslim, zekice bir saldırı bilmek değildir. Güvenilmeyen girdiyi veri olarak tutmak, yetkiyi her istekte sunucuda kesmek, sırrı deponun dışında tutmak ve başkasının paketini gözü kapalı çalıştırmamaktır. Çatı ve hazırlanmış sorgular bu işin çoğunu yapar. Onları kapatarak hız kazanılmaz."
			},
			{
				type: "h",
				text: "Sır ve depo"
			},
			{
				type: "list",
				items: [
					"Anahtar ortamda veya sır kasasında durur. İstemciye, görsele ve örneğe gömülmez.",
					"Depoya düşmüş sırrı silmek yetmez. Commit geçmişte kalır. Sırrı yenile, sonra temizle.",
					"Kilit dosyasını commit et. Sürüm, herkeste aynı kalsın.",
					"Üretim verisini dizüstüne indirme alışkanlığını kes. Gerekiyorsa maskele, az tut, iş bitince sil.",
					"Günlüğe parola, oturum jetonu, tam kart ve kimlik numarası yazma. Hata izleme aracı da bir günlüktür.",
					"Kullanıcıya genel bir hata göster. Ayrıntı yalnızca özel logda kalsın."
				]
			},
			{
				type: "h",
				text: "Yetki"
			},
			{
				type: "list",
				items: [
					"Arayüzde düğmeyi gizlemek yetki değildir. Her hassas istek, kim olduğunu ve bu kayda hakkı olup olmadığını sunucuda yeniden sorar.",
					"Sorguları metin birleştirerek kurma. Çatıların parametreli yolunu kullan.",
					"Çıktıyı, çatının kaçışını kapatarak basma. Zengin metin gerekiyorsa beyaz listeyle sınırla.",
					"Oturum çerezini Secure, HttpOnly ve uygun SameSite ile bırak. Bayrakları örnek diye kapatma.",
					"Siteler arası istek korumasını çatı veriyorsa kapatma.",
					"Veritabanı kullanıcısı uygulamanın ihtiyacından fazlasını yapamasın. Yönetici hesabıyla uygulama çalıştırma.",
					"Ortamları ayır. Testin parolası üretimin parolası olmasın."
				]
			},
			{
				type: "pair",
				do: [
					"Kimlik ve yetki değişen kodu ikinci bir kişi okusun.",
					"Bağımlılık uyarısını eritme. Güncelle, dene, geçir.",
					"CI içindeki üçüncü parti eylemi, mümkünse hareketli bir etikete değil sabit bir kayda bağla.",
					"Kendi GitHub hesabında çok adımlı doğrulama, süresi dolan ince yetkili jeton ve OAuth gözden geçirmesi olsun.",
					"Gizli tarama uyarısı gelince aynı gün döndür."
				],
				dont: [
					"Yorumlardaki kurulum komutunu, paketin adını harf harf görmeden çalıştırma.",
					"Özellik bayrağının arkasına güvenlik koyup bayrağı unutma.",
					"Hata ayıklama uçlarını üretimde açık bırakma.",
					"Kişisel erişim jetonunu dizüstünün düz dosyasında, süresi olmadan sonsuza dek tutma."
				]
			},
			{
				type: "note",
				title: "Kişisel veri",
				text: "Türkiye’de kişisel veri için KVKK yükümlülükleri doğabilir: gereğinden fazlasını toplama, neden tuttuğunu bil, saklama süresini yaz, sızıntıda bildirim gerekebilir. Bu bir hukuk görüşü değildir. Ürün veri tutuyorsa avukat ve veri sorumlusu ile netleştir."
			}
		]
	},
	{
		slug: "sistem",
		code: "09",
		kicker: "ODA",
		title: "Sistem yöneticisinin sertleştirmesi",
		summary: "Ayrı yönetici, kapalı panel, yama, ayrılan kişi ve gözün göreceği alarm.",
		audiences: [
			"yonetici",
			"kurum",
			"gelistirici"
		],
		readMin: 9,
		sources: [{
			label: "NIST Siber Güvenlik Çerçevesi",
			href: "https://www.nist.gov/cyberframework"
		}, {
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}],
		blocks: [
			{
				type: "p",
				text: "Yönetici, herkesin anahtarını taşır. Günlük hesapla gezinmek, yönetim panelini dünyaya açmak, ortak admin parolasını panoya yazmak ve yedeği hiç denememek aynı hatanın dört halidir: emanet ile gündelik hayat karışmıştır."
			},
			{
				type: "h",
				text: "Erişim"
			},
			{
				type: "list",
				items: [
					"Yönetim hesabı ayrı olsun. Onunla posta okuma, onunla gezinme.",
					"Yönetimde çok adımlı doğrulama, mümkünse donanım anahtarı olsun.",
					"Uzaktan yönetimde parola yerine kişiye bağlı anahtar kullan. Parola girişini kapat.",
					"Yönetim arayüzünü internete körlemesine bırakma. Bilinen bir erişim yolunun arkasına al.",
					"Varsayılan kapıyı değiştirmek güvenlik değildir. Duvar, kimlik ve kapalı gereksiz servistir. Gelen tarafta varsayılan reddet, yalnız gerekeni aç.",
					"Ortak yönetici hesabı olmasın. Kimin girdiği belli değilse olay da belli olmaz.",
					"Hizmet hesapları en az yetkiyle yaşasın. Uygulama, kök olmasın."
				]
			},
			{
				type: "h",
				text: "Zaman"
			},
			{
				type: "list",
				items: [
					"Yama takvimi yaz. İşletim sistemi, panel, eklenti, sertifika, alan adı, aygıt yazılımı.",
					"Acil yama için ayrı bir kapı olsun. Takvim, bahaneye dönüşmesin.",
					"Sertifika ve alan adı bitişini alarm et. Sürpriz, pazar gecesi gelsin istemezsin.",
					"Disk doluluğu, yedek hatası ve yeni yönetici hesabı gürültü etsin. Sessiz sistem, sağlıklı sistem değildir.",
					"Saatler senkron olsun. Olayın sırası, yanlış saatte okunmaz.",
					"Ayrılan kişinin hesabı, anahtarı, VPN’i ve ortak kasası aynı gün kapansın. Yarın ajansın işi değildir."
				]
			},
			{
				type: "pair",
				do: [
					"Misafir ağı ile iş ağını ayır. Ofis Wi-Fi’si sunucu ağı olmasın.",
					"Envanterde sahibi olmayan sunucuyu kapat veya sahip ata.",
					"Acil erişimi iki kişiyle yaz. Tek kişinin bildiği şifre, o kişi yoksa kilittir.",
					"Kurulumu yaz. Bir kişilik hafıza, otobüs faktörüdür.",
					"Log yeterince dursun ki bir hafta önceki yeni hesabı görebilesin. İzi, utançtan silme."
				],
				dont: [
					"Yönetim parolasını bilet sistemine, sohbete ve ortak tabloya yapıştırma.",
					"Kullanılmayan servisi kurulu diye bırakma.",
					"Yedeği yalnızca aynı makinenin yanındaki diske koyma. Fidye yazılımı onu da görür.",
					"Güvenliği yalnızca değiştirilmiş bir kapı numarası sanma."
				]
			},
			{
				type: "note",
				title: "Küçük ekip de kurumdur",
				text: "Tek kişilik ajanssan maddeler küçülür, kalkmaz. Ayrı yönetim hesabı, çok adımlı doğrulama, denenmiş yedek ve alan adı kilidi hâlâ senin işindir. Müşteri bunları senden bekler, panel şifresini mesajda değil."
			}
		]
	},
	{
		slug: "tedarik",
		code: "10",
		kicker: "ZİNCİR",
		title: "Sahte geliştirici ve tedarik zinciri",
		summary: "Korsan tema, taklit paket, zehirli ödev, sahte işe alım ve değişen IBAN.",
		audiences: [
			"gelistirici",
			"tasarimci",
			"yonetici",
			"kurum"
		],
		readMin: 8,
		sources: [{
			label: "OWASP Top 10",
			href: "https://owasp.org/www-project-top-ten/"
		}, {
			label: "NIST Siber Güvenlik Çerçevesi",
			href: "https://www.nist.gov/cyberframework"
		}],
		blocks: [
			{
				type: "p",
				text: "Kötü niyetli geliştirici çoğu zaman senin kapını kırmaz. Senin güvendiğin bir paketin, bir temanın, bir ajansın veya bir iş teklifinin içine oturur. Tedarik zinciri, senin yazmadığın kodun da senin sorumluluğun olmasıdır."
			},
			{
				type: "h",
				text: "Kapılar"
			},
			{
				type: "list",
				items: [
					"Korsan tema ve eklenti. Lisanssız paket, içine kapı konmuş halde dolaşır. Bedel, fiyattan pahalıdır.",
					"Taklit paket adı. Kurulum satırını yorumdan kopyalama. Adı, yayınlayanı ve resmi kaynağı harf harf doğrula.",
					"İç paketinle aynı adı taşıyan herkese açık paket. Kendi özel kayıt otoriteni ve kapsamını netleştir, gelişigüzel herkese açık kaynaktan çekme.",
					"Sahte işe alım veya sahte müşteri: depoyu indir, aracı çalıştır, bugün gönder. Tanımadığın projeyi iş makinesinde, gerçek jetonların yanında çalıştırma.",
					"Bakımcısı değişmiş popüler araç. Büyük güncellemede değişiklik notunu ve yayınlayanı oku.",
					"Fatura ve IBAN değişikliği. Yazılımdan bağımsız en pahalı tedarik saldırısıdır. İkinci kanal şart.",
					"Tanımadığın bellek. Kapıda bulunan USB, meraktır. İş makinesine takılmaz."
				]
			},
			{
				type: "pair",
				do: [
					"Ajans ve serbest çalışan değişince anahtarları yenile. Eski ortağın erişimini aynı gün kapat.",
					"Müşteri kasasında ajansa gereken kadar yetki ver. Kök ve alan adı, gündelik tasarımcı hesabında durmasın.",
					"CI üzerinde çalışan üçüncü parti eylemi gözden geçir. Yeni iş akışı, yeni bir çalışandır.",
					"Ödev ve deneme reposunu, mümkünse ayrı bir kullanıcı ve ayrı bir makine gibi ele al. Gerçek bulut jetonunu oraya koyma.",
					"Satın aldığın hizmetin güvenlik iletişimini bil. Olmayanın security.txt’si yoksa sor."
				],
				dont: [
					"Tanımadığın çalıştırılabilir dosyayı portföy acelemesiyle açma.",
					"Eklentiyi, yıldızına bakıp üretim kasasına bağlama.",
					"Ortak bir çalışanın kişisel cihazından, şirket jetonuyla, herkese açık ağda yayın alma.",
					"Değişen banka hesabını mektubun içindeki telefonla doğrulama."
				]
			},
			{
				type: "note",
				title: "Güven devredilir",
				text: "Bir gömü, bir tema, bir sürekli entegrasyon eylemi, senin yetkini paylaşır. Liste kısa kalsın. Kaldıramadığın her satırın yayınlayanını ve yenileme tarihini yaz. Yazamadığın satır, sahipsiz kapıdır."
			}
		]
	},
	{
		slug: "olay",
		code: "11",
		kicker: "İLK SAAT",
		title: "Hesap ele geçince",
		summary: "Panik yok, temiz cihaz, önce posta, oturumlar, para, çevre ve kurumda izi korumak.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici",
			"yonetici",
			"kurum"
		],
		readMin: 7,
		sources: [{
			label: "USOM",
			href: "https://www.usom.gov.tr/"
		}, {
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}],
		blocks: [
			{
				type: "p",
				text: "Olay anında insanlar iki hata yapar. Ya utançtan hiçbir şey yapmaz, ya da tanımadıkları bir kurtarıcıya daha fazla yetki verir. İkisi de kapıyı genişletir. Doğru hız, yayılmayı kesmek ve çevreni uyarmaktır."
			},
			{
				type: "steps",
				items: [
					{
						title: "Dur",
						text: "Kodu okuma, mektuptaki destek numarasını arama, uzak bağlantı kurma. Gördüğünü iki cümle yaz."
					},
					{
						title: "Temiz kapı",
						text: "Başka bir cihazdan, adresi kendin yazarak gir. Önce posta."
					},
					{
						title: "Oturum",
						text: "Parolayı benzersiz yap, bütün oturumları kapat, doğrulamayı yenile, yönlendirme kurallarını sök."
					},
					{
						title: "Para",
						text: "Bankayı resmi uygulamadan aç. Yeni alıcı ve tanımadığın hareket varsa kartı kendi bankandan dondur."
					},
					{
						title: "İnsan",
						text: "Çevrene yaz: bu hesaptan gelen link ve para benden değil. İşse aynı gün haber ver."
					},
					{
						title: "Kurum",
						text: "Format atma. Anahtarı iptal et, sırrı yenile, yedeğin sağlam kopyasına dokunma, logu silme."
					}
				]
			},
			{
				type: "pair",
				do: [
					"Etkilenen her hesapta aynı parolayı sırayla değiştir.",
					"Cüzdan şüphesinde kurtarma sözcüklerini kimseye okuma. Yeni bir cüzdana, kendi cihazında geç.",
					"Kanıtı sakla: saat, gönderen, ne istendi. Bağlantıyı herkese iletme.",
					"Olay sayfasındaki listeyi telefondan da açılacak şekilde yer imine koy."
				],
				dont: [
					"Fidye ödeyince biteceğini sanma.",
					"Kurtarma diye gelen ikinci mesaja parola yazma. Olayın üstüne ikinci bir oltalama gelir.",
					"Bildiren kişiyi cezalandırma.",
					"Müşteri verisi etkilenmiş olabilir düşüncesini yalnız başına yok sayma. Bildirim kararı yönetim ve hukuk işidir."
				]
			},
			{
				type: "note",
				title: "Etkileşimli sıra",
				text: "Bu bölümün uygulanacak hali Olay sayfasındadır. Maddeleri işaretle, kurum satırlarını atlama, bitince kapanış haftasını takvime yaz."
			}
		]
	},
	{
		slug: "kultur",
		code: "12",
		kicker: "DAYANIKLILIK",
		title: "Yedek, ritim ve kültür",
		summary: "3-2-1, denenmiş geri yükleme, aile, ekip ve suç aramayan olay notu.",
		audiences: [
			"birey",
			"sosyal",
			"tasarimci",
			"gelistirici",
			"yonetici",
			"kurum"
		],
		readMin: 7,
		sources: [{
			label: "NIST Siber Güvenlik Çerçevesi",
			href: "https://www.nist.gov/cyberframework"
		}, {
			label: "CISA · Secure Our World",
			href: "https://www.cisa.gov/secure-our-world"
		}],
		blocks: [
			{
				type: "p",
				text: "Dayanıklılık, hiç olay olmaması değildir. Olaydan sonra ayağa kalkabilmektir. Bunun aracı yedektir, provadır ve insanların utançtan susmamasıdır. Antivirüs kurulu diye yedeksiz yaşamak, kemeri takmadan hava yastığına güvenmektir."
			},
			{
				type: "h",
				text: "Üç, iki, bir"
			},
			{
				type: "steps",
				items: [
					{
						title: "Üç kopya",
						text: "Asıl iş ve en az iki yedek. Telefonun kendisi yedek sayılmaz."
					},
					{
						title: "İki ortam",
						text: "Aynı diskin iki klasörü iki ortam değildir. Bulut ve ayrı bir disk gibi farklı yerler."
					},
					{
						title: "Bir kopya ayrı",
						text: "Biri sürekli takılı olmasın. Fidye yazılımı gördüğü diski de kilitler. Ayrı tutulan kopya senin dönüşündür."
					},
					{
						title: "Prova",
						text: "Yılda en az bir kez geri yükle. Açılmayan yedek, dolu bir kutu kadar işe yarar."
					}
				]
			},
			{
				type: "list",
				items: [
					"Kişide: fotoğraf, kimlik taraması, kasanın acil kiti, alan adı. Tek telefonun camı bunların mezarı olmasın.",
					"Tasarımcıda: site dosyası, veritabanı, tema ayarı, müşteri kasasının kendisi. Güncellemeden önce taze yedek.",
					"Yöneticide: sistem, veritabanı, yapılandırma ve onu ayağa kaldıracak not. Not da yedeklenir.",
					"Kasayı da unutma. Ana parola ve kurtarma kiti, kasayla birlikte yanan evde kalmasın. Ayrı bir kopya."
				]
			},
			{
				type: "h",
				text: "İnsan düzeni"
			},
			{
				type: "pair",
				do: [
					"Ailede yılda bir on dakika: kod okunmaz, para isteği geri aranır, yedek nerede.",
					"Ekipte çeyrekte bir masa başı: posta bu sabah ele geçse ilk üç iş ne.",
					"Olay notasını suçsuz yaz. Nasıl girdi, ne gördü, hangi kapı kapandı.",
					"Bildireni koru. Suskun kültür, denetim skorundan hızlı çöker.",
					"Araçlar sayfasındaki ritmi takvime koy. Haftalık güncelleme, aylık oturum, çeyreklik prova."
				],
				dont: [
					"Güvenliği tek bir kahramanın hafızasına bırakma.",
					"Müşteriye hiç olay olmaz diye söz verme. Söz, kalkabileceğin süre üstüne olsun.",
					"Prova yapmadan yedeği tamamlanmış sayma.",
					"Ritmi büyük bir güvenlik projesine çevirip erteleme. Küçük ve tekrar eden iş kazanır."
				]
			},
			{
				type: "note",
				title: "Bu el kitabının vaadi",
				text: "Düzenli uygulanan kimlik, yama, ikinci kanal ve ayrı yedek; fırsatçı saldırıların büyük çoğunluğunu sonuçsuz bırakır. Hedefli ve sabırlı bir saldırgana karşı da süreyi ve maliyeti artırır, olayı görünür kılar. Görünür olay, bitirilebilir olaydır. Görünmeyen olay, aylarca kalan oturumdur."
			}
		]
	}
];
function getChapter(slug) {
	return chapters.find((chapter) => chapter.slug === slug);
}
function chapterNeighbors(slug) {
	const index = chapters.findIndex((chapter) => chapter.slug === slug);
	if (index < 0) return {};
	return {
		prev: index > 0 ? chapters[index - 1] : void 0,
		next: index < chapters.length - 1 ? chapters[index + 1] : void 0
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-yE_E1Avh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "Beklenmeyen bir hata oluştu. Sayfayı yenile.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-crimson",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Bir şey ters gitti"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-B4EQaQaT.css";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ERGİN LAB · Savunma Anatomisi" },
			{
				name: "description",
				content: "Kişisel kullanıcıdan sistem yöneticisine savunma el kitabı. İstismar kodu, zararlı yazılım ve saldırı tarifi içermez."
			},
			{
				name: "theme-color",
				content: "#07080b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "tr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg font-sans text-fg antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-D_BuJ0Ly.mjs");
var Route$4 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "ERGİN LAB · Savunma Anatomisi" }, {
		name: "description",
		content: "Kişisel kullanıcıdan sistem yöneticisine savunma el kitabı. Dizin, denetim ve ilk saat planı. İstismar kodu içermez."
	}] })
});
var $$splitComponentImporter$3 = () => import("./araclar-Ci5qGy6o.mjs");
var Route$3 = createFileRoute("/araclar")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Araçlar · ERGİN LAB" }, {
		name: "description",
		content: "Parola cümlesi alıştırması, oltalama karar masası ve savunma ritmi. Saldırı aracı değildir."
	}] })
});
var $$splitComponentImporter$2 = () => import("./denetim-CjAePFZ_.mjs");
var Route$2 = createFileRoute("/denetim")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Denetim · ERGİN LAB" }, {
		name: "description",
		content: "Yirmi dört savunma maddesi. Skor yalnızca bu tarayıcıda saklanır."
	}] })
});
var $$splitComponentImporter$1 = () => import("./olay-7JW1NdHI.mjs");
var Route$1 = createFileRoute("/olay")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "İlk saat · ERGİN LAB" }, {
		name: "description",
		content: "Hesap ele geçtiğinde yapılacak ve yapılmayacaklar. Saldırı adımı yoktur."
	}] })
});
var $$splitComponentImporter = () => import("./bolum._slug-BVWsVWNn.mjs");
var $$splitNotFoundComponentImporter = () => import("./bolum._slug-B3L7wV24.mjs");
var Route = createFileRoute("/bolum/$slug")({
	loader: ({ params }) => {
		const chapter = getChapter(params.slug);
		if (!chapter) throw notFound();
		return chapter;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [{ title: `${loaderData.code} ${loaderData.title} · ERGİN LAB` }, {
		name: "description",
		content: loaderData.summary
	}] : [{ title: "Bölüm bulunamadı · ERGİN LAB" }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AraclarRoute: Route$3.update({
		id: "/araclar",
		path: "/araclar",
		getParentRoute: () => Route$5
	}),
	DenetimRoute: Route$2.update({
		id: "/denetim",
		path: "/denetim",
		getParentRoute: () => Route$5
	}),
	OlayRoute: Route$1.update({
		id: "/olay",
		path: "/olay",
		getParentRoute: () => Route$5
	}),
	BolumSlugRoute: Route.update({
		id: "/bolum/$slug",
		path: "/bolum/$slug",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { chapters as i, Route as n, chapterNeighbors as r, router_exports as t };
