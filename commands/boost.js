module.exports = {
    name: 'boost',
    description: "this is a boost command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF00C5')
        .setTitle('Server Boosting')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('These are what you get for server boosts')
        .addFields(
            { name: 'How do i claim my kits?', value: 'Make a ticket and we will respond. Be patient!' },
            { name: '\u200B', value: '\u200B' },
            { name: '1 Boost', value: '10 kits', inline: true },
            { name: '2 Boost', value: '25 Kits', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame');

        message.channel.send(newEmbed);
    }
}