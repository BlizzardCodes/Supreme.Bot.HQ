module.exports = {

    cmd: 'learn',
    execute(message) {

        message.channel.send("Great, lets get started! I've sent you a direct message. Go check it out!")
        message.author.send("Hello, welcome to Supreme.Bot.HQ! I am excited to take you through the course of JavaScript!")

        const quiz = require('./results.js');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.author.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.author.send(`${collected.first().author.username}, Thank you for responding!`);
                })
                .catch(collected => {
                    message.channel.send('Ok');
                });
        });

    }
}
