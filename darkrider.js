unction changeContent(elem){
	
	/* Enlarges the tab window */
	document.getElementById("body-one").classList.toggle("buy");
	
	/* Hides the event icon */
	document.getElementById("image-one").classList.toggle("change");
	
	/* Hides the event info */
	document.getElementById("tab-one").classList.toggle("change");
	
	/* Shows the ticket purchasing window */
	document.getElementById("tix-begin").classList.toggle("add");
	
	/* Locks/Re-locks the purchase button */
	document.getElementById("proceed").classList.remove("fortix");
	
	/* Removes the styling from the purchase button */
	document.getElementById("proceed").classList.remove("fortix:hover");
	
	/* Resets the pricing information logged in the ticket purchasing window */
	document.getElementById("payup").innerHTML = "$__";
}

/* Registers when a ticket is selected */
function addTix1(elem){
	
	/* Registers the inital choice, unlocks the purchase button */
	document.getElementById("proceed").classList.add("fortix");
	
	/* Adds styling to the purchase button */
	document.getElementById("proceed").classList.add("fortix:hover");
	
	/* Adds the price of the ticket to the pricing information */
	document.getElementById("payup").innerHTML = "$50";
}

function addTix2(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

function addTix3(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

function addTix4(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

function addTix5(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

function addTix6(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

function addTix7(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
	document.getElementById("payup").innerHTML = "$50";
}

/* From https://siongui.github.io/code/javascript/play-toggle-sound/toggle.html */

/* Names the function */
function playHoeing() {
	
  /* Identifies audio file from HTML */
  var audioElem = document.getElementById('hoeing');
  
  /* If there is no audio playing, it plays the audio */
  if (audioElem.paused)
    audioElem.play();

  /* If the audio is playing, it pauses it */
  else
    audioElem.pause();
}


function playMadness() {
  var audioElem = document.getElementById('madness');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

function playSuckins() {
  var audioElem = document.getElementById('suckins');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

function playCollections() {
  var audioElem = document.getElementById('collections');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

function playThunder() {
  var audioElem = document.getElementById('thunder');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

function playThunder() {
  var audioElem = document.getElementById('collections');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

