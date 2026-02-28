import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="text-sm text-muted tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              작은 팀,
              <br />큰 임팩트
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-6">
              <p className="text-muted leading-relaxed">
                디디스튜디오는 소프트웨어 개발을 전문으로 하는 1인 개발
                스튜디오입니다. 외주 개발부터 협력 개발까지, 프로젝트의 시작부터
                끝까지 함께합니다.
              </p>
              <p className="text-muted leading-relaxed">
                빠른 실행력과 높은 기술력을 바탕으로 웹 애플리케이션, AI 시스템,
                플랫폼 구축 등 다양한 분야에서 성과를 만들어왔습니다. 대형
                에이전시와 달리, 직접 소통하고 직접 만듭니다.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-muted mt-1">완료된 프로젝트</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted mt-1">직접 개발</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
