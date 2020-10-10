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

// Since this one's a bit more complicated, I'll tell you what it does. (Rip off the dad bot)
client.on("message", (message) => {
	if (!message.content.startsWith("I'm") || message.author.bot) return;
 // This part                         ^ tells us what to look for, and excludes messages from other bots.
 // then the bot takes everything else, and puts it in a msg
	const args = message.content.slice(3).trim().split(' ');
 //                                    ^ how wide the phrase to look for is
	const command = args.shift().toLowerCase();
	message.channel.send("Hello " + message.content.slice(4) + " I'm dad.")
 //                       ^ reply to message with whole message, append "I'm dad"
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
		msg.channel.send("Status Changed.")
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
		msg.channel.send("Status Changed.")
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
		msg.channel.send("Status Changed.")
	}
});

// Random Nhentai chooser. h!randomN
client.on("message", (message) => {
	var x = Math.floor(Math.random()*(config.Nmax-config.Nmin+1)+config.Nmin);
//                                     ^ anytime you^ see config.* you can check config.json for the thing.
	if (message.content == config.prefix + "randomN") {
		msg.channel.send("https://nhentai.net/g/" + x );
		console.log("Somebody's horney. They're looking at "+ x + ", I think.")
	}
});

client.on("message", (message) => {
	if (message.content == "!knock") {
	  message.channel.send("<@!462643693980221441> I'm at your door, let me in or you die.");
	} //                          ^ This is greg's id, please don't annoy him.
});

client.on('message', msg => {    
	if (msg.content === config.prefix + "help") {      
		msg.channel.type === (`"dm"`) + msg.author.send({embed: {
			// This is one of those fancy embed things you see all the real bots using.
			color: 000000,
			title: ("Commands:"),
			fields: [
			  { name: "Input", value: "randomN\nDad bot rip-off\n8ball\nrps\n\nspm", inline: true},
			  { name: "Result", value: "Sends a random Nhentai\nread the title\nreads what you sent, predicts what will happen.\nPlay Rock Paper Scissors. send " + config.prefix + "rps and then 'rock,' 'paper,' or 'scissors' to play.\nplays spooky music in your voice channel. Use " + config.prefix + "stop to stop it.", inline: true}
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
	if (msg.content.startsWith(config.prefix + "randomCP")) {
		console.log("RandomCP requested.")
		// the command above cuts it up, below sends it through and replies.
		msg.channel.send(randomCreepyPastaCommand.randomCP())
	}
	// Rock Paper Scissors Command.
	if (msg.content.startsWith(config.prefix + "rps")) {
		msg.channel.send(rockPaperScissors.rockPaperScissors(msg.content.slice(6)))
	}
});

client.on('message', async message => {
	// Join the same voice channel of the author of the message
	if (message.content === config.prefix + "spm") {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const dispatcher = connection.play('./Command_Files/Music.mp3', { volume: 0.5 });
			message.channel.send("Sometimes it glitches, so run h!stop if I don't connect.")
			message.channel.send({embed: {
				// This is one of those fancy embed things you see all the real bots using.
				color: 000000,
				title: ("Now Playing some Spooky Music"),
				fields: [
				{
				name: 'https://www.youtube.com/watch?v=-EZ517Ls_FE',
				value: '~ All music is composed by Derek and Brandon Fiechter ~',
				},
				]
				}
			}
			)
		}
	}
	if (message.content === config.prefix + "Kitchen Without Gun") {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const dispatcher = connection.play('./Command_Files/m2.mp3', { volume: 0.25 });
			message.channel.send({embed: {
				// This is one of those fancy embed things you see all the real bots using.
				color: 000000,
				title: ("Whoa kitchen with no gun"),
				fields: [
				{
				name: 'https://www.youtube.com/watch?v=O31csGCdCDI',
				value: 'made by ins.step',
				},
				{
					name: 'https://www.youtube.com/watch?v=tnwwDYfesPc',
					value: "This is the non-remixed version of this song if you're wondering.",
				}
				]
				}
			}
			)
		}
	}
	if (message.content === config.prefix + "stop") {
		const connection = await message.member.voice.channel.join();
		connection.disconnect();
	}
}
)
// this wee bit logs the bot in
client.login(config.token);