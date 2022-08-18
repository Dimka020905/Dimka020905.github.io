let box = document.getElementsByClassName('box'),
    lvl = 0;

let counterClickeds = 0;
let currentClickeds = 0;

let elemTimer = document.querySelector("h2 p")

for(let i = 0; i < box.length; i++)
{
	box[i].setAttribute("onclick", "clickedBox(this)");
	box[i].setAttribute('style', 'pointer-events: none');
}	

const squareBot = [];
const squarePlayer = [];

let timerplayer;
let startGameCheck = false;

const infoLVL = [
	{
		lvl: 1,
		nums: 3,
		speed: 800
	},
	{
		lvl: 2,
		nums: 3,
		speed: 800			
	},
	{
		lvl: 3,
		nums: 3,
		speed: 800				
	},
	{
		lvl: 4,
		nums: 5,
		speed: 700
	},
	{
		lvl: 5,
		nums: 5,
		speed: 700			
	},
	{
		lvl: 6,
		nums: 5,
		speed: 600				
	},
	{
		lvl: 7,
		nums: 7,
		speed: 500				
	},
	{
		lvl: 8,
		nums: 8,
		speed: 500				
	},
	{
		lvl: 9,
		nums: 8,
		speed: 500				
	},
	{
		lvl: 10,
		nums: 8,
		speed: 400				
	},

]

function equalArrays(a,b) {

	if (a.length != b.length) return false;

	for(let i = 0; i < a.length; i++)
	{
		if (a[i] != b[i]) 
		{
			return false;
		}
	}
	return true;
}

function updateCounter(lvl)
{
	return document.querySelector('h3 p').innerHTML = lvl + 1
}

function clickedBox(e) {

	let number = e.dataset.number;
	currentClickeds += 1;
	squarePlayer.push(number)
	e.classList.add('active')

	if(currentClickeds >= counterClickeds)
	{
		setTimeout(() => {

			clearInterval(timerplayer)

			lvl += 1;
			console.log(equalArrays(squareBot, squarePlayer))
			if(equalArrays(squareBot, squarePlayer))
			{
				if(lvl > 9)
				{
					alert('Вы прошли игру.')
					return
				}
				startGame(lvl, infoLVL[lvl].nums)
			}
			else
			{
				lvl = 0
				alert("Вы проиграли(")
				showError(squareBot, squarePlayer)
				console.log(squareBot + " " + squarePlayer)
			}

			updateCounter(lvl)
			elemTimer.innerHTML = '10'

			squareBot.splice(0,squareBot.length);
			squarePlayer.splice(0,squarePlayer.length);
					
		}, 200)

		return;
	}
}

function showError(arr1, arr2)
{
	for(let i = 0; i < arr1.length; i++)
	{
		if(arr1[i] != arr2[i])
		{
			box[arr2[i]].classList.remove("active")
			box[arr2[i]].classList.add("error")

			if(!box[arr1[i]].classList.contains('active'))
			{
				box[arr1[i]].classList.add('trueColor')
			}
		}
	}
	setTimeout(() => {

		for(let i = 0; i < box.length; i++)
		{
			box[i].classList.remove("error")
			box[i].classList.remove('trueColor')
		}
		startGame(lvl, infoLVL[lvl].nums)

	}, 3000)
}

function startTimer() {

	let counter = 10;

	console.log("D")

	timerplayer = setInterval(() => {
		counter--
		elemTimer.innerHTML = counter;
		if(counter <= 0)
		{
			lvl = 0
			alert("Вы проиграли(")
			startGame(lvl, infoLVL[lvl].nums)
			updateCounter(lvl)
			elemTimer.innerHTML = '10'

			squareBot.splice(0,squareBot.length);
			squarePlayer.splice(0,squarePlayer.length);
			clearInterval(timerplayer)
		}
	}, 1000)
}

function startGame(level, numSquare)
{

	let controllerInterval = 1;
	let timer;
	let timerTwo;

	currentClickeds = 0;
	counterClickeds = 0;

	for(let i = 0; i < box.length; i++)
	{
		box[i].setAttribute('style', 'pointer-events: none');
	}


	const removeActive = () => {

		for(let i = 0; i < box.length; i++)
		{
			box[i].classList.remove('active')
		}
	}

	const removeId = () => {

		for(let i = 0; i < box.length; i++)
		{
			box[i].id = ''
		}
	}

	removeId();

	const clickSquard = () => {

		for(let i = 0; i < box.length; i++)
		{
			box[i].setAttribute('style', 'pointer-events: auto');
		}			
	}

	removeActive()

	timer = setInterval(() => {

		removeActive()

		if(controllerInterval > numSquare)
		{
			clickSquard();
			removeActive()
			startTimer();
			clearInterval(timer)
			return
		}

		controllerInterval++
		counterClickeds++;

		randomBox(box);

	}, infoLVL[level].speed)

	const randomBox = (elements) => {

		let array = [];

		for(let i = 0; i < box.length; i++)
		{
			if(box[i].id !== "closedSelect")
			{
				array.push(i)
			}
		}
		
		let resultRand = array[Math.floor(Math.random() * array.length)]

		squareBot.push(resultRand)

	 	box[resultRand].classList.add('active')

	 	box[resultRand].id = 'closedSelect';

	}

}

document.onkeydown = function key(e)
{
	if (e.keyCode == '32') {
		if(startGameCheck == false)
		{
			startGame(0, infoLVL[lvl].nums)
			startGameCheck = true
		}
	}
}

