console.log("Plik mapa.js załadowany");
var mapa = document.getElementById("mapa");
var inventory = document.getElementById("inventory");

var temp_building = 0;
var id_budynkow1 = 0;
var id_budynkow2 = 0;
var id_budynkow3 = 0;
var id_budynkow4 = 0;
var id_budynkow5 = 0;

var tab_pola = [[1,4,3,1,1,1,1,9,9,9],
				[2,2,1,1,3,3,1,1,9,9],
				[1,1,3,1,1,3,9,9,9,9],
				[3,1,3,1,1,9,9,1,9,9],
				[3,3,1,1,9,9,1,1,9,1],
				[3,3,3,9,9,1,1,1,1,1],
				[1,1,3,3,1,3,3,3,1,1],
				[1,1,9,9,3,1,1,3,3,1],
				[1,9,9,9,3,1,1,1,1,3],
				[1,9,9,1,1,1,1,1,1,3]];

mapa.addEventListener("click", bud);
inventory.addEventListener("click", wybor)
			   
function wybor(event) {				 
		console.log(event.target.id);
		
		switch(event.target.id)
				 {
				 
				case "bsmith":
				temp_building = 1;
				 break;
				 
				case "pig":
				temp_building = 2;
				break;
				
				case "smltry":
				temp_building = 3;
				break;
				
				case "arm":
				temp_building = 4;
				break;
				
				case "market":
				temp_building = 5;
				break;
				
				default:
				 temp_building = 0;
				 console.log("klikasz w puste")
				 break;
				 
				}
				 
				 
}
function bud(event) {
	var mouse_x = event.clientX;
	var mouse_y = event.clientY;
	var klikniete_pole_x = parseInt(mouse_x/50);
	var klikniete_pole_y = parseInt(mouse_y/50);
	console.log("Pole X: " + klikniete_pole_x);
	console.log("Pole X: " + klikniete_pole_y);
	console.log(tab_pola[klikniete_pole_y][klikniete_pole_x]);			
	console.log("budynek z mapy:" + temp_building);
	var obecna_ilosc_smith = kowal.posiadanykowal;
	var obecna_ilosc_pig = rzeznia.posiadanyRzeznia;
	var obecna_ilosc_smltry = formiernia.posiadanaformiernia;
	var obecna_ilosc_arm = zbrojownia.posiadanyzbrojownia;
	
	if (temp_building == 1 && id_budynkow1 < obecna_ilosc_smith) {
		if (tab_pola[klikniete_pole_y][klikniete_pole_x] == 9){
			alert("Nie mozesz postawic budynku na wodzie");
		}
		else if(tab_pola[klikniete_pole_y][klikniete_pole_x] == 3) {
			alert("Nie mozesz postawic budynku na ścieżce");
		}
	else {
	var nowy_budynek = document.createElement("img");
	nowy_budynek.id = "mapa_budynek" + id_budynkow1;
	nowy_budynek.src = "./ikony_budynkow/blacksmith.png";
	nowy_budynek.style.width ="50px";
	nowy_budynek.style.height ="50px";
	nowy_budynek.style.position ="absolute";
	nowy_budynek.style.top = klikniete_pole_y*50 + "px";
	nowy_budynek.style.left = klikniete_pole_x*50 + "px";
	nowy_budynek.setAttribute("onmouseover", "nad_black(this)");
	nowy_budynek.setAttribute("onclick", "zbierz_black(this)");
	mapa.appendChild(nowy_budynek)
	id_budynkow1++;
		}
	}
	else if (temp_building == 2 && id_budynkow2 < obecna_ilosc_pig)
	{
		if (tab_pola[klikniete_pole_y][klikniete_pole_x] == 9){
			alert("Nie mozesz postawic budynku na wodzie");
		}
		else if(tab_pola[klikniete_pole_y][klikniete_pole_x] == 3) {
			alert("Nie mozesz postawic budynku na ścieżce");
		}
	else {
	var nowy_budynek = document.createElement("img");
	nowy_budynek.id = "mapa_budynek" + id_budynkow2;
	nowy_budynek.src = "./ikony_budynkow/pigfarm.png";
	nowy_budynek.style.width ="50px";
	nowy_budynek.style.height ="50px";
	nowy_budynek.style.position ="absolute";
	nowy_budynek.style.top = klikniete_pole_y*50 + "px";
	nowy_budynek.style.left = klikniete_pole_x*50 + "px";
	nowy_budynek.setAttribute("onmouseover", "nad_pig(this)");
	nowy_budynek.setAttribute("onclick", "zbierz_pig(this)");
	mapa.appendChild(nowy_budynek)
	id_budynkow2++;
	}
	}
	else if (temp_building == 3 && id_budynkow3 < obecna_ilosc_smltry)
	{
		if (tab_pola[klikniete_pole_y][klikniete_pole_x] == 9){
			alert("Nie mozesz postawic budynku na wodzie");
		}
		else if(tab_pola[klikniete_pole_y][klikniete_pole_x] == 3) {
			alert("Nie mozesz postawic budynku na ścieżce");
		}
	else {
	var nowy_budynek = document.createElement("img");
	nowy_budynek.id = "mapa_budynek" + id_budynkow3;
	nowy_budynek.src = "./ikony_budynkow/smeltery.png";
	nowy_budynek.style.width ="50px";
	nowy_budynek.style.height ="50px";
	nowy_budynek.style.position ="absolute";
	nowy_budynek.style.top = klikniete_pole_y*50 + "px";
	nowy_budynek.style.left = klikniete_pole_x*50 + "px";
	nowy_budynek.setAttribute("onmouseover", "nad_smltry(this)");
	nowy_budynek.setAttribute("onclick", "zbierz_smltry(this)");
	mapa.appendChild(nowy_budynek)
	id_budynkow3++;
	}
	}
	else if (temp_building == 4 && id_budynkow4 < obecna_ilosc_arm)
	{
		if (tab_pola[klikniete_pole_y][klikniete_pole_x] == 9){
			alert("Nie mozesz postawic budynku na wodzie");
		}
		else if(tab_pola[klikniete_pole_y][klikniete_pole_x] == 3) {
			alert("Nie mozesz postawic budynku na ścieżce");
		}
	else {
	var nowy_budynek = document.createElement("img");
	nowy_budynek.id = "mapa_budynek" + id_budynkow4;
	nowy_budynek.src = "./ikony_budynkow/armourer.png";
	nowy_budynek.style.width ="50px";
	nowy_budynek.style.height ="50px";
	nowy_budynek.style.position ="absolute";
	nowy_budynek.style.top = klikniete_pole_y*50 + "px";
	nowy_budynek.style.left = klikniete_pole_x*50 + "px";
	nowy_budynek.setAttribute("onmouseover", "nad_arm(this)");
	nowy_budynek.setAttribute("onclick", "zbierz_arm(this)");
	mapa.appendChild(nowy_budynek)
	id_budynkow4++;
	}
	}
	
	else if (temp_building == 5 && id_budynkow5 < sklep.posiadanySklep)
	{
		if (tab_pola[klikniete_pole_y][klikniete_pole_x] == 9){
			alert("Nie mozesz postawic budynku na wodzie");
		}
		else if(tab_pola[klikniete_pole_y][klikniete_pole_x] == 3) {
			alert("Nie mozesz postawic budynku na ścieżce");
		}
	else {
	var nowy_budynek = document.createElement("img");
	nowy_budynek.id = "mapa_budynek" + id_budynkow5;
	nowy_budynek.src = "./ikony_budynkow/marketplace.png";
	nowy_budynek.style.width ="50px";
	nowy_budynek.style.height ="50px";
	nowy_budynek.style.position ="absolute";
	nowy_budynek.style.top = klikniete_pole_y*50 + "px";
	nowy_budynek.style.left = klikniete_pole_x*50 + "px";
	nowy_budynek.setAttribute("onmouseover", "nad_market(this)");
	nowy_budynek.setAttribute("onclick", "zbierz_market(this)");
	mapa.appendChild(nowy_budynek)
	id_budynkow5++;
	}
	}
}

  function nad_pig(element) {
    var newDiv = document.createElement('div');
	newDiv.id = "pig1";
    newDiv.style.position = 'absolute';
	newDiv.style.zIndex = "-1";
    newDiv.style.top = (element.offsetTop - 20) + 'px';
    newDiv.style.left = element.offsetLeft + 'px';
    newDiv.style.backgroundColor = '#80ced6';
    newDiv.style.padding = '10px';
    newDiv.style.border = 'solid 2px white';
    newDiv.setAttribute("onchange", "plus_pig()");
	var p = document.createElement("p");
	var tekst = document.createTextNode("Kliknij w budynek aby odebrać złoto");
	p.appendChild(tekst);
	newDiv.appendChild(p);
    document.body.appendChild(newDiv);
	event.target.onmouseout = function() {
      newDiv.remove();
	};
  }
  var zloto_pig = 0;
function plus_pig() {
	var max = 100;
	console.log("Zloto z pig " + zloto_pig);
	if (zloto_pig > max) {document.getElementById("pig1").innerHTML = zloto_pig - 1 + "/" + max;}
	else {
		zloto_pig++;
		document.getElementById("pig1").innerHTML = zloto_pig - 1 + "/" + max;  
	}
}
var pig_gold = setInterval(plus_pig, 1000);		

function zbierz_pig(element)
{			   			
	console.log("Dziala");
	gold.posiadaneZloto += zloto_pig;
	document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
	zloto_pig = 0;
}
////
  function nad_black(element) {
    var newDiv = document.createElement('div');
	newDiv.id = "black1";
    newDiv.style.position = 'absolute';
	newDiv.style.zIndex = "-1";
    newDiv.style.top = (element.offsetTop - 20) + 'px';
    newDiv.style.left = element.offsetLeft + 'px';
    newDiv.style.backgroundColor = '#80ced6';
    newDiv.style.padding = '10px';
    newDiv.style.border = 'solid 2px white';
    newDiv.setAttribute("onchange", "plus_black()");
	var p = document.createElement("p");
	var tekst = document.createTextNode("Kliknij w budynek aby odebrać złoto");
	p.appendChild(tekst);
	newDiv.appendChild(p);
    document.body.appendChild(newDiv);
	event.target.onmouseout = function() {
      newDiv.remove();
	};
  }
  var zloto_black = 0;
function plus_black() {
	var max = 100;
	console.log("Zloto z black " + zloto_black);
	if (zloto_pig > max) {}
	else
		zloto_black++;
	document.getElementById("black1").innerHTML = zloto_black - 1 + "/" + max;   			   
}
setInterval(plus_black, 1000);		

function zbierz_black(element)
{			   			
	console.log("Dziala");
	gold.posiadaneZloto += zloto_black;
	document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
	zloto_black = 0;
}
////
  function nad_smltry(element) {
    var newDiv = document.createElement('div');
	newDiv.id = "smltry1";
    newDiv.style.position = 'absolute';
	newDiv.style.zIndex = "-1";
    newDiv.style.top = (element.offsetTop - 20) + 'px';
    newDiv.style.left = element.offsetLeft + 'px';
    newDiv.style.backgroundColor = '#80ced6';
    newDiv.style.padding = '10px';
    newDiv.style.border = 'solid 2px white';
    newDiv.setAttribute("onchange", "plus_smltry1()");
	var p = document.createElement("p");
	var tekst = document.createTextNode("Kliknij w budynek aby odebrać złoto");
	p.appendChild(tekst);
	newDiv.appendChild(p);
    document.body.appendChild(newDiv);
	event.target.onmouseout = function() {
      newDiv.remove();
	};
  }
  var zloto_smltry = 0;
function plus_smltry() {
	var max = 100;
	console.log("Zloto z pig " + zloto_smltry);
	if (zloto_smltry > max) {}
	else
		zloto_smltry++;
	document.getElementById("smltry1").innerHTML = zloto_smltry - 1 + "/" + max;   			   
}
setInterval(plus_smltry, 1000);		

function zbierz_smltry(element)
{			   			
	console.log("Dziala");
	gold.posiadaneZloto += zloto_smltry;
	document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
	zloto_smltry = 0;
}
////
  function nad_arm(element) {
    var newDiv = document.createElement('div');
	newDiv.id = "arm1";
    newDiv.style.position = 'absolute';
	newDiv.style.zIndex = "-1";
    newDiv.style.top = (element.offsetTop - 20) + 'px';
    newDiv.style.left = element.offsetLeft + 'px';
    newDiv.style.backgroundColor = '#80ced6';
    newDiv.style.padding = '10px';
    newDiv.style.border = 'solid 2px white';
    newDiv.setAttribute("onchange", "plus_arm()");
	var p = document.createElement("p");
	var tekst = document.createTextNode("Kliknij w budynek aby odebrać złoto");
	p.appendChild(tekst);
	newDiv.appendChild(p);
    document.body.appendChild(newDiv);
	event.target.onmouseout = function() {
      newDiv.remove();
	};
  }
  var zloto_arm = 0;
function plus_arm() {
	var max = 100;
	console.log("Zloto z arm " + zloto_arm);
	if (zloto_arm > max) {}
	else
		zloto_arm++;
	document.getElementById("arm1").innerHTML = zloto_arm - 1 + "/" + max;   			   
}
setInterval(plus_arm, 1000);		

function zbierz_arm(element)
{			   			
	console.log("Dziala");
	gold.posiadaneZloto += zloto_arm;
	document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
	zloto_arm = 0;
}
////
  function nad_market(element) {
    var newDiv = document.createElement('div');
	newDiv.id = "market1";
    newDiv.style.position = 'absolute';
	newDiv.style.zIndex = "-1";
    newDiv.style.top = (element.offsetTop - 20) + 'px';
    newDiv.style.left = element.offsetLeft + 'px';
    newDiv.style.backgroundColor = '#80ced6';
    newDiv.style.padding = '10px';
    newDiv.style.border = 'solid 2px white';
    newDiv.setAttribute("onchange", "plus_market()");
	var p = document.createElement("p");
	var tekst = document.createTextNode("Kliknij w budynek aby odebrać złoto");
	p.appendChild(tekst);
	newDiv.appendChild(p);
    document.body.appendChild(newDiv);
	event.target.onmouseout = function() {
      newDiv.remove();
	};
  }
  var zloto_market = 0;
function plus_market() {
	var max = 100;
	console.log("Zloto z market " + zloto_market);
	if (zloto_market > max) {}
	else
		zloto_market++;
	document.getElementById("market1").innerHTML = zloto_market - 1 + "/" + max;   			   
}
setInterval(plus_market, 1000);		

function zbierz_market(element)
{			   			
	console.log("Dziala");
	gold.posiadaneZloto += zloto_market;
	document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
	zloto_market = 0;
}
////
var element;
var inter;
function moveSelection(evt) {
  if(inter) {
    clearTimeout(inter);
  }
  
  inter = setInterval(move, 10, evt)
}
var ograniczenie_max = 450;
var ograniczenie_min = 0;
function move(evt) {  
  element = document.getElementById("gracz");
  var pressedW = parseInt(parseInt(element.offsetTop)/50);
  var pressedA = parseInt(parseInt(element.offsetLeft)/50);
  switch (evt.keyCode) {
    case 65:
	  if (parseInt(element.style.left) < ograniczenie_min) {}
	  else if (tab_pola[pressedW][pressedA] == 9) {}
	  else if (tab_pola[pressedW][pressedA] == 3){ 
	  element.style.left = (parseInt(element.style.left) - 3) + 'px';
	  }
	  else {
      element.style.left = (parseInt(element.style.left) - 1) + 'px';
	  console.log(tab_pola[pressedW][pressedA]);
	  }
      break;
    case 68:
		if (parseInt(element.style.left) >= ograniczenie_max){}
	else if (tab_pola[pressedW][pressedA] == 9) {}
	else if (tab_pola[pressedW][pressedA] == 3){ 
	  element.style.left = (parseInt(element.style.left) + 3) + 'px';
	 }
	else {
	  element.style.left = (parseInt(element.style.left) + 1) + 'px';
      console.log(tab_pola[pressedW][pressedA]);
	}
      break;
    case 87:
	  if (parseInt(element.style.top) < ograniczenie_min) {}
	  else if (tab_pola[pressedW][pressedA] == 9) {}
	  else if (tab_pola[pressedW][pressedA] == 3){ 
	  element.style.top = (parseInt(element.style.top) - 3) + 'px';
	  }
	  else {
      element.style.top = (parseInt(element.style.top) - 1) + 'px';
      console.log(tab_pola[pressedW][pressedA]);
	  }
      break;
    case 83:
	  if (parseInt(element.style.top) >= ograniczenie_max){}
	  else if (tab_pola[pressedW][pressedA] == 9) {}
	  else if (tab_pola[pressedW][pressedA] == 3){ 
	  element.style.top = (parseInt(element.style.top) + 3) + 'px';
	  }
	  else {
      element.style.top = (parseInt(element.style.top) + 1) + 'px';
      console.log(tab_pola[pressedW][pressedA]);
	  }
      break;
  }
}
function moving(evt) {
  clearInterval(inter)
  inter = null;
}

window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

