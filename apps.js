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
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
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

	function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


//question start
var myQuestions = [
	{
		question: "Question(1): Who created JavaScript?",
		answers: {
			A: 'Douglas Crockford',
			B: 'John Resig',
			C: 'Steve Job',
			D: 'Brendan Eich'
		},
		correctAnswer: 'D'
	},
	{
		question: "Question(2): When was JavaScript created?",
		answers: {
			A: '1984',
			B: '2001',
			C: '1995',
			D: '1967'
		},
		correctAnswer: 'C'
	},
    {
		question: "Question(3): Which were code names of JavaScript, before its final name?",
		answers: {
			A: 'ECMAScript',
			B: 'LiveScript',
			C: 'Mocha',
			D: 'CoffeeScript',
		},
		correctAnswer: 'C'
	},
    {
		question: "Question(4): What was JavaScript first public implementation called?",
		answers: {
			A: 'LiveScript',
			B: 'Mocha',
			C: 'ECMAScript',
			D: 'AppScript'
		},
		correctAnswer: 'A'
	},
    {
		question: "Question(5): Is JavaScript a case-sensitive language?",
		answers: {
			A: 'Maybe',
			B: 'False',
			C: 'True',
			D: "B and C"
		},
		correctAnswer: 'C'
	},
    {
		question: "Question(6): Which built-in method sorts the elements of an array?",
		answers: {
			A: 'sort()',
			B: 'order()',
			C: 'changeOrder(order)',
			D: 'None of the above.'
		},
		correctAnswer: 'A'
	},
    {
		question: "Question(7): JavaScript is a ___ -side programming language.",
		answers: {
			A: 'Server',
			B: 'Client',
			C: 'A and B',
			D: 'None'
		},
		correctAnswer: 'C'
	},
    {
		question: "Question(8): Which of the following will write the message “Hello DataFlair!” in an alert box?",
		answers: {
			A: 'alertBox(“Hello DataFlair!”);',
			B: 'alert(Hello DataFlair!);',
			C: 'msgAlert(“Hello DataFlair!”);',
			D: 'alert(“Hello DataFlair!”);'
		},
		correctAnswer: 'D'
	},
    {
		question: "Question(9): How do you find the minimum of x and y using JavaScript?",
		answers: {
			A: 'Math.min(x,y)',
			B: 'min(x,y);',
			C: 'min(xy);',
			D: 'Math.min(xy)'
		},
		correctAnswer: 'A'
	},
    {
		question: "Question(10): Javascript is _ language?",
		answers: {
			A: 'Dynamic computer programming language',
			B: 'Javascript is an object-oriented programming language',
			C: 'Javascript is a Scripting language',
			D: 'All the Above',
		},
		correctAnswer: 'D'
	},
	{
		question: "Question(11): What is the difference between '==' and '==='?",
		answers: {
			A: 'Both B & C',
			B: 'Both operators are same',
			C: '"==" checks only for equality in value whereas "===" is a stricter equality test',
			D: 'None of the above'
		},
		correctAnswer: 'C'
	},
	{
		question: "Question(12): JavaScript is ________ language?",
		answers: {
			A: 'an interpreted',
			B: 'a compiled',
			C: 'Translated',
			D: 'None of the above'
		},
		correctAnswer: 'A'
	},
];
//question end

//call all functions. without this it won't work
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);