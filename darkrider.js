function changeContent(elem){
	document.getElementById("body-one").classList.toggle("buy");
	document.getElementById("image-one").classList.toggle("change");
	document.getElementById("tab-one").classList.toggle("change");
	document.getElementById("tix-begin").classList.toggle("add");
	document.getElementById("proceed").classList.remove("fortix");
	document.getElementById("proceed").classList.remove("fortix:hover");
	document.getElementById("payup").innerHTML = "$__";
}

function addTix1(elem){
	document.getElementById("proceed").classList.add("fortix");
	document.getElementById("proceed").classList.add("fortix:hover");
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

function playHoeing(e) {
	document.getElementById("hoeing").play();
}
