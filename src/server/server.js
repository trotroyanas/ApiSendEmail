const express = require("express");
const app = express();
const path = require('path');


const sendemail = require("./SendEmail.js")
const VerifKey = require("./VerifKey.js")

app.use(express.json());



app.get("/", (req, res) => {
  // If no error, then good to go...
  res.send("Api d'envoi d'Email, by Perps©2020 !!! ");
});

app.post("/api/send/email", (req, res) => {
  // If no error, then good to go...
  params = { "cle_api": req.body.cle_api, "sujet": "pas glop", "msg": "mon superbe message" }
  //console.log(params);
  sendemail.ApiSendEmail(params.cle_api, (z)=> {
    console.log(z)
    res.send(z)
  })
});



//port  set PORT=XXXX
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));