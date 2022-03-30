const forText = document.querySelector('.for-text'),
	  forTextR = document.querySelector('.for-text-russia');

let wordsBD = [
	["а", 1],
	["б", 2],
	["в", 3],
	["г", 4],
	["д", 5],
	["е", 6],
	["ё", 7],
	["ж", 8],
	["з", 9],
	["и", 10],
	["й", 11],
	["к", 12],
	["л", 13],
	["м", 14],
	["н", 15],
	["о", 16],
	["п", 17],
	["р", 18],
	["с", 19],
	["т", 20],
	["у", 21],
	["ф", 22],
	["х", 23],
	["ц", 24],
	["ч", 25],
	["ш", 26],
	["щ", 27],
	["ъ", 28],
	["ы", 29],
	["ь", 30],
	["э", 31],
	["ю", 32],
	["я", 33],
	[" ", 34]
];

function go() {

	forText.innerHTML = '';

	let inp = document.querySelector('.inp').value;

	let smallText = inp.toLowerCase();

	for(let i = 0; i < inp.length; i++) {

		for(let d = 0; d < wordsBD.length; d++) {
			if(smallText[i] == wordsBD[d][0]) {
				forText.innerHTML += " " + wordsBD[d][1];
			}
		}

	}

}

let num = "";


function goPrev() {

	forTextR.innerHTML = '';

	let inp = document.querySelector('.inp-prev').value;

	for(let i = 0; i < inp.length; i++) {
		
		if(inp[i] == " ") {

			for(d = 0; d < wordsBD.length; d++)
			{
				if(wordsBD[d][1] == num) {
					forTextR.innerHTML += wordsBD[d][0];
				}
			}

			console.log('empty')

			num = "";

			
		} else {
			num += inp[i];

			console.log(num);
			if(i+1 == inp.length) {

				for(d = 0; d < wordsBD.length; d++)
				{
					if(wordsBD[d][1] == num) {
						forTextR.innerHTML += wordsBD[d][0];
					}
				}

			}
		}
	}

}