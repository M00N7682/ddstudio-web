import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "외주 개발",
    description:
      "웹사이트, 웹 애플리케이션, 모바일 앱 등 프로젝트를 처음부터 끝까지 책임지고 개발합니다. 기획 단계부터 배포까지 전 과정을 함께합니다.",
    tags: ["Web", "Mobile", "Full-stack"],
  },
  {
    number: "02",
    title: "협력 개발",
    description:
      "기존 팀에 합류하여 개발 역량을 보강합니다. 빠른 적응력과 높은 코드 품질로 프로젝트의 속도와 완성도를 높입니다.",
    tags: ["Team Augmentation", "Agile"],
  },
  {
    number: "03",
    title: "AI 솔루션",
    description:
      "AI Agent, RAG 시스템, LLM 기반 서비스 등 최신 AI 기술을 활용한 솔루션을 설계하고 구축합니다.",
    tags: ["AI Agent", "LLM", "RAG"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-16">
            무엇을 도와드릴까요
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={i * 100}>
              <div className="group py-10 border-t border-border last:border-b hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 md:-mx-12 md:px-12">
                <div className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-start">
                  <span className="text-sm text-muted font-mono">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <div>
                    <p className="text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {service.tags.map((tag) => (
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
