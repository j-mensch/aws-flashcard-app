const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const apiEndpoint = 'https://3msvg6j3n6.execute-api.us-east-1.amazonaws.com/items';
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET'
};
const options = {
    method: 'GET',
    headers: headers
}

/* function to get the random flashcard values for the question & answer blocks */
async function getRandomFlashcard() {
    fetch(apiEndpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            console.log(response);
            throw new Error("Network response was not ok.");
        })
        .then(data => {
            console.log(data);
            question.innerHTML = `<h3>${data.question}</h3>`;
            answer.innerHTML = `<h3>${data.answer}</h3>`;
        })
        .catch(error => {
            console.log("There was an error with the request:", error);
        });
}

checkButton.addEventListener('click', function() {
    answer.style.display = 'block'; /* reveal answer block */
})

nextButton.addEventListener('click', function() {
    getRandomFlashcard(); /* get new card values */
    answer.style.display = 'none'; /* conceal answer block from showing init */
})