export default function Testimonials() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-10 pt-28 pb-28">
        <h2 className="font-serif text-4xl font-light tracking-wide mb-20">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <video
              className="w-full aspect-video object-cover"
              controls
              autoPlay
              playsInline
            >
              <source src="https://pub-96b42e40569a4dd6b7d740252b9176d8.r2.dev/testimonials.mp4" type="video/mp4" />
            </video>

            <div className="mt-10">
              <h3 className="font-sans text-[13px] font-medium tracking-[0.15em] uppercase">
                Gabri Ródenas
              </h3>
              <p className="font-sans text-[12px] font-light tracking-[0.15em] uppercase text-[#999] mt-1">
                Writer and Professor
              </p>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="font-sans text-[13px] font-medium tracking-[0.15em] uppercase">
                Antonio Pablo Apfox
              </h3>
              <p className="font-sans text-[12px] font-light tracking-[0.15em] uppercase text-[#999] mt-1">
                Sound Technician and Musician
              </p>
            </div>
            <blockquote className="font-serif text-xl italic font-light leading-[1.9] text-[#2a2a2a]">
              <p>
                &laquo;Hasta el día en el que hice la sesión de fotos con Énkar,
                solo me había puesto delante de la cámara para grabar algún
                acústico y me daba pánico el hecho de &apos;posar&apos;. Al
                llegar, lo primero que me dijo fue que no tenía por qué quedarme
                estático, que fuera tocando, caminando, moviéndome de forma
                natural y que las fotografías irían saliendo. Y así fue.
              </p>
              <p className="mt-8">
                Una experiencia muy cómoda con indicaciones de mirada, gestos que
                sí, gestos que no...
              </p>
              <p className="mt-8">Un gusto trabajar con ella&raquo;.</p>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
