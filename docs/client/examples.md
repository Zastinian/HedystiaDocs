---
id: examples
title: Examples
description: Examples Section
sidebar_position: 7
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

## Start

```js
const {Client, Intents, Status} = require("hedystia.js");

const client = new Client({
  token: "<BOT_TOKEN>",
  intents: [Intents.Flags.Guilds, Intents.Flags.Guild_Members, Intents.Flags.Message_Content, Intents.Flags.Guild_Messages],
  presence: {
    status: Status.Idle,
    activities: [
      {
        name: "Hedystia",
        type: "Playing",
      },
    ],
  },
});

client.once("ready", () => {
  console.log("Bot on: " + client.user.username);
});
```

## Prefix

```js
client.on("messageCreate", (msg) => {
  if (msg.content == "!ping") {
    msg.reply({
      content: "Pong!",
    });
  }
});
```

## Slash

```js
client.once("ready", async () => {
  let slash = [new Slash().setName("command").setDescription("Command").setDmPermission(true)];
  client.application.commands.set(slash);
  console.log("Bot on: " + client.user.username);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName == "command") {
    return interaction.reply({
      content: `Command`,
    });
  }
});
```

### Help Slash

```js
client.once("ready", async () => {
  let slash = [new Slash().setName("help").setDescription("Help Command").setDmPermission(true)];
  client.application.commands.set(slash);
  console.log("Bot on: " + client.user.username);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName == "help") {
    const helpEmbed = new MessageEmbed()
      .setColor(0x0099ff)
      .setTitle("Help Menu")
      .setURL("https://docs.hedystia.com/docs/client/start")
      .setAuthor({
        name: "Name",
        iconURL:
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
        url: "https://docs.hedystia.com/docs/client/start",
      })
      .setDescription("Help Description")
      .setThumbnail({
        url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
      })
      .addFields({name: "Command", value: "/help", inline: true}, {name: "Command", value: "/user", inline: true})
      .setImage({url: "https://c.tenor.com/yi5btxWVAwwAAAAC/tenor.gif"})
      .setTimestamp()
      .setFooter({
        text: "Footer",
        iconURL:
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTMyYzU4YTVjNjNlZWUwZTgwN2ZiMDgxYzVlOGE0NGRhYTM3MmE1NCZjdD1z/K9svE9i7P3Ox2/giphy.gif",
      });
    return interaction.reply({
      embeds: [helpEmbed],
    });
  }
});
```

### User Slash

```js
client.once("ready", async () => {
  let slash = [
    new Slash()
      .setName("user")
      .setDescription("User Command")
      .setDmPermission(false)
      .setOptions([new SlashOption().setName("user_option").setDescription("user").setRequired(true).setType(OptionType.User)]),
  ];
  client.application.commands.set(slash);
  console.log("Bot on: " + client.user.username);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName == "user") {
    const user = interaction.options.getUser("user_option");
    const userEmbed = new MessageEmbed()
      .setColor(0x0099ff)
      .setTitle("User Info")
      .setURL("https://docs.hedystia.com/docs/client/start")
      .addFields({name: "Username", value: user.username, inline: true})
      .setThumbnail({
        url: user.displayAvatarURL(),
      });
    return interaction.reply({
      content: `**${user.username}** Info`,
      embeds: [userEmbed],
    });
  }
});
```
