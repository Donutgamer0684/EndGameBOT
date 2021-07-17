module.exports = {
    name: 'ddos',
    description: "this is a ddos command",
    execute(message, args, Discord) {
      const Commando = require('discord.js-commando')
const axios = require('axios')
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
          run = async (message) => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((res) => {
        console.log('RES:', res.data[0].url)
        message.reply(res.data[0].url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }

        message.channel.send(newEmbed);

    }
}