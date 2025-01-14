const mysql = require('mysql2')

const connection = mysql.createConnection ({
    host: 'sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'elijah',
    password: '7YavdDBvqLZE',
    database: 'mid_year_project'
})

module.exports = connection;