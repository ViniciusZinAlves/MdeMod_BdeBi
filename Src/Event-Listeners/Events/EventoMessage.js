import {GetClient} from '../../Client.js'

import {onMessageHandler} from '../FuncoesEventos/index.js'
import {onWhisperHandler} from '../FuncoesEventos/index.js'

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

