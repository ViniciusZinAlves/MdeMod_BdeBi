import {NOME_BOT, OAUTH_TOKEN, NOME_CANAL} from './contantes.js'

import tmi from 'tmi.js'
// Define configuration options
const opts = {
  opts:{ debug: true },
  connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
	},
  identity: {
    username: NOME_BOT,
    password: OAUTH_TOKEN
  },
  channels: [NOME_CANAL]
};

// Create a client with our options
const client = new tmi.client(opts);

export function GetClient()
{
    return client;
}

export function Connect()
{
    client.connect();
}