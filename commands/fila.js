const Discord = require('discord.js');
const client = new Discord.Client();
const { addToQueue, hasUserOnQueue, sendEmbed, createRoom, items } = require('../queue.js');
const { wait_voicechannel } = require('./config.json');

module.exports = {
    name: 'fila',
    description: 'Fila command',
    aliases: 'queue',
    args: false,
    async execute(message, args) {
        const userId = message.author.id;
        const embedUserName = `**${message.author.username}**`;

        const waitVoiceChannel = wait_voicechannel;
        const userVoiceChannel = message.member.voice.channel;

        // Verifica se o usuário está em algum canal de voz
        if (userVoiceChannel == null) return sendEmbed(`${embedUserName}, entre na call de espera.`, message);

        // Verifica se o id do canal do usuário é igual ao canal de espera
        if (userVoiceChannel.id !== waitVoiceChannel) return sendEmbed(`${embedUserName}, você está em outra call, e não na de espera.`, message);

        //Verifica se o usuário já está na fila.
        if (hasUserOnQueue(userId)) return sendEmbed(`${embedUserName}, você já está na fila, fela da puta. [${items.length}/10]`, message);

        await addToQueue(userId);
        await sendEmbed(`${embedUserName}, foi adicionado à fila [${items.length}/10]`, message);

        if (items.length >= 10) {
            createRoom(client, items);
        }
    }
};