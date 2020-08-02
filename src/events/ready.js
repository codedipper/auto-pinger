const { 
    PINGCHANNELID,
    PINGCHANNEL2ID,
    MENTION,
    INTERVAL
} = require("../config.json");

module.exports = {
    run(Client){
        console.log(Client.user.username + " is up and running!");
  
        function sendPing() {
            Client.createMessage(PINGCHANNELID, MENTION);
            Client.createMessage(PINGCHANNEL2ID, MENTION);
        }
      
        setInterval(sendPing, INTERVAL * 1000);
    }
};
