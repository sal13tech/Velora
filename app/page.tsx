"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  symbol: string;
};

type Tab = "home" | "categories" | "favorites" | "cart" | "menu";

const products: Product[] = [
  {
    id: 1,
    name: "Swan Necklace",
    category: "Kolye",
    price: 1299,
    description: "Zarif detaylarla tamamlanan zamansız bir tasarım.",
    symbol: "🦢",
  },
  {
    id: 2,
    name: "Luna Bracelet",
    category: "Bileklik",
    price: 899,
    description: "Minimal çizgilerden ilham alan modern bir dokunuş.",
    symbol: "✧",
  },
  {
    id: 3,
    name: "Aura Earrings",
    category: "Küpe",
    price: 749,
    description: "Her anına sade ve zarif bir ışıltı kat.",
    symbol: "◇",
  },
];

const categories = ["Tümü", "Kolye", "Bileklik", "Küpe"];

function formatPrice(price: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("home");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [category, setCategory] = useState("Tümü");
  const [selected, setSelected] = useState<Product | null>(null);
  const [notice, setNotice] = useState("");

  const displayedProducts = products.filter((product) => {
    const matchesCategory =
      category === "Tümü" || product.category === category;

    const matchesFavorites =
      tab !== "favorites" || favorites.includes(product.id);

    return matchesCategory && matchesFavorites;
  });

  const cartProducts = cart
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => product !== undefined);

  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price,
    0,
  );

  function navigate(nextTab: Tab) {
    setTab(nextTab);
    setSelected(null);
    setCategory("Tümü");
  }

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function addToCart(id: number) {
    setCart((current) => [...current, id]);
    setNotice("Ürün sepetine eklendi.");

    window.setTimeout(() => setNotice(""), 2200);
  }

  function removeFromCart(index: number) {
    setCart((current) => current.filter((_, i) => i !== index));
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f8fc] pb-32 text-[#242133]">
      {/* Arka plan */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-violet-300/25 blur-[110px]" />
        <div className="absolute -right-32 top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-pink-200/25 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Üst menü */}
        <header className="sticky top-4 z-30 mt-4 flex items-center justify-between rounded-3xl border border-white/90 bg-white/65 px-5 py-4 shadow-lg shadow-black/[0.03] backdrop-blur-2xl">
          <button
            type="button"
            onClick={() => navigate("menu")}
            aria-label="Menüyü aç"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/65 text-xl transition hover:bg-white"
          >
            ☰
          </button>

          <button
            type="button"
            onClick={() => navigate("home")}
            className="text-center"
          >
            <span className="block text-xl font-semibold tracking-[0.28em]">
              Zyren
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.4em] text-gray-500">
              Versé
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("favorites")}
            aria-label="Favoriler"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/65 text-2xl transition hover:bg-white"
          >
            ♡
            {favorites.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#302842] px-1 text-[10px] text-white">
                {favorites.length}
              </span>
            )}
          </button>
        </header>

        {/* Bildirim */}
        {notice && (
          <div
            role="status"
            className="fixed left-1/2 top-24 z-50 -translate-x-1/2 rounded-2xl border border-white bg-white/90 px-5 py-3 text-sm shadow-xl backdrop-blur-xl"
          >
            {notice}
          </div>
        )}

        {/* Ana sayfa */}
        {tab === "home" && !selected && (
          <>
            <section className="grid items-center gap-12 py-16 md:min-h-[680px] md:grid-cols-2 md:py-20">
              <div className="py-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-white bg-white/65 px-4 py-2.5 text-[10px] tracking-[0.25em] text-gray-600 shadow-sm backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  THE ART OF ELEGANCE
                </div>

                <h1 className="mt-8 text-5xl font-light leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                  Zarafetin
                  <br />
                  <span className="font-semibold">yeni</span> bir hali.
                </h1>

                <p className="mt-7 max-w-md text-base leading-8 text-gray-600">
                  Sadelikten ilham alan tasarımlar, zamansız bir stil ve
                  kendine özgü bir dünya. Velora ile detayların gücünü keşfet.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("categories")}
                  className="mt-9 rounded-2xl bg-[#29243b] px-7 py-4 text-sm text-white shadow-xl shadow-[#29243b]/15 transition hover:-translate-y-1 hover:bg-[#403653]"
                >
                  Koleksiyonu keşfet <span className="ml-3">↗</span>
                </button>

                <div className="mt-12 flex gap-10 border-t border-black/10 pt-6">
                  <div>
                    <p className="text-xl font-medium">01</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Özgün tasarım
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-medium">∞</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Zamansız stil
                    </p>
                  </div>
                </div>
              </div>

              {/* Yenilenen kuğu vitrini */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-12 rounded-full bg-violet-300/30 blur-[90px]" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/90 bg-gradient-to-br from-white/85 via-white/55 to-violet-100/65 p-5 shadow-2xl shadow-violet-900/[0.08] backdrop-blur-2xl sm:p-7">
                  {/* Marka ve rozet: halka alanından tamamen ayrı */}
                  <div className="relative z-20 flex min-h-[48px] items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] tracking-[0.35em] text-gray-500">
                        Zyren Versé

                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Fine Jewelry
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full border border-white bg-white/80 px-3 py-2.5 text-[9px] tracking-[0.16em] text-[#51466d] shadow-sm backdrop-blur-xl">
                      EXCLUSIVE EDITION
                    </span>
                  </div>

                  {/* Kuğu ve halkalar için bağımsız alan */}
                  <div className="relative mx-auto mt-7 flex aspect-square w-full max-w-[330px] items-center justify-center">
                    <div className="absolute h-[94%] w-[94%] rounded-full border border-white/90" />

                    <div className="absolute h-[78%] w-[78%] rounded-full border border-violet-200/70" />

                    <div className="absolute h-[63%] w-[63%] rounded-full border border-white/90 bg-white/35 shadow-[inset_0_0_40px_rgba(255,255,255,0.8)] backdrop-blur-xl" />

                    <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-white/70 to-violet-100/40 sm:h-48 sm:w-48">
                      <span
                        className="select-none text-[105px] drop-shadow-[0_12px_15px_rgba(65,48,100,0.15)] sm:text-[125px]"
                        aria-label="Velora kuğu sembolü"
                      >
                        🦢
                      </span>
                    </div>

                    <span className="absolute right-[13%] top-[19%] text-2xl text-violet-300">
                      ✧
                    </span>

                    <span className="absolute bottom-[15%] left-[12%] text-xl text-white">
                      ✧
                    </span>
                  </div>

                  {/* Başlık ve buton için ayrı alt bölüm */}
                  <div className="relative z-10 mt-4 border-t border-white/90 pt-6 text-center">
                    <p className="text-[9px] tracking-[0.4em] text-gray-400">
                      TIMELESS ELEGANCE
                    </p>

                    <h2 className="mt-3 text-3xl font-light tracking-[0.1em]">
                      Swan Collection
                    </h2>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                      Zarafetin en sade hali. Her detayda kendine özgü bir
                      ışıltı.
                    </p>

                    <button
                      type="button"
                      onClick={() => navigate("categories")}
                      className="mt-6 rounded-2xl border border-white bg-white/75 px-6 py-3.5 text-xs tracking-[0.12em] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                    >
                      KOLEKSİYONU KEŞFET <span className="ml-2">↗</span>
                    </button>
                  </div>

                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/60 blur-3xl" />
                </div>
              </div>
            </section>

            <section className="pb-12">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-500">
                    SENİN İÇİN SEÇİLDİ
                  </p>
                  <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                    Öne çıkanlar
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("categories")}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Tümünü gör ↗
                </button>
              </div>

              <ProductGrid
                items={products}
                favorites={favorites}
                onFavorite={toggleFavorite}
                onAddToCart={addToCart}
                onSelect={setSelected}
              />
            </section>
          </>
        )}

        {/* Koleksiyon ve favoriler */}
        {(tab === "categories" || tab === "favorites") && !selected && (
          <section className="min-h-[65vh] py-16">
            <p className="text-[10px] tracking-[0.3em] text-gray-500">
              ZYREN VERSÉ
            </p>

            <h1 className="mt-4 text-4xl font-light sm:text-5xl">
              {tab === "favorites" ? "Favorilerin" : "Koleksiyon"}
            </h1>

            {tab === "categories" && (
              <div className="my-8 flex flex-wrap gap-3">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-5 py-3 text-sm transition ${
                      category === item
                        ? "border-[#29243b] bg-[#29243b] text-white"
                        : "border-white bg-white/65 text-gray-600 hover:bg-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-8">
              {displayedProducts.length > 0 ? (
                <ProductGrid
                  items={displayedProducts}
                  favorites={favorites}
                  onFavorite={toggleFavorite}
                  onAddToCart={addToCart}
                  onSelect={setSelected}
                />
              ) : (
                <div className="rounded-3xl border border-white bg-white/60 px-6 py-20 text-center backdrop-blur-xl">
                  <p className="text-4xl">♡</p>
                  <h2 className="mt-5 text-xl font-medium">
                    Henüz favori ürünün yok.
                  </h2>
                  <p className="mt-3 text-sm text-gray-500">
                    Beğendiğin ürünleri favorilerine eklediğinde burada
                    görebilirsin.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("categories")}
                    className="mt-6 rounded-xl bg-[#29243b] px-5 py-3 text-sm text-white"
                  >
                    Koleksiyonu keşfet
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Ürün detayı */}
        {selected && (
          <section className="min-h-[65vh] py-12">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mb-8 rounded-xl border border-white bg-white/70 px-4 py-3 text-sm backdrop-blur-xl"
            >
              ← Geri dön
            </button>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-white bg-gradient-to-br from-white/80 to-violet-100/70 shadow-xl backdrop-blur-xl">
                <span className="text-[140px] drop-shadow-lg">
                  {selected.symbol}
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  {selected.category.toUpperCase()}
                </p>
                <h1 className="mt-4 text-4xl font-light sm:text-5xl">
                  {selected.name}
                </h1>
                <p className="mt-5 text-2xl">
                  {formatPrice(selected.price)}
                </p>
                <p className="mt-5 max-w-md leading-8 text-gray-600">
                  {selected.description}
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(selected.id)}
                  className="mt-8 rounded-2xl bg-[#29243b] px-6 py-4 text-sm text-white transition hover:bg-[#403653]"
                >
                  Sepete ekle
                </button>

                <button
                  type="button"
                  onClick={() => toggleFavorite(selected.id)}
                  className="mt-3 rounded-2xl border border-white bg-white/70 px-6 py-4 text-sm backdrop-blur-xl"
                >
                  {favorites.includes(selected.id)
                    ? "♥ Favorilerden çıkar"
                    : "♡ Favorilere ekle"}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Sepet */}
        {tab === "cart" && (
          <section className="min-h-[65vh] py-16">
            <p className="text-[10px] tracking-[0.3em] text-gray-500">
              ALIŞVERİŞ ÇANTAN
            </p>
            <h1 className="mt-4 text-4xl font-light sm:text-5xl">Sepetin</h1>

            {cartProducts.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-white bg-white/60 px-6 py-20 text-center backdrop-blur-xl">
                <p className="text-5xl">♧</p>
                <h2 className="mt-5 text-xl font-medium">
                  Sepetin şu an boş.
                </h2>
                <p className="mt-3 text-sm text-gray-500">
                  Koleksiyonu keşfet ve beğendiğin tasarımlara göz at.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("categories")}
                  className="mt-6 rounded-xl bg-[#29243b] px-5 py-3 text-sm text-white"
                >
                  Koleksiyona göz at
                </button>
              </div>
            ) : (
              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
                <div className="space-y-4">
                  {cartProducts.map((product, index) => (
                    <div
                      key={`${product.id}-${index}`}
                      className="flex items-center gap-4 rounded-3xl border border-white bg-white/65 p-4 shadow-sm backdrop-blur-xl"
                    >
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-violet-100/60 text-4xl">
                        {product.symbol}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-medium">{product.name}</h2>
                        <p className="mt-1 text-sm text-gray-500">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(index)}
                        className="rounded-xl px-3 py-2 text-sm text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                      >
                        Kaldır
                      </button>
                    </div>
                  ))}
                </div>

                <div className="h-fit rounded-3xl border border-white bg-white/75 p-6 shadow-lg backdrop-blur-xl">
                  <h2 className="text-xl font-medium">Sepet özeti</h2>
                  <div className="mt-6 flex justify-between text-sm text-gray-500">
                    <span>Ürün sayısı</span>
                    <span>{cartProducts.length}</span>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
                    <span>Toplam</span>
                    <span className="text-lg font-semibold">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <div className="mt-6 rounded-2xl bg-violet-50 p-4 text-xs leading-6 text-violet-900">
                    Bu sayfa yalnızca demo amaçlıdır. Gerçek ödeme alınmaz ve
                    gerçek sipariş oluşturulmaz.
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Menü */}
        {tab === "menu" && (
          <section className="min-h-[65vh] py-16">
            <p className="text-[10px] tracking-[0.3em] text-gray-500">
              Zyren Versé
            </p>
            <h1 className="mt-4 text-4xl font-light">Keşfet</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MenuCard
                title="Ana sayfa"
                description="Zyren Versé dünyasına geri dön."
                icon="⌂"
                onClick={() => navigate("home")}
              />
              <MenuCard
                title="Koleksiyon"
                description="Tüm tasarımları keşfet."
                icon="◇"
                onClick={() => navigate("categories")}
              />
              <MenuCard
                title="Favorilerim"
                description="Beğendiğin ürünleri görüntüle."
                icon="♡"
                onClick={() => navigate("favorites")}
              />
              <MenuCard
                title="Sepetim"
                description="Sepetine eklediğin ürünleri gör."
                icon="♧"
                onClick={() => navigate("cart")}
              />
            </div>

            <div className="mt-8 rounded-3xl border border-white bg-white/60 p-6 backdrop-blur-xl">
              <p className="font-medium">Zyren Versé</p>
              <p className="mt-2 text-sm leading-7 text-gray-500">
                Zarafeti modern tasarımlarla buluşturan dijital bir marka
                deneyimi.
              </p>
              <p className="mt-4 text-xs text-gray-400">
                Demo sürümü · Geliştirme aşamasında
              </p>
            </div>
          </section>
        )}

        <footer className="mt-12 border-t border-black/10 py-8 text-center">
          <p className="text-xs tracking-[0.4em] text-gray-500">ZYREN VERSÉ</p>
          <p className="mt-3 text-xs text-gray-400">
            Zamansız zarafet, modern bir dokunuş.
          </p>
          <p className="mt-2 text-[10px] text-gray-400">
            Demo proje · Gerçek sipariş ve ödeme alınmaz.
          </p>
        </footer>
      </div>

      {/* Alt navigasyon */}
      <nav className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-24px)] max-w-md -translate-x-1/2 items-center justify-around rounded-[2rem] border border-white/90 bg-white/80 px-2 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl">
        <NavButton
          icon="⌂"
          label="Ana Sayfa"
          active={tab === "home"}
          onClick={() => navigate("home")}
        />

        <NavButton
          icon="◇"
          label="Koleksiyon"
          active={tab === "categories"}
          onClick={() => navigate("categories")}
        />

        <button
          type="button"
          onClick={() => navigate("home")}
          aria-label="Zyren Versé ana sayfa"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#29243b] text-2xl text-white shadow-lg transition hover:scale-105"
        >
          ♧
        </button>

        <NavButton
          icon="♡"
          label="Favoriler"
          active={tab === "favorites"}
          badge={favorites.length}
          onClick={() => navigate("favorites")}
        />

        <NavButton
          icon="♧"
          label="Sepet"
          active={tab === "cart"}
          badge={cart.length}
          onClick={() => navigate("cart")}
        />
      </nav>
    </main>
  );
}

type ProductGridProps = {
  items: Product[];
  favorites: number[];
  onFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
  onSelect: (product: Product) => void;
};

function ProductGrid({
  items,
  favorites,
  onFavorite,
  onAddToCart,
  onSelect,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <article
          key={product.id}
          className="group overflow-hidden rounded-[2rem] border border-white/90 bg-white/60 p-3 shadow-lg shadow-black/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/90 to-violet-100/70">
            <div className="absolute inset-4 rounded-[1.2rem] border border-white/80" />

            <span className="relative text-7xl drop-shadow-lg transition duration-300 group-hover:scale-110">
              {product.symbol}
            </span>

            <button
              type="button"
              onClick={() => onFavorite(product.id)}
              aria-label={
                favorites.includes(product.id)
                  ? "Favorilerden çıkar"
                  : "Favorilere ekle"
              }
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white/80 text-xl backdrop-blur-xl transition hover:scale-110"
            >
              {favorites.includes(product.id) ? "♥" : "♡"}
            </button>

            <span className="absolute bottom-4 left-4 rounded-full border border-white/90 bg-white/80 px-3 py-2 text-[10px] tracking-widest backdrop-blur-xl">
              {product.category.toUpperCase()}
            </span>
          </div>

          <div className="p-4">
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="text-left"
            >
              <h3 className="text-lg font-medium transition hover:text-violet-700">
                {product.name}
              </h3>
            </button>

            <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
              {product.description}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="font-semibold">
                {formatPrice(product.price)}
              </span>

              <button
                type="button"
                onClick={() => onAddToCart(product.id)}
                className="rounded-xl bg-[#29243b] px-4 py-3 text-xs text-white transition hover:bg-[#403653]"
              >
                + Sepete ekle
              </button>
            </div>

            <button
              type="button"
              onClick={() => onSelect(product)}
              className="mt-3 w-full rounded-xl border border-black/5 py-3 text-xs text-gray-600 transition hover:bg-white/80"
            >
              Ürünü incele ↗
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

type NavButtonProps = {
  icon: string;
  label: string;
  active: boolean;
  badge?: number;
  onClick: () => void;
};

function NavButton({
  icon,
  label,
  active,
  badge = 0,
  onClick,
}: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`relative flex min-w-0 flex-col items-center gap-1 rounded-2xl px-2 py-1 transition ${
        active ? "text-[#29243b]" : "text-gray-400 hover:text-gray-700"
      }`}
    >
      <span className="text-2xl leading-7">{icon}</span>
      <span className="whitespace-nowrap text-[9px]">{label}</span>

      {badge > 0 && (
        <span className="absolute -right-1 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-600 px-1 text-[9px] text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

type MenuCardProps = {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
};

function MenuCard({
  title,
  description,
  icon,
  onClick,
}: MenuCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-5 rounded-3xl border border-white bg-white/60 p-6 text-left shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/85"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white bg-white/80 text-3xl">
        {icon}
      </span>

      <span>
        <span className="block font-medium">{title}</span>
        <span className="mt-2 block text-sm leading-6 text-gray-500">
          {description}
        </span>
      </span>
    </button>
  );
}