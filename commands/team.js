module.exports = {
    name: 'team',
    description: "this is a team command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00D8FF')
        .setTitle('The EndGame Team!')
        .setURL('https://discord.gg/xNUX3BYaHB')
        .setDescription('These are the main team members that make EndGame possible')
        .addFields(
            { name: 'EndGame Admins', value: '`! Donut#6867`, `Carson0ping#6969`, `doomdog53#3114`' },
            { name: 'EndGame BOT Dev', value: '`! Donut#6867`' },
            { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('EndGame | This shit dont ever get updated lmao');

        message.channel.send(newEmbed);
    }
}