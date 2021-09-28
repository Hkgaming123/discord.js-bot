const Discord = require('discord.js');
const prefix = "."
const client = new Discord.Client();
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Make you bot 24/7 cool innit!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

client.on("ready", ready => {
  console.log(`${client.user.tag} is ready!`);
    client.user.setActivity(`HKGAMING`, { type: "LISTENING" });
});

client.on("message", message =>{
  if(!message.content.startsWith(`${prefix}`) ||message.author.bot) return 
})

client.on("message", msg => {
  if(msg.content === "how gay") {
    msg.reply("IDK")
  }
})

client.on("message", message =>{
  if(message.content === `${prefix}help`) {
    message.reply("there is no such help")
  }
  if(message.content === `${prefix}UwU`) {
    message.reply(`NON OF THAT SIR`)
  }
  if(message.content === `${prefix}favouritegame`) {
    message.reply(`Mine is minecraft`)
  }
  if(message.content === `${prefix}clear`) {
    message.channel.send(`Sorry I don't know how to add this feature`)
  }
})

client.login(process.env.Token)