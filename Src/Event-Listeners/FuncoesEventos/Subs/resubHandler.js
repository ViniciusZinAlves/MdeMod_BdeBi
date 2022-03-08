import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function resubHandler(channel, username, months, message, userstate, methods)
{
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  MandaMensagem(`Obrigado @${username} pelo ${cumulativeMonths}º mes de sub!`);

  SucessLog(`${cumulativeMonths} meses resub do ${username}`);

}