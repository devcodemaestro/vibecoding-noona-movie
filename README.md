# Vibe Movies - Netflix-style Movie Browser

TMDB API를 사용한 넷플릭스 스타일의 현재 상영작 영화 브라우저입니다.

## 주요 기능

- 🎬 현재 상영 중인 영화 목록 표시
- 🎨 넷플릭스 스타일의 그리드 레이아웃
- 📱 반응형 디자인
- 🔒 API 키 보안 (서버사이드 프록시)

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 TMDB API 키를 설정합니다:

```env
TMDB_API_KEY=your_api_key_here
PORT=3000
```

### 3. 서버 실행

```bash
npm start
```

또는 개발 모드 (nodemon 사용):

```bash
npm run dev
```

### 4. 브라우저에서 확인

http://localhost:3000

## 프로젝트 구조

```
.
├── server.js          # Express 서버 (프록시)
├── index.html         # 메인 HTML
├── styles.css         # 스타일시트
├── app.js             # 프론트엔드 JavaScript
├── package.json       # npm 설정
└── .env              # 환경 변수 (gitignore됨)
```

## API 키 보안

- API 키는 서버사이드에서만 사용됩니다
- 클라이언트 코드에서는 API 키가 노출되지 않습니다
- 브라우저 네트워크 탭에서도 API 키가 보이지 않습니다

## 배포하기

이 프로젝트를 온라인에 배포하고 다른 사람들과 공유하려면 `DEPLOY.md` 파일을 참고하세요.

```bash
# 자세한 배포 가이드
cat DEPLOY.md
```

### 빠른 배포 (Vercel)

1. GitHub에 코드 업로드
2. https://vercel.com 접속하여 GitHub으로 로그인
3. 프로젝트 Import
4. 환경 변수 추가: `TMDB_API_KEY=346ef5a17c1e81fd4fbfb858093a46b7`
5. Deploy 클릭!

## 기술 스택

- HTML/CSS/JavaScript
- Express.js
- TMDB API
- Vercel (배포)
