import {GetClient}             from '../../../MainIndex.js'
import {LISTA_MODS_BDEBI}      from '../../../MainIndex.js'
import {SucessLog}             from '../../../MainIndex.js'

import {checkTwitchChatForCommands} from './Message.js'
import {CarregaVariaveisWhisper}    from './Message.js'

const client = GetClient();
export function onWhisperHandler (from, usuario, mensagem, bot)
 {
  if (bot) return;
  from = from.toLowerCase();
  let ehModBiWhisper = LISTA_MODS_BDEBI.some(mods_bi => from.includes(mods_bi.toLowerCase()))
  
  if(ehModBiWhisper)
  {
    CarregaVariaveisWhisper(mensagem, ehModBiWhisper)
    checkTwitchChatForCommands()
  }
  
}