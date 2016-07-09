
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

	var secretNumber = Math.floor((Math.random() * 100) + 1); //Math.floor((Math.random() * 100) + 1);

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

		if(userInput <= 100){
			
			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return true;		
		}
		else{
			
			alert("please choose a number between zero and 100");
			
			$('#userGuess').val("");

			$('#userGuess').attr("placeholder", "Enter Your Guess");

			return false;
		}

	}

	function appendToList(number){
		$('#guessList').append('<li>'+ number + '</li>');
	}

	function feedback(message){

		$('#feedback').text(message);

	}

	function userGuess(userGuess){
	  					
		var feedBack = Math.abs(secretNumber-userGuess);

		console.log(feedBack);

		console.log("Random Number " + secretNumber);

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

			alert("HEY YOU GOT IT CONGRATS YOU LITTLE MIND READER");
		}
	}

	//userGuess(secretNumber,35);

	$('#guessButton').click(function(event){
	  		
			event.preventDefault();

	  		var input = $('#userGuess').val();
	  		//alert(x);
	  		//console.log(x);	
	  		if(validateNumber(input)===true && (validateNumberQty(input) === true)){
	  			userGuess(input);
	  			appendToList(input);
	  			//prompt(secretNumber);
			}

	});


});


