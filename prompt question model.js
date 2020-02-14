(function() {
  function Question(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
  }
  //from tutorial
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.choice.length; i++) {
      console.log(i + 1 + ') ' + this.choice[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans == this.answer) {
      alert('Correct!');
      sc = callback(true);
    } else {
      alert('Wrong.');
      sc = callback(false);
    }
    console.log(ans);
    this.displayScore(sc);
  };

  var question1 = new Question('Pick TRUE.', ['TRUE', 'FALSE'], 1);
  var question2 = new Question('Pick FALSE.', ['TRUE', 'FALSE'], 2);
  var question3 = new Question('Pick ME.', ['YOU', 'ME'], 2);
  var questionList = [question1, question2, question3];
  var checkLoop = true;

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('--------------');
  };
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  (function questionLoop() {
    if (checkLoop) {
      var randomQuestion = Math.floor(Math.random() * questionList.length);
      questionList[randomQuestion].displayQuestion();
      var promptAns = prompt(questionList[randomQuestion].question);
      if (promptAns == 'exit') {
        checkLoop = false;
      } else {
        questionList[randomQuestion].checkAnswer(promptAns, keepScore);
        questionLoop();
      }
    }
  })();
})();
