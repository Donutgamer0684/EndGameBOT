module.exports = {
    name: 'ping',
    description: "this is a ping command shows the bot ping yuh",
    execute(message, args){
        message.channel.send('calculating the bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.edit(`Bots current ping: **${ping}**ms`);
        })
    }
}