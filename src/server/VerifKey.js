
const keys = require("./configs/cle_api.json");


module.exports.VerifKey = function (req, res) {
    srcKey = req;
    console.log("srckey=" + srcKey)
    for (var t in keys) {
        if (srcKey === keys[t].cle_api) {
            return res(srcKey)
        }
    }
    return res("");
}

