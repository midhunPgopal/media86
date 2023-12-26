const mysql = require('mysql2')

//connection string
const db_config = {
    host: 'sql12.freesqldatabase.com',
    database: 'sql12672794',
    user: 'sql12672794',
    password: 'nXt9NBnBHp',
    dateStrings: true
}

let connection = mysql.createConnection(db_config)

connection.connect(function (err) {
    if (err) {
        console.log('error when connecting to db:' + err)
    } else {
        console.log(`connection created with media86 successfully`);
    }
});


//to prevent connection to closeautomatically
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

module.exports = connection