import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onConnectedHandler (addr, port) 
{  
  //MandaMensagem("O MELHOR E MAIS RAPIDO BOT DA TWITCH VIVE PowerUpL DarkMode PowerUpR, TOMEN CUIDADO");
 
  SucessLog(`Connected to ${addr}:${port}`)
}
