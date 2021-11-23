function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            // @ts-ignore
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        // @ts-ignore
                        + '<input class="radio-inline" type="radio" name="question'+i+'" value="'+letter+'">'
                        // @ts-ignore
                        + letter + ': '
                        // @ts-ignore
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


	// @ts-ignore
	function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
    
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
    
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

//quiz question start
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			A: '3',
			B: '5',
			C: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			A: '3',
			B: '5',
			C: '10'
		},
		correctAnswer: 'c'
	}
];
//quiz question end

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// on submit, show results
submitButton.onclick = function(){
	// @ts-ignore
	showResults(questions, quizContainer, resultsContainer);
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);