// this loads the config file which tells it what to connect to.
const config = require('./config.json');
// this loads the 8ball.js file which has the 8ball and CreepyPasta commands I made.
var eball = require('./Command_Files/8ball');
var randomCreepyPastaCommand = require("./Command_Files/RandomCP")
// this makes the program a discord bot
const Discord = require('discord.js');
// this bit lets me log to the command console.
const { Console } = require('winston/lib/winston/transports');

// make the bot know that it's a discord bot.
const client = new Discord.Client();

// This code runs on startup
// (this will only trigger one time after logging in)
client.once('ready', () => {
	console.log('Ready!');
	channel = client.channels.cache.get('762868747970936882');
	channel.send('Bot updated.');
	client.user.setActivity("h!help"); 
});

// This lil buckaroonie sends Boo when you ask to be spooked.
client.on('message', message => {
 if (message.content === 'h!spook') {
 // This is basically looking at every message sent in the server and looking for "h!spook"
 msg.reply('Boo');
 // then it's just sending back "Boo"
 }
});
 
//  hello jazon
client.on('message', message => {
 if (message.content === 'hello jazon') {
 msg.reply('Hello Jazon');
 }
});

// This is a different version of the "hello jazon" command. It is just a bit proper-er.
client.on("message", (message) => {
	if (message.content == "hello jazon") {
	  msgchannel.send("_hello jazon");
	}
});

// there are a few more dumb ones here.
client.on("message", (message) => {
	if (message.content == "Should I add Michelle Dominguez to the cult?") {
	  msgchannel.send("yes");
	}
});

// If you put the same input/output phrase you get a spam bot, therefore you have
// to make it different. You can do this through any way at all, EXCLUDING
// putting a space after the message, because discord will trim it off.
client.on("message", (message) => {
	if (message.content == "glizzy") {
	  msgchannel.send("Glizzy");
	}
});

// last one.
client.on("message", (message) => {
	if (message.content == "Hello") {
	  msgchannel.send("Gamers");
	}
});


// Since this one's a bit more complicated, I'll tell you what it does. (Rip off the dad bot)
client.on("message", (message) => {
	if (!message.content.startsWith("I'm") || message.author.bot) return;
 // This part                         ^ tells us what to look for.
 // then the bot takes everything else, and puts it in a msg
	const args = message.content.slice(3).trim().split(' ');
 //                                    ^ how wide the phrase to look for is
	const command = args.shift().toLowerCase();
	message.channel.send("Hello " + message.content.slice(4) + " I'm dad.")
 //                       ^ reply to message with whole message, append "I'm dad"
});


// This is for that image I sent in the discord that one time.
// https://media.discordapp.net/attachments/703116362763075588/762722150590185522/unknown.png   btw "/*" is the start of a multiline comment. "*/"" is the end.
/*
client.on("message", (message) => {
	if (message.content == "I'm a cool and good programmer") {
	  msgchannel.send("no");
	}
});

client.on("message", (message) => {
	if (message.content == "):") {
	  msgchannel.send("suck it");
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
		msgchannel.send("Status Changed.")
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
		msgchannel.send("Status Changed.")
	}
});

// ---------------------------------------------------- Commands from here on will have the prefix and other stuff soft-coded in ---------------------------------
// What I mean by this is that it will use the config.json file in the thing for the stuff.  ALSO, I do need to work on the status commands.

// h!status-offline
client.on("message", (message) => {
	if (message.content == config.prefix + "status-offline") {
 // All this does is make the bot look nice and dead.
 // Bots can't go invis, they only have online, streaming, dnd and idle.
 // (Or off)
		console.log("Change Status to Offline Logged.")
		client.user.setActivity("h!help")
		msgchannel.send("Status Changed.")
	}
});

// h!status-dnd
client.on("message", (message) => {
	if (message.content == config.prefix + "status-dnd") {
 // All this does is make the bot look nice and dead.
		console.log("Change Status to Do-Not-Disturb Logged.")
		client.user.setActivity("h!help", {
			type: "dnd",
			url: config.twitchurl
		  });
		msgchannel.send("Status Changed.")
	}
});

client.on("message", (message) => {
	if (message.content == config.prefix + "status-online") {
 // All this does is make the bot look nice and dead.
		console.log("Change Status to norm Logged.")
		client.user.setActivity("h!help", {
			type: "dnd",
			url: config.twitchurl
		  });
		msgchannel.send("Status Changed.")
	}
});

// Random Nhentai chooser. h!randomN
client.on("message", (message) => {
	var x = Math.floor(Math.random()*(config.Nmax-config.Nmin+1)+config.Nmin);
//                                     ^ anytime you^ see config.* you can check config.json for the thing.
	if (message.content == config.prefix + "randomN") {
		msgchannel.send("https://nhentai.net/g/" + x );
		console.log("Somebody's horney. They're looking at "+ x + ", I think.")
	}
});

client.on("message", (message) => {
	if (message.content == "Can i kick ishaan") {
	  msgchannel.send("Go ahead.");
	}
});

// another way to avoid spam is to make it a code line in discord with these things -> `
client.on("message", (message) => {
	if (message.content == "anyway") {
	  message.channel.send("`anyway`");
	}
});
client.on("message", (message) => {
	if (message.content == "!knock") {
	  msgchannel.send("<@!462643693980221441> I'm at your door, let me in or you die.");
	} //                          ^ This is greg's id, please don't annoy him.
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
client.on('message', msg => {    
	if (msg.content === config.prefix + "help") {      
		msg.channel.type === (`"dm"`) + msg.author.send({embed: {
			color: 000000,
			title: ("Commands:"),
			fields: [
			  { name: "Input", value: "randomN\nDad bot rip-off\n8ball", inline: true},
			  { name: "Result", value: "Sends a random Nhentai\nread the title\nreads what you sent, predicts what will happen.", inline: true}
			]}			
		})
		msg.channel.send("Check your dms.")
	// This is known as chaining your commands to make it more efficient and faster to start.
	// the bot takes roughly 11 seconds to start, so I have to make preformance 
	// optimizations.
	} 
	if (msg.content.startsWith(config.prefix + "8ball")) {
		console.log("8ball requested.")
		var question = msg.content.slice(config.prefix.length + "8ball".length, 0);
		// the command above cuts it up, below sends it through and replies.
		msg.channel.send(eball.eball())
	}
	if (msg.content.startsWith("Anyway")) {
		msg.channel.send("`Anyway`")
	}
	if (msg.content.startsWith(config.prefix + "randomCP")) {
		console.log("RandomCP requested.")
		var question = msg.content.slice(config.prefix.length + "randomCP".length, 0);
		// the command above cuts it up, below sends it through and replies.
		msg.channel.send(randomCreepyPastaCommand.randomCP())
	}
});

// this wee bit logs the bot in
client.login(config.token);