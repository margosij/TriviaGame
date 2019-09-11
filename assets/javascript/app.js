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

    }

}

function stop() {
    clearInterval(intervalId);
  };


function startFunction() {
    var x = document.getElementById("pageOne");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



//these are the questions
  var triviaQuestions = [
    {
        question: "What's the largest Panda species in existance?",
        answer: {
            // "Chinese",
            // "Red",
            // "Orange",
            // "Leamur",
        },
        correctAnswer: "Chinese"
    },
    {
        question: "What's the creepiest type of Reptile out there?",
        answer: {
            // "Snake",
            // "Gheko",
            // "Shark",
            // "Buffalo",
        },
        correctAnswer: "Snake"
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