let questionList = ['the apple', 'the man', 'the women', 'the friend (masculine)', 'the game', 'the aiport', 'the beach', "the cat", 'the dog', 'the house']; 
let answerList = ['la manzana', 'el hombre', 'la mujer', 'el amigo', 'el partido', 'el aeropuerto', 'la playa', 'el gato', 'el perro', 'la casa']; 
let score = 0; 
let questionIndex = 0; 

const question = document.querySelector('.questioncon'); 
const button1 = document.getElementById('button1'); 
const button2 = document.getElementById('button2'); 
const input = document.querySelector('#input-field'); 
let scoreContainer = document.querySelector('.scorecon');
let summaryContainer = document.querySelector('.summarycon')

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button1.addEventListener('click', () =>{
        //Check if the user's input matches the correct answer
        if(input.value.trim().toLowerCase() === answerList[questionIndex].toLowerCase()){
            questionIndex += 1; // Move to the next question
            score += 1; // Increase the score
            question.textContent = questionList[questionIndex]; // Update the displayed question
            scoreContainer.textContent = "Score: " + score; 
        }else{
            score -= 1; // Decrease the score for incorrect answers
            scoreContainer.textContent = "Score: " + score; // Update the score display
        }

        // Check if the game should end and pass whether the player won
        let playerWon = score > 5;
        endGame(playerWon);  
    });
}

let endGame = (playerWon) =>{
    if(questionIndex === questionList.length){
        // Generate a summary of all questions and answers
        let summaryHTML = "<h1>Game Summary:</h1><ul>";
        for (let i = 0; i < questionList.length; i++) {
            summaryHTML += `<li>Word In English: ${questionList[i]}<br>Translation: ${answerList[i]}</li>`;
        }
        summaryHTML += "</ul>";

        summaryContainer.innerHTML = summaryHTML;
 
        // Display a message based on whether the player won or lost
        if (playerWon) {
            question.textContent = "You did well! Please play again!";
        }else{
            question.textContent = "Maybe review your vocab and try again";
        }

        // Display the final score and hide input and buttons
        scoreContainer.textContent = "Final Score: " + score;  
        input.style.display = "none"; 
        button1.style.display = "none"; 
        button2.style.display = "none";
    }
}

submitFunction(); 

// Function to handle the skip button click event
let skipFunction = () =>{
    button2.addEventListener('click', () =>{
        if(questionIndex < questionList.length - 1){
        questionIndex ++;  
            question.textContent = questionList[questionIndex];
        }
    });
}

skipFunction();

