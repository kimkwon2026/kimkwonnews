# 개인 뉴스 클리핑

첨부된 모바일 뉴스 목록 화면을 참고한 반응형 개인 뉴스 클리핑 웹앱입니다. 국내 뉴스와 해외 뉴스를 분리하고, 정치·AI/전자통신·라이프스타일·여행·문학과 각 세부 카테고리를 지원합니다.

## 1. 뉴스 수집 매체

### 국내 종합 언론
- 중앙일보: 공개 RSS를 안정적으로 확인하기 어려워 Google News의 `site:joongang.co.kr` 검색 RSS를 사용합니다.
- 동아일보: 공개 RSS
- 조선일보: 공개 RSS

### 국내 전문 매체
- 정치·시사: 시사IN (Google News 도메인 검색 RSS)
- IT·AI·전자통신: IT동아, 바이라인네트워크, 전자신문, ZDNet Korea, 블로터, 보안뉴스
- 건강·의학: 의학신문, 코메디닷컴
- 여행: 트래비
- 패션: Vogue Korea (Google News 도메인 검색 RSS)
- 문학: 문학뉴스·뉴스페이퍼 도메인 검색 RSS

### 해외 종합 언론
- The Times, The New York Times, BBC, Washington Post, The Guardian

### 해외 전문 매체
- 정치: Politico (Google News 도메인 검색 RSS)
- AI·전자통신: WIRED, TechCrunch, The Verge
- 여행: Lonely Planet (Google News 도메인 검색 RSS)
- 패션: Vogue
- 문학: Literary Hub, The New Yorker

RSS 피드는 언론사 정책 및 URL 변경에 따라 중단될 수 있습니다. 앱은 정상 수집된 매체의 기사를 계속 표시하고, 실패한 피드는 오류 안내에 기록합니다. 공개 RSS 주소가 일정하지 않은 일부 출판사는 Google News의 도메인 한정 검색 RSS로 보완합니다. 기사 카드에는 실제 수집된 매체명이 표시되며 선택 분야의 관련 매체 목록도 함께 표시합니다.

## 2. 기사 읽기 화면

- 기사 제목을 누르면 현재 앱 화면 안에서 읽기 화면이 열립니다.
- 제목, 매체, 발행일, 요약을 별도 영역으로 나눴습니다.
- 읽기 폭을 제한하고 문단 간격 및 줄간격을 넓혀 모바일 가독성을 높였습니다.
- 원문 사이트가 삽입을 허용하는 경우 내부 iframe으로 원문을 추가 표시합니다.
- 원문 삽입이 차단되거나 접근할 수 없는 경우에는 RSS에서 제공하는 요약을 앱 안에서 보여주고 원문 링크를 제공합니다.
- 언론사 원문 자체의 글꼴과 줄맞춤은 해당 언론사의 정책에 따라 달라지며, 앱에서 강제로 변경할 수 없습니다.
- 기사의 전체 본문을 무단 수집해 재게시하지 않습니다. 본문 전체는 각 언론사 페이지에서 확인합니다.

## 3. GitHub 기반 배포 구조

GitHub를 소스 코드 저장소로 사용하고 GitHub Actions가 `main` 브랜치에 반영된 코드를 Cloudflare Workers로 자동 배포합니다. Worker가 RSS 수집 API와 정적 웹 화면을 함께 제공하는 구조입니다.

**GitHub Pages만으로 배포하지 않는 이유:** GitHub Pages는 HTML·CSS·JavaScript 등 정적 파일을 호스팅하는 서비스입니다. 여러 언론사 RSS를 서버에서 요청하고 CORS를 우회하는 API는 실행할 수 없으므로, 백엔드 역할을 맡을 Worker가 필요합니다.

### 준비물
1. GitHub 계정 및 새 저장소
2. Cloudflare 계정
3. Cloudflare API Token 및 Account ID

### GitHub 저장소 만들기
1. GitHub에서 `news-clipping` 같은 이름으로 새 저장소를 만듭니다.
2. 이 압축 파일을 풀고, 안쪽 `news_clipping_app` 폴더의 **내용물 전체**를 저장소 최상위에 올립니다. `.github/workflows/deploy.yml`도 포함되어야 합니다.
3. 기본 브랜치 이름은 `main`으로 지정합니다.

### Cloudflare 배포용 비밀값 등록
1. Cloudflare 대시보드에서 Account ID를 확인합니다.
2. Cloudflare 대시보드의 API Tokens에서 Workers 배포 권한이 있는 API Token을 만듭니다. 권한은 필요한 계정 범위로 제한합니다.
3. GitHub 저장소에서 **Settings → Secrets and variables → Actions → New repository secret**으로 들어갑니다.
4. 다음 두 값을 등록합니다.
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
5. GitHub 저장소의 **Actions** 탭에서 `Deploy News Clipping` 워크플로가 실행되는지 확인합니다.

이후 `main`에 커밋을 올릴 때마다 자동 배포됩니다. 배포가 끝나면 Actions 실행 결과와 Cloudflare Workers 대시보드에서 접속 주소를 확인할 수 있습니다.

> API Token은 코드나 README에 직접 입력하지 마세요. 반드시 GitHub Secrets에만 보관해야 합니다.

## 4. 로컬 미리보기 및 수동 배포

Node.js 22 이상을 설치한 뒤 프로젝트 최상위 폴더에서 실행합니다.

```bash
npm install
npm run dev
```

로컬에서 Worker 및 정적 화면을 함께 확인할 수 있습니다. 수동 배포가 필요하면 Cloudflare에 로그인한 뒤 다음 명령을 실행합니다.

```bash
npx wrangler login
npm run deploy
```

## 5. 주요 파일

- `public/index.html`: 화면, 카테고리, 검색, 기사 읽기 화면
- `worker.js`: 뉴스 RSS 수집·분류·중복 제거, 기사 임베드 가능 여부 확인
- `wrangler.jsonc`: Cloudflare Worker 및 정적 에셋 설정
- `.github/workflows/deploy.yml`: GitHub Actions 자동 배포
- `public/manifest.webmanifest`: 홈 화면 설치 설정
- `public/sw.js`: PWA 기본 캐시

## 6. 갱신

웹앱이 열려 있는 동안 15분 간격으로 자동 갱신을 시도하며, 화면의 새로고침 버튼으로 즉시 다시 수집할 수 있습니다. RSS 원본 피드는 5분간 Worker 메모리에 캐시됩니다.
