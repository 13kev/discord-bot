// discord.js node module stored within a variable
const Discord = require("discord.js");

// Gateway intents were introduced by Discord so bot developers can choose
// which events their bot receives based on which data it needs to function
// With partials I will be able to receive the full data of the objects returned from each event.
// Creating a new client with intents and partials needed for this bot to function.
// partials make sure that we receive the full data of the objects returned from events.

const Client = new Discord.Client({
   intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
   ],
   partials: [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.User
   ]
});
// ready online message from terminal when node app.js is run 
Client.on("ready", (client) => {
     console.log("Bot now online: " + client.user.tag)
});
// welcome message from bot + if to prevent the bot from getting into a spiral of replys
Client.on("messageCreate", (message) => {
     if (message.author.bot == true){
          return;
     }

     if (message.content.toLowerCase() == "!command"){
          message.reply("Você digitou !command");
     }

     message.reply("Pisque o cu para ficar mais inteligente!");
});

// log in the bot with password - same token to connect discord with the server
Client.login("MTE3MTU5Mzk4MTc2Nzk4MzE2NA.GsiQvw.dKerK0G0d_BBIU9EfNZk5wQzf1d7SqkQDrUfYc");