import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onRaidedHandler(channel, username, viewers)
{
  MandaMensagem(`Obrigado @${username} pela raid de ${viewers} viewers, sejam bem vindos!`)
}
