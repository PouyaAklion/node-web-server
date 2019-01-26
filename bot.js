const Telegraf = require('telegraf')
const env = require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('text', (ctx) => ctx.reply(ctx.message))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()