// This is my 8ball command I made for codecademy.com 
// Since it's not meant for discord.js, I'm porting it.
const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.eball = () => {
  const userName = username;
  // userName ? console.log("Hello, " + userName + ".") : console.log("Hello!");
  const userQuestion = question;
  // userName ? console.log("You asked '" + userQuestion + "', right, " + userName + "?") : console.log("You asked '" + userQuestion + "' right?");
  let randomNumber = Math.floor(Math.random() * 8);
  var eightBall = "";
  switch (randomNumber) {
    case 1:
      eightBall = "Yup, that's gonna happen.";
      break;
    case 2:
      eightBall = "I guess it'll probably happen.";
      break;
    case 3:
      eightBall = "Wait can you say that again? My third eye was hurting so I was rubbing it.";
      break;
    case 4:
      eightBall = "Dude, I've been predictin' all day and I just wanna take a nap, can 'ya come back in like 2 hours?";
      break;
    case 5:
      eightBall = "That ain't happenin, m8.";
      break;
    case 6:
      eightBall = "Nope, the ghosts say it ain't gonna happen.";
      break;
    case 7:
      eightBall = "This is probably not gonna happen.";
      break;
    case 8:
      eightBall = "This is probably gonna happen, enjoy whatever.";
      break;
  };
  return eightBall;
}