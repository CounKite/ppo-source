const Discord = require('discord.js');
const bot = new Discord.Client();
                                      
bot.on("ready", async () => {
    console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);
  
    bot.user.setActivity("Grand Theft Auto V", {type: "PLAYING"});
  });
  
                                                                                                                                 
bot.login(process.env.bot_TOKEN);

