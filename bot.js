const Discord = require('discord.js');
const client = new Discord.Client();

const { join } = require('path');
const { readdirSync } = require('fs');

const { prefix } = require('./config.json');
const { commands } = require('./controllers/queue.js');

const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(join(__dirname, 'commands', `${file}`));
    commands.set(command.name, command);
}

client.on('ready', () => {
    let activities = [
        'Tierry e sofrendo por ela',
        'Pisero e sofrendo também'
    ], i = 0;

    client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'LISTENING'
    });

    console.log('tô ligado bb');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    if (command.guildOnly && message.channel.type !== 'text') return message.reply('Não posso enviar mensagens via DM');

    if (command.args && !args.length) {
        let reply = `Faltou argumentos, ${message.author}!`;
        if (command.usage) reply += `\n Use dessa forma: \`${prefix}${command.name} ${command.usage}\``;
        return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Erro ao tentar executar um comando.');
    }
});

client.login(process.env.TOKEN);