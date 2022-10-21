const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const controllers = require('./controllers');

const Model = require('./models');

const PORT = process.env.PORT || 3001;

// we used this so instead of right /api for each route we create a folder stating that all the files will use /api routes
app.use('/api', controllers);


//  the first parameter in app.get is the url address
// req is the user request
// res is the server response to the user request
app.get('/', (req, res)=>{
    res.json('hi');
});

// sequelize.synce is the method that connects computer to database with javascript
// sequelize.sync().then(()=>{})
sequelize.sync().then(()=>{
    // the first parameter is the number that port will access to
    app.listen(PORT, () => {
        console.log(`check the port at http:localhost${PORT}`)
    });
});

// when you run the server, if you see SELEC 1+1 AS result. It demonstrates js is connected to server.


