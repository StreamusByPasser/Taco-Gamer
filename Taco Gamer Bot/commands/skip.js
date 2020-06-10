module.exports = {
  name: "skip",
  description: "Avanza a la siguiente canción en la cola.",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No hay canciones siguientes.");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("Siguiente canción...");
  }
};