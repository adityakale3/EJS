const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser:true,useUnifiedTopology: true});
var conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email : String,
    etype : String,
    hourlyrate : Number,
    totalHrs : Number
});

var employeeModel = mongoose.model('Employee',employeeSchema);

conn.on('connection',() => {
    console.log('Connected Successfully');
});
conn.on('disconnection',() => {
    console.log('Disconnected Successfully');
});
conn.on('error', console.error.bind(console,'connection error:'));


conn.once('open', ()=> {
// CURD

// // FIND
//    employeeModel.find({}, (err,data) => {
//        if(err) throw error;
//        console.log(data);
//        conn.close();
//    });

// FIND BY ID 
employeeModel.findById({_id: '5ed3f42b2574352524ce882d'}, {etype:0} , (err,data) => {
    if(err) throw error;
    console.log(data);
    conn.close();
});



// // UPDATE
// employeeModel.findOneAndUpdate({email:'adityakale3@gmail.com'}, {totalHrs:120} , (err,data) => {
//     if(err) throw error;
//     console.log(data);
//     conn.close();
// });


// // DELETE
// employeeModel.findOneAndDelete({email:'adityakale3@gmail.com'}, (err,data) => {
//     if(err) throw error;
//     console.log(data);
//     conn.close();
// });


});