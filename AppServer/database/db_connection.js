const mysql = require('mysql')

const connection = mysql.createConnection ({
    host: 'sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com',
    user: 'elijah',
    password: '7YavdDBvqLZE',
    database: 'midyear_project_2025'
})

module.exports = connection;