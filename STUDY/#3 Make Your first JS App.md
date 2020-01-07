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
  
- function init()함수에 시작할 함수들을 넣어두고 init()만 실행시켜서 할 수 있도록!!



#### #Making a JS Clock part Two

- **setInterval()**

  P1: 실행할 함수, P2: 그 함수를 실행하고 싶은 시간(실행간격)

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

- **querySelector** / **qeurySelectAll**- DOM을 찾는데 유용한 메서드

- ```javascript
  const form = document.querySelector(".js-form"),
      input = form.querySelector("input");
  ```

  ​	qeurySelector: 반환의 요소가 한개 인 경우- 선택자가 선택하는 요소의 첫번째 요소 반환

  ​	qeurySelectAll: 모든 요소들을 반환-클래스명에 따른 앨리먼트들을 가져오는데 이것은 array이를 줌.

- **Local Storage**: 작은 정보를 유저 컴퓨터에 저장하는 방법

  set 하면 새로고침을 해도 로컬 스토리지에 그대로 있음.
  
  ```javascript
  function saveName(text) {
      localStorage.setItem(USER_LS, text);
  }
  //USER_LS: key, text: value가 됨.
  ```
  
  

#### #Saving the User Name part Two

- form 태그는 user가 enter를 치면 초기화 됨(제출;submit)

  따라서 나는 이것을 막고, 내 이벤트를 주겠다 하면,

- ```javascript
  form.addEventListener("submit", handleSubmit);//submit 될때 handleSubmit실행
  
  function handleSubmit(event) {
      event.preventDefault();// 기본적인 event막아줌.
      const currentValue = input.value;
      paintGreeting(currentValue);
      saveName(currentValue);
      toDoForm.classList.add(SHOWING_CN);
  } 
  ```



####Making a To Do List Part One

- greeting과 비슷함.

  hiding과 showing을 갖지 않는 다는 점만 다름.

  ```javascript
  //localStorage에서 온 리스트
  function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);//localStorage에서 TODOS을 가져옴.
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function (toDo) {
        paintToDo(toDo.text);
      });
    }
  }
  ```

- querySelector -> HTML에서 필요한 것을 얻음

  **반대로 HTML에 필요한 뭔가를 생성하기 위해서는 document.createElement("ul")**

  appendChild: 그의 father element안에 뭔가를 추가하기 위해서.

  ```javascript
   function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
     //각각 li, button, span요소 만들음.
    const newId = toDos.length + 1;
  
    delBtn.innerText = "✂️";
    delBtn.addEventListener("click", deleteToDo);//버튼에 이벤트 추가
    span.innerText = text;
     
     //생성한 것들을 붙여줌!!
    li.appendChild(span);//appendChild!!
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
  
    const toDoObj = {
      text: text,
      id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
  }
  ```

  

#### #Making a To Do List part Two

- **local Storage에는 자바스크립트의 data를 저장할 수 없음**

  ```javascript
  function saveToDos(){
       localStorage.setItem(TODOS_LS, toDos);
   }
  //결과[object Object],[object Object],[object Object]
  //이런식으로 저장됨.
  ```

  **자바스크립트는 local Storage에 있는 모든 데이터를 string으로 저장하려고 하기 때문에 오직 String만 저장할 수 있음.**

  그래서 object가 string에 되도록 만들어야 함. 그걸 위해서 아주 좋은 트릭인 **JSON.stringfy**를 쓸것임

- **JSON.stringfy는 자바스크립트 object를 string으로 바꿔줌**

  ```javascript
  function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }
  ```

- **JSON(JavaScript Object Notation)**

  데이터를 전달할 때 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능

  그래서 자바스크립트의 object를 string으로 변환해주기도 하고 string을 object로 변환시켜 줄 수 있음

  ```javascript
   function loadToDos() {
     const loadedToDos = localStorage.getItem(TODOS_LS);
     if (loadedToDos !== null) {
         console.log(loadedToDos);
         const parsedToDos = JSON.parse(loadedToDos);//JSON형태로 반환해 parsedToDos에 저장
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
  function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      //JSON형태로 반환 받은 것을 1개씩 실행!! 자바의 for(int a : arr)와 비슷쓰!
      parsedToDos.forEach(function (toDo) {
        paintToDo(toDo.text);
      });
    }
  }
  ```



#### #Making a To Do List part Three

- local storage에서 to do하나를 지워야 하고, 그리고 저장해야 함.

- Delete child element MDN

  ​	Node.removechild(); 사용

- **filter** 함수는 array의 모든 아이템을 통해 함수를 실행하고 ture인 아이템들만 갖고 새로운 array를 만들어줌

  ```javascript
  const cleanToDos = toDos.filter(filterFn)
  
  function filterFn(toDo){
       return toDo.id === 1
  }
  ```

  cleanTodos와 filter가 하는 것은 filterFn이 체크된 아이템들의 array를 주는 것임.

  즉, filterFn조건에 맞는 함수들만 찾아서 cleanToDos에 저장‼️

  ```javascript
  function deleteToDo(event) {
    const btn = event.target;//event가 생긴 것 반환!
    const li = btn.parentNode;
    toDoList.removeChild(li);
  
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);//li.id = newId; 이렇게 id정해 줌
      //삭제 선택 되지 않은 것들로 cleanToDos를 새로 만들음!!
    });
    toDos = cleanToDos;//삭제된 리스트(update)된 리스트를 toDos에 저장
    saveToDos();
  }
  ```

- **filter/forEach 함수 중요**‼️

  - 이것들이 list에 있는 모든 item을 위한 함수를 실행시킴

  

#### #Image Background

- 만약 서버에서 이미지 다운 받는 것이라면

  ```javascript
  image.addEventListener("loadend",handleImgLoad);
  //이거 사용하면 이미지 다 다운받아지는 시점알 수 있음.
  //하지만 지금은 로컬에 저장되어 있은 이미지라서 사용할 수 없음!~
  ```

- ```javascript
  const body = document.querySelector("body");
  const IMG_NUMBER = 5;//현재 이미지 개수 --> 이것으로 random값을 만들어서 random이미지를 출력함!
  
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
    //IMG_NUMBER는 5 👉 범위는 0~4가 되어서 +1을 해줌!(위에서)
      return number;
  }
  
  function init(){
      const randomNumber = genRandom();
      paintImage(randomNumber);
  }
  
  init();
  ```
  
  

#### #Getting the Weather part One(Geolocation)

- 현재 위치 정보 읽는 방법

  ```javascript
  function askForCoords(){
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  }
  //웹 브라우저에서 승인을 물어봄!
  ```

- ```javascript
  const API_KEY = "92d535574f86e3834d553e34e15e9dba";//부여받은 key값
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
  
  

#### #Getting the weather part Two(API)

- https://openweathermap.org/current

- **API(Application Programming Interface)**는 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단

- 이런 웹사이트를 이용하면 (API를 제공하는) 해당 웹사이트를 통해 데이터를 얻을 수 있는데, 우리가 가져올 것은 데이터 뿐

  ​	즉, 이런 API는 특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해 고안된 것.

- 어떻게 JavaScript를 이용해서 특정 URL을 호출하는가?

  - Javascript는 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻을 수 있는데, 가져온 데이터를 **refresh없이도 웹사이트에 적용시킬 수 있음**
  - 예를 들어 날씨를 받아오는데 날씨가 변경 되었다 하더라도 새로고침 하지 않고 바로 알아서 적용이 됨.

- **fetch()**

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
  For temperature in Celsius use units=metric//여기!!!
  Temperature in Kelvin is used by default, no need to use units parameter in API call
  List of all API parameters with units openweathermap.org/weather-data
  ```
  
- **then()**함수

  언제 호출할거냐면 데이터가 우리한테 넘어왔을 때. 왜냐하면 데이터가 들어오는데시간이 걸리기 때문에.

  **then이 하는 역할은 기본적으로 함수를 호출하는 것이지만 데이터가 완전히 다 들어온 다음에 호출함.**

  ```javascript
  fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      )
          .then(function (response) {//fetch다 되면 실행
              return response.json();
          })
          .then(function (json) {//위에 함수가 다 실행되면 실행
              const temperature = json.main.temp;
              const place = json.name;
              const tweather = json.weather[0].description;
              console.log(`API: https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
              const weatherIcon = setWeatherIcon(tweather);
  
              weather.innerText = `${weatherIcon} ${temperature}° \n`;
              curLocation.innerText = `📍${place}`
          });
  //fetch -> json으로 -> 화면에 뿌려줌
  //이 과정을 앞에 순서가 완성 된 다음에 실행!!
  ```

  

#### #Conclusion(부제: 나의 느낀점)

- 대학교 2학년 웹프로그래밍 수업 이후 웹 프로젝트는 처음이다.
- 뭔가 제대로 javaScript를 사용해본거 같다.
- 모바일에 비해 실시간으로 화면을 실행시켜볼수 있다는 게 너무 빨라서 신기하고 좋았다.
- 하지만 html css가 어려웠다. 화면이 내맘대로 배치가 안돼서 애먹었다.
- 그래도 완성물을 보니까 뿌듯하다!
- 니꼴라스에게 감사하다~
- **VSC 정렬 단축키 : Shift + Option + F**