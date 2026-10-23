# 목포이랜드노인복지관 평생교육 안내

## 실행

이 README가 있는 프로젝트 폴더에서 PowerShell로 실행합니다. GitHub에서 내려받았다면 Node.js 22 이상을 설치하고 `node .\serve.mjs`를 실행하세요. 이전 PC에서 옮겨온 폴더에는 별도로 `node.exe`가 포함되어 있습니다.

```powershell
.\node.exe .\serve.mjs
```

브라우저에서 http://127.0.0.1:4173 을 엽니다. 종료는 Ctrl+C입니다.
시스템에 Node.js가 설치되어 있다면 `node .\serve.mjs`도 가능합니다.
서버는 로컬 주소에서 `dist` 파일만 제공합니다. 별도 npm 설치나 빌드는 필요하지 않습니다.

## 구조

- `dist/index.html`: 실제 사이트 진입점
- `dist/app.js`: 44개 강좌 데이터, 검색·필터·상세창·글자 크기
- `dist/timetable.js`: 주간 시간표와 강의실 필터
- `dist/course-plans.js`: 강의계획서 데이터와 표시
- `dist/*.css`, `dist/art-studio.jpg`: 스타일과 이미지
- `serve.mjs`: 의존성 없는 로컬 미리보기 서버
- `.openai/hosting.json`: 기존 Sites 호스팅 메타데이터. 인증정보를 넣지 마세요.

HTML/CSS/JavaScript로 된 정적 사이트입니다. 백엔드, 데이터베이스, 로그인, 온라인 접수·결제는 없습니다. 문의는 전화 링크로 연결됩니다. 외부 글꼴을 표시하려면 인터넷 연결이 필요합니다. 로컬 실행에 환경변수는 필요하지 않습니다.

## 이전 후 점검 (2026-10-23)

- Git 저장소는 이 폴더에 있습니다. 이전 커밋은 `6905e79` 한 개입니다.
- 기존 `dist/app.js`, `dist/index.html`, `dist/style.css`의 수정 및 추가 CSS/JS는 커밋되지 않은 상태로 옮겨졌습니다. 보존한 후 검토하여 커밋하세요.
- GitHub 저장소: https://github.com/aaaaayy10/homepage . 현재 사이트 파일은 GitHub 커넥터로 저장합니다. 이전 PC에서 옮겨온 로컬 Git 이력은 별도로 보존하며, GitHub의 새 이력과 다릅니다. GitHub 커넥터 로그인과 이 PC의 Git 인증은 별개입니다.
- 시스템 PATH에서 Git, Node.js, npm, GitHub CLI를 찾지 못했습니다. 포함된 `node.exe`와 상위 `../mingit/cmd/git.exe`를 사용할 수 있습니다. 포함된 실행 파일의 출처·업데이트 이력은 확인되지 않았습니다.
- Git의 소유자 검사 오류가 발생하면 아래처럼 해당 명령에만 예외를 적용할 수 있습니다. 전역 설정 변경은 필요하지 않습니다.

```powershell
..\mingit\cmd\git.exe -c safe.directory="$($PWD.Path.Replace('\','/'))" status --short
```

- 상위 폴더의 `index.html`, `script.js`, `styles.css`는 다른 초기 시안입니다. 현재 실행 대상은 이 폴더의 `dist`입니다.
- 상위 폴더의 `add-*.mjs`, `update-*.mjs`는 이전 PC의 절대경로를 사용하는 일회성 수정 도구입니다. 현재 사이트에 다시 적용하면 중복·손상이 생길 수 있으므로 그대로 실행하지 마세요.
- 상위 폴더의 `check-*.mjs`는 포트 9222의 브라우저 디버깅 세션이 필요합니다. 일부는 브라우저를 종료하므로 일반 실행 스크립트가 아닙니다.
- `browser-*` 폴더는 이전 브라우저 프로필이며 사이트 실행에 필요하지 않습니다. GitHub에 함께 올리지 마세요.
- 사이트의 접수 일정은 2026년 하반기 고정 데이터입니다. 실제 운영 여부와 기관 안내 내용은 게시 전에 확인해야 합니다.

비밀번호·토큰·환경변수 파일은 커밋하지 마세요. 배포할 정적 파일은 `dist`입니다.
