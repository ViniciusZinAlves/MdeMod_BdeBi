import {ErrorLog} from '../../../MainIndex.js'

export function onDisconnectedHandler(reason) 
{
  ErrorLog(`bot foi desconectado por ${reason}`);
}