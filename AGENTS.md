# ERGİN LAB · Project instructions

Bu depo, bireysel kullanıcılar ve yöneticiler için savunma odaklı bir siber güvenlik el kitabıdır.

## İçerik sınırı
- Yalnızca savunma, farkındalık, güvenli yapılandırma, sertleştirme, yedekleme ve olay müdahalesi anlat.
- Çalışan istismar kodu, exploit payload'ı, zararlı yazılım, kimlik bilgisi toplama, gerçekçi oltalama kiti veya yetkisiz erişim adımları ekleme.
- Alıştırmalar kurmaca alan adları ve inert içerik kullansın; hedef sistemlere istek göndermesin.
- Teknik iddiaları güvenilir, kamuya açık kaynaklarla destekle; varsayımı doğrulanmış bilgi gibi yazma.

## Kod ve dağıtım
- Uygulama TanStack Start/React ile kurulur. Rotalar `src/routes/`, sayfa bileşenleri `src/components/`, el kitabı metinleri `src/content/` altındadır.
- Yerel geliştirme: `npm ci`, `npm run dev` ve `http://localhost:8080`. Doğrulama: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`.
- OAuth istemci sırrı, veritabanı URL'si veya başka gizli değerleri kaynak dosyaya, loga, ekran görüntüsüne ya da issue'ya yazma. Gerçek entegrasyon bilgileri dağıtım platformunun secret store'unda tutulur.
- `vercel/output/`, `node_modules/`, yerel loglar ve önizleme çıktıları üretilen dosyalardır; depoya ekleme.
- `grok/app-env.json` yalnızca hassas olmayan yerel yapılandırma içindir; gizli değer saklamak için kullanma.

## Değişiklik doğrulaması
- Kullanıcıya dönük içerik Türkçe, açık ve abartısız olsun.
- Araçların ne yaptığı ve ne yapmadığı açıklansın; hukuki güvence veya tam koruma iddiasında bulunma.
- Değişiklikten sonra `npm test`, `npm run typecheck` ve `npm run build` çalıştır.
