## #3 Make your first JS App

#### #Making a JS Clock part One

- 문제를 나눠서 생각할 수 있도록!!

  ```javascript
  const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
  
  
  function getTime(){
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
  
  }
  
  function init(){
      getTime();
  }
  
  init();
  ```

  

#### #Making a JS Clock part Two

- setInterval()

  첫번째 인자는 실행할 함수, 두번째 함수는 그 함수를 실행하고 싶은 시간(실행간격)

  setInterval(fn, 1000)

- ```javascript
  const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
  
  
  function getTime(){
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
  
      clockTitle.innerText = `${
          hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
      }`
  
  }
  
  function init(){
      getTime();
      setInterval(getTime, 1000);
  
  
  }
  
  init();
  ```

  

#### #Saving the User Name part One

- 그 사람의 컴퓨터에 저장하기

- ```javascript
  const form = document.querySelector(".js-form"),
      input = form.querySelector("input");
  ```

  여러가지 방법이 있는데 하나는 쿼리 셀렉터, 이건 원하는 셀렉터를 다 가져와. 클래스 , css 방식으로.

  클래스 태그 아이디..

- 다른 방법은 쿼리 셀렉터  모든걸 가져옴. 쿼리 셀렉터는 찾은 첫번째것을 가져옴. 그러나 쿼리 셀렉터 올은 모든 것을 가져옴. 클래스 명에 따른 엘리먼트들을 가져오는데 이건 array를 줌. --> array 외부의 하나의 엘리먼트를 가져오는 게 귀찮아서 안씀

  왜냐면 찾은 것이 유일하게 하나의 클래스명이라고 해도 array안에 넣을 것이기 때문에 귀찮은 과정

- Local Storage: 작은 정보를 유저 컴퓨터에 저장하는 방법

  set 하면 새로고침을 해도 로컬 스토리지에 그대로 있음.

#### #Saving the User Name part Two

- form을 제출(submit) ->user가 enter를 치면 알아챔

- ```javascript
      event.preventDefault();
  //기본적인 event를 막아줌
  //보통 이벤트가 발생하면 root에서 일어나고, form에서 일어남. 이게 올라가면서 다른 모든 것들이 event에 반응함. form을 제출하는 event가 발생하면 event가 계속 위로 올라가. document까지. doucment는 다른 곳으로 감. 왜냐하면 이벤트는 프로그램 되어진대로 다시 가기 때문에. 
```
  

#### #Making a To Do List part One

- greeting과 비슷함

- hiding이랑 showing을 가지지 않는 다는 점만 다름.

- ```javascript
  //localStorage에서 온 리스트
  function loadToDos(){
      const toDos = localStorage.getItem(TODOS_LS);
      if(toDos !== null){
  
      }
  }
  ```

- querySelector -> HTML에서 필요한 것을 얻음

  반대로 HTML에 필요한 뭔가를 생성하기 위해서는 document.createElement("ul")

  ```javascript
   function paintToDo(text) {
       const li = document.createElement("li");
   }
  ```

- appendChild

  뭔가를 그의 father element안에 넣는 것

  ```javascript
  const toDoForm = document.querySelector(".js-toDoForm"),
     toDoInput = toDoForm.querySelector("input"),
     toDoList = document.querySelector(".js-toDoList");
  
   const TODOS_LS = "toDos";
  
   function paintToDo(text) {
       const li = document.createElement("li");
       const delBtn = document.createElement("button");
       delBtn.innerText = "❌";
       const span = document.createElement("span");
       span.innerText = text;
       li.appendChild(delBtn);
       li.appendChild(span);
       toDoList.appendChild(li);
  
   }
  
   function handleSubmit(event) {
     event.preventDefault();
     const currentValue = toDoInput.value;
     paintToDo(currentValue);
     toDoInput.value = "";
   }
  
   function loadToDos() {
     const toDos = localStorage.getItem(TODOS_LS);
     if (toDos !== null) {
     }
   }
  
   function init() {
     loadToDos();
     toDoForm.addEventListener("submit", handleSubmit);
   }
  
   init();
  ```

  

#### #Making a To Do List part Two

- local Storage에는 자바스크립트의 data를 저장할 수 없음

  ```javascript
  function saveToDos(){
       localStorage.setItem(TODOS_LS, toDos);
   }
  //결과[object Object],[object Object],[object Object]
  //이런식으로 저장됨.
  ```

  오직 string만 저장할 수 있음.

  자바스크립트는 local Storage에 있는 모든 데이터를 string으로 저장하려고 하기 때문에.

  그래서 object가 string에 되도록 만들어야 함. 그걸 위해서 아주 좋은 트릭인 JSON.stringfy를 쓸것임

- JSON.stringfy는 자바스크립트 object를 string으로 바꿔줌

  ```javascript
       localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  ```

- JSON(JavaScript Object Notation)

  데이터를 전달할 때 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능

  그래서 자바스크립트의 object를 string으로 변환해주기도 하고 string을 object로 변환시켜 줄 수 있음

  ```javascript
   function loadToDos() {
     const loadedToDos = localStorage.getItem(TODOS_LS);
     if (loadedToDos !== null) {
         console.log(loadedToDos);
         const parsedToDos = JSON.parse(loadedToDos);
         console.log(parsedToDos);
  
     }
   }
  ```

  ```
  //결과
  [{"text":"ㅗ디ㅣㅐ","id":1},{"text":"dldjf","id":2},
  
  {"text":"hele","id":3}]
  todo.js:46 
  (3) [{…}, {…}, {…}]
  0: {text: "ㅗ디ㅣㅐ", id: 1}
  1: {text: "dldjf", id: 2}
  2: {text: "hele", id: 3}
  length: 3
  __proto__: Array(0)
  ```

- 배열 forEach 함수

  ```javascript
  parsedToDos.forEach(function(toDo){
             paintToDo(toDo.text);
         });
  ```



#### #Making a To Do List part Three

- local storage에서 to do하나를 지워야 하고, 그리고 저장해야 함.

- 속해 있는 거 보고 싶을 때

  ```javascript
  console.dir(event.target)
  ```

- delete child element mdn

  ​	Node.removechild();

- filter는 array의 모든 아이템을 통해 함수를 실행하고 ture인 아이템들만 갖고 새로운 array를 만들어줌

  ```javascript
       const cleanToDos = toDos.filter(filterFn)
  
  
  function filterFn(toDo){
       return toDo.id === 1
  
  }
  ```

  cleanTodos와 filter가 하는 것은 filterFn이 체크된 아이템들의 array를 주는 것임.

- filter/forEach 함수 중요

  이것들이 list에 있는 모든 item을 위한 함수를 실행시킴

  

#### #Image Background

- 만약 서버에서 이미지 다운 받는 것이라면

  ```javascript
      image.addEventListener("loadend",handleImgLoad);
  //이거 사용하면 이미지 다 다운받아지는 시점알 수 있음.
  ```

- ```javascript
  const body = document.querySelector("body");
  
  const IMG_NUMBER = 5;
  
  function handleImgLoad(){
      console.log("ImageLoaded");
  }
  
  function paintImage(imgNumber){
      const image = new Image();
      image.src = `images/${imgNumber + 1}.jpg`;
      image.classList.add("bgImage");
      body.prepend(image);
  
  
  }
  
  function genRandom(){
      const number = Math.floor(Math.random() * IMG_NUMBER);
      return number;
  }
  function init(){
      const randomNumber = genRandom();
      paintImage(randomNumber);
  
  
  
  }
  
  init();
  ```

  

#### #Getting the Weather part One(Geolocation)

-  현재 위치 정보 읽는 방법

  ```javascript
  function askForCoords(){
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  }
  ```

- ```javascript
  const API_KEY = "92d535574f86e3834d553e34e15e9dba";
  const COORDS = "coords";
  
  
  function saveCoords(coordsObj){
      localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  
  }
  
  function handleGeoSucces(position){
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordsObj = {
          latitude,
          longitude
      };
  
      saveCoords(coordsObj);
  }
  
  function handleGeoError(){
      console.log("Cant access geo location");
  }
  
  function askForCoords(){
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  }
  
  function loadCoords(){
      const loadedCoords = localStorage.getItem(COORDS);
      if(loadedCoords === null){
          askForCoords();
      }else{
          //get Weather
      }
  }
  
  function init(){
      loadCoords();
  }
  
  
  init();
  ```

  

#### #Getting the weather par Two(API)

- https://openweathermap.org/current

- API(Application Programming Interface)는 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단

- 이런 웹사이트를 이용하면 (API를 제공하는) 해당 웹사이트를 통해 데이터를 얻을 수 있는데, 우리가 가져올 것은 데이터 뿐

- 즉 이런 API는 특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해 고안된 것.

- 어떻게 JavaScript를 이용해서 특정 URL을 호출하는가?

  - Javascript는 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻을 수 있는데, 가져온 데이터를 refresh없이도 웹사이트에 적용시킬 수 있음

- fetch()

  - fetch()안에는 가져올 데이터가 들어가면 됨. 

- API문서 보는 법 익히기

  ```
  //https://openweathermap.org/current#data
  //화씨를 섭씨 단위로 사용하고 싶음
  Units format
  Description:
  
  Standard, metric, and imperial units are available.
  
  Parameters:
  
  units metric, imperial. When you do not use units parameter, format is Standard by default.
  
  Temperature is available in Fahrenheit, Celsius and Kelvin units.
  
  For temperature in Fahrenheit use units=imperial
  For temperature in Celsius use units=metric
  Temperature in Kelvin is used by default, no need to use units parameter in API call
  List of all API parameters with units openweathermap.org/weather-data
  
  ```

- 함수 then()

  언제 호출할거냐면 데이터가 우리한테 넘어왔을 때. 왜냐하면 데이터가 들어오는데시간이 걸리기 때문에.

  then이 하는 역할은 기본적으로 함수를 호출하는 것이지만 데이터가 완전히 다 들어온 다음에 호출함.

  ```javascript
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      ).then(function(json){
          console.log(json);
      });
  
  //이 경우 fetch()가 다 되어야 then()실행
  ```

- VSC 정렬 단축키 : Shift + Option + F

#### #Conclusion