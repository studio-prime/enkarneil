import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Énkar Neil is a photographer and visual artist specialized in portrait photography, corporate photography, visual poetry and photography within the field of music.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-10 pb-28 pt-28">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <h2 className="mb-12 font-serif text-4xl font-light tracking-wide">
              Énkar Neil
            </h2>
            <p className="font-sans text-base font-light leading-[1.8] text-[#3a3a3a]">
              Énkar Neil is a photographer and visual artist.
            </p>
            <p className="mt-5 font-sans text-base font-light leading-[1.8] text-[#3a3a3a]">
              She is specialized in portrait photography, corporate photography,
              visual poetry and photography within the field of music.
            </p>
          </div>

          <div>
            <h2 className="mb-12 font-serif text-4xl font-light tracking-wide">
              Contact
            </h2>
            <p className="mb-12 font-sans text-base font-light leading-[1.8] text-[#3a3a3a]">
              For any inquiries please get in touch at{" "}
              <a
                href="mailto:enkarneil@gmail.com"
                className="text-[#1a1a1a] underline decoration-[#c0c0c0] underline-offset-4 transition-all duration-300 hover:decoration-[#1a1a1a]"
              >
                enkarneil@gmail.com
              </a>
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
