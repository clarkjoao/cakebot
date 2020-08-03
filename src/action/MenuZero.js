const dataJson = require("../data/data.json");
const messagesJson = require("../data/messages.json");

const { updateMenu } = require("../sessions");

async function menuZero(client, message) {
    await client.sendMessage(message.from, messagesJson.first_mesage);

    let menu = dataJson.brands.map((i) => {
        return `*[${i.id}]* - ${i.name}\n`;
    });

    let resp = messagesJson.secund_message.replace("menu", menu);
    resp = resp.replace(/[,{}]/g, "");

    await client.sendMessage(message.from, resp);
    updateMenu(message.from, 1);
}

module.exports = { menuZero };
