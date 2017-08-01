var path = require("path");

module.exports = {
    complie: {
        source: path.join(__dirname, "../src/index.js"),
        dest: path.join(__dirname, "../dest/tomato.js")
    },
    aloneTomato:{
        source: path.join(__dirname, "../src/aloneIndex.js"),
        dest: path.join(__dirname, "../chrome-extends/alonetomato.js")
    }
}