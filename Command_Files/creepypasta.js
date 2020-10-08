// This is my 8ball command I made for codecademy.com 
// Since it's not meant for discord.js, I'm porting it.
const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');
var cpl = require('./creepylist.json');

exports.cpasta = () => {
  // const userName = username;
  // userName ? console.log("Hello, " + userName + ".") : console.log("Hello!");
  // const userQuestion = question;
  // userName ? console.log("You asked '" + userQuestion + "', right, " + userName + "?") : console.log("You asked '" + userQuestion + "' right?");
  let randomNumber = Math.floor(Math.random() * 2);
  };
  return cpl.randomNumber;