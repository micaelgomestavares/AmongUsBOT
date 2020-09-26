module.exports = {
    name: 'ping',
    description: 'ping command',
    args: false,
    async execute(message, args) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! A latência é de ${m.createdTimestamp - message.createdTimestamp}ms.`);
        return;
    }
};