const {
    TOKEN,
    PINGCHANNELID,
    PINGCHANNEL2ID,
    INTERVAL,
    MENTION
} = require("./config.json");

const Eris = require("eris");
const Client = new Eris(TOKEN);
  
Client.on("ready", () => {
    console.log(Client.user.username + " is up and running!");
  
    function sendPing() {
      Client.createMessage(PINGCHANNELID, MENTION);
      Client.createMessage(PINGCHANNEL2ID, MENTION);
    }
  
    setInterval(sendPing, INTERVAL * 1000);
});
  
Client.on("error", err => {
    console.log(err);
    Client.connect();
});
  
Client.connect();