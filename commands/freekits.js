module.exports = {
    name: 'freekits',
    description: "this is a freekits command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('freeKits')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('Make sure to join the giveaway!')
        .addFields(
            { name: 'Getting kits', value: 'Make a ticket and we will respond. Be patient!' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Delivery', value: 'You need 10 or more kits for us to deliver!', inline: true },
            { name: 'invites', value: '2 invites for 1 kit', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame');

        message.channel.send(newEmbed);
    }
}