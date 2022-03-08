
import {GetClient} from '../../MainIndex.js'
import {NOME_CANAL} from '../../MainIndex.js'
import {ErrorLog} from '../../MainIndex.js'

const client = GetClient();

export function MandaMensagemComandos(mensagem)
{
  client.say(NOME_CANAL, `${mensagem}`)

  .then((data) => {
    // data returns [channel]
  }).catch((err) => {
    ErrorLog(`MandaMensagemComandos: 
    ${err}`);
  });

}