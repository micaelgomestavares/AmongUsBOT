# AmongUsBOT
> O AmongUsBOT é um bot que faz um sistema de fila para o seu servidor, os seus players podem esperar em um canal específico, entrarem na fila e esperarem outras 9 pessoas para jogarem juntos em uma sala separada do resto do grupo.

## Instalação

<br>
:rocket:  Install all packages of the `package.json` on your Node project. This will download everything you need.

```
npm i discord.js
```

<br>
:config: Configure your bot, in 'config.json'

```
{
    "prefix": ".",
    "token": "YOUR_TOKEN",
    "guild": "YOUR_SERVER_ID",
    "category_rooms": "WHERE_THE_ROOMS_WILL_BE_CREATED_ID",
    "wait_voicechannel": "CHANNEL_THAT_THE_USER_WILL_HAVE_TO_WAIT_TO_PLAY_ID"
}
```

<br>
:bulb: After all the dependencies have been installed and configure all configs, run `index.js`

```
node bot.js
```

<br>

## :mailbox_with_mail: License

This software was created for study purposes only. Feel free to try it out.

