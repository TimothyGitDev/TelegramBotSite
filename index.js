const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '7455634774:AAGPUxTbytXL4c3GbrRFoYYV3f0xw-aR7qY';

const bot = new TelegramBot(TOKEN, {
    polling: true
});

let currentPuzzle = null;
let gameActive = false;
let winningNumber = null;



const Puzzles = [
    {
        question: 'Что можно приготовить, но нельзя съесть?',
        answer: 'Уроки'.toLowerCase()
    },
    {
        question: 'Отчего отплывает утка?',
        answer: 'От берега'.toLowerCase()
    },
    {
        question: 'Где вторник идёт раньше, чем понедельник?',
        answer: 'В словаре'.toLowerCase()
    },
    {
        question: 'Что всегда увеличивается и никогда не уменьшается?',
        answer: 'Возраст'.toLowerCase()
    },
    {
        question: 'Какая страна заканчивается тремя «я»?',
        answer: 'Австрия'.toLowerCase()
    }
];

const commands = [
    {
        command: 'start',
        description: 'Запуск бота'
    },
    {
        command: 'game1',
        description: 'Отгадай загадку!'
    },
    {
        command: 'game2',
        description: 'Отгадай число!'
    }
];

bot.setMyCommands(commands);

bot.on('message', (msg) => {
    console.log(msg);

    if (msg.text === '/game2') {
        if (gameActive) {
            return bot.sendMessage(msg.chat.id, 'Игра уже запущена!');
        }
    
        gameActive = true;
        winningNumber = Math.floor(Math.random() * 5) + 1; // Загадать число от 1 до 5
        bot.sendMessage(msg.chat.id, 'Игра началась! Бросайте кубик, используя стикер 🎲', {
            reply_markup: {
                force_reply: true,
              }
        });

    } else if (msg.text === '/game1') {
        const randomIndex = Math.floor(Math.random() * Puzzles.length);
        currentPuzzle = Puzzles[randomIndex];
        bot.sendMessage(msg.chat.id, currentPuzzle.question + ' - Ответ:', {
            reply_markup: {
                force_reply: true,
              }
        });
    } else if (currentPuzzle) {
        if (msg.text.toLowerCase() === currentPuzzle.answer.toLowerCase()) {
            bot.sendMessage(msg.chat.id, 'Правильно! Молодец! Игра закончена.', 
                
            );

            
            currentPuzzle = null; // Сбрасываем текущую загадку
        } else {
            bot.sendMessage(msg.chat.id, 'Неправильно! Попробуй еще раз. \nВаша Загадка: ' + currentPuzzle.question, {
                
                reply_markup: {
                    force_reply: true,
                  }
            });
        }
    }
});

// Обработка стикеров
bot.on('sticker', (msg) => {
    // Проверяем, что игра активна и стикер — это кубик
    if (gameActive) {
        const rollResult = Math.floor(Math.random() * 5) + 1;  // Результат броска
        bot.sendMessage(msg.chat.id, `Вы выбросили ${rollResult}.`); // Исправлено на шаблонные строки

        if (rollResult === winningNumber) {
            bot.sendMessage(msg.chat.id, `Поздравляем! 🎉 ${msg.from.first_name} стал победителем, выбросив ${winningNumber}!`);
            gameActive = false;  // Окончание игры
        }
    }
});
