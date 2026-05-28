import { ContactInfo, SkillItem, ExperienceItem, EducationItem, LanguageItem } from "./types";

export const contactInfo: ContactInfo = {
  phone: "010-2753-8618",
  email: "green_x@naver.com",
  website: "www.hongeunyoung-portfolio.com",
  location: "Seoul, South Korea",
};

export const profileText =
  "일본 2D 애니메이션 제작 파이프라인을 기준으로 원화(키 애니메이션)·동화(인비트윈) 중심의 작화를 수행합니다.\n"
  + "레이아웃/포즈 설계, 연기(acting)와 타이밍 조정, 동작의 spacing을 통해 장면의 감정선을 또렷하게 만드는 것을 중요하게 생각합니다.\n"
  + "작감 수정/리테이크 대응에서는 의도 파악 → 우선순위 정리 → 컷 단위로 빠르게 재정리하는 방식으로 퀄리티와 납기를 함께 지키는 편입니다.\n"
  + "클린업, 라인 정리, 레퍼런스 분석을 통해 작화 통일감과 캐릭터 모델 유지에 강점을 갖고 있습니다.";

export const skills: SkillItem[] = [
  {
    id: "key-animation",
    name: "Key Animation (原画)",
    stars: 4,
    maxStars: 5,
    description: "레이아웃/포즈 설계, 액팅(연기)·타이밍으로 컷의 의도와 감정선을 명확히 만드는 원화 작업",
  },
  {
    id: "in-between-animation",
    name: "In-between (動画)",
    stars: 5,
    maxStars: 5,
    description: "spacing과 라인 컨트롤로 움직임의 흐름을 정교하게 연결하고 모델을 유지하는 동화 작업",
  },
  {
    id: "character-design",
    name: "Cleanup & Line Art",
    stars: 3,
    maxStars: 5,
    description: "클린업/선 정리, 볼륨 유지, 표정/손/헤어 등 디테일 파트 품질을 안정화하는 라인 작업",
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Studio Motion Lab",
    role: "2D Anime Animator (Key / In-between)",
    period: "2024/03 - 2026/05",
    description: "TV/WEB 2D 애니메이션 컷 제작에서 원화·동화·리테이크 대응을 중심으로 작업했습니다.",
    bulletPoints: [
      "레이아웃과 포즈 설계로 컷의 의도(연기/시선/무게감)를 명확히 정리",
      "spacing 조정과 라인 컨트롤로 동작의 연결감을 안정화(동화/브레이크다운 포함)",
      "작감 수정/리테이크를 컷 단위로 빠르게 반영하고 모델을 유지",
    ],
    techStack: ["Spine", "Animate", "After Effects", "Photoshop"],
  },
  {
    id: "exp-2",
    company: "Pixel Dream Studio",
    role: "2D Anime Animator (In-between)",
    period: "2022/01 - 2024/02",
    description: "시리즈 컷 제작에서 동화/클린업을 중심으로 모델 유지와 연기 흐름을 보강했습니다.",
    bulletPoints: [
      "원화 의도를 해치지 않도록 타이밍/spacing을 정리해 동작의 설득력을 강화",
      "클린업/선 정리로 모델/볼륨을 유지하고 파트별 작화 톤을 통일",
      "컷 단위 체크리스트(머리/손/표정/헤어)로 리테이크율을 낮춤",
    ],
    techStack: ["Animate CC", "PaintTool SAI", "Toon Boom Harmony", "Premiere Pro"],
  },
  {
    id: "exp-3",
    company: "Creative Frame",
    role: "Animation Production Assistant",
    period: "2020/06 - 2021/12",
    description: "제작 보조로서 레퍼런스 정리, 소스 관리, 컷 검수 보조 등 파이프라인 운영을 지원했습니다.",
    bulletPoints: [
      "컷/씬 단위 파일 네이밍·버전 관리로 작업 누락과 커뮤니케이션 비용을 절감",
      "레퍼런스/모델시트 정리로 작화 통일감 확보에 기여",
      "제작 진행표 업데이트 및 피드백 취합으로 리테이크 사이클을 단축",
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
