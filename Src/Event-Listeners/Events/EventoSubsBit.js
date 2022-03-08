import {GetClient} from '../../MainIndex.js'

import {onSubscriptionHandler}    from '../indexListeners.js'
import {onCheerHandler}           from '../indexListeners.js'
import {resubHandler}             from '../indexListeners.js'
import {subGiftHandler}           from '../indexListeners.js'
import {OnSubsGift}               from '../indexListeners.js'
import {onGiftPaidUpgradeHandler} from '../indexListeners.js'


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


