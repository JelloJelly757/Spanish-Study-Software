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
        if(input.value === answerList[questionIndex]){
            questionIndex += 1; 
            score += 1; 
            question.textContent = questionList[questionIndex]; 
            scoreContainer.textContent = "Score: " + score; 
        }else{
            score -= 1;  
            scoreContainer.textContent = "Score: " + score;
        }

        //PUT ENDGAME FUNCTION HERE
        endGame();
        (score > 5, true);
        (score < 6, true); 
    });
}

let endGame = (playerWon) =>{
    if(questionIndex > 9){
        let summaryHTML = "<h1>Game Summary:</h1><ul>";
        for (let i = 0; i < questionList.length; i++) {
            summaryHTML += `<li>Word In English: ${questionList[i]}<br>Translation: ${answerList[i]}</li>`;
        }
        summaryHTML += "</ul>";

        summaryContainer.innerHTML = summaryHTML;
 
        if (playerWon) {
            score > 5;
            question.textContent = "You did well! Please play again!";
        }else{
            question.textContent = "Maybe review your vocab and try again";
        }

        scoreContainer.textContent = "Final Score: " + score;  
        input.style.display = "none"; 
        button1.style.display = "none"; 
        button2.style.display = "none";
    }
}

submitFunction(); 

let skipFunction = () =>{
    button2.addEventListener('click', () =>{
        questionIndex += 1;  
            question.textContent = questionList[questionIndex];
        });
    }

skipFunction();

//need to add comments
//need to add parameter to my endgame function