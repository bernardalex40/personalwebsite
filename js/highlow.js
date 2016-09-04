<!-- 

var set;
var range = 20;
var guessLimit = 5;
var guessComplete = 0;

function SetUp(){
	
	set = Math.round(range * Math.random());
	
}

function GuessMade(){
	
	var guessIn = document.getElementById("guessField").value;
	
	var resultOutput;
	
	if(guessComplete < guessLimit) {
		if (guessIn == set){
			
			document.getElementById("resultField").innerHTML = "Congratulations! You win!";
						
		}
		else if (guessIn < set) {
			
			document.getElementById("resultField").innerHTML = "Too low!"
			
		}
		else if (guessIn == "Hi it's Victoria"){
			
			document.getElementById("resultField").innerHTML = "You're pretty :)"
			
		}
		else {
			
			document.getElementById("resultField").innerHTML = "Too high!"
			
		}
	}
	else {
		
		document.getElementById("resultField").innerHTML = "You're out of tries. Please refresh the page to try again!" 
		
	}
	
	guessComplete++;
}

-->