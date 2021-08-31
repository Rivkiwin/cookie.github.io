
  

const express = require('express');
const router = express.Router();

router.post('/login', async(req, res)=> {
  let { username, password } = req.body;   
    console.log(username);
    res.cookie("username", username).sendStatus(200);;
    
})
router.get("/user",(req, res) => {
    // get the username
    let username = req.cookies.username;
  console.log(req.cookies);
    return res.send({username:username});
  });
  
module.exports = router;
