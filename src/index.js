const { menuZero, menuOne, menuTwo } = require("./action");
const { createSession } = require("./sessions");
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

function start() {
    const client = new Client();
    client.initialize();

    client.on("qr", (qr) => {
        console.log("QR RECEIVED", qr);
        qrcode.generate(qr, { small: true });
    });

    client.on("ready", () => {
        console.log("Client is ready!");
    });

    client.on("message", async (message) => {
        const user = await createSession(message);

        switch (user.menu) {
            case 0: {
                menuZero(client, message);
                break;
            }
            case 1: {
                menuOne(client, message);
                break;
            }
            case 2: {
                menuTwo(client, message);
                break;
            }
        }
    });
}

start();
