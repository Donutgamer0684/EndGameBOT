module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord) {
        {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('')
            .setURL('')
            .setDescription('')
            .addFields(
                { name: 'EndGame Bot Commands', value: 'We are adding commands every day! If you need help you can dm ! Donut#6637' },
                { name: '\u200B', value: '\u200B' },
                { name: '🤣 **Fun**', value: '`.help-fun`', inline: true },
                { name: '🕹 **Config**', value: '`.help-config`', inline: true },
                { name: '🔨 **Utility**', value: '`.help-utility`', inline: true },
            )
            .setTimestamp()
            .setFooter('EndGame | The Most Sexy BOT You Will Ever Find');
        }

        message.channel.send('Here are the EndGame BOT commands!', newEmbed);
    }
}