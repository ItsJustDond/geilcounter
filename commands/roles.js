const Discord = require("discord.js");
const config = require('../important.json')
module.exports.run = async (client, message, args) => {
    if(message.author.id !== config.ownerID) return;

let i = 250 - message.guild.roles.size; 
for(i = 0; i < 250; i++){
    message.guild.createRole({
            name: 'oof',
            color: 'BLUE',
    });
}

message.channel.send("Working on it!")
}
module.exports.help = {
  name:"roles"
}