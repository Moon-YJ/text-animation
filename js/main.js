/*
  const h1 = document.querySelector('h1');
  const txt = h1.innerText;
  let tags = '';

  for (let letter of txt) {
    tags += `<span>${letter}</span>`;
  }

  h1.innerHTML = tags;
*/

splitText('h1');
splitText('h2');

function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';

	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
	}

	dom.innerHTML = tags;
}
