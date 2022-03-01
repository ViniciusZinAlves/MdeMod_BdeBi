import {Connect} from './Client.js'

// Connect to Twitch:
Connect();


import {ChamaEventosConexao} from './Event-Listeners/Events/EventosConexao.js'
import {ChamaEventoMensagem} from './Event-Listeners/Events/EventoMessage.js'
import {ChamaEventosSubs   } from './Event-Listeners/Events/EventoSubsBit.js'
import {ChamaEventosHost   } from './Event-Listeners/Events/EventoHost-raid.js'

ChamaEventosConexao();
ChamaEventoMensagem();
ChamaEventosSubs();
ChamaEventosHost();