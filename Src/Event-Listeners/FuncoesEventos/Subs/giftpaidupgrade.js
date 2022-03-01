
import {MandaMensagem} from '../../../Event-Speakers/MandaMensagem.js'

export function onGiftPaidUpgradeHandler(channel, username, sender, userstate)
{
  // quando alguem recebe inicialmente um sub de presente e continua o sub, com prime ou pagando
  MandaMensagem(`Obrigado @${username} pro continuar o seu sub!`);
  console.log(`${sender}, onGiftPaidUpgradeHandler`);
  console.log(`${userstate}, onGiftPaidUpgradeHandler`);
}
