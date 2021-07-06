module.exports = {
  name: 'geo',
  description: "geo",
  execute(message, args, Discord) {

    if (!args.length || !args[0]) {
      message.reply("Please enter a host! (IPv4)")
    }

    else {
      const ip = args.slice(0).join(" ") && args.shift().toLowerCase()
      message.channel.send(`Geo locating ${ip}...`);
       message.channel.send(`The HTTP GET Requests arnt working right now`);
    }
  }
}