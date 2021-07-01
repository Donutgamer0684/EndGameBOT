module.exports = {
    name: 'rules',
    description: "this is a rules command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Server rules')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('Failure to agree with rules will result in a ban.')
        .addFields(
            { name: 'Main Rules', value: '`1. Follow the Discord TOS`' },
            { name: '\u200B', value: '\u200B' },
            { name: '`No Spamming`', value: 'Will be warned or banned', inline: true },
            { name: '`Invites must be legit`', value: 'The people invited must have joined 9b9t once', inline: true },
            { name: '`No self advertising`', value: 'Will be warned or banned', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame');

        message.reply('Here are the server rules for EndGame Official', newEmbed);
    }
}