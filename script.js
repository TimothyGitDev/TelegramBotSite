let money = document.getElementById('money');
let btn = document.getElementById('btn');

let Upgradebtn = document.getElementById('UpgradeMoney');
let price = document.getElementById('price');

let Upgradebtn2 = document.getElementById('UpgradeMoney2');
let price2 = document.getElementById('price2');

let clickMoney = 1;
let counter = 0;
let upgradeCost = 10;

price.textContent = upgradeCost;

btn.addEventListener('click', () => {
    counter += clickMoney;
    money.textContent = counter + '$'; 
}); 



Upgradebtn.addEventListener('click', () => {

    if(counter >= upgradeCost) {
        counter = Math.floor(counter - upgradeCost);

        clickMoney *= 2;
        upgradeCost *= 3;
        textContent = 'Купить улучшение ';
        price.textContent = upgradeCost; 
        money.textContent = counter + '$';    
    }
});







