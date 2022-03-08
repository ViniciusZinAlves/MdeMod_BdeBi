import {GetClient} from '../../MainIndex.js'

import {onHostingHandler} from '../indexListeners.js'
import {onRaidedHandler}  from '../indexListeners.js'
import {onHostedHandler}  from '../indexListeners.js'

const EventosMap = new Map([
    ['hosting', onHostingHandler],
    ['raided', onRaidedHandler],
    ['hosted', onHostedHandler],
])

export function ChamaEventosHost()
{
   const client = GetClient();
   for(const [NomeEvento, FuncaoEvento] of EventosMap.entries())
   {
       client.on(NomeEvento, FuncaoEvento);
   }
}


