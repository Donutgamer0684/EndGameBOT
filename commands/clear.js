module.exports = {
    name: 'clear',
    description: "clear",
    execute(message, args, Discord) {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
            message.channel.send('**Channel cleared!**')
          })
    }
  }