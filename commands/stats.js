module.exports = {
    name: 'stats',
    description: "stats",
    execute(message, args, Discord) {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
              `${guild.name} has a total of ${guild.memberCount} members`
            )
          })
    }
  }