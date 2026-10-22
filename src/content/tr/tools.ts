import type { ToolContent } from "../types";

// Per-calculator TR content (SEO paragraphs + FAQs + intro). Numeric logic
// and formulas live in the page components, not here.

export const toolBackLabel = "Ücretsiz Araçlara Dön";
export const toolBackHref = "/ucretsiz-araclar";
export const toolCalculatorDivider = "Hesaplayıcı";
export const toolGuideDivider = "Rehber";
export const toolFaqDivider = "Sıkça Sorulan Sorular";
export const currency = "TRY" as const;
export const numberLocale = "tr-TR" as const;

export const arr: ToolContent = {
  slug: "arr",
  path: "/ucretsiz-araclar/arr-hesaplayici",
  title: "ARR Hesaplayıcı",
  description: "Yıllık Yinelenen Geliri (ARR) MRR veya müşteri sayısı ve ARPU üzerinden saniyeler içinde hesaplayın.",
  intro: "ARR (Annual Recurring Revenue), SaaS işletmenizin yıllık yinelenen gelirini gösterir. MRR'nizi girin ya da müşteri sayısı ile ortalama gelir üzerinden hesaplayın.",
  seoParagraphs: [
    { heading: "ARR Nedir ve Neden Önemlidir?", body: "ARR (Annual Recurring Revenue), abonelik tabanlı iş modellerinde bir yıl boyunca yinelemesi beklenen sözleşmesel gelirin toplamıdır. Tek seferlik satışlar, kurulum ücretleri veya değişken kullanım gelirleri ARR'ye dahil edilmez; sadece tahmin edilebilir ve yinelenen gelir kalemleri hesaba katılır. Bu nedenle ARR, SaaS ve subscription işletmelerinin gerçek büyüme hızını, sağlığını ve öngörülebilirliğini ölçen en temel finansal metrik olarak kabul edilir." },
    { body: "Yatırımcılar, ARR'yi hem şirket değerlemesinin çıpası hem de operasyonel performansın göstergesi olarak kullanır. Aylık MRR'ye kıyasla ARR, sezonsallıktan arındırılmış bir görünüm sunar ve yıllık planlama, bütçeleme ve hedef belirleme süreçlerinde daha kararlı bir referans oluşturur. Net New ARR, Expansion ARR ve Churned ARR gibi alt kırılımlar ise büyümenin nereden geldiğini anlamak için kritik önemdedir." },
    { body: "ARR'nin doğru yorumlanması için tek başına değil; büyüme oranı, net revenue retention (NRR) ve CAC geri kazanım süresi gibi metriklerle birlikte değerlendirilmesi gerekir. Yüksek ARR büyümesi ancak sağlıklı bir birim ekonomi ile birleştiğinde sürdürülebilir bir SaaS işine dönüşür." },
  ],
  faqs: [
    { q: "ARR ile MRR arasındaki fark nedir?", a: "MRR aylık yinelenen geliri, ARR ise yıllık yinelenen geliri ifade eder. En basit ilişkisiyle ARR = MRR × 12'dir; ancak yıllık planlama, kohort analizi ve yatırımcı iletişiminde ARR kullanılır." },
    { q: "Tek seferlik gelirler ARR'ye dahil edilir mi?", a: "Hayır. Kurulum ücretleri, danışmanlık, tek seferlik lisans satışları veya değişken kullanım gelirleri ARR'nin dışında tutulur. ARR yalnızca sözleşmesel ve yinelenen abonelik gelirini içerir." },
    { q: "Sağlıklı bir ARR büyüme oranı nedir?", a: "Erken aşama SaaS şirketleri için %100+ yıllık ARR büyümesi hedef alınır; ölçekleşen şirketlerde %40-60 aralığı 'iyi' kabul edilir. Sektör, pazar büyüklüğü ve müşteri segmentine göre değişkenlik gösterir." },
    { q: "Net New ARR nedir?", a: "Bir dönemde eklenen yeni ARR ile mevcut müşterilerden gelen genişleme (expansion) ARR'nin toplamından, churn ve daralma (contraction) ARR'nin çıkarılmasıyla bulunur. Gerçek büyüme kalitesini gösterir." },
  ],
};

export const cac: ToolContent = {
  slug: "cac",
  path: "/ucretsiz-araclar/cac-hesaplayici",
  title: "CAC Hesaplama: Müşteri Edinme Maliyeti Hesaplayıcı",
  description: "Müşteri edinme maliyetinizi (CAC) blended ve ücretli kanal bazında hesaplayın, CAC geri ödeme sürenizi görün. Formül, örnek ve SSS.",
  intro: "CAC (Customer Acquisition Cost), bir yeni müşteri kazanmak için harcadığınız ortalama pazarlama ve satış maliyetidir. Toplam giderlerinizi ve kazandığınız müşteri sayısını girin; isterseniz reklam harcamanızı ayırarak ücretli kanal CAC'ınızı, müşteri başı gelir ve marjınızı ekleyerek de CAC'ın kaç ayda geri döndüğünü görün.",
  seoParagraphs: [
    { heading: "CAC (Müşteri Edinme Maliyeti) nedir?", body: "CAC, belirli bir dönemde yeni müşteri kazanmak için yapılan toplam pazarlama ve satış harcamasının, o dönemde kazanılan yeni müşteri sayısına bölünmesiyle bulunur. Formül: CAC = (Pazarlama giderleri + Satış giderleri) / Kazanılan yeni müşteri sayısı. Pazarlama giderlerine reklam harcaması, ajans ve freelancer ücretleri, pazarlama yazılımları ve içerik prodüksiyonu; satış giderlerine satış ekibinin maaş, prim ve SGK maliyetleri ile CRM gibi satış araçları dahildir. CAC tek başına iyi ya da kötü değildir; müşterinin size getireceği brüt kârla, yani LTV ile birlikte okunduğunda anlam kazanır." },
    { heading: "Örnek CAC hesaplama", body: "Bir ayda 50.000 TL pazarlama (bunun 35.000 TL'si reklam) ve 30.000 TL satış gideri yapan, bu ay 100 yeni müşteri kazanan bir şirketin blended CAC'ı 80.000 / 100 = 800 TL'dir. Bu 100 müşterinin 60'ı ücretli reklamlardan geldiyse ücretli kanal CAC'ı 35.000 / 60 ≈ 583 TL olur. Müşteri başı aylık gelir 150 TL ve brüt marj %75 ise her müşteri ayda 112,50 TL brüt kâr bırakır; 800 TL'lik CAC yaklaşık 7,1 ayda geri döner. Bu üç sayıyı aynı anda görmek, 'reklam pahalı mı, satış ekibi mi pahalı, yoksa fiyat mı düşük?' sorusuna cevap verir." },
    { heading: "Blended CAC, paid CAC ve tam yüklü CAC farkı", body: "Blended CAC, organik ve referans dahil tüm yeni müşterileri hesaba katar; şirket genelindeki edinme verimliliğini gösterir ama ücretli kanalların performansını olduğundan iyi gösterebilir. Paid CAC yalnızca reklam harcamasını reklamdan gelen müşterilere böler ve bütçe kararları için daha doğru bir göstergedir. Tam yüklü (fully loaded) CAC ise maaşlar, araçlar ve genel giderlerden pazarlamaya düşen payı da içerir; yatırımcı raporlarında ve birim ekonomisi analizinde bu sürüm beklenir. Hangi sürümü kullandığınızı her raporda açıkça belirtmek, dönemler arası karşılaştırmanın tutarlı kalmasını sağlar." },
    { heading: "B2B'de CAC nasıl hesaplanır?", body: "B2B'de satış döngüsü haftalar veya aylar sürdüğünden, bu ayın harcaması çoğu zaman gelecek ayların müşterilerini getirir. Aynı ayın harcamasını aynı ayın müşterilerine bölmek CAC'ı dalgalı ve yanıltıcı gösterir. Daha sağlıklı yöntem, ortalama satış döngünüz kadar kaydırılmış dönemleri kullanmak ya da 3 aylık hareketli ortalama almaktır. B2B'de satış ekibinin maliyeti çoğu zaman reklam harcamasından büyük olduğu için tam yüklü CAC'ı takip etmek özellikle önemlidir. Huni bazında bakmak da işe yarar: lead başı maliyet, SQL başı maliyet ve müşteri başı maliyet ayrı ayrı izlendiğinde darboğazın hangi aşamada olduğu görünür." },
    { heading: "İyi bir CAC kaç olmalı? LTV:CAC ve geri ödeme süresi", body: "Evrensel bir 'iyi CAC' tutarı yoktur; 800 TL'lik CAC, aylık 50 TL'lik bir abonelik için çok yüksek, yıllık 50.000 TL'lik bir kurumsal sözleşme için çok düşüktür. Bu yüzden CAC iki oranla değerlendirilir. Yaygın kabul gören kurala göre LTV / CAC oranının en az 3 olması sağlıklı kabul edilir; 1'in altı her yeni müşterinin zarar ettirdiği anlamına gelir. CAC geri ödeme süresi ise CAC'ın brüt kârla kaç ayda geri kazanıldığını gösterir ve özellikle nakit akışı açısından kritiktir; B2B SaaS'ta 12 ayın altı genellikle hedeflenir. Türkiye'de reklam maliyetlerinin bir kısmının döviz bazlı olması, TL ile fiyatlanan ürünlerde CAC'ı kur hareketlerine duyarlı hale getirir; bu nedenle CAC'ı aylık izlemek ve fiyatlamayı buna göre gözden geçirmek gerekir." },
    { heading: "CAC nasıl düşürülür?", body: "En hızlı kaldıraç dönüşüm oranıdır: açılış sayfası, teklif ve form iyileştirmeleri aynı reklam harcamasıyla daha fazla müşteri getirir ve CAC'ı doğrudan düşürür. İkinci kaldıraç kanal karmasıdır; kanal bazında paid CAC'ı hesaplayıp bütçeyi en verimli kanallara kaydırın. Üçüncüsü, zamanla maliyeti sıfıra yaklaşan birikimli kanallardır: SEO, içerik, e-posta ve referans programları blended CAC'ı uzun vadede aşağı çeker. B2B'de ise ideal müşteri profilini (ICP) netleştirip satış ekibinin zamanını yalnızca kapanma olasılığı yüksek fırsatlara harcaması, tam yüklü CAC'ı en çok düşüren adımdır." },
  ],
  faqs: [
    { q: "CAC nasıl hesaplanır?", a: "CAC = (Pazarlama giderleri + Satış giderleri) / Kazanılan yeni müşteri sayısı. 80.000 TL toplam gider ve 100 yeni müşteri için CAC 800 TL'dir." },
    { q: "CAC hesaplamasına maaşlar dahil edilmeli mi?", a: "Tam yüklü CAC için evet: satış ve pazarlama ekibinin maaş, prim ve SGK maliyetleri dahil edilmelidir. Kanal verimliliğini ölçmek için ise yalnızca reklam harcamasını kullanan paid CAC daha uygundur. Hangisini kullandığınızı raporda belirtin." },
    { q: "İyi bir CAC değeri nedir?", a: "Mutlak bir değer yoktur; CAC, müşterinin getireceği brüt kârla kıyaslanır. Yaygın kabul gören kurallar LTV / CAC oranının en az 3 olması ve CAC'ın B2B SaaS'ta 12 ay içinde geri dönmesidir." },
    { q: "CAC ile CPA arasındaki fark nedir?", a: "CPA (Cost per Acquisition) genellikle tek bir reklam kampanyasının dönüşüm başı maliyetidir ve dönüşüm bir kayıt, lead veya satış olabilir. CAC ise tüm pazarlama ve satış maliyetini gerçek yeni müşteri sayısına böler; daha kapsamlı bir birim ekonomisi metriğidir." },
    { q: "Blended CAC ile paid CAC farkı nedir?", a: "Blended CAC organik dahil tüm müşterileri ve tüm giderleri hesaba katar. Paid CAC yalnızca reklam harcamasını ücretli kanallardan gelen müşterilere böler ve bütçe dağıtımı için daha doğru bir göstergedir." },
    { q: "CAC geri ödeme süresi nasıl hesaplanır?", a: "CAC geri ödeme süresi = CAC / (Müşteri başı aylık gelir × Brüt kâr marjı). 800 TL CAC, 150 TL aylık gelir ve %75 marjla süre yaklaşık 7,1 aydır." },
  ],
  relatedTools: [
    { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici", note: "LTV:CAC oranı" },
    { label: "CAC Geri Ödeme Süresi Hesaplayıcı", href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici", note: "Detaylı geri ödeme" },
    { label: "Reklam Bütçesi Hesaplama", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama", note: "Maks. CPA ve bütçe" },
    { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici", note: "Müşteri kaybı" },
  ],
};

export const churn: ToolContent = {
  slug: "churn",
  path: "/ucretsiz-araclar/churn-rate-hesaplayici",
  title: "Churn Rate Hesaplama: Müşteri Kayıp Oranı Hesaplayıcı",
  description: "Aylık churn oranınızı, bileşik yıllık churn'ü, ortalama müşteri ömrünü ve brüt/net gelir churn'ünü hesaplayın. Formül, örnek ve SSS.",
  intro: "Churn rate (müşteri kayıp oranı), bir dönemde kaybettiğiniz müşterilerin dönem başındaki müşterilere oranıdır. Müşteri sayılarınızı girin; araç aylık churn'ün yanında bileşik yıllık churn'ü ve ortalama müşteri ömrünü de hesaplasın. MRR verilerinizi eklerseniz brüt ve net gelir churn'ünüzü de görün.",
  seoParagraphs: [
    { heading: "Churn rate nedir, nasıl hesaplanır?", body: "Churn rate, belirli bir dönemin başındaki müşterilerin yüzde kaçının dönem içinde ayrıldığını gösterir. Formül: Churn rate = (Dönem içinde kaybedilen müşteri / Dönem başındaki müşteri) × 100. Ay başında 1.000 müşterisi olan ve ay içinde 50 müşteri kaybeden bir işletmenin aylık churn'ü %5'tir. Dönem içinde kazanılan yeni müşteriler bu hesaba dahil edilmez; aksi hâlde hızlı büyüyen bir şirkette churn olduğundan düşük görünür. Yeni müşterilerin de kayıplarını izlemek istiyorsanız kohort bazlı ölçüm yapın: her ayın kayıt olan müşterilerini ayrı bir grup olarak takip edin." },
    { heading: "Aylık churn'den yıllık churn'e: neden ×12 değil?", body: "En yaygın hata, aylık churn'ü 12 ile çarpıp yıllık churn bulmaktır. Her ay kalan müşteri tabanı küçüldüğü için kayıp bileşik işler: Yıllık churn = 1 − (1 − aylık churn)^12. %5 aylık churn, %60 değil yaklaşık %46 yıllık churn demektir. Ters yönde de aynı mantık geçerlidir; yıllık sözleşmeli bir işin %20 yıllık churn'ü, aylık bazda yaklaşık %1,8'e karşılık gelir. Ortalama müşteri ömrü ise yaklaşık 1 / aylık churn formülüyle bulunur: %5 aylık churn, ortalama 20 aylık bir müşteri ömrüne işaret eder ve LTV hesaplamasının temelini oluşturur." },
    { heading: "Müşteri churn'ü ile gelir churn'ü farkı", body: "Müşteri (logo) churn'ü kaç müşteri kaybettiğinizi, gelir churn'ü ise ne kadar gelir kaybettiğinizi ölçer. Küçük müşterileri kaybedip büyükleri tutan bir şirkette müşteri churn'ü yüksek, gelir churn'ü düşük olabilir; tersi de mümkündür. Brüt gelir churn'ü = (İptal edilen MRR + Daralan MRR) / Dönem başı MRR. Net gelir churn'ü ise mevcut müşterilerden gelen genişlemeyi (upsell, koltuk artışı) de hesaba katar: (İptal + Daralma − Genişleme) / Dönem başı MRR. Örnekte 200.000 TL'lik MRR'nin 8.000 TL'si kaybedilip 5.000 TL'si genişlemeyle eklendiyse brüt gelir churn'ü %4, net gelir churn'ü %1,5'tir." },
    { heading: "Negatif churn nedir?", body: "Net gelir churn'ü negatifse, mevcut müşterilerinizden gelen ek gelir kaybettiğiniz geliri aşıyor demektir; buna negatif churn denir. Negatif churn'e sahip bir şirket hiç yeni müşteri kazanmasa bile büyür. Bu, SaaS'ta en değerli büyüme sinyallerinden biridir ve Net Revenue Retention (NRR) oranının %100'ün üzerinde olmasıyla aynı anlama gelir. Negatif churn'e ulaşmanın yolu kullanım bazlı ya da koltuk bazlı fiyatlama, üst paket geçişlerini kolaylaştırmak ve müşteri başarısı ekibinin genişleme fırsatlarını takip etmesidir." },
    { heading: "E-ticarette churn nasıl ölçülür?", body: "Abonelik olmayan e-ticarette müşteri 'iptal' etmez, sadece bir daha alışveriş yapmaz. Bu yüzden churn, belirli bir süre boyunca tekrar sipariş vermeyen müşteri olarak tanımlanır. Bu süre ürününüzün doğal yeniden satın alma döngüsüne göre seçilmelidir: kozmetik veya gıda takviyesinde 90 gün, mobilyada çok daha uzun bir süre anlamlıdır. Tanımı belirledikten sonra aynı formülü kullanabilirsiniz. E-ticarette churn'ün tersi olan tekrar satın alma oranını izlemek, LTV ve reklam bütçesi planlaması için daha pratik bir göstergedir." },
    { heading: "İyi bir churn oranı kaçtır ve nasıl düşürülür?", body: "İyi churn oranı müşteri segmentine bağlıdır: küçük işletmelere satan SaaS ürünlerinde aylık churn doğal olarak daha yüksek, uzun sözleşmeli kurumsal ürünlerde çok daha düşüktür. Sektör karşılaştırması yerine kendi kohortlarınızın eğilimine bakmak daha güvenilirdir: yeni kohortların churn'ü eskilere göre düşüyorsa doğru yoldasınız. Churn'ü düşürmenin en etkili yolları; müşterinin ürünün değerini ilk haftalarda hissetmesini sağlayan onboarding, kullanım düşüşünü erken fark eden sağlık skorları, yıllık ödeme seçeneği ve iptal sırasında duraklatma veya daha uygun pakete geçiş seçeneği sunmaktır." },
  ],
  faqs: [
    { q: "Churn rate nasıl hesaplanır?", a: "Churn rate = (Dönem içinde kaybedilen müşteri / Dönem başındaki müşteri) × 100. 1.000 müşteriyle başlayıp 50 müşteri kaybeden işletmenin aylık churn'ü %5'tir. Dönem içinde kazanılan yeni müşteriler hesaba katılmaz." },
    { q: "Aylık churn yıllık churn'e nasıl çevrilir?", a: "Yıllık churn = 1 − (1 − aylık churn)^12. %5 aylık churn, yaklaşık %46 yıllık churn'e karşılık gelir; aylık oranı 12 ile çarpmak (%60) kaybı olduğundan yüksek gösterir." },
    { q: "Müşteri churn'ü ile gelir churn'ü arasındaki fark nedir?", a: "Müşteri churn'ü kaybedilen müşteri sayısını, gelir churn'ü kaybedilen MRR'yi ölçer. Büyük müşterileri tutup küçükleri kaybeden bir şirkette müşteri churn'ü yüksek, gelir churn'ü düşük olabilir." },
    { q: "Negatif churn nedir?", a: "Mevcut müşterilerden gelen genişleme gelirinin, iptal ve daralmadan kaybedilen geliri aşmasıdır. Net gelir churn'ü negatif olan bir şirket yeni müşteri kazanmasa bile büyür; NRR'nin %100'ün üzerinde olması ile aynı anlamdadır." },
    { q: "E-ticarette churn nasıl hesaplanır?", a: "Abonelik olmadığı için churn, belirli bir süre (ör. 90 gün) içinde tekrar sipariş vermeyen müşteri olarak tanımlanır. Süreyi ürününüzün doğal yeniden satın alma döngüsüne göre seçin, sonra aynı formülü uygulayın." },
    { q: "Churn'den ortalama müşteri ömrü nasıl bulunur?", a: "Ortalama müşteri ömrü ≈ 1 / aylık churn oranı. %5 aylık churn, yaklaşık 20 aylık ortalama müşteri ömrü demektir. Bu değer LTV hesaplamasında kullanılır." },
  ],
  relatedTools: [
    { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici", note: "Churn'den yaşam boyu değer" },
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Net gelir tutundurma" },
    { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici", note: "Aylık yinelenen gelir" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS hesaplayıcıları" },
  ],
};

export const ltv: ToolContent = {
  slug: "ltv",
  path: "/ucretsiz-araclar/ltv-hesaplayici",
  title: "LTV Hesaplama: Müşteri Yaşam Boyu Değeri Hesaplayıcı",
  description: "Müşteri yaşam boyu değerini (LTV) SaaS ve e-ticaret için ayrı formüllerle, brüt marj bazında hesaplayın; LTV:CAC oranınızı görün.",
  intro: "LTV (Customer Lifetime Value), bir müşterinin sizinle kaldığı süre boyunca bıraktığı toplam brüt kârdır. SaaS/abonelik modunda aylık gelir ve churn'den, e-ticaret modunda sipariş tutarı, sipariş sıklığı ve müşteri ömründen hesaplayın. CAC'ınızı girerseniz LTV:CAC oranınızı da görün.",
  seoParagraphs: [
    { heading: "LTV (müşteri yaşam boyu değeri) nedir?", body: "LTV, bir müşterinin ilişkiniz boyunca işletmenize bıraktığı toplam değeri ölçer ve bir müşteri kazanmak için ne kadar harcayabileceğinizin üst sınırını belirler. Doğru LTV ciro değil, brüt kâr bazında hesaplanır: 1.000 TL'lik bir siparişin ürün maliyeti 600 TL ise müşteri size 1.000 TL değil 400 TL bırakmıştır. Ciro bazlı LTV, özellikle düşük marjlı e-ticarette edinme bütçesini olduğundan yüksek gösterir ve kârsız büyümeye yol açar. Araç her iki değeri de gösterir, ancak kararlarınızı marj bazlı LTV ile verin." },
    { heading: "SaaS ve abonelik için LTV formülü", body: "Abonelik modellerinde LTV = (Aylık müşteri başı gelir × Brüt kâr marjı) / Aylık churn oranı. Buradaki 1 / churn, ortalama müşteri ömrünü ay cinsinden verir. Örnek: Aylık ARPU'su 500 TL, brüt marjı %80 ve aylık churn'ü %5 olan bir SaaS'ta müşteri başı aylık brüt kâr 400 TL, ortalama ömür 20 aydır; LTV = 400 / 0,05 = 8.000 TL. Ciro bazlı LTV ise 10.000 TL olur. Bu formül churn'ün zaman içinde sabit kaldığını varsayar; kohort verileriniz ilk aylarda yüksek, sonra azalan bir churn gösteriyorsa, kohort bazlı gerçekleşen LTV'yi formülle karşılaştırın." },
    { heading: "E-ticaret için LTV formülü", body: "E-ticarette abonelik olmadığı için LTV = Ortalama sipariş tutarı × Yıllık sipariş sayısı × Müşteri ömrü (yıl) × Brüt kâr marjı formülü kullanılır. Örnek: Ortalama sepeti 650 TL olan, yılda 3 sipariş veren ve 2 yıl aktif kalan bir müşteri 3.900 TL ciro getirir; %40 brüt marjla LTV 1.560 TL'dir. Yıllık sipariş sayısını ve müşteri ömrünü mağaza verilerinizden çıkarın: son 12-24 ayda en az bir kez sipariş veren müşterilerin ortalama sipariş sayısı iyi bir başlangıçtır. İlk siparişte kâr etmeyen bir reklam kampanyası, LTV bu açığı kapatıyorsa yine de mantıklı olabilir." },
    { heading: "LTV:CAC oranı nasıl yorumlanır?", body: "LTV:CAC oranı, bir müşteriden elde edilen brüt kârın onu kazanmanın maliyetine oranıdır. Yaygın kabul gören kurala göre 3 ve üzeri sağlıklı kabul edilir; 1'in altı her yeni müşterinin zarar ettirdiği, 5'in çok üzeri ise büyümeye yeterince yatırım yapmadığınız anlamına gelebilir. Örnekteki SaaS'ta 8.000 TL LTV ve 1.500 TL CAC ile oran yaklaşık 5,3'tür. Oranın yanında CAC geri ödeme süresine de bakın: oran yüksek olsa bile CAC'ın geri dönmesi 24 ay sürüyorsa büyüme nakit sıkışmasına yol açabilir." },
    { heading: "Enflasyon ve LTV: Türkiye için bir not", body: "Yüksek enflasyon döneminde bugün harcanan 1.000 TL'lik CAC, iki yıl boyunca parça parça geri kazanılan 1.000 TL'lik brüt kârdan daha değerlidir. Uzun müşteri ömrüne sahip işlerde LTV'yi gelecekteki nakit akışlarını iskonto ederek hesaplamak daha gerçekçi sonuç verir. Pratik bir yaklaşım: LTV hesabında müşteri ömrünü 24-36 ayla sınırlamak ve fiyatlarınızı düzenli güncellediğinizi varsayarak reel değerlerle çalışmaktır. Bu, edinme bütçesini olduğundan iyimser planlamanızı engeller." },
    { heading: "LTV nasıl artırılır?", body: "LTV'nin üç kaldıracı vardır: müşteri başı gelir, brüt marj ve müşteri ömrü. Gelir tarafında üst paket geçişleri, çapraz satış ve sepet büyütme; marj tarafında tedarik maliyetleri ve fiyatlama; ömür tarafında ise onboarding, müşteri başarısı ve e-ticarette e-posta ile yeniden satın alma akışları etkilidir. Bu kaldıraçlardan genellikle en büyük etkiyi churn'ü düşürmek yaratır, çünkü churn LTV formülünün paydasındadır: aylık churn'ü %5'ten %4'e indirmek, diğer her şey sabitken LTV'yi %25 artırır." },
  ],
  faqs: [
    { q: "LTV nasıl hesaplanır?", a: "SaaS'ta LTV = (Aylık müşteri başı gelir × Brüt marj) / Aylık churn. E-ticarette LTV = Ortalama sipariş tutarı × Yıllık sipariş sayısı × Müşteri ömrü (yıl) × Brüt marj. Her iki durumda da ciro yerine brüt kâr kullanın." },
    { q: "LTV ile CLV arasındaki fark nedir?", a: "Aynı kavramı ifade ederler: LTV (Lifetime Value) ve CLV (Customer Lifetime Value) bir müşterinin ilişki boyunca bıraktığı toplam değerdir. Bazı kaynaklar CLV'yi iskonto edilmiş, tahmine dayalı sürüm için kullanır." },
    { q: "LTV ciro üzerinden mi, kâr üzerinden mi hesaplanmalı?", a: "Kâr üzerinden. Ciro bazlı LTV, özellikle düşük marjlı işlerde müşteri değerini olduğundan yüksek gösterir ve edinme bütçesinin aşırı planlanmasına yol açar." },
    { q: "İyi bir LTV:CAC oranı nedir?", a: "Yaygın kabul gören kural en az 3'tür. 1'in altı her müşterinin zarar ettirdiğini, 5'in çok üzeri ise büyümeye yeterince yatırım yapılmadığını gösterebilir." },
    { q: "Churn'den LTV nasıl hesaplanır?", a: "Ortalama müşteri ömrü ≈ 1 / aylık churn olduğundan LTV = Aylık brüt kâr / Aylık churn. %5 churn ve 400 TL aylık brüt kâr için LTV 8.000 TL'dir." },
    { q: "Enflasyon LTV'yi nasıl etkiler?", a: "Yüksek enflasyonda gelecekte kazanılacak kâr bugünkü değerinden düşüktür. Uzun müşteri ömürlerinde iskonto uygulamak veya hesaplanan ömrü 24-36 ayla sınırlamak daha gerçekçi bir LTV verir." },
  ],
  relatedTools: [
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici", note: "Aylık ve yıllık churn" },
    { label: "Reklam Bütçesi Hesaplama", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama", note: "LTV'ye göre bütçe" },
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Marj bazlı LTV için" },
  ],
};

export const roas: ToolContent = {
  slug: "roas",
  path: "/ucretsiz-araclar/roas-hesaplayici",
  title: "ROAS Hesaplayıcı",
  description: "Reklam harcaması getiri oranınızı (ROAS) reklam gelirini reklam harcamasına oranlayarak hesaplayın.",
  intro: "ROAS (Return on Ad Spend), reklam harcamalarınızın kaç katı gelir ürettiğini gösterir. Kampanya karlılığını ölçmek için en yaygın kullanılan performans metriğidir.",
  seoParagraphs: [
    { heading: "ROAS Nedir ve Nasıl Yorumlanır?", body: "ROAS (Return on Ad Spend), reklam yatırımının doğrudan getirisini ölçen bir performans pazarlaması metriğidir. Formül basittir: ROAS = Reklam Geliri / Reklam Harcaması. 4x ROAS, harcanan her 1₺'nin 4₺ gelir ürettiği anlamına gelir. Meta Ads, Google Ads ve LinkedIn Ads gibi platformlarda kampanya optimizasyonunun temel hedef değişkenidir." },
    { body: "ROAS ciro üzerinden ölçüldüğü için tek başına kârlılığı garanti etmez. Ürün maliyeti, kargo, iade oranı ve operasyonel giderler dikkate alındığında break-even ROAS her işletme için farklıdır. Örneğin brüt marjı %30 olan bir e-ticaret markası için başabaş ROAS yaklaşık 3.33x'tir; bu eşiğin altındaki her kampanya para kaybettiriyor demektir. Bu nedenle ROAS'ın POAS (Profit on Ad Spend) ile birlikte takip edilmesi önerilir." },
    { body: "ROAS'ı iyileştirmek için hedef kitleyi daraltmak, yaratıcı (creative) rotasyonunu hızlandırmak, landing page dönüşüm oranını artırmak ve teklif stratejilerini değer bazlı (value-based bidding) modellere geçirmek en etkili yöntemlerdir." },
  ],
  faqs: [
    { q: "İyi bir ROAS değeri nedir?", a: "Sektöre ve marja göre değişir. E-ticaret için genel kabul 4x civarıdır; ancak brüt marj düşükse 5-6x, yüksek marjlı dijital ürünlerde ise 2-3x bile kârlı olabilir. Doğru referans, işletmenizin başabaş ROAS'ıdır." },
    { q: "ROAS ile ROI arasındaki fark nedir?", a: "ROAS yalnızca reklam gelirini reklam harcamasına oranlar. ROI ise net kârı (gelir - toplam maliyet) yatırıma böler ve gerçek kârlılığı gösterir. ROAS pazarlama, ROI ise finans metriğidir." },
    { q: "Break-even ROAS nasıl hesaplanır?", a: "Başabaş ROAS = 1 / Brüt Marj. Örneğin %25 brüt marjda başabaş ROAS 4x'tir; bunun altındaki her kampanya zarardır." },
    { q: "ROAS neden POAS ile birlikte takip edilmelidir?", a: "ROAS ciroya bakar; POAS ise kâra bakar. Ürün maliyeti, iade oranı ve kargo dahil edildiğinde iki metrik ciddi şekilde ayrışabilir. Kârlı büyüme için karar POAS ile verilmelidir." },
    { q: "ROAS nasıl artırılır?", a: "Üç kaldıraç vardır: dönüşüm oranını yükseltmek (landing page, teklif, sayfa hızı), sepet/ortalama sipariş değerini büyütmek (paket, çapraz satış, kargo eşiği) ve tıklama maliyetini düşürmek (arama terimi temizliği, kreatif tazeleme, kitle daraltma). Kampanya bazında hangisinin zayıf olduğunu görmek için önce dönüşüm oranı ve ortalama sipariş değerini ayrı ayrı ölçün." },
    { q: "ROAS hangi sıklıkla değerlendirilmeli?", a: "Günlük ROAS oynaktır ve yanlış karar aldırır. Anlamlı değerlendirme, dönüşüm gecikmesini (attribution window) kapsayacak şekilde en az 7 günlük hareketli pencerede yapılır; bütçe kaydırma kararları için 14-28 günlük veri daha güvenlidir." },
  ],
  relatedTools: [
    { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici", note: "ROAS'ın en güçlü kaldıracı" },
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Başabaş ROAS = 1 / brüt marj" },
    { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu", note: "Kanal bazlı doğru ölçüm" },
  ],
  relatedPost: { label: "Google Ads'te Performansı Katlamanın 7 Yolu", href: "/blog/google-ads-performans-optimizasyonu" },
};

export const utm: ToolContent = {
  slug: "utm",
  path: "/ucretsiz-araclar/utm-link-olusturucu",
  title: "UTM Link Oluşturucu",
  description: "Kampanya takibi için UTM parametreli linkleri hızlıca oluşturun ve pazarlama kanallarınızı doğru ölçün.",
  intro: "UTM parametreleri, Google Analytics ve diğer analitik araçlarda trafik kaynaklarını doğru izlemenizi sağlar. Aşağıdaki alanları doldurarak kampanya linkinizi oluşturun.",
  seoParagraphs: [
    { heading: "UTM Parametreleri Nedir?", body: "UTM parametreleri, bir URL'nin sonuna eklenen ve trafiğin hangi kaynaktan, kanaldan ve kampanyadan geldiğini analitik araçlara söyleyen etiketlerdir. Google Analytics 4, Mixpanel, Amplitude ve HubSpot gibi araçların büyük çoğunluğu bu parametreleri otomatik olarak yakalar ve raporlarda kanal atıfını (attribution) UTM'lere göre yapar." },
    { body: "Beş temel parametre vardır: utm_source (trafik kaynağı — örn. google, newsletter), utm_medium (kanal türü — örn. cpc, email, social), utm_campaign (kampanya adı), utm_term (ücretli aramada anahtar kelime) ve utm_content (aynı kampanyadaki farklı yaratıcıları/reklamları ayırt etmek için). Source, medium ve campaign her zaman doldurulmalı; term ve content ise A/B test ve varyant ayrımı için opsiyoneldir." },
    { body: "UTM disiplini olmadan pazarlama raporları güvenilirliğini kaybeder. Şirket içinde tutarlı bir isimlendirme standardı (küçük harf, tire ayırıcı, sabit kısaltmalar) oluşturmak; büyük/küçük harf karışıklığı ve yazım farklılıklarından kaynaklanan parçalı raporlamayı önler." },
  ],
  faqs: [
    { q: "Hangi UTM parametreleri zorunludur?", a: "Google Analytics'in doğru atıf yapabilmesi için en az utm_source, utm_medium ve utm_campaign doldurulmalıdır. utm_term ve utm_content opsiyoneldir ve genellikle A/B test veya yaratıcı bazlı analiz için kullanılır." },
    { q: "UTM etiketlerinde büyük/küçük harf önemli mi?", a: "Evet, Google Analytics UTM değerlerine büyük/küçük harf duyarlı davranır. 'Facebook' ve 'facebook' iki farklı kaynak olarak raporlanır. Bu nedenle tüm ekipte küçük harf standardı uygulanmalıdır." },
    { q: "İç link tıklamalarına UTM eklemeli miyim?", a: "Hayır. Aynı domain içindeki linklere UTM eklemek oturumu sıfırlar ve atıfı bozar. UTM yalnızca dış kanallardan (reklam, e-posta, sosyal medya) gelen trafik için kullanılmalıdır." },
    { q: "UTM linkleri SEO'yu olumsuz etkiler mi?", a: "Doğrudan bir cezası yoktur; ancak organik arama linklerinde UTM kullanmak yinelenen içerik ve rel=canonical sorunlarına yol açabilir. Organik trafik için UTM önerilmez." },
  ],
};

export const llmsTxt: ToolContent = {
  slug: "llms-txt",
  path: "/ucretsiz-araclar/llms-txt-olusturucu",
  title: "llms.txt Oluşturucu",
  description:
    "Sitenizin AI botları (ClaudeBot, GPTBot, Perplexity) tarafından daha iyi anlaşılması için ücretsiz llms.txt dosyası oluşturun ve indirin.",
  intro:
    "Site adınızı, kısa açıklamanızı ve önemli dokümantasyon/örnek/opsiyonel bağlantılarınızı girin. Araç, girdilerinizi llmstxt.org standardına uygun bir Markdown dosyasına dönüştürür; canlı önizleme ile birlikte tek tıkla .txt olarak indirebilirsiniz.",
  seoParagraphs: [
    { heading: "llms.txt Nedir ve Neden Önemlidir?", body: "llms.txt, bir web sitesinin köküne konulan ve büyük dil modellerine (LLM) sitenin ne hakkında olduğunu, hangi sayfaların önemli olduğunu ve içeriklerin nasıl gruplandığını kısa, yapılandırılmış bir Markdown formatında anlatan bir dosyadır. ClaudeBot, GPTBot, PerplexityBot ve benzeri AI tarayıcıları; bir siteyi 'anlamaya' çalışırken önce bu dosyaya bakarak sayfaların, dokümantasyonun ve öne çıkan kaynakların haritasını tek noktadan alabilir." },
    { body: "robots.txt tarayıcılara nereye girebileceklerini söyler; sitemap.xml ise indekslenmesi gereken URL'lerin makine dostu bir listesini verir. llms.txt bunların yerine geçmez — tamamlayıcıdır. Farkı, insan tarafından yazılmış kısa bir 'site rehberi' sunmasıdır: proje adı, tek cümlelik açıklama, önemli dokümantasyon bağlantıları, örnekler ve opsiyonel kaynaklar. Bu sayede LLM'ler sitenizi tararken bağlamı çok daha hızlı kurar ve yanıtlarında daha isabetli referans verir." },
    { body: "Özellikle SaaS ürünleri, dokümantasyon siteleri, kişisel portföyler ve içerik-yoğun projeler için llms.txt eklemek, üretken arama motorlarında (Generative Engine Optimization / GEO) doğru şekilde temsil edilmenin en hızlı yoludur. Dosyayı hazırlamak dakikalar sürer; ancak AI botlarının sitenizi keşfetme ve alıntılama şeklini doğrudan etkiler." },
  ],
  faqs: [
    { q: "llms.txt dosyasını nereye yüklemeliyim?", a: "Dosya sitenizin kök dizinine yerleştirilmeli ve https://alanadiniz.com/llms.txt adresinden erişilebilir olmalıdır. Alt dizin veya alt alan adına konulursa AI tarayıcılar bulmayabilir." },
    { q: "robots.txt ile llms.txt arasındaki fark nedir?", a: "robots.txt tarayıcılara hangi yolları taramaya izin verildiğini söyleyen bir erişim kuralları dosyasıdır. llms.txt ise sitenizin ne hakkında olduğunu ve hangi kaynakların önemli olduğunu LLM'lere kısa, insan tarafından yazılmış bir rehber olarak sunar. Biri erişimi düzenler, diğeri bağlamı anlatır — birbirinin yerine geçmez." },
    { q: "Bu dosya SEO sıralamamı etkiler mi?", a: "Hayır. llms.txt, Google veya Bing gibi klasik arama motorlarının sıralama sinyallerinden biri değildir. Amacı; ChatGPT, Claude, Perplexity gibi LLM tabanlı sistemlerin sitenizi daha doğru anlaması ve alıntılamasıdır. SEO'yu değil, üretken arama görünürlüğünü (GEO) hedefler." },
    { q: "llms.txt'ye hangi bilgiler eklenmelidir?", a: "En az proje/site adı, tek cümlelik bir açıklama ve önemli dokümantasyon sayfalarının bağlantıları bulunmalıdır. İsteğe bağlı olarak örnekler, blog yazıları, API referansları ve opsiyonel kaynak bağlantıları da eklenebilir. Dosya kısa ve öz olmalı; ayrıntılı içerik zaten linklenen sayfalarda yer alır." },
  ],
};

export const trTools = { arr, cac, churn, ltv, roas, utm, llmsTxt };

export const grossMargin: ToolContent = {
  slug: "brut-kar-marji",
  path: "/ucretsiz-araclar/brut-kar-marji-hesaplayici",
  title: "Brüt Kar Marjı Hesaplayıcı",
  description:
    "Brüt kar marjınızı saniyeler içinde hesaplayın. Gelir ve maliyet bilgilerinizi girin, kârlılığınızı anında görün.",
  intro:
    "Brüt kar marjı, satılan malın maliyeti (COGS) düşüldükten sonra gelirinizin yüzde kaçının elinizde kaldığını gösterir. Toplam gelirinizi ve COGS'unuzu girin; sonucu hem yüzde hem tutar olarak görün.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Brüt Kar Marjı Nasıl Hesaplanır?", body: "Formül basittir: Brüt Kar Marjı = ((Gelir − COGS) / Gelir) × 100. COGS (Cost of Goods Sold), ürünü üretmek veya satın almak için doğrudan katlanılan maliyetlerdir — hammadde, üretim işçiliği, tedarikçi faturaları, ürüne doğrudan atfedilebilen kargo ve paketleme. Pazarlama, kira, yönetim maaşları gibi operasyonel giderler bu hesaba girmez; onlar net kar marjında devreye girer." },
    { body: "Brüt kar marjı, fiyatlandırma gücünüzün ve tedarik verimliliğinizin en doğrudan göstergesidir. Marj düşüyorsa ya satış fiyatı baskı altında ya da birim maliyetler artıyordur. Bu iki nedeni ayırt etmek için marjı ürün/kategori kırılımında takip etmek gerekir; toplam marj, kârlı ve zararlı ürünlerin ortalamasını gizler." },
    { heading: "E-Ticaret Sitenizde Dönüşüm Oranını Ölçmek", body: "E-ticaret sitenizde ziyaretçi başına satış oranını ölçmek için dönüşümü \"tamamlanmış sipariş\" olarak tanımlayın ve oranı oturum değil, tekil ziyaretçi bazında da kontrol edin. Retail senaryosunda tek bir toplam oran yanıltıcıdır: kategori sayfası, ürün detay sayfası ve sepet-ödeme adımları ayrı ayrı ölçülmelidir. Tipik huni şöyle işler — ziyaretçilerin bir kısmı ürün sayfasına iner, bunların bir kısmı sepete ekler, sepete ekleyenlerin ortalama %60-80'i ödeme adımında kaybedilir. Kargo ücretinin geç gösterilmesi, zorunlu üyelik, sınırlı ödeme seçeneği ve yavaş mobil deneyim bu kaybın en yaygın dört nedenidir. Mobil ve masaüstü oranlarını ayrı izlemek, sezon ve kampanya dönemlerini ayrı kohort saymak e-ticarette şarttır." },
    { heading: "Sektöre Göre Referans Aralıkları", body: "Kesin bir hedef yoktur; iş modeline göre büyük farklılık gösterir. Yönlendirici olarak: e-ticaret ve perakendede brüt marj çoğunlukla %20-50 bandında, hizmet/ajans işlerinde %40-60, SaaS ve dijital ürünlerde ise %70-90 aralığında görülür. Bunlar kesin iddia değil, karşılaştırma için kaba referanslardır — kendi geçmiş dönem trendiniz her zaman sektör ortalamasından daha anlamlı bir kıyas noktasıdır." },
  ],
  faqs: [
    { q: "Brüt kar marjı nedir?", a: "Brüt kar marjı, toplam gelirden satılan malın maliyeti (COGS) düşüldükten sonra kalan tutarın gelire oranıdır: ((Gelir − COGS) / Gelir) × 100. Ürün veya hizmetinizin temel kârlılığını, operasyonel giderlerden bağımsız olarak gösterir." },
    { q: "İyi bir brüt kar marjı nedir?", a: "İş modeline bağlıdır. Yönlendirici aralıklar: e-ticaret %20-50, hizmet işleri %40-60, SaaS %70-90. Sabit bir eşik yerine kendi trendinizi izleyin — marjın dönemler arası düşmesi, fiyat baskısı veya artan birim maliyet sinyalidir." },
    { q: "COGS'a neler dahildir?", a: "Ürünü üretmek veya satılabilir hale getirmek için katlanılan doğrudan maliyetler: hammadde, üretim işçiliği, tedarikçi ve fason faturaları, ürüne doğrudan atfedilebilen kargo, paketleme ve ödeme komisyonu. Kira, pazarlama bütçesi, yönetim maaşları ve vergi COGS'a girmez." },
    { q: "Brüt kar marjı ile net kar marjı arasındaki fark nedir?", a: "Brüt kar marjı yalnızca COGS'u düşer ve ürün seviyesindeki kârlılığı ölçer. Net kar marjı ise operasyonel giderler, pazarlama, faiz ve vergi dahil tüm giderleri düşer; işletmenin gerçek kârlılığını gösterir. İkisini birlikte okumak gerekir — Net Kar Marjı Hesaplayıcı ile karşılaştırabilirsiniz." },
  ],
  relatedTools: [
    { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici", note: "Tüm giderler dahil gerçek kârlılık" },
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
  externalSource: { label: "Kaynak: Investopedia — Gross Profit Margin", href: "https://www.investopedia.com/terms/g/gross_profit_margin.asp" },
};

export const netMargin: ToolContent = {
  slug: "net-kar-marji",
  path: "/ucretsiz-araclar/net-kar-marji-hesaplayici",
  title: "Net Kar Marjı Hesaplayıcı",
  description:
    "Net kar marjınızı saniyeler içinde hesaplayın. Gelir ve tüm giderlerinizi girin, işletmenizin gerçek kârlılığını görün.",
  intro:
    "Net kar marjı, tüm giderler (COGS, operasyonel giderler, faiz ve vergi dahil) düşüldükten sonra gelirinizin yüzde kaçının kâr olarak kaldığını gösterir. Toplam gelir ve toplam gideri girin; sonucu yüzde ve tutar olarak görün.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Net Kar Marjı Nasıl Hesaplanır?", body: "Formül: Net Kar Marjı = ((Gelir − Toplam Giderler) / Gelir) × 100. Toplam giderler kalemi, brüt marjdan farklı olarak yalnızca ürün maliyetini değil işletmenin tüm maliyet yapısını kapsar: COGS, personel, kira, yazılım abonelikleri, pazarlama ve reklam bütçesi, muhasebe/danışmanlık, amortisman, kredi faizi ve vergiler." },
    { body: "Net kar marjı, işletmenin nihai verimlilik göstergesidir. Yüksek brüt marja rağmen düşük net marj, sorunun üretim veya tedarikte değil gider yapısında olduğunu söyler — genellikle şişmiş pazarlama harcaması, düşük verimli ekip yapısı veya finansman maliyeti. Bu nedenle iki marjı yan yana okumak, tek başına herhangi birini okumaktan çok daha bilgilendiricidir." },
    { heading: "Marjı Yorumlarken Dikkat Edilecekler", body: "Net marj dönemsel dalgalanmaya açıktır: tek seferlik yatırımlar, vergi zamanlaması veya kur farkı tek bir çeyreği yanıltıcı gösterebilir. Aylık tek ölçüm yerine 3-12 aylık hareketli ortalamayı takip edin ve mümkünse tek seferlik kalemleri ayrıştırarak normalize edilmiş bir marj da hesaplayın." },
  ],
  faqs: [
    { q: "Net kar marjı nedir?", a: "Net kar marjı, tüm giderler düşüldükten sonra kalan net kârın gelire oranıdır: ((Gelir − Toplam Giderler) / Gelir) × 100. İşletmenin her 100 TL gelirden kaç TL'yi gerçekten kâr olarak elde tuttuğunu gösterir." },
    { q: "İyi bir net kar marjı nedir?", a: "Sektöre göre değişir; yönlendirici olarak perakende ve e-ticarette %2-10, hizmet işlerinde %10-20, olgun SaaS şirketlerinde %15-25 aralığı sağlıklı kabul edilir. Büyüme aşamasındaki şirketlerde negatif net marj bilinçli bir tercih olabilir; kritik olan trendin yönü ve nakit yakma süresidir." },
    { q: "Net kar marjı neden brüt kar marjından düşük olur?", a: "Çünkü brüt marj yalnızca COGS'u düşer; net marj ise bunun üzerine pazarlama, personel, kira, yazılım, faiz ve vergi gibi tüm dolaylı giderleri de ekler. İki marj arasındaki fark, işletmenizin operasyonel gider yükünü gösterir." },
    { q: "Toplam giderlere neler dahil edilmeli?", a: "COGS'un yanı sıra tüm operasyonel giderler: personel maaş ve yan hakları, kira ve faturalar, yazılım abonelikleri, pazarlama ve reklam harcaması, danışmanlık ve muhasebe, amortisman, kredi faizi ve vergiler. Yalnızca doğrudan ürün maliyetini ayrı görmek isterseniz Brüt Kar Marjı Hesaplayıcı'yı kullanın." },
  ],
  relatedTools: [
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Yalnızca COGS düşülmüş kârlılık" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
  externalSource: { label: "Kaynak: Investopedia — Net Profit Margin", href: "https://www.investopedia.com/terms/n/net_margin.asp" },
};

export const conversionRate: ToolContent = {
  slug: "donusum-orani",
  path: "/ucretsiz-araclar/donusum-orani-hesaplayici",
  title: "Dönüşüm Oranı Hesaplayıcı",
  description:
    "Web sitenizin, kampanyanızın veya e-ticaretinizin dönüşüm oranını ücretsiz olarak saniyeler içinde hesaplayın.",
  intro:
    "Toplam ziyaretçi ve dönüşüm sayınızı girin; dönüşüm oranınızı anında görün. Hedef bir oran belirlerseniz aradaki farkı ve hedefe ulaşmak için gereken ek dönüşüm sayısını da hesaplar.",
  seoParagraphs: [
    { heading: "Dönüşüm Oranı Nasıl Hesaplanır?", body: "Formül basittir: Dönüşüm Oranı = (Dönüşüm Sayısı / Toplam Ziyaretçi) × 100. Burada 'dönüşüm', sayfada tanımladığınız değerli aksiyondur: satın alma, form doldurma, demo talebi, teklif isteği, uygulama indirme veya newsletter kaydı. Aynı sayfada birden fazla dönüşüm türü varsa her biri için ayrı oran takip edilmelidir; hepsini tek bir sayıda toplamak asıl darboğazı gizler." },
    { body: "Dönüşüm oranı, trafik ile gelir arasındaki köprüdür. Trafiği artırmadan oranı yükseltmek, aynı reklam bütçesiyle daha fazla müşteri kazanmak demektir; bu nedenle CAC'ı düşürmenin en hızlı yolu genellikle dönüşüm oranı optimizasyonudur (CRO). Kaynak, cihaz ve kampanya kırılımında ölçmek şarttır — mobil ile masaüstü arasında iki kata varan farklar olağandır." },
    { heading: "Sektöre Göre Referans Aralıkları", body: "Kesin bir hedef yoktur; yönlendirici olarak: e-ticaret sitelerinde %1-4, B2B lead formlarında %2-5, landing page kampanyalarında %5-15, e-posta tıklamasından gelen trafikte ise daha yüksek oranlar görülebilir. Bunlar kaba referanslardır — asıl anlamlı kıyas, kendi geçmiş dönem trendiniz ve aynı kanal içindeki varyant testlerinizdir." },
  ],
  faqs: [
    { q: "İyi bir dönüşüm oranı nedir?", a: "Sektöre ve trafiğin niteliğine göre değişir. Yönlendirici aralıklar: e-ticaret %1-4, B2B form doldurma %2-5, tekil landing page kampanyaları %5-15. Sabit bir eşik kovalamak yerine kendi trendinizi ve kanal bazlı farkları izleyin." },
    { q: "E-ticaret için iyi bir dönüşüm oranı nedir?", a: "E-ticarette genel referans aralığı %1-4'tür; %2-3 bandı çoğu perakende mağaza için sağlıklı kabul edilir. Ancak oran kategoriye ve trafik kalitesine göre çok değişir: yüksek fiyatlı veya değerlendirme süresi uzun ürünlerde %1'in altı normalken, tekrar satın alma oranı yüksek hızlı tüketim kategorilerinde %5 ve üzeri görülebilir. Marka aramasından gelen trafik, jenerik reklam trafiğinin birkaç katı dönüşür; bu yüzden tek bir toplam oranı değil, kanal ve cihaz kırılımını izleyin." },
    { q: "Dönüşüm oranı nasıl artırılır?", a: "En etkili adımlar: sayfa hızını iyileştirmek, tek ve net bir çağrı-aksiyon (CTA) kullanmak, form alan sayısını azaltmak, mesaj-reklam uyumunu (message match) sağlamak, sosyal kanıt ve güven unsurları eklemek ve düzenli A/B testleri yürütmektir. Değişiklikleri tek tek test edin; aynı anda çok şeyi değiştirmek nedeni gizler." },
    { q: "Dönüşüm oranı ile CTR arasındaki fark nedir?", a: "CTR (tıklama oranı) reklamı veya bağlantıyı görenlerin yüzde kaçının tıkladığını ölçer; dönüşüm oranı ise siteye gelenlerin yüzde kaçının hedeflenen aksiyonu tamamladığını ölçer. CTR reklam yaratıcısının, dönüşüm oranı ise landing page ve teklifin performansını gösterir." },
    { q: "Dönüşüm oranı hangi araçlarla ölçülür?", a: "Google Analytics 4 (anahtar etkinlikler), Google Tag Manager, Meta Ads ve Google Ads reklam panelleri, HubSpot gibi CRM'ler ve Hotjar/Microsoft Clarity gibi davranış analizi araçları en yaygın kullanılanlardır. Kaynak bazlı doğru ölçüm için kampanya linklerinizi UTM ile etiketlemeyi unutmayın." },
  ],
  relatedTools: [
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu", note: "Kampanya takibi için doğru etiketleme" },
  ],
  relatedPost: { label: "Google Ads'te Performansı Katlamanın 7 Yolu", href: "/blog/google-ads-performans-optimizasyonu" },
  externalSource: { label: "Kaynak: Google Analytics Yardım Merkezi — Dönüşüm oranı", href: "https://support.google.com/analytics/answer/12966437" },
};

export const mrr: ToolContent = {
  slug: "mrr",
  path: "/ucretsiz-araclar/mrr-hesaplayici",
  title: "MRR Hesaplayıcı",
  description:
    "Aylık Yinelenen Gelirinizi (MRR) müşteri sayısı ve ortalama abonelik bedeliyle saniyeler içinde hesaplayın.",
  intro:
    "MRR (Monthly Recurring Revenue), abonelik iş modelinizin her ay tekrar eden gelirini gösterir. Müşteri sayınız ile ortalama aylık abonelik bedelini girin ya da doğrudan toplam aylık geliri yazın; MRR ve karşılık gelen ARR anında hesaplanır.",
  seoParagraphs: [
    { heading: "MRR Nedir ve Nasıl Hesaplanır?", body: "MRR (Monthly Recurring Revenue), abonelik tabanlı bir işletmenin bir ay boyunca tekrar etmesi beklenen sözleşmesel gelirinin toplamıdır. En yalın formülü MRR = Aktif Müşteri Sayısı × Ortalama Aylık Abonelik Bedeli (ARPA) şeklindedir. Yıllık ödenen planlar aylığa bölünerek (yıllık bedel / 12) MRR'ye eklenir; kurulum ücreti, danışmanlık ve tek seferlik satışlar ise MRR'ye dahil edilmez." },
    { heading: "MRR × 12 = ARR İlişkisi", body: "MRR ile ARR aynı gelirin iki farklı zaman ölçeğidir: ARR = MRR × 12. Aylık ölçek operasyonel karar almak (kampanya, fiyatlama, ekip kapasitesi) için, yıllık ölçek ise planlama, bütçeleme ve yatırımcı iletişimi için kullanılır. Bu ilişkinin doğru kurulabilmesi için MRR'nin normalize edilmiş olması, yani tüm faturalama dönemlerinin aylığa çevrilmiş olması gerekir. ARR tarafını görmek için ARR Hesaplayıcı'yı kullanabilirsiniz." },
    { body: "MRR'yi tek bir toplam sayı olarak izlemek yeterli değildir. New MRR (yeni müşteriler), Expansion MRR (upsell/cross-sell), Contraction MRR (plan küçültme) ve Churned MRR (iptaller) kırılımı, büyümenin nereden geldiğini ve nerede sızdırdığını gösterir. Net New MRR = New + Expansion − Contraction − Churned formülü, gerçek büyüme kalitesinin en dürüst göstergesidir." },
    { heading: "Örnek Hesaplama: 500 Müşterili Bir SaaS'ta MRR", body: "Diyelim ki ürününüzün 500 aktif müşterisi var. Bunların 400'ü aylık 800 ₺'lik Pro plandan, 100'ü ise yıllık 12.000 ₺ ödenen Business planından. Aylık planların katkısı 400 × 800 = 320.000 ₺. Yıllık planlar normalize edilir: 12.000 / 12 = 1.000 ₺ ve 100 × 1.000 = 100.000 ₺. Toplam MRR = 320.000 + 100.000 = 420.000 ₺, ARR ise 420.000 × 12 = 5.040.000 ₺ olur. Aynı ay 60.000 ₺'lik kurulum ve eğitim geliri faturalandıysa bu tutar MRR'ye eklenmez." },
    { body: "Aynı örnekte ay içinde 25.000 ₺ yeni MRR, 18.000 ₺ genişleme, 6.000 ₺ daralma ve 14.000 ₺ churn gerçekleştiyse Net New MRR = 25.000 + 18.000 − 6.000 − 14.000 = 23.000 ₺'dir. Yani toplam MRR 420.000 ₺'den 443.000 ₺'ye çıkar; aylık büyüme yaklaşık %5,5 olur. Bu kırılım olmadan yalnızca toplam MRR'ye bakmak, churn'ün yeni satışla maskelendiği durumları görünmez kılar." },
  ],
  faqs: [
    { q: "MRR ile ARR arasındaki fark nedir?", a: "MRR aylık yinelenen geliri, ARR ise yıllık yinelenen geliri ifade eder. İlişkileri basittir: ARR = MRR × 12. Aylık takip operasyonel kararlar, yıllık takip ise planlama ve yatırımcı raporlaması içindir." },
    { q: "MRR nedir ve nasıl hesaplanır?", a: "MRR (Monthly Recurring Revenue), abonelik modelinde her ay tekrar etmesi beklenen sözleşmesel gelirdir. Formülü MRR = Aktif Müşteri Sayısı × Ortalama Aylık Abonelik Bedeli (ARPA); farklı planlar varsa her planın müşteri sayısı × fiyatı toplanır ve yıllık planlar 12'ye bölünerek eklenir." },
    { q: "500 müşterili bir SaaS'ta MRR nasıl hesaplanır?", a: "Planları ayrı ayrı toplayın. Örnek: 400 müşteri × 800 ₺ aylık = 320.000 ₺; 100 müşteri × (12.000 ₺ yıllık / 12) = 100.000 ₺. Toplam MRR 420.000 ₺, ARR 5.040.000 ₺'dir. Kurulum ve danışmanlık gibi tek seferlik gelirler bu hesabın dışında kalır." },
    { q: "Yıllık ödenen abonelikler MRR'ye nasıl eklenir?", a: "Yıllık sözleşme bedeli 12'ye bölünerek aylık karşılığı bulunur ve MRR'ye o şekilde eklenir. Tüm yıllık tutarı ödeme yapıldığı ayın MRR'sine yazmak metriği yanıltıcı biçimde şişirir." },
    { q: "Tek seferlik gelirler MRR'ye dahil edilir mi?", a: "Hayır. Kurulum ücretleri, eğitim, danışmanlık ve tek seferlik lisans satışları yinelenen gelir değildir; MRR dışında tutulur. MRR yalnızca sözleşmesel ve tekrar eden abonelik gelirini içerir." },
    { q: "Net New MRR nedir?", a: "Net New MRR = Yeni MRR + Genişleme MRR − Daralma MRR − Kayıp (churn) MRR. Bir dönemde gelirin net olarak ne kadar arttığını gösterir; pozitif ve istikrarlı olması sağlıklı büyümenin işaretidir." },
    { q: "MRR büyümesi ile NRR arasındaki ilişki nedir?", a: "MRR büyümesi yeni müşteri satışını da içerir; NRR (Net Revenue Retention) ise yalnızca mevcut müşteri tabanından gelen genişleme, daralma ve churn'ü ölçer. Yeni satış durduğunda işinizin ne olacağını NRR söyler; NRR Hesaplayıcı ile ölçebilirsiniz." },
  ],
  relatedTools: [
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "MRR × 12 ile yıllık yinelenen gelir" },
    { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici", note: "Hesap başına ortalama gelir" },
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Net gelir tutundurma oranı" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const arpa: ToolContent = {
  slug: "arpa",
  path: "/ucretsiz-araclar/arpa-hesaplayici",
  title: "ARPA Hesaplayıcı",
  description:
    "Hesap başına ortalama gelirinizi (ARPA) toplam MRR ve aktif hesap sayısıyla saniyeler içinde hesaplayın.",
  intro:
    "ARPA (Average Revenue Per Account), aktif hesap başına aylık ortalama gelirinizi gösterir. Toplam MRR'nizi ve aktif hesap sayınızı girin; ARPA ve yıllık karşılığı anında hesaplanır.",
  seoParagraphs: [
    { heading: "ARPA Nedir ve Nasıl Hesaplanır?", body: "ARPA (Average Revenue Per Account), toplam aylık yinelenen gelirin aktif hesap sayısına bölünmesiyle bulunur: ARPA = Toplam MRR / Aktif Hesap Sayısı. Bazı ekipler aynı metriği ARPU (Average Revenue Per User) olarak adlandırır; fark, birimin kullanıcı mı yoksa hesap (şirket/organizasyon) mı olduğudur. B2B SaaS'ta doğru birim genellikle hesaptır." },
    { body: "ARPA, fiyatlandırma stratejinizin ve müşteri segmentinizin aynadaki yansımasıdır. Yükselen ARPA; başarılı upsell, daha üst paketlere geçiş veya daha büyük müşterilere kayma anlamına gelir. Düşen ARPA ise indirim baskısı, küçük müşterilere kayma ya da plan küçültmelere (contraction) işaret eder. Bu nedenle ARPA'yı segment ve kohort bazında izlemek, toplam ortalamadan çok daha bilgilendiricidir." },
    { body: "ARPA tek başına değil, CAC ve LTV ile birlikte anlam kazanır. LTV = ARPA × brüt marj / churn oranı yaklaşımıyla ARPA doğrudan yaşam boyu değeri belirler; ARPA'yı %20 artırmak, aynı CAC ile birim ekonomiyi belirgin biçimde iyileştirir. Bu yüzden birçok SaaS için büyümenin en ucuz kaldıracı yeni müşteri değil, mevcut müşteride ARPA artışıdır." },
    { heading: "Örnek Hesaplama: 500 Hesaplı Bir SaaS'ta ARPA", body: "Toplam MRR'si 420.000 ₺ olan ve 500 aktif hesabı bulunan bir SaaS'ta ARPA = 420.000 / 500 = 840 ₺'dir; yıllık karşılığı 840 × 12 = 10.080 ₺ olur. Aynı şirket bir sonraki çeyrekte 40 hesabı üst pakete taşıyıp MRR'yi 470.000 ₺'ye çıkarır ve hesap sayısı 505'te kalırsa ARPA 930 ₺'ye yükselir — yani gelir artışının kaynağı yeni müşteri değil, mevcut müşteride derinleşmedir." },
    { body: "Bu ayrımı görmek önemlidir: ARPA sabitken MRR'nin büyümesi hacim büyümesidir, ARPA'nın da büyümesi ise değer büyümesidir. CAC'ı 6.000 ₺ olan bu örnekte ARPA'nın 840'tan 930 ₺'ye çıkması, CAC geri kazanım süresini yaklaşık 7,1 aydan 6,5 aya indirir." },
  ],
  faqs: [
    { q: "ARPA ile ARPU arasındaki fark nedir?", a: "İkisi de ortalama geliri ölçer; ARPA hesap (şirket) başına, ARPU ise kullanıcı başına hesaplanır. Bir hesapta birden fazla kullanıcı bulunan B2B SaaS ürünlerinde doğru metrik genellikle ARPA'dır." },
    { q: "ARPA nedir ve nasıl hesaplanır?", a: "ARPA (Average Revenue Per Account), aktif hesap başına düşen ortalama aylık yinelenen gelirdir. Formülü ARPA = Toplam MRR / Aktif Hesap Sayısı'dır. Örneğin 420.000 ₺ MRR ve 500 hesapta ARPA 840 ₺ olur." },
    { q: "ARPA ile MRR arasındaki ilişki nedir?", a: "MRR = ARPA × Aktif Hesap Sayısı. Yani MRR'yi büyütmenin iki yolu vardır: daha fazla hesap kazanmak (hacim) veya hesap başına geliri artırmak (değer). ARPA takibi, büyümenin bu iki kaynağını birbirinden ayırmanızı sağlar." },
    { q: "ARPA hesaplamasına hangi gelirler dahil edilir?", a: "Yalnızca yinelenen abonelik geliri (MRR) dahil edilir. Kurulum ücreti, danışmanlık ve tek seferlik satışlar hariç tutulur; aksi hâlde ortalama yapay olarak yükselir." },
    { q: "İyi bir ARPA değeri nedir?", a: "Mutlak bir eşik yoktur; segmentinize bağlıdır. SMB odaklı ürünlerde aylık birkaç yüz birim normalken enterprise'da binlerce birim görülür. Anlamlı kıyas, kendi ARPA trendiniz ve CAC ile oranıdır." },
    { q: "ARPA nasıl artırılır?", a: "Paket ve fiyat mimarisini gözden geçirmek, kullanım bazlı ek modüller sunmak, yıllık plana geçişi teşvik etmek, upsell/cross-sell akışları kurmak ve düşük değerli segmente odağı azaltmak en etkili yöntemlerdir." },
  ],
  relatedTools: [
    { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici", note: "Aylık yinelenen gelir" },
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Mevcut müşteriden gelen büyüme" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const nrr: ToolContent = {
  slug: "nrr",
  path: "/ucretsiz-araclar/nrr-hesaplayici",
  title: "NRR Hesaplayıcı",
  description:
    "Net Revenue Retention (NRR) oranınızı başlangıç, genişleme, daralma ve kayıp MRR değerleriyle ücretsiz hesaplayın.",
  intro:
    "NRR (Net Revenue Retention), mevcut müşteri tabanınızın tek başına ne kadar büyüdüğünü gösterir. Dönem başı MRR ile genişleme, daralma ve kayıp MRR değerlerinizi girin; NRR ve brüt tutundurma oranı anında hesaplansın.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "NRR (Net Revenue Retention) Nedir?", body: "NRR, bir dönem başındaki müşteri tabanının aynı dönem sonunda ürettiği gelirin, başlangıç gelirine oranıdır. Formülü NRR = (Başlangıç MRR + Genişleme MRR − Daralma MRR − Kaybedilen MRR) / Başlangıç MRR × 100 şeklindedir. Kritik nokta şudur: hesaba yeni kazanılan müşteriler dahil edilmez. Bu yüzden NRR, satış motorunu kapatsanız bile işletmenizin büyüyüp büyümeyeceğini gösteren tek metriktir." },
    { heading: "Örnek Hesaplama", body: "Dönem başı MRR'si 400.000 ₺ olan bir SaaS'ta ay içinde 60.000 ₺ genişleme (upsell, koltuk artışı), 15.000 ₺ daralma (plan küçültme) ve 25.000 ₺ churn gerçekleşti. NRR = (400.000 + 60.000 − 15.000 − 25.000) / 400.000 × 100 = %105. Yani hiç yeni müşteri kazanılmasa bile gelir %5 büyümüş olur. Aynı örnekte brüt tutundurma (GRR) = (400.000 − 15.000 − 25.000) / 400.000 × 100 = %90'dır; aradaki 15 puanlık fark tamamen genişlemeden gelir." },
    { heading: "Sağlıklı NRR Aralıkları", body: "Genel kabul gören referanslar: SMB odaklı SaaS'larda %90-100, mid-market'te %100-110, enterprise ve kullanım bazlı fiyatlayan ürünlerde %120 ve üzeri. %100'ün altı, mevcut tabanın eridiğini ve büyümenin tamamen yeni satışa bağımlı olduğunu gösterir; bu da CAC baskısını sürekli artırır. %120 üzeri NRR ise yatırımcıların en yüksek çarpanı verdiği profildir." },
    { body: "NRR'yi iyileştirmenin yolu genellikle satıştan değil üründen ve müşteri başarısından geçer: onboarding'i hızlandırmak, kullanım bazlı fiyat basamakları kurmak, koltuk/modül genişlemesini kolaylaştırmak ve risk skoru ile churn'ü erken yakalamak. NRR'yi kohort ve segment kırılımında izlemek, hangi müşteri profilinin gerçekten genişlediğini gösterir." },
  ],
  faqs: [
    { q: "NRR nedir ve nasıl hesaplanır?", a: "NRR (Net Revenue Retention), mevcut müşterilerden gelen gelirin dönem içindeki net değişimidir. Formül: NRR = (Başlangıç MRR + Genişleme MRR − Daralma MRR − Kaybedilen MRR) / Başlangıç MRR × 100. Yeni müşteri geliri bu hesaba girmez." },
    { q: "İyi bir NRR oranı nedir?", a: "%100 nötr eşiktir: taban ne büyüyor ne küçülüyor demektir. SMB'de %90-100 kabul edilebilir, mid-market'te %100-110 iyi, enterprise ve kullanım bazlı modellerde %120 ve üzeri mükemmel sayılır. %100 altı, büyümenin tamamen yeni satışa bağımlı olduğu anlamına gelir." },
    { q: "NRR ile GRR arasındaki fark nedir?", a: "GRR (Gross Revenue Retention) yalnızca kayıpları sayar ve asla %100'ü geçemez: (Başlangıç − Daralma − Churn) / Başlangıç. NRR ise genişlemeyi de eklediği için %100'ün üzerine çıkabilir. GRR ürün yapışkanlığını, NRR ise büyüme potansiyelini ölçer." },
    { q: "NRR neden ARR'dan daha önemli kabul edilir?", a: "ARR gelirin büyüklüğünü söyler, NRR ise o gelirin kalitesini. Yüksek ARR'a rağmen düşük NRR, kovanın deliğini yeni satışla kapattığınız anlamına gelir; yeni satış yavaşladığı anda büyüme durur. Yatırımcıların değerleme çarpanını en çok etkileyen metriklerden biri bu yüzden NRR'dir." },
    { q: "Negatif churn ne demektir?", a: "Genişleme gelirinin kaybedilen geliri aşması, yani NRR'nin %100'ün üzerinde olması durumudur. Bu profildeki şirketler hiç yeni müşteri kazanmasa bile büyür ve pazarlama bütçesini daha agresif kullanabilir." },
    { q: "NRR hangi sıklıkla ölçülmelidir?", a: "Aylık MRR üzerinden hesaplanıp 12 aylık kayan pencereyle raporlanması en yaygın pratiktir. Küçük müşteri tabanlarında tek bir büyük hesabın hareketi aylık NRR'yi çok oynatacağı için çeyreklik ölçüm daha güvenilirdir." },
  ],
  relatedTools: [
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici", note: "Kayıp oranı ve retention" },
    { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici", note: "Aylık yinelenen gelir" },
    { label: "Rule of 40 Hesaplayıcı", href: "/ucretsiz-araclar/rule-of-40-hesaplayici", note: "Büyüme + kârlılık dengesi" },
  ],
  relatedPost: { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi" },
};

export const ruleOf40: ToolContent = {
  slug: "rule-of-40",
  path: "/ucretsiz-araclar/rule-of-40-hesaplayici",
  title: "Rule of 40 Hesaplayıcı",
  description:
    "Gelir büyüme oranı ve kâr marjınızı toplayarak SaaS'ınızın Rule of 40 skorunu ve sağlıklı olup olmadığını ücretsiz ölçün.",
  intro:
    "Rule of 40, bir SaaS şirketinin büyüme hızı ile kârlılığının toplamının 40'ın üzerinde olması gerektiğini söyleyen basit bir sağlık testidir. Yıllık gelir büyüme oranınızı ve kâr marjınızı girin; skorunuz ve geçti/kaldı durumu anında hesaplansın.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Rule of 40 Nedir?", body: "Rule of 40, SaaS ve abonelik şirketlerinin sağlığını tek bir sayıya indiren bir başparmak kuralıdır: Yıllık Gelir Büyüme Oranı (%) + Kâr Marjı (%) ≥ 40. Mantığı şudur: hızlı büyüyen bir şirketin kısa vadede zarar etmesi kabul edilebilir, yavaş büyüyen bir şirketin ise kârlı olması beklenir. Toplam 40'ın altına düştüğünde şirket ne yeterince hızlı büyüyor ne de yeterince kârlı çalışıyor demektir." },
    { heading: "Örnek Hesaplama", body: "Yıllık %55 ARR büyümesi olan ama %20 FCF zararı yazan bir şirketin skoru 55 + (−20) = 35'tir; kuralın altındadır. Buna karşılık %18 büyüyen ve %25 kâr marjıyla çalışan bir şirketin skoru 43 olur ve testi geçer. Aynı skoru üreten iki farklı profil (agresif büyüme veya disiplinli kârlılık) yatırımcı gözünde genellikle eşdeğer kabul edilir." },
    { heading: "Kâr Marjı Olarak Ne Kullanılmalı?", body: "Pratikte üç ölçü kullanılır: EBITDA marjı, serbest nakit akışı (FCF) marjı veya faaliyet kâr marjı. Hangisini seçerseniz seçin, dönemler arasında tutarlı kalın; ölçüyü değiştirerek skoru güzelleştirmek en sık yapılan hatadır. Büyüme tarafında ise ARR veya yıllıklandırılmış gelir büyümesi kullanılır — aylık büyümeyi doğrudan yazmak skoru yapay biçimde şişirir." },
    { body: "Rule of 40, tek başına bir strateji değil bir denge testidir. 40'ın üzerinde olmak sürdürülebilir bir birim ekonomiyi garanti etmez; bu yüzden NRR, LTV:CAC oranı ve CAC geri kazanım süresiyle birlikte okunmalıdır. Özellikle erken aşama (ARR < 1M) şirketlerde küçük baz etkisi nedeniyle skor aşırı yüksek çıkabilir ve yanıltıcı olur." },
  ],
  faqs: [
    { q: "Rule of 40 nedir ve nasıl hesaplanır?", a: "Rule of 40 = Yıllık Gelir Büyüme Oranı (%) + Kâr Marjı (%). Toplam 40 veya üzerindeyse şirket sağlıklı bir büyüme-kârlılık dengesinde kabul edilir. Örnek: %30 büyüme + %12 kâr marjı = 42, kuralı geçer." },
    { q: "Rule of 40'ta hangi kâr marjı kullanılmalı?", a: "En yaygın kullanım EBITDA marjı ve serbest nakit akışı (FCF) marjıdır; faaliyet kâr marjı da kabul edilir. Önemli olan aynı ölçüyü dönemler boyunca tutarlı kullanmaktır, aksi hâlde trend karşılaştırılamaz hâle gelir." },
    { q: "Rule of 40 hangi aşamadaki şirketler için anlamlıdır?", a: "Genellikle 1 milyon ARR'ı geçmiş ve büyüme oranı stabilize olmaya başlamış şirketler için anlamlıdır. Çok erken aşamada düşük baz nedeniyle büyüme yüzdesi üç haneli çıkar ve skor gerçek sağlığı yansıtmaz." },
    { q: "Skorum 40'ın altındaysa ne yapmalıyım?", a: "Önce hangi bileşenin zayıf olduğunu belirleyin. Büyüme düşükse fiyatlama, genişleme geliri (NRR) ve satın alma kanalları; kârlılık düşükse brüt marj, altyapı maliyetleri ve satış-pazarlama verimliliği (CAC geri kazanım süresi) üzerinde çalışın. İki bileşeni aynı anda zorlamak genellikle ikisini de bozar." },
    { q: "Rule of 40 ile NRR arasındaki ilişki nedir?", a: "Yüksek NRR, büyümenin ucuz kaynağıdır: mevcut müşteriden gelen genişleme geliri satış maliyeti yaratmadığı için hem büyüme hem kâr marjı bileşenini aynı anda yukarı çeker. Bu yüzden Rule of 40 skorunu iyileştirmenin en verimli yolu genellikle NRR'yi artırmaktır." },
  ],
  relatedTools: [
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Net gelir tutundurma" },
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici", note: "Kâr marjı bileşeni" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const cacPayback: ToolContent = {
  slug: "cac-payback",
  path: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici",
  title: "CAC Geri Ödeme Süresi Hesaplayıcı",
  description:
    "CAC geri ödeme süresi hesaplama: müşteri edinme maliyetinizin kaç ayda geri döndüğünü brüt marj dahil ücretsiz hesaplayın.",
  intro:
    "CAC geri ödeme süresi (payback period), bir müşteriyi kazanmak için harcadığınız paranın kaç ayda geri döndüğünü gösterir. CAC, müşteri başına aylık gelir (ARPA) ve brüt marjınızı girin; geri ödeme süreniz anında hesaplansın.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "CAC Geri Ödeme Süresi Nedir?", body: "CAC geri ödeme süresi, bir müşteriyi kazanmak için harcanan toplam pazarlama ve satış maliyetinin, o müşteriden elde edilen brüt kârla kaç ayda geri kazanıldığını ölçen metriktir. Formül basittir: CAC Geri Ödeme Süresi = CAC / (Aylık Müşteri Geliri × Brüt Marj). Brüt marjı hesaba katmamak en sık yapılan hatadır; sunucu, destek ve işlem maliyetleri düşülmeden bulunan süre gerçekte olduğundan kısa görünür." },
    { heading: "Örnek Hesaplama", body: "Müşteri edinme maliyeti 18.000 ₺, müşteri başına aylık gelir 2.000 ₺ ve brüt marj %75 olsun. Aylık brüt kâr 2.000 × 0,75 = 1.500 ₺'dir. Geri ödeme süresi 18.000 / 1.500 = 12 ay çıkar. Yani müşteri en az 12 ay kalmazsa o müşteri işletmeye net zarar yazdırır; kâr ancak 13. aydan sonra başlar." },
    { heading: "Sağlıklı Geri Ödeme Süresi Kaç Ay Olmalı?", body: "Genel kabul gören referanslar: SMB odaklı SaaS'larda 6-12 ay, mid-market'te 12-18 ay, enterprise satışta 18-24 ay makul kabul edilir. E-ticaret ve abonelik kutu modellerinde hedef genellikle 3 ayın altıdır, çünkü churn çok daha hızlıdır. 24 ayı aşan süreler nakit akışını kilitler: her yeni müşteri büyümeyi hızlandırırken kasayı boşaltır." },
    { body: "Geri ödeme süresi, nakit yakma hızıyla doğrudan ilişkilidir. LTV:CAC oranı uzun vadeli kârlılığı gösterirken, payback period kısa vadeli nakit sağlığını gösterir. LTV:CAC oranınız 4x olsa bile geri ödeme 30 ay sürüyorsa büyümeyi finanse edecek nakde ihtiyacınız var demektir. Bu yüzden iki metrik birlikte okunmalıdır." },
    { heading: "Geri Ödeme Süresi Nasıl Kısaltılır?", body: "Üç kaldıraç vardır: CAC'ı düşürmek (dönüşüm oranı optimizasyonu, kanal karmasını verimliliğe göre yeniden dağıtma, organik ve referans kanalları), müşteri başına geliri artırmak (fiyatlama, paketleme, upsell ve yıllık peşin ödeme teşvikleri) ve brüt marjı iyileştirmek (altyapı maliyeti, destek verimliliği, self-servis onboarding). Yıllık peşin tahsilat, süreyi matematiksel olarak değil ama nakit akışı açısından anında düzelten en hızlı hamledir." },
  ],
  faqs: [
    { q: "CAC geri ödeme süresi nasıl hesaplanır?", a: "CAC Geri Ödeme Süresi = CAC / (Müşteri Başına Aylık Gelir × Brüt Marj). Örneğin CAC 18.000 ₺, aylık gelir 2.000 ₺ ve brüt marj %75 ise aylık brüt kâr 1.500 ₺ olur ve geri ödeme süresi 12 aydır." },
    { q: "İyi bir CAC geri ödeme süresi kaç aydır?", a: "SMB odaklı SaaS'larda 6-12 ay, mid-market'te 12-18 ay, enterprise satışta 18-24 ay sağlıklı kabul edilir. E-ticarette hedef genellikle 3 ayın altındadır. 24 ayı aşan süreler ciddi bir nakit akışı riski işaret eder." },
    { q: "Hesaba brüt marjı dahil etmek şart mı?", a: "Evet. Brüt marj dahil edilmediğinde gelirin tamamı kâr sayılır ve süre olduğundan kısa görünür. Sunucu, ödeme komisyonu, destek ve teslimat maliyetleri düşülmüş brüt kâr üzerinden hesaplamak doğru sonucu verir." },
    { q: "CAC geri ödeme süresi ile LTV:CAC oranı arasındaki fark nedir?", a: "LTV:CAC oranı bir müşterinin ömrü boyunca ne kadar kâr bıraktığını, geri ödeme süresi ise bu paranın ne kadar hızlı geri geldiğini gösterir. Biri kârlılık, diğeri nakit akışı metriğidir; yüksek LTV:CAC oranı uzun bir geri ödeme süresini telafi etmez." },
    { q: "Yıllık peşin ödeme geri ödeme süresini etkiler mi?", a: "Nakit akışı açısından evet. Yıllık peşin tahsilatta CAC ilk ay itibarıyla fiilen geri kazanılır; muhasebesel geri ödeme süresi aynı kalsa da nakit döngüsü tamamen değişir. Bu nedenle çoğu SaaS yıllık plana indirim uygular." },
    { q: "Geri ödeme süresi churn ile nasıl ilişkilidir?", a: "Ortalama müşteri ömrü (1 / aylık churn oranı), geri ödeme süresinden kısaysa iş modeli zarar üretiyor demektir. Örneğin aylık %5 churn 20 aylık ortalama ömür anlamına gelir; 24 aylık bir geri ödeme süresi bu durumda sürdürülemez." },
  ],
  relatedTools: [
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici", note: "Yaşam boyu değer" },
    { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici", note: "Ortalama müşteri ömrü" },
    { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici", note: "Hesap başına ortalama gelir" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const channelQuiz: ToolContent = {
  slug: "hangi-pazarlama-kanali-uygun",
  path: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun",
  title: "Hangi Pazarlama Kanalı Size Uygun? (Quiz)",
  description:
    "30 saniyede işletmeniz için en uygun reklam kanalını bulun. Google Ads, Meta, LinkedIn, TikTok arasından size özel öneri alın.",
  intro:
    "5 kısa soruya cevap verin; işletme türünüz, hedefiniz, bütçeniz, satış döngünüz ve hedef kitlenize göre size en uygun pazarlama kanalını ve bir alternatifini önerelim. Hesaplama tamamen tarayıcınızda çalışır, hiçbir veri kaydedilmez.",
  seoParagraphs: [
    { heading: "Pazarlama kanalı seçimi neye göre yapılır?", body: "Kanal seçimi bir zevk meselesi değil, dört değişkenin kesişimidir: talebin niteliği (var olan talebi mi yakalıyorsunuz, yoksa talep mi yaratıyorsunuz), satış döngüsünün uzunluğu, birim ekonomisinin taşıyabileceği tıklama maliyeti ve hedef kitlenin nerede vakit geçirdiği. Arama hacmi olan, anlık satın alma niyeti taşıyan ürünlerde Google Ads; görsel keşif ve dürtüsel satın almada Meta ve TikTok; yüksek bilet fiyatlı, karar vericiye ulaşmayı gerektiren B2B satışta ise LinkedIn Ads öne çıkar." },
    { heading: "Bütçe kanal seçimini nasıl değiştirir?", body: "Düşük bütçelerde kanalı bölmek en pahalı hatadır. 10.000 ₺ altındaki aylık bütçelerde tek kanalda öğrenme aşamasını tamamlamak, üç kanala dağılmaktan neredeyse her zaman daha verimlidir; çünkü algoritmalar yeterli dönüşüm verisi olmadan optimize edemez. Bütçe arttıkça kanal karması anlamlanır: performans kanalları kısa vadeli satışı, SEO ve e-posta pazarlaması ise edinme maliyetini zamanla düşüren birikimli varlıkları üretir." },
    { heading: "Quiz sonucunu nasıl okumalısınız?", body: "Sonuç ekranındaki birincil kanal, verdiğiniz cevaplara göre en yüksek ağırlığı toplayan kanaldır; ikincil öneri ise test etmeye değer ikinci adaydır. Öneriyi bir başlangıç hipotezi olarak alın: 4-6 haftalık bir test bütçesiyle çalıştırın, ROAS ve dönüşüm oranını ölçün, sonucu kendi verinizle doğrulayın. Kanal kararını kalıcı kılan şey quiz değil, ölçümdür." },
  ],
  faqs: [
    { q: "Hangi pazarlama kanalı B2B için en iyi?", a: "B2B'de karar vericiye ünvan, şirket büyüklüğü ve sektör kırılımıyla ulaşabildiği için LinkedIn Ads genellikle en isabetli kanaldır; tıklama maliyeti yüksektir ama bilet fiyatı da yüksektir. Yanına arama niyetini yakalayan Google Ads ve uzun satış döngüsünü besleyen SEO/içerik ile e-posta pazarlaması eklendiğinde en dengeli karma ortaya çıkar." },
    { q: "Küçük bütçeyle hangi reklam platformu tercih edilmeli?", a: "Aylık 10.000 ₺ altındaki bütçelerde tek kanala odaklanın. Talep zaten varsa (insanlar ürününüzü arıyorsa) Google Ads marka dışı dar bir anahtar kelime setiyle; talep yaratmanız gerekiyorsa Meta Ads tek kampanya ve geniş hedeflemeyle başlanacak yerdir. Paralel olarak SEO ve e-posta pazarlaması, reklam durduğunda kaybolmayan birikimli kanal olarak çalıştırılmalıdır." },
    { q: "E-ticaret için en iyi reklam kanalı hangisi?", a: "E-ticarette çoğu markada Meta Ads (katalog ve Advantage+ kampanyaları) ile Google Ads (Performance Max ve marka araması) birlikte omurgayı oluşturur. Görsel ve trend odaklı, genç kitleye satan kategorilerde TikTok Ads keşif tarafında güçlüdür. Tekrar satın alma potansiyeli olan kategorilerde e-posta pazarlaması, edinme maliyetini düşüren en kârlı kanaldır." },
    { q: "Reklam kanalı seçimi neden önemli?", a: "Çünkü yanlış kanal, iyi bir ürünü ve iyi bir kreatifi bile kârsız gösterir. Kanal; tıklama maliyetini, kitlenin satın alma niyetini ve dönüşüme kadar geçen süreyi belirler. Yanlış kanalda harcanan bütçe yalnızca para değil, öğrenme süresi de kaybettirir: algoritmanın optimize etmesi için gereken dönüşüm verisi hiç birikmez." },
    { q: "Aynı anda birden fazla kanalda reklam vermeli miyim?", a: "Bütçeniz her kanalda aylık en az 30-50 dönüşüm üretebiliyorsa evet; üretemiyorsa hayır. Kanal başına yeterli dönüşüm hacmi yoksa hem algoritma öğrenemez hem de hangi kanalın işe yaradığını istatistiksel olarak ayırt edemezsiniz. Önce tek kanalda kârlı bir birim ekonomisi kurun, sonra ölçekleyin." },
  ],
  relatedTools: [
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
    { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu", note: "Kanal bazlı ölçümleme" },
    { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici", note: "Kanal performansı karşılaştırma" },
    { label: "Pazarlama Araçları", href: "/ucretsiz-araclar/pazarlama-araclari", note: "Tüm pazarlama hesaplayıcıları" },
  ],
  relatedPost: { label: "B2B Lead Generation Maliyetleri Nasıl Düşürülür?", href: "/blog/b2b-lead-generation-maliyetleri-nasil-dusurulur" },
};

export const marketplace: ToolContent = {
  slug: "trendyol-hepsiburada-kar-hesaplama",
  path: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama",
  title: "Trendyol & Hepsiburada Kâr Hesaplama Aracı",
  description:
    "Trendyol ve Hepsiburada'da sipariş başı net kârınızı komisyon, kargo, hizmet bedeli, stopaj, iade ve reklam dahil hesaplayın; başabaş fiyatı görün.",
  intro:
    "Satış fiyatı, ürün maliyeti, komisyon ve kargo bilgilerini girin; araç sipariş başı net kârınızı, kâr marjınızı, başabaş ve hedef satış fiyatınızı, sipariş başı harcayabileceğiniz maksimum reklam bütçesini ve hesabınıza yatacak tutarı hesaplasın. Diğer hesaplayıcılardan farklı olarak iade oranını ve reklam maliyetini de hesaba katar. Hesap tarayıcınızda çalışır, sonucu link olarak paylaşabilirsiniz.",
  seoParagraphs: [
    {
      heading: "Trendyol ve Hepsiburada'da kâr nasıl hesaplanır?",
      body:
        "Pazaryerinde gerçek kâr, satış fiyatından yalnızca komisyonu düşerek bulunmaz. KDV'li satış fiyatından önce KDV ayrılır, ardından komisyon, kargo, platform hizmet bedeli, ürün maliyeti ve paketleme düşülür. Formül: Net kâr = Satış fiyatı / (1 + KDV oranı) − Komisyon − Kargo − Hizmet bedeli − Ürün maliyeti − Paketleme. Bu hesap iade edilmeyen tek bir sipariş içindir; gerçek tabloyu görmek için iade ve reklam maliyetini de eklemek gerekir. Araç tüm tutarları KDV hariç gösterir, çünkü KDV mükellefi bir satıcı alış ve gider faturalarındaki KDV'yi indirebilir; KDV kâr değil, devlete aktarılan bir emanettir.",
    },
    {
      heading: "Örnek hesap: 599 TL'lik bir ürün gerçekte ne kazandırıyor?",
      body:
        "%20 KDV'li bir ürünü 599 TL'ye sattığınızı düşünelim. KDV hariç satış 499,17 TL'dir. Komisyon oranı %15 ise ve komisyon KDV dahil fiyat üzerinden hesaplanıyorsa komisyon 89,85 TL olur. Kargo 65 TL, hizmet bedeli 10,99 TL, ürün maliyeti 220 TL ve paketleme 8 TL düşüldüğünde iade edilmeyen bir siparişte net kâr 105,33 TL, marj yaklaşık %21'dir. Şimdi iade oranını %8 ve sipariş başı reklam harcamasını 40 TL olarak ekleyelim: sipariş başı ortalama net kâr 45,86 TL'ye, marj %9,2'ye düşer. Yani iade ve reklam, kâğıt üzerindeki kârın yarısından fazlasını eritir. Aynı üründe başabaş satış fiyatı yaklaşık 526 TL, %10 net marj için gereken fiyat ise yaklaşık 606 TL'dir.",
    },
    {
      heading: "Komisyon KDV dahil fiyattan mı hesaplanır?",
      body:
        "Pazaryerleri komisyonu genellikle müşterinin ödediği KDV dahil satış fiyatı üzerinden hesaplar ve komisyon faturasına ayrıca %20 KDV ekler. Bu yüzden 'komisyon oranım %15' demek, KDV hariç satışınızın %15'inden daha fazlasını ödediğiniz anlamına gelir: örnekteki 599 TL'lik üründe komisyon, KDV hariç satışın yaklaşık %18'ine denk gelir. Komisyon oranı kategoriye, satıcı seviyesine ve kampanya anlaşmalarına göre değişir; kesin oranı satıcı panelinizdeki anlaşma bilgilerinden alıp araca girin.",
    },
    {
      heading: "E-ticaret stopajı (%1) kârı etkiler mi?",
      body:
        "1 Ocak 2025'ten itibaren pazaryerleri, satıcıya yaptıkları ödemelerden KDV hariç satış tutarının %1'i oranında gelir vergisi stopajı keser. Stopaj bir maliyet değil, peşin ödenmiş vergidir: yıllık veya geçici vergi beyannamesinde hesaplanan vergiden mahsup edilir. Bu nedenle araç stopajı kârdan düşmez, ancak hesabınıza yatan tutarı hesaplarken nakit akışından çıkarır. Basit usulde vergilendirilen ve kazanç vergisinden muaf esnaf gibi bazı satıcılar stopaj kapsamı dışındadır; bu durumdaysanız ilgili kutucuğu kapatın.",
    },
    {
      heading: "Platform hizmet bedeli ve kargo maliyeti",
      body:
        "Trendyol ve Hepsiburada, komisyona ek olarak teslim edilen her paket için sabit bir platform hizmet bedeli alır. Araçtaki varsayılan değer kamuya açık kaynaklardan alınmıştır ve sık güncellendiği için düzenlenebilir bırakılmıştır. Kargo maliyeti ise kargo firmasına, paketin desisine (en × boy × yükseklik / 3000) ve sepet tutarına göre değişir; belirli tutarın altındaki siparişlerde pazaryerlerinin barem adı verilen sabit kargo tarifeleri devreye girebilir. Kargo ücretini kendi tarifenizden, KDV hariç olarak girin.",
    },
    {
      heading: "İade oranı kârı neden bu kadar etkiler?",
      body:
        "İade edilen bir siparişte satıştan gelir elde etmezsiniz ama gidiş kargosu, dönüş kargosu ve paketleme maliyeti çoğu zaman size kalır. Araç bunu iki kalemle gösterir: iade edilen siparişlerde kaçan kâr ve iade kargo-paketleme maliyeti. Giyim ve ayakkabı gibi kategorilerde iade oranları yüksek olabildiği için aynı fiyat ve komisyonla çalışan iki ürünün gerçek kârlılığı çok farklı çıkabilir. Kendi iade oranınızı satıcı panelinizin raporlarından alın; ürün sayfası, beden tablosu ve görsellerin iyileştirilmesi iade oranını düşürmenin en hızlı yoludur.",
    },
    {
      heading: "Sipariş başı ne kadar reklam harcayabilirim?",
      body:
        "Araç, mevcut satış fiyatınızda hedef kâr marjınızı koruyarak sipariş başı harcayabileceğiniz maksimum reklam tutarını ve başabaş ROAS değerini hesaplar. Örnekteki üründe iade düşüldükten sonra reklam öncesi kâr sipariş başı yaklaşık 85,86 TL'dir; bu, başabaş ROAS'ın yaklaşık 7 olduğu anlamına gelir. Pazaryeri reklamlarında (Trendyol veya Hepsiburada reklam panelleri) 7 ROAS'ın altında kalan her kampanya bu ürün için zarar demektir. Bu eşik, pazaryeri dışı Meta veya Google reklamları için de aynı mantıkla geçerlidir.",
    },
    {
      heading: "Trendyol ile Hepsiburada arasında hesap farkı var mı?",
      body:
        "Hesap mantığı iki pazaryerinde de aynıdır: KDV, komisyon, kargo, hizmet bedeli, stopaj, iade ve reklam. Fark; kategori bazlı komisyon oranlarında, hizmet bedelinin tutarında, anlaşmalı kargo tarifelerinde ve barem koşullarında ortaya çıkar. Aynı ürünü iki pazaryerinde satıyorsanız, aracı her pazaryeri için kendi komisyon ve kargo değerlerinizle ayrı ayrı çalıştırıp sonuçları linkleriyle karşılaştırabilirsiniz. Kendi web sitenizde satış için 'Diğer' seçeneğini kullanın; komisyon yerine ödeme altyapısı kesintinizi girin.",
    },
  ],
  faqs: [
    { q: "Trendyol kâr hesaplama nasıl yapılır?", a: "KDV dahil satış fiyatını KDV oranına bölerek KDV hariç satışı bulun, ardından komisyonu (KDV dahil fiyat × komisyon oranı), kargoyu, platform hizmet bedelini, ürün maliyetini ve paketlemeyi düşün. Gerçek kâr için iade maliyetini ve sipariş başı reklam harcamasını da ekleyin. Bu araç tüm adımları otomatik yapar." },
    { q: "Pazaryeri komisyonu KDV dahil fiyattan mı alınır?", a: "Genellikle evet: komisyon, müşterinin ödediği KDV dahil fiyat üzerinden hesaplanır ve komisyon faturasına ayrıca %20 KDV eklenir. Bu KDV indirilebildiği için kârdan düşülmez, ancak komisyonun kendisi KDV hariç satışınıza oranla, ilan edilen orandan daha yüksek bir paya karşılık gelir." },
    { q: "E-ticaret stopajı nasıl hesaplanır ve geri alınabilir mi?", a: "Stopaj, KDV hariç satış tutarının %1'idir ve pazaryeri tarafından ödemenizden kesilir. Peşin ödenmiş gelir vergisi olduğu için beyannamede hesaplanan vergiden mahsup edilir; mahsup edilemeyen kısım için iade talep edilebilir. Kesin durumunuz için mali müşavirinize danışın." },
    { q: "Platform hizmet bedeli ne kadar?", a: "Trendyol ve Hepsiburada teslim edilen paket başına sabit bir hizmet bedeli alır ve bu tutar sık güncellenir. Araçtaki varsayılan değer kamuya açık kaynaklardan derlenmiştir; satıcı panelinizdeki güncel tutarla değiştirebilirsiniz." },
    { q: "Desi nasıl hesaplanır?", a: "Desi = En × Boy × Yükseklik (cm) / 3000 formülüyle hesaplanır ve kargo ücreti, paketin ağırlığı ile desisinden hangisi büyükse ona göre belirlenir. Paket ölçülerini küçültmek kargo maliyetini doğrudan düşürür." },
    { q: "İade edilen siparişte komisyon ve kargo ne olur?", a: "Uygulama pazaryerine göre değişmekle birlikte, iade edilen siparişin komisyonu genellikle iade edilir; gidiş ve dönüş kargo ücretleri ise çoğu zaman satıcıya kalır. Araç, iade oranınıza göre bu kargo ve paketleme kaybını sipariş başına dağıtarak gösterir." },
    { q: "Pazaryerinde iyi bir kâr marjı kaç olmalı?", a: "Kategoriye göre değişir; ancak iade ve reklam düşüldükten sonra KDV hariç satışın %10'unun altında kalan net marj, kampanya indirimleri ve kur dalgalanmalarına karşı çok az pay bırakır. Aracı hedef marjınızı girerek kullanın; gereken satış fiyatını ve maksimum reklam bütçesini otomatik gösterir." },
    { q: "Sipariş başı ne kadar reklam harcayabilirim?", a: "İade düşüldükten sonra kalan reklam öncesi kârınız, sipariş başı harcayabileceğiniz üst sınırdır; hedef marjınızı korumak için bundan hedef kârınızı çıkarın. Araç bu tutarı ve başabaş ROAS değerini sizin için hesaplar." },
  ],
  relatedTools: [
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam getirisini ölçün" },
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Ürün bazında marj" },
    { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici", note: "Mağaza geneli kârlılık" },
    { label: "E-Ticaret Araçları", href: "/ucretsiz-araclar/e-ticaret-araclari", note: "Tüm e-ticaret hesaplayıcıları" },
  ],
  relatedPost: { label: "ROAS Nedir, Nasıl Hesaplanır? İyi ROAS Kaçtır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
  externalSource: { label: "GİB — 330 Sıra No.lu Gelir Vergisi Genel Tebliği bilgi notu (e-ticaret stopajı)", href: "https://gib.gov.tr/sites/default/files/fileadmin/mevzuatek/mevzuatbilginotu/gelirvergisiteblig330not.pdf" },
};

export const adBudget: ToolContent = {
  slug: "reklam-butcesi-hesaplama",
  path: "/ucretsiz-araclar/reklam-butcesi-hesaplama",
  title: "Reklam Bütçesi Hesaplama Aracı",
  description:
    "Hedef cironuzdan veya müşteri hedefinizden geriye doğru aylık reklam bütçenizi, başabaş ve hedef ROAS'ı, maksimum CPA ve CPL'yi hesaplayın.",
  intro:
    "Reklam bütçesini 'cironun yüzde kaçı' gibi kaba bir kuralla değil, kendi rakamlarınızla belirleyin. E-ticaret modunda hedef ciro, sepet tutarı, brüt marj ve dönüşüm oranınızdan; B2B modunda hedef müşteri sayısı ve satış hunisi oranlarınızdan yola çıkarak kârlı kalabileceğiniz maksimum bütçeyi, Google Ads'e girmeniz gereken hedef ROAS'ı ve sipariş ya da lead başı ödeyebileceğiniz üst sınırı görün. Planınızı link olarak paylaşabilirsiniz.",
  seoParagraphs: [
    {
      heading: "Reklam bütçesi nasıl hesaplanır?",
      body:
        "Doğru reklam bütçesi, hedeften geriye doğru hesaplanır. E-ticarette formül şudur: Maksimum reklam bütçesi = Hedef ciro × (Brüt kâr marjı − Hedef net kâr oranı). Brüt marjınız %40 ve reklam sonrası %10 kâr bırakmak istiyorsanız, cironun %30'una kadarını reklama ayırabilirsiniz; 500.000 TL'lik aylık ciro hedefi için bu 150.000 TL demektir. Bu tutar bir harcama hedefi değil, kârlılığın üst sınırıdır. İkinci adım, bu bütçeyle hedefe ulaşıp ulaşamayacağınızı kontrol etmektir: Gereken sipariş = Hedef ciro / Ortalama sepet, Gereken tıklama = Gereken sipariş / Dönüşüm oranı, Tahmini bütçe = Gereken tıklama × TBM.",
    },
    {
      heading: "Örnek: 500.000 TL ciro hedefi için ne kadar reklam gerekir?",
      body:
        "Ortalama sepeti 750 TL, brüt marjı %40 ve dönüşüm oranı %1,5 olan bir mağaza, aylık 500.000 TL ciro için yaklaşık 667 siparişe ve 44.445 tıklamaya ihtiyaç duyar. Ortalama TBM 4 TL ise bu trafik yaklaşık 177.800 TL'ye mal olur; oysa %10 net kâr hedefiyle ayrılabilecek üst sınır 150.000 TL'dir. Yani bu varsayımlarla hedef kâr tutmaz. Araç burada iki çıkış yolunu sayısal olarak gösterir: TBM'yi en fazla yaklaşık 3,38 TL'ye indirmek ya da dönüşüm oranını en az %1,78'e çıkarmak. Bütçe kararını 'daha çok harcayalım' yerine 'hangi kaldıracı oynatmalıyız' sorusuna çevirmek, aracın asıl değeridir.",
    },
    {
      heading: "Başabaş ROAS ve hedef ROAS",
      body:
        "Başabaş ROAS = 1 / Brüt kâr marjı formülüyle bulunur; %40 marjda 2,5'tir ve bunun altındaki her kampanya zarar ettirir. Hedef ROAS ise kâr hedefinizi de içerir: Hedef ROAS = 1 / (Brüt marj − Hedef net kâr oranı). Örnekte 1 / 0,30 ≈ 3,33'tür; Google Ads'te Hedef ROAS teklif stratejisine girilecek değer %333'tür. Sipariş başı ödeyebileceğiniz maksimum edinme maliyeti (CPA) ise Ortalama sepet × (Brüt marj − Hedef kâr) formülüyle 225 TL'dir. Bu üç sayı, kampanya optimizasyonunda hangi reklam setini kapatıp hangisini ölçekleyeceğinizi belirler.",
    },
    {
      heading: "Reklam bütçesi cironun yüzde kaçı olmalı?",
      body:
        "Sık duyulan '%5-15' gibi aralıklar ancak bir başlangıç fikri olabilir; çünkü doğru oran tamamen marjınıza bağlıdır. Araçtaki senaryo tablosu, cironun %5, %10, %15 ve %20'si kadar bütçe ayırdığınızda her senaryonun gerektirdiği ROAS'ı ve reklam sonrası kalan brüt kârı gösterir. Örneğin cironun %20'sini reklama ayırmak 5 ROAS gerektirir; %40 marjlı bir mağazada bu senaryo hâlâ kârlıdır, %20 marjlı bir mağazada ise reklam sonrası kâr sıfırlanır. Büyüme döneminde bütçe payını bilinçli olarak artırmak mümkündür, ancak bunun müşteri yaşam boyu değeriyle (LTV) desteklenmesi gerekir.",
    },
    {
      heading: "B2B'de reklam bütçesi nasıl planlanır?",
      body:
        "B2B'de satış haftalar sürdüğü için bütçe, ciro yerine müşteri hedefinden ve satış hunisinden hesaplanır. Ayda 10 yeni müşteri hedefleyen, lead'lerinin %25'ini nitelikli fırsata (SQL) ve SQL'lerinin %20'sini müşteriye çeviren bir şirket, 50 SQL ve 200 lead'e ihtiyaç duyar. Lead başı maliyet 900 TL ise aylık bütçe 180.000 TL, müşteri başı reklam maliyeti (CAC) 18.000 TL olur. Müşteri başı yıllık gelir 120.000 TL ve brüt marj %70 ise bu CAC yaklaşık 2,6 ayda geri döner. Araç ayrıca 12 aylık geri ödeme sınırını korumak için ödeyebileceğiniz maksimum lead maliyetini hesaplar; LinkedIn gibi yüksek CPL'li kanalların sizin için mantıklı olup olmadığını bu sayıya bakarak karar verebilirsiniz.",
    },
    {
      heading: "Kur, sezon ve öğrenme aşaması",
      body:
        "Türkiye'de reklam platformlarının bir kısmı maliyetleri döviz bazlı fiyatlar; kur hareketleri TBM'yi TL cinsinden doğrudan artırır, bu yüzden planı aylık olarak güncellemek gerekir. Efsane Kasım ve Black Friday gibi dönemlerde tıklama maliyetleri belirgin şekilde yükselir; bu dönemler için TBM varsayımını ayrıca artırarak ayrı bir senaryo çalıştırın. Son olarak, yeni kampanyalar öğrenme aşamasında hedef ROAS'ın altında performans gösterebilir; ilk iki-üç haftanın verisine göre bütçeyi kesmek yerine, aracın verdiği başabaş eşiğini ve yeterli dönüşüm hacmini birlikte izleyin.",
    },
  ],
  faqs: [
    { q: "Aylık reklam bütçesi ne kadar olmalı?", a: "Kârlılığı koruyan üst sınır, Hedef ciro × (Brüt kâr marjı − Hedef net kâr oranı) formülüyle bulunur. %40 marj ve %10 kâr hedefiyle cironun %30'una kadarı reklama ayrılabilir. Ardından TBM ve dönüşüm oranınızla bu bütçenin hedefe yetip yetmediğini kontrol edin." },
    { q: "Reklam bütçesi cironun yüzde kaçı olmalı?", a: "Sabit bir oran yoktur; marjınıza bağlıdır. Cironun %10'unu reklama ayırmak 10 ROAS, %20'sini ayırmak 5 ROAS gerektirir. Marjınız bu ROAS'ı taşıyabiliyorsa oran sizin için uygundur." },
    { q: "Başabaş ROAS nasıl hesaplanır?", a: "Başabaş ROAS = 1 / Brüt kâr marjı. %40 marjda 2,5, %25 marjda 4'tür. Bu değerin altındaki kampanyalar ürün maliyetini ve reklam harcamasını karşılamaz." },
    { q: "Maksimum CPA nasıl bulunur?", a: "Maksimum CPA = Ortalama sepet tutarı × (Brüt marj − Hedef net kâr oranı). 750 TL sepet, %40 marj ve %10 kâr hedefinde sipariş başı 225 TL'ye kadar edinme maliyeti ödeyebilirsiniz." },
    { q: "B2B'de reklam bütçesi nasıl belirlenir?", a: "Hedef müşteri sayısını SQL → müşteri oranına, çıkan SQL sayısını lead → SQL oranına bölerek gereken lead sayısını bulun; bunu lead başı maliyetle çarpın. Sonra CAC'ın brüt kârla kaç ayda geri döndüğünü kontrol edin; 12 ayın altı sağlıklı kabul edilir." },
    { q: "Google Ads hedef ROAS değerini nasıl belirlemeliyim?", a: "Hedef ROAS = 1 / (Brüt marj − Hedef net kâr oranı) ile hesaplayın ve sonucu 100 ile çarparak yüzde olarak girin. %40 marj ve %10 kâr hedefi için değer yaklaşık %333'tür." },
  ],
  relatedTools: [
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Gerçekleşen ROAS'ı ölçün" },
    { label: "Trendyol & Hepsiburada Kâr Hesaplama", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama", note: "Sipariş başı net kâr" },
    { label: "CAC Geri Ödeme Süresi Hesaplayıcı", href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici", note: "B2B geri ödeme" },
    { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici", note: "Dönüşüm hedefi" },
  ],
  relatedPost: { label: "ROAS Nedir, Nasıl Hesaplanır? İyi ROAS Kaçtır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
};
