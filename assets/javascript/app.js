//below is the countdown timer
var number = 30;
var intervalId;
console.log("linked")

$("#start").on("click", run);

function run() {
    console.log("clicked");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

  }

function decrement() {

    number--;

    $("#countdown").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        alert("Time's Up!");
        $("#pageThree").show();

    }

}

function stop() {
    clearInterval(intervalId);
  };


function startFunction() {
    $("#pageTwo").show();
    $("#pageThree").hide();
    $("#pageOne").hide();
    $("#start").hide();
  }





//these are the questions
$("#pageTwo").hide();
  var triviaQuestions = [
    {
        question: "What's the largest Panda species in existance?",
        answer: {
            // a: "Chinese",
            // b: "Red",
            // c: "Orange",
            // d: "Leamur",
        },
        correctAnswer: "d"
    },
    {
        question: "What's the creepiest type of Reptile out there?",
        answer: {
            // a: "Snake",
            // b: "Gheko",
            // c: "Shark",
            // d: "Buffalo",
        },
        correctAnswer: "a"
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
    // for(var i=0; i<questions.length; i++){
    //     answers = [];

    //     for(questions[i].answers) {
    //         answers.push(
    //             <label>
    //             <input type="radio" name="question""+i+""value=">
    //             letter + ": "
    //             questions[i].answers[]
    //             </label>
    //         );
    //     }

    //     );
    // };

    // output.push(
    //         <div class="question"> + questions[i].question + </div>
    //         <div class="answers"> + answers.join("") + </div>

    // triviaContainer.innerHTML = output.join("");
    //countdown reaches 0 = function(){displayResults(questions, triviaContainer, resultsContainer);}

}


// displayQuestion(questions, triviaContainer);