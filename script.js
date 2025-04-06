// блок объявления переменных
const rollback = 10;
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуг нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice;
let servicePercentPrice;
let allServicePrices;

// блок описания функций
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

const getAllServicePrices = function (param1, param2) {
	return param1 + param2;
}

function getFullPrice(param1, param2) {
	return param1 + param2;
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
screens = screens.toLocaleLowerCase();
screens = screens.split(", ")

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));

// блок вывода в консоль
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику: " + servicePercentPrice + " рублей");
