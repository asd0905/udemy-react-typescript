## npm init -y
질문없이 바로 package.json 작성

## --save
앱이 구동하기 위한 모듈 설치, react는 앱 전체를 구동하기 위해 반드시 필요한 모듈
## --save-dev
앱 개발할 때 필요한 모듈 설치, test나 build 툴은 앱 개발시만 필요한 모듈

## webpack, webpack-cli
webpack: 웹팩의 핵심 패키지
webpack-cli: 터미널에서 webpack 커맨드를 실행할 수 있게 해주는 커맨드라인 도구
두 패키지 모두 개발할 때만 필요한 의존성

## webpack.config.js 파일 생성
webpack 옵션 작성

## npx webpack --config webpack.config.js
webpack 옵션을 가지고 webpack 실행

## npm install --save-dev webpack-dev-server
웹팩 자동화를 위한 플러그인
```
devServer: {
contentBase: './',
publicPath: '/dist',
port: 3000
}
```
index.html이 프로젝트 최상단에 있기 때문에 contentBase를 './'로 잡는다.
빌드 결과물이 dist 폴더에 있기 때문에 정적 파일을 제공하는 폴더인 publicPath를 '/dist'로 지정한다.
port를 따로 지정해줄 수도 있다.

## npm install --save-dev @babel/core babel-loader @babel/preset-react @babel/preset-env 
@babel/core: 리액트는 es6를 사용하므로 여러 브라우저에서 사용가능하도록 es5문법으로 바꿔줌
@babel/preset-react: jsx -> javascript
@babel/preset-env: es6 -> es5
es6 뿐 아니라 브라우저에 따라 알아서 컴파일 해줌
좀 더 자세히 알아보고 싶다면 babel-preset-env는 무엇이고 왜 필요한가?를 참조하자
babel-loader: 자바스크립트 파일을 babel preset/plugin과 webpack을 사용하여 es5로 컴파일 해주는 plugin
jsx -> javascript 로 컴파일
html webpack plugin"# udemy-react-typescript" 
