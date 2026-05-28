## 프로젝트 개요

2D 일본 애니메이터(원화/동화) 컨셉의 포트폴리오 웹사이트입니다.  
Vite + React + TypeScript 기반이며, 주요 문구/경력/스킬 데이터는 `src/data.ts`에 정리되어 있습니다.

## 로컬 실행 방법 (Windows / PowerShell)

- **필수**: Node.js (LTS 권장)

```powershell
cd "C:\Users\green\Desktop\project-simin\portfolio-test-260526"
npm install
npm run dev
```

브라우저에서 `http://localhost:3000/` 로 접속하세요.

## 이번 수정 내역 (2026-05-28)

- **기능/콘텐츠 변경**
  - 히어로 섹션 카피를 **2D 일본 애니메이터(원화/동화) 기준**으로 개편
  - 프로필 소개(`profileText`)를 **원화(原画)·동화(動画)·레이아웃·acting·타이밍·spacing·리테이크 대응** 중심으로 재작성
  - 스킬 항목을 **`Key Animation (原画)` / `In-between (動画)` / `Cleanup & Line Art`**로 정리
  - 컨택트 섹션의 안내/placeholder 문구를 **시리즈 제작 협업/작감 수정 대응** 톤으로 변경

- **버그 수정**
  - 이름 표기 오타: **`HONG EUNYOUNG` → `HONG EUNYEONG`** (히어로/푸터)

- **변경된 파일(영향 범위)**
  - `src/components/Hero.tsx`
  - `src/components/Profile.tsx`
  - `src/components/Skills.tsx`
  - `src/components/Footer.tsx`
  - `src/data.ts`
  - `README.md`
