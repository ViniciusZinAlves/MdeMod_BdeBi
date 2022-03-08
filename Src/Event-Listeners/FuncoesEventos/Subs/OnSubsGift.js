import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function OnSubsGift(channel, username, numbOfSubs, methods, userstate)
{
  const senderCount =  ~~userstate["msg-param-sender-count"];

  MandaMensagem(`Obrigado @${username} pelo(s) ${numbOfSubs} sub(s) de presente para o canal, 
                ${username} já mandou ${senderCount} subs para o canal! PogChamp .`)

  SucessLog(`Obrigado @${username} pelos ${numbOfSubs} subs de presente para o canal . OnSubsGift`);
  SucessLog(`${username} já mandou ${senderCount} subs para o canal! PogChamp, OnSubsGift`);
  SucessLog(userstate);

}