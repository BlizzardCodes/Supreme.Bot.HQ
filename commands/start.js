module.exports = {

    cmd: 'start',

    execute(message) {
        message.author.send(`Why hello there ${message.author.username},`)
        const tasks = require('./tasks.json');
        const item = tasks
        const filter = response => {
            return item.answer1.some(awnser => awnser.toLowerCase() === response.content.toLowerCase());
        };

        message.author.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        });
    }
}