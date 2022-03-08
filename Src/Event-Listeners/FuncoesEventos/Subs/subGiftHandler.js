import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate)
{
  //MandaMensagem(`Obrigado @${username} pelo sub de presente para o  ${recipient}.`)

  const senderCount =  ~~userstate["msg-param-sender-count"];
  //MandaMensagem(`${username} já mandou ${senderCount} subs para o canal! PogChamp `);
  SucessLog(`${username} já mandou ${senderCount} subs para o canal! PogChamp, subGiftHandler`);
  SucessLog(userstate);
;
}
