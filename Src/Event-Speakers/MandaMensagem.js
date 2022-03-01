
import {GetClient} from '../Client.js'
import {NOME_CANAL} from '../contantes.js'

const client = GetClient();

export function MandaMensagem(mensagem)
{
  client.say(NOME_CANAL, `/me ${mensagem}`)
}

export function MandaMensagemComandos(mensagem)
{
  client.say(NOME_CANAL, `${mensagem}`)
}