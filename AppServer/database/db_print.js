const db = require("./db_connection")

// printing possible queries needed

// all submissions in the database
const db_submissions_sql = "SELECT * FROM question"

db.execute(db_submissions_sql, (error, result) => {
    if (error) throw error;

    console.log(result);
});

// submissions in the database that have a question
const db_questions_sql = `
SELECT name, email, question
FROM *
WHERE question IS NOT NULL
`;

db.execute(db_questions_sql, (error, result) => {
    if (error) throw error;

    console.log(result);
});

db.end();