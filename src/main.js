const { TOKEN } = require("./config.json");
const Eris = require("eris");
const Client = new Eris(TOKEN, { allowedMentions: { everyone: true }});

Client.once("ready", () =>{
    let readyFire = require("./events/ready.js");
    readyFire.run(Client);
});

Client.on("error", () =>{
    let errorFire = require("./events/error.js");
    errorFire.run(Client);
});
  
Client.connect();
