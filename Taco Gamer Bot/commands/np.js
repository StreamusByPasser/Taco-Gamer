  
module.exports = {
  name: "np",
  description: "Nombre de la canción actual.",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No se está reproduciendo nada.");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}