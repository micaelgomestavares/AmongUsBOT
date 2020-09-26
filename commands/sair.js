const { hasUserOnQueue, sendEmbed, removeFromQueue } = require('../queue.js');

module.exports = {
    name: 'sair',
    description: 'sair command',
    aliases: 'quit',
    args: false,
    async execute(message, args) {
        const userId = message.author.id;
        const embedUserName = `**${message.author.username}**`;

        if (!hasUserOnQueue(userId)) return sendEmbed(`${embedUserName}, tu nem tá na fila meu consagrado.`, message);

        removeFromQueue(userId);
        sendEmbed(`${embedUserName}, você foi removido da fila.`, message);
    }
};