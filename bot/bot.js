const { Telegraf } = require('telegraf');
const TOKEN = '6895324536:AAHc4ul28qzrPbBU11q7dsDOcnIQNTb9lsg';
const bot = new Telegraf(TOKEN);

const web_link = 'https://fabulous-marshmallow-8a49ec.netlify.app/';

bot.start((ctx) =>
  ctx.reply('Welcome!', {
    reply_markup: {
      keyboard: [[{ text: 'Open Webpage', web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
