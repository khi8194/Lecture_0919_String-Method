//전체 문자열에서 특정 문자값을 기준으로 분리해서 배열로 반환하는 내장함수
const span_text = document.querySelector("span").innerText;
console.log(span_text); //'2024-09-19'

const text_arr = span_text.split("-");
console.log(text_arr); //['2024','09','19];

//배열값은 특정 문자열로 이어서 하나의 문자열로 반환하는 함수
const new_text = text_arr.join(".");
console.log(new_text); //'2024.09.19'

//위의 split과 join을 한번에 연산처리
const h2_text = document.querySelector("h2").innerText;
const new_h2 = h2_text.split(" ").join("/");
console.log(new_h2);

//미션 - 위의 구문을 다음과 같은 형태의 함수로 패키징
//changeText('h2', ' ', '/')

// function changeText(el, spc1, spc2) {
// 	const el_text = document.querySelector(el).innerText;
// 	const new_el = el_text.split(spc1).join(spc2);
// 	console.log(new_el);
// }

function changeText(elem, spc1, spc2) {
	const el = document.querySelector(elem);
	//문자열.trim() : 문자열 앞뒤의 빈칸을 제거해서 정리
	const el_text = el.innerText.trim();
	// console.log(el_text);
	el.innerText = el_text.split(spc1).join(spc2);
}
changeText("span", "-", ".");
changeText("h2", " ", " / ");
changeText("h3", "_", "-");
