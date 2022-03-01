import {GetClient} from '../../Client.js'

import {onHostingHandler} from '../FuncoesEventos/index.js'
import {onRaidedHandler}  from '../FuncoesEventos/index.js'
import {onHostedHandler}  from '../FuncoesEventos/index.js'

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


