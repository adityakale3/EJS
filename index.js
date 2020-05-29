const express = require('express');
const app = express();

app.use(express.static('./views'));
app.set('view engine','ejs');
app.set('views','./views');



app.get('/', (req,res) => {
    res.render('index',{title:"EJS Doc", message:"Paragraph of new EJS"});

});



app.listen(3000, () => {
    console.log("Server up and running");
});