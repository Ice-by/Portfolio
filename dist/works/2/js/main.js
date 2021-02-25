
// Находим жлементы на странице
const tennerHours = document.querySelector('#tennerHours');
const oneHours = document.querySelector('#oneHours');

const tennerMinutes = document.querySelector('#tennerMinutes');
const oneMinutes = document.querySelector('#oneMinutes');

const tennerSeconds = document.querySelector('#tennerSeconds');
const oneSeconds = document.querySelector('#oneSeconds');

const overheadClock= document.querySelector('#overhead__clock');
const preloader= document.querySelector('#preloader');

// Делаем расчеты
const currentYear = new Date().getFullYear();

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);



function updateCounter() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Считаем часы, берем остаток от деления на 24 (остаток от дней, т.е. числа после запятой)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // Минут всего (остаток от деления на часы)
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // Секунд всего, далее остаток от преобразования в минуты, секунд осталось
    const secondsLeft = Math.floor(diff / 1000) % 60;    


    const hours = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    const minutes = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    const seconds = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    tennerHours.innerText = (hours.toString())[0];
    oneHours.innerText = (hours.toString())[1];

    tennerMinutes.innerText = (minutes.toString())[0];
    oneMinutes.innerText = (minutes.toString())[1];

    tennerSeconds.innerText = (seconds.toString())[0];
    oneSeconds.innerText = (seconds.toString())[1];
}

// Запускаем один раз ф-цию, чтоб не было при загрузке страницы пустых ячеек где цифры должны отображаться
updateCounter();

// Запускаем расчет 1 раз в секунду
setInterval(updateCounter, 1000);


// Работает прелоадер 1 сек, а потом 'появляем' скрытый изначально блок с часами:
setTimeout(function(){
    preloader.remove();
    overheadClock.style.display='flex';
}, 1000);
