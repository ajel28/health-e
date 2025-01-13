const db = require("./db_connection")

// query for all submissions
export function getSubmissions(){
    const [result] = db.query("SELECT * FROM question")
    return result
}

// query for a specific submission
export function getSubmission(id){
    const [result] = db.query(`
        SELECT *
        FROM questions
        WHERE question_id = ?
        `, [id])
        return result[0]
}

// query for all submissions with a question
export function getQuestions(){
    const [result] = db.query(`
        SELECT *
        FROM questions
        WHERE question IS NOT NULL
        OR LENGTH(question) > 0
        `)
    return result
}

const responses = getSubmissions()
console.log(responses)

db.end()