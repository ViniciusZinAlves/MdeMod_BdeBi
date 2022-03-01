import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate)
{
  MandaMensagem(`Obrigado @${username} pelo sub de presente para o  ${recipient}.`)

  const senderCount =  ~~userstate["msg-param-sender-count"];
  MandaMensagem(`${username} já mandou ${senderCount} subs para o canal! PogChamp `);
  console.log(`${username} já mandou ${senderCount} subs para o canal! PogChamp`);

  console.log(methods.prime);
  console.log(methods.plan);
  console.log(methods.planName);
  console.log(streakMonths);
}
