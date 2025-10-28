# 배포 가이드

이 가이드는 Vercel을 사용하여 이 프로젝트를 온라인에 배포하는 방법을 설명합니다.

## 왜 배포가 필요한가요?

- `localhost:3000`은 **당신의 컴퓨터에서만** 접속할 수 있습니다
- 다른 사람들은 당신의 컴퓨터에 접속할 수 없습니다
- 배포하면 **전 세계 누구나** 접속할 수 있는 공개 URL을 받습니다

## Vercel 배포 단계별 가이드

### 1단계: GitHub에 코드 업로드

#### 1-1. Git 저장소 초기화

```bash
git init
```

#### 1-2. 파일 추가

```bash
git add .
git commit -m "Initial commit: Netflix-style movie browser"
```

#### 1-3. GitHub에 새 저장소 생성

1. https://github.com/new 접속
2. Repository name: `vibecoding-noona-movie`
3. Public으로 선택
4. "Create repository" 클릭

#### 1-4. 코드 푸시

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vibecoding-noona-movie.git
git push -u origin main
```

> ⚠️ `YOUR_USERNAME`을 실제 GitHub 사용자명으로 변경하세요

### 2단계: Vercel에 프로젝트 연결

#### 2-1. Vercel 계정 생성

1. https://vercel.com 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택
4. GitHub 로그인 정보로 계정 생성

#### 2-2. 프로젝트 Import

1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 목록에서 `vibecoding-noona-movie` 선택
3. "Import" 클릭

### 3단계: 환경 변수 설정

1. "Environment Variables" 섹션으로 스크롤
2. 다음 환경 변수 추가:
   - **Key**:
   - **Value**:
3. "Add" 버튼 클릭

### 4단계: 배포 실행

1. "Deploy" 버튼 클릭
2. 몇 초 대기
3. 배포 완료! ✅

### 5단계: 배포 확인

1. 배포가 완료되면 "Visit" 버튼이 나타납니다
2. 클릭하면 `https://your-project-name.vercel.app` 같은 URL로 이동합니다
3. 이 URL을 다른 사람들에게 공유하세요!

## 트러블슈팅

### 배포가 실패하는 경우

- **문제**: "Module not found" 에러
- **해결**: 터미널에서 `npm install` 실행 후 다시 커밋

### 영화가 안 보이는 경우

- **문제**: 빈 화면 또는 에러 메시지
- **확인**: Vercel의 환경 변수가 제대로 설정되었는지 확인
- **확인**: 브라우저 콘솔에서 에러 메시지 확인

### API 키가 노출되는 경우

- **문제**: 브라우저 네트워크 탭에서 API 키가 보임
- **확인**: `server.js`를 사용한 프록시 구조가 올바른지 확인
- **확인**: `/api/now-playing`로 요청하고 있는지 확인

## 배포 후 관리

### 코드 업데이트하기

1. 코드 수정
2. GitHub에 푸시:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Vercel이 자동으로 다시 배포합니다!

### 환경 변수 수정하기

1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Environment Variables
3. 환경 변수 수정 후 "Save" 클릭
4. 자동으로 다시 배포됩니다

## 다른 배포 옵션

Vercel 외에도 다른 플랫폼에 배포할 수 있습니다:

### Netlify

- `vercel.json` 대신 `netlify.toml` 생성 필요
- 환경 변수 설정은 동일

### Heroku

- Procfile 추가 필요
- 무료 플랜 제한 있음

### Fly.io

- Docker 기반 배포
- 빠른 성능

## 도움이 필요하다면?

- Vercel 공식 문서: https://vercel.com/docs
- GitHub Issues: 문제 발생시 이슈 등록
- TMDB API 문서: https://www.themoviedb.org/documentation/api
