// discord.js node module stored within a variable
const Discord = require("discord.js");

// Gateway intents were introduced by Discord so bot developers can choose
// which events their bot receives based on which data it needs to function
// With partials I will be able to receive the full data of the objects returned from each event.
// Creating a new client with intents and partials needed for this bot to function.
// partials make sure that we receive the full data of the objects returned from events.

const Client = new Discord.Client((
   intents : [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
   ],
   partials : [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.User
   ]
));