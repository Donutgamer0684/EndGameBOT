module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00D8FF')
        .setTitle('Help')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('This is the help section with the main commands!')
        .addFields(
            { name: 'Need more help?', value: 'Make a ticket and we will respond. Be patient!' },
            { name: '\u200B', value: '\u200B' },
            { name: '`.team`', value: 'Shows the EndGame team!', inline: true },
            { name: '`.status`', value: 'Shows if the bot is online', inline: true },
            { name: '`.endgame`', value: 'Sends a invite link from EndGame to invite your friends.', inline: true },
            { name: '`.invite`', value: 'Invite the bot to your server!', inline: true },
            { name: '`.ping`', value: 'Shows the bots ping! (in ms)', inline: true },
            { name: '`.8ball`', value: 'Ask the wise 8ball', inline: true },
            { name: '`.rand`', value: 'random number gen', inline: true },
            { name: '`.dad`', value: 'A command y know', inline: true },
            { name: '`.hack`', value: 'Hack whoever you want', inline: true },
            { name: '`.avatar`', value: 'Displays the avatar of someone', inline: true },
            { name: '`.purge`', value: 'Clears messages', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame | The Most Sexy BOT You Will Ever Find');

        message.reply('Here are the EndGame BOT commands!', newEmbed);
    }
}