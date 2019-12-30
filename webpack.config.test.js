let glob = require('glob');

let entry = glob.sync(__dirname + "/test/*.js");
let output = __dirname + "/test-dist/";

module.exports = {
    entry: entry, 
    output: {
        path: output
    }
}