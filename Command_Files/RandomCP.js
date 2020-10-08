// This is my 8ball command I made for codecademy.com 
// Since it's not meant for discord.js, I'm porting it.
const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');
const cl = require("./creepylist.json")

exports.randomCP = () => {
  // const userName = username;
  // userName ? console.log("Hello, " + userName + ".") : console.log("Hello!");
  // const userQuestion = question;
  // userName ? console.log("You asked '" + userQuestion + "', right, " + userName + "?") : console.log("You asked '" + userQuestion + "' right?");
  let randomNumber = Math.floor(Math.random() * 8);
  var output = "";
  switch (randomNumber) {
    case 1:
      output = ""+cl.1;
      break;
    case 2:
      output = ""+cl.2;
      break;
    case 3:
      output = ""+cl.3;
      break;
    case 4:
      output = ""+cl.4;
      break;
    case 5:
      output = ""+cl.5;
      break;
    case 6:
      output = ""+cl.6;
      break;
    case 7:
      output = ""+cl.7;
      break;
    case 8:
      output = ""+cl.8;
      break;
  };
  return eightBall;
}