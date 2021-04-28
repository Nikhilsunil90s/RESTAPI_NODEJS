const express = require('express');
const feedRoutes = require('./routes/blogRoutes');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin' , "*");
    res.setHeader('Access-Control-Allow-Methods' , "GET, PUT, POST, DELETE");
    res.setHeader('Access-Control-Allow-Headers' , "Content-Type");
    next();
})

app.use('/feeds' , feedRoutes);

app.listen(8080);