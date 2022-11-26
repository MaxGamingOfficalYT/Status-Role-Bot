const fs = require("fs");
const allevents = [];

module.exports = async (client) => {
  try {
    let amount = 0;
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files) {
        try {
          const event = require(`../events/${dir}/${file}`)
          let eventName = file.split(".")[0];
          allevents.push(eventName);
          client.on(eventName, event.bind(null, client));
          amount++;
        } catch (e) {
          console.log(e)
        }
      }
    }
    await ["client"].forEach(e => load_dir(e));
    client.logger(`${amount} Events Loaded`.brightGreen);
    client.logger(`Logging into the BOT...`.bold.yellow)
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
};

/**
 * @INFO
 * Bot Coded by MAX GAMING YTᵈᵉᵛ#8643| https://discord.gg/u9x5gdZ6Vw
 * @INFO
 * Work for MAX GAMING YT | https://discord.gg/u9x5gdZ6Vw
 * @INFO
 * Please Mention Us MAX GAMING YT, When Using This Code!
 * @INFO
 */