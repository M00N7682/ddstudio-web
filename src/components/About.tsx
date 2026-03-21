"use client";

import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { lang } = useLang();
  const a = t[lang].about;

  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="text-sm text-muted tracking-widest uppercase mb-4">
              {a.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {a.heading[0]}
              <br />
              {a.heading[1]}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-6">
              <p className="text-muted leading-relaxed">{a.p1}</p>
              <p className="text-muted leading-relaxed">{a.p2}</p>
              <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold">{a.stat1}</p>
                  <p className="text-sm text-muted mt-1">{a.stat1Label}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{a.stat2}</p>
                  <p className="text-sm text-muted mt-1">{a.stat2Label}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
