module.exports = {
    name: 'ping',
    description: "this is a ping command shows the bot ping yuh",
    execute(message, args){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}