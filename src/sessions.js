const sessions = [];

async function getUserById(id) {
    return await sessions.find((index) => index.id == id);
}

async function removeSession(id) {
    const userIndex = sessions.findIndex((i) => i.id === id);
    if (userIndex != -1) {
        sessions.splice(userIndex, 1);
    }
}

async function createSession(message) {
    return await new Promise(async (resolve) => {
        let user = await sessions.find((index) => index.id == message.from);
        if (!user) {
            user = {
                id: message.from,
                menu: 0,
                lastMessage: message.body,
            };
            sessions.push(user);
        }
        resolve(user);
    });
}

async function updateMenu(id, menu) {
    const userIndex = sessions.findIndex((i) => i.id === id);

    sessions[userIndex].menu = menu;

    return true;
}

module.exports = { getUserById, removeSession, createSession, updateMenu };
