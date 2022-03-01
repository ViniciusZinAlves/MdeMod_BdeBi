import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onCheerHandler(channel, userstate, message)
{
  MandaMensagem(`Obrigado @${userstate.username} pelos ${userstate.bits} bits!`);
  console.log(`${userstate.bits} from ${userstate.username}`);
}