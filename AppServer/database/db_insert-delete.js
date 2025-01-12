const db = require("./db_connection")

// insert stuff
const db_insert_sql = `
INSERT INTO question (name, email, question)
VALUES (?, ?, ?)
`;

const db_delete_sql = `
DELETE FROM question
WHERE question = 'test'
`
db.end()