"use client";

import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { lang } = useLang();
  const c = t[lang].contact;

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="text-sm text-muted tracking-widest uppercase mb-4">
              {c.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              {c.heading[0]}
              <br />
              {c.heading[1]}
            </h2>
            <p className="text-muted leading-relaxed">{c.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href="mailto:moondd0710@gmail.com"
                  className="text-lg hover:text-muted transition-colors duration-200"
                >
                  moondd0710@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Phone
                </p>
                <a
                  href="tel:010-7682-0651"
                  className="text-lg hover:text-muted transition-colors duration-200"
                >
                  010-7682-0651
                </a>
              </div>

              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Location
                </p>
                <p className="text-lg">{c.location}</p>
              </div>

              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Business Registration
                </p>
                <p className="text-muted">249-34-01555</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
