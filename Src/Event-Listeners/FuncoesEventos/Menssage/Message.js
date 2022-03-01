import {GetClient}                                         from '../../../Client.js'
import {MandaMensagem, MandaMensagemComandos}              from '../../../Event-Speakers/MandaMensagem.js'
import {NOME_CANAL, PALAVRAS_OFENSIVAS, PALAVRAS_BANIDAS, NOME_STREAMER, LISTA_MODS_BDEBI}  from '../../../contantes.js'

const client = GetClient();
export function onMessageHandler (canal, usuario, mensagem, bot)
 {
  if(bot)                                  return;
  if(usuario['message-type'] == 'whisper') return;
  
  checkTwitchChat(usuario, mensagem, canal);
  checkTwitchChatForCommands(usuario, mensagem);
}

function checkTwitchChat(usuario, mensagem, canal) 
{
  mensagem = mensagem.toLowerCase()

  let mensagem_ofensiva = false
  mensagem_ofensiva = PALAVRAS_OFENSIVAS.some(palavras_ofensivas => mensagem.includes(palavras_ofensivas.toLowerCase()))
  if (mensagem_ofensiva) 
  {
    MandaMensagem(`@${usuario}, mensagem com conteudo improprio para o canal`);
    client.deletemessage(NOME_CANAL, usuario.id);
    console.log(mensagem);
  }

    checkForBanTwitchChat(usuario, mensagem, canal);
}

function checkForBanTwitchChat(usuario, mensagem, canal)
{
  mensagem = mensagem.toLowerCase();

  let mensagem_ofensiva = false;
  mensagem_ofensiva = PALAVRAS_BANIDAS.some(palavras_banidas => mensagem.includes(palavras_banidas.toLowerCase()));
  if (mensagem_ofensiva) 
  {
    client.ban(NOME_CANAL, usuario.username, `"${mensagem}" inclui palavras não permitidas no chat`);
    console.log(mensagem);
  }
}

export function checkTwitchChatForCommands(usuario, mensagem)
{
  let username = usuario.username.toLowerCase();
  let ehModBi = LISTA_MODS_BDEBI.some(mods_bi => username.includes(mods_bi.toLowerCase()))

  if(usuario.mod || usuario.badges.broadcaster || ehModBi)
    checkTwitchChatForCommandsMods(usuario, mensagem)
  

  checkTwitchChatForCommandsUser(usuario, mensagem);
}


function checkTwitchChatForCommandsMods(usuario, mensagem)
{

    if(mensagem == `clear`)
      MandaMensagemComandos(`/clear `);
  
}

function checkTwitchChatForCommandsUser(usuario, mensagem)
{
  if(mensagem.includes("mec"))
    MandaMensagem(`:ox:`);
}
