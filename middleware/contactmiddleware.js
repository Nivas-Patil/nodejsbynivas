const contactbridge = (req,res,next) =>{
    if(!req.query.age){
        res.send('please provide your age');
    }
    else if(req.query.age<18){
        res.send('you are not elegible to browse this website');
    }else if(req.query.age>17){
        res.send('<b>you are elegible to browse this website</b>');
    }else{
        next()
    }
}

module.exports = contactbridge;

// express js middleware example