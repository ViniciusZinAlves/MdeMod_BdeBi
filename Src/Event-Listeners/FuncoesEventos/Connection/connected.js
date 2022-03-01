import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onConnectedHandler (addr, port) 
{
  console.log(`* Connected to ${addr}:${port}`);
  MandaMensagem("O MELHOR E MAIS RAPIDO BOT DA TWITCH VIVE PowerUpL DarkMode PowerUpR, TOMEN CUIDADO");
}
