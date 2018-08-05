const express = require('express');
const moongose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();


// Bodyparser Middleware


app.use(bodyParser.json());


//DB Config

const db = require('./config/keys').mongoURI;

moongose.connect(db)
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

//USE Routes

app.use('/api/items',items);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    //Set a static folder
    app.use(express.static('client/build'));

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'inddex.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('Server running in port: '+port));