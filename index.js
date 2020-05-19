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
    let dbg = require('./geilcounter.json');
    let countmessage = message.content.toLowerCase();
    fs.readFile('./geilcounter.json', (err, jsonString) => {
      if(err) {
        console.log(err);
        return;
      }
      let data = JSON.parse(jsonString);

      for(let element in data){
        if(countmessage.includes(element)){
          switch(element){
            case "geil":
              dbg.geil++;
              break;
            case "reee":
              dbg.reee++;
              break;
            case "xd":
              dbg.xd++;
              break;
            case "uwu":
              dbg.uwu++;
              break;
            case "eans":
              dbg.eans++;
              break;
            case "lol":
              dbg.lol++;
              break;
            case "lmao":
              dbg.lmao++
              break;
            case "huh":
              dbg.huh++;
              break;
            case "ziek":
              dbg.ziek++;
              break;
            case "eng":
              dbg.eng++;
              break;
            case "kech":
              dbg.kech++;
              break;
            case "uuf":
              dbg.uuf++;
              break;
            case "oof":
              dbg.oof++;
              break;                      
          }
          fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
            if(err) console(err);
          });
        }
      }
    });
    if(countmessage.includes(":p")){
      dbg.p++;
      fs.writeFile('./geilcounter.json', JSON.stringify(dbg), (err) => {
        if(err) console(err);
      });
    }
    if(message.content === "(counter") {
      let embed = new Discord.RichEmbed()
      .setTitle("**Counter!**")
      .setTimestamp()
      .setColor("GREEN")
      .addField("**Geil**:", dbg.geil)
      .addField("**reee**:", dbg.reee)
      .addField("**xd**:", dbg.xd)
      .addField("**:p**:", dbg.p)
      .addField("**uwu**:", dbg.uwu)
      .addField("**eans**:", dbg.eans)
      .addField("**lol**:", dbg.lol)
      .addField("**lmao**:", dbg.lmao)
      .addField("**huh**:", dbg.huh)
      .addField("**ziek**:", dbg.ziek)
      .addField("**eng**:", dbg.eng)
      .addField("**kech**:", dbg.kech)
      .addField("**uuf**:", dbg.uuf)
      .addField("**oof**:", dbg.oof);

      message.channel.send(embed);
    }

    /*let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);*/
});
client.login(process.env.TOKEN);
