const queries = require('../prisma/queries');
const bcrypt = require('bcrypt');

const getRegistration=(req, res, next)=>{
    res.render('register');
}

async function registerUser(req, res, next){
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    const {first_name, last_name, email, password} = req.body;
    queries.registerUser(first_name,last_name,email,hashedPassword)
    res.redirect('/');
}

module.exports={
    getRegistration,
    registerUser
}