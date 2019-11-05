// Dependencies
const keys = require('./config/keys');
const {
    Client,
    RichEmbed,
    Attachment
} = require('discord.js');
const token = keys.discordToken;
let cardData = require('./data/set1-en_us.json');


const PREFIX = '-';
// const usedCommandRecently = new Set();
// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
    console.log('RuneterraBot is running.');
});


let dataLength = Object.keys(cardData).length;
client.on('message', async message => {

    let request = message.content.substr(message.content.indexOf(' ') + 1);
    console.log(request);

    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'card':
            for (let x = 0; x < dataLength; x++) {
                if (cardData[x].name.toLowerCase() == request.toLowerCase()) {
                    const attachment = new Attachment(`./data/img/cards/${cardData[x].cardCode}.png`);
                    message.channel.send(attachment);
                    x = dataLength;
                }
            }
    }
});

client.login(token);