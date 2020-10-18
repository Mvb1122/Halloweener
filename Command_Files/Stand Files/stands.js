const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.getStand = (userName) => {
    const fs = require('fs')
    let standList = require('./standlist.json')
    let randNum = Math.floor(Math.random() * (standList.length - 1));
    let userNameSlice = `${userName}`.slice(1,-1)
    if (fs.existsSync(`./Command_Files/Stand_Files/users/${userNameSlice}.txt`)) {
        fs.writeFile(`./Command_Files/Stand_Files/users/${userNameSlice}.json`, randNum, (err) => {})
        return `Congrats, your stand is ${standList[randNum]}`
    } else if (this.invert(fs.existsSync(`./Command_Files/Stand_Files/users/${userNameSlice}.txt`))) {
        let standNumber = `./Command_Files/Stand_Files/users/${userNameSlice}.txt`
        return `You can't get another stand, you already have ${standList[standNumber]}`;
    } else {
        return `||uh oh I did a lil f*cky w*cky.||`
        // Write all of your error messages like this. Do it.
    }

}

exports.invert = (input) => {
    if (input) {
        return false
    } else {
        return true
    }
}