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