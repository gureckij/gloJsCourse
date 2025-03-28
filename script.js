let title = "Название моего проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5;
let rollback = 10;
let fullPrice = 100;
let adaptive = true;

alert('Это тестовое модальное окно!');
console.log('Вывод сообщения в консоль!');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

screens = screens.toLocaleLowerCase();
screens = screens.split(", ")
console.log(screens);

console.log("Откат посреднику за работу: " + (fullPrice * (rollback / 100)) + "%");
