// this loads the config file which tells it what the variables are.
const config = require('./config.json');
// this loads the 8ball.js file which has the 8ball and CreepyPasta commands I made + whatever else idk.
var eball = require('./Command_Files/8ball');
var randomCreepyPastaCommand = require("./Command_Files/RandomCP");
var rockPaperScissors = require("./Command_Files/rockPaperScissors");
var crusaderjs = require("./Command_Files/crusader")
var glizzy = require("./Jazon_Files/Glizzy")
// this makes the program a discord bot
const Discord = require('discord.js');
const fs = require('fs')
const { OpusEncoder } = require('@discordjs/opus');
let counter = require('./counter.json');
// this bit lets me log to the command console.
const { Console } = require('winston/lib/winston/transports');
const { count } = require('console');

// make the bot know that it's a discord bot.
const client = new Discord.Client();

// This code runs on startup
// (this will only trigger one time after logging in)
client.once('ready', () => {
	console.log('Ready!');
	// Lines 24-28 send the command for the bot being updated.
	counter += 1;
	fs.writeFile('counter.json', counter, (err) => {})
    console.log("Counter Incremented.");
	channel = client.channels.cache.get(config.updChannel);
	channel.send(`Bot updated. This has happened ${counter} times since I started tracking.`);
	client.user.setActivity("h!help"); 
});

// Since this one's a bit more complicated, I'll tell you what it does. (Rip off the dad bot)
client.on("message", (message) => {
	if ((message.content.startsWith("I'm") || message.content.startsWith("I’m")) && !message.author.bot) {
	 // This part                         ^ tells us what to look for, and excludes messages from other bots.
	 // then the bot takes everything else, and puts it in a msg
		message.channel.send("Hello " + message.content.slice(4) + " I'm dad.")
	}
 //                       ^ reply to message with whole message, append "I'm dad"
});

// ---------------------------------------------------- Commands from here on will have the prefix and other stuff soft-coded in ---------------------------------
// What I mean by this is that it will use the config.json file in the thing for the stuff.

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
	if (msg.content == config.prefix + "status-online") {
		// All this does is make the bot look nice and dead.
	   console.log("Change Status to norm Logged.")
	   client.user.setActivity("h!help"); 
	   msg.channel.send("Status Changed.")
	}
	if (msg.content == `${config.prefix}status-streaming`) {
		// All this does is make the bot look nice and dead.
	   console.log("Change Status to norm Logged.")
	   client.user.setActivity(`${config.twitchMessage} h!help`, {
		   type: "STREAMING",
		   url: config.twitchurl
		 });
	   msg.channel.send("Status Changed.")
	}
	if (msg.content == config.prefix + "status-dnd") {
		// All this does is make the bot look nice and dead.
	   console.log("Change Status to Do-Not-Disturb Logged.")
	   client.user.setActivity("h!help", {
		   type: "dnd",
		   url: config.twitchurl
		 });
	   msg.channel.send("Status Changed.")
   	}    
	if (msg.content.startsWith(config.prefix + "8ball")) {
		console.log("8ball requested.")
		var question = msg.content.slice(config.prefix.length + "8ball".length, 0);
		// the command above cuts it up, below sends it through and replies.
		msg.channel.send(eball.eball())
	}
	// Random Nhentai chooser. h!randomN
	if (msg.content == config.prefix + "randomN") {
		var x = Math.floor(Math.random()*(config.Nmax-config.Nmin+1)+config.Nmin);
		msg.channel.send("https://nhentai.net/g/" + x );
		console.log("Somebody's horney. They're looking at "+ x + ", I think.")
	}
	if (msg.content.startsWith(config.prefix + "randomCP")) {
		console.log("RandomCP requested.")
		// the command above cuts it up, below sends it through and replies.
		msg.channel.send(randomCreepyPastaCommand.randomCP())
	}
	// Rock Paper Scissors Command.
	if (msg.content.startsWith(config.prefix + "rps")) {
		msg.channel.send(rockPaperScissors.rockPaperScissors(msg.content.slice(6)));
	}
	// This lil buckaroonie sends Boo when you ask to be spooked.
	if (msg.content === 'h!spook') {
		// This is basically looking at every message sent in the server and looking for "h!spook"
		msg.reply('Boo');
		// then it's just sending back "Boo"
	}
	if (msg.content == "!knock") {
		msg.channel.send("<@!462643693980221441> I'm at your door, let me in or you die.");
	} //                          ^ This is greg's id, please don't annoy him.
	// Now begins the Jazon Commands.
	if (msg.content.startsWith(config.prefix + "glizzy")) {
		msg.channel.send(glizzy.gladiator(msg.content.slice(9)));
		console.log('glizzy')
	}
	if (msg.content.startsWith(config.prefix + 'cockrater')) {
		const crkrtr = require("./Jazon_Files/3switch");
		msg.channel.send(crkrtr.cockrater(msg.content.slice(config.prefix.length + 'cockrater'.length + 1)));
	}
});

// This is the music stuff.
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
	if (message.content === config.prefix + "Monster Mash") {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const dispatcher = connection.play('./Command_Files/Monster Mash.mp3', { volume: 0.5 });
			message.channel.send("Sometimes it glitches, so run h!stop if I don't connect.")
			message.channel.send({embed: {
				// This is one of those fancy embed things you see all the real bots using.
				color: 000000,
				title: ("Now Playing some **very** Spooky Music"),
				fields: [
				{
				name: 'https://www.youtube.com/watch?v=bRLML36HnzU',
				value: "It's the freaking monster mash what do you expect, you loser.",
				},
				]
				}
			}
			)
		}
	}
	if (message.content === config.prefix + "crusade") {
		let randomNumber = Math.floor(Math.random() * 590)
		message.channel.send(`It is time for the crusade, my brother. We must go. ${await crusaderjs.crusader()}`, { files: [`./Command_Files/crusadermemes/${randomNumber}.png`] });
	}
	if (message.content === config.prefix + 'getStand') {
		let standFunctions = require('./Command_Files/Stand_Files/stands');
		message.channel.send(`${await standFunctions.getStand(message.author)}`)
	}
	if (message.content === `${config.prefix}useStand`) {
		let standUsage = require('./Command_Files/Stand_Files/useStand');
		// let standFunctions = require('./Command_Files/Stand_Files/stands');
		message.channel.send(`${standUsage.useStandFunction(message.author, message.channel)}`);
	}
	// just needed this for a QOL thing.
	if (message.content.startsWith("https://www.twitch.tv/ckthepenguin")) {
		message.channel.send("His youtube is https://www.youtube.com/channel/UCA4-3jnId8mlk_yhbJiGBoA btw if you didn't know.")
	}
	/*
	if (message.content === `${config.prefix}readStand`) {
		let standFunctions = require('./Command_Files/Stand_Files/stands');
		let standFunctionOutput = standFunctions.readStand(message.author);
		message.channel.send(`ouch ${standFunctionOutput}`)
	}
	*/
});
// this wee bit logs the bot in
client.login(config.token);