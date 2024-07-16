// this loads the config file which tells it what the variables are.
const config = require('../config.json');
// this loads the 8ball.js file which has the 8ball and CreepyPasta commands I made + whatever else idk.
// this makes the program a discord bot
const Discord = require('discord.js');
const { GatewayIntentBits } = require('discord.js');
const fs = require('fs')
const { OpusEncoder } = require('@discordjs/opus');
// this bit lets me log to the command console.
const { Console } = require('winston/lib/winston/transports');
const { count } = require('console');

// make the bot know that it's a discord bot.
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
});

exports.crusader = () => {
    let chantslist = ['Ave Maria', 'Adoro Te Devote', 'Regina Caeli', 'Ave Verum Corpus', 'Pange Lingua Gloriosi', 'Parce Domine', 'Da Pacem Domine', 'Asperges', 'Ubi Caritas', 'Attende Domine', 'Veni Creator Spiritus', 'Jesu, Dulcis Memoria', 'Salve Regina', "You thought it'd be a chant, but it was I, DIO!!!"]
    let randomChant = chantslist[Math.floor(Math.random() * 13)]
    return randomChant
}