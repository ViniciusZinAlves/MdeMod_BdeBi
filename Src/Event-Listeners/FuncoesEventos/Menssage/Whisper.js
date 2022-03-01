import {GetClient}                                         from '../../../Client.js'
import {MandaMensagem, MandaMensagemComandos}              from '../../../Event-Speakers/MandaMensagem.js'
import {NOME_CANAL, LISTA_MODS_BDEBI}  from '../../../contantes.js'

import {checkTwitchChatForCommands} from './Message.js'

const client = GetClient();
export function onWhisperHandler (from, usuario, mensagem, bot)
 {
  if (bot) return;
  from = from.toLowerCase();
  let ehModBi = LISTA_MODS_BDEBI.some(mods_bi => from.includes(mods_bi.toLowerCase()))
  
  if(ehModBi)
    checkTwitchChatForCommands(usuario, mensagem)
  
}