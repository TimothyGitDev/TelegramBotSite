let money = document.querySelector('.money');
let btn = document.querySelector('.btn');

let Upgradebtn = document.querySelector('.UpgradeMoney');
let price = document.querySelector('.price');
let CounterMoney = document.getElementById('ClickMoney');

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

Upgradebtn.addEventListener('click', function UpgradeMoney() {

    if(counter >= upgradeCost) {
        counter = Math.floor(counter - upgradeCost);

        clickMoney *= 2;
        upgradeCost *= 3;
        textContent = 'Купить улучшение ';
        price.textContent = upgradeCost + '$'; 
        money.textContent = counter + '$';   

        CounterMoney.textContent = 'Доход за клик: ' + clickMoney + '$';
        updateUpgradeButton();
    }
});

function updateUpgradeButton() { 
    if (counter < upgradeCost) {
        Upgradebtn.style.backgroundColor = '#0d0e44'; 
        Upgradebtn.disabled = true; 
    } else {
        Upgradebtn.style.backgroundColor = ''; 
        Upgradebtn.disabled = false; 
    }
}

// Animations

function AnimBtn() {
    money.classList.toggle('anim');
    btn.classList.toggle('animBtn');

    setTimeout(() => {
        btn.classList.remove("animBtn"); 
    }, 300); 

    setTimeout(() => {
        money.classList.remove("anim"); 
    }, 300); 
}










