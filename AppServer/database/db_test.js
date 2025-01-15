const db = require("./db_connection");

db.execute("SELECT * FROM question", (error, results) => {
    console.log(results);
})

