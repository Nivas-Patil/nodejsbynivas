const Router = require('router')
const router = Router();
//set cookie
router.get('/',(req,res)=>{
    res.cookie('setName','Nivas-Patil-Kolhapurkar');
    res.send('cookie set successfully');
})

// delete cookie
router.get('/clear',(req,res)=>{
    res.clearCookie('setName');
    res.send('cookie deleted');
})

module.exports = router;