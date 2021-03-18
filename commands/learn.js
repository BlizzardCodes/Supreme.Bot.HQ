module.exports = {

    cmd: 'learn',

    execute(message) {

        setTimeout(() => {
            setTimeout(() => {
            message.author.send('To begin learning JavaScript, type "^start"')
        }, 6000);
        message.author.send('My name is Supreme.Bot.HQ, I am excited to teach you all about Discord Bots, we will also be learning how to code one!\nWe first got to understand JavaScript as the the language for Discord.js runs from JavaScript. I hope you enjoy your time!')
    }, 1000);
    message.author.send(`Greetings ${message.author.username}!`);
    }
}