const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');
const { count } = require('console');
const { TIMEOUT } = require('dns');


exports.useStandFunction = (userName, channelID, messageContent) => {
    const fs = require('fs')
    let userNameSlice = `${userName}`.slice(1,-1)
    let path = `./Command_Files/Stand_Files/users/${userNameSlice}.json`
    let fileExists = fs.existsSync(path);
    let userInput = messageContent.slice(`${config.prefix + 9}`)
    // This assumes the command is prefix + useStand
    if (fileExists) {
        let standTxt = require(`./users/${userNameSlice}.json`);
        console.log(`The message channel is ${channelID}, the userID is ${userNameSlice}`);
        switch (standTxt) {
            case 0:
                return 'The World';
            case 1:
                return 'Star Platinum';
            case 2:
                return 'Silver Chariot';
            case 3:
                let userInput = `${messageContent}`.slice(config.prefix.length + 9)
                console.log(`The User Input is ${userInput}`)
                let channelIDSlice = (`${channelID}`.slice(2, -1))
                console.log(`Channel ID is ${channelIDSlice} or ${channelID}`);
                // Mini-Bot !!! *spaghetti code intensifies*
                const client = new Discord.Client();
                client.once('ready', () => {
                   console.log("Mini-bot logged in.") 
                   channel = client.channels.cache.get(`${channelIDSlice}`);
                   if (userInput) {
                        if (userInput > 1) {
                            channel.bulkDelete(userInput);
                            channel.send(`THE WORLD, OVER HEAVEN! DELETE ${userInput} MESSAGES`, { files: ['./Command_Files/Stand_Files/TimeStops.mp3'] })
                        } else if (userInput === 1) {
                            channel.bulkDelete(userInput + 1);
                            channel.send(`THE WORLD, OVER HEAVEN! DELETE THAT ||SHIT||!`, { files: ['./Command_Files/Stand_Files/TimeStops.mp3'] })
                            
                        }
                   }
                });
                client.login(config.token);
                return 'Wait for a sec, sometimes the shard I use to delete messages can take forever to start.';
            case 4:
                return 'GER';
            case 5:
                return 'King Crimson';
            case 6:
                return 'Golden Experience';
            case 7:
                return 'Sticky Fingers';
            default:
                return 'error';
        }
    } else {
        return `You either don't have a stand or the bot just errored.`;
    }
}

/*
exports.getStandNumber = async (userName) => {
    const fs = require('fs');
    let userNameSlice = `${userName}`.slice(1,-1)
    let path = `./users/${userNameSlice}.json`
    let fileExists = fs.existsSync(path);
    if (fileExists) {
        let standNumber = require(`./users/${userNameSlice}.json`)
        return standNumber
    } else {
        return `default`
    }
}
*/