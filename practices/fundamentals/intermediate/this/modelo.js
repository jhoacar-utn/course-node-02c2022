const fs = require("fs")

function Emoji(emoji, name, votes) {

    this.emoji = emoji;
    this.name = name;
    this.votes = votes;
    this.file = __dirname + "/data.txt";

    this.save = () => {
        const data = this.emoji + " " + this.name + " " + this.votes;
        fs.appendFileSync(this.file, data);
    }
}

module.exports = Emoji;