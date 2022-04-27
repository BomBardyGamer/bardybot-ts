import { Client } from "discordx";
import { Intents } from "discord.js";
import config from "../config.json";
import { importx } from "@discordx/importer";

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    silent: config.debug
});

client.once("ready", async () => {
    await client.guilds.fetch();
    console.log("Registering application (slash) commands...");
    await client.initApplicationCommands();
    console.log("Registering application permissions...");
    await client.initApplicationPermissions();
    console.log("Successfully started!");
});

client.on("interactionCreate", (interaction) => {
    client.executeInteraction(interaction)
});

async function run() {
    await importx(__dirname + "/{commands,listeners}/**/*.{ts,js}");
    await client.login(config.token)
        .then(() => console.log("Logged in!"))
        .catch((error) => console.log("Error occurred whilst logging in! ", error));
}

run();
