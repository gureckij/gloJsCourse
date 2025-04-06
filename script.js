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
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

// блок функционала
screens = screens.toLocaleLowerCase();
screens = screens.split(", ")

if (fullPrice > 30000) {
	console.log("Даём скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
	console.log("Даём скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
	console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
	console.log("Что то пошло не так");
}

// блок вывода в консоль
console.log(title);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Адаптив сайта " + adaptive);
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Дополнительная услуга " + service1 + " по цене: " + servicePrice1);
console.log("Дополнительная услуга " + service2 + " по цене: " + servicePrice2);
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens);
console.log("Откат посреднику за работу: " + (fullPrice * (rollback / 100)));
console.log("Итоговая стоимость за вычетом отката посреднику: " + servicePercentPrice + " рублей");
