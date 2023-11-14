const main = document.querySelector('main');
const btns = main.querySelectorAll('.btns li');
const boxes = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0]); //인수로 h1 DOM 자체를 전달
splitText(tits[1]);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.currentTarget.classList.contains('on')) return;
		activation(btns, idx);
		activation(boxes, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

// DOM 자체를 인수로 받음
function splitText(el) {
	let tags = '';
	for (let letter of el.innerText) tags += `<span>${letter}</span>`;
	el.innerHTML = tags;
}
