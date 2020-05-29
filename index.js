const express = require('express');
const bodyParser = require ("body-parser"); 
// Express validator 
// https://express-validator.github.io/docs/
const { check, validationResult } = require('express-validator');

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(express.static('./views'));
app.set('view engine','ejs');
app.set('views','./views');



app.get('/', (req,res) => {
    res.render('index',{title:"EJS Doc", message:"Paragraph of new EJS"});

});

app.get('/login', (req,res) => {
    res.render('login',{title:"EJS Login Form", message:"Please login"});
});



// EXPRESS VALIDATOR

app.post('/login',urlencodedParser, [
    // username must be an email
    check('username','Username Should be Email').isEmail(),
    // password must be at least 5 chars long
    check('password','Password must be min 5 Character long').isLength({ min: 5 })
  ], (req,res) => {
    
    const errors = validationResult(req);
    console.log(errors.mapped());
    console.log('Data recived', req.body.username);
    if (!errors.isEmpty()) {
        res.render('login',{title:"Login", message: `Error during Login`, error:errors.mapped()});         
      }else{
        res.render('welcome',{title:"Welcome " + req.body.username, message: `Welcome ${req.body.username}, your password is ${req.body.password}`});
      }

});


app.listen(3000, () => {
    console.log("Server up and running");
});