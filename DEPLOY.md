# 🚀 배포 가이드

Vercel을 사용하여 무료로 프로젝트를 배포하는 방법입니다.

## 📋 사전 준비

1. GitHub 계정 (없으면 [가입](https://github.com/join))
2. Vercel 계정 (GitHub으로 로그인 가능)

## 1️⃣ GitHub에 코드 업로드

### Git 초기화 (처음 한 번만)

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Netflix-style movie browser"

# GitHub에서 새 저장소 생성 후 아래 명령어 실행
# GitHub에서 "New repository" 버튼 클릭 → 저장소 이름 입력 → Create repository

# 원격 저장소 연결 (YOUR_USERNAME을 본인 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/vibecoding-noona-movie.git

# 기본 브랜치를 main으로 변경
git branch -M main

# GitHub에 업로드
git push -u origin main
```

### 기존 저장소에 추가 업로드

```bash
git add .
git commit -m "업데이트 내용 설명"
git push
```

## 2️⃣ Vercel 배포

### 방법 A: Vercel 웹사이트 (추천)

1. **Vercel 접속**: https://vercel.com
2. **GitHub로 로그인**: "Sign Up" → "Continue with GitHub"
3. **프로젝트 가져오기**:
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 선택 (vibecoding-noona-movie)
   - "Import" 클릭
4. **환경 변수 추가**:
   - "Environment Variables" 섹션
   - Name: `TMDB_API_KEY`
   - Value: `346ef5a17c1e81fd4fbfb858093a46b7`
   - 모든 환경 선택 (Production, Preview, Development)
5. **배포**:
   - "Deploy" 클릭
   - 2-3분 대기
   - 배포 완료 후 URL 확인!

### 방법 B: Vercel CLI

```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel

# 환경 변수 추가 질문이 나오면 아래 값 입력
# TMDB_API_KEY: 346ef5a17c1e81fd4fbfb858093a46b7
# TMDB_API_KEY를 설정하시겠습니까?: Yes
```

## 3️⃣ 환경 변수 확인

배포 후 **Vercel 대시보드**에서:
1. 프로젝트 선택
2. "Settings" → "Environment Variables" 탭
3. `TMDB_API_KEY`가 설정되어 있는지 확인

## 4️⃣ 업데이트 배포

코드를 수정한 후:

```bash
git add .
git commit -m "업데이트 내용"
git push
```

자동으로 Vercel이 새 버전을 배포합니다!

## 🌐 배포된 사이트 확인

배포 완료 후 받은 URL 예시:
- `https://vibecoding-noona-movie.vercel.app`
- `https://your-custom-name.vercel.app` (커스텀 도메인 설정 시)

이 URL을 누구나 접속할 수 있습니다! 🎉

## ❓ 트러블슈팅

### 문제: "API key is missing"

**해결책**: Vercel 대시보드에서 환경 변수를 다시 확인하고 추가

### 문제: 빌드 실패

**해결책**: 
1. `server.js` 파일이 루트에 있는지 확인
2. `package.json`에 모든 의존성이 있는지 확인

### 문제: 배포 후 404 에러

**해결책**: `vercel.json` 파일이 올바르게 설정되어 있는지 확인

## 📞 더 도움이 필요하신가요?

- Vercel 공식 문서: https://vercel.com/docs
- Vercel 커뮤니티: https://vercel.com/discord

