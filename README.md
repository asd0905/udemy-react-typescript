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
@babel/preset-env: es6 -> es5, 에초에 es5없던 es6문법들은 webpack.config.js에서 target에서 es5로 컴파일해줌
es6 뿐 아니라 브라우저에 따라 알아서 컴파일 해줌
좀 더 자세히 알아보고 싶다면 babel-preset-env는 무엇이고 왜 필요한가?를 참조하자
babel-loader: 자바스크립트 파일을 babel preset/plugin과 webpack을 사용하여 es5로 컴파일 해주는 plugin
jsx -> javascript 로 컴파일
html webpack plugin"# udemy-react-typescript" 
"# udemy-react-typescript" 

## core-js
최신으로 깔아야 preset-env할 때 에러안뜸 (ie, 파폭, 등등 크롬 제외)

## jsx, tsx?
jsx는 언어입니다.
javascript와 xml의 합성어이며 작업을 수월하게 하기 위해서 return 할 때 html모양으로 넘겨주는 것.
이거를 컴파일해서 자바스크립트로 변경시켜주면 화면에서 랜더링해주는것.
그럼 jsx파일과 tsx파일의 차이?
jsx파일은 그냥 js파일인데, rcc명령어를 통해서 기본적인 형태를 만들어주기 때문에 사용하는 듯?
rcc명령어도 종류가 많습니다.
rcc: 기본 리액트 컴포넌트 코드를 생성합니다.
rccp: 리액트 컴포넌트를 프로퍼티 타입과 함께 생성합니다.
rcfc: 리액트 컴포넌트를 생명주기 함수와 함께 생성합니다.
rpc: 리액트 퓨터 컴포넌트를 생성합니다.
rsc: 함수형 컴포넌트를 생성합니다.
rscp: 함수형 컴포넌트를 프로퍼티 타입과 함께 생성합니다.

여기서 퓨어컴포넌트란?
기본 컴포넌트는 props가 바뀌거나 setState함수를 사용시 shouldComponentUpdate함수에서
비교를 통해서 리랜더의 여부를 결정한다.
저 함수를 따로 사용하지 않는 경우 무조건 실행
하지만 퓨어 컴포넌트는 자체적으로 저 함수를 실행한다. 그리고 얕은 비교를 통해서
리랜더 시킬지 자체적 검열.
shouldComponentUpdate 함수를 신경쓰지 않아도 되고, 저절로 얕은 비교를 통해 걸러주기 때문에
성능을 향상시켜준다는 글들이 많다.

하지만 최적화가 완벽하지 못하거나 복잡한 로직에선 오히려 버그가 더 잘나고 성능이슈가 나올 수 있다.
그래서 간단한 값을 넘길 때 사용하는 것이 좋다고 하는 것 같다.
제대로만 사용하면 함수 컴포넌트보다 빠를수도
https://ideveloper2.tistory.com/159



함수컴포넌트?
퓨어 컴포넌트보다 더 간단할 때
받기만하고 변하는게 없을 때 사용
클레스 함수를 사용할 때 필요한 Component, constructor같은 걸 사용하지 않고
가장 가볍게 적용할 수 있다.
