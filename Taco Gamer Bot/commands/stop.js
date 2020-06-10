const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Para la música",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No hay música que pueda quitar.");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send("**Reproduccion en STOP**");
  }
};