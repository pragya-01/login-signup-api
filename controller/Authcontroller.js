const User = require('../models/userschema')
const jwt = require('jsonwebtoken');


const register = (req,res,next)=> {
    bcrypt.hash(re.password, 10, function(err,hashedPass)
    {
        if(err){
            res.json({
                error:err
            })
        }
        let user= new User({
            email: req.body.email,
            password:hashedPass
        })
    
        user.save()
        .then(user => {
            res.json({
                message:'Succesfull'
            })
    })
    .cath(errr => {
        res.json({
            message:'error!'
        })
    })
    })
}

const login = (req,res,next)=> {
    var email= req.body.email
    var password = req.body.password

    user.findOne({$or:[{email:email}]})
    .then(user=> {
        if(user){
            bcrypt.compare(password,user.password, function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({email:user.email},'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message:"login successfull",
                        token
                    })
                 } else{
                        res.json({
                            message:'password does not match '
                        })
                    }
            })
        }
    })
}

// const forgotPassword = (req,res,next) =>{
//     var email = req.body.email
//     user.findOne({$or:[{email:email}]})
//     .then(user=> {
//         if(user){
//             const secret = 'verySecretValue'+ user.password
//             const payload = {
//                 email: user.email,
//                 id: user.id,
//             }
//             let token = jwt.sign(payload, secret, {expiresIn:'15m'})
//             const link = 'https://localhost:8000/reset-password/${user.id}/${token}'
//         }
//         else{
//             res.json({
//                 message:'User not found'
//             })
//         }
// }
    // )}
module.exports = {
    register,
    login,
    // forgotPassword
}