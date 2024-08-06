const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '7455634774:AAGPUxTbytXL4c3GbrRFoYYV3f0xw-aR7qY';

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Привет')
})
