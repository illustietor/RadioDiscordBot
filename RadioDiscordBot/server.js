//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;
let IDCANAL = config.IDCANAL;



//MENSAJE DE ARRANQUE
client.on('ready', () => {
  console.log(`¡Estás en el aire!`);
});

//COMANDOS
client.on('message', (message) => {
 if (!message.content.startsWith(prefix)) return; 
 if (message.author.bot) return;

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

 if (command === 'off'){
   let canalvoz = message.member.voice.channel;
   let usuario = "<@" + message.author + ">";

   if(!canalvoz) {
    client.channels.cache.get(IDCANAL).send({embed: {
      color: config.color,
      description: 'Lo siento' + usuario + ', pero no se ha podido sintonizar la emisora. Conéctate a un canal de voz y vuélvelo a intentar.'
    }
    
    });

   } else {
    client.channels.cache.get(IDCANAL).send({embed: {
      color: config.color,
      description: usuario + ' apagó la radio.'
    }
    
    }).then(() => {
        canalvoz.leave().catch(error => console.log(error));})
    }}

 if (command === 'on'){
  let canalvoz = message.member.voice.channel;
  let usuario = "<@" + message.author + ">";

  if(!canalvoz || canalvoz.type !== 'voice') {
      message.channel.send({embed: {
        color: config.color,
        description: 'Lo siento' + usuario + ', pero no se ha podido sintonizar la emisora. Conéctate a un canal de voz y vuélvelo a intentar.'
      }
      
      });
  
  } else if (message.guild.voiceConnection) {
      message.channel.send({embed: {
        color: config.color,
        description: 'Ya estoy en un canal de voz.'
      }
      
      });
  
  } else {
      message.channel.send({embed: {
        color: config.color,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
        description: 'Sintonizando...',
        thumbnail: {
          url: client.user.avatarURL(),
        }
      }
      
      }).then(m => {
          canalvoz.join().then(conexion =>{
            conexion.play(config.streamURL)})
            .then(() => {
              m.edit({embed: {
                color: config.color,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL()
              },
              description: config.website,
              fields: [{
                name: "Sintonizada por:",
                value: usuario
              },
              {
                name: "En:",
                value: message.member.voice.channel
              }
            ],
                thumbnail: {
                  url: client.user.avatarURL(),
                }
              }
              
              }).catch(error => console.log(error));
  
          }).catch(error => console.log(error));
  
      }).catch(error => console.log(error));
  
  }
 }

});

client.login(process.env.TOKEN);