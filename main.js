const Discord = require('discord.js');
const client = new Discord.Client();
const got = require('got');

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

const hook = new Discord.WebhookClient('862870396969418813', '7MOc0Tfjyx4oSNPKz32b3tfL1HEkNdNhctskYhwGd5xaXRiJbtvU6Uax4cmXsnJRuuFu');
 

client.once('ready', () => {
    console.log('ONLINE');
    console.log(`Logged in as: ${client.user.tag}`);
    client.user.setPresence({ activity: { name: ".Help for more info! | EndGame on top! |" }, status: "dnd" })
    hook.send(`${client.user.tag} is online`);
}); 
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    } else if (command == 'dad'){
        client.commands.get('dad').execute(message, args);

    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);

    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, Discord);

    } else if (command == 'status'){
        client.commands.get('status').execute(message, args);

    } else if (command == 'endgame'){
        client.commands.get('endgame').execute(message, args);

    } else if (command == 'team'){
        client.commands.get('team').execute(message, args, Discord);

    } else if (command == 'kits'){
        client.commands.get('kits').execute(message, args, Discord);
        
    } else if (command == 'freekits'){
        client.commands.get('freekits').execute(message, args, Discord);

    } else if (command == 'boost'){
        client.commands.get('boost').execute(message, args, Discord);

    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);

    } else if (command == 'rand'){
        client.commands.get('rand').execute(message, args, Discord);

    } else if (command == '8ball'){
        client.commands.get('8ball').execute(message, args, Discord);

    } else if (command == 'hack'){
        client.commands.get('hack').execute(message, args, Discord);

    } else if (command == 'geo'){
        client.commands.get('geo').execute(message, args, Discord);

    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args, Discord);

    } else if (command == 'purge'){
        if (message.member.hasPermission('ADMINISTRATOR')) {
            client.commands.get('purge').execute(message, args, Discord);
        }
        else
        {
            message.reply('**You dont have the perms to do that!**');
        }  
    } else if (command == '8712834hewuyd87wdwadw9d729127'){ //devkey
        client.commands.get('dev').execute(message, args, Discord);
        message.delete(message.author);

    } else if (command == 'mod'){
        if (message.member.hasPermission('ADMINISTRATOR')) {
            client.commands.get('mod').execute(message, args, Discord);
        }
        else
        {
            message.reply('**You dont have the perms to do that!**');
        }

    } else if (command == 'modconfig'){
        if (message.member.hasPermission('ADMINISTRATOR')) {
            client.commands.get('modconfig').execute(message, args, Discord);
        }
        else
        {
            message.reply('**You dont have the perms to do that!**');
        }

    } else if (command == 'modhelp'){
        if (message.member.hasPermission('ADMINISTRATOR')) {
            client.commands.get('modhelp').execute(message, args, Discord);
        }
        else
        {
            message.reply('**You dont have the perms to do that!**');
        }

    } else if (command == 'changelog'){
        client.commands.get('changelog').execute(message, args, Discord);

    } else if (command == 'meme'){
        const embed = new Discord.MessageEmbed()
            got('https://www.reddit.com/r/memes/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('BLACK')
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`)
                message.channel.send(embed);
            })

    } else if (command == 'stats'){
        client.commands.get('stats').execute(message, args, Discord);

    } else if (command == 'help-fun'){
        client.commands.get('help fun').execute(message, args, Discord);

    } else if (command == 'help-config'){
        client.commands.get('help config').execute(message, args, Discord);

    } else if (command == 'help-utility'){
        client.commands.get('help utility').execute(message, args, Discord);

    } else if (command == 'clear'){
        if (message.member.hasPermission('ADMINISTRATOR')) {
            client.commands.get('clear').execute(message, args, Discord);
        }
        else
        {
            message.reply('**You dont have the perms to do that!**');
        }
    }
     else
    {
        message.reply('`unkown command!` *Try* .**help**')
    }
});


client.login(process.env.token);