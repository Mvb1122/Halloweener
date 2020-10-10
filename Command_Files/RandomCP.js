// This is my 8ball command I made for codecademy.com 
// Since it's not meant for discord.js, I'm porting it.
const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.randomCP = () => {
  // it's of note that I didn't know this would be so long. I'd've used an array if I knew. Welp, more to the pile to rewrite.
  let randomNumber = Math.floor(Math.random() * 9);
  var output = "";
  switch (randomNumber) {
    case 1:
      output = "https://www.youtube.com/watch?v=6Tqfd6Z1qL4";
      break;
    case 2:
      output = "https://www.youtube.com/watch?v=6Tqfd6Z1qL4";
      break;
    case 3:
      output = "https://www.youtube.com/watch?v=pySDIX_rIIg";
      break;
    case 4:
      output = "https://www.youtube.com/watch?v=reM-dfNNpnw";
      break;
    case 5:
      output = "https://youtu.be/St2crus4nFI";
      break;
    case 6:
      output = "https://youtu.be/KHseQgE9Ew4";
      break;
    case 7:
      output = "https://youtu.be/LKfnrE9KBW8";
      break;
    case 8:
      output = "https://youtu.be/ZRegUjD-F-Y";
      break;
    case 9:
      output = "https://youtu.be/lE_18s2Wu4U";
      break;
  };
  return output;
}