$(document).ready(function() {



    var quizContainer = $('#quiz');
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timeCount = 31;
    var intervalId;
    
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      timeCount--;

      //  Show the number in the #timer tag.
      $("#timer").html("<h2>Time Remaining: " + timeCount + " Seconds</h2>");


      //  Once number hits zero...
      if (timeCount === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $("#question").hide();
        $("#results").show();
        $("#results").html("<h1>Out Of Time!!!</h1>");
        $("#results").append("<p>The correct answer is " + showQuestion.correctAnswer + ".</p>");
        unanswered++;
        i++;
        setTimeout(renderQuestion, 2000);
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      timeCount = 31;
      clearInterval(intervalId);
    }

    //  Execute the run function.
    //run();


    var myQuestions = [
          {
          question: "In the Star Wars movie, 'The Empire Strikes Back,' what did the Millennium Falcon fly into to escape the Imperial fighters?",
          answers: {
            a: "Black Hole",
            b: "Space Station",
            c: "Meteor",
            d: "Asteroid Field"
          },
          correctAnswer: "Asteroid Field"
          },
          {
          question: "In the original 1968 film 'Planet of the Apes,' who plays the role of the chimpanzee archaeologist and historian Cornelius?",
          answers: {
            a: "James Daly",
            b: "Roddy McDowall",
            c: "Charlton Heston",
            d: "David Watson"
          },
          correctAnswer: "Roddy McDowall"
          },
          {
          question: "In the film 'Star Trek - The Motion Picture,' what was the name of the mysterious entity that was threatening Earth?",
          answers: {
            a: "Tyranus",
            b: "Cobalt",
            c: "Cygnus",
            d: "Vejur"
          },
          correctAnswer: "Vejur"
          },
          {
          question: "In the classic sci-fi film '2001 - A Space Odyssey,' what did the computer HAL find out was to happen by reading Bowman and Poole's lips?",
          answers: {
            a: "They were abandoning the ship",
            b: "He was being disconnected",
            c: "They were returning to Earth",
            d: "Ship was going to explode"
          },
          correctAnswer: "He was being disconnected"
          },
          {
          question: "What is the not-so-classic film 'Night of the Lepus' about?",
          answers: {
            a: "Giant grasshoppers attacking a town",
            b: "Giant spiders attacking a town",
            c: "Giant beetles attacking a town",
            d: "Giant rabbits attacking a town"
          },
          correctAnswer: "Giant rabbits attacking a town"
          },
          {
          question: "In which 1990 sci-fi movie did we see Fred Ward and Kevin Bacon being terrorized by gigantic, hungry worms?",
          answers: {
            a: "Slither",
            b: "Feast",
            c: "What Waits Below",
            d: "Tremors"
          },
          correctAnswer: "Tremors"
          },
          {
          question: "How long did it take the evil aliens to defeat the combined armies of the human race in the 2000 sci-fi film 'Battlefield Earth'?",
          answers: {
            a: "9 days",
            b: "9 hours",
            c: "9 weeks",
            d: "9 minutes"
          },
          correctAnswer: "9 minutes"
          },
          {
          question: "In the 2002 sci-fi movie 'Signs,' what common everyday substance were the alien invaders vulnerable to?",
          answers: {
            a: "Water",
            b: "Soil",
            c: "Air",
            d: "Germs"
          },
          correctAnswer: "Water"
          },
          {
          question: "What is the model number of the terminator cyborg in the 1984 sci-fi film 'The Terminator'?",
          answers: {
            a: "Cyberdyne Systems Model 301",
            b: "Cyberdyne Systems Model 201",
            c: "Cyberdyne Systems Model 401",
            d: "Cyberdyne Systems Model 101"
          },
          correctAnswer: "Cyberdyne Systems Model 101"
          },
          {
          question: "Set in the year 2517, what space drama TV series follows the adventures of the renegade crew of the spaceship Serenity?",
          answers: {
            a: "Farscape",
            b: "Andromeda",
            c: "Babylon 5",
            d: "Firefly"
          },
          correctAnswer: "Firefly"
          }
    ];
    var i = 0
    var showQuestion = myQuestions[i];
    //quizQues = myQuestions[0];

    //console.log(quizQues.question);
    function setup() {
        i = 0;
        $("#results").hide();
        $("#question").show();
        $('#question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
        $(this).hide();
          renderQuestion();
      });
    }	
    
    function reset(){

        i = 0;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        timeCount = 31;
        intervalId;
        renderQuestion();


    }
    
    
    function renderQuestion(){

      showQuestion = myQuestions[i];  
          
          
      if (i < myQuestions.length){    
          run();
          $("#results").hide();
          $("#question").show();
          $("#question").html("<h2>" + showQuestion.question + "</h2>");
          $("#question").append("<p class='select'>" + showQuestion.answers.a + "</p>");
          $("#question").append("<p class='select'>" + showQuestion.answers.b + "</p>");
          $("#question").append("<p class='select'>" + showQuestion.answers.c + "</p>");
          $("#question").append("<p class='select'>" + showQuestion.answers.d + "</p>");

          //console.log(showQuestion.question);
          //console.log(i);
          getAnswer();
      }
        else {

          stop();
          $("#question").hide();
          $("#results").show();
          $("#results").html("<h1>All done, here's how you did!</h1>");
          $("#results").append("<p>Correct Answers: " + correct + "</p>");
          $("#results").append("<p>Incorrect Answers: " + wrong + "</p>");
          $("#results").append("<p>Unanswered: " + unanswered + "</p>");
          $('#results').append('<button id="restartButton">Start Over?</button>');
          $('#restartButton').on('click', function() {
              $(this).hide();
                  reset();
      });

        }
    }
    setup();

    function getAnswer(){

      $("p").on('click', function() {
        var name = $(this).text();
        if (name === showQuestion.correctAnswer){
            stop();
            $("#question").hide();
            $("#results").show();
            $("#results").html("<h1>Correct!!!</h1>");
            correct++;
            i++;
            setTimeout(renderQuestion, 2000);
        }
          else {
            stop();
            $("#question").hide();
            $("#results").show();
            $("#results").html("<h1>Wrong!!!</h1>");
            $("#results").append("<p>The correct answer is " + showQuestion.correctAnswer + ".</p>");
            wrong++;
            i++;
            setTimeout(renderQuestion, 2000);

          }
      });
    }

    
});

