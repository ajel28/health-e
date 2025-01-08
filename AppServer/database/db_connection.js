const mysql = require('mysql')

const dbConnect = {
    host: 'sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com',
    user: 'elijah',
    password: '7YavdDBvqLZE',
    database: 'Health-e'
}

const connection = mysql.createConnection(dbConnect);

module.exports = connection;