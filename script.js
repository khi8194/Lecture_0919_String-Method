console.log("Test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

const h3 = document.querySelector("h3");
console.log(h3.innerText.length);

const h3_text = h3.innerText;
//h3문자열을 0위치에서부터 50번째 위치까지 자른 뒤 자른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용
h3.innerText = h3_text.substring(0, 50);

//미션 - 조건문을 활용해서 h3에 들어가는 문자값이 50글자가 안되면 해당 문자를 그대로 출력하고 50글자가 넘어가면 50글자까지 자른 뒤 그 뒤에 ... 말줄임표 추가
const h4 = document.querySelector("h4");
console.log(h4.innerText.length);

const h4_text = h4.innerText;
h4.innerText = h4_text.substring(0, 50);
//이하 3가지 다 같은 출력을 갖는 코드
// if (h4_text.length > 50) {
// 	h4.innerText = h4_text.substring(0, 50) + "...";
// } else {
// 	h4.innerText = h4_text;
// }

// if (h4_text.length > 50) h4.innerText = h4_text.substring(0, 50) + "...";
// else h4.innerText = h4_text;

h4.innerText = h4_text.length > 30 ? h4_text.substring(0, 30) + "..." : h4_text;

//미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
//shortenText('h3'
