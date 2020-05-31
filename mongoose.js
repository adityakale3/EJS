const mongoose = require('mongoose');
// DB CON
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser:true});
var conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email : String,
    etype : String,
    hourlyrate : Number,
    totalHrs : Number
});
employeeSchema.methods.totalSalary = function(){
    console.log(`Total Salary of ${this.name} is : Rs.` + this.hourlyrate * this.totalHrs);
}

var employeeModel = mongoose.model('Employee',employeeSchema);
var employee      = new employeeModel({
                    name:"Aditya Kale",
                    email: "adityakale3@gmail.com",
                    etype: "hourly",
                    hourlyrate:10,
                    totalHrs:100
                    });

//console.log(employee); 
//employee.totalSalary();

// DB CON
conn.on('connection', () => {
    console.log('DB Connected');
});
// DB CON
conn.on('disconnection', () => {
    console.log('DB Dis-connected');
});
// DB CON
conn.on('error', console.error.bind(console,'connection error:'));
// DB CON
conn.once('open', () => {
    employee.save((err,res)=> {
        if(err) throw error;
        console.log(res);
        conn.close();
    })
});

 