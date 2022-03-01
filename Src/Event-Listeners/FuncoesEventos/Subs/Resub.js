import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function resubHandler(channel, username, months, message, userstate, methods)
{
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  MandaMensagem(`Obrigado @${username} pelo ${cumulativeMonths}º mes de sub!`);
  console.log(`${cumulativeMonths} from ${username}`);
  console.log(`${months} from ${methods}`);
  console.log(months);
  console.log(methods);
}