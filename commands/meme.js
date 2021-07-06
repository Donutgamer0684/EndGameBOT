module.exports = {
    name: 'meme',
    description: "meme",
    execute(message, args, Discord) {
        let subreddits = [
            "memes"
          ];
          let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
          let img = await api(subreddit)
          const Embed = new Discord.MessageEmbed()
          .setTitle(`A meme from r/memes`)
          .setURL(`https://www.reddit.com/r/memes/`)
          .setColor('black')
          .setImage(img)
          msg.channel.send(Embed)
    }
  }