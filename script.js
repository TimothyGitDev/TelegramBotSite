let money = document.getElementById('money');
let btn = document.getElementById('btn');

let counter = 0;
btn.addEventListener('click', function() {
    counter++;
    money.textContent = counter + '$';
});