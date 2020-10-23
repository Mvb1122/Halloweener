const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.useStandFunction = (userName, channelID) => {
    const fs = require('fs')
    let userNameSlice = `${userName}`.slice(1,-1)
    let path = `./Command_Files/Stand_Files/users/${userNameSlice}.json`
    let fileExists = fs.existsSync(path);
    if (fileExists) {
        let standTxt = require(`./users/${userNameSlice}.json`);
        switch (standTxt) {
            case 0:
                return 'The World';
            case 1:
                return 'Star Platinum';
            case 2:
                return 'Silver Chariot';
            case 3:
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