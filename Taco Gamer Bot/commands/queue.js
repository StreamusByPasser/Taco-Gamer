module.exports = {
  name: "queue",
  description: "Cola",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No hay música en la cola.");
    }

    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};