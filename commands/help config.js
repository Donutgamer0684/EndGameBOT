module.exports = {
    name: 'help config',
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
            { name: '**.mod**', value: 'has mod only commands!', inline: true },
            { name: '**.purge**', value: 'Clears messages (mod command)', inline: true },
            { name: '**.clear**', value: 'shows bot stats', inline: true },
        )
        .setTimestamp()
        .setFooter('EndGame | The Most Sexy BOT You Will Ever Find');

        message.channel.send('Here are the EndGame BOT commands!', newEmbed);
    }
}