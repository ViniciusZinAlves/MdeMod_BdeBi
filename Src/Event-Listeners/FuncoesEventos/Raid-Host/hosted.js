import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onHostedHandler (channel, username, viewers, autohost) 
{
  MandaMensagem(`Obrigado @${username} pelo host de ${viewers} viewers, sejam bem vindos!`);
  SucessLog(`host from ${username}`);

  SucessLog(`${autohost} variavel autohost, host de ${username} onHostedHandler` );
}

