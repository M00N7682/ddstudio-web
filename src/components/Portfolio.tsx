"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import t from "@/lib/translations";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  const { lang } = useLang();
  const p = t[lang].portfolio;

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted tracking-widest uppercase mb-4">
            {p.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-16">
            {p.heading}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {p.projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="group border border-border rounded-lg overflow-hidden hover:border-muted/50 transition-colors duration-300 h-full">
                <div className="aspect-[16/10] bg-[#0a0a0a] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover blur-[2px]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted border border-border rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="border border-border rounded-lg overflow-hidden hover:border-muted/50 transition-colors duration-300">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[16/10] md:aspect-auto bg-[#0a0a0a] relative overflow-hidden">
                <Image
                  src={p.product.image}
                  alt={p.product.title}
                  fill
                  className="object-cover blur-[2px]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  {p.product.category}
                </p>
                <h3 className="text-2xl font-semibold mb-3">
                  {p.product.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {p.product.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {p.product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${p.product.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground underline underline-offset-4 hover:text-muted transition-colors duration-200"
                >
                  {p.product.url}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
