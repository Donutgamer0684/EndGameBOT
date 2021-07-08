module.exports = {
    name: 'help utility',
    description: "this is a help config command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .addFields(
            { name: 'EndGame Bot Commands', value: 'We are adding commands every day! If you need help you can dm ! Donut#6637' },
            { name: '\u200B', value: '\u200B' },
            { name: '**.team**', value: 'Shows the EndGame team!', inline: true },
            { name: '**.status**', value: 'Shows if the bot is online', inline: true },
            { name: '**.endgame**', value: 'invite link to EndGame!', inline: true },
            { name: '**.invite**', value: 'Invite the bot to your server!', inline: true },
            { name: '**.ping**', value: 'Shows the bots ping! (in ms)', inline: true },
            { name: '**.changelog**', value: 'shows a log of changes!', inline: true },
            { name: '**.stats**', value: 'shows bot stats', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame | The Most Sexy BOT You Will Ever Find');

        message.channel.send('Here are the EndGame BOT commands!', newEmbed);
    }
} 