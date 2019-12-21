# #1

### #Why JS

- 웹에 쓰이는 하나뿐인 프로그래밍 -> 옵션이 하나
- 웹에서 웹사이트를 만들고 싶을 때 쓸 수 있는 것이 자바스크립트 뿐
- 백엔드는 언어가 많음 -> 파이썬, 루비 등
- 하지만 프론트를 한다면 JavaScript가 유일



### #Super Powers of JS

- JavaScript를 대체할 수 있는 언어는 없음.
- 웹사이트, 앱, 비디오 게임을 만들때, 리얼타임 앱을 만들 때



### #ES3, ES6 ESWTF?

- JavaScript의 version

- Javascript에 ECMAScript라는 것이 있는데, specification같은 것

- ES5는 ECMAScript5와 동일함.

- JavaScript의 Specification?

  JavaScript는 꽤나 중앙 집중화 되어 있어서 누군가 업데이트를 하면 모든 브라우저에서 작동을 하게 됨.

  따라서 이는 체계 메뉴얼 같은 것. 이런것 적으면 브라우저에는 이런게 나온 다 등..

- 브라우저가 하는 일은 specification을 받아서 자기들 방식으로 실행시킴. 

- 뒤에 숫자는 버전. 

- 바닐라 자바스크립트? JavaScript의 한 종류로 Library가 없는 것을 말함. 즉 날것의 JavaScript

- 정리: JavaScript는 언어, ECMAScript는 Specification



### #VanillaJS

- 바닐라 자바스크립트는 브라우저를 통해 우리에게 제공된 JavaScript
- Framework/Library같은 거 다 뺀 쌩 JavaScript
- 매우 빠름



### #Hello World with JavaScript

- 실습: Repl.it

- Html / CSS / JS 파일

- JS파일은 항상 Body 아래에 있어야함.

- 제일 마지막에 추가해야함.

- 모든 브라우저에는 JavaScript가 설치되어 있음. --> 설치 안해도 됨ㅋ

  - index.html

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
        <link rel = "stylesheet" href = "index.css"/>
    
      </head>
      <body>
        <h1> This works!</h1>
        <script src = "index.js"></script>
      </body>
    </html>
    ```

  - index.css

    ```css
    body{
      background-color: peru;
    }
    
    h1{
      color: white;
    }
    ```

  - index.js

    ```javascript
    console.log('Im Working. Im JS, Im worth it');
    ```



### #What are we learning

- Javascript는 다른 언어랑 얼마나 달라? JavaScript를배우면 모든 언어의 컨셉을 할 수 있음.
- Function, variable, event, condition, class, objects, arrays......



### #Your first JS Variable

- ##### Variables

  변수, Something that changes or they can be changed

- JavaScript는 나쁘게 하는 것을 허용함. 모든 것을 지적하지 않음.

  단지 실행하기 위해 최선을 다함. 심지어 그게 좋은 문법이 아니더라도.

  ```javascript
  a = 221
  b = a -5
  console.log(b)
  //이렇게 작성해도 실행 됨.
  ```

- 지켜야 할 것

  - 모든 명령어들은 다른 line

  - 끝에 ; 

  - 변수를 선언이나 초기화 할 때, let/var 작성.

    - let: 

  - Create -> Initialize -> Use

    ```javascript
    let a = 221;
    let b = a -5;
    a = 4;
    console.log(b, a);
    ```

  - 

































