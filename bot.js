const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzEyMzk4ODMyNjQ0MjU5ODQw.C_aklg.7Vc7chN3LhcLJA9Yqjxp5mp_dd8';
const prefix = "^"

//Rules command

client.on('ready', () => {
  console.log('Rules ready!');
});

client.on('message', msg => {

  if (msg.content === prefix+'rules' ) {
    msg.reply('```1. No nudity/porn``` ```2. No racial discrimination/bullying``` ```3. No spam``` ```4. Respect and treat everyone``` ```5. No advertising other groups/products```');
  }
});

client.login(token);

//help command

client.on('ready', () => {
  console.log('Help ready!');
});

client.on('message', msg => {

  if (msg.content === prefix+'help' ) {
    msg.channel.send('@~ Chairman ~ @~ Vice Chairman ~, help!');
  }
});

client.login(token);
