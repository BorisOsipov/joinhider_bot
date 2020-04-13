const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TG_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const deleteMessage = async (tgMessage) => {
    try {
        if (!tgMessage.new_chat_members) {
            await bot.deleteMessage(tgMessage.chat.id, tgMessage.message_id.toString());
            console.log(`delete join message ${tgMessage.chat.id}`)
        }
    } catch (e) {
        console.error(e);
    }
};

const deleteJoin = async (tgMessage) => {
    try {
        await bot.deleteMessage(tgMessage.chat.id, tgMessage.message_id.toString());
        console.log(`delete join ${tgMessage.chat.id}`)
    } catch (e) {
        console.error(e);
    }
};

bot.on('message', deleteMessage);
bot.on('new_chat_members', deleteJoin);
