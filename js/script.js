var questions = [
  { question:"Which of the following composers lost his hearing?",
    choices:["Bach","Mozart","Beethoven","Smetana"],
    correctAnswer:2},
  { question:"Which of the following composers never wrote an Opera?",
    choices:["Mozart","Beethoven","Handel","Bach"],
    correctAnswer:3},
  { question:"Which of the following composers lived to the oldest age?",
    choices:["Haydn","Mozart","Mahler","Chopin"],
    correctAnswer:0}
   ]
var questionCounter = 0
var score = 0

$(document).ready(function(){
  renderSingleQuestion(questions[questionCounter],questionCounter)

})

function clearQuestion(){
  $(".quizcontainer").empty()
}

function scoreQuestion(){
  var answer = $("input[type=radio]:checked").attr("value")
  if (answer == questions[questionCounter].correctAnswer) {
    score += 1
  }
}

function renderQuestions(questions) {
  questions.forEach(renderSingleQuestion)
}

function renderScore() {
  $(".quizcontainer").append('<div class="score">Your score is <br>'+score+' out of '+questions.length+'</div>')
}

function renderSingleQuestion(question, index) {
  $(".quizcontainer").append('<div class="questioncontainer" id="q'+index+'"></div>')
  $("#q"+index).append('<div class="question">'+question.question+'</div>')
  $("#q"+index).append('<form id="f'+index+'"></form>')
  question.choices.forEach(function(choice,i){
    $("#f"+index).append('<input type="radio" class="choice" name='+index+' value="'+i+'">'+choice+'</input><br>')
  })
  if (index < questions.length-1) {
    $("#q"+index).append('<button id="next-question">NEXT QUESTION</button>')
    $("#next-question").click(function(){
      scoreQuestion()
      clearQuestion()
      questionCounter += 1
      renderSingleQuestion(questions[questionCounter],questionCounter)
    })
  } else {
    $("#q"+index).append('<button id="see-score">SEE SCORE</button>')
    $("#see-score").click(function(){
      scoreQuestion()
      clearQuestion()
      renderScore()
    })
  }
}
