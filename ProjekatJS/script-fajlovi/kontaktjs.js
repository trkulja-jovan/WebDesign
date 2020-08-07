 var param;

function proveraIme(){

	var editPolje = document.forma.txt1.value;

	if(editPolje.length == 0){
		alert("Nije uneseno ime i prezime");
		return false;
	}

	var split = editPolje.split(" ");

	if(split[1] == null){
		alert("Unesite prezime");
		return false;
	}

	return true;
}

function email() {

	var email = document.forma.txt2.value;

	if(email.length == 0){
		alert("Morate popuniti polje za email adresu!");
		return false;
	}

	if(!email.includes("@")) {
		alert("Email adresa nije unesena ispravno!");
		return false;
	}

	if(email.includes('(') || email.includes(')') || email.includes('<') || email.includes('>') || email.includes(']')
	   || email.includes('[') || email.includes(';') || email.includes(':') || email.includes(',') 
	   || email.includes('\\')	|| email.includes(' '))
	   {

	   	alert("Email adresa sadrži nedozvoljene karaktere");
	   	return false;
	} 

	var splitovano = email.split('@');
	param = splitovano[0];

	if(!proveriPreEt(param)){
		return false;
	}

	if(splitovano[1] == null){
		alert("Greška u email adresi!");
		return false;
	}

	var drugiDeo = splitovano[1].split(".");

	if(drugiDeo[1] == null){
		alert("Greška!");
		return false;
	}

	if(drugiDeo[1].length < 2){
		alert("Domen nije ispravno unesen!");
		return false;
	}

	return true;

}

function proveriPreEt(param) {

	if(param.charAt(0) >= '0' && param.charAt(0) <= '9' ){
		alert("Email adresa ne sme da startuje sa cifrom");
		return false;
	}

	if(param.charAt(0) == '-' || param.charAt(0) == '_' || param.charAt(0) == '.') {
		alert("Ispravite prvi karakter adrese");
		return false;
	}

	return true;
}

function tema() {

	if(document.forma.txt3.value.length == 0) {
		alert("Morate uneti temu poruke!");
		return false;
	}

	return true;
}

function telefon() {

	var telefon = document.forma.txt4.value;

	if(telefon.length == 0){
		return true;
	}

	if(telefon.charAt(0) != '0' || telefon.charAt(1) != '6'){
		alert("Pogrešan format mobilnog telefona!");
		return false;
	}

	for(var i = 0; i<telefon.length; i++){
		if(telefon.charAt(i) < '0' || telefon.charAt(i) > '9'){
			alert("Mobilni telefon ne sme sadržati slova!");
			return false;
		}
	}

	if(telefon.length < 9 || telefon.length > 10){
		alert("Proverite broj cifara telefona");
		return false;
	}

	return true;

}

function adresa() {

	var adresa = document.forma.txt5.value;

	if(adresa.length == 0){
		return true;
	}

	if(!adresa.includes('-')){
		alert("Proverite ispravnost formata adrese");
		return false;
	}

	if(!(adresa.charAt(0) >= 'A' && adresa.charAt(0) <= 'Z')) {
		alert("Ulica mora da počne velikim slovom!");
		return false;
	}

	var splitovano = adresa.split("-");
	if(splitovano[1].trim() == null){
		alert("Niste uneli broj!");
		return false;
	}

	for(var x = 0; x<splitovano[0].trim().length; x++){

		if(adresa.charAt(x) >= '0' && adresa.charAt(x) <= '9'){
			alert("Niste ulicu uneli u ispravnom formatu!");
			return false;
		}
	}

	if(splitovano[1].trim() == "bb" || splitovano[1].trim() == "BB") {

		return true;
	}

	return true;
}

function poruka() {

	if(document.forma.txtarea.value.length == 0){
		alert("Ostavite poruku!");
		return false;
	}

	return true;
}

function sve() {

	if(proveraIme() && email() && tema() && telefon() && adresa() && poruka()){
		var x = confirm("Potvrđujem slanje email-a?");
		if(x == true) {
			alert("Hvala Vam na kontaktu. Odgovorićemo Vam u najkraćem mogućem roku.");
			return true;
		}
	}

	else {
		return false;
	}
}

function inputTekst() {

	var txt = document.getElementById("txt1in");

	txt.style.backgroundColor = "white";
	txt.style.color = "black";
}

function inputTekst1() {

	var txt = document.getElementById("txt2in");

	txt.style.backgroundColor = "white";
	txt.style.color = "black";
	txt.style.borderRadius = "25px";
}

function inputTekst2() {

	var txt = document.getElementById("txt3in");

	txt.style.backgroundColor = "black";
	txt.style.color = "white";
	txt.style.borderRadius = "25px";
}


function inputTekst3() {

	var txt = document.getElementById("txt4in");

	txt.style.backgroundColor = "blue";
	txt.style.color = "yellow";
	txt.style.borderRadius = "25px";
}

function inputTekst4() {

	var txt = document.getElementById("txt5in");

	txt.style.backgroundColor = "blue";
	txt.style.color = "yellow";
	txt.style.borderRadius = "25px";
}

function ispis() {

	alert("Morate popuniti ovo polje!");
}