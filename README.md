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

### Vercel을 사용한 배포 (추천)

1. **GitHub에 코드 업로드**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vibecoding-noona-movie.git
   git push -u origin main
   ```

2. **Vercel 배포**

   - https://vercel.com 접속
   - GitHub로 로그인
   - "New Project" 클릭
   - 위에서 푸시한 저장소 선택
   - Environment Variables 추가:
     - Key:
     - Value:
   - "Deploy" 클릭

3. **배포 완료!**
   - 몇 초 후 자동으로 배포됩니다
   - `https://your-project.vercel.app` 같은 주소가 생성됩니다
   - 이 주소를 누구나 접속할 수 있습니다!

### 배포 전 확인사항

- ✅ `.env` 파일이 `.gitignore`에 포함되어 있는지 확인
- ✅ 환경 변수가 Vercel에 설정되었는지 확인
- ✅ `vercel.json` 파일이 있는지 확인

## 기술 스택

- HTML/CSS/JavaScript
- Express.js
- TMDB API
- Vercel (배포)
# Force redeploy
