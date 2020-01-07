# #2

### #Your first JS Function

- yooInfo가 Object인 것 처럼 console도 Object임

  그래서 yooInfo.favFood 접근한 것 처럼 console.log이렇게 접근함.

- console이라는 Object가 있고 log라는 key가 있음(log는 function임)

  ```javascript
  console.log(console);
  ```

  ```
  //결과
  t {
    log: [Function],
    error: [Function],
    info: [Function],
    warn: [Function],
    dir: [Function],
    time: [Function],
    timeEnd: [Function],
    trace: [Function],
    assert: [Function],
    clear: [Function],
    stdout: { [Function] clear: [Function] },
    _times: {} }
  ```

- 이는 내장 함수(built -in -function)라고 함.

- 함수는 어떤 걸 수행하려는 한 부분.

  ```javascript
  function sayHello(name, age){
    console.log('Hello!', name, age, " years of age");
  }
  
  sayHello("Chaewon", 24);
  ```

  ```javascript
  function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
  }
  
  const greetChaewon = sayHello("chaewon", 14);
  console.log(greetChaewon);
  ```

  

### #More Fuction Fun

- 계산기

  ```javascript
  const calculator = {
    plus: function(a, b){
      return a + b;
    }
    
    minus: function(a, b){
      return a - b;
    }
  
    multi: function(a, b){
      return a * b;
    }
  
    div: function(a, b){
      return a / b;
    }
  }
  
  // console.log(greetingChaewon);
  const plus = calculator.plus(5, 5);
  console.log(plus)
  ```

  

### #JS DOM Function

-  html이 javascript와 함께쓰려면 어떻게 해야하는지

- **DOM**(Document Object Module)

  자바스크립트는 html에 있는 모든 요소를 가져와서 그걸 객체로 바꿔서 사용함.

  즉, 자바스크립트는 html태그를 가져다가 객체로 만들 수 있음.

  documet에 있는 모든 것은 객체가 될 수 있다는 말!

- 우리가 배울 모든 함수들과 우리가 찾게 될 모든 객체들의 함수 DOM형태로 변경 가능함.

  ```javascript
  //이런식으로!
  const title = document.getElementById("title");
  title.innerHTML = "Hi, From JS";
  ```



### #Modifying the DOM with JS

- html을 이 Dom객체로 바꿀 수 있다는 것을 배웠음.

- 이제 우리가 원하는 것은 title에서 너가 가진 모든 가능성에 대해서 배우는 것.

  ```javascript
  const title = document.getElementById("title");
  title.innerHTML = "Hi, From JS";
  title.style.color = "red";
  
  document.title = "I own you now";
  console.dir(document);
  
  ```

- querySelector: 노드의 첫번째 자식을 반환함. 그 의미는 document에 가서 모든 자식들을 찾으려고 할 것임. 

  ```javascript
  const title = document.querySelector("#title");
  title.innerHTML = "Hi, From JS";
  title.style.color = "red";
  ```

  

### #Events and Event handlers

- 자바스크립트는 이벤트에 반응하기 위해서 만들어짐.

- 이벤트: 웹사이트에서 발생하는 것들. Click , input change, load, Print 등

- 이런 이벤트들을 중간에 가로챌 수 있음. 

  ```javascript
  function handleResize(){
      console.log("I Have been resized")//사이즈 변경 될때마다 콘솔 로그 출력
  }
  window.addEventListener("resize", handleResize);
  //**중요**
  //여기서 window.addEventListener("resize", handleResize());이렇게 하지 않도록!
  //handleResize()하는 것은 지금 바로 함수를 호출하는 것. 
  //handleResize로 부르면 호출 할 때 불려짐. 즉, 윈도우 사이즈 변경될 때 함수가 호출됨. 
  ```

- ```javascript
  //window사이즈 조절할 때마다 event출력
  function handleResize(event){
      console.log(event);//사이즈 변경될 때마다 이벤트 불림
  }
  window.addEventListener("resize", handleResize);
  //event는 어디서 온거?
  //자바스크립트로 부터 옴. 이벤트를 다룰 함수를 만들때마다 자바스크립트는 자동적으로 함수에 객체를 붙혀줌.
  ```
  
```javascript
  //title을 누르면 title 색이 blue로 바뀌도록.
  function handleClick(){
      title.style.color = "blue";
  }
  title.addEventListener("click", handleClick);
  ```
  


### #if, else, and, or

```javascript
if(10 === 5){
    console.log("hi");
}else{
    console.log("ho");
}
```

```javascript
const age = prompt("How old are you");

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
}else if(age> 21){
    console.log("go ahead");
}else{
    console.log("too young");
}
```



### #DOM - if else -Function practice

- title을 누를 때 마다 color바뀌도록

  ```javascript
  const title = document.querySelector("#title");
  
  const BASE_COLOR = "rgb(52, 73, 94)";
  const OTHER_COLOR = "#7f8c8d"
  
  function handleClick(){
      const currentColor = title.style.color;
      if(currentColor === BASE_COLOR){
          title.style.color = OTHER_COLOR;
      }else{
          title.style.color = BASE_COLOR;
      }
  }
  
  function init(){
      title.style.color = BASE_COLOR;
      title.addEventListener("click", handleClick);
  }
  
  init();
  ```
  
- HTML Javascript DOM event MDN

  https://developer.mozilla.org/ko/docs/Web/Events

  MDN을 보기!! -> 모든 발생하는 이벤트들을 보여줌.

  ```javascript
  function handleOffline(){
      console.log("Bye-bye")
  }
  
  function handleOnline(){
      console.log("WelcomBack!")
  }
  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
  ```

  

### #DOM - if else - Function practice part Two

- 자바스크립트에서 css를 작업하는 것은 별로 추천하지 않는 방법

  분리하는 것이 좋다❗️

  **html은 html에서 css는 css에서, 자바스크립트는 로직을 처리하도록.** 

  자바스크립트가 웹사이트의 스타일을 처리하는 것을 원치 않음. 

- ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Hello World</title>
      <link rel = "stylesheet" href = "index.css"/>
  
    </head>
    <body>
      <h1 id = "title" class="clicked"> This works!</h1>
      <script src = "index.js"></script>
    </body>
  </html>
  ```

  ```css
  body{
    background-color: #ecf0f1;
  }
  
  h1{
      color: #34495e;
      transition: color 0.5s ease-in-out;
  }
  
  .clicked{
      color: #7f8c8d;
      /* color: red; */
  }
  ```

  ```javascript
  const title = document.querySelector("#title");
  const CLICKED_CLASS = "clicked";
  
  function handleClick(){
      const currentClass = title.className;
      if(currentClass !== CLICKED_CLASS){
          title.className = CLICKED_CLASS;
      }else{
          title.className = "";
      }
  }
  
  
  function init(){
      title.addEventListener("click", handleClick);
  }
  
  init();
  ```

  - 위에서 클릭시마다 태그의 색상을 바뀌게 하는 것이 아니라, 클릭이라는 class에 색상을 주어서 바뀌게 함.

  - **즉, 할일을 분리 해 둠**. js에서 직접 html을 건드는 것이 아니라 class 라는 것을 통해
  
    (📌이부분 신경쓰면서 코딩 해야겠다!!! 쉽게 하다 보면 지키지 못할 것만 같은 기분!!📌)
  
    ```
    //html
    <h1 id = "title" class="clicked"> This works!</h1>
    
    //css
    .clicked{
        color: #7f8c8d;
    }
  
    //javascript
  const CLICKED_CLASS = "clicked";
    title.className = CLICKED_CLASS;
  or
    title.className = "";
  ```
  
  - 하지만 js에서 title.className = CLICKED_CLASS로 할 때 문제점 있음
  
    하나의 클래스로 대치 됨. 독재자처럼!
  
  - 그래서 **title.classList.add()**이렇게 해줌.
  
    ```javascript
    const title = document.querySelector("#title");
    const CLICKED_CLASS = "clicked";
    
    function handleClick(){
        const hasClass = title.classList.contains(CLICKED_CLASS);
        if(hasClass){
            title.classList.remove(CLICKED_CLASS);
        }else{
            title.classList.add(CLICKED_CLASS);
        }
    }
    
  function init(){
        title.addEventListener("click", handleClick);
  }
    
    init();
    ```
    
  //더 간단히
    
  ```javascript
    const title = document.querySelector("#title");
    const CLICKED_CLASS = "clicked";
    
    function handleClick(){
        //toggle: 클래스가 있는지 체크해서 없으면 add 있으면 remove해주는 함수
        title.classList.toggle(CLICKED_CLASS);
    }
    
    function init(){
      title.addEventListener("click", handleClick);
    }
    
    init();
    ```
    
