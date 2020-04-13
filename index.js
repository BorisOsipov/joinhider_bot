const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TG_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const deleteMessage = async (tgMessage) => {
    try {
        if (!tgMessage.new_chat_members) {
            await bot.deleteMessage(tgMessage.chat.id, tgMessage.message_id.toString());
        }
    } catch (e) {
        console.error(e);
    }
};

bot.on('message', deleteMessage);
