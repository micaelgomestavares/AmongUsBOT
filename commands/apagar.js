module.exports = {
    name: 'apagatudoaichefia',
    description: 'clearchat command',
    args: false,
    async execute(message, args) {
        message.channel.bulkDelete(100, true).catch((err) => {
            console.error(err);
        });
    }
};