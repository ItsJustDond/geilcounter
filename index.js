const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});
const config = require('./important.json');
const fs = require('fs');
client.commands = new Discord.Collection();



/*fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      client.commands.set(props.help.name, props);
    });
  });
 */ 
client.on('ready', async() =>{
    console.log('I\'m ready to nuke boss!');
});

client.on('message', async (message) => {
    //let prefix = config.prefix
    let geilCounter = 0;
    let reeeCounter = 0; 
    if(message.content === "(counter") return message.channel.send("Counters: geilcounter " + geilCounter + " reeecounter " + reeeCounter);
    let countmessage = message.content.toLowerCase();

    if(!countmessage.includes("geil") || !countmessage.includes("rEeEeEeEeEeEeEeEe")) return;

    if(countmessage.includes("geil")){
      geilCounter++;
    } else if(countmessage.includes("reeeeeeeeeeeeeeee")){
      reeeCounter++;
    } else if(countmessage.includes("reee")){
      reeeCounter++;
    }

    /*let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);*/
});
let token = config.token;
client.login(token);
