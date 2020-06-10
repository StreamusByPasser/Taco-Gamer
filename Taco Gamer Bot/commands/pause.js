  
module.exports = {
  name: "pause",
  description: "Pausa la canción",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("No hay canción para pausar.");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("Pausada la música.");
  }  
  }
}