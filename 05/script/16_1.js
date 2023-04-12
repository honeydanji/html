document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded가 발생하면 펑션 안에 있는 것을 하겠다.
    const bt1 = document.querySelector('#bt1'); // html에 있는 bt1을 가져온다.

    bt1.addEventListener('click', () => {
        event.preventDefault();

        //랜덤수 생성
        let n = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".h2Class").innerHTML = `<img src='../img/${n}.png'>`; // innerHTML에 해당하는 경로가 기준이다.

        //사용자 입력 수 : 라디오의 체크값을 찾음
        let use; // user 변수
        const radios = document.querySelectorAll('input[type=radio]'); // 태그를 찾아온다. []를 사용하면 속성값을 찾을 수 있다.
        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.Value; break;
            }
        }


        //랜덤수와 사용자입력수 같은지 검사
        if (n === parseInt(user)) {
            document.querySelector('article h1').textContent = '주사위게임 : 일치(승)'
        }
        else {
            document.querySelector('article h1').textContent = '주사위게임 : 불일치(패)'
        }
    });
})
