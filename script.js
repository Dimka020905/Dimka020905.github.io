const menu = document.querySelector('.menu'),
	  close = document.querySelector('#close'),
	  numberCasino = document.querySelector('.numberCasino'),
	  info = document.querySelector('.info-bet'),
	  lastBet = document.querySelector('.last-bet'),
	  money = document.querySelector('.money');

let playerBet = '',
	playerGame = 0,
	stopTimer = 0,
	timer,
	color = '',
	moneyPlayer = 15000;

function bet(num) {

	if(playerGame > 0) return alert('Игра уже запущена.');

	playerBet = num;
	
	menu.style.display = 'block';
}

close.onclick = () => {

	menu.style.display = 'none';

}

const numberRed = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];

const numberBlack = ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35'];

const number3to1One = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'];

const number3to1Two = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'];

const number3to1Three = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'];

setInterval(() => {

	money.innerHTML = moneyPlayer;

}, 50);

function start() {

	let summa = document.querySelector('.summ').value;

	if(summa < 1000) return alert('Сумма ставки не может быть меньше 1000.');

	if(moneyPlayer == 0) return alert('Не хватает денег.');

	if(playerGame > 0) return alert('Игра уже запущена.');

	if(summa > moneyPlayer) return alert('У вас нет таких денег.');

	console.log(summa);

	menu.style.display = 'none';

	playerGame = 1;

	moneyPlayer -= summa;

	const even = n => !(n % 2);

	timer = setInterval(function() {

		let rand = Math.floor(Math.random() * 36);

		numberCasino.innerHTML = rand;

		stopTimer += 1;

		if(stopTimer >= 150) {

			numberCasino.innerHTML = '---';

			playerGame = 0;

			stopTimer = 0;


			if(rand >= 1 && rand <= 12) {
				
				if(playerBet == '1st12' || playerBet == '2nd12' || playerBet == '3rd12' || playerBet == '3to1One' || playerBet == '3toTwo' || playerBet == '3toThree' || playerBet == 'ood' || playerBet == 'even' || playerBet == 'black' || playerBet == 'red'|| playerBet == '1to18' || playerBet == '19to36')
				{
					if(playerBet == '1st12') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
					}

					if(playerBet == '1to18') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
					}

				} else {
					if(playerBet == rand) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*35;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}

				if(playerBet == '2nd12' || playerBet == '3rd12' || playerBet == '19to36') {
					info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
				}

			}
			if(rand >= 13 && rand <= 24) {
				
				if(playerBet == '1st12' || playerBet == '2nd12' || playerBet == '3rd12' || playerBet == '3to1One' || playerBet == '3toTwo' || playerBet == '3toThree' || playerBet == 'ood' || playerBet == 'even' || playerBet == 'black' || playerBet == 'red'|| playerBet == '1to18' || playerBet == '19to36')
				{
					if(playerBet == '2nd12') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
					}

					if(playerBet == '1to18') {
						if(rand >= 13 && rand <= 18) {
							info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
							moneyPlayer += summa*2;
						} else {
							info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
						}

					}	
					if(playerBet == '19to36') {
						if(rand >= 19 && rand <= 36) {
							info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
							moneyPlayer += summa*2;
						} else {
							info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
						}

					}

				} else {
					if(playerBet == rand) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*35;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}

				if(playerBet == '1st12' || playerBet == '3rd12') {
					info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
				}

			}

			if(rand >= 25 && rand <= 36) {
				
				if(playerBet == '1st12' || playerBet == '2nd12' || playerBet == '3rd12' || playerBet == '3to1One' || playerBet == '3toTwo' || playerBet == '3toThree' || playerBet == 'ood' || playerBet == 'even' || playerBet == 'black' || playerBet == 'red'|| playerBet == '1to18' || playerBet == '19to36')
				{
					if(playerBet == '3rd12') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
					}

					if(playerBet == '19to36') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
					}

				} else {
					if(playerBet == rand) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*35;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}

				if(playerBet == '2nd12' || playerBet == '1st12' || playerBet == '1to18') {
					info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
				}

			}


			if(rand != 0) {
				if(even(rand)) {
					if(playerBet == 'even') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
					} else if(playerBet == 'ood') {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				} else {
					if(playerBet == 'ood') {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
					} else if(playerBet == 'even') {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}			
				}
			}


			if(playerBet == 'red') {

				for(let i = 0; i < numberRed.length; i++) {
					if(rand == numberRed[i]) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
						color = 'красное';
						break;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
						color = 'черное';
					}
				}

			}
			if(playerBet == 'black') {

				for(let i = 0; i < numberBlack.length; i++) {
					if(rand == numberBlack[i]) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*2;
						color = 'черное';
						break;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
						color = 'красное';
					}
				}

			}
			if(playerBet == '3to1One') {

				for(let i = 0; i < number3to1One.length; i++) {
					if(rand == number3to1One[i]) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
						break;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}
				
			}
			if(playerBet == '3to1Two') {

				for(let i = 0; i < number3to1Two.length; i++) {
					if(rand == number3to1Two[i]) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
						break;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}
				
			}
			if(playerBet == '3to1Three') {

				for(let i = 0; i < number3to1Three.length; i++) {
					if(rand == number3to1Three[i]) {
						info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
						moneyPlayer += summa*3;
						break;
					} else {
						info.innerHTML = 'Ваша ставка ' + playerBet + " проиграла";
					}
				}
				
			}

			for(let i = 0; i < numberBlack.length; i++) {
				if(rand == numberBlack[i]) {
					color = 'черное';
					break;
				} else {
					color = 'красное';
				}
			}

			if(rand == 0) {
				if(playerBet == '0') {
					info.innerHTML = 'Ваша ставка ' + playerBet + ' победила';
					moneyPlayer += summa*35;
					color = 'зелёный';
				}
				color = 'зелёный';
			}

			lastBet.innerHTML = rand + " " + color;

			color = '';

			clearInterval(timer);

		}

	}, 100);

}