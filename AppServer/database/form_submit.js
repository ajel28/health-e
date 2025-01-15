let questionForm = document.getElementById("questionForm")
questionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let question = document.getElementById("question");

    if (name.value == "" || email.value == "" || question.value == ""){
        alert("Make sure you put a value in every field!")
    }
    else {
        alert("This form has been successfully submitted!");
        console.log(`This form has a name of ${name.value}, email of ${email.value}, and the question ${question.value}`);

        name.value = "";
        email.value = "";
        question.value = "";
    }
})