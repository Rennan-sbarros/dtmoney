const express = require('express')
const { resolve } = require('path')
const app = express()

app.use('/', 
    express.static(
        __dirname,
        './build'
    )
)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// app.listen(process.env.PORT || 3000, (err) =>{
//     if (err) {
//         return console.log(err)
//     }
//     console.log('Tudo funcionando')
    
// })