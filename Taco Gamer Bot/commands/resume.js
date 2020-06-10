module.exports = {
  name: "resume", 
  description: "Reproduce una canción pausada.",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Necesitas estar en un canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  
  return message.channel.send("Reproduciendo...") 
 }
    
    message.channel.send("La música no está pausada...")
    
  }
}