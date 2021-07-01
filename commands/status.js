module.exports = {
    name: 'status',
    description: "this is a staus command",
    execute(message, args){
        message.channel.send('The bot is online!').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.reply(`Bots current ping: **${ping}**ms`);
        })
    }
}