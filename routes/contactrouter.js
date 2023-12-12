const Router = require('router')
const router = Router();
const contactbridge = require('../middleware/contactmiddleware')
//set cookie
router.get('/', contactbridge ,(req,res)=>{
    res.cookie('setName','Nivas-Patil-Kolhapurkar');
    res.send('cookie set successfully');
})

// delete cookie
router.get('/clear',(req,res)=>{
    res.clearCookie('setName');
    res.send('cookie deleted');
})

router.get('/contact',(req,res)=>{
    res.send('contact route');
})

module.exports = router;