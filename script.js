let money = document.querySelector('.money');
let btn = document.querySelector('.btn');

let Upgradebtn = document.querySelector('.UpgradeMoney');
let price = document.querySelector('.price');

let clickMoney = 1;
let counter = 0;
let upgradeCost = 10;

price.textContent = upgradeCost;

btn.addEventListener('click', () => {
    counter += clickMoney;
    money.textContent = counter + '$'; 
    updateUpgradeButton();
}); 

updateUpgradeButton();
updateUpgradeButton();

Upgradebtn.addEventListener('click', () => {

    if(counter >= upgradeCost) {
        counter = Math.floor(counter - upgradeCost);

        clickMoney *= 2;
        upgradeCost *= 3;
        textContent = 'Купить улучшение ';
        price.textContent = upgradeCost + '$'; 
        money.textContent = counter + '$';   
        updateUpgradeButton();
    }
});

function updateUpgradeButton() { // Проверка хватает ли деняг
    if (counter < upgradeCost) {
        Upgradebtn.style.backgroundColor = '#0d0e44'; // Недостаточно денег
        Upgradebtn.disabled = true; // Делаем кнопку неактивной
    } else {
        Upgradebtn.style.backgroundColor = ''; // Оставляем стандартный цвет кнопки
        Upgradebtn.disabled = false; // Активируем кнопку
    }
}









