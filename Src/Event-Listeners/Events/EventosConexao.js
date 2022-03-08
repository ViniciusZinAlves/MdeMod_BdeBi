import {GetClient} from '../../MainIndex.js'

import {onConnectedHandler}    from '../indexListeners.js'
import {onDisconnectedHandler} from '../indexListeners.js'
import {reconnectHandler}      from '../indexListeners.js'

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

