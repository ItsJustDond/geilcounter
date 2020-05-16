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
    if(message.author.bot) return;
    let countmessage = message.content.toLowerCase();
    let dbg = require("./geilcounter.json");
    if(message.content === "(counter") message.channel.send(`Counter: \n geil: ${dbg.g} \n reee: ${dbg.r} \n xd: ${dbg.x} \n :p: ${dbg.p}`);
    let geilCounter = 0;
    let reeeCounter = 0; 


    if(!countmessage.includes("geil") || !countmessage.includes("rEeEeEeEeEeEeEeEe")) return;

    if(countmessage.includes("geil")){
      
      dbg.g ++;
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
          if(err) console('Je bent tt dom:', err);
      });

    } else if(countmessage.includes("reeeeeeeeeeeeeeee")){
      dbg.r++;
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
        if(err) console('Je bent tt dom:', err);
      });
    } else if(countmessage.includes("reee")){
      dbg.r++;
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
        if(err) console('Je bent tt dom:', err);
      });
    } else if(countmessage.includes("xd")){
      dbg.x++;
      console.log('test lol');
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
        if(err) console('Je bent tt dom:', err);
      });
    } else if(countmessage.includes(":p")){
      dbg.p++;
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
        if(err) console('Je bent tt dom:', err);
      });
    }

    /*let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);*/
});
client.login(process.env.TOKEN);
