
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

	  		if(validInput(input)){
	  			add(input);
	  			userGuess(input);
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

	function userGuess(userGuess){
	  					
		var feedBack = Math.abs(secretNumber-userGuess);

		//console.log(feedBack);

		//console.log("Random Number " + secretNumber);
		if(feedBack ===0 ){

			 feedback("HEY YOU WON CLICK NEW GAME TO START ANOTHER GAME ");
		} else if(feedBack > 50) {

			feedback("Ice Cold");

		} else if(feedBack > 30 && feedBack <= 50) {

			feedback("Cold");

		} else if(feedBack > 20 && feedBack <= 30) {

			feedback("Getting Warm");

		} else if(feedBack > 10 && feedBack <= 20) {

			feedback("Hot");

		} else if(feedBack >= 1 && feedBack <= 10) {

			feedback("OMG YOUR ON FIRE");

		} 
	}
		function validInput(userInput){
		
			if(userInput === ""){

				userInput = 0;
			}

			for(var i = 0;i < previousGuess.length; i++){
				
				if(previousGuess[i] === userInput){

					return alert('chill boy you already used that number');
				}

			}//end of for loop				
						//This is how i check to make sure that the number entered is a number 
			if((userInput % 1 === 0) && (userInput >= 0) && (userInput<=100)){

				$('#userGuess').val("");

				$('#userGuess').attr("placeholder", "Enter Your Guess");

				return true;

			} else if(userInput % 1 !== 0){
				
				alert("sike thats not a number please input a number ");
				
				$('#userGuess').val("");

				$('#userGuess').attr("placeholder", "Enter Your Guess");

				return false;

			} else if(userInput < 0 || userInput>100){

				alert("Please put in a number that is between 0 and 100");
				
				$('#userGuess').val("");

				$('#userGuess').attr("placeholder", "Enter Your Guess");

				return false;
			}						
	}

	function feedback(message){

		$('#feedback').text(message);

	}

	function add(userInput){
		previousGuess.push(userInput);
		counter = counter + 1;
		$('#guessList').append('<li>'+ userInput + '</li>');
		$('#count').text(counter);

	}




});


