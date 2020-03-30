const uuidv4 = require("uuid/v4");
const moment = require('moment');

const Verif = require("./VerifKey.js")

// Attempt to connect and execute queries if connection goes through

validateSms = function (sms) {
    const schema = {
        cle_api: Joi.string().min(36).max(36).required(),
        cle_client: Joi.number().integer().required(),
        id: Joi.string().max(36).required(),
        contenu: Joi.string().min(5).required(),
        date_prevue: Joi.string().min(14).max(17).required(),
        date_ttl: Joi.string().min(14).max(17).required(),
        tel: Joi.string().min(10).max(11).required(),
        valide: Joi.number().integer().required(),
        emetteur: Joi.string().min(0).max(11)
    };
    return Joi.validate(sms, schema);
}



module.exports.ApiSendEmail = function (req, res) {
    /*     const {
            error
        } = validateSms(req.body);
        if (error) return res.status(400).send(error.details[0].message); 
    */
    obj = { "status": 0, "msg": "" }


    console.log("phase:" + req)
    Verif.VerifKey(req, function ttt(rrr) {
        if (rrr !== "") {
            console.log(rrr)
            obj.status = 0;
            obj.msg = rrr
            res(obj)
        } else {
            //res.status(404).send('{"Error":"ApiKey not found"}');
            obj.status = 1;
            obj.msg = "ApiKey not found"
            res(obj)
        }
    })



}