//below is the countdown timer
var number = 5;
var intervalId;
var selectedAnswers;

var pageTwo = $("#pageTwo");

$("#start").on("click", loadPageTwo);

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
        // $("#pageThree").show();
        // $("#countdown").hide();
        selectedAnswers = $(pageTwo.children("input:checked"))
        // need to use i to compare answers
        // if (selectedAnswers===correctAnswer)

    }

}
// let $pageTwo= $("#pageTwo")[0]
$("#pageTwo").html(triviaQuestions).hide();
function stop() {
    clearInterval(intervalId);
  };
//loadPageTwo function
function loadPageTwo() {
  //show the questions and answers
    //on the pageTwo div, add paragraphs for each question
    // let $pageTwo= $("#pageTwo")[0]
    
    for (var i=0; i<triviaQuestions.length; i++){
      displayQuestion(triviaQuestions[i])
    }
    //on each paragraph, add radio button answers for each question
  //show timer
  run()
}
//testing out the hide/show functions based on various scenarios
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



// function Trivia(questions, triviaContainer, resultsContainer){
    function displayQuestion(question, triviaContainer){ 
      // console.log("trying it out")
      // console.log(question)
      // console.log(triviaContainer)
      // let paragraph = $("<p>").text('test');
      // paragraph.text("taco")
      // console.log(paragraph)
      // $pageTwo.append(paragraph);
      // var output = [];
      // var answers = [];
  
  
      //setting up each question and adding pushes for the answers
      for(var i=0; i<triviaQuestions.length; i++){
          pageTwo.append("<p>" + triviaQuestions[i].question + "</p>")
          for (var j=0; j<triviaQuestions[i].answers.length; j++){
              pageTwo.append(
              '<input type="radio" name="answers-'+ i + '"value="' + triviaQuestions[i].answers[j] + '">'+triviaQuestions[i].answers[j]
                  // questions[i].answers[j]
                  
              );
          }

        };


    }

    function displayResults(questions, triviaContainer, resultsContainer){

    };

    // output.push(
    //        <div class="question">questions[i].question</div>
    //         <div class="answers">answers.join("")</div>

    // triviaContainer.innerHTML = output.join("")

    //)


//compare whatever answer was clicked on, compare the value of the radio button to the actual answer of the question
//how do you get the value of the radio button?