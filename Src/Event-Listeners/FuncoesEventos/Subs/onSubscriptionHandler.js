
import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onSubscriptionHandler(channel, username, method, message, userstate)
{
  MandaMensagem(`Obrigado @${username} pelo subszinho`);
  SucessLog(`Obrigado @${username} pelo subszinho, onSubscriptionHandler`);
}
