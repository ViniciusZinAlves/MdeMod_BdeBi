import {MandaMensagem} from '../../../Event-Speakers/indexSpeaker.js'
import {SucessLog} from '../../../MainIndex.js'

export function onHostingHandler(channel, target, viewers)
{
  MandaMensagem(`Acompanhe agora o canal do(a) @${target} ate mais meus queridos!`)
}
