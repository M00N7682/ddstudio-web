import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    category: "Web Development",
    title: "중소기업 J사 웹사이트 구축",
    description:
      "기업의 브랜드 아이덴티티를 반영한 반응형 웹사이트를 기획부터 배포까지 전담하여 구축했습니다.",
    tags: ["Next.js", "TypeScript", "Responsive"],
    image: "/images/portfolio/project-j.png",
  },
  {
    category: "AI Solution",
    title: "중소기업 S사 B2B AI Agent 시스템",
    description:
      "LLM 기반 AI Agent 시스템을 설계하고 구축하여 업무 자동화와 생산성 향상을 실현했습니다.",
    tags: ["AI Agent", "LLM", "B2B"],
    image: "/images/portfolio/project-s.png",
  },
  {
    category: "Web Development",
    title: "Craftshop",
    description:
      "크래프트샵 웹사이트를 기획하고 구축하여 브랜드의 온라인 프레즌스를 강화했습니다.",
    tags: ["Next.js", "TypeScript", "Web"],
    image: "/images/portfolio/project-c.png",
  },
];

const product = {
  title: "일백제",
  description:
    "수험생을 위한 기출문제 풀이 플랫폼. 체계적인 학습과 실전 대비를 돕는 자체 서비스입니다.",
  url: "exam.ddstudio.co.kr",
  tags: ["EdTech", "Platform", "SaaS"],
  image: "/images/products/ilbaekje.png",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-16">
            만들어온 것들
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {projects.map((project, i) => (
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
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover blur-[2px]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">
                  Own Product
                </p>
                <h3 className="text-2xl font-semibold mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${product.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground underline underline-offset-4 hover:text-muted transition-colors duration-200"
                >
                  {product.url}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
