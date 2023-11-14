const main = document.querySelector('main');
const btns = main.querySelectorAll('.btns li');
const boxes = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0], 0.2); //인수로 h1 DOM 자체를 전달
splitText(tits[1], 0);

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
function splitText(el, interval) {
	let tags = '';
	let count = 0;
	for (let letter of el.innerText) {
		tags += `<span style='transition-delay:${interval * count}s;'>${letter}</span>`;
		count++;
	}
	el.innerHTML = tags;
}
