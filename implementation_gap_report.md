# development_plan.md 대비 구현 갭 분석 및 조치 내역

작성일: 2026-06-09

`development_plan.md`를 UTF-8로 전체 재판독한 뒤 현재 구현과 대조했다. 결정이 필요한 항목은 Sanity 기반 CMS를 최종 선택안으로 확정하고, Marlin의 작품이 먼저 보이는 조용한 공예 아카이브 방향으로 정리했다.

## 1. CMS/관리자 기능 갭

발견한 괴리:

- `/admin`은 있었지만 Sanity 선택 사유, 인증 방식, 이미지 저장 방식, 운영 방식이 코드와 문서에서 충분히 명확하지 않았다.
- `siteSettings` 스키마는 있었지만 공개 사이트가 Sanity site settings를 실제로 읽지 않았다.
- 관리자 입력 필드가 계획서의 `collection`, 상세 이미지 alt, 미래 링크 구조, 이미지 순서 변경/검증 요구를 충분히 표현하지 못했다.
- Site Settings가 여러 문서로 생성될 수 있어 운영자가 혼동할 수 있었다.

조치:

- Sanity Studio를 최종 CMS 선택안으로 확정했다.
- 공개 사이트가 Sanity site settings를 읽고, 실패하거나 미설정이면 기본 설정으로 fallback하도록 구현했다.
- `artistName`, `description`, `contactEmail`, `heroImage`, `profileImage`, 미래 링크 구조를 Site Settings에서 관리할 수 있게 했다.
- 작품 스키마에 `collection`, 상세 이미지 필수 검증, 이미지별 alt, 미래 artwork links, 숨김 future price/process image 필드를 추가했다.
- Sanity Studio 구조를 `Artworks`와 singleton `Site Settings`로 정리했다.
- 관리자 로그인/계정/권한은 Sanity 인증으로 처리하고, 민감 정보는 repository에 저장하지 않는 방식으로 문서화했다.

## 2. 공개 갤러리/상세 화면 갭

발견한 괴리:

- 카테고리 표기가 계획서의 `Macramé`와 달리 `Macrame`로 노출됐다.
- 작품 상세 페이지와 모달이 CMS contact email을 직접 반영하지 못했다.
- 상태별 문의 버튼 문구 정책이 모두 `Contact by Email`로 단일화되어 있었다.
- 상세 정보에서 `Collection` 표시가 빠져 있었다.

조치:

- 내부 데이터 값은 호환성을 위해 `Macrame`로 유지하고, 공개 라벨은 `Macramé`로 분리했다.
- `GalleryExperience`, `ArtworkModal`, `ArtworkDetail`, `SiteLayout`이 site settings의 연락처와 작가명을 받도록 변경했다.
- 판매 상태별 문의 문구를 적용했다.
- `Collection` 필드를 상세 모달과 상세 페이지에 표시하도록 추가했다.

## 3. SEO/공유 메타데이터 갭

발견한 괴리:

- 기본 meta/OG/Twitter/canonical은 있었지만 계획서가 명시한 `robots.txt`와 `sitemap.xml`이 없었다.
- 관리자 경로 검색엔진 비노출 정책이 문서와 robots 산출물에 충분히 연결되어 있지 않았다.

조치:

- `src/pages/robots.txt.ts`를 추가해 `/admin`을 disallow하고 sitemap 위치를 제공했다.
- `src/pages/sitemap.xml.ts`를 추가해 홈과 공개 작품 상세 URL을 빌드 시 생성하도록 했다.
- `/admin`의 `noindex,nofollow` 메타와 운영 문서 설명을 보강했다.

## 4. 접근성/모바일 UX 갭

발견한 괴리:

- 모달은 ESC 닫기를 지원했지만 focus trap과 이전 포커스 복원이 없었다.
- 이미지 슬라이더에 명시적 loading 상태와 빈 이미지 방어가 없었다.
- 모바일 필터는 wrap 형태였으나 좁은 화면에서 터치 스크롤 안정성이 더 필요했다.

조치:

- 모달 focus trap, 이전 포커스 복원, reduced motion 대응을 추가했다.
- 슬라이더 loading 상태와 빈 이미지 fallback을 추가했다.
- 모바일 필터를 nowrap horizontal chip 패턴으로 정리했다.
- 작품 카드에 접근성 라벨을 추가했다.

## 5. 성능/이미지 전략 갭

발견한 괴리:

- Sanity 이미지가 대표/상세 용도 구분 없이 동일 폭으로 생성됐다.
- 운영자가 이미지 최적화 기준을 문서만 보고 따르기 어려웠다.

조치:

- Sanity 대표 이미지는 카드용 900px, 상세 이미지는 1800px 기준으로 생성하도록 분리했다.
- README와 `OPERATIONS.md`에 cover/detail 권장 크기, WebP, 원본 보관, alt 입력 가이드를 추가했다.

## 6. 문서 산출물 갭

발견한 괴리:

- README는 로컬 실행과 간단한 CMS 설명만 있었고, 계획서가 요구한 운영 가이드 수준에는 부족했다.
- 관리자 로그인, 작품 등록/수정/삭제, 이미지 업로드, 상태 변경, 카테고리 변경, 이메일 변경, 수익화 링크 활성화, 도메인 연결, 장애 대응 절차가 부족했다.
- CMS 선택 사유, 인증 방식, 이미지 저장 방식, 콘텐츠 반영 방식, 무료 한도/외부 서비스 의존성 설명이 부족했다.

조치:

- README를 스택 결정, 환경변수, CMS 모델, SEO, 배포 요약 중심으로 재작성했다.
- `OPERATIONS.md`를 추가해 운영자가 문서만 보고 주요 작업을 수행할 수 있게 했다.
- 이 파일에 갭 분석과 조치 내역을 남겼다.

## 7. 보안/의존성 갭

발견한 괴리:

- 관리자 운영에 필요 없는 Sanity Vision dependency가 포함되어 있었다.
- 초기 audit에서 Astro 및 Sanity 전이 의존성 관련 moderate 취약점이 보고됐다.

조치:

- Sanity Vision을 제거했다.
- Astro 6, `@astrojs/react` 최신, Sanity 5, `@sanity/client` 최신, `@sanity/image-url` 최신으로 업데이트했다.
- Astro 6와 호환되지 않는 `@astrojs/tailwind` integration을 제거하고 Tailwind 처리는 PostCSS 설정으로 유지했다.
- `uuid`와 `js-yaml` 전이 의존성은 patched version override로 고정했다.
- 최종 `npm audit --omit=dev` 기준 0 vulnerabilities 상태로 확인했다.

## 8. 확정한 제품/예술 방향

- 사이트는 쇼핑몰이 아니라 조용한 공예 아카이브로 유지한다.
- CTA는 강한 구매 유도가 아니라 작품 문의 중심으로 둔다.
- 수익화 링크는 데이터 구조만 유지하고 MVP 화면에는 노출하지 않는다.
- Sanity는 MVP의 관리자 기능을 담당하고, 복잡한 custom admin은 만들지 않는다.
- 실제 작품 이미지가 오기 전까지 샘플 30개로 검수 가능한 완성 상태를 유지한다.

## 9. 외부 의존성으로 남는 항목

다음 항목은 repository 코드만으로 완료할 수 없고 실제 계정/서비스 설정이 필요하다.

- Sanity 프로젝트 생성 및 관리자 계정 초대
- Cloudflare Pages 프로젝트 연결 및 production/preview URL 생성
- Cloudflare Pages 환경변수 입력
- custom domain 구매 및 DNS 연결
- 실제 작품 이미지와 최종 문의 이메일 제공
- Lighthouse 점수의 실제 브라우저 측정

코드와 문서는 위 항목을 수행할 수 있도록 준비된 상태로 보강했다.
