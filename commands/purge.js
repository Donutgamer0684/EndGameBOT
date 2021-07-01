module.exports = {
    name: 'purge',
    description: "Clear messages!",
   async  execute(message, args, Discord) {
        if (!args[0]) return message.reply("**Please enter the amount of messages to clear!**");
 
        if(isNaN(args[0])) return message.reply("**Please type a real number!**");
 
        if(args[0] > 100) return message.reply("**You can't remove more than 100 messages!**");
        
        if(args[0] < 2) return message.reply("**You have to delete at least one message! (well two becasue we count the one you send to delete them!) so try the command: .purge 2**");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 }
}