module.exports = {
    name: 'changelog',
    description: "changelog",
    execute(message, args, Discord) {
        message.channel.send('> Added **4** more commands in the last month!')
        message.channel.send('> news: **i got some 24/7 VPS hosting lol**')
    }
  }