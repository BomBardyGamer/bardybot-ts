import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
// @ts-ignore
abstract class HelloCommand {

    @Slash("hello")
    hello(
        @SlashOption("name", { description: "Your name, so the bot can say hi" })
        name: string,
        interaction: CommandInteraction
    ) {
        interaction.reply({ content: `Hello ${name}!`, ephemeral: true });
    }
}
