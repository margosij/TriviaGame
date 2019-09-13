//below is the countdown timer
var number = 3;
var intervalId;

$("#start").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

  }

function decrement() {

    number--;

    $("#countdown").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        alert("Time's Up!");
        //testing out another show scenario. shows final page after questions are answered
        $("#pageThree").show();
        $("#countdown").hide();

    }

}

function stop() {
    clearInterval(intervalId);
  };

//testing out the hide/show functions based on various scenarios
function startFunction() {
    $("#pageTwo").show();
    $("#pageThree").hide();
    $("#pageOne").hide();
    $("#start").hide();
  }





//these are the questions

$("#pageTwo").html(triviaQuestions).hide();
  var triviaQuestions = [
    {
        question: "What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?",
        answers: ["Paris Hilton", "Scarlett Johansson", "Kiera Knightley", "Emma Watson"],

        correctAnswer: "Emma Watson"
    },
    {
        question: "What is the seventh and final novel of the Harry Potter series?",
        answers: ["The Philosopher's Stone", "The Chamber of Secrets", "The Deathly Hollows", "The Order of the Pheonix"],

        correctAnswer: "The Deathly Hollows"
    },
    {
      question: "In the Harry Potter series, what is the name of Harry’s pet owl?",
        answers: ["Hagrid", "Snape", "Hedwig", "Fluffy"],

        correctAnswer: "Hedwig"
    },
    {
      question: "What school does Harry Potter attend?",
        answers: ["Hogwarts", "MIT", "Harvard", "UNC"],

        correctAnswer: "Hogwarts"
    },
    {
      question: "In what year was the first Harry Potter movie released?",
        answers: ["2006", "2010", "2005", "2001"],

        correctAnswer: "2001"
    },

];



function Trivia(questions, triviaContainer, resultsContainer){
    function displayQuestion(questions, triviaContainer){

    }

    function displayResults(questions, triviaContainer, resultsContainer){

    }

    displayQuestion(questions, triviaContainer);

    var output = [];
    var answers = [];


    //setting up each question and adding pushes for the answers
    for(var i=0; i<question.length; i++){
        answers = []

        for (var i=0; i<answers.length; i++){
            answers.prepend(
            <input type="radio" name="answers" value="answers"></input>,
                questions[i].answers[i]
                
            );
        }

      };

    output.push(
           <div class="question">questions[i].question</div>
            <div class="answers">answers.join("")</div>

    triviaContainer.innerHTML = output.join("")

    )};

//compare whatever answer was clicked on, compare the value of the radio button to the actual answer of the question
//how do you get the value of the radio button?