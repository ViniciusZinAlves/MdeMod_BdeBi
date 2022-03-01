import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onHostedHandler (channel, username, viewers, autohost) 
{
  MandaMensagem(`Obrigado @${username} pelo host de ${viewers} viewers, sejam bem vindos!`);
  console.log(`${autohost} variavel autohost, host de ${username} onHostedHandler` );
}

