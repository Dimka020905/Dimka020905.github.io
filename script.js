const input = document.querySelector('[data-result]'),
	clear = document.querySelector('[data-clear]'),
	back = document.querySelector('[data-back]'),
	copy = document.querySelector('[data-copy]');

const boxCopy = document.querySelector(".box-result-copy");
let timer;

function typing(letter) {
	input.value += letter;
}

clear.onclick = () => {
	input.value = "";
}

back.onclick = () => {
	let inp = document.querySelector('[data-result]').value;
	input.value = inp.substring(0, inp.length-1);
}

copy.onclick = () => {
	let inp = document.querySelector('[data-result]');
	inp.select();
	document.execCommand("copy");
	boxCopy.classList.remove('hide');
	boxCopy.classList.add('show');
	timer = setTimeout(() => {
		boxCopy.classList.remove('show');
		boxCopy.classList.add('hide');
		clearTimeout(timer);
	}, 2000)
}