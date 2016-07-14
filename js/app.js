
$(document).ready(function(){
	'use strict'
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		
  		$(".overlay").fadeOut(1000);
  	});
  	//When the user clicks the button with the id of guessButton 
  	//this will
	$('#guessButton').click(function(event){
	  		
			event.preventDefault();

	  		var input = $('#userGuess').val();

	  		if(validateNumber(input) === true && (validateNumberQty(input) === true)){
	  			
				validInput(input);

	  			userGuess(input);

				//alert("This is your array:"+ previousGuess);
			}
	});  	

  	/*--- Reset set everything and creat new random number ---*/ 
  	$(".new").click(function(){

  		previousGuess = [];

  		counter = 0;

  		secretNumber = Math.floor((Math.random() * 100) + 1);

  		$('#count').text(counter);

  		$('#guessList > li').remove();

  		feedback("Make your Guess!")


  		//alert("your array"+previousGuess+" "+counter+" "+" "+secretNumber);


  	});

	var secretNumber = Math.floor((Math.random() * 100) + 1); //Math.floor((Math.random() * 100) + 1);
	
	var previousGuess = [];

	var counter = 0;

	function validateNumber(userInput){

		//This is how i check to make sure that the number entered is a number 
		if(userInput % 1 === 0){

			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return true;

		} else {
			
			alert("sike thats not a number please input a number ");
			
			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return false;
		}
	}

	function validateNumberQty(userInput){
		// i use this to check to make sure the user does not put a number over 100
		if(userInput <= 100){
			
			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return true;		
		} else{

			alert("please choose a number between zero and 100");
			
			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return false;
		}

	}

	function appendToList(number){

		$('#guessList').append('<li>'+ number + '</li>');

	}
	function pushToArray(number){

		previousGuess.push(number);

//console.log("......."+previousGuess);
	}

	function feedback(message){

		$('#feedback').text(message);

	}

	function inncarmentCounter(){

		counter = counter + 1;
		$('#count').text(counter);

	}

	function validInput(userInput){
		
		if(userInput === ""){

			userInput = 0;
		}

		for(var i = 0;i < previousGuess.length; i++){
			
			if(previousGuess[i] === userInput){

				return alert('chill boy you already used that number');
			}
		}				
			pushToArray(userInput);

			appendToList(userInput);

			inncarmentCounter(userInput);



	}

	function userGuess(userGuess){
	  					
		var feedBack = Math.abs(secretNumber-userGuess);

		//console.log(feedBack);

		//console.log("Random Number " + secretNumber);

		if(feedBack > 50) {

			feedback("Ice Cold");

		} else if(feedBack > 30 && feedBack <= 50) {

			feedback("Cold");

		} else if(feedBack > 20 && feedBack <= 30) {

			feedback("Getting Warm");

		} else if(feedBack > 10 && feedBack <= 20) {

			feedback("Hot");

		} else if(feedBack >= 1 && feedBack <= 10) {

			feedback("OMG YOUR ON FIRE");

		} else {

			secretNumber = Math.floor((Math.random() * 100) + 1);

			return feedback("HEY YOU WON CLICK NEW GAME TO START ANOTHER GAME ");
		}
	}

});


