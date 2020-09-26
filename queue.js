const { Collection } = require('discord.js');
const { serverID, category_rooms } = require('./config.json');

let items = [];
let rooms = 0;

let commands = new Collection();

const isEmpty = () => {
    return items.length == 0;
}

const addToQueue = (element) => {
    items.push(element);
}
const removeFromQueue = (element) => {
    if (isEmpty()) return "A lista está vazia";

    return items.shift(element);
}
const getFirstFromQueue = () => {
    if (items.isEmpty())
        return "A lista não possui ninguém";
    return items[0];
}
const getAllFromQueue = () => {
    items.forEach(item => {
        return item;
    });
}


const hasUserOnQueue = (element) => {
    if (items.includes(element)) return true;
}

const createRoom = async (client, items) => {
    const guild = client.guilds.cache.get(serverID);
    guild.channels.create(`AmongUS - [${rooms++}]`, { type: 'voice', userLimit: 10, parent: category_rooms }).then(result => {
        const newArray = items.slice(0, 10);
        newArray.forEach(item => {
            guild.member(item).voice.setChannel(result.id);
            setTimeout(() => { var index = items.indexOf(item); items.splice(index, 1); }, 2000);
        });
    });
}

const sendEmbed = (description, message) => {
    const color = Math.random().toString(16).slice(2, 8);
    return message.channel.send({
        embed: {
            color: color,
            description: description
        }
    });
}

module.exports = {
    getAllFromQueue,
    removeFromQueue,
    getFirstFromQueue,
    addToQueue,
    hasUserOnQueue,
    createRoom,
    isEmpty,
    sendEmbed,
    items,
    commands
};