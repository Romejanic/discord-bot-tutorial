const { SlasherClient } = require("discord.js-slasher");

const client = new SlasherClient({ useAuth: true });

client.on("command", (ctx) => {
    if(ctx.name === "greet") {
        // gets user, or target the sender if no user given
        let target = ctx.options.getUser("target") || ctx.user;

        // target.toString() creates a mention
        ctx.reply("Hello there, " + target.toString() + "! :D");
    }
});

client.on("ready", () => {
    console.log("I'm logged in!"); 
});

client.login();