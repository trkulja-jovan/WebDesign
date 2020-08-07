var div;

function ucitajSadrzaj(){

	div = document.getElementById("povratak");
	kreirajSadrzaj();

}

function kreirajSadrzaj(){

	var dugme = document.createElement("button");

	dugme.setAttribute("id", "dugme1");
	dugme.innerHTML = "Vrati se na početnu stranicu.";

	div.appendChild(dugme);
	stilizuj();
	animiraj();

	dugme.onclick = akcija;

}

function stilizuj() {

	var baton = document.getElementById("dugme1");

	baton.style.backgroundColor = "yellow";
	baton.style.color = "blue";
	baton.style.fontSize = "30px";
	baton.style.width = "25%";
	baton.style.height = "100px";
	baton.style.position = "relative";
	baton.style.left = "38%";
	baton.style.marginTop = "30px";

}

function animiraj() {

	var text = document.getElementsByClassName("tekstgore");

	namestiTekst();

	text[0].style.width = "50%";
	text[0].style.color = "blue";
	text[0].style.animationDuration = "3s";
	text[0].style.animationName = "animacija1";
	text[0].style.animationIterationCount = "infinite";
	text[0].style.borderRadius = "25px";
	text[0].style.position = "relative";
	text[0].style.left = "25%";
	text[0].padding = "30px";
}

function namestiTekst() {

	var text = document.getElementById("tekst");

	text.style.position = "relative";
	text.style.padding = "20px";
	text.style.top = "11%";
}

function akcija() {

	window.location = "index.html";
}