require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2238

app.get('/',(req,res)=>{
    res.cookie('setName','Nivas-Patil-Kolhapurkar');
    res.send('cookie set successfully');
})

// set cookie
app.get('/clear',(req,res)=>{
    res.clearCookie('setName');
    res.send('cookie deleted');
})

//delete cookie
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})