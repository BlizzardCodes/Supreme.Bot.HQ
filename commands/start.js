module.exports = {

    cmd: 'start',

    execute(message) {
        message.author.send(`Why hello there ${message.author.username},`)
        const quiz = require('./tasks.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.author.send(item.question).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} Great, I have noted that down.`);
		})
		.catch(collected => {
			message.channel.send('It looks like you did not awnser in time, please do "^start" to try again.');
		});
});
    }
}