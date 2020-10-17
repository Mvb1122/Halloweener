const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');
const standArray = require('./standArray.json');

exports.getStand = (userName) => {
    let standArray = require('./standArray.json');
    const fs = require('fs')
    let standList = ['The World', 'Star Platinum', 'Silver Chariot', 'The World Over Heaven', 'Golden Experince Requiem', 'King Crimson', 'Golden Experince', 'Sticky Fingers'];
    let randNum = Math.floor(Math.random() * (standList.length - 1));
    standArrayPush = `["${userName}", "${randNum}"] \n`
    for (let i = 0; i < standArray.length; i++) {
        if (standArray[i][1] === userName) {
            let stand = standArray[i][2]
            return `You can't get another stand, you already have ${standList[stand]}.`
        }
    }
    /*
    fs.writeFile('./Command_Files/Stand_Files/standArray.json', (`[${standArray}\n ${standArrayPush}]`), (err) => {
        if (err) throw err;
        console.log('Stand Array Updated.');
    })
    */
   // Going to have to figure out how to save the stand and recall it.
    return `Congrats, your stand is ${standList[randNum]}`
}