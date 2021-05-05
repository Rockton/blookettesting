export const allGuests = {
  // hamster asks for gold, but has no punishment if he doesn't get it
  Hamster1: {
    blook: 'Hamster',
    msg: 'Sup, gimme 15 gold!',
    yes: {
      msg: 'Oh dang, that actually worked. Cya loser.',
      gold: 15,
    },
    no: {
      msg: 'Ok, you make a fair point. Have a nice day, kind sir.',
    },
  },
  // hamster asks to spray paint houses
  Hamster2: {
    blook: 'Hamster',
    msg: 'Sup, can I go spray paint some houses?',
    yes: {
      msg: 'Wow, you said yes. People will not like this.',
      happiness: 15,
    },
    no: {
      msg: "Yeah, that's what I figured. Enjoy your evening.",
    },
  },
  // hamster wants a bowling alley
  Hamster3: {
    blook: 'Hamster',
    msg: 'Sup human, give me 17 materials to build a bowling alley.',
    yes: {
      msg: 'Yesss, finally a bowling alley! Thanks!',
      materials: 17,
      happiness: 17,
    },
    no: {
      msg: "No bowling alley, that's fair. Hope you have a good weekend.",
      happiness: 6,
    },
  },
  // chick wants materials, mom comes if you don't give them to him
  Chick1: {
    blook: 'Chick',
    msg: 'Hi, my mom said you would give me 10 wood planks for my school project.',
    yes: {
      msg: 'Thanks!',
      materials: 10,
      happiness: 7,
    },
    no: {
      msg: "WHAAAAA! My mom's gonna be mad!",
      happiness: 7,
      spawn: 'Chicken1',
      delay: 2,
    },
  },
  // takes 25 materials because you didn't give some to chick
  Chicken1: {
    blook: 'Chicken',
    msg: "You didn't give my son what he wanted. Now I'll be taking some extra.",
    materials: 30,
  },
  // asks to build a chicken coop, materials for people
  Chicken2: {
    blook: 'Chicken',
    msg: 'Can I have 17 materials to build a coop for some new chickens?',
    yes: {
      msg: 'Thanks so much! The other chickens will love this!',
      materials: 17,
      people: 17,
    },
    no: {
      msg: "Oh, well now I'm sad.",
      happiness: 6,
    },
  },
  // waffles, pancakes, french toast
  Waffle: {
    blook: 'Waffle',
    msg: 'Do you like waffles?',
    yes: {
      msg: 'Yeah, we like waffles!',
      happiness: 5,
      spawn: 'Pancakes',
      forceNext: true,
    },
    no: {
      msg: 'NOOOOOOOOOOOOO!!!!!',
      happiness: 25,
    },
  },
  Pancakes: {
    blook: 'Pancakes',
    msg: 'Do you like pancakes?',
    yes: {
      msg: 'Yeah, we like pancakes!',
      happiness: 5,
      spawn: 'French Toast',
      forceNext: true,
    },
    no: {
      msg: 'NOOOOOOOOOOOOO!!!!!',
      happiness: 25,
    },
  },
  'French Toast': {
    blook: 'French Toast',
    msg: 'Do you like French Toast?',
    yes: {
      msg: "Yeah, we like French Toast! Do-do-do-do, can't wait to get a mouthful!",
      happiness: 10,
      spawn: 'Owl1',
      forceNext: true,
    },
    no: {
      msg: 'NOOOOOOOOOOOOO!!!!!',
      happiness: 25,
    },
  },
  // owl judges you for doing the waffles thing
  Owl1: {
    blook: 'Owl',
    msg: 'Judgmental Owl judges you, and takes your people.',
    people: 5,
  },
  // sheep wants to start haircut place, costs materials, makes gold
  Sheep1: {
    blook: 'Sheep',
    msg: 'Heyyy, so, like, I kind of want to start a barber shop. You think, like, I could buy some materials? I can pay.',
    yes: {
      msg: 'Ayyyy, party at my place!! Thanks so much.',
      materials: 20,
      gold: 17,
      happiness: 5,
      spawn: 'Sheep2',
      delay: 4,
    },
    no: {
      msg: "Fine, I just won't, like, follow my dreams, you know.",
      happiness: 8,
    },
  },
  // sheep wants to give you a haircut, changes happiness
  Sheep2: {
    blook: 'Sheep',
    msg: 'Umm, so like this is awkward, but like, do you want a haircut? From me?',
    yes: {
      msg: "Ayyyy, you're going to look so good!",
      happiness: 10,
    },
    no: {
      msg: "Oh, I see how it is. I guess I'll never be good enough for you.",
      happiness: 14,
    },
  },
  // horse wants to build stables, materials for gold
  Horse1: {
    blook: 'Horse',
    msg: "Howdy partner, you think I could have 15 wood for new stables. I'll pay for it.",
    yes: {
      msg: 'Thanks partner.',
      materials: 15,
      gold: 10,
      happiness: 3,
    },
    no: {
      msg: "Well, alright then. The other horses aren't going to be happy about this one.",
      happiness: 5,
    },
  },
  // horse wants hands to help harvest the fields
  Horse2: {
    blook: 'Horse',
    msg: 'Howdy, the fields are ready to harvest. You think I could get 10 people to help out.',
    yes: {
      msg: 'Thanks partner.',
      materials: 15,
      people: 10,
    },
    no: {
      msg: "Darn it, well, that's another year of wasted crops.",
      happiness: 6,
    },
  },
  // horse wants extra hay, gets sad without it
  Horse3: {
    blook: 'Horse',
    msg: 'Howdy, you think I could have some extra hay?',
    yes: {
      msg: 'Well thanks partner.',
      materials: 12,
      happiness: 12,
    },
    no: {
      msg: 'Neigh...',
      happiness: 7,
    },
  },
  // cow speaks in puns, wants land to move to
  Cow1: {
    blook: 'Cow',
    msg: 'The cows are having some friends over, you mind if we MOO-ve to some new land?',
    yes: {
      msg: "That's MOO-tastic!",
      materials: 12,
      happiness: 6,
      people: 10,
    },
    no: {
      msg: "Wow, you're so MOO-dy.",
      happiness: 10,
    },
  },
  // cow wants a guitar
  Cow2: {
    blook: 'Cow',
    msg: 'Hey, can I get some gold for a guitar for MOO-sic class?',
    yes: {
      msg: "That's MOO-gnificent!",
      happiness: 13,
      gold: 7,
    },
    no: {
      msg: "Hmmm, well you're in a really bad MOO-d.",
      happiness: 10,
    },
  },
  // cow wants to throw a movie party
  Cow3: {
    blook: 'Cow',
    msg: 'So the Cows want to throw a big MOO-vie party, can we get some resources?',
    yes: {
      msg: 'Thanks! It will be a truly MOO-ving experience!',
      happiness: 9,
      people: 15,
      gold: 8,
      materials: 15,
    },
    no: {
      msg: 'MOOOOOO!!!!',
      happiness: 7,
    },
  },
  // cat speaks in lolcats, wants a hamburger
  Cat1: {
    blook: 'Cat',
    msg: 'I CAN HAS GOLD 4 HAMBURGER??',
    yes: {
      msg: 'THANK U KIND HOOMAN',
      happiness: 10,
      gold: 7,
    },
    no: {
      msg: 'I IS SAD NAO',
      happiness: 8,
    },
  },
  // cat has a gold coin
  Cat2: {
    blook: 'Cat',
    msg: 'LOOK, I HAS GOLD COIN.',
    yes: {
      msg: 'I HOPE U LIEK MAH PRESENT',
      gold: 10,
    },
    no: {
      msg: 'OH, FINE IZ MAH GOLD COIN NAO',
      happiness: 5,
    },
  },
  // cat wants to be pet
  Cat3: {
    blook: 'Cat',
    msg: 'GIMIE PETS PLZ',
    yes: {
      msg: 'YAYYY! THANKS HOOMAN!',
      happiness: 7,
    },
    no: {
      msg: '¿POR QUÉ?',
      happiness: 10,
    },
  },
  // goat wants to go on an adventure, random results
  Goat1: {
    blook: 'Goat',
    msg: 'Hello, Your Majesty. I am Goatee The Second. I request resources to go on an adventure to the Mountains of Winterfrost.',
    yes: {
      msg: 'Thank you. I will speak to you again once I return.',
      gold: 8,
      materials: 9,
      people: 7,
      spawnArray: ['Goat2', 'Goat3', 'Goat4'],
      delay: 4,
    },
    no: {
      msg: 'Very well, Your Highness, I shall obey your orders.',
      happiness: 5,
    },
  },
  Goat2: {
    blook: 'Goat',
    msg: 'Your Majesty, I am ashamed to say that I failed to reach the Mountains of Winterfrost.',
  },
  Goat3: {
    blook: 'Goat',
    msg: 'Your Majesty, I have returned with a chest full of gold from my quest!',
    gold: 30,
  },
  Goat4: {
    blook: 'Goat',
    msg: 'Your Majesty, I have returned with resources and brave warriors I met on my travels.',
    materials: 17,
    people: 17,
  },
  // toucan collects taxes every so many turns (spawned by game)
  Toucan1: {
    blook: 'Toucan',
    msg: "Hello! I'm Tax Toucan. It's time to pay your kingdom's taxes. 15 gold please.",
    yes: {
      msg: 'Great! Thank you!',
      gold: 15,
    },
    no: {
      msg: 'Very well. I apologize for what comes next.',
      spawn: 'Dragon1',
      forceNext: true,
    },
  },
  // dragon comes and hurts you really bad if you don't pay your taxes
  Dragon1: {
    blook: 'Dragon',
    msg: 'PAY. YOUR. TAXES.',
    materials: -100,
    people: -100,
    happiness: -100,
    gold: -100,
  },
  // pig wants to build new pig pen
  Pig1: {
    blook: 'Pig',
    msg: 'Ummmmmm... Oh yeah, I need to cover stuff in mud for, ummm..., new pigs?',
    yes: {
      msg: "Ummmm... yeah thanks, sorry if people don't like the mud",
      materials: 7,
      happiness: 10,
      people: 14,
    },
    no: {
      msg: 'Hmmmm..., ok.',
      happiness: 6,
    },
  },
  // pig wants to invite 3 little pigs
  Pig2: {
    blook: 'Pig',
    msg: 'Ummmmm... Can you let my 3 little pig friends in?',
    yes: {
      msg: "Ummmm... cool, they're kind of annoying though.",
      people: 3,
      spawn: 'Pig3',
      forceNext: true,
    },
    no: {
      msg: 'Ummm... whatever...',
      happiness: 5,
    },
  },
  // little pig 1 wants to build a house
  Pig3: {
    blook: 'Pig',
    msg: "Heyo, I'm Wilbur. You think I could get some hay to build a super secure house for my friends?",
    yes: {
      msg: 'Awesome, dude! This will for sure protect me.',
      materials: 10,
      people: 5,
      happiness: 5,
      spawn: 'Pig4',
      forceNext: true,
    },
    no: {
      msg: 'Come on man, it was such a good idea.',
      happiness: 6,
      spawn: 'Pig4',
      forceNext: true,
    },
  },
  // little pig 2 wants a gold necklace
  Pig4: {
    blook: 'Pig',
    msg: "Yo dawg, I'm Albert. You think I could get a gold necklace to look super cool?",
    yes: {
      msg: 'Right on, my man.',
      gold: 10,
      happiness: 10,
      spawn: 'Pig5',
      forceNext: true,
    },
    no: {
      msg: 'Awww man, not cool.',
      happiness: 10,
      spawn: 'Pig5',
      forceNext: true,
    },
  },
  // little pig 3 wants to play fortnite
  Pig5: {
    blook: 'Pig',
    msg: "Hey man, I'm Oliver. You wanna play some Fortnite?",
    yes: {
      msg: "Yeah dude, we're cool!",
      happiness: 10,
      materials: 5,
      spawn: 'Owl1',
      forceNext: true,
    },
    no: {
      msg: "Yeah, that's probably smart.",
      happiness: 5,
    },
  },
  // bear asks if he can eat people
  Bear1: {
    blook: 'Bear',
    msg: 'Hey, do you think I could eat some people?',
    yes: {
      msg: 'Thanks!',
      people: 10,
      happiness: 7,
    },
    no: {
      msg: 'Ok, maybe next time.',
      happiness: 5,
    },
  },
  // bear asks to pay back for people he already ate
  Bear2: {
    blook: 'Bear',
    msg: 'Hey, I just ate some people out back, can I pay you back for my mistake?',
    yes: {
      msg: 'Cool, and sorry about the whole eating people thing.',
      people: 10,
      happiness: 5,
      gold: 15,
    },
    no: {
      msg: 'Dang, well, I still ate them.',
      people: 10,
      happiness: 5,
    },
  },
  // bear won't eat people if you buy him some salmon
  Bear3: {
    blook: 'Bear',
    msg: "Ok, I won't eat people if you buy me some salmon. How does that sound?",
    yes: {
      msg: 'Great!',
      gold: 14,
      happiness: 10,
    },
    no: {
      msg: 'Welp, sorry.',
      people: 15,
    },
  },
  // duck asks for grapes
  Duck1: {
    blook: 'Duck',
    msg: 'Hey, got any grapes?',
    yes: {
      msg: 'Thanks!',
      materials: 7,
      happiness: 10,
    },
    no: {
      msg: 'Oh, ok. (Then he waddled away)',
      happiness: 5,
    },
  },
  // duck wants to bring annoying ducklings
  Duck2: {
    blook: 'Duck',
    msg: 'Can I bring some annoying ducklings to add people to the kingdom?',
    yes: {
      msg: "Yay, sorry if they're a little loud. (Quacks echo in the background)",
      people: 12,
      happiness: 10,
    },
    no: {
      msg: 'I guess that makes sense.',
      happiness: 5,
    },
  },
  // duck wants to take materials from people
  Duck3: {
    blook: 'Duck',
    msg: 'I need some resources for a trampoline. Can I take them from people and give you some?',
    yes: {
      msg: 'Here you go! Good working with you.',
      materials: 12,
      happiness: 13,
    },
    no: {
      msg: 'Whatever.',
      happiness: 5,
    },
  },
  // fox wants to do some swiping to get you gold
  Fox1: {
    blook: 'Fox',
    msg: "I'd like to do some swiping? I promise I'll give you gold for it.",
    yes: {
      msg: "You aren't so bad after all.",
      gold: 14,
      happiness: 17,
    },
    no: {
      msg: "You're not any fun.",
      happiness: 5,
    },
  },
  // fox wants resources to do some swiping
  Fox2: {
    blook: 'Fox',
    msg: "Can I invite some friends to the kingdom? We're going to rob the bank.",
    yes: {
      msg: 'Ok then.',
      people: 12,
      gold: 18,
    },
    no: {
      msg: "I really don't understand your reasoning.",
      happiness: 4,
    },
  },
  // fox wants to steal some people from your kingdom for gold
  Fox3: {
    blook: 'Fox',
    msg: "Can I get a few people from your kingdom to join my crew? I'll pay gold for them.",
    yes: {
      msg: 'This is perfect!',
      people: 14,
      gold: 15,
    },
    no: {
      msg: 'Whatever you say.',
      happiness: 6,
    },
  },
  // rabbit wants to sell you carrots
  Rabbit1: {
    blook: 'Rabbit',
    msg: "Ok. Ok. I'll sell you 10 carrots for 10 gold. Sound good?",
    yes: {
      msg: 'SOLD!',
      materials: 10,
      gold: 10,
    },
    no: {
      msg: "Apparently you don't know what a good deal is.",
      happiness: 7,
    },
  },
  // rabbit wants to invite fellow businessmen
  Rabbit2: {
    blook: 'Rabbit',
    msg: 'Hey, can I invite some fellow businessmen to the kingdom?',
    yes: {
      msg: "Thanks! Trust me, they're good guys.",
      people: 10,
      happiness: 5,
    },
    no: {
      msg: 'Why not?',
      happiness: 5,
    },
  },
  // rabbit wants to make you gold for happiness
  Rabbit3: {
    blook: 'Rabbit',
    msg: 'Here me out, we dig a river through some homes, make some people mad, but make a bunch of gold from the trade route?',
    yes: {
      msg: "Now, we're doing business.",
      gold: 15,
      happiness: 15,
      materials: 7,
      people: 7,
    },
    no: {
      msg: "Jeez, some people just don't want to be rich.",
      happiness: 6,
    },
  },
  // kitten speaks like cat
  Kitten1: {
    blook: 'Kitten',
    msg: 'I SPEEK LIEK DIS 2, NAO GIMIE GOLD 4 HAMBURGER',
    yes: {
      msg: 'THX HOOMAN',
      gold: 4,
      happiness: 10,
    },
    no: {
      msg: 'NOOOOOOOOOO',
      happiness: 10,
    },
  },
  // moose wants to be a cow
  Moose1: {
    blook: 'Moose',
    msg: "Look, I'm a cow!",
    yes: {
      msg: "Thanks, I'm really trying.",
      happiness: 7,
      spawn: 'Moose2',
      delay: 4,
    },
    no: {
      msg: 'But I try so hard.',
      happiness: 10,
      spawn: 'Moose2',
      delay: 4,
    },
  },
  // moose tries moo-ing
  Moose2: {
    blook: 'Moose',
    msg: 'MOOOOOOO!!!',
    yes: {
      msg: "I know, I'm getting better, right?",
      happiness: 7,
      spawn: 'Moose3',
      delay: 4,
    },
    no: {
      msg: "Come on, I've been working on that.",
      happiness: 10,
      spawn: 'Moose3',
      delay: 4,
    },
  },
  // moose tries moo puns
  Moose3: {
    blook: 'Moose',
    msg: "Look, I'm a MOO-se!",
    yes: {
      msg: 'I knew that would work!',
      happiness: 7,
    },
    no: {
      msg: 'I really thought that would work.',
      happiness: 10,
    },
  },
  // raccoon wants to kick people out
  Raccoon1: {
    blook: 'Raccoon',
    msg: "Come on, it's overcrowded here. Let's kick some people out or we'll use too many materials.",
    yes: {
      msg: "You're a smart person.",
      materials: 15,
      people: 13,
    },
    no: {
      msg: 'Wahhhhhhh.',
      materials: 10,
    },
  },
  // raccoon wants to prank some people
  Raccoon2: {
    blook: 'Raccoon',
    msg: "Come on, I'm bored. Can I go prank some people? Otherwise, I'm just stealing your stuff.",
    yes: {
      msg: 'Finally.',
      happiness: 16,
    },
    no: {
      msg: "You're choice, not mine.",
      materials: 16,
    },
  },
  // raccoon wants gold
  Raccoon3: {
    blook: 'Raccoon',
    msg: "Come on, don't you think you're a little selfish? Give me some gold. Otherwise, I'm chasing people out of this kingdom.",
    yes: {
      msg: 'Wow, look at the selfish ruler being a little bit kind.',
      gold: 16,
    },
    no: {
      msg: 'Whatever, bye, bye people.',
      people: 16,
    },
  },
  // turtle wants to help out
  Turtle1: {
    blook: 'Turtle',
    msg: 'Hello! I just met some new turtles. Can they come over and play?',
    yes: {
      msg: 'Yayyy! Thanks! I just needed some materials for them too.',
      people: 10,
      happiness: 5,
      materials: 10,
    },
    no: {
      msg: 'Awwww, ok.',
      happiness: 8,
    },
  },
  // turtle wants to know if he's fat
  Turtle2: {
    blook: 'Turtle',
    msg: "Do you think I'm getting too fat?",
    yes: {
      msg: 'Dang, my mom was right.',
      happiness: 15,
    },
    no: {
      msg: "That's what I said. Here's some gold, you're the best.",
      happiness: 7,
      gold: 7,
    },
  },
  // turtle wants to start a farm
  Turtle3: {
    blook: 'Turtle',
    msg: "I've been mining some gold, but I think I should start a farm. Should I be a farmer?",
    yes: {
      msg: 'Great, I love farming.',
      materials: 12,
    },
    no: {
      msg: 'I guess mining for gold is fine.',
      gold: 10,
    },
  },
  // dog tells you to not give his son gold
  Dog1: {
    blook: 'Dog',
    msg: "There's going to be a Puppy talking to you in a while, please do not give him gold.",
    spawn: 'Puppy1',
    delay: 3,
  },
  // dog is mad that you gave the puppy gold
  Dog2: {
    blook: 'Dog',
    msg: 'I told you not to give him gold. He just spent it all on candy and trashed a bunch of resources.',
    materials: 25,
    happiness: 10,
  },
  // dog is happy you didn't give the puppy gold
  Dog3: {
    blook: 'Dog',
    msg: 'Great job not giving him gold! Now I can trust this kingdom with my other puppies.',
    people: 7,
    happiness: 7,
  },
  // dog wants people to find a treasure chest
  Dog4: {
    blook: 'Dog',
    msg: "Can I have some people and we'll get you a treasure chest?",
    yes: {
      msg: 'Radical!',
      gold: 15,
      people: 11,
    },
    no: {
      msg: "You don't want more gold?",
      happiness: 5,
    },
  },
  // puppy asks for gold, but dog already told you not to give it to them
  Puppy1: {
    blook: 'Puppy',
    msg: 'I feel really sick, can I have some gold to buy medicine?',
    yes: {
      msg: 'Thanks, hopefully I feel better soon!',
      happiness: 15,
      gold: 12,
      spawn: 'Dog2',
      forceNext: true,
    },
    no: {
      msg: 'Dang it, you got me!',
      spawn: 'Dog3',
      forceNext: true,
    },
  },
  // goldfish wants to flood the city
  Goldfish1: {
    blook: 'Goldfish',
    msg: 'Do you think I could flood the city so I can swim everywhere?',
    yes: {
      msg: 'Great, this might not be great for everyone else though.',
      happiness: 5,
      people: 15,
      materials: 15,
    },
    no: {
      msg: 'Fine.',
      happiness: 5,
    },
  },
  // goldfish wants to buy a cotton candy machine
  Goldfish2: {
    blook: 'Goldfish',
    msg: "Let's buy a cotton candy machine and invite everyone we know!",
    yes: {
      msg: 'PARTY TIME!',
      gold: 18,
      happiness: 10,
      people: 7,
    },
    no: {
      msg: 'What do you have against cotton candy?',
      happiness: 5,
    },
  },
  // goldfish forgets where he put his phone
  Goldfish3: {
    blook: 'Goldfish',
    msg: 'I forget, where did I leave my phone?',
    yes: {
      msg: 'Ok, not really a yes or no question though.',
      happiness: 5,
    },
    no: {
      msg: 'Ok, not really a yes or no question though.',
      happiness: 5,
    },
  },
  // squirrel is going nuts and needs gold
  Squirrel1: {
    blook: 'Squirrel',
    msg: "I'm going NUTS dude, can I have some gold to get some help?",
    yes: {
      msg: 'Hopefully this works.',
      gold: 14,
      happiness: 14,
    },
    no: {
      msg: "Ahhh, ok, but I don't think everyone else is very happy with me.",
      happiness: 12,
    },
  },
  // squirrel wants to build a tree house
  Squirrel2: {
    blook: 'Squirrel',
    msg: 'Can I get some wood to build a treehouse for my cousins?',
    yes: {
      msg: 'Thanks, I love trees.',
      materials: 12,
      people: 14,
    },
    no: {
      msg: "Oh, so I guess they're not going over for dinner.",
      happiness: 6,
    },
  },
  // squirrel wants to go to a party instead of gathering nuts
  Squirrel3: {
    blook: 'Squirrel',
    msg: 'I should be gathering nuts, but can I go to a party instead?',
    yes: {
      msg: "That's what we're talking about.",
      happiness: 10,
    },
    no: {
      msg: 'Fine, more nuts for you.',
      materials: 12,
      happiness: 10,
    },
  },
  // hedgehog wants gold to buy hedge trimmers
  Hedgehog1: {
    blook: 'Hedgehog',
    msg: "Can I get some gold for hedge trimmers to do some hedging, I'll give you the extra branches?",
    yes: {
      msg: "You're the best!",
      gold: 14,
      materials: 14,
    },
    no: {
      msg: 'But, I like hedging.',
      happiness: 6,
    },
  },
  // hedgehog wants to kick out Chad's
  Hedgehog2: {
    blook: 'Hedgehog',
    msg: 'Hey, can we kick out everyone named Chad?',
    yes: {
      msg: 'Take that, Chad.',
      people: 11,
      happiness: 12,
    },
    no: {
      msg: "So we're just going to have Chad's walking around?",
      happiness: 9,
    },
  },
  // hedgehog wants to hurt people
  Hedgehog3: {
    blook: 'Hedgehog',
    msg: 'Can I go hurt some people with my spikes?',
    yes: {
      msg: "I like you're styling.",
      people: 8,
      happiness: 12,
    },
    no: {
      msg: 'Boring...',
      happiness: 5,
    },
  },
  // tiger wants you to buy some cereal to attract people
  Tiger1: {
    blook: 'Tiger',
    msg: "Can I get some materials and gold to build a cereal factory? It'll bring jobs to the kingdom.",
    yes: {
      msg: "They're grrrrrreat!",
      gold: 10,
      materials: 15,
      people: 15,
      happiness: 10,
    },
    no: {
      msg: 'Cereal is so good though.',
      happiness: 9,
    },
  },
  // tiger wants to play tag
  Tiger2: {
    blook: 'Tiger',
    msg: 'Can I play tag with some other people in the kingdom?',
    yes: {
      msg: 'Oh, I think I may have hurt some of them.',
      people: 15,
      happiness: 12,
    },
    no: {
      msg: "Fine, I'll just chase my tail.",
      happiness: 7,
    },
  },
  // tiger wants trees for his cubs
  Tiger3: {
    blook: 'Tiger',
    msg: 'Hey, I need to cut down part of the rainforest to build shelter for my cubs.',
    yes: {
      msg: "Thanks, people don't seem to be happy about the rainforest though.",
      materials: 10,
      people: 15,
      happiness: 14,
    },
    no: {
      msg: 'I guess we just have to leave the kingdom then.',
      people: 9,
    },
  },
  // orangutan wants stuff to do research
  Orangutan1: {
    blook: 'Orangutan',
    msg: 'Hello. I am Dr. Stephen Norwitz. May have some resources to perform scientific research?',
    yes: {
      msg: 'Thank you, I will report back soon with my findings.',
      materials: 12,
      people: 8,
      gold: 8,
      spawnArray: ['Orangutan2', 'Orangutan3', 'Orangutan4'],
      delay: 4,
    },
    no: {
      msg: 'Very well, perhaps another time.',
      happiness: 4,
    },
  },
  // orangutan needs more stuff
  Orangutan2: {
    blook: 'Orangutan',
    msg: 'Your Majesty, my research has been very successful, but I request more resources to finish up?',
    yes: {
      msg: 'Thank you, I will return soon.',
      materials: 10,
      people: 7,
      gold: 7,
      spawnArray: ['Orangutan5', 'Orangutan6'],
      delay: 4,
    },
    no: {
      msg: "Oh, well I guess I'll just scrap that project then.",
      happiness: 8,
    },
  },
  // orangutan made evil monkey
  Orangutan3: {
    blook: 'Orangutan',
    msg: 'So, my research went a little bit wrong. I accidentally mutated a monkey to make it extremely evil.',
    people: 5,
    happiness: 15,
  },
  // orangutan improved agriculture
  Orangutan4: {
    blook: 'Orangutan',
    msg: 'Finally, I have completed my research. We were able to modify the genes of our plants to improve their output.',
    materials: 27,
    people: 9,
  },
  // after phase 2, orangutan made a successful battle royale game
  Orangutan5: {
    blook: 'Orangutan',
    msg: 'YES! My research has created a very profitable and entertaining Battle Royale game.',
    gold: 30,
    happiness: 30,
  },
  // after phase 2, orangutan
  Orangutan6: {
    blook: 'Orangutan',
    msg: 'YES! My research has created a miracle pill to cure disease around the kingdom.',
    people: 35,
    happiness: 25,
  },
  // cockatoo doesn't want you to trust the parrot
  Cockatoo1: {
    blook: 'Cockatoo',
    msg: 'Ok, look, do not trust anything the red parrot says.',
    spawnArray: ['Parrot1', 'Parrot2', 'Parrot3', 'Parrot3'],
    delay: 2,
  },
  // parrot just wants to bring friends over, but they steal a bunch of stuff (cockatoo warned you)
  Parrot1: {
    blook: 'Parrot',
    msg: "Hey, can I invite some of my friends to the kingdom? They're really good birds.",
    yes: {
      msg: "Oh no, I didn't think they would steal all that stuff, sorry.",
      materials: 15,
      gold: 15,
      people: 10,
      happiness: 10,
      spawn: 'Owl1',
      forceNext: true,
    },
    no: {
      msg: "Dang it, you're too smart for me.",
    },
  },
  // parrot wants gold to give you gold
  Parrot2: {
    blook: 'Parrot',
    msg: "I just learned how to duplicate gold! Give me 15 gold, and I'll give you 30 back!",
    yes: {
      msg: "Sorry, it didn't work that time.",
      gold: 15,
    },
    no: {
      msg: 'Fine, more gold for me.',
    },
  },
  // parrot tells you not to trust macaw
  Parrot3: {
    blook: 'Parrot',
    msg: "Look, do not listen to the Macaw, he's such a liar.",
    spawnArray: ['Macaw1', 'Macaw2', 'Macaw3'],
    delay: 1,
  },
  // macaw wants to kick the parrot out for pooping everywhere
  Macaw1: {
    blook: 'Macaw',
    msg: 'Come on, the Parrot keeps pooping everywhere. Can we kick him out?',
    yes: {
      msg: 'Thank goodness.',
      happiness: 12,
      people: 1,
    },
    no: {
      msg: "Why not? Didn't you listen to the Cockatoo?",
      happiness: 17,
    },
  },
  // macaw has a suspicious chest that is actually good
  Macaw2: {
    blook: 'Macaw',
    msg: 'Hey, do you want this treasure chest that is definitely not a trap?',
    yes: {
      msg: 'Cool! Here you go!',
      materials: 15,
      gold: 15,
    },
    no: {
      msg: 'Fine, more for me!',
    },
  },
  // macaw wants to invite suspicious friends
  Macaw3: {
    blook: 'Macaw',
    msg: 'Hey, can I invite my friends over? They are definitely not bad people that will make you regret this decision.',
    yes: {
      msg: "Yayyy! They're so nice!",
      people: 15,
      happiness: 5,
    },
    no: {
      msg: "Fine, then I'm taking my friends to a different kingdom.",
      people: 10,
      happiness: 7,
    },
  },
  // Anaconda wants to slither around people's homes
  Anaconda1: {
    blook: 'Anaconda',
    msg: "Let me slither around people's houses. Now.",
    yes: {
      msg: 'Yes. Finally.',
      happiness: 15,
      people: 5,
    },
    no: {
      msg: "You're no fun.",
      happiness: 7,
    },
  },
  // Anaconda wants to bit some people
  Anaconda2: {
    blook: 'Anaconda',
    msg: 'You are going to let me bite some people.',
    yes: {
      msg: 'Just as I planned.',
      happiness: 15,
      people: 8,
    },
    no: {
      msg: 'Really?',
      happiness: 7,
    },
  },
  // Anaconda needs materials, otherwise he'll take gold
  Anaconda3: {
    blook: 'Anaconda',
    msg: "You are giving me materials. Otherwise, I'm taking your gold.",
    yes: {
      msg: 'Good choice.',
      materials: 10,
    },
    no: {
      msg: 'Works for me.',
      gold: 15,
    },
  },
  // jaguar is a youtube star
  Jaguar1: {
    blook: 'Jaguar',
    msg: "What's up everyone? I'm Jaggy! Y'all think you can go hit that like and subscribe button?",
    yes: {
      msg: 'Thanks so much! Welcome to the Jaggy Squad!',
      happiness: 12,
    },
    no: {
      msg: 'Awwwww, come on people.',
      happiness: 8,
    },
  },
  // jaguar wants to build a rainbow ball pit
  Jaguar2: {
    blook: 'Jaguar',
    msg: 'Heyo! Can I get 20 gold to turn a pool into a super useful rainbow ball pit?',
    yes: {
      msg: 'This may not have been a great investment.',
      gold: 20,
      happiness: 15,
    },
    no: {
      msg: 'Ok, alright, ok.',
      happiness: 7,
    },
  },
  // jaguar wants people to try vegetarian bacon
  Jaguar3: {
    blook: 'Jaguar',
    msg: 'Ok. Can I get some people to test my vegetarian bacon?',
    yes: {
      msg: "I don't think they liked it.",
      people: 10,
      happiness: 13,
    },
    no: {
      msg: "Fine, I'll just eat it myself.",
      happiness: 6,
    },
  },
  // panther wants to sell you some minerals
  Panther1: {
    blook: 'Panther',
    msg: 'Hello, would you like to buy some advanced minerals for 15 gold?',
    yes: {
      msg: "I think you'll be happy with your purchase.",
      gold: 15,
      materials: 16,
    },
    no: {
      msg: 'Very well.',
      happiness: 6,
    },
  },
  // panther wants to sing karaoke
  Panther2: {
    blook: 'Panther',
    msg: 'Hey, can I have some gold for a karaoke machine?',
    yes: {
      msg: "Nice. You're singing with me, right?",
      gold: 14,
      happiness: 17,
    },
    no: {
      msg: 'You missed a big opportunity here.',
      happiness: 6,
    },
  },
  // panther wants to build more houses
  Panther3: {
    blook: 'Panther',
    msg: "I know it'll make some people mad, but you should build houses instead of that new park. Right?",
    yes: {
      msg: 'I think this is a good decision.',
      people: 15,
      happiness: 17,
    },
    no: {
      msg: 'Well, that still makes me upset.',
      happiness: 6,
    },
  },
  // capuchin wants to try to invent something
  Capuchin1: {
    blook: 'Capuchin',
    msg: 'Hey, can I get 17 materials to create an invention?',
    yes: {
      msg: "Awesome, I'll let you know how it goes.",
      materials: 17,
      spawnArray: ['Capuchin2', 'Capuchin2', 'Capuchin3', 'Capuchin3', 'Capuchin4'],
      delay: 3,
    },
    no: {
      msg: "You don't trust me? I shall return.",
      happiness: 5,
    },
  },
  // capuchin created a super pogo stick
  Capuchin2: {
    blook: 'Capuchin',
    msg: "Look, I created the Super Pogo Stick 4000! It's selling like crazy!",
    gold: 17,
    happiness: 12,
  },
  // capuchin created human cloning ice cream
  Capuchin3: {
    blook: 'Capuchin',
    msg: 'Look, I created ice cream that allows people to clone themselves!',
    people: 20,
  },
  // capuchin's invention went poorly
  Capuchin4: {
    blook: 'Capuchin',
    msg: 'My invention did not go well.',
    people: 10,
    happiness: 10,
  },
  // snowy owl wants to be a spy for you
  SnowyOwl1: {
    blook: 'Snowy Owl',
    msg: "Shhhh... Give me 15 gold and I'll be a spy for you.",
    yes: {
      msg: "I'll report back soon.",
      gold: 15,
      spawnArray: ['SnowyOwl2', 'SnowyOwl3', 'SnowyOwl4'],
      delay: 3,
    },
    no: {
      msg: 'Good luck without me.',
      happiness: 5,
    },
  },
  // snowy owl found someone stealing your materials
  SnowyOwl2: {
    blook: 'Snowy Owl',
    msg: 'Reporting back. I found someone stealing materials from your warehouse.',
    materials: 15,
  },
  // snowy owl found people hiding in the kingdom
  SnowyOwl3: {
    blook: 'Snowy Owl',
    msg: 'Reporting back. I found some people hiding in your kingdom.',
    people: 15,
  },
  // snowy owl found people not paying taxes
  SnowyOwl4: {
    blook: 'Snowy Owl',
    msg: 'Reporting back. I found some people not paying taxes.',
    gold: 20,
  },
  // polar bear wants to turn down the air to save the ice
  PolarBear1: {
    blook: 'Polar Bear',
    msg: "Do you think we could turn down the air so our ice doesn't melt?",
    yes: {
      msg: 'Maybe we made it too cold.',
      materials: 18,
      happiness: 12,
      people: 10,
    },
    no: {
      msg: "Well it won't be ice for much longer then.",
      materials: 10,
    },
  },
  // polar bear wants to freeze people
  PolarBear2: {
    blook: 'Polar Bear',
    msg: 'Do you think I could test out my freeze ray on some people?',
    yes: {
      msg: 'It works!',
      people: 10,
      happiness: 5,
    },
    no: {
      msg: "Then I guess we'll never know if it works or not.",
      happiness: 5,
    },
  },
  // polar bear wants to buy a snow cone machine
  PolarBear3: {
    blook: 'Polar Bear',
    msg: "Let's buy a snow cone machine for 14 gold?",
    yes: {
      msg: 'Yayyyyy!!!',
      gold: 4,
      happiness: 17,
    },
    no: {
      msg: 'That is disappointing.',
      happiness: 7,
    },
  },
  // fox asks if you know what he says
  ArcticFox1: {
    blook: 'Arctic Fox',
    msg: 'Do you know what the Arctic Fox says?',
    yes: {
      msg: 'Oh, cool.',
      happiness: 7,
    },
    no: {
      msg: 'Oh, ok.',
      happiness: 7,
    },
  },
  // fox wants to steal money for you
  ArcticFox2: {
    blook: 'Arctic Fox',
    msg: "Here's the deal: you let me steal from people, I'll give you half the profits.",
    yes: {
      msg: 'Pleasure doing business with you.',
      happiness: 15,
      gold: 17,
    },
    no: {
      msg: 'Maybe next time.',
      happiness: 5,
    },
  },
  // fox wants to buy land
  ArcticFox3: {
    blook: 'Arctic Fox',
    msg: 'Hey, can I buy 13 acres of land for 15 gold?',
    yes: {
      msg: 'Perfect!',
      gold: 15,
      materials: 13,
    },
    no: {
      msg: 'That was a great deal.',
      happiness: 5,
    },
  },
  // penguin wants to build an amusement park
  Penguin1: {
    blook: 'Penguin',
    msg: "Give me some materials and gold, and I'll build the best amusement park ever!",
    yes: {
      msg: 'I told you it would be the best ever.',
      materials: 15,
      people: 15,
      happiness: 20,
      gold: 5,
    },
    no: {
      msg: 'So, no amusement park?',
      happiness: 5,
    },
  },
  // penguin wants to go ice fishing
  Penguin2: {
    blook: 'Penguin',
    msg: 'Can I get some materials to go ice fishing and make some friends?',
    yes: {
      msg: 'My dreams are coming true!',
      materials: 15,
      people: 5,
      happiness: 10,
    },
    no: {
      msg: 'Normal fishing it is.',
      happiness: 5,
    },
  },
  // penguin tells you to only listen to one baby penguin
  Penguin3: {
    blook: 'Penguin',
    msg: 'Hey, two baby penguins are going to come by, only listen to the one named Timmy.',
    spawnArray: ['BabyPenguin1', 'BabyPenguin2'],
    delay: 2,
  },
  // baby penguin wants you to open a box (good)
  BabyPenguin1: {
    blook: 'Baby Penguin',
    msg: "Hey, I'm Timmy. You want to open this super safe box?",
    yes: {
      msg: 'That was awesome!',
      gold: 15,
      materials: 15,
      spawn: 'BabyPenguin3',
      delay: 2,
    },
    no: {
      msg: "Now we'll never know what was inside.",
      happiness: 5,
    },
  },
  // baby penguin wants you to enter a raffle (bad)
  BabyPenguin2: {
    blook: 'Baby Penguin',
    msg: "Hey, I'm Paul. You want to open this sweet raffle for 15 gold?",
    yes: {
      msg: "Dang it, you didn't win",
      gold: 15,
      spawn: 'BabyPenguin4',
      delay: 2,
    },
    no: {
      msg: "Well, you can't lose if you don't enter, I guess.",
      happiness: 5,
    },
  },
  // baby penguin wants you to give everyone a cookie (bad)
  BabyPenguin3: {
    blook: 'Baby Penguin',
    msg: "Hey, I'm Paul. Can you give everyone these cookies I just baked?",
    yes: {
      msg: "Hmmmm... People didn't seem to like them.",
      people: 10,
      happiness: 10,
    },
    no: {
      msg: "Yeah, it was my first time baking anyway. They probably weren't great.",
      happiness: 5,
    },
  },
  // baby penguin wants you to buy a heated igloo
  BabyPenguin4: {
    blook: 'Baby Penguin',
    msg: "Hey, I'm Timmy. You should buy this heated igloo for 17 gold.",
    yes: {
      msg: "I actually can't believe that worked.",
      people: 10,
      happiness: 10,
      gold: 17,
    },
    no: {
      msg: "I guess it doesn't sound like the best idea.",
      happiness: 5,
    },
  },
  // arctic hare wants his family to come to the kingdom
  ArcticHare1: {
    blook: 'Arctic Hare',
    msg: 'Can I bring my family to the kingdom?',
    yes: {
      msg: 'Niceeeee!',
      people: 9,
    },
    no: {
      msg: "I don't understand.",
      happiness: 9,
    },
  },
  // arctic hare wants to jump around and be annoying for gold
  ArcticHare2: {
    blook: 'Arctic Hare',
    msg: "It'll annoy some people, but can I jump around like crazy in the kingdom? I'll pay some gold to do it.",
    yes: {
      msg: 'Bouncy time!',
      happiness: 16,
      gold: 16,
    },
    no: {
      msg: 'So, no bouncy?',
      happiness: 5,
    },
  },
  // arctic hare wants to build a factory
  ArcticHare3: {
    blook: 'Arctic Hare',
    msg: "Can I build a factory in the kingdom to produce materials? It won't smell too good.",
    yes: {
      msg: 'I think you made the right decision.',
      happiness: 16,
      materials: 20,
      gold: 5,
    },
    no: {
      msg: 'Ok.',
      happiness: 7,
    },
  },
  // arctic hare wants to build a trampoline park
  ArcticHare4: {
    blook: 'Arctic Hare',
    msg: 'Can I build a trampoline park? It will take 20 materials?',
    yes: {
      msg: "Let's Bounce!",
      happiness: 12,
      people: 7,
      gold: 5,
      materials: 20,
    },
    no: {
      msg: 'Fine. No bouncing.',
      happiness: 8,
    },
  },
  // seal wants to build a theater
  Seal1: {
    blook: 'Seal',
    msg: 'Can I build a theater and put on a show?',
    yes: {
      msg: 'Thanks! Everyone loves the show!',
      happiness: 17,
      gold: 5,
      materials: 12,
    },
    no: {
      msg: "I won't let you crush my dreams.",
      happiness: 7,
    },
  },
  // seal wants to invite unlikeable people
  Seal2: {
    blook: 'Seal',
    msg: "Hey, can I invite my relatives to the kingdom? People probably won't like them though.",
    yes: {
      msg: "Yeah, people don't like them",
      happiness: 15,
      people: 10,
    },
    no: {
      msg: 'That makes sense.',
    },
  },
  // seal wants free rubber ducks
  Seal3: {
    blook: 'Seal',
    msg: "Hey, can I get 12 rubber ducks? I can't pay for them though.",
    yes: {
      msg: 'That was easy! Thank you!',
      happiness: 7,
      materials: 12,
    },
    no: {
      msg: 'It was still worth asking.',
      happiness: 5,
    },
  },
  // walrus wants to build defenses to protect the kingdom
  Walrus1: {
    blook: 'Walrus',
    msg: 'Ay, we need to build some defenses to protect our kingdom.',
    yes: {
      msg: 'Good choice, mate.',
      materials: 17,
      happiness: 10,
    },
    no: {
      msg: "That's unfortunate.",
      people: 15,
      happiness: 5,
    },
  },
  // walrus wants to organize a wagon wash to make you gold
  Walrus2: {
    blook: 'Walrus',
    msg: 'Ay, do you want some gold? What do you say we organize a wagon wash to raise some money?',
    yes: {
      msg: "I'll get everything set up!",
      materials: 10,
      people: 7,
      gold: 18,
    },
    no: {
      msg: 'Alright then.',
      happiness: 5,
    },
  },
  // walrus wants to go mining for materials
  Walrus3: {
    blook: 'Walrus',
    msg: 'Ay, can I get some people to go mine for minerals?',
    yes: {
      msg: 'Great thinking!',
      people: 14,
      materials: 17,
    },
    no: {
      msg: 'Whatever you say, mate.',
      happiness: 3,
    },
  },
  // wizard wants to cast an unknown spell
  Wizard1: {
    blook: 'Wizard',
    msg: "I've been learning magic. Do you think I could cast a spell on your kingdom? It could be good.",
    yes: {
      array: [
        {
          // wizard spell made gold
          msg: 'YES! The spell made a bunch of gold appear!',
          gold: 25,
        }, {
          // wizard spell decreased everything but gold
          msg: "NO! The spell didn't go so well.",
          people: 15,
          materials: 15,
          happiness: 15,
        }, {
          // wizard spell gave us materials and people
          msg: 'YES! The spell produced many great rewards!',
          materials: 15,
          people: 15,
        },
      ],
    },
    no: {
      msg: "I'll just keep practicing then.",
      happiness: 7,
    },
  },
  // wizard wants you to drink his potion
  Wizard2: {
    blook: 'Wizard',
    msg: "So, I've been learning about potion brewing. Can I give my potions to a few people in town?",
    yes: {
      array: [
        {
          // wizard's potion cloned people
          msg: 'WOW! The potion cloned everyone who drank it!',
          people: 20,
        }, {
          // wizard's potion turned people into fire-breathing frogs
          msg: 'OUCH! The potion turned people into fire-breathing frogs.',
          people: 10,
          materials: 15,
          happiness: 15,
        }, {
          // wizard's potion make workers extra productive
          msg: 'AWESOME! The potion made your workers extra productive!',
          gold: 15,
          materials: 15,
        },
      ],
    },
    no: {
      msg: "I'll just keep learning then.",
      happiness: 10,
      materials: 15,
      gold: 15,
      people: 10,
    },
  },
  // wizard needs materials to fend off the slime monster
  Wizard3: {
    blook: 'Wizard',
    msg: 'Hey, I think the Giant Slime Monster is going to attack soon. Can I get 25 materials to create a spell to defend us?',
    yes: {
      msg: 'Thanks. We should be protected now',
      materials: 25,
      happiness: 5,
    },
    no: {
      msg: 'Oh, well this is bad.',
      spawn: 'SlimeMonster1',
      forceNext: true,
    },
  },
  // slime monster wreaks havoc because the wizard didn't cast a spell
  SlimeMonster1: {
    blook: 'Slime Monster',
    msg: 'GET SLIMED!',
    materials: 10,
    people: 15,
    happiness: 20,
    gold: 15,
  },
  // elf wants to protect the trees
  Elf1: {
    blook: 'Elf',
    msg: "Please don't cut down the forest for materials. What if I give you 15 gold to not cut it down?",
    yes: {
      msg: 'Thanks so much!',
      gold: 15,
    },
    no: {
      msg: 'The poor trees.',
      materials: 15,
      happiness: 9,
    },
  },
  // elf wants to move elf tribe into the kingdom
  Elf2: {
    blook: 'Elf',
    msg: "For 10 gold, I'll move my entire elf tribe into the kingdom. What do you say?",
    yes: {
      msg: 'Great call!',
      people: 15,
      gold: 10,
      happiness: 5,
    },
    no: {
      msg: "Fine, we'll find another kingdom.",
      happiness: 7,
    },
  },
  // elf needs you to cancel the carnival to protect from the slime
  Elf3: {
    blook: 'Elf',
    msg: "People will hate this, but I need you to cancel the carnival. The Slime Monster is coming and we can't have people outside.",
    yes: {
      msg: "That's a great decision.",
      happiness: 15,
    },
    no: {
      msg: 'This will go terribly.',
      spawn: 'SlimeMonster2',
      forceNext: true,
    },
  },
  // slime monster wreaks havoc because you let the carnival happen
  SlimeMonster2: {
    blook: 'Slime Monster',
    msg: 'GET SLIMED!',
    materials: 5,
    people: 20,
    happiness: 10,
    gold: 10,
  },
  // elf needs materials to rebuild houses after fires
  Elf4: {
    blook: 'Elf',
    msg: 'Some of our houses burned down in a fire. Can I get some materials to rebuild?',
    yes: {
      msg: 'Thanks so much!',
      materials: 16,
      happiness: 6,
    },
    no: {
      msg: 'But, our houses are gone...',
      people: 10,
      happiness: 11,
    },
  },
  // fairy wants to be released for a bit
  Fairy1: {
    blook: 'Fairy',
    msg: 'Hey, can I be released for a few hours?',
    yes: {
      msg: "Great! I'll let you know what happens!",
      happiness: 7,
      spawnArray: ['Fairy2', 'Fairy3', 'Fairy4'],
      delay: 3,
    },
    no: {
      msg: "I guess I'll just stay in this bottle then.",
      happiness: 10,
    },
  },
  // fairy turned things gold while released
  Fairy2: {
    blook: 'Fairy',
    msg: 'Look! I turned some things gold while I was released.',
    materials: 10,
    gold: 17,
  },
  // fairy messed some stuff up while released
  Fairy3: {
    blook: 'Fairy',
    msg: "I... I... I don't know what happened.",
    materials: 5,
    people: 10,
    happiness: 10,
    gold: 5,
  },
  // fairy did some exploring
  Fairy4: {
    blook: 'Fairy',
    msg: 'Hey, I did some exploring while you let me free, and I found some cool stuff.',
    materials: 15,
    people: 10,
  },
  // fairy wants to pay to try to turn people to fairies in her own world
  Fairy5: {
    blook: 'Fairy',
    msg: "I'll give you some gold if you let me take some of your people to the Fairy World.",
    yes: {
      msg: "They're going to love it there!",
      gold: 12,
      people: 15,
    },
    no: {
      msg: "I guess we'll just stay here.",
      happiness: 7,
    },
  },
  // fairy wants to gold to have a sleep over
  Fairy6: {
    blook: 'Fairy',
    msg: 'Can I get some gold to have a sleepover with some friends?',
    yes: {
      msg: 'This will be the best sleepover ever!',
      people: 7,
      happiness: 13,
      gold: 12,
    },
    no: {
      msg: 'Wahhhhhhhhh!',
      happiness: 10,
    },
  },
  // witch wants you to look into her crystal ball
  Witch1: {
    blook: 'Witch',
    msg: 'Would you like to take a gaze into my crystal ball?',
    yes: {
      array: [
        {
          // future is full of new people
          msg: 'Hmmmm... It looks like your future involves lots of interesting people.',
          people: 20,
        }, {
          // future is full of tragedy
          msg: 'Hmmmm... It looks like your future is full of tragedy.',
          happiness: 15,
          gold: 10,
          materials: 10,
          people: 5,
        }, {
          // future is full of riches
          msg: 'Hmmmm... It looks like your future has plenty of riches.',
          materials: 10,
          gold: 15,
        },
      ],
    },
    no: {
      msg: 'It must be too spooky for you.',
      happiness: 5,
    },
  },
  // witch wants to place a charm on people
  Witch2: {
    blook: 'Witch',
    msg: "Can I place a charm on a few of your people? It'll probably work well.",
    yes: {
      array: [
        {
          // charm turned people into gold
          msg: 'Hmmmm... The charm seems to have turned people to gold.',
          people: 10,
          gold: 15,
        }, {
          // charm made people sad
          msg: 'Hmmmm... The charm seems to have made people very sad.',
          happiness: 20,
        }, {
          // charm made people more motivated
          msg: 'Hmmm... The charm seems to have given people more motivation.',
          materials: 20,
          gold: 5,
          happiness: 10,
        },
      ],
    },
    no: {
      msg: 'Do you always play it safe?',
      happiness: 5,
    },
  },
  // witch wants to scare people for materials
  Witch3: {
    blook: 'Witch',
    msg: "Ok, I'll give you materials for it, but can I go scare some people?",
    yes: {
      msg: 'Let the spookiness begin!',
      materials: 15,
      people: 3,
      happiness: 5,
    },
    no: {
      msg: 'Very well.',
      happiness: 4,
    },
  },
  // witch needs to people to remove a curse on the kingdom
  Witch4: {
    blook: 'Witch',
    msg: "So, I accidentally cursed the kingdom? I'll need some people to help remove it.",
    yes: {
      msg: 'That was close.',
      people: 12,
      happiness: 7,
    },
    no: {
      msg: "It wasn't a good curse.",
      materials: 12,
      people: 6,
      happiness: 10,
      gold: 6,
    },
  },
  // jester wants gold to go entertain people
  Jester1: {
    blook: 'Jester',
    msg: 'Heyo! Can I get some gold for new juggling balls? The people will love them.',
    yes: {
      msg: 'Thanks! These are the best!',
      gold: 10,
      happiness: 15,
    },
    no: {
      msg: 'Sad. :(',
      happiness: 7,
    },
  },
  // jester wants materials to throw a festival
  Jester2: {
    blook: 'Jester',
    msg: 'Heyo! Can I get some materials to throw an epic festival?',
    yes: {
      msg: 'Thanks! The festival is a huge success!',
      materials: 20,
      people: 10,
      happiness: 20,
      gold: 10,
    },
    no: {
      msg: 'We are all disappointed.',
      happiness: 10,
    },
  },
  // jester wants to take a break from entertaining
  Jester3: {
    blook: 'Jester',
    msg: 'Heyo! This may upset some people, but do you think I could take a break and go fishing?',
    yes: {
      msg: 'Thanks! It means a lot that you care about me too! Here are some of my fish.',
      materials: 10,
      people: 5,
      happiness: 15,
    },
    no: {
      msg: "I guess it's more juggling for me.",
      happiness: 5,
    },
  },
  // jester wants gold to add people to his act
  Jester4: {
    blook: 'Jester',
    msg: 'Heyo! Can I get some gold to recruit new performers?',
    yes: {
      msg: 'Fantastic!',
      people: 10,
      happiness: 7,
      gold: 14,
    },
    no: {
      msg: 'I guess I understand.',
      happiness: 6,
    },
  },
  // unicorn wants to go explore magical lands
  Unicorn1: {
    blook: 'Unicorn',
    msg: 'Hello! Can I have some resources to go explore the magical forest?',
    yes: {
      msg: 'Thanks! I will return soon.',
      people: 7,
      gold: 7,
      materials: 10,
      spawnArray: ['Unicorn2', 'Unicorn3', 'Unicorn4'],
      delay: 4,
    },
    no: {
      msg: "I'm disappointed.",
      happiness: 10,
    },
  },
  // unicorn found enchanted plants
  Unicorn2: {
    blook: 'Unicorn',
    msg: "I've returned from my journey! I was able to collect some enchanted plants from the magical forest.",
    materials: 25,
  },
  // unicorn became friends with some fairies
  Unicorn3: {
    blook: 'Unicorn',
    msg: "I've returned from my journey! I met some very powerful fairies who wish to give you some gold.",
    gold: 15,
    people: 15,
  },
  // unicorn got lost
  Unicorn4: {
    blook: 'Unicorn',
    msg: "I've returned from my journey. I got lost on the way to the magical forest, so I have returned with nothing but my sadness.",
    happiness: 10,
  },
  // unicorn wants to open a doughnut shop
  Unicorn5: {
    blook: 'Unicorn',
    msg: 'Heyyy! Can I get some materials and workers to open a profitable doughnut shop?',
    yes: {
      msg: 'Sick!',
      materials: 12,
      people: 10,
      gold: 20,
      happiness: 10,
    },
    no: {
      msg: 'But, no one makes good doughnuts around here.',
      happiness: 8,
    },
  },
  // unicorn wants to enter a race that he may or may not win
  Unicorn6: {
    blook: 'Unicorn',
    msg: "Can I get some gold to enter a mystical race? If I win, I'll give you half of the prize.",
    yes: {
      msg: "Great! I'll get to training immediately.",
      gold: 12,
      spawnArray: ['Unicorn7', 'Unicorn8'],
      delay: 3,
    },
    no: {
      msg: 'Maybe next race.',
      happiness: 7,
    },
  },
  // unicorn won the race
  Unicorn7: {
    blook: 'Unicorn',
    msg: 'I won the race!',
    gold: 15,
    materials: 10,
    people: 5,
    happiness: 5,
  },
  // unicorn lost the race
  Unicorn8: {
    blook: 'Unicorn',
    msg: 'I lost the race...',
    happiness: 10,
  },
  // king wants people or he'll release his dragon
  King1: {
    blook: 'King',
    msg: "Give me 20 people for my kingdom, or I'll release my dragon on your city.",
    yes: {
      msg: 'Great decision',
      people: 20,
    },
    no: {
      msg: 'Very well.',
      spawn: 'Dragon2',
      forceNext: 0,
    },
  },
  // king wants you to repair a bridge or he'll release his dragon
  King2: {
    blook: 'King',
    msg: "Repair the bridge between are kingdoms. It'll take 20 materials. If you don't, I'll release my dragon on your kingdom.",
    yes: {
      msg: 'Good choice.',
      materials: 20,
    },
    no: {
      msg: 'This is all your fault.',
      spawn: 'Dragon2',
      forceNext: 0,
    },
  },
  // king wants to give you a gift
  King3: {
    blook: 'King',
    msg: 'I may be harsh sometimes, but right now I would like to offer you a gift.',
    yes: {
      msg: 'I hope we can continue our friendship.',
      materials: 10,
      people: 10,
      happiness: 10,
      gold: 10,
    },
    no: {
      msg: 'Oh, I see how it is.',
      happiness: 10,
    },
  },
  // king wants to give you his troubled citizens
  King4: {
    blook: 'King',
    msg: 'Hey, I have some scary people in my kingdom. Do you want them?',
    yes: {
      msg: 'Great, here you go.',
      people: 10,
      happiness: 14,
    },
    no: {
      msg: 'That makes sense.',
      happiness: 4,
    },
  },
  // dragon punishes you for not listening to the king
  Dragon2: {
    blook: 'Dragon',
    msg: 'LISTEN. TO. THE. KING.',
    materials: 15,
    people: 15,
    happiness: 5,
    gold: 15,
  },
  // queen wants to save some children
  Queen1: {
    blook: 'Queen',
    msg: 'Do you think I could get some resources to go save some children outside the kingdom?',
    yes: {
      msg: 'Oh thank you!',
      materials: 12,
      people: 14,
    },
    no: {
      msg: 'Those poor children.',
      happiness: 10,
    },
  },
  // queen wants to make people eat healthy
  Queen2: {
    blook: 'Queen',
    msg: 'Can I start forcing people in the kingdom to eat healthy? It will help them live longer.',
    yes: {
      msg: 'Thanks! Some people seem to not like these rules though.',
      people: 10,
      happiness: 15,
    },
    no: {
      msg: "We can't just let everyone keep getting fat.",
      happiness: 5,
      people: 5,
    },
  },
  // queen wants a new gold crown
  Queen3: {
    blook: 'Queen',
    msg: 'Do you think I could buy a new gold crown?',
    yes: {
      msg: "Thanks! You're the best!",
      gold: 10,
      happiness: 15,
    },
    no: {
      msg: 'But, I hate my old crown.',
      happiness: 6,
    },
  },
  // queen needs people to test her cake
  Queen4: {
    blook: 'Queen',
    msg: 'Can I get some people to try the cake I just baked?',
    yes: {
      array: [
        {
          // they loved the cake
          msg: 'They loved the cake!',
          happiness: 15,
        }, {
          // cake turned them into gold
          msg: 'The cake turned them into gold!',
          people: 14,
          gold: 14,
        }, {
          // they didn't like the cake
          msg: "They didn't really like it.",
          happiness: 10,
          people: 10,
        },
      ],
    },
    no: {
      msg: 'Fine, more for me.',
      happiness: 5,
    },
  },
  // two of spades just stares at you
  TwoOfSpades1: {
    blook: 'Two of Spades',
    msg: '(The card just stares at you, it looks like it wants to move into your kingdom)',
    yes: {
      array: [
        {
          // it gives a bunch of people paper cuts
          msg: '(The Two of Spades just started giving people paper cuts)',
          happiness: 13,
          people: 7,
        }, {
          // it does a cool card trick
          msg: '(The Two of Spades did a cool card trick)',
          happiness: 17,
        }, {
          // it scams a bunch of people in card games
          msg: '(The Two of Spades scammed a bunch of people in card games, but gave you the gold)',
          happiness: 15,
          gold: 15,
        },
      ],
    },
    no: {
      msg: '(It just walked away)',
    },
  },
  // eat me wants you to eat it and see what happens
  EatMe1: {
    blook: 'Eat Me',
    msg: 'Eat Me?',
    yes: {
      array: [
        {
          // it didn't taste good and made you sad
          msg: '(It did not taste good)',
          happiness: 15,
        }, {
          // you passed out and then found gold
          msg: '(It made you fall asleep, but when you woke up, there was gold all around you)',
          gold: 20,
        }, {
          // it contained stones
          msg: '(You try to take a bite, but the biscuit is full of stones)',
          materials: 10,
        },
      ],
    },
    no: {
      msg: '...',
      happiness: 8,
    },
  },
  // drink me wants you to drink it and see what happens
  DrinkMe1: {
    blook: 'Drink Me',
    msg: 'Drink Me?',
    yes: {
      array: [
        {
          // it didn't taste good and made you sad
          msg: '(It did not taste good)',
          happiness: 15,
        }, {
          // a bunch of fish jumped out
          msg: '(As you went to take a sip, a bunch of fish people jumped out of the drink)',
          people: 15,
        }, {
          // it tasted really good
          msg: '(It tasted really good)',
          happiness: 17,
        },
      ],
    },
    no: {
      msg: '...',
      happiness: 8,
    },
  },
  // dormouse wants to sell you tea
  Dormouse1: {
    blook: 'Dormouse',
    msg: 'Hiiiii! Would you like to buy some of my tea?',
    yes: {
      msg: 'Yayyy! Enjoy the tea!',
      gold: 8,
      happiness: 15,
    },
    no: {
      msg: 'Awwww... I guess more tea for me!',
      happiness: 6,
    },
  },
  // dormouse wants to make friends by building a playground
  Dormouse2: {
    blook: 'Dormouse',
    msg: 'Hiiiii! Can I have some materials to build a playground and make some new friends?',
    yes: {
      msg: 'Yayyy! So many friends.',
      happiness: 15,
      materials: 12,
      people: 7,
    },
    no: {
      msg: "Awwww... I'm so lonely now.",
      happiness: 10,
    },
  },
  // dormouse wants some gold to go pick blueberries
  Dormouse3: {
    blook: 'Dormouse',
    msg: 'Hiiiii! Can I get some gold to go pick blueberries?',
    yes: {
      msg: 'Yayyy! Here, you can have some too.',
      happiness: 7,
      materials: 15,
      gold: 12,
    },
    no: {
      msg: 'Awww... I really like blueberries.',
      happiness: 7,
    },
  },
  // white rabbit wants to grow carrots instead of strawberries
  WhiteRabbit1: {
    blook: 'White Rabbit',
    msg: "Most people in the kingdom love strawberries. However, if we grow carrots instead, we'll produce way more.",
    yes: {
      msg: "That's a great call!",
      materials: 15,
      happiness: 13,
    },
    no: {
      msg: 'I hate inefficiency.',
      happiness: 6,
    },
  },
  // white rabbit wants to buy some books for research
  WhiteRabbit2: {
    blook: 'White Rabbit',
    msg: 'Can I have some gold to buy books that will help me with my studies?',
    yes: {
      msg: "Perfect! I'll report back with the results of my study.",
      gold: 10,
      spawnArray: ['WhiteRabbit3', 'WhiteRabbit4', 'WhiteRabbit5'],
      delay: 4,
    },
    no: {
      msg: "I'm not done asking for this.",
      happiness: 6,
    },
  },
  // white rabbit's research created a whole bunch of mini rabbits
  WhiteRabbit3: {
    blook: 'White Rabbit',
    msg: "I'm not sure how, but my research ended up with a whole bunch of mini-rabbits!",
    people: 18,
  },
  // white rabbit's research created an explosion
  WhiteRabbit4: {
    blook: 'White Rabbit',
    msg: 'I think I messed up with my research and created an explosion. I apologize.',
    materials: 10,
    people: 10,
    happiness: 15,
  },
  // white rabbit's research found a hidden treasure
  WhiteRabbit5: {
    blook: 'White Rabbit',
    msg: "I've completed my research and it led me to some hidden treasure!",
    gold: 20,
    materials: 20,
  },
  // white rabbit wants to build a time machine, but it'll take a few time
  WhiteRabbit6: {
    blook: 'White Rabbit',
    msg: "I'll only ask once, can I get 20 materials to build a time machine?",
    yes: {
      msg: "Great, I'll report back on my progress in a bit.",
      materials: 20,
      spawn: 'WhiteRabbit7',
      delay: 5,
    },
    no: {
      msg: "You're seriously missing an opportunity here.",
      happiness: 7,
    },
  },
  // white rabbit needs more resources part 1
  WhiteRabbit7: {
    blook: 'White Rabbit',
    msg: "Ok. I'm going to need 20 gold to continue building the time machine?",
    yes: {
      msg: "Sweet, I'll come back with my progress soon.",
      gold: 20,
      spawn: 'WhiteRabbit8',
      delay: 5,
    },
    no: {
      msg: 'All my progress is lost.',
      happiness: 10,
    },
  },
  // white rabbit needs more resources part 2
  WhiteRabbit8: {
    blook: 'White Rabbit',
    msg: "So, I need to release some smoke to get my time machine working. People won't like it, but is it ok with you?",
    yes: {
      msg: "Awesome, I'll be back soon.",
      happiness: 20,
      spawn: 'WhiteRabbit9',
      delay: 5,
    },
    no: {
      msg: 'All my progress is lost.',
      happiness: 10,
    },
  },
  // white rabbit needs more resources part 3
  WhiteRabbit9: {
    blook: 'White Rabbit',
    msg: 'Last time, I just need 20 people to test out the time machine. Is that ok?',
    yes: {
      msg: "Amazing, I'll be back with the final results.",
      people: 20,
      spawn: 'WhiteRabbit10',
      delay: 5,
    },
    no: {
      msg: 'All my progress is lost.',
      happiness: 10,
    },
  },
  // white rabbit successfully built the time machine
  WhiteRabbit10: {
    blook: 'White Rabbit',
    msg: 'We did it!!! We have traveled to the past and returned with glorious rewards!',
    materials: 60,
    people: 60,
    happiness: 60,
    gold: 60,
  },
  // cheshire cat wants to 'borrow' some people
  CheshireCat1: {
    blook: 'Cheshire Cat',
    msg: 'Helllooooo, can I please "borrow" some humans?',
    yes: {
      msg: 'Very gooooood.',
      people: 13,
      happiness: 10,
    },
    no: {
      msg: 'Booooooo...',
      happiness: 5,
    },
  },
  // cheshire cat wants to create a trading post
  CheshireCat2: {
    blook: 'Cheshire Cat',
    msg: "Helllooooo, can I please get gold to open a trading post? I'll trade some stuff for you.",
    yes: {
      msg: 'Purrrrfect.',
      gold: 12,
      materials: 10,
      people: 5,
      happiness: 8,
    },
    no: {
      msg: 'Whyyyyyyyy?',
      happiness: 7,
    },
  },
  // cheshire cat wants to start a garden
  CheshireCat3: {
    blook: 'Cheshire Cat',
    msg: 'Helllooooo, can I please get some people to help start my garden?',
    yes: {
      msg: 'Ohhhhhh, thank you!',
      people: 12,
      materials: 15,
      happiness: 4,
    },
    no: {
      msg: 'Saaaaaaaaad.',
      happiness: 9,
    },
  },
  // alice got lost
  Alice1: {
    blook: 'Alice',
    msg: "Heyyyyy! Soooo, I'm like, lost. Is Wonderland over there?",
    yes: {
      msg: 'Woah, thanks kind person!',
      happiness: 9,
    },
    no: {
      msg: 'Woah, thanks kind person!',
      happiness: 9,
    },
  },
  // alice wants to sell your flowers
  Alice2: {
    blook: 'Alice',
    msg: "Heyyyyy! Can I, you know, sell some of your flowers? I'll give you the profits.",
    yes: {
      msg: 'I am an excellent salesperson.',
      gold: 15,
      materials: 12,
      happiness: 5,
    },
    no: {
      msg: 'Oh, ok then.',
      happiness: 7,
    },
  },
  // alice wants to steal pretty things
  Alice3: {
    blook: 'Alice',
    msg: "Heyyyyy! Can I go take pretty things from people's houses? I'll give some of them to you.",
    yes: {
      msg: "Yayyyy! We're like, best friends, right?",
      happiness: 15,
      materials: 15,
    },
    no: {
      msg: 'Wahhhhh. It would have been so much fun.',
      happiness: 7,
    },
  },
  // queen of hearts wants to tax more
  QueenOfHearts1: {
    blook: 'Queen of Hearts',
    msg: "Let's tax our people more. They won't like it, but you'll get more gold.",
    yes: {
      msg: 'Great choice.',
      happiness: 16,
      gold: 17,
    },
    no: {
      msg: "We're going to be poor.",
      happiness: 7,
    },
  },
  // queen of hearts wants to force people to gather resources
  QueenOfHearts2: {
    blook: 'Queen of Hearts',
    msg: "Hey, let's force our people to gather more resources. What do you say?",
    yes: {
      msg: "Well. it's working, but I don't think they like it.",
      happiness: 15,
      gold: 8,
      materials: 13,
    },
    no: {
      msg: 'Grow up.',
      happiness: 5,
    },
  },
  // queen of hearts wants attention
  QueenOfHearts3: {
    blook: 'Queen of Hearts',
    msg: 'Tell people to stop working and pay more attention to me.',
    yes: {
      msg: 'I like this.',
      happiness: 7,
      gold: 10,
      materials: 15,
    },
    no: {
      msg: "You're no fun.",
      happiness: 7,
    },
  },
  // caterpillar wants to turn mushrooms into people
  Caterpillar1: {
    blook: 'Caterpillar',
    msg: 'hewo, can I turn some of my mushrooms into people? :3',
    yes: {
      msg: 'oh thank you',
      materials: 13,
      people: 13,
      happiness: 7,
      gold: 10,
    },
    no: {
      msg: 'ok',
      materials: 13,
      people: 13,
      happiness: 7,
      gold: 10,
    },
  },
  // caterpillar wants to have more mushrooms, even though not everyone likes them
  Caterpillar2: {
    blook: 'Caterpillar',
    msg: 'hewo, even though not everyone likes mushrooms, can I go get some more? :3',
    yes: {
      msg: "yay, you're the best",
      happiness: 13,
      materials: 15,
    },
    no: {
      msg: 'i am sad',
      happiness: 7,
    },
  },
  // caterpillar wants to dance, and people give him money if you let him
  Caterpillar3: {
    blook: 'Caterpillar',
    msg: 'hewo, can I show off my dance moves?',
    yes: {
      msg: "nice, here's some gold",
      happiness: 10,
      gold: 10,
    },
    no: {
      msg: 'awwww... ok',
      happiness: 10,
    },
  },
  // mad hatter wants to buy an elephant
  MadHatter1: {
    blook: 'Mad Hatter',
    msg: 'Hello, can you buy me an elephant?',
    yes: {
      msg: 'I love elephants.',
      gold: 12,
      happiness: 12,
      people: 1,
    },
    no: {
      msg: 'But, I love elephants...',
      happiness: 7,
    },
  },
  // mad hatter wants to host a trivia game show
  MadHatter2: {
    blook: 'Mad Hatter',
    msg: 'Can I get some materials and gold to set up a live trivia game show?',
    yes: {
      msg: 'This is amazing!',
      happiness: 20,
      gold: 10,
      materials: 15,
      people: 10,
    },
    no: {
      msg: 'Dang, it would have been so much fun.',
      happiness: 7,
    },
  },
  // mad hatter wants you to open a box
  MadHatter3: {
    blook: 'Mad Hatter',
    msg: 'You want to open this box?',
    yes: {
      array: [{
        // box had paper clips
        msg: 'Yay, the box had paper clips!',
        materials: 15,
      }, {
        // box had a golden cat statue in it
        msg: 'Yay, the box had a golden cat statue!',
        gold: 15,
      }, {
        // box had lots of annoying bugs in it
        msg: 'Dang it, the box had lots of annoying bugs.',
        people: 7,
        happiness: 17,
      }],
    },
    no: {
      msg: 'Why? Are you scared?',
      happiness: 6,
    },
  },
  // king of hearts wants to give you people, because he has too many
  KingOfHearts1: {
    blook: 'King of Hearts',
    msg: 'Hello, my kingdom is so successful. Would you like some extra people?',
    yes: {
      msg: 'Here you go.',
      people: 15,
    },
    no: {
      msg: 'Very well.',
    },
  },
  // king of hearts wants to trade materials for gold
  KingOfHearts2: {
    blook: 'King of Hearts',
    msg: "Hello. I'll trade you 20 materials if you give me 15 gold?",
    yes: {
      msg: 'Great doing business with you.',
      materials: 20,
      gold: 15,
    },
    no: {
      msg: 'Very well.',
      happiness: 6,
    },
  },
  // king of hearts to throw a music festival
  KingOfHearts3: {
    blook: 'King of Hearts',
    msg: "Let's throw a music festival between our kingdoms. We'll each pay for half. How does that sound?",
    yes: {
      msg: 'Fantastic!',
      materials: 15,
      gold: 12,
      happiness: 18,
      people: 10,
    },
    no: {
      msg: 'Very well.',
      happiness: 7,
    },
  },
  // gingerbread man wants to transform people into cookies
  GingerbreadMan1: {
    blook: 'Gingerbread Man',
    msg: "Can I transform some people into cookies, it'll make people happy?",
    yes: {
      msg: 'Delicious!',
      people: 16,
      happiness: 16,
    },
    no: {
      msg: 'I WANT COOKIES!',
      happiness: 7,
    },
  },
  // gingerbread man wants to buy some icing to look cool
  GingerbreadMan2: {
    blook: 'Gingerbread Man',
    msg: 'Yo, let me buy some fresh icing so I can look cool!',
    yes: {
      msg: 'I look great!',
      happiness: 13,
      gold: 12,
    },
    no: {
      msg: "I'm so ugly.",
      happiness: 6,
    },
  },
  // gingerbread man wants materials to build a house
  GingerbreadMan3: {
    blook: 'Gingerbread Man',
    msg: 'Hey, can I get some materials to build a house?',
    yes: {
      msg: 'Thanks, it will be super grateful.',
      materials: 16,
      spawn: 'GingerbreadHouse1',
      forceNext: true,
    },
    no: {
      msg: "That's disappointing.",
      happiness: 6,
    },
  },
  // gingerbread house is grateful that you built it
  GingerbreadHouse1: {
    blook: 'Gingerbread House',
    msg: 'Thanks for building me!',
    happiness: 8,
    people: 8,
    gold: 5,
  },
  // snowman wants to know if you want to build a snowman
  Snowman1: {
    blook: 'Snowman',
    msg: 'Do you want to build a snowman?',
    yes: {
      msg: 'Yayyyy!',
      materials: 10,
      happiness: 15,
      people: 1,
    },
    no: {
      msg: 'Awwwwww...',
      happiness: 6,
    },
  },
  // snowman wants you to make it summer
  Snowman2: {
    blook: 'Snowman',
    msg: 'Hey, can you make it summer?',
    yes: {
      msg: "Oh, I don't like this heat very much.",
      happiness: 10,
      people: 5,
    },
    no: {
      msg: 'Why not?',
      happiness: 5,
    },
  },
  // snowman wants to turn people into ice sculptures
  Snowman3: {
    blook: 'Snowman',
    msg: "Can I get some people to transform into ice sculptures that I'll sell?",
    yes: {
      msg: 'They look great!',
      people: 12,
      gold: 16,
    },
    no: {
      msg: 'This is a missed opportunity.',
      happiness: 6,
    },
  },
  // santa wants to give you a present
  SantaClaus1: {
    blook: 'Santa Claus',
    msg: 'Would you like a present?',
    yes: {
      msg: 'Ho! Ho! Ho!',
      materials: 7,
      happiness: 7,
      gold: 7,
    },
    no: {
      msg: "You're mean.",
      happiness: 10,
    },
  },
  // santa wants food for his reindeer
  SantaClaus2: {
    blook: 'Santa Claus',
    msg: 'Can I get some carrots to feed my reindeer?',
    yes: {
      msg: 'Ho! Ho! Ho!',
      materials: 14,
      happiness: 14,
    },
    no: {
      msg: "But, they're hungry.",
      happiness: 10,
    },
  },
  // santa wants needs people to build presents
  SantaClaus3: {
    blook: 'Santa Claus',
    msg: 'Hey, can you send some people to the North Pole to help make toys?',
    yes: {
      msg: 'Ho! Ho! Ho!',
      people: 13,
      happiness: 5,
      materials: 10,
    },
    no: {
      msg: "We're not going to have enough toys this year...",
      happiness: 10,
    },
  },
};

// name: {
//   blook: '',
//   msg: '',
//   yes: {},
//   no: {},
// }

// these are guests that aren't spawned by other events mainly
export const basicGuests = [
  'Hamster1',
  'Hamster2',
  'Hamster3',
  'Chick1',
  'Chicken2',
  'Waffle',
  'Sheep1',
  'Horse1',
  'Horse2',
  'Horse3',
  'Cow1',
  'Cow2',
  'Cow3',
  'Cat1',
  'Cat2',
  'Cat3',
  'Goat1',
  'Pig1',
  'Pig2',
  'Bear1',
  'Bear2',
  'Bear3',
  'Duck1',
  'Duck2',
  'Duck3',
  'Fox1',
  'Fox2',
  'Fox3',
  'Rabbit1',
  'Rabbit2',
  'Rabbit3',
  'Kitten1',
  'Moose1',
  'Raccoon1',
  'Raccoon2',
  'Raccoon3',
  'Turtle1',
  'Turtle2',
  'Turtle3',
  'Dog1',
  'Dog4',
  'Goldfish1',
  'Goldfish2',
  'Goldfish3',
  'Squirrel1',
  'Squirrel2',
  'Squirrel3',
  'Hedgehog1',
  'Hedgehog2',
  'Hedgehog3',
  'Tiger1',
  'Tiger2',
  'Tiger3',
  'Orangutan1',
  'Cockatoo1',
  'Anaconda1',
  'Anaconda2',
  'Anaconda3',
  'Jaguar1',
  'Jaguar2',
  'Jaguar3',
  'Panther1',
  'Panther2',
  'Panther3',
  'Capuchin1',
  'SnowyOwl1',
  'PolarBear1',
  'PolarBear2',
  'PolarBear3',
  'ArcticFox1',
  'ArcticFox2',
  'ArcticFox3',
  'Penguin1',
  'Penguin2',
  'Penguin3',
  'ArcticHare1',
  'ArcticHare2',
  'ArcticHare3',
  'ArcticHare4',
  'Seal1',
  'Seal2',
  'Seal3',
  'Walrus1',
  'Walrus2',
  'Walrus3',
  'Wizard1',
  'Wizard2',
  'Wizard3',
  'Elf1',
  'Elf2',
  'Elf3',
  'Elf4',
  'Fairy1',
  'Fairy5',
  'Fairy6',
  'Witch1',
  'Witch2',
  'Witch3',
  'Witch4',
  'Jester1',
  'Jester2',
  'Jester3',
  'Jester4',
  'Unicorn1',
  'Unicorn5',
  'Unicorn6',
  'King1',
  'King2',
  'King3',
  'King4',
  'Queen1',
  'Queen2',
  'Queen3',
  'Queen4',
  'TwoOfSpades1',
  'EatMe1',
  'DrinkMe1',
  'Dormouse1',
  'Dormouse2',
  'Dormouse3',
  'WhiteRabbit1',
  'WhiteRabbit2',
  'WhiteRabbit6',
  'CheshireCat1',
  'CheshireCat2',
  'CheshireCat3',
  'Alice1',
  'Alice2',
  'Alice3',
  'QueenOfHearts1',
  'QueenOfHearts2',
  'QueenOfHearts3',
  'Caterpillar1',
  'Caterpillar2',
  'Caterpillar3',
  'MadHatter1',
  'MadHatter2',
  'MadHatter3',
  'KingOfHearts1',
  'KingOfHearts2',
  'KingOfHearts3',
  'GingerbreadMan1',
  'GingerbreadMan2',
  'GingerbreadMan3',
  'Snowman1',
  'Snowman2',
  'Snowman3',
  'SantaClaus1',
  'SantaClaus2',
  'SantaClaus3',
];

export const oneTimeGuests = [
  'Waffle',
  'Sheep1',
  'Horse1',
  'Pig2',
  'Duck1',
  'Moose1',
  'Queen2',
  'WhiteRabbit6',
];
