const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');
const client = new Discord.Client();

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
                console.log(`Channel ID is ${channelIDSlice} or ${channelID}`)
                channel = client.channels.cache.get(channelIDSlice);
                /*
                if (userInput) {
                    for (let deletedMessages = 0; deletedMessages < userInput; deletedMessages += 1) {
                        channel.send(`Pretend I deleted a message`)
                        // console.log(`Deleted a Message!`)
                    }
                }
                */
                return 'TWOH';
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