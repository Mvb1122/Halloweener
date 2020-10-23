const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.getStand = async (userName) => {
    const fs = require('fs')
    let standList = require('./standlist.json')
    let randNum = Math.floor(Math.random() * (standList.length - 1));
    let userNameSlice = `${userName}`.slice(1,-1)
    let standTxt = require(`./users/${userNameSlice}.json`);
    let path = `./Command_Files/Stand_Files/users/${userNameSlice}.json`
    let fileExists = fs.existsSync(path)
    console.log(`${userName} just requested stand command. The status is ${fileExists}, which is ${standList[standTxt]}. The path is ${path}`)
    if (fileExists) {
        return `You can't get another stand, you already have ${standList[standTxt]}`; 
    } else if (false === fileExists ) {
        fs.writeFile(`./Command_Files/Stand_Files/users/${userNameSlice}.json`, randNum, (err) => {if (err) {throw err}})
        return `Congrats, your stand is ${standList[randNum]}`
        // return `||uh oh I did a lil f*cky w*cky.||`
        // Write all of your error messages like this. Do it.
    }
};

exports.readStand = async (userName) => {
    const fs = require('fs')
    let standList = require('./standlist.json')
    let userNameSlice = `${userName}`.slice(1,-1)
    let fileExists = fs.existsSync(`./Command_Files/Stand_Files/users/${userNameSlice}.txt`)
    console.log(fileExists)
    console.log(userNameSlice)
    if (fileExists) {
        return standList[`./Command_Files/Stand_Files/users/${userNameSlice}.txt`]
    } else {
        return `File doesn't exist.`
    }
    
}

exports.invert = (input) => {
    if (input) {
        return false
    } else {
        return true
    }
}