
const keys = require("./configs/cle_api.json");

module.exports.VerifKey = function (val) {
    return new Promise(function (resolve, reject) {
        srcKey = val;
        console.log("srckey=" + srcKey)
        for (var t in keys) {
            if (srcKey === keys[t].cle_api) {
                resolve(srcKey)
            }
        }
        reject("");
    })
}