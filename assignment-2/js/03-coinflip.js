//I could not figure out how to get this one to work

let randomNum = Math.round(Math.random()), coinFlip = prompt('Guess heads or tails');

if (randomNum  >= 50) {
	if (coinflip == 'heads') {
	 alert (' The flip was heads and you chose heads...you win!');
	}
    else if (coinflip == 'tails') {
        alert (' The flip was heads and you chose tails...you lose!');
       }
}
if  (randomNum  <  50) {
	    if (coinflip == 'heads') {
	    alert (' The flip was tails and you chose heads...you lose!');
	}
	
}  else {
        alert (' The flip was tails and you chose tails...you win!');
    }

