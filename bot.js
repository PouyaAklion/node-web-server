const Telegraf = require('telegraf')

const bot = new Telegraf('775509785:AAE8JYePRfnNV9jEB1d7sPB4Vy9ktIxwzFo')
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('text', (ctx) => ctx.reply(ctx.message))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()