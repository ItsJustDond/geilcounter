const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.guild.fetchBans().then(bans => {
    bans.forEach(user => {
        console.log(user.username + '#' + user.tag);
        message.guild.unban(user);
    });
  });
}

module.exports.help = {
  name:"say"
}