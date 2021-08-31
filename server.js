const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path'); 
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
var port=Number(process.env.PORT || 4001);
app.use(bodyParser.urlencoded({ extended: true }));
const login=require('./login');
const { json } = require('body-parser');
app.set("view options", {layout: false});
app.use(cookieParser());
app.use(cors({credentials: true,    origin: true,
    withCredentials: true }));
// app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true, }));
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     // req.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // req.header("Access-Control-Allow-Headers", "Accept");
//     next();
// });

app.listen(port, function () {
    console.log("my server is listening to port 4001");
    
});
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/test.html'));
  });
app.use('/login',login)