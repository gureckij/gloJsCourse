let title;
let screens;
let screenPrice;
let rollback = 10;
let fullPrice;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;

title = prompt("Как называется ваш проект?");
console.log(title);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

screens = prompt("Какие типы экранов нужно разработать?")
console.log(screens.length);

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log("Адаптив сайта " + adaptive);

screenPrice = prompt("Сколько будет стоить данная работа?")
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");

service1 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice1 = prompt("Сколько это будет стоить?");
console.log("Дополнительная услуга " + service1 + " по цене: " + servicePrice1);
service2 = prompt("Какой дополнительный тип услуг нужен?");
servicePrice2 = prompt("Сколько это будет стоить?");
console.log("Дополнительная услуга " + service2 + " по цене: " + servicePrice2);

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

screens = screens.toLocaleLowerCase();
screens = screens.split(", ")
console.log(screens);

console.log("Откат посреднику за работу: " + (fullPrice * (rollback / 100)));
