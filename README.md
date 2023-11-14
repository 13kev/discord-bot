# Discord Bot

Discord bot to welcome new members that arrive at the server and provides random content to keep them entertained. I'm doing this project as part of a udemy course im attending to in order to create a Discord bot using a node.js module called Discord.js
## Installation

Use the npm init to create a package.json file and install the module.

```bash
npm init
npm install discord.js
```

## Usage
Created a file named app.js to start coding my bot. After the variable has been created I used it as a gateway to use the websockets and adress the partials, that way I can make sure I can get the full data from the events;
```javascript
const Discord = require("discord.js");

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
```

## Updates
Just added login, reply message feature and a command. The reply message will be changed later. Also added a condition so the bot doesn't get into a spiral of self-replying since it can't determine if it's a user or a bot. 

```javascript
Client.on("messageCreate", (message) => {
     if (message.author.bot == true){
          return;
     }

     if (message.content.toLowerCase() == "!command"){
          message.reply("Você digitou !command");
```




## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
