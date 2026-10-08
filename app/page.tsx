export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef1f5] pb-32 text-gray-900">

      {/* ARKA PLAN IŞIKLARI */}
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-200/50 blur-[120px]" />

      <div className="absolute -bottom-40 -right-32 h-[550px] w-[550px] rounded-full bg-violet-200/50 blur-[140px]" />

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/40 blur-[120px]" />


      {/* ÜST BAR */}
      <header className="relative z-20 mx-6 mt-6 overflow-hidden rounded-[28px] border border-white/70 bg-white/20 shadow-[0_8px_40px_rgba(31,38,135,0.12)] backdrop-blur-[30px]">

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent" />

        <div className="relative flex items-center justify-between px-6 py-5">

          <button className="text-2xl text-gray-800 transition hover:scale-105">
            ☰
          </button>

          <div className="text-xl font-semibold tracking-[0.35em]">
            VELORA
          </div>

          <div className="flex items-center gap-4">

            <button className="text-2xl transition hover:scale-105">
              ♡
            </button>

            <button className="text-2xl transition hover:scale-105">
              ♙
            </button>

          </div>

        </div>

      </header>


      {/* HERO */}
      <section className="relative z-10 flex min-h-[82vh] items-center justify-center px-6">

        <div className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-white/70 bg-white/20 px-8 py-16 text-center shadow-[0_20px_80px_rgba(31,38,135,0.15)] backdrop-blur-[35px] md:px-12">

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent" />

          <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-white/90" />

          <div className="relative">

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.5em] text-gray-500">
              Velora Collection
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Zarafetin
              <br />
              yeni hali.
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-gray-500">
              Sadelik, zarafet ve zamansız tasarımın buluştuğu
              yeni nesil koleksiyon.
            </p>

            <button className="mt-9 rounded-full border border-white/80 bg-white/40 px-9 py-3.5 text-sm font-medium shadow-lg backdrop-blur-xl transition hover:bg-white/60">
              Koleksiyonu Keşfet
            </button>

          </div>

        </div>

      </section>


      {/* KOLEKSİYON */}
      <section className="relative z-10 px-6 pb-28">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Öne Çıkan Koleksiyon
            </h2>

          </div>


          <div className="mx-auto max-w-sm">

            <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/25 p-4 shadow-[0_20px_60px_rgba(31,38,135,0.12)] backdrop-blur-[30px]">

              <div className="flex aspect-square items-center justify-center rounded-[24px] bg-white/30">

                <span className="text-7xl">
                  🦢
                </span>

              </div>


              <div className="px-2 pb-2 pt-5">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Velora
                </p>

                <h3 className="mt-2 text-xl font-medium">
                  Swan Necklace
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Zamansız zarafetin sembolü.
                </p>

                <button className="mt-5 w-full rounded-full border border-white/70 bg-white/40 py-3 text-sm font-medium shadow-md backdrop-blur-xl transition hover:bg-white/60">
                  Ürünü İncele
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SABİT LIQUID GLASS KONTROL MERKEZİ */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-[430px] -translate-x-1/2">

        <div className="relative rounded-[26px] border border-white/70 bg-white/30 px-2.5 py-2 shadow-[0_12px_45px_rgba(31,38,135,0.18)] backdrop-blur-[32px]">

          {/* CAM YANSIMASI */}
          <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/55 via-white/10 to-transparent" />

          {/* ÜST PARLAKLIK */}
          <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-white/90" />


          <div className="relative grid grid-cols-5 items-center gap-1">


            {/* ANA SAYFA */}
            <button className="flex h-14 flex-col items-center justify-center rounded-[18px] bg-white/40 shadow-sm backdrop-blur-xl transition hover:bg-white/60">

              <span className="text-[21px] leading-none">
                ⌂
              </span>

              <span className="mt-1 text-[9px] font-medium text-gray-500">
                Ana Sayfa
              </span>

            </button>


            {/* KATEGORİLER */}
            <button className="flex h-14 flex-col items-center justify-center rounded-[18px] transition hover:bg-white/40">

              <span className="text-[20px] leading-none">
                ◇
              </span>

              <span className="mt-1 text-[9px] font-medium text-gray-500">
                Kategori
              </span>

            </button>


            {/* MERKEZ VELORA */}
            <button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/50 text-2xl shadow-[0_6px_25px_rgba(31,38,135,0.16)] backdrop-blur-2xl transition hover:scale-105">

              🦢

            </button>


            {/* FAVORİLER */}
            <button className="flex h-14 flex-col items-center justify-center rounded-[18px] transition hover:bg-white/40">

              <span className="text-[21px] leading-none">
                ♡
              </span>

              <span className="mt-1 text-[9px] font-medium text-gray-500">
                Favori
              </span>

            </button>


            {/* SEPET */}
            <button className="flex h-14 flex-col items-center justify-center rounded-[18px] transition hover:bg-white/40">

              <span className="text-[20px] leading-none">
                🛍
              </span>

              <span className="mt-1 text-[9px] font-medium text-gray-500">
                Sepet
              </span>

            </button>


          </div>

        </div>

      </nav>

    </main>
  );
}