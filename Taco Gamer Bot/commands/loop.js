module.exports = {
  name: "loop",
  description: "Repite la cola",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No hay canciones en la cola.");
    }
    
    
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Loop a la cola: **${serverQueue.loop ? "Activado" : "Desactivado"}**`)
    
    
    
    
  }
}