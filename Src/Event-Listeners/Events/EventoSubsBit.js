import {GetClient} from '../../Client.js'

import {onSubscriptionHandler}    from '../FuncoesEventos/index.js'
import {onCheerHandler}           from '../FuncoesEventos/index.js'
import {resubHandler}             from '../FuncoesEventos/index.js'
import {subGiftHandler}           from '../FuncoesEventos/index.js'
import {OnSubsGift}               from '../FuncoesEventos/index.js'
import {onGiftPaidUpgradeHandler} from '../FuncoesEventos/index.js'


const EventosMap = new Map([
    ['subscription'   , onSubscriptionHandler   ],
    ['cheer'          , onCheerHandler          ],
    ['resub'          , resubHandler            ],
    ['subgift'        , subGiftHandler          ],
    ['submysterygift' , OnSubsGift              ],
    ['giftpaidupgrade', onGiftPaidUpgradeHandler],
])

export function ChamaEventosSubs()
{
    const client = GetClient();
   for(const [NomeEvento, FuncaoEvento] of EventosMap.entries())
   {
       client.on(NomeEvento, FuncaoEvento);
   }
}


