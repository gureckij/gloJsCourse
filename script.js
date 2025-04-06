let title;
let screens;
let screenPrice = 5;
let rollback = 10;
let fullPrice = 100;
let adaptive = true;

title = prompt("Как называется ваш проект?");
console.log(title);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

screens = prompt("Какие типы экранов нужно разработать?")
console.log(screens.length);

console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

screens = screens.toLocaleLowerCase();
screens = screens.split(", ")
console.log(screens);

console.log("Откат посреднику за работу: " + (fullPrice * (rollback / 100)) + "%");
