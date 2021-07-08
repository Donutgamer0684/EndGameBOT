module.exports = {
    name: 'changelog',
    description: "changelog",
    execute(message, args, Discord) {
        message.channel.send('> Added **7** more commands in the last month!')
        message.channel.send('> news: **just got the new .help menu done!**')
    }
  }