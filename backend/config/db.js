const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '13.61.35.131',
    user: 'adm1n',
    password: 'Pass12*$',
    database: 'url_logger'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
    }
    console.log('Connected to database');
});

module.exports = db;