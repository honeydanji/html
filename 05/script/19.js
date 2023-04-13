



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
    btReset.addEventListener('click', () => {
        txt1.value ='';
        arr = [];
    })

    // 배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (event) => {
            event.preventDefault();
            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍅')
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

    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', () => { });
    }

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', () => { });
    }
})