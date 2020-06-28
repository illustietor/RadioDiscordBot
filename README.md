# RadioDiscordBot

### FUNCIÓN PRINCIPAL:
Emitir una emisora de radio online en un canal de voz.

### COMANDOS:
- **on**: El bot se conecta al canal de voz del usuario que ejecuta el comando y retransmite la emisión de radio.
- **off**: El bot se desconecta del canal de voz. Es necesario que el usuario que lo ejecuta esté conectado en el mismo canal de voz que el bot.

### CONFIGURACIÓN PARA DUMMIES EN GLITCH:
Antes de todo recomiendo echarle una lectura a las guías de [Portalmybot](https://portalmybot.com/guia/mybot/inicio) pues están bastante bien para entender más o menos qué estás haciendo (son las que he usado yo para aprender a hacer el bot).
Para hostear el bot (tenerlo funcionando en Internet todo el rato) usaremos [Glitch.com](https://glitch.com/) que es gratis y sencillito de configurar. Una vez más, te recomiendo la lectura de [la guía de Portalmybot](https://portalmybot.com/guia/glitch/cuenta-configuracion-app) para entender mejor lo que vas a hacer.

**Ahora sí, voy a intentar explicar los pasos lo mejor posible para que puedas hacer un copiaypega del código sin complicarte demasiado:**
1. Lo primero que tienes que hacer es crear el bot en el [Devolver Portal de Discord](https://discord.com/developers/applications) y obtener el TOKEN. Tenéis [una explicación paso por paso de como hacerlo en Portalmybot](https://portalmybot.com/guia/mybot/cuenta-discord).

2. Create una cuenta en [Glitch.com](https://glitch.com/) y a continuación crea una aplicación en New Project>hello-express. Ahora tendrás una pantalla con una lista de archivos a la izquierda y un desglose de texto del contenido del archivo a la derecha. Si haces click en el nombre autogenerado de la app (arriba a la izquierda) podrás cambiarselo por uno que te guste más, añadirle una descripción e IMPORTANTE, hacer el proyecto privado (el iconito del candado) para protegerlo de ediciones no deseadas. Tienes una explicación más detallada de todo este paso en [Portalmybot](https://portalmybot.com/guia/glitch/cuenta-configuracion-app#crear-app-glitch).

3. En la lista de archivos tendrás por defecto:
  - .env
  - README.md
  - package.json
  - server.js
  
  Así que ahora te faltarían por crear:
  - config.json
  - watch.json
Puedes crearlos desde "New file" escribiendoles el normbre.

4. Llega el momento de copiar y pegar: desde este directorio de Github...blablabla.

5. Uptime Robot.

6. Finalmente vamos a añadir el TOKEN de tu bot al **.env** del proyecto en Glitch. En "Variable Name" le pones TOKEN y en "Variable Value" pegas el código larguísimo que es el token.
