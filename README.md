# ERGİN LAB — Savunma Anatomisi

> **Kapsam:** Savunma odaklı siber güvenlik eğitimi. Bu depo istismar kodu, çalışan saldırı örneği, zararlı yazılım, kimlik bilgisi toplama veya yetkisiz erişim talimatı sunmaz.

ERGİN LAB; bireysel kullanıcılar, sosyal medya kullanıcıları, web tasarımcıları, geliştiriciler, sistem yöneticileri ve küçük ekipler için savunma alışkanlıklarını anlatan bir el kitabıdır. Amaç risk işaretlerini tanımak, hesapları ve sistemleri güçlendirmek, bir olay yaşandığında güvenli sırayla hareket etmektir.

Etkileşimli araçlar yerel eğitim ve öz değerlendirme içindir. Parola cümlesi alıştırması, denetim işaretleri ve olay listesi bu tarayıcıda saklanır. Uygulama hedef sistemleri taramaz, payload çalıştırmaz veya kullanıcı adına üçüncü taraf sistemlere istek göndermez.

Bu içerik genel eğitim amaçlıdır; hukuki, adli veya profesyonel güvenlik danışmanlığı değildir. Yalnızca sahibi olduğunuz veya yönetmek için açık yetkiniz bulunan sistemlerde işlem yapın.

## Yerelde çalıştırma

Gereksinimler: **Node.js 22.12 veya üstü** ve npm.

```sh
npm install --no-audit --no-fund
npm run dev
```

Ardından `http://localhost:8080` adresini açın. Geliştirme sunucusu `scripts/with-app-env.mjs` üzerinden başlatılır. Bu yardımcı önce çalışma alanındaki `.grok/app-env.json` dosyasını, yoksa depoda bulunan hassas olmayan `grok/app-env.json` varsayılanını okur. Yerel geliştirmede kimlik doğrulama varsayılan olarak kapalıdır.

Önerilen kontroller:

```sh
npm run typecheck
npm test
npm run lint
npm run build
npm run preview
```

`npm run preview`, üretim derlemesinden sonra önizlemeyi `http://127.0.0.1:8081` adresinde açar. `npm run build`, `DATABASE_URL` tanımlıysa kök `migrations/` dizinindeki bekleyen veritabanı geçişlerini uygular. Üretim veritabanı bağlantısı ile derleme yapmadan önce bu davranışı göz önünde bulundurun.

## El kitabı dizini

| Kod | Bölüm | Kapsam |
| --- | --- | --- |
| 01 | Sözleşme | Kullanım sınırı ve savunma amacı |
| 02 | Tehdit yüzeyi | Kimlik, insan ve bakımsız sistem |
| 03 | Kimlik katmanı | Parola kasası, geçiş anahtarı ve kurtarma |
| 04 | Oltalama | Acele, korku ve doğrulama sinyalleri |
| 05 | Sosyal medya | Profil, sahte destek ve hesap kurtarma |
| 06 | Cihaz, tarayıcı, posta | Kilit, güncelleme ve güvenli ayarlar |
| 07 | Web tasarımcısı | Alan adı, form, tema ve güvenli varsayılanlar |
| 08 | Geliştirici | Sırlar, sunucu tarafı yetki ve günlükler |
| 09 | Sistem yöneticisi | Yönetici hesapları, yama ve erişim kaldırma |
| 10 | Tedarik zinciri | Paket, ödeme talebi ve üçüncü taraf riski |
| 11 | İlk saat | Hesap ele geçirildiğinde ilk müdahale |
| 12 | Yedek ve kültür | 3-2-1, geri yükleme provası ve bildirim |

Etkileşimli parçalar arasında kurmaca oltalama karar masası, parola cümlesi alıştırması, 24 maddelik savunma denetimi ve olay müdahale listesi bulunur. Eğitim örneklerinde gerçek kullanıcı hesapları veya hedef sistemler kullanılmaz.

## Bilinçli olarak kapsam dışında

Çalışan istismar örnekleri, exploit payload'ları, zararlı yazılım, parola kırma listeleri, oltalama kitleri, kimlik bilgisi toplama, gizli erişim, yetkisiz tarama ve adım adım sızma prosedürleri bu projeye dahil edilmez. Bir riski tanımlamak, onu uygulamaya dönüştüren talimat sunmakla aynı değildir.

## Kaynaklar

- [CISA — Secure Our World](https://www.cisa.gov/secure-our-world)
- [NIST — Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
- [FIDO Alliance — Passkeys](https://fidoalliance.org/passkeys/)
- [RFC 9116 — security.txt](https://www.rfc-editor.org/rfc/rfc9116)
- [USOM](https://www.usom.gov.tr/)

## Lisans ve kullanım notu

Özgün kod ve içerik için `LICENSE` dosyasına bakın. MIT lisansı geniş yeniden kullanım izni verir; projenin savunma amacı editoryal kapsamı açıklar, MIT lisansına ek bir hukuki yasak getirmez ve belirli bir kullanım için hukuki garanti oluşturmaz. Üçüncü taraf marka, standart ve kaynakların kendi koşulları geçerlidir. Bu bir hukuki danışmanlık metni değildir.

Kimlik doğrulama veya başka bir entegrasyon etkinleştirilecekse sağlayıcıya ait OAuth istemci bilgileri yalnızca dağıtım platformunun gizli değişkenlerinde tutulmalıdır. Gerçek sırları kaynak dosyaya, ekran görüntüsüne, günlüğe veya sorun kaydına eklemeyin.
