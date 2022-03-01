
import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onSubscriptionHandler(channel, username, method, message, userstate)
{
  MandaMensagem(`Obrigado @${username} pelo subszinho`);
  console.log(`Obrigado @${username} pelo subszinho`);


}
