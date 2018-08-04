const Discord = require('discord.js');
const bot = new Discord.Client();
const key = '';

var helpList = ['I can flip a coin for you if you type "JubsCoinFlip"',
                'I can roll a dice for you if you type "JubsDiceRoll"',
                'I can greet you if you greet me :)']
var greetings = ['hello','Hello','Wagwan','wagwan','hi','Hi','ayo','hey','Hey'];
var greeting = false;
var welcome = true;

bot.on('message', function(message) {
    var n=0;

 //   if(message.content.indexOf('Jubs') != 0) return;

    if (message.author.bot) {return};

    if (message == 'JubsHelp') {
        message.channel.sendMessage('Here is what I can do:')
        while (n != helpList.length) {
            message.channel.sendMessage(helpList[n])
            n=n+1
        }
    }

    else if (welcome == true) {
        message.channel.sendMessage('Hello World, I am JubsBot, coming from JubsGames.com! I do many things, type "JubsHelp" for information. I was created by King Jubs himself.');
        welcome = false;
    }

    while (n != greetings.length) {
        if (message == greetings[n]) {
            greeting = true;
            n=0;
            break;
        }
    n=n+1
    }
    
    if (greeting == true) {
        message.reply('wagwan piffting, how you doing?')
        greeting = false;
    }

    else if (message == 'JubsCoinFlip') {
        var chance = Math.floor(Math.random()*2 );
        if (chance == 0) {
            message.reply("You got Heads!")
        }
        else if (chance == 1) {
            message.reply('You got Tails!')
        }
    }

    else if (message == 'JubsDiceRoll') {
        var chance = Math.floor(Math.random()* 6 );
        message.reply("Your dice landed on "+chance)
    }
});

bot.on('ready', function(){
    console.log('bot is ready')
})

bot.login(key);
