const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  
  
   if(message.content==="in"){
            message.guild.channels.get(`${message.channel.id}`).createInvite().then(invite => message.channel.sendMessage('http://discord.gg/' + invite.code));

  }

});




client.login(process.env.BOT_TOKEN);
