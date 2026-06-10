# Marlin 포트폴리오 운영 가이드

이 문서는 Marlin 작가 포트폴리오를 운영할 때 필요한 일상적인 작업 절차를 정리한 가이드입니다.
비밀번호, Sanity 토큰, Cloudflare 토큰, OAuth secret 같은 민감 정보는 이 저장소에 저장하지 마세요.

## 1. 로컬 서버

의존성을 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

Windows PowerShell에서 문제가 생기면 다음 명령을 사용합니다.

```bash
npm.cmd run dev
```

접속 주소:

- 공개 사이트: `http://localhost:4321`
- 관리자 Studio: `http://localhost:4321/admin`

## 2. Sanity 프로젝트 설정

1. Sanity Manage에서 Sanity 프로젝트를 생성합니다.
2. production dataset을 생성하거나 기존 dataset을 선택합니다.
3. 프로젝트 ID와 dataset을 로컬 `.env`와 Cloudflare Pages 환경변수에 추가합니다.
4. Sanity Manage에서 작가 또는 소유자 계정을 초대합니다.
5. 문서 생성, 수정, publish, 삭제가 가능한 역할을 부여합니다.
6. 초대된 Sanity 계정으로 `/admin`에 로그인합니다.

필수 환경변수:

```bash
PUBLIC_SITE_URL=https://marlin-atelier.pages.dev
PUBLIC_SANITY_PROJECT_ID=6kr1a68s
PUBLIC_SANITY_DATASET=production
PUBLIC_CONTACT_EMAIL=hello@example.com
```

배포 프로젝트는 Marlin Atelier Sanity project를 기본값으로 사용합니다. Sanity에 공개된 작품이 없거나 Sanity fetch가 실패하면 공개 사이트는 샘플 데이터를 사용합니다.
이 상태에서는 Studio가 실제 콘텐츠 관리를 할 준비가 된 것이 아닙니다.

## 3. 관리자 로그인

1. `/admin`에 접속합니다.
2. 설정된 Sanity 프로젝트에 접근 권한이 있는 Sanity 계정으로 로그인합니다.
3. 포트폴리오 콘텐츠는 `Artworks`, 사이트 공통 문구와 이메일은 `Site Settings`에서 관리합니다.

이 저장소에는 관리자 비밀번호가 포함되어 있지 않습니다.
로그인과 계정 보안은 Sanity가 처리합니다.

## 4. 작품 추가

1. `/admin`을 엽니다.
2. `Artworks`를 선택합니다.
3. 새 artwork 문서를 생성합니다.
4. 필수 필드를 입력합니다.
   - Title
   - Slug
   - Category
   - Sale Status
   - Description
   - Cover Image
   - Detail Images
   - Alt Text
5. 가능한 경우 선택 필드도 입력합니다.
   - Year
   - Materials
   - Size
   - Collection
   - Featured
   - Order
   - Internal Notes
6. 공개 준비가 끝나면 `Published`를 `true`로 설정합니다.
7. 문서를 publish합니다.

Slug는 title을 기준으로 자동 생성되지만, publish 전에 직접 수정할 수 있습니다.

## 5. 작품 수정

1. `/admin -> Artworks`를 엽니다.
2. 수정할 작품을 선택합니다.
3. 텍스트, 카테고리, 판매 상태, 이미지, 공개 여부, 정렬 순서 등을 변경합니다.
4. 변경사항을 publish합니다.
5. 다음 build 또는 콘텐츠 refresh 이후 공개 사이트에 반영되었는지 확인합니다.

사이트는 `Featured`, `Order`, 최신 생성일 순서로 작품을 정렬합니다.

## 6. 작품 삭제 또는 비공개 처리

나중에 다시 공개할 가능성이 있는 작품은 삭제보다 비공개 처리를 권장합니다.

1. 작품 문서를 엽니다.
2. `Published`를 `false`로 설정합니다.
3. Publish합니다.

Sanity에서 레코드를 완전히 제거해야 할 때만 삭제를 사용합니다.

1. 작품 문서를 엽니다.
2. Sanity의 delete action을 사용합니다.
3. 삭제 확인 prompt를 승인합니다.

Sanity 문서 기록과 백업은 프로젝트 플랜과 보존 정책에 따라 달라집니다.
일반 운영에서는 삭제보다 비공개 처리가 더 안전합니다.

## 7. 이미지 업로드 및 순서 변경

Cover image:

1. `Cover Image`에 세로형 이미지 1장을 업로드합니다.
2. 가능하면 4:5 crop을 사용합니다.
3. 이미지 alt text를 추가합니다.

Detail images:

1. `Detail Images`에 이미지를 1장 이상 업로드합니다.
2. 배열 안의 이미지를 드래그해서 표시 순서를 변경합니다.
3. 각 이미지에 alt text를 추가합니다.
4. 더 이상 표시하지 않을 이미지는 배열에서 제거합니다.

권장 production 파일:

- Cover: 800px x 1000px WebP
- Detail: 긴 변 1600px ~ 2000px WebP
- 압축되지 않은 원본 이미지를 공개 사이트 workflow에 직접 업로드하지 마세요.

## 8. 판매 상태 변경

작품을 열고 `Sale Status`를 변경합니다.

- `Available`: 공개 badge는 `Available`, 버튼 문구는 `Inquire about this work`
- `Reserved`: 공개 badge는 `Reserved`, 버튼 문구는 `Inquire about this work`
- `Sold`: 공개 badge는 `Sold`, 버튼 문구는 `Ask about similar works`
- `Not for Sale`: 공개 badge는 `Not for Sale`, 버튼 문구는 `Contact Marlin`
- `Archive`: 공개 badge는 `Archive`, 버튼 문구는 `Ask about this archive work`

MVP에서는 가격을 화면에 표시하지 않습니다.

## 9. 카테고리 변경

작품을 열고 카테고리 하나를 선택합니다.

- Temari
- Macramé
- Tatting
- Knitting
- Painting

공개 필터는 publish된 작품의 category 값을 기준으로 업데이트됩니다.

## 10. 문의 이메일 변경

Sanity가 연결된 사이트:

1. `/admin -> Site Settings`를 엽니다.
2. `Contact Email`을 변경합니다.
3. Publish합니다.
4. 배포 workflow에 따라 사이트를 rebuild하거나 refresh합니다.

로컬 fallback:

1. `.env`의 `PUBLIC_CONTACT_EMAIL`을 변경합니다.
2. 개발 서버를 재시작합니다.

## 11. 향후 링크

향후 링크는 데이터 모델에 포함되어 있지만 MVP 공개 UI에서는 숨겨져 있습니다.

링크를 준비하는 방법:

1. `/admin -> Site Settings`를 엽니다.
2. Instagram, Patreon, shop, Etsy, newsletter, commission URL을 추가합니다.
3. 향후 UI 지원을 의도적으로 활성화하기 전까지 `Visible`은 꺼둡니다.

나중에 공개 화면에 노출하려면 `url`과 `visible`을 모두 확인하는 UI 렌더링을 추가하세요.

## 12. Cloudflare Pages 배포

Cloudflare Pages 설정:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Environment variables: `NODE_VERSION=22.12.0` or newer, `PUBLIC_SITE_URL`,
  `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_CONTACT_EMAIL`

배포 방식:

- Production 배포는 `main`에 push합니다.
- Pull request 또는 branch preview deployment를 활성화합니다.
- Sanity 콘텐츠 변경 시 자동 rebuild가 필요하면 Sanity webhook이 Cloudflare Pages deploy hook을 호출하도록 설정합니다.

## 13. 커스텀 도메인

1. Cloudflare Pages에 custom domain을 추가합니다.
2. CNAME 또는 apex record에 대한 Cloudflare DNS 안내를 따릅니다.
3. `PUBLIC_SITE_URL`을 최종 `https://` 도메인으로 변경합니다.
4. 사이트를 다시 배포합니다.
5. canonical URL, 작품 문의 링크, sitemap, robots 출력이 올바른지 확인합니다.

도메인 구매와 DNS 계정 소유권은 이 저장소의 범위 밖입니다.

## 14. 빌드 및 QA

다음 명령을 실행합니다.

```bash
npm run check
npm run build
```

공개 사이트 QA 체크리스트:

- Home에 작가명과 영어 소개문이 표시된다.
- 샘플 또는 Sanity 작품 30개가 표시된다.
- 카드 비율이 4:5로 유지된다.
- 필터가 페이지 reload 없이 동작한다.
- 상세 모달은 버튼, backdrop, Escape 키로 열고 닫을 수 있다.
- 슬라이더 화살표, keyboard navigation, touch swipe가 동작한다.
- 상세 route가 `/artworks/[slug]` 아래에 존재한다.
- 이메일 링크가 subject와 body를 포함해 열린다.
- `/404`, `/robots.txt`, `/sitemap.xml`이 존재한다.
- 수익화 링크가 화면에 노출되지 않는다.

관리자 QA 체크리스트:

- Sanity 프로젝트가 설정된 상태에서 `/admin`이 로드된다.
- 권한이 있는 사용자가 로그인할 수 있다.
- 작품 생성, 수정, 삭제, publish/unpublish, 이미지 업로드, 이미지 미리보기, 이미지 순서,
  카테고리, 상태, 정렬 필드를 사용할 수 있다.
- Site Settings에서 문의 이메일과 공통 문구를 수정할 수 있다.

## 15. 문제 해결

Build 실패:

- 로컬에서 `npm run check`를 실행합니다.
- Cloudflare Pages에 필수 환경변수가 있는지 확인합니다.
- Sanity project ID와 dataset이 올바른지 확인합니다.
- Sanity를 사용할 수 없으면 공개 사이트는 샘플 데이터로 fallback되어야 합니다.

관리자 로그인이 안 됨:

- `PUBLIC_SANITY_PROJECT_ID`가 Marlin Atelier Sanity project를 가리키는지 확인합니다.
- 사용자가 Sanity 프로젝트에 초대되었는지 확인합니다.
- dataset이 존재하는지 확인합니다.
- 최신 Chrome 또는 Safari 브라우저에서 다시 시도합니다.

이미지가 보이지 않음:

- cover image가 업로드되어 있는지 확인합니다.
- 작품이 publish되어 있는지 확인합니다.
- Sanity asset 권한과 dataset이 올바른지 확인합니다.
- draft에서 image field가 제거되지 않았는지 확인합니다.

공개 콘텐츠가 업데이트되지 않음:

- Sanity 문서가 draft 저장만 된 것이 아니라 publish되었는지 확인합니다.
- 사이트가 정적 build output을 사용 중이면 Cloudflare Pages rebuild를 실행합니다.
- `PUBLIC_SITE_URL`이 현재 production domain을 가리키는지 확인합니다.

예상치 못한 공개 링크가 보임:

- `Site Settings -> Future External Links`를 확인합니다.
- MVP 기간에는 모든 수익화 링크의 `Visible`을 꺼둡니다.
