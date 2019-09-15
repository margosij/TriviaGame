//below is the countdown timer
var number = 30;
var intervalId;
var selectedAnswers;

var correct = 0;
var wrong = 0;

var pageTwo = $("#pageTwo");

$("#start").on("click", loadPageTwo, run);

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
        $("#right").text("Answers right: " + correct).show();
        $("#incorrect").text("Wrong answers: " + wrong).show();
        $("#countdown").hide();
        $("#pageTwo").hide();
        selectedAnswers = $(pageTwo.children("input:checked"))

        for(var i=0; i<selectedAnswers.length; i++){
            if(selectedAnswers[i].value===triviaQuestions[i].correctAnswer){
                correct++;
                $("#right").text("Answers right: " + correct)
            }
            else{
              wrong++;
              $("#incorrect").text("Wrong answers: " + wrong)
            }
        }

    }

}
$("#pageTwo").html(triviaQuestions).hide();
function stop() {
    clearInterval(intervalId);
  };
//loadPageTwo function
function loadPageTwo() {

  
    
    for (var i=0; i<triviaQuestions.length; i++){
      displayQuestion(triviaQuestions[i])
    }

}

function startFunction() {
    $("#pageTwo").show();
    $("#pageThree").hide();
    $("#start").hide();
  }

//these are the questions

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
      //setting up each question and adding pushes for the answers
      for(var i=0; i<triviaQuestions.length; i++){
          pageTwo.append("<p>" + triviaQuestions[i].question + "</p>")
          for (var j=0; j<triviaQuestions[i].answers.length; j++){
              pageTwo.append(
              '<input type="radio" name="answers-'+ i + '"value="' + triviaQuestions[i].answers[j] + '">'+triviaQuestions[i].answers[j]
                  
              );
          }

        };