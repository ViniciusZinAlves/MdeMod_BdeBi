const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === 'f') {
    client.say(target, 'bdeF');
    console.log(`* Executed ${commandName} command`);
  } if (commandName === 'aff') {
    client.say(target, 'bdeAff');
    console.log('* Executed ${commandName} command');
  } if (commandName === 'SeriousSloth') {
    client.say(target, 'SeriousSloth');
    console.log('* Executed ${commandName} command');
  } if (commandName === 'BIGHAM') {
    client.say(target, 'BIGHAM');
    console.log('* Executed ${commandName} command');
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

  // Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log('* Connected to ${addr}:${port}');
}
