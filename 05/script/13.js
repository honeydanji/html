//head에 있는 외부스크립트로 body에 있는 DOM 객체를 찾지 못해 오류가 난다.
//이를 막기 위해 script태그에 defer 속성 이용 하거나 addEventListener메서드 사용
// document.getElementById("h2id").innerHTML = "시작입니다.";


// function show() {
//     //alert("안녕하세요.");
//     event.preventDefault();
//     document.getElementById("h2id").innerHTML = "안녕하세요";
// }

// 랜덤수 생성
// function rand(max, min) {
//     max = Math.floor(max);
//     min = Math.ceil(min);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let ren = rand(6,1);
// console.log(ren);

// 화살표 함수
const show = () => {
    event.preventDefault();
    //랜덤수 생성(1~6)
    let n = Math.floor(Math.random() * 6) + 1;

    // document.querySelector("#h2id").innerHTML = "<img src='../images/"+ n +".png'>" ;
    // 백틱(`)문자열 변수 사용시 ${변수}로 사용
    // 이외에 setartribute를 이용해서 요소의 속성을 바꿀 수 있음
    document.querySelector("#h2id").innerHTML = `<img src='../../img/${n}.png'>`; 
}

// addEventListener는 어떠한 이벤트 발생시 동작
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2id").innerHTML = "시작입니다.";
// });


// 큰따옴표(") 작은따옴표(') 구분없이 사용 가능
document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("h2id").innerHTML = "시작입니다.";
    // document.querySelector(".h2Class").innerHTML = "클래스선택자:시작입니다.";

    // const bt = document.createElement('button');
    // bt.textContent = "확인";
    // document.getElementById('hdiv').append(bt);
});
