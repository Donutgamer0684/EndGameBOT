const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 

client.once('ready', () => {
    console.log('ONLINE')
    client.user.setPresence({ activity: { name: ".Help for more info! | EndGame on top! |" }, status: "dnd" })
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
      if (message.member.roles.cache.has('841799087334096916')) {  //EndGame "Owner" role
        client.commands.get('purge').execute(message, args, Discord);

      } else if (message.member.roles.cache.has('844390762551967794')) { //Reflex "Admin" role
        client.commands.get('purge').execute(message, args, Discord);

      } else if (message.member.roles.cache.has('844939993251446826')) { //DD Logos "Admin" role
        client.commands.get('purge').execute(message, args, Discord);

      } else if (message.member.roles.cache.has('860409987875864587')) { //Testing server "Test" role
        client.commands.get('purge').execute(message, args, Discord);
      }
      else 
      {
        message.reply('**You dont have the roles to do that!**');
      }
      
    } else if (command == '8712834hewuyd87wdwadw9d729127'){
        client.commands.get('dev').execute(message, args, Discord);
    }
     else
    {
        message.reply('`unkown command!` *Try* .**help**')
    }
});


client.login(process.env.token);