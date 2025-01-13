const db = require("./db_connection")

// query for inserting a submission
export function createSubmission(name, email, question){
    const result = db.query(`
        INSERT INTO question (name, email, question)
        VALUES (?, ?, ?)
        `, [name, email, question])
    return result
}

// query for deleting a submission
export function deleteSubmission(question){
    const result = db.query(`
        DELETE FROM question
        WHERE question = ?
        `, [question])
    return result
}

const responses = createSubmission()
console.log(responses)