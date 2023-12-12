require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2238
const router = require('./routes/contactrouter')


app.use(router)
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})