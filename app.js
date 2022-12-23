const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.use((req,res) =>{
    res.json({message : 'Votre application Express fonctionne'})
})

module.exports = app;