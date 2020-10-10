// this loads the config file which tells it what to connect to.
const config = require('./config.json');
// this loads the 8ball.js file which has the 8ball and CreepyPasta commands I made.
var eball = require('./Command_Files/8ball');
var randomCreepyPastaCommand = require("./Command_Files/RandomCP")
var rockPaperScissors = require("./Command_Files/rockPaperScissors")
// this makes the program a discord bot
const Discord = require('discord.js');
const fs = require('fs')
const { OpusEncoder } = require('@discordjs/opus');
// this bit lets me log to the command console.
const { Console } = require('winston/lib/winston/transports');

// make the bot know that it's a discord bot.
const client = new Discord.Client();

//  hello jazon
client.on('message', message => {
    if (message.content === 'hello jazon') {
    msg.reply('Hello Jazon');
    }
   });
   
   // This is a different version of the "hello jazon" command. It is just a bit proper-er.
   client.on("message", (message) => {
       if (message.content == "hello jazon") {
         msg.channel.send("_hello jazon");
       }
   });
   
   // there are a few more dumb ones here.
   client.on("message", (message) => {
       if (message.content == "Should I add Michelle Dominguez to the cult?") {
         msg.channel.send("yes");
       }
   });
   
   // If you put the same input/output phrase you get a spam bot, therefore you have
   // to make it different. You can do this through any way at all, EXCLUDING
   // putting a space after the message, because discord will trim it off.
   client.on("message", (message) => {
       if (message.content == "glizzy") {
         msg.channel.send("Glizzy");
       }
   });
   
   // last one.
   client.on("message", (message) => {
       if (message.content == "Hello") {
         msg.channel.send("Gamers");
       }
   });

   // This is for that image I sent in the discord that one time.
// https://media.discordapp.net/attachments/703116362763075588/762722150590185522/unknown.png   btw "/*" is the start of a multiline comment. "*/"" is the end.
/*
client.on("message", (message) => {
	if (message.content == "I'm a cool and good programmer") {
	  msg.channel.send("no");
	}
});

client.on("message", (message) => {
	if (message.content == "):") {
	  msg.channel.send("suck it");
	}
});
*/


client.on("message", (message) => {
	if (message.content == "h!status-streaming") {
 // All this does is make the bot look nice and active.
		console.log("Change Status to Online Logged.")
		client.user.setActivity("h!help LIVE ON TWITCH! ! ! ", {
			type: "STREAMING",
			url: "https://twitch.tv/DylamLIVE"
		  });
		msg.channel.send("Status Changed.")
	}
});

client.on("message", (message) => {
	if (message.content == "h!status-streaming2") {
 // All this does is make the bot look nice and active.
		console.log("Change Status to Online Logged.")
		client.user.setActivity("I'm a spooky bot.", {
			type: "STREAMING",
			url: config.twitchurl
		  });
		msg.channel.send("Status Changed.")
	}
});

client.on("message", (message) => {
	if (message.content == "Can i kick ishaan") {
	  msg.channel.send("Go ahead.");
	}
});

// another way to avoid spam is to make it a code line in discord with these things -> `
client.on("message", (message) => {
	if (message.content == "anyway") {
	  message.channel.send("`anyway`");
	}
});

/*
// send DMs from bot test. Going to rework this into a help command.
client.on('message', msg => {    
	if (message.content === config.prefix + "dmtest") {      
	  msg.channel.type === (`"dm"`) + msg.author.send(`wow look at that it worked.`);
	  console.log("DM sent.")
	  // swapping to these lil things ` <- because they let me use " in my msg.
	}
});
*/

if (msg.content.startsWith("Anyway")) {
    msg.channel.send("`Anyway`")
}