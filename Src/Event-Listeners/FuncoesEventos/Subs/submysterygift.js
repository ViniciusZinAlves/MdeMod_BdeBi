import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function OnSubsGift(channel, username, numbOfSubs, methods, userstate)
{
  MandaMensagem(`Obrigado @${username} pelos ${numbOfSubs} subs de presente para o canal .`)

  const senderCount =  ~~userstate["msg-param-sender-count"];
  MandaMensagem(`${username} já mandou ${senderCount} subs para o canal! PogChamp `);
  console.log(methods);
  console.log(streakMonths);

  console.log(`${username} já mandou ${senderCount} subs para o canal! PogChamp`);

}