const express = require('express');


const router = express.Router();

require('../database/db');
const User = require('../model/user');

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








module.exports = router;