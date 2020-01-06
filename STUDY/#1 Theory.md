# #1 Theory

### #Why JS

- 자바스크립트는 웹브라우저 위에서 동작하는 언어
- 자바스크립트는 웹에 쓰이는 하나뿐인 프로그래밍 언어
  - 즉, 웹에서 웹사이트를 만들고 싶을 때 쓸 수 있는 것은 자바스크립트 뿐임.
  - Back-end는 언어가 많음 (ex. 파이썬, 루비 등)
  - 하지만 **프론트를 한다면 JavaScript가 유일**



### #Super Powers of JS

- JavaScript를 대체할 수 있는 언어는 없다!
- 웹사이트, 앱, 비디오 게임을 만들때, 리얼타임 앱을 만들 때 모두 사용 할 수 있음.



### #ES3, ES6 ESWTF?

- JavaScript의 Version을 말함.

- Javascript에 ECMAScript: specification같은 거로 보면 됨.

  - ES5는 ECMAScript5와 동일(뒤에 숫자는 버전을 말함.)

  - JavaScript의 Specification?

    JavaScript는 꽤나 중앙 집중화 되어 있어서 누군가 업데이트를 하면 모든 브라우저에서 작동을 하게 됨. 따라서 이 것은 체계 메뉴얼 같은 것임. 이런것을 사용하면 브라우저에 이런게 나온 다 등.

- 브라우저(크롬, 사파리 등)가 하는 일은 specification을 받아서 자기들 방식으로 실행시킴. 

- 바닐라 자바스크립트란?

  -  JavaScript의 한 종류로 Library가 없는 것을 말함. 즉 날것의 JavaScript

- **정리**: JavaScript는 언어, ECMAScript는 Specification



### #VanillaJS

- 바닐라 자바스크립트는 브라우저를 통해 우리에게 제공된 JavaScript
- Framework/Library같은 거 다 뺀 쌩 JavaScript
- 즉, 매우 빠름!



### #Hello World with JavaScript

- 실습환경: Repl.it

- html(화면 구성) / CSS(화면 디자인) / JS(화면 동작)

- JS파일은 항상 Body 아래, 제일 마지막에 추가해야함.

- 모든 브라우저에는 JavaScript가 설치되어 있음. --> 설치 안해도 됨!

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

- Javascript는 다른 언어랑 얼마나 달라? 

  ​	JavaScript를배우면 모든 언어의 컨셉을 할 수 있음.



### #Your first JS Variable

- ##### Variables

  변수, Something that changes or they can be changed

- JavaScript는 나쁘게 하는 것을 허용함. 

  모든 것을 지적하지 않지 않고, 좋은 문법이 아니더라고 실행하기 위해서 최선을 다함.

  ```javascript
  a = 221
  b = a -5
  console.log(b)
  //이렇게 작성해도 실행 됨.
  ```

- 지켜야 할 것

  - 모든 명령어들은 다른 line

  - 끝에 ';'

  - 변수를 선언이나 초기화 할 때, let/var 작성.

  - Create -> Initialize -> Use

    ```javascript
  let a = 221;
    let b = a -5;
    a = 4;
    console.log(b, a);
    ```



### # let, const, var

- 변수의 값을 바꾸고 싶지 않을 때, **const** 사용

- **const**는 constant, 즉 **상수**는 변하지 않음.

- ```javascript
  const a = 221;
  a = 4;//TypeError: Assignment to constant variable
  ```

  ​	**에러를 읽으려고 시도해야함!** --> 상수에는 대입을 할 수 없음.
  
- 변수가 바뀌어도 된다면 **let**을 사용. 변수가 바뀌는 것을 허용

- let만 이 값을 다른 값으로 바꿀 수 있고 const는 그렇지 않음.

- **var** 은 variable

  - var의 문제는 많지 않음.
  - let 을 쓴 것처럼 var의 값을 바꿀 수 있음.
  - **3년 전에는 var만 쓸수 있었음. const 와 let이 없었음**
  - **따라서 변하는 값은 let, 변하지 않는 값은 const에 저장하도록**



### #Data Types on JS

- 변수를 선언할때는 기본적으로 const를 쓰도록.  필요할 때까지 let을 사용하지마‼️

  진짜 필요할때만 let을 사용하도록.

  ```javascript
  //String
  const what = "chaewon"
  
  //Boolean
  const what = true;
  
  //Number
  const what = 444;
  
  //Float
  const what = 55.1;
  ```

  

### #Oranizing Data with Arrays

- 자바스크립트에서 어떻게 데이터를 정렬하는지.
- Array/ Object
- Array는 리스트처럼 데이터를 저장하는 것.

- 변수명 규칙: Camel case - 낙타 등이 구불한거 처럼

  - 항상 소문자로 시작하고 스페이스가 필요하면 다음 단어에 대문를 넣어주는 것.
  - ex) dayOfWeek 

- Array

  ```javascript
  //Array
  const monday = "Mon"
  const tue = "Tue"
  const wed = "Wed"
  const thu = "Thu"
  const fri = "Fri"
  
  console.log(monday, tue, wed, thu, fri);
  //효과적이지 않음 -> 하나로 묶을 수 있음
  
  const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];
  console.log(dayOfWeek);
  console.log(dayOfWeek[1]);
  ```

  ```
  //결과
  Mon Tue Wed Thu Fri
  [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', true ]
  Tue
  ```



### #Organizing Data with Objects

- Object 와 Array의 다른점은

  **Object에는 각 value에 이름을 줄 수 있다는 것.**

- ```javascript
  const chaewonInfo = ["Chaewon", "24", true, "Seoul"];
  //배열 효율적이지 못함 --> 어떤게 이름인지 모름
  
  const yooInfo = {
    name: "Chaewon",
    age:24,
    gender:"Female",
    isHandsome:true
  }
  
  console.log(yooInfo);
  console.log(yooInfo.name);
  yooInfo.gender = "Male";
  ```

- 만약 DB에서 가져온 리스트 데이터라면, Array를 선택하고, 

  만약 데이터를 합쳐서 만들어야 한다면, 많은 사람들을 Array로 만들려면 chaewonInfo를 array로 해야 할 것임.

  즉, 섞어서쓸 수 있음 --> Object를 Array에 넣을 수 있음.

  ```javascript
  const yooInfo = {
    name: "Chaewon",
    age:24,
    gender:"Female",
    isHandsome:true,
    favMovies: ["Along the gods", "LOTR"],
    favFood: [
      {name:"Kimchi",
       fatty: false},
      {name:"burger",
       fatty: true
      }
    ]
  }
  
  console.log(yooInfo);
  ```

- JS가 말썽이어도 HTML/CSS와는 상관 없음 -> HTML/CSS제대로 작동함
