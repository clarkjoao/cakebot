const dataJson = require("../data/data.json");
const messagesJson = require("../data/messages.json");
const warningJson = require("../data/warning.json");

const { updateMenu } = require("../sessions");

async function menuOne(client, message) {
    if (!parseInt(message.body)) {
        return await client.sendMessage(
            message.from,
            warningJson["option_invalid"]
        );
    }

    let menu = dataJson.cities.map((i) => {
        return `*[${i.id}]* - ${i.name}\n`;
    });

    let resp = messagesJson.third_message.replace("menu", menu);
    resp = resp.replace(/[,{}]/g, "");

    await client.sendMessage(message.from, resp);
    updateMenu(message.from, 2);
}
module.exports = { menuOne };
