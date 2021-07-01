module.exports = {
    name: 'invite',
    description: "this is a invite command",
    execute(message, args){
        message.channel.send('This is the bot invite! https://discord.com/oauth2/authorize?client_id=840440820917862440&scope=bot&permissions=8589934591');
    }
}