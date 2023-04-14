//배열 filter 구현
const myFilter = (item) => {

}


document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset")
    const txt1 = document.querySelector("#txt1");

    // 배열 초기화
    let arr = [];

    // 버튼 이벤트 추가
    // reset기능 구현
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';
        arr = [];
    })

    // 배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (event) => {
            event.preventDefault();
            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍎') // push : 자료추가
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;
            }
            //txt1.value = arr.toString();
            txt1.value = arr.join('');
        });
    }

    // 배열에 자료 삭제
    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = cbt2.textContent.replace('삭제', '');

            let temp = [];
            for (let item of arr) {
                switch (gubun) {
                    case '사과':
                        if (item != '🍎') temp.push(item);
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;
                }
            }
            arr = temp;

            // arr = myFilter(gubun);  //myFilter함수를 만들어 리턴받아서 arr에 저장할 것.
            // switch (gubun) {
            //     case '사과':
            //         arr = arr.filter((item) => item != '🍎'); 
            //         break;
            //     case '바나나':
            //         arr = arr.filter((item) => item != '🍌');
            //         break;
            //     case '오렌지':
            //         arr = arr.filter((item) =>  item != '🍊');
            //         break;
            //     case '수박':
            //         arr = arr.filter((item) => item != '🍉');
            //         break;
            // }
            //txt1.value = arr.toString();
            txt1.value = arr.join('');
        });
    }

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = cbt3.textContent.split('->')[0].trim(); // .trim() : 앞뒤 공백을 제거해준다.
            console.log(gubun)

            // let temp = [];
            // for (let item of arr) {
            //     switch (gubun) {
            //         case '사과':
            //             if (item == '🍎') temp.push('🥕');
            //             else temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item == '🍌') temp.push('🥒');
            //             else temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item == '🍊') temp.push('🥑');
            //             else temp.push(item);
            //             break;
            //         case '수박':
            //             if (item == '🍉') temp.push('🥦');
            //             else temp.push(item);
            //             break;
            //     }
            // }

            // map
            switch (gubun) {
                case '사과':
                    arr = arr.map((item) => item == '🍎'? '🥕' : item);
                    break;
                case '바나나':
                    arr = arr.map((item) => item == '🍌'? '🥒' : item);
                    break;
                case '오렌지':
                    arr = arr.map((item) => item == '🍊'? '🥑' : item);
                    break;
                case '수박':
                    arr = arr.map((item) => item == '🍉'? '🥦' : item);
                    break;
            }

            //문자열 방법
            //temp = arr
        
            txt1.value = arr.join('');
        });
    }
})