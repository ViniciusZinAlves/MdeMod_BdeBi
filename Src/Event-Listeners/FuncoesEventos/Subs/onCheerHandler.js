import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onCheerHandler(channel, userstate, message)
{
  MandaMensagem(`Obrigado @${userstate.username} pelos ${userstate.bits} bits!`);
  SucessLog(`${userstate.bits} bits from ${userstate.username}`);
}