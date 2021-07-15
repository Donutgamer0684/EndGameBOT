module.exports = {
    name: 'hack',
    description: "hack",
    execute(message, args, Discord) {
  
      if (!args.length || !args[0]) {
        message.reply("Please enter who gets hacked! Dont use a @! OR Spaces!")
      }
  
      else {
        const hack = args.slice(0).join(" ") && args.shift().toLowerCase()
        let responses = ["IloveCookies", "Password101", "IforgotMyPassword", "D7gyg2ebadawh", "Milk", "InsertPasswordHere", "CharlieFanPagesDeserveToBurn", "MommysBoy", "🍦 CREAMY 🍦", "youtube.com/watch?v=dQw4w9WgXcQ", "Blacklisted"]
  
        let response = Math.floor(Math.random() * responses.length)
        message.channel.send(`Hacking... ${hack}`);
          message.reply(`Found ${hack} on the darkweb

          ------------------------------------
          Email: **${hack}@gmail.com**
          Password: **${responses[response]}**
          ------------------------------------
          *This is a joke command and this is fake info*`)
          
      }
  
    }
  }