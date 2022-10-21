const express = require('express');
const app = express();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

// sequelize.synce is the method that connects computer to database with javascript
// sequelize.sync().then(()=>{})

sequelize.sync().then(()=>{
    // the first parameter is the number that port will access to
    app.listen(PORT, () => {
        console.log(`check the port at http:localhost${PORT}`)
    });
});

// when you run the server, if you see SELEC 1+1 AS result. It demonstrates js is connected to server.


