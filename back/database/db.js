const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});

mongoose.connect('mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/NEWSApplication?retryWrites=true&w=majority', {
     useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err);
})