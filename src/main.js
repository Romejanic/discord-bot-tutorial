const { SlasherClient } = require("discord.js-slasher");

const client = new SlasherClient({ useAuth: true });

client.on("command", (ctx) => {
    if(ctx.name === "test") {
        ctx.reply("Hello world!");
    }
});

client.on("ready", () => {
    console.log("I'm logged in!"); 
});

client.login();