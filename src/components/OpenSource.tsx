import ScrollReveal from "./ScrollReveal";

const contributions = [
  {
    name: "openclaw",
    description: "오픈소스 AI 어시스턴트 프로젝트에 기여",
    role: "Contributor",
    url: "https://github.com/openclaw/openclaw",
  },
  {
    name: "imugi",
    description: "AI 기반 디자인-코드 변환 도구",
    role: "Creator",
    url: "https://github.com/M00N7682/imugi",
  },
];

export default function OpenSource() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-sm text-muted tracking-widest uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-16">
            오픈소스 활동
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 100}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border rounded-lg p-8 hover:border-muted/50 transition-colors duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted uppercase tracking-wider">
                      {item.role}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{item.name}</h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-foreground transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/M00N7682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub에서 더 보기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
