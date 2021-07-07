module.exports = {
    name: 'help fun',
    description: "this is a help config command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .addFields(
            { name: 'EndGame Bot Commands', value: 'We are adding commands every day!' },
            { name: '\u200B', value: '\u200B' },
            { name: '**.8ball**', value: 'Ask the wise 8ball', inline: true },
            { name: '**.rand**', value: 'random number gen', inline: true },
            { name: '**.dad**', value: 'A command y know', inline: true },
            { name: '**.hack**', value: 'Hack whoever you want', inline: true },
            { name: '**.meme**', value: 'shows a reddit meme!', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame | The Most Sexy BOT You Will Ever Find');

        message.channel.send('Here are the EndGame BOT commands!', newEmbed);
    }
} //done