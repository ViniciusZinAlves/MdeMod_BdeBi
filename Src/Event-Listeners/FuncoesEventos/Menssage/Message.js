import {GetClient}             from '../../../MainIndex.js'
import {MandaMensagem}         from '../../../Event-Speakers/indexSpeaker.js'
import {MandaMensagemComandos} from '../../../Event-Speakers/indexSpeaker.js'
import {SetHoraUltimaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog}             from '../../../MainIndex.js'
import {NOME_CANAL        ,
        PALAVRAS_OFENSIVAS,
        PALAVRAS_BANIDAS  ,
        LISTA_MODS_BDEBI  ,
        BOTS_LIVE         }  from '../../../MainIndex.js'

const client = GetClient();

const OnElements = "BdeBi is now live!";
const OnSH = `Olá @bdebi! :smiling_face_with_3_hearts: A holics1Fav te deseja uma excelente live!`;

let ehModBi = false;
let UserMensagem = "";
let UserName = "";
let User = undefined;
let NomeCanal = `#bdebi`;

function CarregaVariaveisGlobais(canal, usuario, mensagem)
{
  NomeCanal    = canal;
  User         = usuario;
  UserMensagem = mensagem.toLowerCase();
  UserName     = usuario.username.toLowerCase();
  ehModBi       = LISTA_MODS_BDEBI.some(mods_bi => UserName.includes(mods_bi.toLowerCase()))
}

export function CarregaVariaveisWhisper(mensagem, ehModBiWhisper)
{
  UserMensagem = mensagem.toLowerCase();
  ehModBi      = ehModBiWhisper;
}

export function onMessageHandler (canal, usuario, mensagem, bot)
 {
    if(bot) return;

    CarregaVariaveisGlobais(canal, usuario, mensagem)
   
    const mansagem_bot = BOTS_LIVE.some(bots_live => UserName.includes(bots_live.toLowerCase()))

    if(mansagem_bot)
       CheckMensagemLiveOn();

    if(mansagem_bot)                      return;
    if(User['message-type'] == 'whisper') return;

    const HoraUltimaMensagem = Date.now();
    SetHoraUltimaMensagem(HoraUltimaMensagem); 

    if(!ehModBi)
      checkForBanTwitchChat();

    checkTwitchChatForCommands();
}

function checkForBanTwitchChat()
{
    let Banido = false;
    let mensagem_ofensiva = false;
    mensagem_ofensiva = PALAVRAS_BANIDAS.some(palavras_banidas => UserMensagem.includes(palavras_banidas.toLowerCase()));

    if (mensagem_ofensiva) 
    {
      client.ban(NOME_CANAL, UserName, `mensagem enviada inclui palavras não permitidas no chat`);
      SucessLog(`${UserName} banido por ${UserMensagem}`);
      Banido = true;
    }
  
    if(Banido) return;
    checkTwitchChat();
}

function checkTwitchChat() 
{
    let mensagem_ofensiva = false
    mensagem_ofensiva = PALAVRAS_OFENSIVAS.some(palavras_ofensivas => UserMensagem.includes(palavras_ofensivas.toLowerCase()))

    if (mensagem_ofensiva) 
    {
      client.deletemessage(NOME_CANAL, User.id);
      SucessLog(` "${UserMensagem}" excluida from ${UserName} `);
    }
}  

export function checkTwitchChatForCommands()
{ 
  if(ehModBi)
     checkTwitchChatForCommandsMods()
  
  checkTwitchChatForCommandsUser();
}

function checkTwitchChatForCommandsMods()
{
  if(UserMensagem == `clear`)
     MandaMensagemComandos(`/clear `);
}

function checkTwitchChatForCommandsUser()
{
  if(UserMensagem.includes(" mec "))
     MandaMensagem(`:ox:`);
}

function CheckMensagemLiveOn()
{
  if(UserMensagem.includes(OnElements.toLowerCase()) ||
     UserMensagem.includes(OnSH      .toLowerCase()) )
     {
      SucessLog(UserMensagem)
      SucessLog("Live on")
       MandaMensagem(`CHAMANDO TODOS OS GADOS :ox: :ox: , A STREAMER MAIS CALVA DA TWITCH ESTÁ ON`)
     }
}

