
import {GetClient} from '../../MainIndex.js'
import {NOME_CANAL} from '../../MainIndex.js'
import {SucessLog} from '../../MainIndex.js'
import {ErrorLog} from '../../MainIndex.js'

const client = GetClient();

export function MandaMensagem(mensagem)
{
  client.say(NOME_CANAL, `/me ${mensagem}`)
  .then((data) => {
    // data returns [channel]
  }).catch((err) => {
    ErrorLog(`MandaMensagem: 
    ${err}`);
    return;
  });

}

