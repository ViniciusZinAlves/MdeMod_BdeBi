
import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onGiftPaidUpgradeHandler(channel, username, sender, userstate)
{
  // quando alguem recebe inicialmente um sub de presente e continua o sub, com prime ou pagando
  MandaMensagem(`Obrigado @${username} pro continuar o seu sub!`);

  SucessLog(`onGiftPaidUpgradeHandler`);
  SucessLog(`${sender}, onGiftPaidUpgradeHandler`);
  SucessLog(`${userstate}, onGiftPaidUpgradeHandler`);
}
