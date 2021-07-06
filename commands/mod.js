module.exports = {
    name: 'mod',
    description: "mod",
    execute(message, args, Discord) {
  
      if (!args.length || !args[0]) {
        message.reply('Please enter a mod option!')
        message.channel.send('> the options are: **modconfig**, **modhelp**')
      }
  
      else {
        message.reply('Please enter a mod option!')
        message.channel.send('> the options are: **modconfig**, **modhelp**')
      }
    }
  }