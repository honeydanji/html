document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');


    //단위표시
    d1.textContent = sel1.value;
    d2.textContent = sel2.value;

    //select 값이 변경될 때
    sel1.addEventListener('change', (event) => {
        t1.value = '';
        t2.value = '';
        if (sel1.value == '℃') {
            sel2.value = '℉';
        }
        else if (sel1.value == '℉') {
            sel2.value = '℃';
        }

        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });

    sel2.addEventListener('change', (event) => {
        d2.textContent = event.target.value;
        t1.value = '';
        t2.value = '';
        if (sel2.value == '℃') {
            sel1.value = '℉';
        }
        else if (sel2.value == '℉') {
            sel1.value = '℃';
        }
    });

    //input에 값이 입력 되었을 때
    t1.addEventListener('input', (event) => {
        if (sel1.value == sel2.value) {
            t2.value = t1.value;
        }
        else if (sel1.value == '℃' && sel2.value == '℉') {
            t2.value = (t1.value * 9 / 5) + 32;

        } else if (sel1.value == '℉' && sel2.value == '℃') {
            t2.value = (t1.value - 32) * (5 / 9);
        }
    });

});