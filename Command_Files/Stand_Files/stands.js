const config = require('../../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.getStand = async (userName) => {
    const fs = require('fs')
    let standList = require('./standlist.json')
    let randNum = Math.floor(Math.random() * (standList.length - 1));
    let userNameSlice = `${userName}`.slice(1,-1)
    console.log(userNameSlice)
    let fileExists = fs.existsSync(`./Command_Files/Stand_Files/users/${userNameSlice}.txt`)
    if (fileExists) {
        console.log(`The file exists for ${userNameSlice}`)
        fs.readFile(`./Command_Files/Stand_Files/users/${userNameSlice}.txt`, 'utf8', function(err, data){
            return `You can't get another stand, you already have ${standList[data]}`; 
        })
    } else {
        fs.writeFile(`./Command_Files/Stand_Files/users/${userNameSlice}.json`, randNum, (err) => {if (err) {throw err}})
        console.log(`The file doesn't exist for ${userNameSlice}`)
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
    if (fileExists) {
        return standList[`./Command_Files/Stand_Files/users/${userNameSlice}.json`]
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