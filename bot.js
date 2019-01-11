const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`SMART-BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`!X RUN...❥`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Pong!');
  }
  
  });




client.login(process.env.BOT_TOKEN);
