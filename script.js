const quizData = [
    {
        question: '  1. Inside which HTML element do we put the JavaScript?',
        a: '<js> ',
        b: '<script>  ',
        c: '<scripting>',
        d: '<javascript>',
        correct: 'b'
    },
    {
        question: ` 2. What is the correct JavaScript syntax to change the content of the HTML element below?

        <p id="demo">This is a demonstration.</p>`,
        a: 'document.getElementByName("p").innerHTML = "Hello World!"; ',
        b: 'document.getElement("p").innerHTML = "Hello World!";',
        c: '#demo.innerHTML = "Hello World!";',
        d: 'document.getElementById("demo").innerHTML = "Hello World!";',
        correct: 'd'
    },
    {
        question: ' 3. Where is the correct place to insert a JavaScript? ',
        a: 'Both the <head> section and the <body> section are correct  ',
        b: 'The <head> section',
        c: 'The <body> section',
        d: 'The <head> section',
        correct: 'a'
    },
    {
        question: ' 4. What is the correct syntax for referring to an external script called "xxx.js"?',
        a: '<script src="xxx.js"> ',
        b: '<script href="xxx.js">',
        c: '<script name="xxx.js">',
        d: '<script name="xxx.Html">',
        correct: 'a'
    },
    {
        question: '5. How do you write "Hello World" in an alert box?',
        a: 'alertBox("Hello World");  ',
        b: 'msgBox("Hello World");',
        c: 'alert("Hello World");  ',
        d: 'msg("Hello World");',
        correct: 'c'
    },
    {
        question: ' 6. How do you create a function in JavaScript?',
        a: 'function:myFunction()  ',
        b: 'function myFunction()  ',
        c: 'function = myFunction()',
        d: 'myFunction()',
        correct: 'b'
    },
    {
        question: ' 7. How to write an IF statement in JavaScript?',
        a: 'if i = 5  ',
        b: 'if i = 5 then',
        c: 'if i == 5 then',
        d: 'if (i == 5) ',
        correct: 'd'
    },
    {
        question: ' 8.How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: 'if i <> 5  ',
        b: 'if i =! 5 then',
        c: 'if (i <> 5)',
        d: 'if (i != 5)  ',
        correct: 'd'
    },
    {
        question: ' 9. How does a FOR loop start?',
        a: 'for i = 1 to 5 ',
        b: 'for (i <= 5; i++)',
        c: 'for (i = 0; i <= 5; i++)  ',
        d: 'for (i = 0; i <= 5) ',
        correct: 'c'
    },
    {
        question: ' 10. How can you add a comment in a JavaScript?',
        a: '<!--This is a comment-->  ',
        b: '//This is a comment ',
        c: `'This is a comment`,
        d: '//This comment has more than one line//',
        correct: 'b'
    },


];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let answer=undefined;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> &#128512;You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});