# 따끈한 모험 · Pancake Atlas

여섯 개의 핫케이크 섬을 눌러 레시피를 살펴보는 정적 웹사이트입니다. 빌드나 패키지 설치 없이 `index.html`, `style.css`, `script.js`, `map.png`를 그대로 제공합니다.

## GitHub Pages에 공개하기

이 저장소의 현재 브랜치는 `master`입니다. 로컬 변경 사항을 GitHub에 올린 뒤 저장소의 **Settings → Pages → Build and deployment**에서 **Source: Deploy from a branch**, **Branch: master**, **Folder: /(root)**를 선택하고 **Save**를 누르세요.

```bash
git add index.html style.css script.js map.png README.md .nojekyll
git commit -m "Publish Pancake Atlas website"
git push origin master
```

공개 주소는 `https://sonotri.github.io/seojin_261021/`입니다. GitHub Pages 설정 화면의 **Visit site**에서도 확인할 수 있습니다.

## 로컬에서 보기

`index.html`을 브라우저로 열거나, 프로젝트 폴더에서 `python3 -m http.server 8000`을 실행한 뒤 `http://localhost:8000/`에 접속하세요.
