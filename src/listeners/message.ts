import { Message } from "discord.js";
import { Discord, On } from "discordx";

@Discord()
// @ts-ignore
abstract class MessageListener {

    @On("messageCreate")
    onMessage(message: Message) {
        console.log(`Received message ${message.content} from ${message.author}!`);
    }
}
