const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});


const router = express.Router();

require('../database/db');
const User = require('../model/user');
const Token = require('../model/token');

/* register ki API */



router.post('/register', async (req, res) => {
    const { name, username, password } = req.body;
    
    if (!name || !username || !password) {
        return res.status(422).json({ error: 'Fill all fields plz !!!!' });
    }

    try {
        const userExist = await User.findOne({ username: username });
        
        if (userExist) {
            return res.status(422).json({ error: 'User already exist !!' });
        } else {
            
            
            const user = new User({ name, username, password });
   
            //   yha pr wo bcyptjs wala code use hora hai *************
        
            await user.save();

            res.json({ msg: 'new user created' });
            
        }


    } catch (err) {
        console.log(err);
    }
});



/* register ki API */



// /* Login ki API */ 

router.post('/login', async (req, res) => {
       
        try {
            const { username, password} = req.body;

            if (!username || !password)
            {
               return res.status(422).json({ error: 'Invalid' });
            }
            
            const userLogin = await User.findOne({ username: username });

            //  Token part ************************************************************************************************
            
            const token = await userLogin.generateAuthToken();
            console.log(token);
            console.log(userLogin);

                if (userLogin)
            {const ismatch = await bcrypt.compare(password, userLogin.password);

            if (!ismatch)
            {
                return res.status(422).json({ error: 'Invalid' });
                }else
            {res.json({ message: 'Successful' });
                
                }

            }else {
                     return res.status(422).json({ error: 'Invalid' });
                }
        } catch (err) {
            console.log(err);
        }
    
    
    

//     // try {

//     //     const user = await User.findone({ username: req.body.username });
//     // if (!user) {
//     //     return res.status(400).json({ msg: ' username not match ' });
//     //     }
        
//     //     const match = await bcrypt.compare(req.body.password, user.password);
//     //     if (match) {
//     //         const accesstoken = jwt.sign(user.toJson(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
//     //         const refreshtoken = jwt.sign(user.toJson(), process.env.REFRESH_SECRET_KEY);
               
//     //         const newToken = new Token({ token: refreshtoken })
            
//     //         await newToken.save();

//     //         return response.status(200).json({ accesstoken: accesstoken, refreshtoken: refreshtoken, name: user.name, username: user.username})

//     //     } else {
//     //         res.status(400).json({ msg: "Invalid password" });
//     //     }
//     // } catch (err) {
//     //     return res.json(500).json({msg: 'Error While Login '})
//     // }
});
    

// /* Login ki API */



module.exports = router;