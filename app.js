const Discord = require('discord.js');
const bot = new Discord.Client();
                                      
bot.on("ready", async () => {
    console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);
  
    bot.user.setActivity("Gatinciyi", {type: "PLAYING"});
  });
  
                                                                                                                                 
bot.login('NDk3NDgzMzAwOTg2OTQ1NTQ2.Dpf1YQ.gsrIVxJeEbu64rBAYb4XCJpkoX8');

