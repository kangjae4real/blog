export interface Links {
  github: string;
  linkedIn: string;
}

export const LINKS: Links = {
  github: "https://github.com/kangjae4real",
  linkedIn: "https://linkedin.com/in/kangjae-choi",
};

export interface Profiles extends Links {
  name: string;
  birthDate: string;
  email: string;
}

export const PROFILES: Profiles = {
  name: "최강재",
  birthDate: "2002.01.24",
  email: "awpe89@gmail.com",
  ...LINKS,
};

export const humanizeProfile = (key: keyof Profiles) => {
  return {
    name: "이름",
    birthDate: "생년월일",
    email: "이메일",
    github: "Github",
    linkedIn: "LinkedIn",
  }[key];
};

export const INTRODUCTION: string[] = [
  "4년차 프론트엔드 개발자 최강재라고 합니다.\n스타트업 기업에서 React, Next.js 등을 메인으로 프로덕션 서비스를 개발 및 운영한 경험이 있으며\n좋은 커뮤니케이션과 좋은 개발자 경험에 관심이 많아 고민하고 노력해오고 있습니다.",
  "주도적으로 일하는 것을 즐기고 세밀한 소통으로 제품 발전의 기여합니다.\n서로의 지식을 공유하고 피드백을 하는 자리를 좋아합니다.",
  "또한, 다양한 사이드 프로젝트 진행 경험과 클라이언트와의 소통, 다양한 기술 경험으로\n어떠한 상황에도 요구사항을 처리해 낼 수 있습니다.",
  "감사합니다.",
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  startedAt?: string;
  endAt?: string;
  tech: string[];
  work: string[];
  improvement: string[];
}

export const IBK_AI_PLACEMENT: Project = {
  title: "IBK기업은행 AI 인사배치 SPA 개발",
  description:
    "IBK 기업은행에서 진행하는 AI 인사배치 프로젝트입니다.\nAI 모델의 기능을 모두 활용할 수 있도록 하는 SPA 입니다.",
  startedAt: "2023.09",
  endAt: "현재",
  tech: ["TypeScript", "React", "tailwind-css", "MobX"],
  work: [
    "은행원의 배치를 위한 프로세스를 작성할 수 있는 페이지를 개\n발하였습니다. 서버와의 실시간 통신으로 진행도를 확인할 수\n있는 UI/UX 를 추가 작성하였습니다.",
    "은행원의 배치 가점요소, 감점요소를 조정하는 기능을 개발하\n였습니다.",
    "은행원의 배치 결과를 다양한 포맷으로 Export하는 페이지를\n개발하였습니다.",
  ],
  improvement: [
    `모든 API 요청 코드가 컴포넌트 내부에서 직접 작성되어 사용\n되고 있었습니다. 이를 "react-query"와 비슷하게 동작하는\nuseApi 라는 Custom Hook을 만들어 진행상황과 응답을\n바로 사용할 수 있도록 개선하여 코드 재활용성을 높였습니다.`,
  ],
};

export const DOCZIP: Project = {
  title: "DOCZIP",
  description: "유료사용자 50,000명의 서비스로 반응형 웹 주소지 검색 및 공부\n열람 서비스입니다.",
  link: "https://doczip.kr",
  startedAt: "2021.09",
  endAt: "현재",
  tech: ["TypeScript", "React", "styled-components", "Redux Thunk"],
  work: [
    `간편하게 주소만 검색하면 주소지에 대한 정보, 융자금, 위험\n요소를 자동으로 체크해주는 "Report" 기능을 주도개발하였\n습니다.`,
    `"Report" 기능과 더불어 주소 검색 시, 공적장부(등기부등본,\n토지대장, 건축물대장 등)를 자동으로 발급해주는 기능을 개발\n하였습니다. (Tanker Blitz API 활용)`,
    "서비스 전반적인 UI/UX 를 개발하였습니다.",
    "사이트 리뉴얼에 참여하여 서비스 고도화를 진행하였습니다.",
  ],
  improvement: [
    `기존 전역상태관리 코드는 "redux-observable"로 작성되어\n굉장히 난해하고 "Over-engineering" 된 상황이였습니다.\n이를 "redux-thunk" 로 재작성하여 유지보수에 이점을\n확보하였습니다.`,
    `"redux" 를 사용할때에 불편을 해소할 수 있도록 자동으로\n"Action", "Selector" 를 생성해주는 유틸리티 함수를\n개발하여 개발자 경험을 향상하였습니다.`,
  ],
};

export const BLITZ_CORE_WEB: Project = {
  title: "Blitz Core Web (서비스 종료)",
  description: "탱커의 외부 직원 및 은행원이 간편하게 Blitz API를 이용할 수\n있도록 개발된 반응형 웹 서비스입니다.",
  startedAt: "2021.09",
  endAt: "2022.11",
  tech: ["TypeScript", "Next.js", "styled-components", "Redux Observable"],
  work: [
    "주소를 검색하면 자동으로 대출금 산정 및 각각의 은행 보고서\n포맷대로 데이터를 포맷팅해주는 페이지 및 기능을 개발하였\n습니다.",
  ],
  improvement: [
    "사내 1인 프로젝트로 참여하게 되어 큰 중압감이 있었습니다.\n배포일정 또한 여유롭지 않았으나 근무 대부분의 시간을\n할애하고 동료 개발자와의 유기적인 소통으로 해결하여\n정해진 일정대로 배포를 진행할 수 있었습니다.",
    "외부 직원과의 피드백을 진행하였습니다.\n그로 인해 대출금 산정 코드의 문제점을 확인하였고\n이를 개선하여 사용자 경험을 크게 높인 경험이 있습니다.",
  ],
};

export const ZIPZIP: Project = {
  title: "ZipZip (서비스 종료)",
  description: "탱커의 원스톱 공부열람 API 인 Blitz API 를 활용하여\n개발된 반응형 웹 매물 검색 서비스입니다.",
  startedAt: "2021.09",
  endAt: "2022.04",
  tech: ["TypeScript", "Next.js", "styled-components", "Redux Observable"],
  work: ["레거시로 존재하는 코드의 유지보수 및 개선을\n담당하였습니다."],
  improvement: [
    "레거시로 존재하던 프로젝트였습니다. 조직의 특성 상 빠른 개\n발로 인해 서비스 문서화가 진행되지 않았고 팔로우 업을 하는\n시간을 많이 가졌습니다.",
    "레거시 코드의 70% 이상을 최신화하였습니다.\n이러한 경험으로 배운 점은 최신화의 문제점을 파악하고 해결\n하는 방법과 효과적인 마이그레이션의 방법을 배웠습니다.\n추가적으로 이러한 경험을 사내 세미나로 풀어낸 경험도 가지\n게 되었습니다.",
    "해당 프로젝트 진행 경험으로 문서화의 중요성을 깨달았습니\n다. 프로젝트 진행 이후 사내 모든 서비스의 문서를 최신화하\n고 공유하는 시간을 가졌습니다.",
  ],
};

export const CRYPTO_QUANT: Project = {
  title: "CryptoQuant",
  description: "팀블랙버드의 암호화폐 추세 분석 서비스입니다.",
  startedAt: "2020.09",
  endAt: "2021.08",
  tech: ["TypeScript", "Next.js", "styled-components", "Redux Thunk"],
  work: [
    "서비스 내 커뮤니티(QuickTake)를 개발하였고,\n글 작성 및 좋아요, 댓글 작성 기능을 개발하였습니다.",
    "서비스 내 알람(Alert)을 개선하였고, 특정 데이터의 조건\n을 설정하면 조건이 실행될 때 Telegram 알람을 보내주는\n기능을 개발하였습니다.",
    "react-i18next 라이브러리 사용으로 기존 영어 사이트의\n다국어화를 진행하였습니다.",
    "대부분의 신규 기능 개발의 참여하였습니다.",
  ],
  improvement: [
    "기존 불필요한 Loader를 제거하고 esbuild 를 도입하여\n빌드 시간을 1분에서 8초까지 단축하였습니다.",
    "업무를 대하는 태도를 배웠습니다.\n업무를 잘게 나누어 중요도를 부여하고 중요도가 높은 업무를\n먼저 진행하는 방식을 택하여 확실한 개발일정 산정하는 법을\n배웠습니다.",
    "소통에서의 문제점은 잦은 스몰토크로 해결하였습니다.\n업무 외적으로도 스몰토크를 진행하여 동료와의 공감대를\n형성하고 서로의 경험을 공유하여 업무를 배워나가는 방식을\n택하였습니다. 이로 인해 더욱 편하게 업무를 진행하여\n코드의 퀄리티 또한 증가함을 확인하였습니다.",
  ],
};

export const JYP_PARTNERS: Project = {
  title: "JYP Partners 사이트 개발",
  description: "Next.js 베이스 반응형 웹사이트입니다.\nJYP Partners를 소개하며, 공지사항 등을 확인할 수 있습니다.",
  link: "https://jyppartners.com",
  tech: ["TypeScript", "Next.js", "styled-components", "Zustand"],
  work: [
    "1인 개발 프로젝트로 모든 Front-end 코드를\n작성하였습니다.",
    "Dockerizing 를 활용하여 이미지로 관리합니다.\n서버에서는 Docker 를 활용하여 배포합니다.",
  ],
  improvement: [
    "검색엔진최적화(SEO)를 진행하였습니다.",
    "Back-end API 스키마에 맞춰 API Client 생성해주는 라이\n브러리를 사용하여 개발자 경험 개선하였습니다. (OAS)",
    "배포된 환경에서의 Client ↔ Media 서버간의 통신의 문제로\n사용자의 Media Asset을 못 불러오는 이슈를 발견하여 직접\nBack-end 권한코드를 수정하여 해결한 경험이 있습니다.",
  ],
};

export const ON_PREMISE_ISSUE_TRACKER: Project = {
  title: "On-Premise Issue Tracker 개발",
  description: "Atlassian Jira, Bitbucket Relay API를 활용한\nIssue Tracker입니다.",
  tech: ["TypeScript", "React", "styled-components", "Redux Thunk"],
  work: [
    "기존 Atlassian 제품을 사용하는 경험을 느낄 수 있도록\nAtlassian 제품과 비슷하게 UI/UX 를 개발했습니다.",
    "기존 Atlassian 제품과 마찬가지로 이슈, 풀리퀘스트, 커밋,\n댓글 모두 활용할 수 있도록 기능 개발을 진행하였습니다.",
    "Front-end App 에서 실행된 Action 은 같은 계정으로 로그\n인한 실제 제품에서도 똑같이 확인할 수 있습니다.",
  ],
  improvement: [
    "Atlassian API 댓글 Endpoint는 그 응답이 Front-end\n에서 사용하기 굉장히 어려운 상태였습니다.\n이를, 사용하기 좋게 포맷팅 해주는 스크립트를 개발하여\n개발자 경험을 개선하였습니다.",
    "기존 Atlassian API 구조 상 요청의 불필요한 베이스 코드가\n필요합니다. 이를 새로이 개발된 Relay API를 사용하도록 모\n두 변경하여 개발 경험을 개선하였습니다.",
    "Client를 설득하여 추가 일정을 산정한 경험이 있습니다.\n촉박한 배포 일정으로 제품의 퀄리티가 떨어지고 있던\n상황이였습니다. 직접 Client와 제품의 퀄리티를 지키기\n위한 미팅을 진행하여 일정을 확보하고 마무리 작업을\n진행하였습니다.",
  ],
};

export const XION_ITS_PMS_APP: Project = {
  title: "Xion ITS PMS Application 개발",
  description: "Xion ITS 에서 진행하는 On-premise Application 의\nFront-end 파트 리더로 참여하였습니다.",
  tech: ["TypeScript", "React", "styled-components", "Recoil"],
  work: [
    "프로젝트 베이스 코드를 확장가능한 구조로 작성하고\n바로 기능 개발에 돌입할 수 있도록 프로젝트 셋업을\n진행하였습니다.",
    "주니어 개발자 3명의 업무 배분을 담당하였습니다.",
    "기능개발, 리팩토링 작업의 코드 리뷰를 담당하였습니다.",
    "유기적인 소통으로 작업의 속도가 붙을 수 있도록\n리드하였습니다.",
  ],
  improvement: [
    "처음 담당해보는 리더 역할로 부담감을 가지고 있었습니다.\n이를 매니징 도구와 긴밀한 소통, 코드리뷰 방식으로\n효과적인 매니징이 가능하도록 하였습니다.",
    "주니어 개발자의 많은 실력 향상이 필요하였습니다.\n이를 위해 여러 재활용 가능한 컴포넌트와 빌드설정 및\n스크립트를 작성하여 예시를 보이고 이를 설명하여\n주니어 개발자로 하여금 주도적으로 코드를 작성할 수\n있도록 리드하였습니다.",
  ],
};

export const PLANATARIUM: Project = {
  title: "Planetarium 9c-launcher\n오픈소스 기여",
  description: "Planetarium사의 NineChronicles의 launcher인\n9c-launcher의 기여를 하였습니다.",
  link: "https://github.com/planetarium/9c-launcher/pull/1945",
  tech: ["TypeScript", "React", "styled-components", "Electron"],
  work: [
    "기존 Launcher(이하, 런처)의 에러페이지에서는 런처의\n재설치만 안내하며 사용자가 특별한 행동을 취할 수 있도록\n안내하지 않았습니다.",
    "위 내용은 사용자가 마치 “문이 없는 방”의 갇힌 것과\n같은 악효과가 발생합니다.",
    "이를 해결하기 위해 Error View 코드를 재작성하였습니다.",
  ],
  improvement: [
    "런처 내부에서 런처를 다시 설치할 수 있는 페이지를 브라우저\n로 볼 수 있도록 코드를 개선하며 런처 내부에서 자동으로 재\n시작을 할 수 있도록 Error View 코드를 개선하였습니다.",
    `추가로 단순히 재시작을 하기 전 사용자에게 체크박스로 하여\n금 "재시작만 진행", "재시작과 동시에 재설치안내받기" 를\n선택할 수 있도록 개선하였습니다.`,
    "소속되어 있는 조직이 아닌 처음 마주하는 조직원과\n소통을 할 기회를 얻게되었습니다.\n제가 작성한 코드를 피드백하며 더욱 더 개선할 수 있었고\n처음 활용해보는 프레임워크를 배워가는 시간도 가질 수\n있었습니다.",
    "오픈소스로 이루어진 생태계를 배울 수 있었습니다.\n기여를 앞두고 오픈소스 조직의 코드 스타일이나 관리도구를\n보며 더욱 성장할 수 있었습니다.",
  ],
};

export interface Career {
  company: string;
  joinedAt: string;
  quitedAt: string;
  team: string;
  job: string;
  projects: Project[];
  isFullTime: boolean;
  issue?: string;
}

export const CAREERS: Career[] = [
  {
    company: "탱커 & 제노임펙트",
    joinedAt: "2021.09",
    quitedAt: "현재 재직중",
    team: "Techne 1",
    job: "Front-end",
    projects: [IBK_AI_PLACEMENT, DOCZIP, BLITZ_CORE_WEB, ZIPZIP],
    isFullTime: true,
    issue:
      "탱커의 경영난으로 기술팀 전원 제노임펙트로 소속이 변경되었습니다. (합병)\n소속은 바뀌었지만, 여전히 탱커에서의 업무를 진행하고 있습니다.",
  },
  {
    company: "팀블랙버드",
    joinedAt: "2020.09",
    quitedAt: "2021.08",
    team: "Live",
    job: "Front-end",
    projects: [CRYPTO_QUANT],
    isFullTime: true,
  },
];

export const SIDE_PROJECTS: Project[] = [JYP_PARTNERS, ON_PREMISE_ISSUE_TRACKER, XION_ITS_PMS_APP, PLANATARIUM];

export interface PersonalActivity {
  title: string;
  description: string;
  acquisition: string;
}

export const CERTIFICATE1: PersonalActivity = {
  title: "정보처리기능사",
  description: "컴퓨터시스템, DB, 네트워크 등 정보처리 실력을 평가하는 자격입니다. 고등학교 재학 중 취득하였습니다.",
  acquisition: "2020.10",
};

export const CERTIFICATE2: PersonalActivity = {
  title: "웹디자인기능사",
  description:
    "웹디자인 및 웹개발 실력을 평가하는 자격입니다. 고등학교 재학 중 취득하였습니다.\n참고할 수 있는 실기 템플릿 11개를 개발하여 학과 학생 합격률을 대폭 높인 경험이 있습니다.",
  acquisition: "2020.08",
};

export const CONTEST: PersonalActivity = {
  title: "서울특별시 지방기능경기대회 웹디자인 및 개발 직종",
  description:
    "3일의 시간동안 하나의 서비스를 개발하고 평가받았습니다. HTML5, CSS3, JavaScript,\nPHP, MySQL 기술을 활용하여 경쟁을 하였습니다. 최종 5등으로 메달을 획득하지는 못했습니다.",
  acquisition: "2019.04",
};

export const ACTIVITIES: PersonalActivity[] = [CERTIFICATE1, CERTIFICATE2, CONTEST];

export type Skill = string;

export const FRONT_END: Skill[] = [
  "Search Engine Optimization(SEO)을 고민하고 개발하고 적용해본 경험이 있습니다.",
  "IE11, Chrome, Safari 등 크로스 브라우징을 고려하고 코드를 작성하고 개선해본 경험이 있습니다.",
  "반응형/적응형 웹을 구현하고 개선할 수 있습니다.",
];

export const JAVA_SCRIPT: Skill[] = [
  "JavaScript & TypeScript을 주력으로 개발합니다.",
  "ES6 이후 문법을 이해하고 활용할 수 있습니다.",
  "유틸리티 타입, 제네릭 등 타입시스템을 제대로 이해하고 활용할 수 있습니다.",
];

export const REACT_NEXT_JS: Skill[] = [
  "Client Side Rendering & Server Side Rendering 모두 대응하고 서비스를 개발할 수 있습니다.",
  "Functional Component, hooks을 제대로 이해하고 활용할 수 있습니다.",
  "항상 성능을 고민합니다.\nMemoization이나 반복 요청등을 신경쓰며 사용자가 좋은 서비스를 개발할 수 있습니다.",
];

export const DEV_OPS: Skill[] = [
  "반복적인 업무를 해소할 수 있는 Node.js CLI 툴링도구를 개발하는 것을 즐기고 잘할 수 있습니다.",
  "Docker와 Docker Compose를 이해하고 활용할 수 있습니다.\n모든 Application(FE, BE, NGINX)을 Dockerize하여 개발합니다.",
  "AWS EC2, Microsoft Azure 인스턴스들을 활용하여 컨테이너를 띄워 배포할 수 있습니다.",
];

export const COMMUNICATION: Skill[] = [
  "안좋은 결과를 항상 경계합니다. 좋은 결과를 낼 수 있도록 많은 소통을 하고 그것을 즐깁니다.",
  "많이 경청하고 때론 많은 의견을 내며 좋은 영향력을 끼칠 수 있도록 노력합니다.",
  "글 작성을 즐깁니다. 쉽게 풀어써 모두가 빠른 이해를 할 수 있도록 하고 있습니다.",
  "기획자, 디자이너, 백엔드 개발자와의 소통을 정말 많이 합니다.\n이해를 위한 글, 사진, 각종 도구 사용을 즐깁니다.",
];

export interface Skills {
  title: string;
  skills: Skill[];
}

export const SKILLS: Skills[] = [
  {
    title: "Front-end",
    skills: FRONT_END,
  },
  {
    title: "JavaScript",
    skills: JAVA_SCRIPT,
  },
  {
    title: "React & Next.js",
    skills: REACT_NEXT_JS,
  },
  {
    title: "DevOps",
    skills: DEV_OPS,
  },
  {
    title: "Communication",
    skills: COMMUNICATION,
  },
];

export interface Education {
  school: string;
  department: string;
  admissionAt: string;
  graduationAt: string;
  isGraduated?: boolean;
}

export const EDUCATIONS: Education[] = [
  {
    school: "세명컴퓨터고등학교",
    department: "스마트콘텐츠학과",
    admissionAt: "2018.03",
    graduationAt: "2021.03",
    isGraduated: true,
  },
];

export interface Military {
  startedAt: string;
  endAt: string;
  type: string;
  moveType: string;
}

export const MILITARY_ISSUE: Military = {
  startedAt: "2022.11.17",
  endAt: "2025.09.16",
  type: "현역",
  moveType: "현역 전직",
};

export const humanizeMilitaryIssue = (key: keyof Military) => {
  return {
    startedAt: "시작일",
    endAt: "종료일",
    type: "병역 유형",
    moveType: "전직 유형",
  }[key];
};

export interface Issue {
  description: string;
  military?: Military;
}

export const ISSUES: Issue[] = [
  {
    description: "병역특례 산업기능요원으로 복무(근무)중입니다.",
    military: MILITARY_ISSUE,
  },
];
