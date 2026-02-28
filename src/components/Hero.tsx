export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1200px] w-full">
        <div className="max-w-2xl">
          <p className="text-sm text-muted tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up">
            Software Development Studio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            개발 그 이상의
            <br />
            파트너
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-md opacity-0 animate-fade-in-up animate-delay-200">
            디디스튜디오는 당신의 아이디어를 현실로 만드는 소프트웨어 개발
            파트너입니다.
          </p>
          <div className="flex gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors duration-200"
            >
              프로젝트 문의
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-md hover:bg-white/5 transition-colors duration-200"
            >
              포트폴리오 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
