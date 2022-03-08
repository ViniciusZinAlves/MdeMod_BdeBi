import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onRaidedHandler(channel, username, viewers)
{
  MandaMensagem(`Obrigado @${username} pela raid de ${viewers} viewers, sejam bem vindos!`)
  SucessLog(`raid from ${username}`);
}
