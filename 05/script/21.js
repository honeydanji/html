document.addEventListener('DOMContentLoaded', () => {
    const boxDt = document.querySelector('#boxDt');
    
    boxDt.addEventListener('change', () => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + boxDt.value.replaceAll('-',''); // input에서 가져온 값을 url주소에 대입한다. 
        
        fetch(url)  //서버에 요청후에 결과를 .then()으로 넘긴다.
            .then((resp) => resp.json()) // jason파일을 받으면 then  // resp를 json형태로 변환
            .then((data) => {
                let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
                let boxTag = '';
                for (let box of boxlist) {
                    console.log(box.movieNm, box.rank, box.salesAmt, box.rankInten);

                    boxTag = boxTag + '<details>';
                    boxTag = boxTag + `<summary> ${box.movieNm} </summary>`;
                    boxTag = boxTag + `<ul>`;
                    boxTag = boxTag + `<li>순위 : ${box.rank} </li>`;
                    boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()} </li>`;
                    boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten} </li>`;
                    boxTag = boxTag + `</ul>`;
                    boxTag = boxTag + `</details>`;
                }
                console.log(boxTag);
                document.querySelector('#boxDiv').innerHTML = boxTag;
            })
            .catch((error) => { // 통신오류가 발생했을 때는 catch
                console.log(error);
            })      
            ;

    });
})