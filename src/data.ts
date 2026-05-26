import { ContactInfo, SkillItem, ExperienceItem, EducationItem, LanguageItem } from "./types";

export const contactInfo: ContactInfo = {
  phone: "010-2753-8618",
  email: "green_x@naver.com",
  website: "www.hongeunyoung-portfolio.com",
  location: "Seoul, South Korea",
};

export const profileText = "창의적인 비주얼 스토리텔링과 감정 표현에 강점을 가진 애니메이터로 다양한 디지털 콘텐츠 프로젝트를 수행해왔습니다. 캐릭터 애니메이션과 모션 그래픽 작업을 중심으로 협업과 디테일한 연출 능력을 발전시켜왔으며, 사용자에게 몰입감 있는 경험을 제공하는 것을 목표로 하고 있습니다. 새로운 애니메이션 기술과 트렌드를 꾸준히 학습하며 창의성과 완성도를 동시에 추구합니다. 문제 해결 과정에서 유연한 커뮤니케이션과 효율적인 제작 프로세스를 중요하게 생각합니다.";

export const skills: SkillItem[] = [
  {
    id: "key-animation",
    name: "Key Animation",
    stars: 4,
    maxStars: 5,
    description: "생동감 넘치는 움직임의 시작점인 키프레임 설계 및 모션 드로잉",
  },
  {
    id: "in-between-animation",
    name: "In-between Animation",
    stars: 5,
    maxStars: 5,
    description: "동작 사이의 부드럽고 풍부한 흐름을 완성하는 극강의 완성도 구현",
  },
  {
    id: "character-design",
    name: "Character Design",
    stars: 3,
    maxStars: 5,
    description: "스토리텔링과 감정선이 살아있는 유니크한 캐릭터 크리에이션",
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Studio Motion Lab",
    role: "Senior Animator",
    period: "2024/03 - 2026/05",
    description: "브랜드 광고와 SNS 콘텐츠 애니메이션 제작을 최고 퀄리티로 총괄 및 연출했습니다.",
    bulletPoints: [
      "다양한 캐릭터 기반 프로젝트 진행 및 협업을 통한 제작 일정 최적화",
      "감각적인 프레임 바이 프레임(Frame by Frame) 퀄리티 전담 향상으로 고객사 만족도 증가",
      "모션 그래픽 연출 및 영상 종합 편집 작업을 총괄하여 브랜드 가치 전달을 극대화",
    ],
    techStack: ["Spine", "Animate", "After Effects", "Photoshop"],
  },
  {
    id: "exp-2",
    company: "Pixel Dream Studio",
    role: "2D Animator",
    period: "2022/01 - 2024/02",
    description: "웹 애니메이션 및 글로벌 유튜브 오리지널 캐릭터 시리즈 콘텐츠 제작을 전담했습니다.",
    bulletPoints: [
      "스토리보드 기조에 최적화된 유기적이고 디테일한 감정선 표현 연출 수행",
      "팀 내 애니메이션 파트 메인 키 아티스트로서 주간 유튜브 조회수 증가에 기여",
      "다양한 애니메이션 장르 스타일링 학습을 통해 폭넓은 시각적 기호 구현 능력 획득",
    ],
    techStack: ["Animate CC", "PaintTool SAI", "Toon Boom Harmony", "Premiere Pro"],
  },
  {
    id: "exp-3",
    company: "Creative Frame",
    role: "Junior Motion Designer",
    period: "2020/06 - 2021/12",
    description: "브랜드 프로모션 및 미디어 월 광고용 모션 그래픽 프로덕션을 어시스트했습니다.",
    bulletPoints: [
      "정교한 스틸 일러스트 소스 분장 및 레이아웃 배치, 트랙 구조 설계 지원",
      "클라이언트 피드백의 적극적이고 신속한 반영을 통해 전체 프로젝트 제작 리드타임 대폭 단축",
      "멀티미디어 비주얼 요소 및 합성 작업을 조력하며 협업 프로세스를 다각도 습득",
    ],
    techStack: ["After Effects", "Illustrator", "Photoshop"],
  },
];

export const educations: EducationItem[] = [
  {
    id: "edu-1",
    school: "Korea National University of Arts",
    degree: "Master of Arts (석사)",
    major: "Animation",
    period: "2024/03 - 2026/02",
  },
  {
    id: "edu-2",
    school: "Hongik University",
    degree: "Bachelor of Fine Arts (학사)",
    major: "Visual Communication Design",
    period: "2016/03 - 2020/02",
  },
];

export const languages: LanguageItem[] = [
  { id: "lang-kor", name: "Korean", stars: 5 },
  { id: "lang-jpn", name: "Japanese", stars: 4 },
  { id: "lang-eng", name: "English", stars: 3 },
];
