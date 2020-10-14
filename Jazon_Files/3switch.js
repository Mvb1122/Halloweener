exports.cockrater = (input) => {
    // short thin trimmed
    input = input.toLowerCase()
    input = input.trim().split(" ");
    let girthOut
    let lengthOut
    let hairOut
    let cockLength = input[0]
    let cockGirth = input[1]
    let cockHair = input[2]
  switch(cockLength) {
   case 'short': {
   lengthOut = 'Sorry man, that cock is SUPER short. Late bloomer huh?'
   break
   }
   case 'normal': {
   lengthOut = 'Cool cock, not too big, not too short.'
   break
   }
   case 'long': {
   lengthOut = 'God DAMN you could play jumprope with that thing!'
   break
   } 
   default: {
   lengthOut = "Bruh you don't even got a cock"
   }
  }
   switch(cockGirth) {
   case 'thin': {
   girthOut = 'That a spaghetti noodle, or a cock?'
   break
  }
   case 'average': {
   girthOut = 'Not too skinny, not too fat, pretty nice.'
   break
  }
   case 'fat': {
   girthOut = 'Holy shit, is that a beer can?'
   break
  }
   default: {
   girthOut = 'Again, no cock... how can a non-cock user have girth? Idiot.'
  } 
  }
  switch(cockHair) {
   case 'trimmed': {
    hairOut = 'Good job keeping the lawn clean!'
    break
   }
   case 'short': {
   hairOut = 'Could use some trimming, but not too bad.'
   break
   }
   case 'bush': {
   hairOut = "Oh my GOD, you're gonna need a damn weedwacker for that!"
   break
   }
   default: {
   hairOut = "No cock, no bush, it's not hard!"
   }
  }
return (`Here's your weenie rating: \n Hair: ${hairOut} \n Girth: ${girthOut} \n Length: ${lengthOut}`)
}
