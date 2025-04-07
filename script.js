// блок объявления переменных
const rollback = 10;

let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

// блок описания функций
const isNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function () {
	title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
	screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

	do {
		screenPrice = prompt("Сколько будет стоить данная работа?");
	} while (!isNumber(screenPrice));
	adaptive = confirm("Нужен ли адаптив на сайте?");
}

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
	if (price > 30000) {
		return "Даём скидку в 10%";
	} else if (price > 15000 && price <= 30000) {
		return "Даём скидку в 5%";
	} else if (price > 0 && price <= 15000) {
		return "Скидка не предусмотрена";
	} else if (price <= 0) {
		return "Что то пошло не так";
	}
}

const getAllServicePrices = function () {
	let sum = 0;
	let sumPrompt;
	for (let i = 0; i < 2; i++) {

		if (i === 0) {
			service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
		} else if (i === 1) {
			service2 = prompt("Какой дополнительный тип услуг нужен?", "Отправка форм");
		}

		do {
			sumPrompt = prompt("Сколько это будет стоить?");
		} while (!isNumber(sumPrompt));

		sum += sumPrompt * 1;
	}

	return sum
}

function getFullPrice(param1, param2) {
	return param1 * 1 + param2;
}

const getTitle = function (title) {
	title = title.trimStart();
	title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
	return title;
}

const getServicePercentPrices = function (param1, param2) {
	return param1 - param1 * (param2 / 100);
}

// блок функционала
asking();

screens = screens.toLocaleLowerCase();
screens = screens.split(", ")

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));

// блок вывода в консоль
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику: " + servicePercentPrice + " рублей");
