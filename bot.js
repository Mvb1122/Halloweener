// this loads the config file which tells it what to connect to.
const config = require('./config.json');
// this makes the program a discord bot
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

// create a new Discord client
const client = new Discord.Client();

// This code runs on startup
// (this will only trigger one time after logging in)
client.once('ready', () => {
	console.log('Ready!');
});

// This lil buckaroonie sends Boo when you ask to be spooked.
client.on('message', msg => {
 if (msg.content === 'h!spook') {
 // This is basically looking at every message sent in the server and looking for "h!spook"
 msg.reply('Boo');
 // then it's just sending back "Boo"
 }
});
 
//  hello jazon
client.on('message', msg => {
 if (msg.content === 'hello jazon') {
 msg.reply('hello jazon');
 }
});

// This is a different version of the "hello jazon" command. It is just a bit proper-er.
client.on("message", (message) => {
	if (message.content == "hello jazon") {
	  message.channel.send("_hello jazon");
	}
});

// there are a few more dumb ones here.
client.on("message", (message) => {
	if (message.content == "Should I add Michelle Dominguez to the cult?") {
	  message.channel.send("yes");
	}
});

// If you put the same input/output phrase you get a spam bot, therefore you have
// to make it different. You can do this through any way at all, EXCLUDING
// putting a space after the message, because discord will trim it off.
client.on("message", (message) => {
	if (message.content == "glizzy") {
	  message.channel.send("Glizzy");
	}
});

// last one.
client.on("message", (message) => {
	if (message.content == "Hello") {
	  message.channel.send("Gamers");
	}
});


// Since this one's a bit more complicated, I'll tell you what it does. (Rip off the dad bot)
client.on("message", (message) => {
	if (!message.content.startsWith("I'm") || message.author.bot) return;
 // This part                         ^ tells us what to look for.
 // then the bot takes everything else, and puts it in a message.
	const args = message.content.slice(3).trim().split(' ');
 //                                    ^ how wide the phrase to look for is
	const command = args.shift().toLowerCase();
	message.channel.send("Hello " + message.content + " I'm dad.")
 //                       ^ reply to message with whole message, append "I'm dad"
});


// This is for that image I sent in the discord that one time.
// https://media.discordapp.net/attachments/703116362763075588/762722150590185522/unknown.png   btw "/*" is the start of a multiline comment. "*/"" is the end.
/*
client.on("message", (message) => {
	if (message.content == "I'm a cool and good programmer") {
	  message.channel.send("no");
	}
});

client.on("message", (message) => {
	if (message.content == "):") {
	  message.channel.send("suck it");
	}
});
*/
client.on("message", (message) => {
	if (message.content == "h!status-streaming") {
 // All this does is make the bot look nice and active.
		console.log("Change Status to Online Logged.")
		client.user.setActivity("I'm a spooky bot.", {
			type: "STREAMING",
			url: "https://twitch.tv/DylamLIVE"
		  });
	}
});

// ---------------------------------------------------- Commands from here on will have the prefix and other stuff soft-coded in ---------------------------------
// What I mean by this is that it will use the config.json file in the thing for the stuff.  ALSO, I do need to work on the status commands.

// h!status-offline
client.on("message", (message) => {
	if (message.content == config.prefix + "status-offline") {
 // All this does is make the bot look nice and dead.
		console.log("Change Status to Offline Logged.")
		client.user.setActivity("I'm a spooky bot.", {
			type: "INVISIBLE",
			url: config.twitchurl
		  });
	}
});

// h!status-dnd
client.on("message", (message) => {
	if (message.content == config.prefix + "status-dnd") {
 // All this does is make the bot look nice and dead.
		console.log("Change Status to Do-Not-Disturb Logged.")
		client.user.setActivity("I'm a spooky bot.", {
			type: "dnd",
			url: config.twitchurl
		  });
	}
});

// Random Nhentai chooser. h!randomN
client.on("message", (message) => {
	var x = Math.floor(Math.random()*(config.Nmax-config.Nmin+1)+config.Nmin);
//                                     ^ anytime you^ see config.* you can check config.json for the thing.
	if (message.content == config.prefix + "randomN") {
		message.channel.send("https://nhentai.net/g/" + x );
		console.log("Somebody's horney. They're looking at "+ x + ", I think.")
	}
});
	
// this wee bit logs the bot in
client.login(config.token);