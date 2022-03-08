import {GetClient} from '../../MainIndex.js'

import {onMessageHandler} from '../indexListeners.js'
import {onWhisperHandler} from '../indexListeners.js'

const EventosMap = new Map([
    ['message', onMessageHandler],
    ['whisper', onWhisperHandler],
])

export function ChamaEventoMensagem()
{
    const client = GetClient();
   for(const [NomeEvento, FuncaoEvento] of EventosMap.entries())
   {
       client.on(NomeEvento, FuncaoEvento);
   }
}

