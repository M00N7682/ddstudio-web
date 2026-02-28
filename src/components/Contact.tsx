import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="text-sm text-muted tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              프로젝트를
              <br />
              시작해볼까요
            </h2>
            <p className="text-muted leading-relaxed">
              새로운 프로젝트나 협업에 대해 이야기 나누고 싶으시다면 편하게
              연락주세요.
            </p>
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
                <p className="text-lg">서울시 관악구 봉천동 866-5</p>
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
