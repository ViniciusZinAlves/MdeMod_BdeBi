import {GetClient} from '../../Client.js'

import {onConnectedHandler}    from '../FuncoesEventos/index.js'
import {onDisconnectedHandler} from '../FuncoesEventos/index.js'
import {reconnectHandler}      from '../FuncoesEventos/index.js'

const EventosMap = new Map([
    ['connected', onConnectedHandler],
    ['disconnected', onDisconnectedHandler],
    ['reconnect', reconnectHandler],
])

export function ChamaEventosConexao()
{
    const client = GetClient();
   for(const [NomeEvento, FuncaoEvento] of EventosMap.entries())
   {
       client.on(NomeEvento, FuncaoEvento);
   }
}

