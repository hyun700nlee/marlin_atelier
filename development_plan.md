# Marlin Artist Portfolio Website Development Plan

## 외주 개발계획서 / RFP / 기능명세서

문서 버전: v1.0
프로젝트명: **Marlin Artist Portfolio Website**
사이트 기본 언어: **English**
대상 사용자: 작가 Marlin의 작품을 감상하거나 문의하려는 방문자, 그리고 작품을 직접 관리할 작가/관리자
작성 목적: 예술가 Marlin의 작품을 모바일 중심으로 전시하고, 작품 아카이브·작가 브랜딩·판매 가능 여부 표시·이메일 문의 유도·관리자 콘텐츠 관리 기능을 포함한 포트폴리오 홈페이지를 개발하기 위한 외주 개발 요청서

---

# 1. 프로젝트 개요

본 프로젝트는 예술가 **Marlin**의 작품을 전시하기 위한 모바일 최적화 포트폴리오 홈페이지를 개발하는 것이다.

사이트는 Instagram과 유사한 이미지 중심의 직관적인 갤러리 경험을 제공하되, 단순한 SNS 피드 복제가 아니라 **작가의 공식 작품 아카이브이자 브랜딩 공간**으로 기능해야 한다.

초기 등록 작품 수는 약 **30개**이며, 주요 작품 분야는 다음과 같다.

* Temari
* Macramé
* Tatting
* Knitting
* Painting

사이트의 기본 언어는 **영어**로 한다.

디자인 톤은 **Japanese craft-inspired aesthetic**, 즉 일본 공예풍의 차분하고 정갈한 분위기를 지향한다. 대표 색상은 **blue hydrangea**, 즉 푸른 수국이 가진 여러 색상에서 파생된 청색, 회청색, 보라색, 연보라색, 연녹색, 아이보리 계열을 사용한다.

수익화 링크는 향후 Patreon, online shop, external marketplace 등으로 확장 가능하도록 데이터 구조와 UI 슬롯만 준비한다. 단, MVP 단계에서는 실제 화면에 노출하지 않는다.

문의 방식은 이메일을 기본으로 한다. 작품 상세 화면과 메인 화면에 이메일 문의 버튼을 제공한다.

또한 MVP 단계부터 **관리자 페이지(Admin)** 또는 이에 준하는 CMS 기반 관리 화면을 제공하여, 작가가 직접 작품 이미지와 텍스트를 등록·수정·삭제할 수 있어야 한다.

---

# 2. 프로젝트 목표

## 2.1 핵심 목표

본 프로젝트의 핵심 목표는 다음과 같다.

1. Marlin의 작품을 감각적이고 정돈된 방식으로 전시한다.
2. 모바일에서 빠르고 자연스러운 탐색 경험을 제공한다.
3. 작품별 대표 이미지, 상세 이미지, 설명, 카테고리, 재료, 크기, 제작 연도, 판매 여부를 표시한다.
4. 작품 클릭 시 상세 팝업 또는 상세 페이지에서 여러 이미지를 넘겨볼 수 있게 한다.
5. 방문자가 관심 작품에 대해 이메일로 문의할 수 있도록 한다.
6. 작가가 관리자 화면에서 작품 콘텐츠를 직접 관리할 수 있도록 한다.
7. 수익화 링크는 향후 확장 가능하도록 구조만 준비하고 MVP에서는 비노출한다.
8. 무료 또는 저비용 호스팅 환경에서 운영 가능하도록 설계한다.
9. 향후 CMS 고도화, 다국어, 판매 기능, 외부 마켓 연동, Patreon 노출 등을 단계적으로 확장할 수 있도록 한다.

## 2.2 MVP 포함 범위

MVP에 포함되는 기능은 다음과 같다.

* 영어 기반 메인 페이지
* 모바일 최적화 작품 갤러리
* 4:5 비율 작품 카드
* 작품 카테고리 필터
* 작품 상세 모달 또는 상세 페이지
* 상세 이미지 슬라이더
* 작품별 판매 상태 표시
* 작가 소개 영역
* 이메일 문의 버튼
* 관리자 로그인
* 작품 등록
* 작품 수정
* 작품 삭제
* 대표 이미지 업로드
* 상세 이미지 업로드
* 판매 상태 변경
* 카테고리 변경
* SEO 기본 설정
* Cloudflare Pages 또는 동급 정적 호스팅 배포
* GitHub 저장소 인수인계
* 운영 가이드 문서 제공

## 2.3 MVP 제외 범위

다음 기능은 1차 개발 범위에서 제외한다.

* 일반 방문자 회원가입
* 일반 방문자 로그인
* 댓글 기능
* 좋아요 기능
* 팔로우 기능
* 직접 결제 기능
* 장바구니
* 주문 관리
* 재고 관리
* 실시간 채팅
* 자체 후원 시스템
* 커뮤니티 기능
* 복잡한 검색 기능
* 블로그 기능
* 다국어 지원
* 뉴스레터 발송 시스템
* 작가 외 다중 계정 관리
* 복잡한 권한 관리

단, 향후 확장을 고려하여 데이터 구조와 라우팅 구조는 확장 가능하게 설계한다.

---

# 3. 권장 기술 스택

## 3.1 기본 권장 구조

본 프로젝트는 다음 구조를 기본 권장안으로 한다.

* Frontend Framework: **Astro**
* Interactive Components: **React + TypeScript**
* Styling: **Tailwind CSS**
* Content Management: **Headless CMS 또는 Git-based CMS**
* Recommended CMS Option: **Sanity CMS, Decap CMS, TinaCMS 중 개발팀 제안**
* Hosting: **Cloudflare Pages**
* Version Control: **GitHub**
* Image Format: **WebP 우선, 필요 시 AVIF/JPG 병행**
* Deployment: GitHub main branch push 기반 자동 배포
* Admin Route: `/admin` 또는 CMS Studio 별도 경로

## 3.2 기술 선택 기준

기술 스택은 다음 조건을 만족해야 한다.

1. 모바일 이미지 갤러리 사이트에 적합할 것
2. 초기 운영 비용이 무료 또는 매우 낮을 것
3. 작가가 GitHub를 직접 사용하지 않아도 작품을 관리할 수 있을 것
4. 작품 이미지 업로드와 텍스트 수정이 쉬울 것
5. SEO에 불리하지 않을 것
6. 페이지 로딩 속도가 빠를 것
7. 소스코드 인수인계가 가능할 것
8. 특정 외주업체에 과도하게 종속되지 않을 것
9. 추후 판매 기능, 다국어 기능, 외부 링크 노출을 확장할 수 있을 것

## 3.3 CMS 구현 방향

관리자 기능은 반드시 MVP에 포함한다.

개발팀은 다음 중 하나를 제안하고, 장단점을 명시해야 한다.

### Option A. Sanity CMS 기반

Sanity Studio를 관리자 화면으로 사용한다.
작품 데이터와 이미지를 Sanity에서 관리하고, 프론트엔드는 Astro에서 Sanity API를 통해 데이터를 받아 정적 또는 반정적 방식으로 렌더링한다.

장점:

* 작가가 웹 화면에서 직접 작품 관리 가능
* 이미지 업로드 관리가 편리함
* 구조화된 콘텐츠 관리에 적합
* 향후 확장성이 좋음

주의점:

* 외부 CMS 서비스 의존성이 있음
* 무료 플랜 한도 및 정책은 계약 전 확인 필요

### Option B. Decap CMS 또는 TinaCMS 기반 Git CMS

관리자 화면에서 콘텐츠를 수정하면 GitHub repository에 Markdown, MDX, JSON, YAML 등의 파일로 저장된다.

장점:

* Git 기반 버전 관리가 명확함
* 정적 사이트와 잘 맞음
* 콘텐츠 파일 인수인계가 쉬움

주의점:

* 인증 설정이 다소 복잡할 수 있음
* Cloudflare Pages와 함께 사용할 경우 인증/OAuth 구성을 명확히 설계해야 함
* 이미지 업로드 UX는 CMS 구성에 따라 품질 차이가 있음

### Option C. Custom Admin + Supabase/Firebase

별도 관리자 화면을 만들고, 작품 데이터와 이미지를 Supabase 또는 Firebase에 저장한다.

장점:

* 관리자 UX를 자유롭게 설계 가능
* 동적 기능 확장에 유리함

주의점:

* MVP에는 과할 수 있음
* 데이터베이스와 스토리지 운영 관리가 필요함
* 무료 한도 초과 시 비용 발생 가능
* 정적 사이트보다 구조가 복잡함

## 3.4 기본 추천

본 프로젝트의 규모와 목적을 고려할 때 기본 추천은 다음과 같다.

* Frontend: **Astro + React + TypeScript + Tailwind CSS**
* CMS: **Sanity CMS 또는 TinaCMS/Decap CMS**
* Hosting: **Cloudflare Pages**
* Repository: **GitHub**
* Image handling: CMS asset storage 또는 최적화된 WebP 이미지 저장소

개발팀은 최종 제안서에서 CMS 선택 사유, 인증 방식, 이미지 업로드 방식, 무료 운영 가능 범위, 향후 비용 발생 가능성을 반드시 설명해야 한다.

---

# 4. 사이트 정보 구조

## 4.1 전체 페이지 구성

MVP 사이트는 다음 화면으로 구성한다.

1. **Home / Gallery Page**

   * 작가 소개
   * 작품 갤러리
   * 카테고리 필터
   * 이메일 문의 버튼
   * footer

2. **Artwork Detail Page**

   * 작품별 고유 URL
   * 예: `/artworks/blue-temari-no-01`
   * 작품 상세 정보 표시
   * 상세 이미지 슬라이더
   * 이메일 문의 버튼
   * SEO 메타데이터 적용

3. **Artwork Detail Modal**

   * 메인 갤러리에서 작품 클릭 시 팝업 형태로 표시
   * 모바일에서는 full-screen modal 또는 bottom sheet 형태 권장
   * 데스크톱에서는 centered modal 권장

4. **Admin Page / CMS Studio**

   * 관리자 로그인
   * 작품 목록 조회
   * 작품 등록
   * 작품 수정
   * 작품 삭제
   * 이미지 업로드
   * 판매 상태 관리

5. **404 Page**

   * 존재하지 않는 URL 접근 시 표시
   * 사이트 톤에 맞는 간단한 안내 문구 제공

## 4.2 내비게이션 구조

상단 내비게이션은 단순하게 유지한다.

권장 메뉴:

* Marlin
* Works
* About
* Contact

관리자 페이지는 일반 방문자에게 상단 메뉴로 노출하지 않는다.
관리자 경로는 `/admin` 또는 CMS가 제공하는 별도 경로로 접근한다.

## 4.3 URL 구조

권장 URL 구조는 다음과 같다.

* `/`
  메인 갤러리 페이지

* `/artworks/[slug]`
  작품 상세 페이지

* `/admin`
  관리자 또는 CMS 관리 화면

* `/404`
  Not found 페이지

카테고리별 별도 페이지는 MVP에서 필수는 아니다.
메인 페이지 내 필터 방식으로 구현하되, 향후 `/category/temari` 같은 URL 확장을 고려할 수 있다.

---

# 5. 메인 화면 UX 요구사항

## 5.1 메인 화면의 역할

메인 화면은 사이트의 핵심 진입점이다. 방문자는 메인 화면에서 다음을 즉시 이해할 수 있어야 한다.

* 이 사이트가 Marlin의 작품 공간이라는 점
* 어떤 종류의 작품을 다루는지
* 작품을 어떻게 탐색할 수 있는지
* 관심 작품에 대해 어떻게 문의할 수 있는지

## 5.2 Hero / Profile 영역

메인 상단에는 작가명과 짧은 소개문을 표시한다.

필수 구성 요소:

* 작가명: **Marlin**
* 짧은 소개 문장
* 작가 프로필 이미지 또는 대표 작품 이미지
* 이메일 문의 버튼
* 차분한 여백과 공예적 분위기

예시 문구:

> Marlin is an artist exploring handcraft, pattern, texture, and quiet repetition through Temari, macramé, tatting, knitting, and painting.

이 문구는 placeholder로 사용 가능하며, 최종 문구는 발주자가 교체할 수 있어야 한다.

## 5.3 링크 영역

MVP에서 화면에 노출되는 링크는 이메일 문의 버튼만 사용한다.

노출 버튼:

* Contact by Email

향후 확장을 위해 다음 링크 구조는 데이터에 포함할 수 있다.

* Instagram
* Patreon
* Online Shop
* Etsy
* Newsletter
* Commission Request

단, MVP 단계에서는 수익화 링크와 외부 SNS 링크를 비노출 처리한다.
개발팀은 설정값 또는 CMS 필드에서 `visible: false` 상태로 관리할 수 있게 구현한다.

## 5.4 작품 카테고리 필터

메인 갤러리 상단 또는 Hero 하단에 카테고리 필터를 제공한다.

기본 카테고리:

* All
* Temari
* Macramé
* Tatting
* Knitting
* Painting

필터 선택 시 페이지 전체 새로고침 없이 작품 목록이 변경되어야 한다.
필터 UI는 모바일에서 터치하기 쉬워야 하며, 가로 스크롤 chip 형태 또는 wrap 형태를 사용할 수 있다.

## 5.5 작품 그리드

작품은 이미지 중심의 타일 그리드로 표시한다.

각 작품 카드는 다음 요소를 포함한다.

* 4:5 비율 대표 이미지
* 작품명
* 카테고리
* 판매 상태

모바일에서는 이미지 감상이 우선이므로 텍스트 정보는 과하게 크게 표시하지 않는다.
판매 상태는 작은 badge 형태로 표시한다.

## 5.6 메인 화면 하단

메인 하단에는 간단한 About/Contact 정보를 제공한다.

권장 구성:

* 짧은 작가 소개
* 이메일 문의 문구
* copyright
* 관리자 페이지 링크는 노출하지 않음

Footer 예시:

> For inquiries about works, commissions, or availability, please contact Marlin by email.

---

# 6. 작품 갤러리 요구사항

## 6.1 초기 작품 수

초기 등록 작품 수는 **30개**이다.

개발팀은 실제 콘텐츠가 모두 준비되지 않은 상태에서도 샘플 데이터를 사용해 30개 작품이 등록된 상태를 구현해야 한다.

실제 콘텐츠가 제공되면 다음 항목을 각 작품에 반영한다.

* 작품명
* 카테고리
* 대표 이미지
* 상세 이미지
* 설명
* 판매 상태
* 재료
* 크기
* 제작 연도

## 6.2 카드 이미지 비율

모든 작품 카드의 대표 이미지는 **4:5 비율**로 표시한다.

요구사항:

* CSS aspect-ratio: 4 / 5 적용
* object-fit: cover 적용
* 원본 이미지 비율이 달라도 카드 레이아웃이 깨지지 않아야 함
* 이미지 로딩 전에도 카드 영역이 유지되어 layout shift가 발생하지 않아야 함
* 이미지 중심부가 과도하게 잘리지 않도록 업로드 가이드 제공

## 6.3 반응형 그리드

권장 반응형 기준은 다음과 같다.

* Small mobile: 2 columns
* Large mobile: 2 columns
* Tablet: 3 columns
* Desktop: 4 columns
* Wide desktop: 4 columns 유지 또는 최대 폭 제한

데스크톱에서 지나치게 넓은 화면에 작품이 과도하게 퍼지지 않도록 전체 content max-width를 설정한다.

권장 max-width:

* 1120px ~ 1280px 범위

## 6.4 카드 인터랙션

작품 카드를 터치 또는 클릭하면 작품 상세 화면이 열린다.

모바일:

* full-screen modal 또는 bottom sheet
* 스와이프 이미지 탐색
* 명확한 닫기 버튼

데스크톱:

* centered modal
* 배경 dim 처리
* ESC 키로 닫기
* 바깥 영역 클릭으로 닫기 가능

## 6.5 정렬 기준

기본 정렬은 CMS 또는 데이터의 `order` 필드 기준으로 한다.

권장 필드:

* `order`
* `featured`
* `createdAt`

MVP에서는 다음 정렬을 권장한다.

1. featured 작품 우선
2. order 값 오름차순
3. createdAt 최신순

---

# 7. 작품 상세 화면 요구사항

## 7.1 상세 화면의 목적

작품 상세 화면은 작품을 더 깊게 감상하고, 필요 시 문의로 이어지게 하는 역할을 한다.

방문자는 상세 화면에서 다음 정보를 확인할 수 있어야 한다.

* 작품 전체 이미지
* 디테일 이미지
* 작품명
* 카테고리
* 판매 상태
* 재료
* 크기
* 제작 연도
* 짧은 설명
* 이메일 문의 버튼

## 7.2 상세 이미지 슬라이더

상세 화면에는 여러 장의 이미지를 표시할 수 있는 슬라이더를 구현한다.

필수 요구사항:

* 좌우 스와이프 지원
* 좌우 화살표 버튼 지원
* 현재 이미지 index 표시
* 이미지가 1장뿐인 경우 불필요한 화살표 숨김
* 모바일 터치 제스처 지원
* 데스크톱 keyboard navigation 지원 권장
* 이미지 loading 상태 처리
* 이미지 alt text 적용

권장 UI:

* 상단 또는 중앙에 이미지 표시
* 하단에 작품 정보 표시
* 모바일에서는 이미지가 화면의 대부분을 차지하되, 작품 정보도 스크롤로 접근 가능해야 함

## 7.3 상세 정보 표시 항목

필수 표시 항목:

* Title
* Category
* Status
* Description
* Contact button

권장 표시 항목:

* Year
* Materials
* Size
* Collection
* Notes

영어 표기 예시:

* Title: Blue Temari No. 01
* Category: Temari
* Status: Available
* Year: 2026
* Materials: Cotton thread, core, metallic thread
* Size: 8 cm diameter

## 7.4 작품별 고유 URL

각 작품은 독립 URL을 가져야 한다.

예시:

* `/artworks/blue-temari-no-01`
* `/artworks/lavender-macrame-wall-piece`
* `/artworks/quiet-blue-painting-03`

독립 URL은 다음 목적을 가진다.

* SNS 공유
* 이메일 문의 시 링크 포함
* 검색엔진 노출
* 브라우저 새로고침 대응
* 모달 접근성 보완

## 7.5 모달과 페이지의 관계

메인 갤러리에서 작품을 클릭하면 모달로 상세 내용을 보여준다.
동시에 각 작품은 독립 페이지에서도 접근 가능해야 한다.

구현 방식은 개발팀이 제안할 수 있다.

허용 방식:

* 메인에서 모달 표시, URL은 유지
* 메인에서 모달 표시하며 history state 변경
* 작품 상세 페이지는 별도 route로 제공

최소 요구사항은 작품별 URL이 존재하는 것이다.

---

# 8. 판매 상태 표시

## 8.1 판매 상태 값

작품별 판매 상태는 다음 값을 지원한다.

* `available`
* `sold`
* `reserved`
* `not_for_sale`
* `archive`

## 8.2 화면 표시 문구

영어 사이트 기준 표시 문구는 다음과 같다.

* Available
* Sold
* Reserved
* Not for Sale
* Archive

## 8.3 판매 상태 표시 위치

판매 상태는 다음 위치에 표시한다.

* 작품 카드
* 작품 상세 모달
* 작품 상세 페이지
* 관리자 작품 목록

## 8.4 가격 표시

MVP에서는 가격을 공개 표시하지 않는다.

단, 향후 확장을 위해 데이터 구조에 optional field로 `price`를 둘 수 있다.
가격 필드는 MVP에서는 화면에 노출하지 않는다.

## 8.5 문의와 판매 상태의 관계

작품 상태별 문의 버튼 표시 정책은 다음과 같다.

* Available: 문의 버튼 표시
* Reserved: 문의 버튼 표시 가능
* Sold: 문의 버튼 표시 가능하되 문구 조정 가능
* Not for Sale: 문의 버튼 표시 가능
* Archive: 문의 버튼 표시 가능하되 구매 유도 표현은 사용하지 않음

버튼 문구 예시:

* Available: `Inquire about this work`
* Sold: `Ask about similar works`
* Not for Sale: `Contact Marlin`
* Archive: `Ask about this archive work`

---

# 9. 콘텐츠 데이터 구조

## 9.1 작품 데이터 모델

각 작품은 구조화된 데이터로 관리한다.

필수 필드:

* title
* slug
* category
* status
* coverImage
* images
* description

권장 필드:

* year
* materials
* size
* collection
* featured
* order
* altText
* createdAt
* updatedAt
* published
* links

선택 필드:

* price
* notes
* processImages
* relatedWorks
* instagramUrl
* patreonUrl
* shopUrl

## 9.2 작품 데이터 예시

```yaml
title: "Blue Temari No. 01"
slug: "blue-temari-no-01"
category: "Temari"
year: "2026"
materials: "Cotton thread, core, metallic thread"
size: "8 cm diameter"
status: "available"
published: true
featured: true
order: 1
coverImage: "/images/artworks/blue-temari-no-01/cover.webp"
images:
  - "/images/artworks/blue-temari-no-01/cover.webp"
  - "/images/artworks/blue-temari-no-01/detail-01.webp"
  - "/images/artworks/blue-temari-no-01/detail-02.webp"
altText: "Blue handmade Temari ball with layered blue and lavender geometric thread patterns."
description: "A hand-wrapped Temari work inspired by layered blue hydrangea petals."
links:
  instagram:
    url: ""
    visible: false
  patreon:
    url: ""
    visible: false
  shop:
    url: ""
    visible: false
```

## 9.3 카테고리 데이터

카테고리는 고정값으로 시작한다.

```yaml
categories:
  - label: "Temari"
    value: "temari"
  - label: "Macramé"
    value: "macrame"
  - label: "Tatting"
    value: "tatting"
  - label: "Knitting"
    value: "knitting"
  - label: "Painting"
    value: "painting"
```

관리자 화면에서 카테고리를 선택할 수 있어야 한다.
MVP에서 카테고리 추가 기능은 필수가 아니지만, 코드 구조상 추가가 어렵지 않아야 한다.

## 9.4 데이터 검증

잘못된 콘텐츠 입력으로 사이트가 깨지지 않도록 데이터 검증을 적용한다.

권장 사항:

* TypeScript type 정의
* Zod schema 또는 CMS schema validation
* slug 중복 방지
* 필수 필드 누락 방지
* 이미지 없는 작품 저장 방지 또는 draft 처리
* status 값 enum 제한
* category 값 enum 제한

---

# 10. 관리자 페이지 요구사항

## 10.1 관리자 페이지 목적

관리자 페이지는 작가가 개발자 도움 없이 작품 콘텐츠를 관리하기 위한 화면이다.

관리자는 다음 작업을 수행할 수 있어야 한다.

* 작품 신규 등록
* 기존 작품 수정
* 작품 삭제
* 작품 공개/비공개 설정
* 대표 이미지 업로드
* 상세 이미지 업로드
* 상세 이미지 순서 변경
* 판매 상태 변경
* 카테고리 변경
* 설명 수정
* 작품 정렬 순서 변경

## 10.2 관리자 로그인

관리자 기능은 로그인 후 접근 가능해야 한다.

요구사항:

* 일반 방문자는 관리자 기능에 접근할 수 없어야 함
* `/admin` 경로 접근 시 인증 필요
* 인증 방식은 CMS 선택에 따라 결정
* 관리자 계정 생성 방법을 문서화
* 비밀번호 또는 계정 정보는 repository에 노출하지 않음

## 10.3 작품 목록 화면

관리자 작품 목록에는 다음 정보가 표시되어야 한다.

* 썸네일
* 작품명
* 카테고리
* 판매 상태
* 공개 여부
* 수정 버튼
* 삭제 버튼
* 마지막 수정일

필터 또는 정렬은 필수는 아니지만, 다음 기능을 권장한다.

* 카테고리별 필터
* 판매 상태별 필터
* 공개/비공개 필터
* 검색

## 10.4 작품 등록 화면

작품 등록 화면은 다음 입력 항목을 제공해야 한다.

필수 입력:

* Title
* Slug
* Category
* Status
* Cover image
* Detail images
* Description
* Published

선택 입력:

* Year
* Materials
* Size
* Collection
* Featured
* Order
* Alt text
* Notes
* External links

Slug는 title을 기준으로 자동 생성하되, 관리자가 수정할 수 있어야 한다.

## 10.5 이미지 업로드

이미지 업로드는 관리자 기능의 핵심이다.

필수 요구사항:

* 대표 이미지 1장 업로드 가능
* 상세 이미지 여러 장 업로드 가능
* 업로드 후 미리보기 가능
* 이미지 순서 변경 가능
* 이미지 삭제 가능
* alt text 입력 가능

권장 요구사항:

* drag and drop 업로드
* 업로드 전 용량 안내
* WebP 변환 또는 압축 가이드 제공
* 과도한 대용량 이미지 업로드 방지

## 10.6 작품 삭제

작품 삭제 시 실수 방지를 위해 확인 절차를 제공한다.

요구사항:

* 삭제 전 confirmation 표시
* 삭제 후 복구 가능 여부를 개발팀이 명시
* Git 기반 CMS의 경우 commit history에서 복구 가능함을 안내
* 완전 삭제와 비공개 처리의 차이를 문서화

## 10.7 공개/비공개

각 작품은 공개 여부를 가질 수 있어야 한다.

* `published: true`이면 사이트에 노출
* `published: false`이면 관리자 화면에는 존재하지만 public gallery에는 비노출

초기 입력 중인 작품이나 미완성 작품을 관리하기 위해 필요한 기능이다.

---

# 11. 디자인 방향

## 11.1 디자인 키워드

디자인은 다음 키워드를 기준으로 한다.

* Japanese craft-inspired
* Calm
* Handmade
* Tactile
* Quiet
* Archival
* Minimal
* Organic
* Delicate
* Blue hydrangea
* Soft paper
* Natural light
* Slow craft

## 11.2 지향하는 분위기

사이트는 조용한 공예 갤러리처럼 느껴져야 한다.
방문자는 상업 쇼핑몰에 들어온 느낌이 아니라, 작가의 작업실과 아카이브를 차분히 둘러보는 느낌을 받아야 한다.

작품 이미지가 주인공이어야 하며, UI 요소는 작품 감상을 보조하는 수준이어야 한다.

## 11.3 피해야 할 디자인

다음 방향은 피한다.

* 과도한 일본풍 장식
* 관광 상품 같은 일본 이미지
* 기모노, 후지산, 사쿠라 등 직접적이고 상투적인 일본 상징의 과잉 사용
* 지나치게 화려한 애니메이션
* 강한 쇼핑몰 CTA
* 고채도 원색 사용
* 검은 배경 중심의 무거운 갤러리 톤
* 지나치게 귀여운 폰트
* 작품보다 UI가 더 강하게 보이는 구성
* hover에 의존하는 데스크톱 중심 디자인
* 복잡한 SNS형 기능

## 11.4 색상 팔레트

대표 색상은 푸른 수국에서 파생한다.

권장 색상군:

* Hydrangea Blue
* Pale Blue
* Dusty Blue
* Blue Violet
* Lavender Blue
* Soft Indigo
* Mist Gray
* Leaf Green
* Warm Ivory
* Ink Gray

예시 디자인 토큰:

```css
:root {
  --color-ivory: #F8F5EF;
  --color-paper: #F2EEE6;
  --color-ink: #2F3437;
  --color-muted-ink: #6F7478;

  --color-hydrangea-blue: #6F95C8;
  --color-pale-blue: #B8CAE3;
  --color-dusty-blue: #8EA8C8;
  --color-blue-violet: #7E80B8;
  --color-lavender-blue: #A9A7D8;
  --color-soft-indigo: #4E668E;
  --color-leaf-green: #A8B8A0;

  --color-border: #D9D6CC;
  --color-surface: #FFFFFF;
}
```

색상은 Figma 시안에서 실제 작품 사진과 함께 검토해 최종 조정한다.

## 11.5 타이포그래피

영어 사이트 기준으로 다음 조합을 권장한다.

* Heading: elegant serif or semi-serif
* Body: readable sans-serif
* Caption: small restrained sans-serif

후보 폰트:

* Heading: Cormorant Garamond, Libre Baskerville, Noto Serif
* Body: Inter, Noto Sans, Source Sans 3
* Caption: Inter, Noto Sans

무료 사용 가능한 폰트를 우선 사용한다.
유료 폰트를 사용할 경우 라이선스 확인 후 별도 승인받아야 한다.

## 11.6 레이아웃 원칙

레이아웃 원칙은 다음과 같다.

* 모바일 우선
* 넉넉한 여백
* 얇은 선
* 낮은 대비의 배경
* 작품 이미지 중심
* 텍스트는 짧고 명료하게
* CTA는 강하게 밀어붙이지 않음
* 상세 화면은 감상 경험을 방해하지 않음

---

# 12. 반응형 및 모바일 요구사항

## 12.1 모바일 우선 개발

본 사이트는 모바일 우선으로 개발한다.
모든 주요 기능은 모바일에서 먼저 자연스럽게 동작해야 한다.

우선 지원 환경:

* iPhone SE급 small mobile
* 일반 iPhone
* Android Chrome
* iPad/tablet
* Desktop Chrome/Safari/Edge/Firefox

## 12.2 모바일 UX 요구사항

모바일에서 다음 기준을 만족해야 한다.

* 가로 스크롤이 발생하지 않아야 한다.
* 작품 카드는 손가락으로 누르기 쉬워야 한다.
* 모달 닫기 버튼은 명확해야 한다.
* 이미지 슬라이더는 스와이프로 작동해야 한다.
* 텍스트 크기는 충분히 읽기 쉬워야 한다.
* 카테고리 필터는 터치하기 쉬워야 한다.
* 화면 전환이 과도하게 느리지 않아야 한다.
* 상세 화면에서 뒤로 가기 동작이 혼란스럽지 않아야 한다.
* iOS Safari 하단 주소창 환경에서도 UI가 깨지지 않아야 한다.

## 12.3 데스크톱 UX 요구사항

데스크톱에서는 작품을 더 넓게 감상할 수 있어야 한다.

요구사항:

* 최대 폭 제한
* 4열 그리드 권장
* 상세 모달은 화면 중앙 배치
* 키보드 조작 지원 권장
* 이미지가 과도하게 커져 흐려지지 않도록 처리

---

# 13. SEO 및 공유 메타데이터

## 13.1 기본 SEO

사이트에는 다음 기본 SEO 요소를 적용한다.

* site title
* meta description
* canonical URL
* Open Graph title
* Open Graph description
* Open Graph image
* Twitter card metadata
* sitemap.xml
* robots.txt

## 13.2 사이트 기본 메타데이터 예시

Title:

```text
Marlin | Handcraft, Temari, Macramé, Tatting, Knitting and Painting
```

Description:

```text
Marlin is an artist exploring handcraft, pattern, texture, and quiet repetition through Temari, macramé, tatting, knitting, and painting.
```

## 13.3 작품별 SEO

각 작품 상세 페이지는 개별 메타데이터를 가져야 한다.

예시:

Title:

```text
Blue Temari No. 01 | Marlin
```

Description:

```text
A hand-wrapped Temari work inspired by layered blue hydrangea petals.
```

Open Graph image:

```text
/images/artworks/blue-temari-no-01/cover.webp
```

## 13.4 이미지 alt text

모든 작품 이미지는 alt text를 가질 수 있어야 한다.
관리자 화면에서 alt text를 입력할 수 있거나, 작품명과 카테고리를 기반으로 기본 alt text를 자동 생성해야 한다.

---

# 14. 접근성 요구사항

기본 접근성을 준수한다.

필수 요구사항:

* 모든 주요 버튼은 keyboard focus 가능해야 한다.
* 모달은 ESC 키로 닫을 수 있어야 한다.
* 모달 open 시 focus trap 적용을 권장한다.
* 이미지 alt text를 제공한다.
* 색상 대비를 확보한다.
* hover에만 의존하는 정보 제공을 금지한다.
* 터치 영역은 충분히 크게 구성한다.
* 스크린리더가 주요 구조를 이해할 수 있도록 semantic HTML을 사용한다.
* 버튼, 링크, heading 구조를 의미에 맞게 사용한다.

권장 기준:

* Lighthouse Accessibility 90점 이상
* 주요 페이지 keyboard-only navigation 확인

---

# 15. 성능 요구사항

## 15.1 이미지 최적화

이미지 중심 사이트이므로 이미지 최적화는 필수다.

요구사항:

* 카드 이미지는 4:5 비율로 표시
* WebP 사용 권장
* lazy loading 적용
* responsive image 적용
* 이미지 width/height 또는 aspect-ratio 지정
* layout shift 최소화
* 원본 고해상도 이미지를 그대로 노출하지 않음
* 썸네일과 상세 이미지 사이즈를 구분하는 전략 권장

권장 이미지 가이드:

* Cover image: 800px × 1000px
* Detail image: 긴 변 1600px ~ 2000px
* 파일 형식: WebP
* 원본 이미지는 별도 보관하고 사이트에는 최적화본만 사용

## 15.2 성능 목표

권장 성능 목표:

* Lighthouse Performance: 90점 이상
* Lighthouse Accessibility: 90점 이상
* Lighthouse SEO: 90점 이상
* 모바일 초기 로딩이 자연스러울 것
* 작품 목록 스크롤이 버벅이지 않을 것
* 이미지 로딩 중 레이아웃이 흔들리지 않을 것

## 15.3 애니메이션

애니메이션은 최소한으로 사용한다.

허용 예시:

* 모달 fade/slide
* 이미지 전환
* 버튼 미세한 transition
* 카테고리 필터 선택 transition

금지 또는 지양:

* 과도한 parallax
* 로딩을 지연시키는 인트로 애니메이션
* 작품 감상을 방해하는 장식적 움직임
* 모바일 성능을 떨어뜨리는 무거운 효과

---

# 16. 호스팅 및 배포

## 16.1 기본 호스팅

기본 호스팅은 **Cloudflare Pages**를 권장한다.

요구사항:

* GitHub repository와 연동
* main branch push 시 production 자동 배포
* pull request 또는 branch 기반 preview deployment 가능
* HTTPS 적용
* custom domain 연결 가능
* 빌드 실패 시 원인 확인 가능

## 16.2 관리자 기능과 배포 방식

CMS 선택에 따라 콘텐츠 반영 방식은 달라질 수 있다.

허용 방식:

1. CMS에서 저장 시 사이트가 자동 재빌드되어 반영
2. CMS API를 통해 빌드 시 콘텐츠를 가져와 정적 페이지 생성
3. CMS API를 통해 런타임에서 콘텐츠를 가져오되, 캐싱을 적용

개발팀은 최종 제안서에서 다음을 명시해야 한다.

* 콘텐츠 수정 후 사이트 반영까지 걸리는 방식
* 자동 배포 여부
* 빌드 실패 시 복구 방법
* 이미지가 저장되는 위치
* 무료 한도 초과 가능성
* 관리자 인증 방식

## 16.3 도메인

초기 개발 단계에서는 Cloudflare Pages 기본 도메인을 사용할 수 있다.

예시:

* `marlin-portfolio.pages.dev`

정식 공개 시 별도 custom domain을 연결할 수 있어야 한다.

후보 예시:

* `marlinatelier.com`
* `marlinworks.com`
* `marlin-craft.com`
* `marlin.art`

도메인 구매는 발주자가 별도로 진행한다.
개발팀은 도메인 연결 작업을 견적에 포함할지 별도 항목으로 명시한다.

---

# 17. 이메일 문의 기능

## 17.1 기본 방식

MVP에서는 contact form 대신 `mailto:` 링크를 사용한다.

이유:

* 별도 백엔드 서버 불필요
* 스팸 관리 부담 감소
* 개인정보 저장 없음
* 무료 호스팅과 잘 맞음
* 구현과 유지보수가 단순함

## 17.2 문의 버튼 위치

이메일 문의 버튼은 다음 위치에 제공한다.

* 메인 Hero 영역
* 작품 상세 모달
* 작품 상세 페이지
* Footer

## 17.3 이메일 주소

개발 중 placeholder 이메일:

```text
hello@example.com
```

최종 이메일 주소는 발주자가 제공한다.

## 17.4 작품 문의 메일 템플릿

작품 상세 화면에서 문의 버튼을 누르면 이메일 제목과 본문이 자동으로 채워져야 한다.

Subject 예시:

```text
Inquiry about Blue Temari No. 01 by Marlin
```

Body 예시:

```text
Hello Marlin,

I would like to ask about this work.

Artwork: Blue Temari No. 01
Page: https://example.com/artworks/blue-temari-no-01

Thank you.
```

## 17.5 일반 문의 메일 템플릿

메인 화면의 일반 문의 버튼은 다음과 같이 구성한다.

Subject 예시:

```text
Inquiry for Marlin
```

Body 예시:

```text
Hello Marlin,

I would like to ask about your works.

Thank you.
```

---

# 18. 수익화 링크 정책

## 18.1 MVP 정책

MVP에서는 수익화 링크를 화면에 노출하지 않는다.

비노출 대상:

* Patreon
* Online Shop
* Etsy
* External marketplace
* Commission payment page
* Membership page

## 18.2 데이터 구조

향후 확장을 위해 작품 또는 사이트 설정 데이터에 링크 필드를 둘 수 있다.

예시:

```yaml
links:
  patreon:
    url: ""
    visible: false
  shop:
    url: ""
    visible: false
  instagram:
    url: ""
    visible: false
  commission:
    url: ""
    visible: false
```

## 18.3 향후 노출 방식

향후 수익화 링크를 노출할 경우 다음 위치에 표시할 수 있어야 한다.

* 메인 Hero 하단
* Footer
* 작품 상세 화면
* 별도 Links 섹션

MVP에서는 이 UI가 실제 화면에 보이지 않아야 한다.
단, 코드와 데이터 구조는 향후 활성화가 가능해야 한다.

---

# 19. Analytics

MVP에서 analytics는 필수 기능이 아니다.

선택 적용 가능 항목:

* Cloudflare Web Analytics
* Plausible
* Google Analytics

개발팀은 analytics를 기본 견적에 포함하지 않아도 된다.
단, 발주자가 요청할 경우 추가 견적으로 반영한다.

Analytics 적용 시 다음 사항을 검토한다.

* 쿠키 사용 여부
* 개인정보 처리 필요 여부
* 방문자 추적 범위
* 국가별 개인정보 규제 대응 필요 여부

---

# 20. 보안 및 개인정보

## 20.1 공개 사이트 보안

MVP 공개 사이트는 로그인, 결제, 댓글, 폼 입력이 없으므로 보안 범위가 단순하다.

필수 요구사항:

* HTTPS 적용
* 외부 스크립트 최소화
* 사용하지 않는 dependency 제거
* secret key를 repository에 저장하지 않음
* 환경변수는 호스팅 서비스의 secret/environment 설정 사용
* 관리자 경로가 검색엔진에 노출되지 않도록 처리 권장

## 20.2 관리자 보안

관리자 기능은 인증을 반드시 적용한다.

요구사항:

* 관리자 계정은 발주자 또는 작가만 접근
* 인증 정보는 코드에 하드코딩하지 않음
* CMS token, API key, OAuth secret은 환경변수로 관리
* 권한 없는 사용자는 콘텐츠 수정 불가
* 관리자 접근 방법을 문서화하되, 민감 정보는 문서에 직접 기재하지 않음

## 20.3 개인정보

MVP에서는 방문자 개인정보를 저장하지 않는다.

* contact form 없음
* 회원가입 없음
* 댓글 없음
* 결제 없음
* 이메일 문의는 사용자의 메일 클라이언트를 통해 직접 발송

따라서 별도 개인정보 DB를 운영하지 않는다.

---

# 21. 브라우저 지원

최소 지원 브라우저는 다음과 같다.

* 최신 Chrome
* 최신 Safari
* 최신 Edge
* 최신 Firefox
* iOS Safari
* Android Chrome

Internet Explorer는 지원하지 않는다.

관리자 화면은 최신 Chrome 또는 Safari 기준으로 동작하면 된다.
단, public site는 모바일 Safari와 Android Chrome에서 반드시 검수해야 한다.

---

# 22. 개발 산출물

## 22.1 디자인 산출물

개발팀은 다음 디자인 산출물을 제공한다.

* Figma 디자인 파일
* 모바일 메인 화면 시안
* 모바일 작품 상세 화면 시안
* 데스크톱 메인 화면 시안
* 데스크톱 작품 상세 화면 시안
* 관리자 화면 시안
* 색상 팔레트
* 폰트 제안
* 버튼/카드/모달 컴포넌트 시안
* 반응형 레이아웃 가이드

## 22.2 개발 산출물

개발팀은 다음 개발 산출물을 제공한다.

* GitHub repository
* 전체 source code
* Astro/React/TypeScript 기반 프론트엔드 구현물
* Tailwind CSS 설정
* CMS schema 또는 관리자 데이터 모델
* 작품 샘플 데이터 30개
* 이미지 폴더 또는 CMS asset 구조
* 작품 갤러리 구현
* 작품 상세 모달 구현
* 작품 상세 페이지 구현
* 이미지 슬라이더 구현
* 이메일 문의 링크 구현
* 관리자 로그인 구현
* 작품 등록/수정/삭제 기능
* 이미지 업로드 기능
* 판매 상태 관리 기능
* SEO 메타데이터 구현
* 404 페이지
* Cloudflare Pages 배포 설정

## 22.3 문서 산출물

개발팀은 다음 문서를 제공한다.

* README.md
* 로컬 개발 환경 실행 방법
* 배포 방법
* 관리자 로그인 방법
* 작품 등록 방법
* 작품 수정 방법
* 작품 삭제 방법
* 이미지 업로드 방법
* 판매 상태 변경 방법
* 카테고리 변경 방법
* 이메일 주소 변경 방법
* 수익화 링크 활성화 방법
* 도메인 연결 방법
* CMS 계정 관리 방법
* 장애 발생 시 기본 확인 방법
* 향후 유지보수 가이드

## 22.4 배포 산출물

최종 납품 시 다음 배포 산출물을 제공한다.

* Production URL
* Preview/Staging URL
* GitHub repository 접근 권한
* CMS 관리자 접근 방법
* Cloudflare Pages 프로젝트 접근 방법 또는 설정 이전
* 환경변수 목록
* 빌드/배포 상태 확인 방법

---

# 23. 개발 일정 예시

구체 일정은 개발팀 견적에 따라 확정한다.
권장 일정은 다음과 같다.

## Phase 1. 요구사항 확정 및 설계

예상 기간: 3~5영업일

작업 내용:

* 요구사항 확인
* CMS 방식 확정
* 정보 구조 확정
* 콘텐츠 데이터 구조 확정
* 관리자 기능 범위 확정
* 디자인 방향 논의
* 레퍼런스 사이트 및 무드보드 정리

산출물:

* 요구사항 정리본
* 사이트맵
* 콘텐츠 schema draft
* 관리자 기능 범위표
* 디자인 방향 초안

## Phase 2. UI/UX 디자인

예상 기간: 5~7영업일

작업 내용:

* 모바일 메인 화면 디자인
* 모바일 작품 상세 화면 디자인
* 데스크톱 메인 화면 디자인
* 데스크톱 작품 상세 화면 디자인
* 관리자 화면 디자인
* 색상/폰트/간격 시스템 정의
* 컴포넌트 디자인

산출물:

* Figma final design
* responsive design guide
* design token
* component guide

## Phase 3. 프론트엔드 및 CMS 개발

예상 기간: 10~15영업일

작업 내용:

* 프로젝트 초기 세팅
* Astro/React/TypeScript/Tailwind 설정
* CMS 또는 관리자 기능 설정
* 콘텐츠 schema 구현
* 갤러리 그리드 구현
* 카테고리 필터 구현
* 작품 상세 모달 구현
* 작품 상세 페이지 구현
* 이미지 슬라이더 구현
* 이메일 문의 기능 구현
* 판매 상태 표시 구현
* SEO 구현
* 404 페이지 구현

산출물:

* 개발 서버 URL
* source code
* CMS schema
* 기본 UI 구현물

## Phase 4. 콘텐츠 입력 및 이미지 최적화

예상 기간: 3~5영업일

작업 내용:

* 초기 작품 30개 등록
* 대표 이미지 등록
* 상세 이미지 등록
* 작품 설명 입력
* 카테고리 입력
* 판매 상태 입력
* alt text 입력
* 이미지 압축 및 최적화
* 관리자 화면에서 콘텐츠 수정 테스트

산출물:

* 작품 30개 등록 완료
* 이미지 최적화 완료
* 콘텐츠 검수 리스트

## Phase 5. QA 및 최종 배포

예상 기간: 3~5영업일

작업 내용:

* 모바일 QA
* 데스크톱 QA
* 브라우저 QA
* 관리자 기능 QA
* 이미지 업로드 QA
* SEO 확인
* Lighthouse 점검
* 접근성 기본 점검
* Cloudflare Pages production 배포
* README 및 운영 가이드 작성
* 인수인계

산출물:

* Production URL
* QA report
* 운영 가이드
* 최종 repository
* 관리자 접근 방법

총 예상 기간: 약 4~6주

---

# 24. 검수 기준 / Acceptance Criteria

## 24.1 공개 사이트 기능 검수

다음 항목이 정상 동작해야 한다.

* Home page가 정상 표시된다.
* Marlin 작가명이 표시된다.
* 영어 소개문이 표시된다.
* 작품 30개가 등록되어 표시된다.
* 작품 이미지는 4:5 비율로 표시된다.
* 카테고리 필터가 정상 동작한다.
* 작품 카드를 누르면 상세 모달 또는 상세 페이지가 열린다.
* 상세 화면에서 여러 이미지를 넘길 수 있다.
* 작품명, 카테고리, 판매 상태, 설명이 표시된다.
* 이메일 문의 버튼이 정상 동작한다.
* 작품별 독립 URL이 존재한다.
* 404 페이지가 존재한다.
* 수익화 링크는 화면에 노출되지 않는다.

## 24.2 관리자 기능 검수

다음 항목이 정상 동작해야 한다.

* 관리자 로그인 가능
* 관리자 외 접근 제한
* 작품 목록 조회 가능
* 작품 신규 등록 가능
* 작품 수정 가능
* 작품 삭제 가능
* 대표 이미지 업로드 가능
* 상세 이미지 여러 장 업로드 가능
* 이미지 미리보기 가능
* 이미지 순서 변경 가능
* 카테고리 변경 가능
* 판매 상태 변경 가능
* 공개/비공개 변경 가능
* 저장 후 사이트 반영 가능
* GitHub 직접 사용 없이 콘텐츠 수정 가능

## 24.3 디자인 검수

다음 기준을 만족해야 한다.

* 전체 톤이 일본 공예풍과 부합한다.
* 푸른 수국 계열 색상이 일관되게 적용되어 있다.
* 배경과 여백이 차분하고 공예적 분위기를 만든다.
* 작품 이미지가 UI보다 우선적으로 보인다.
* 모바일에서 작품 감상이 자연스럽다.
* 텍스트 가독성이 충분하다.
* 버튼과 badge가 과하게 상업적으로 보이지 않는다.
* 4:5 이미지 카드 비율이 유지된다.

## 24.4 반응형 검수

다음 환경에서 레이아웃이 깨지지 않아야 한다.

* Small mobile
* iPhone Safari
* Android Chrome
* Tablet
* Desktop Chrome
* Desktop Safari
* Desktop Edge

검수 항목:

* 가로 스크롤 없음
* 이미지 비율 유지
* 필터 UI 정상 동작
* 모달 정상 표시
* 닫기 버튼 정상 동작
* footer 정상 표시
* 관리자 화면 주요 기능 정상 접근

## 24.5 성능 검수

다음 기준을 권장한다.

* Lighthouse Performance 90점 이상
* Lighthouse Accessibility 90점 이상
* Lighthouse SEO 90점 이상
* 이미지 lazy loading 적용
* layout shift 최소화
* 모바일 스크롤 성능 양호
* 초기 로딩이 과도하게 느리지 않음

## 24.6 운영 검수

다음 운영 작업이 문서만 보고 가능해야 한다.

* 관리자 로그인
* 작품 추가
* 작품 수정
* 작품 삭제
* 이미지 업로드
* 판매 상태 변경
* 작품 비공개 처리
* 이메일 주소 변경
* 수익화 링크 노출 활성화
* 로컬 개발 서버 실행
* 배포 상태 확인
* 장애 발생 시 기본 점검

---

# 25. 발주자 제공 필요 자료

## 25.1 필수 자료

발주자는 개발 또는 콘텐츠 입력 단계에서 다음 자료를 제공한다.

* 최종 문의 이메일 주소
* 작품 30개의 대표 이미지
* 작품별 상세 이미지
* 작품명
* 작품 카테고리
* 판매 상태
* 작품 설명
* 재료
* 크기
* 제작 연도

## 25.2 선택 자료

있으면 좋은 자료는 다음과 같다.

* 작가 프로필 사진
* 작가 소개문
* 작가 로고
* 작가 서명 이미지
* Instagram URL
* Patreon URL
* Shop URL
* 선호하는 레퍼런스 사이트
* 피하고 싶은 디자인 예시
* 커스텀 도메인 후보
* 작품별 alt text
* 작품별 제작 과정 사진
* 작품별 컬렉션명

## 25.3 작품 콘텐츠 입력 템플릿

작품 1개당 다음 양식으로 정리한다.

```text
Title:
Category:
Status:
Year:
Materials:
Size:
Description:
Cover image filename:
Detail image filenames:
Alt text:
Published:
Featured:
Order:
Notes:
```

예시:

```text
Title: Blue Temari No. 01
Category: Temari
Status: Available
Year: 2026
Materials: Cotton thread, core, metallic thread
Size: 8 cm diameter
Description: A hand-wrapped Temari work inspired by layered blue hydrangea petals.
Cover image filename: blue-temari-no-01-cover.webp
Detail image filenames:
- blue-temari-no-01-detail-01.webp
- blue-temari-no-01-detail-02.webp
- blue-temari-no-01-detail-03.webp
Alt text: Blue handmade Temari ball with layered blue and lavender geometric thread patterns.
Published: true
Featured: true
Order: 1
Notes:
```

---

# 26. 유지보수 및 확장 계획

## 26.1 단기 운영

MVP 공개 후 단기 운영은 다음 방식으로 한다.

* 작가가 관리자 화면에서 작품 등록/수정
* 이미지 업로드 시 가이드에 맞춰 최적화
* 판매 상태 변경은 관리자 화면에서 직접 수행
* 이메일 주소 변경은 설정값 또는 CMS site settings에서 수행
* 사이트 디자인 변경은 개발자 또는 유지보수 계약을 통해 수행

## 26.2 중기 확장

사이트가 안정적으로 운영된 후 다음 기능을 추가할 수 있다.

* Instagram 링크 노출
* Patreon 링크 노출
* Online shop 링크 노출
* Commission request page
* Collection page
* Tag system
* Simple search
* Bilingual support: English / Korean
* Newsletter signup
* Contact form
* Cloudinary 이미지 관리
* 더 정교한 CMS preview

## 26.3 장기 확장

작품 판매가 본격화될 경우 다음 기능을 검토한다.

* Shopify 연동
* Etsy 연동
* Stripe 결제
* inventory management
* sold/reserved workflow
* commission order workflow
* limited edition 관리
* print-on-demand 연동
* customer inquiry dashboard
* analytics 기반 인기 작품 분석

---

# 27. 견적 요청 시 개발팀 답변 요구사항

개발팀은 견적서 제출 시 다음 항목을 명시해야 한다.

1. 제안 기술 스택
2. CMS 선택안 및 선택 사유
3. 관리자 인증 방식
4. 이미지 저장 방식
5. 콘텐츠 수정 후 사이트 반영 방식
6. 총 개발 기간
7. 단계별 일정
8. 총 견적
9. 디자인 포함 여부
10. 관리자 화면 디자인 포함 여부
11. 초기 작품 30개 입력 포함 여부
12. 이미지 최적화 포함 여부
13. Cloudflare Pages 배포 포함 여부
14. GitHub repository 인수인계 포함 여부
15. CMS 계정 인수인계 포함 여부
16. README 및 운영 가이드 포함 여부
17. 수정 횟수 기준
18. 하자보수 기간
19. 유지보수 비용
20. CMS 또는 호스팅 무료 한도 초과 시 예상 비용
21. 커스텀 도메인 연결 비용
22. 향후 판매 기능 추가 시 예상 개발 방향
23. 향후 다국어 기능 추가 시 예상 개발 방향

---

# 28. 최종 요약

본 프로젝트는 예술가 **Marlin**의 작품을 위한 영어 기반 모바일 최적화 포트폴리오 사이트이다.

사이트는 Instagram과 유사한 이미지 중심 갤러리 경험을 제공하되, SNS가 아니라 작가의 공식 작품 아카이브로 기능해야 한다.

디자인은 일본 공예풍을 기반으로 하며, 푸른 수국에서 파생된 차분한 청색, 보라색, 회청색, 연녹색, 아이보리 계열의 색상 팔레트를 사용한다.

초기 작품 수는 30개이며, 모든 작품은 4:5 비율의 이미지 카드로 표시된다. 작품을 클릭하면 상세 모달 또는 상세 페이지에서 여러 이미지를 넘겨볼 수 있고, 작품 설명과 판매 상태를 확인할 수 있다.

MVP 단계부터 관리자 기능을 포함한다. 작가는 관리자 화면에서 작품 이미지와 텍스트를 직접 등록·수정·삭제할 수 있어야 하며, 판매 상태와 공개 여부도 관리할 수 있어야 한다.

수익화 링크는 향후 확장을 위해 placeholder 구조만 만들고, MVP에서는 화면에 노출하지 않는다. 문의는 이메일 기반으로 처리한다.

기술적으로는 **Astro + React + TypeScript + Tailwind CSS + CMS/Admin + Cloudflare Pages + GitHub** 구성을 권장한다. CMS는 Sanity, Decap CMS, TinaCMS 등에서 개발팀이 장단점을 비교하여 제안하되, 작가가 GitHub를 직접 사용하지 않고도 작품을 관리할 수 있어야 한다.

최종 산출물은 공개 사이트, 관리자 기능, GitHub repository, 배포 설정, CMS 설정, 운영 가이드, 작품 30개 초기 등록 상태를 포함해야 한다.
