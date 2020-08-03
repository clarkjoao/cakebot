const dataJson = require("../data/data.json");
const messagesJson = require("../data/messages.json");

const { removeSession } = require("../sessions");

async function menuTwo(client, message) {
    if (!parseInt(message.body)) {
        return await client.sendMessage(
            message.from,
            warningJson["option_invalid"]
        );
    }
    let menu = [];

    dataJson.places.map((i) => {
        if (i.cities.includes(parseInt(message.body))) {
            if (i.link) {
                menu.push(
                    `*${i.name}* - ${i.phone} ou no whatsapp: ${i.link}\n`
                );
            } else {
                menu.push(`*${i.name}8 - ${i.phone}\n`);
            }
        }
        return;
    });
    let resp;

    if (menu && menu.length > 0) {
        resp = messagesJson.fourth_message.replace("menu", menu);
        resp = resp.replace(/[,{}]/g, "");
    } else {
        resp = messagesJson.fourth_message_error;
    }

    await client.sendMessage(message.from, resp);
    await client.sendMessage(message.from, messagesJson.fifth_message);
    removeSession(message.from);
}

module.exports = { menuTwo };
