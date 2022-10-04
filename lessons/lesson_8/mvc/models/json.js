const fs = require("fs");

let users = [];
const filename = __dirname + "/../users.json";

class User {

    constructor(email, password) {
        if (email && password) {
            this.add(email, password);
        }
    }
    existsUser(email, password) {
        return users.find((user) => user.email === email && user.password === password);
    }
    add(email, password) {
        if (!this.existsUser(email, password))
            users.push({ email, password });
    }
    remove(email, password) {
        users = users.filter(user => user.email !== email && user.password !== password);
    }
    save() {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, JSON.stringify(users), (error, data) => {
                if (error)
                    reject(error);

                else
                    resolve(data);
            });
        });
    }
}


module.exports = User