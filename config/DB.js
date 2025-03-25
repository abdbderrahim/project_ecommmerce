const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20033261478',
    database: ' db_commerce'
});

db.connect((err) =>{
    if(err){
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});
module.exports = db;