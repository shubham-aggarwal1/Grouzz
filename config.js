const mysql = require("mysql");

const db = mysql.createConnection({
    host:"database-2.cfnn5oh2gixp.us-east-2.rds.amazonaws.com",
    port:"3306",
    user:"grouzz",
    password:"Grouzz123",
    database:"client",
});

db.connect((err) => {
if(err){
    console.log(err.message);
    return;
}
console.log("Database connected.");
});