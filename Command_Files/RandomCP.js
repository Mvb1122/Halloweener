// This is my 8ball command I made for codecademy.com 
// Since it's not meant for discord.js, I'm porting it.
const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.randomCP = () => {
  // const userName = username;
  // userName ? console.log("Hello, " + userName + ".") : console.log("Hello!");
  // const userQuestion = question;
  // userName ? console.log("You asked '" + userQuestion + "', right, " + userName + "?") : console.log("You asked '" + userQuestion + "' right?");
  let randomNumber = Math.floor(Math.random() * 8);
  var output = "";
  switch (randomNumber) {
    case 1:
      output = "https://www.youtube.com/watch?v=6Tqfd6Z1qL4";
      break;
    case 2:
      output = "https://www.youtube.com/watch?v=6Tqfd6Z1qL4";
      break;
    case 3:
      output = "3";
      break;
    case 4:
      output = "4";
      break;
    case 5:
      output = "5";
      break;
    case 6:
      output = "6";
      break;
    case 7:
      output = "7";
      break;
    case 8:
      output = "8";
      break;
  };
  return output;
}