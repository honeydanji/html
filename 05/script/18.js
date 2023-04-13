// 회문체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value;

    // 입력내용이 없는 경우
    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요.'
        return;
    }

    // 입력내용이 있는 경우
    let rs = '';

    // 방법1
    // for (let i = s.length - 1; i >= 0; i--) {
    //     rs = rs + s[i] ;
    // }
    
    // 방법2 : 배열이용
    s = s.split('');    // 문자열.split()은 문자열을 분리자로 분리해서 배열로 출력한다. 
    s = s.reverse();    // 배열.reverse(): 배열의 요소를 뒤집어줌
    //rs = s.toString();  // 배열에 있는 요소들을 쉼표로 구분해서 출력한다.
    rs = s.join('');    // 배열.joint(): 배열의 요소를 문자열로 묶어줌. 
    console.log("s=",s, "rs =", rs);
    

    // 결과 확인
    if (t1.value == rs) {
        t2.value = "회문입니다."    //input 타입의 값을 받기 위해서는 value로 찍어야한다.
    }
    else {
        t2.value = "회문이 아닙니다."
    }
}

// 숫자 합계
const numSum = (t1, t2) => {
    let s = t1.value;   // form, input 같은 태그에서 값을 입력하기 위한 명령어는 value를 사용한다.

    //문자열 순회
    let sum = 0;

    for(let ch of s) {
        console.log(ch, isNaN(ch));
        if (isNaN(ch) == false) {
            sum += parseInt(ch);
        }
    }
    t2.value = sum;
}




document.addEventListener("DOMContentLoaded", () => { // 해당 부분(document)에 이벤트를 실행하기 위한 명령문. 
    const txt1 = document.querySelector("#txt1"); // 한개를 들고 올 떄는 id가 가장 적합하다.
    const txt2 = document.querySelector("#txt2"); // 들고온 id인 txt2를 txt2라는 변수에 저장한다.
    //const txts = document.querySelector("input[type = text]"); // input태그안에 text 타입을 가진 애들만 들고온다.

    const bts = document.querySelectorAll(".bt");   // class중에 bt인 것들만 들고와서 bts라는 변수에 저장한다.
    // querySelectorAll을 이용해 값을 변수에 저장하면 배열형태로 저장된다.


    //버틀배열에 클릭이벤트 작성
    for (let bt of bts) {        // for반복문을 이용해 변수 bts에 저장된 bt를 출력한다.
        console.log(bt);
        bt.addEventListener('click', (event) => { //출력된 bt에 click 이벤트를 addEventListener이용해 실행시킨다.
            event.preventDefault(); // click(FOME)을 사용하면 자동으로 페이지 새로고침이 되는데 이걸 방지하기 위해 사용하는 명령어다.
            // let gubun = bt.innerHTML;
            let gubun = bt.getAttribute('id').slice(2);  // id에 해당하고 -1에 위치한 문자열부터 시작한다. 
            if (gubun === '1') palindrome(txt1, txt2);   // if 조건문이 참이면 뒤에 함수가 호출된다. 인수를 위 함수에 넘겨준다.
            else numSum(txt1, txt2);                  // if문이 거짓이면 else 뒤에 함수가 호출된다. 각각의 함수는 따로 만들어주면 된다.
        });
    }
});


// 1. html문서에서 class, id, 태그 등 어떠한 유형이든 상관없이 들고와서 변수에 저장해서 사용해야한다.
// 2. form, input 같은 태그에서 값을 가져올 때는 value로 가져와야한다. 그 외 값들은 textcontent, 