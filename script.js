let money = document.getElementById('money');
let btn = document.getElementById('btn');

let Upgradebtn = document.getElementById('UpgradeMoney');
let price = document.getElementById('price');

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
        Upgradebtn.textContent = 'Купить улучшение ' + upgradeCost; 
        money.textContent = counter + '$';    
    }
});



