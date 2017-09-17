// Timer

	var number = 10;

    var intervalId;

    function run() {
    	number = 10;
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $(".timer").html(number);

      if (number === 0) {

        stop();
        trivia.timeOut();

      }
    }

    function stop() {

      clearInterval(intervalId);
    }
    
// Declared variable
var	trivia 	= 	
{
	correct : 0,
	wrong : 0,
	unanswered : 0,
	questionSelection : 0,


	questions : [	"What is another name for Superman?", 
					"Which of these superheroes does not have any super powers of their own?",
					"What does Wonder Woman commonly use as her human alias?",
					"Which of these physical impairments does Marvel's Daredevil have?",
					"Which ancient mythology are the comic book characters Thor and Loki inspired by?",
					"Superman's Kryptonian name is?",
					"In the Marvel Universe, Frank Castle is better known to the criminal underworld as?",
					"Who is Hal Jordan also known as?",
					"Which of these was an original X-Man?",
					"What is the name of the Fantastic Four's archnemesis?"],
	choices	: 	[	["The Red Redeemer", "The Masked Avanger", "The Caped Crusader", "The Man of Steel"], 
					["Wolverine", "Iron Man", "The Flash", "Captain America"],
					["Pepper Potts", "Diana Prince", "Lois Lane", "Selina Kyle"],
					["Paraplegic", "Deaf", "Blind", "Deaf and Blind"],
					["Norse", "Egyptian", "Greek", "Japanese"],
					["Jor-el", "Kal-el", "Jo-el", "Kar-el"],
					["Nightwing", "Red Hood", "Punisher", "Zoom"],
					["Professor X", "Scarecrow", "Reverse Flash", "Green Lantern"],
					["Jean Grey", "Wolverine", "Storm", "Gambit"],
					["Thanos", "Llan The Sorcerer", "Count Nefaria", "Dr Doom"]],
	answer	: 	[	"The Man of Steel", "Iron Man", "Diana Prince", "Blind", "Norse", 
					"Kal-el", "Punisher", "Green Lantern","Jean Grey", "Dr Doom"],
	gif		:	[	"assets/gif/superman.gif",
					"assets/gif/ironman.gif",
					"assets/gif/wonderwoman.gif",
					"assets/gif/daredevil.gif",
					"assets/gif/thor.gif",
					"assets/gif/kalel.gif",
					"assets/gif/punisher.gif",
					"assets/gif/green.gif",
					"assets/gif/jean.gif",
					"assets/gif/doom.gif"],

// TITLE PAGE
	startButton:function ()
	{
		$(".questionDisplay").css({"visibility": "hidden", "position": "absolute"});
		$(".options").css({"visibility": "hidden", "position": "absolute"});
		$(".result-text").css({"visibility": "hidden", "position": "absolute"});
		$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
		$(".timer").css({"visibility": "hidden", "position": "absolute"});
		$(".timer-remaining").css({"visibility": "hidden", "position": "absolute"});
		$(".finalResult").css({"visibility": "hidden", "position": "absolute"});
	},

// QUESTIONS
	gameStart:function () 
	{	
		run();
		// Question and the Choices
		$(".timer").css({"visibility": "visible", "position": "relative"});
		$(".timer-remaining").css({"visibility": "visible", "position": "relative"});
		$(".start").css({"visibility": "hidden", "position": "absolute"});
		$(".question").html(trivia.questions[this.questionSelection]);
		$("#buttonA").text(trivia.choices[this.questionSelection][0]).show();
		$("#buttonB").text(trivia.choices[this.questionSelection][1]).show();
		$("#buttonC").text(trivia.choices[this.questionSelection][2]).show();
		$("#buttonD").text(trivia.choices[this.questionSelection][3]).show();

		// Reset display after being hidden
		$(".questionDisplay").css({"visibility": "visible", "position": "relative"});
		$(".options").css({"visibility": "visible", "position": "relative"});
		$(".result-text").css({"visibility": "hidden", "position": "absolute"});
		$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
		$(".finalResult").css({"visibility": "hidden", "position": "absolute"});
		$(".playAgainButton").css({"visibility": "hidden", "position": "absolute"});
		$(".timer").html("10");

	},

// ANSWERS
	correctAnswer:function ()
	{
		trivia.correct++;
		stop();
		$(".questionDisplay").css({"visibility": "hidden", "position": "absolute"});
		$(".options").css({"visibility": "hidden", "position": "absolute"});
		$(".result-text").css({"visibility": "visible", "position": "relative"});
		$(".result-gif").css({"visibility": "visible", "position": "relative"});
		$(".result-text").html("<h3>YOU ARE CORRECT!!! <br><br> THE ANSWER IS : "+ trivia.answer[trivia.questionSelection] +"</h3>");
		$("#gifDisplay").attr("src", trivia.gif[this.questionSelection]);
		setTimeout(function(){
			$(".questionDisplay").css({"visibility": "visible", "position": "relative"});
			$(".options").css({"visibility": "visible", "position": "relative"});
			$(".result-text").css({"visibility": "hidden", "position": "absolute"});
			$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
			trivia.gameStart();
		}, 3000);

	},

	wrongAnswer:function ()
	{
		trivia.wrong++;
		stop();
		$(".questionDisplay").css({"visibility": "hidden", "position": "absolute"});
		$(".options").css({"visibility": "hidden", "position": "absolute"});
		$(".result-text").css({"visibility": "visible", "position": "relative"});
		$(".result-gif").css({"visibility": "visible", "position": "relative"});
		$(".result-text").html("<h3>WRONG ANSWER !!! <br><br> THE ANSWER IS : "+trivia.answer[trivia.questionSelection]+"</h3>");
		$("#gifDisplay").attr("src", trivia.gif[trivia.questionSelection]);
		setTimeout(function(){
			$(".questionDisplay").css({"visibility": "visible", "position": "relative"});
			$(".options").css({"visibility": "visible", "position": "relative"});
			$(".result-text").css({"visibility": "hidden", "position": "absolute"});
			$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
			trivia.gameStart();
		}, 3000);

	},

	timeOut:function ()
	{
		trivia.unanswered++;
		stop();
		$(".questionDisplay").css({"visibility": "hidden", "position": "absolute"});
		$(".options").css({"visibility": "hidden", "position": "absolute"});
		$(".result-text").css({"visibility": "visible", "position": "relative"});
		$(".result-gif").css({"visibility": "visible", "position": "relative"});
		$(".result-text").html("<h3>TIME OUT !!! <br><br> THE ANSWER IS : "+trivia.answer[trivia.questionSelection]+"</h3>");
		$("#gifDisplay").attr("src", trivia.gif[trivia.questionSelection]);
		setTimeout(function(){
			$(".questionDisplay").css({"visibility": "visible", "position": "relative"});
			$(".options").css({"visibility": "visible", "position": "relative"});
			$(".result-text").css({"visibility": "hidden", "position": "absolute"});
			$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
			trivia.gameStart();
		}, 3000);
		trivia.questionSelection++;

	},

// FINAL RESULT PAGE
	finalResult:function ()
	{
		stop();
		$(".questionDisplay").css({"visibility": "hidden", "position": "absolute"});
		$(".options").css({"visibility": "hidden", "position": "absolute"});
		$(".result-text").css({"visibility": "hidden", "position": "absolute"});
		$(".result-gif").css({"visibility": "hidden", "position": "absolute"});
		$(".start").css({"visibility": "hidden", "position": "absolute"});
		$(".timer").css({"visibility": "hidden", "position": "absolute"});
		$(".timer-remaining").css({"visibility": "hidden", "position": "absolute"});

		$(".finalResult").css({"visibility": "visible", "position": "relative"});
		$(".correctAnswers").css({"visibility": "visible", "position": "relative"});
		$(".incorrectAnswers").css({"visibility": "visible", "position": "relative"});
		$(".unanswered").css({"visibility": "visible", "position": "relative"});

		$(".correctAnswers").html("<h1>Correct Answers : "+ trivia.correct +"</h1>");
		$(".incorrectAnswers").html("<h1>Incorrect Answers : "+ trivia.wrong +"</h1>");
		$(".unanswered").html("<h1>Unanswered : "+ trivia.unanswered +"</h1>");
		$(".playAgainButton").css({"visibility": "visible", "position": "relative"});

	},

// PLAY AGAIN RESET
	gameReset:function ()
	{
		trivia.questionSelection = 0;
		trivia.correct = 0;
		trivia.wrong = 0;
		trivia.unanswered = 0;

		$(".finalResult").css({"visibility": "hidden", "position": "absolute"});
		$(".correctAnswers").css({"visibility": "hidden", "position": "absolute"});
		$(".incorrectAnswers").css({"visibility": "hidden", "position": "absolute"});
		$(".unanswered").css({"visibility": "hidden", "position": "absolute"});
	},
};


$(document).ready(function() 
{
	trivia.startButton();
	

	$(".startButton").on("click", function (event)
	{
		trivia.gameStart();
	});

	$(".playAgainButton").on("click", function (event)
	{
		trivia.gameReset();
		trivia.gameStart();
	});


	$("#buttonA").on("click", function (event) 
	{
		if($(event.target).text()===trivia.answer[trivia.questionSelection])
		{
			trivia.correctAnswer();
		} else {
			trivia.wrongAnswer();
		};

		if(trivia.questionSelection>8) 
		{
			setTimeout(function(){
			trivia.finalResult();
			}, 3000);
			
		} else {
			trivia.questionSelection++;
		};
	});

	$("#buttonB").on("click", function (event) 
	{
		if($(event.target).text()===trivia.answer[trivia.questionSelection])
		{
			trivia.correctAnswer();
		} else {
			trivia.wrongAnswer();
		};

		if(trivia.questionSelection>8) 
		{
			setTimeout(function(){
			trivia.finalResult();
			}, 3000);
			
		} else {
			trivia.questionSelection++;
		};
	});

	$("#buttonC").on("click", function (event) 
	{
		if($(event.target).text()===trivia.answer[trivia.questionSelection])
		{
			trivia.correctAnswer();
		} else {
			trivia.wrongAnswer();
		};

		if(trivia.questionSelection>8) 
		{
			setTimeout(function(){
			trivia.finalResult();
			}, 3000);
			
		} else {
			trivia.questionSelection++;
		};
	});

	$("#buttonD").on("click", function (event) 
	{
		if($(event.target).text()===trivia.answer[trivia.questionSelection])
		{
			trivia.correctAnswer();
		} else {
			trivia.wrongAnswer();
		};

		if(trivia.questionSelection>8) 
		{
			setTimeout(function(){
			trivia.finalResult();
			}, 3000);
			
		} else {
			trivia.questionSelection++;
		};
	});
	
	
});

