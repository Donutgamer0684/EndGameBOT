module.exports = {
    name: 'kits',
    description: "this is a kits command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Kits')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('Shows info a about buying kits and other stuff!')
        .addFields(
            { name: 'Getting kits', value: 'Make a ticket and we will respond. Be patient!' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Delivery', value: 'You need 10 or more kits for us to deliver!', inline: true },
            { name: 'price', value: '$0.10 per normal kit', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame');

        message.channel.send(newEmbed);
    }
}