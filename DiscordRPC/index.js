const discord = require("discord-rpc")
const client = new discord.Client({ transport: "websocket" })
const config = require("./config.json")

client.on("ready", () => {
    console.clear()
    console.log(`Connected. Logged in as: ${client.user.username} \n`)

    client.clearActivity()
    client.setActivity({
        state: config.state,
        details: config.description,
        largeImageKey: config.image_large,
        largeImageText: config.image_large_text,
        smallImageKey: config.image_small,
        partyMax: config.party_max,
        partySize: config.party_current,
        buttons: [{ label: config.buttons.button1.text, url: config.buttons.button1.link }, { label: config.buttons.button2.text, url: config.buttons.button2.link }],
        startTimestamp: Math.floor(new Date().getTime() / 1000)
    })
})
client.login(config.appid)
