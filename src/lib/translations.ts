const translations = {
  ko: {
    hero: {
      subtitle: "Software Development Studio",
      heading: ["기술로", "비즈니스를", "완성합니다"],
      description:
        "디디스튜디오는 당신의 아이디어를 현실로 만드는 소프트웨어 개발 파트너입니다.",
      cta: "프로젝트 문의",
      portfolio: "포트폴리오 보기",
    },
    about: {
      label: "About",
      heading: ["작은 팀,", "큰 임팩트"],
      p1: "디디스튜디오는 소프트웨어 개발을 전문으로 하는 1인 개발 스튜디오입니다. 외주 개발부터 협력 개발까지, 프로젝트의 시작부터 끝까지 함께합니다.",
      p2: "빠른 실행력과 높은 기술력을 바탕으로 웹 애플리케이션, AI 시스템, 플랫폼 구축 등 다양한 분야에서 성과를 만들어왔습니다. 대형 에이전시와 달리, 직접 소통하고 직접 만듭니다.",
      stat1: "10+",
      stat1Label: "완료된 프로젝트",
      stat2: "100%",
      stat2Label: "직접 개발",
    },
    services: {
      label: "Services",
      heading: "무엇을 도와드릴까요",
      items: [
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
      ],
    },
    portfolio: {
      label: "Portfolio",
      heading: "참여 프로젝트",
      projects: [
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
      ],
      product: {
        category: "Own Product",
        title: "일백제",
        description:
          "수험생을 위한 기출문제 풀이 플랫폼. 체계적인 학습과 실전 대비를 돕는 자체 서비스입니다.",
        url: "exam.ddstudio.co.kr",
        tags: ["EdTech", "Platform", "SaaS"],
        image: "/images/products/ilbaekje.png",
      },
    },
    openSource: {
      label: "Open Source",
      heading: "오픈소스 활동",
      items: [
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
      ],
      moreOnGithub: "GitHub에서 더 보기",
    },
    contact: {
      label: "Contact",
      heading: ["프로젝트를", "시작해볼까요"],
      description:
        "새로운 프로젝트나 협업에 대해 이야기 나누고 싶으시다면 편하게 연락주세요.",
      location: "서울시 관악구 봉천동 866-5",
    },
  },
  en: {
    hero: {
      subtitle: "Software Development Studio",
      heading: ["We Build", "Your Vision", "Into Reality"],
      description:
        "ddstudio is your software development partner that turns ideas into products.",
      cta: "Start a Project",
      portfolio: "View Portfolio",
    },
    about: {
      label: "About",
      heading: ["Small Team,", "Big Impact"],
      p1: "ddstudio is a solo development studio specializing in software engineering. From outsourced development to collaborative projects, we're with you from start to finish.",
      p2: "With fast execution and strong technical skills, we've delivered results across web applications, AI systems, and platform development. Unlike large agencies, we communicate directly and build hands-on.",
      stat1: "10+",
      stat1Label: "Projects Completed",
      stat2: "100%",
      stat2Label: "Hands-on Development",
    },
    services: {
      label: "Services",
      heading: "How Can We Help",
      items: [
        {
          number: "01",
          title: "Outsourced Development",
          description:
            "We take full responsibility for building websites, web applications, and mobile apps from start to finish. We're involved from planning to deployment.",
          tags: ["Web", "Mobile", "Full-stack"],
        },
        {
          number: "02",
          title: "Collaborative Development",
          description:
            "We join your existing team to strengthen development capacity. With fast adaptability and high code quality, we accelerate your project's pace and completeness.",
          tags: ["Team Augmentation", "Agile"],
        },
        {
          number: "03",
          title: "AI Solutions",
          description:
            "We design and build solutions leveraging cutting-edge AI technologies including AI Agents, RAG systems, and LLM-based services.",
          tags: ["AI Agent", "LLM", "RAG"],
        },
      ],
    },
    portfolio: {
      label: "Portfolio",
      heading: "Our Projects",
      projects: [
        {
          category: "Web Development",
          title: "Corporate Website for Company J",
          description:
            "Built a responsive website reflecting the company's brand identity, managed from planning to deployment.",
          tags: ["Next.js", "TypeScript", "Responsive"],
          image: "/images/portfolio/project-j.png",
        },
        {
          category: "AI Solution",
          title: "B2B AI Agent System for Company S",
          description:
            "Designed and built an LLM-based AI Agent system to automate workflows and boost productivity.",
          tags: ["AI Agent", "LLM", "B2B"],
          image: "/images/portfolio/project-s.png",
        },
        {
          category: "Web Development",
          title: "Craftshop",
          description:
            "Planned and built the Craftshop website to strengthen the brand's online presence.",
          tags: ["Next.js", "TypeScript", "Web"],
          image: "/images/portfolio/project-c.png",
        },
      ],
      product: {
        category: "Own Product",
        title: "Ilbaekje",
        description:
          "A past exam practice platform for students. Our own service designed for systematic learning and real exam preparation.",
        url: "exam.ddstudio.co.kr",
        tags: ["EdTech", "Platform", "SaaS"],
        image: "/images/products/ilbaekje.png",
      },
    },
    openSource: {
      label: "Open Source",
      heading: "Open Source Activity",
      items: [
        {
          name: "openclaw",
          description: "Contributing to an open-source AI assistant project",
          role: "Contributor",
          url: "https://github.com/openclaw/openclaw",
        },
        {
          name: "imugi",
          description: "AI-powered design-to-code conversion tool",
          role: "Creator",
          url: "https://github.com/M00N7682/imugi",
        },
      ],
      moreOnGithub: "See More on GitHub",
    },
    contact: {
      label: "Contact",
      heading: ["Ready to", "Start a Project?"],
      description:
        "If you'd like to discuss a new project or collaboration, feel free to reach out.",
      location: "866-5 Bongcheon-dong, Gwanak-gu, Seoul",
    },
  },
} as const;

export type Translations = typeof translations;
export type Lang = keyof Translations;

export default translations;
