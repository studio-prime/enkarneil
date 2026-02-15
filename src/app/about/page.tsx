export default function About() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-10 pt-28 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl font-light tracking-wide mb-12">
              Énkar Neil
            </h2>
            <p className="font-sans text-base font-light leading-[1.8] text-[#3a3a3a]">
              Énkar Neil is a photographer and visual artist.
            </p>
            <p className="font-sans text-base font-light leading-[1.8] text-[#3a3a3a] mt-5">
              She is specialized in portrait photography, corporate photography,
              visual poetry and photography within the field of music.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl font-light tracking-wide mb-12">
              Contact
            </h2>
            <p className="font-sans text-base font-light leading-[1.8] text-[#3a3a3a] mb-12">
              For any inquiries please get in touch at{" "}
              <a
                href="mailto:enkarneil@gmail.com"
                className="text-[#1a1a1a] underline underline-offset-4 decoration-[#c0c0c0] hover:decoration-[#1a1a1a] transition-all duration-300"
              >
                enkarneil@gmail.com
              </a>
            </p>

            <form className="flex flex-col gap-6">
              <div className="flex gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="font-sans w-1/2 border-b border-[#e0e0e0] py-3 text-sm font-light outline-none focus:border-[#1a1a1a] transition-colors duration-300 placeholder:text-[#b0b0b0] placeholder:font-light"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="font-sans w-1/2 border-b border-[#e0e0e0] py-3 text-sm font-light outline-none focus:border-[#1a1a1a] transition-colors duration-300 placeholder:text-[#b0b0b0] placeholder:font-light"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="font-sans border-b border-[#e0e0e0] py-3 text-sm font-light outline-none focus:border-[#1a1a1a] transition-colors duration-300 placeholder:text-[#b0b0b0] placeholder:font-light"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="font-sans border-b border-[#e0e0e0] py-3 text-sm font-light outline-none focus:border-[#1a1a1a] transition-colors duration-300 resize-none placeholder:text-[#b0b0b0] placeholder:font-light"
              />
              <button
                type="submit"
                className="font-sans self-start mt-6 px-10 py-3 border border-[#1a1a1a] text-[12px] font-light tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
