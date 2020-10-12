const config = require('../config.json');
const Discord = require('discord.js');
const { Console } = require('winston/lib/winston/transports');

exports.gladiator = (glizzy) => {
    // glizzy = 'gladiator'
    glizzy = glizzy.toLowerCase()
    let output
    switch (glizzy) {
        case 'gladiator': {
            output = "You gladiated the glizzys, you fuckin' monster.";
            break;
        }
        case 'gobbler': {
            output = "You gobbled the glizzys, you fuckin' monster.";
            break;
        }
        case 'slut': {
            output = "You fucked the glizzys, there's nothing to even say here"
            break;
        }
        default: {
            output = "Stoopid glizzys, all hotdog lookin and shi";
            break;
        }
    }
    return output
}
