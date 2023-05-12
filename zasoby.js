console.log("Plik zasoby.js zaladowany");
var zelazo = {
	ilosc_zelaza: 0,
	id_zelaza: "id_iron",
	id_box: "helpbox",
	pojemnoscMagazynu: 100,
	add_iron: function() {
		if (this.ilosc_zelaza >= this.pojemnoscMagazynu)
			document.getElementById(this.id_box).value = "Pełny magazyn!";
		else if(mieso.ilosc_mieso <= 10) {
			document.getElementById(this.id_box).value = "Pracownicy potrzebuja jedzenia aby wykonac ta akcje!";
		}
		else {
		this.ilosc_zelaza += kowal.posiadanykowal;
		mieso.ilosc_mieso -= 10;
		console.log(mieso.ilosc_mieso);
		document.getElementById("id_meat").innerHTML = mieso.ilosc_mieso + "/" + this.pojemnoscMagazynu;
		document.getElementById(this.id_zelaza).innerHTML = this.ilosc_zelaza + "/" + this.pojemnoscMagazynu;
		}
	},	
	sell_iron: function() {
		if (this.ilosc_zelaza <= 0) {
			document.getElementById(this.id_box).value = "Pusty magazyn!";
		}
		else {
		this.ilosc_zelaza -= 1;
		document.getElementById(this.id_zelaza).innerHTML = this.ilosc_zelaza + "/" + this.pojemnoscMagazynu;
		gold.posiadaneZloto += 1;
		console.log(gold.posiadaneZloto);
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
},
}
var stal = {
	ilosc_stali: 0,
	id_stali: "id_steel",
	id_box: "helpbox",
	pojemnoscMagazynu: 100,
	add_steel: function() {
		if (this.ilosc_stali >= this.pojemnoscMagazynu)
			document.getElementById(this.id_box).value = "Pełny magazyn!";
		else if (formiernia.posiadanaformiernia == 0) {
			document.getElementById(this.id_box).value = "Nie posiadasz zadnej formierni!";
		}
		else if (zelazo.ilosc_zelaza < 10) {
			document.getElementById(this.id_box).value = "Masz za malo zelaza aby zdobyc stal!";
		}
		else if(mieso.ilosc_mieso <= 20) {
			document.getElementById(this.id_box).value = "Pracownicy potrzebuja jedzenia aby wykonac ta akcje!";
		}
		else {
		this.ilosc_stali += formiernia.posiadanaformiernia;
		zelazo.ilosc_zelaza -= 10;
		mieso.ilosc_mieso -= 20;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + this.pojemnoscMagazynu;
		document.getElementById("id_meat").innerHTML = mieso.ilosc_mieso + "/" + this.pojemnoscMagazynu;
		document.getElementById(this.id_stali).innerHTML = this.ilosc_stali + "/" + this.pojemnoscMagazynu;
		}
	},	
	sell_steel: function() {
		if (formiernia.posiadanaformiernia == 0) {
			document.getElementById(this.id_box).value = "Nie posiadasz zadnej formierni!";
		} else if (this.ilosc_stali == 0) {
			document.getElementById(this.id_box).value = "Pusty magazyn!";
		}
		else {
		this.ilosc_stali -= 1;
		document.getElementById(this.id_stali).innerHTML = this.ilosc_stali + "/" + this.pojemnoscMagazynu;
		gold.posiadaneZloto += 3;
		console.log(gold.posiadaneZloto);
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
},
}
var bron = {
	ilosc_bron: 0,
	id_broni: "id_arms",
	pojemnoscMagazynu: 100,
	id_box: "helpbox",
	add_arms: function() {
		if (this.ilosc_bron >= this.pojemnoscMagazynu) {
			document.getElementById(this.id_box).value = "Pełny magazyn!";
		}
		else if (zbrojownia.posiadanyzbrojownia == 0) {
			document.getElementById(this.id_box).value = "Nie posiadasz zadnej zbrojowni!";
		}
		else if (stal.ilosc_stali < 30) {
			document.getElementById(this.id_box).value = "Masz za malo stali aby wykuc bron!";
		}
		else if(mieso.ilosc_mieso <= 45) {
			document.getElementById(this.id_box).value = "Pracownicy potrzebuja jedzenia aby wykonac ta akcje!";
		}
		else {
		this.ilosc_bron += zbrojownia.posiadanyzbrojownia;
		stal.ilosc_stali -= 30;
		mieso.ilosc_mieso -= 45;
		document.getElementById("id_meat").innerHTML = mieso.ilosc_mieso + "/" + this.pojemnoscMagazynu;
		document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + this.pojemnoscMagazynu;
		document.getElementById(this.id_broni).innerHTML = this.ilosc_bron + "/" + this.pojemnoscMagazynu;
		}
	},
	sell_arms: function() {
		if (this.ilosc_bron <= 0) {
			document.getElementById(this.id_box).value = "Pusty magazyn!";
		}
		else {
		this.ilosc_bron -= 1;
		document.getElementById(this.id_broni).innerHTML = this.ilosc_bron + "/" + this.pojemnoscMagazynu;
		gold.posiadaneZloto += 10;
		console.log(gold.posiadaneZloto);
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
},	
}
var mieso = {
	ilosc_mieso: 0,
	id_mieso: "id_meat",
	pojemnoscMagazynu: 100,
	id_box: "helpbox",
	add_meat: function() {
		if (this.ilosc_mieso >= this.pojemnoscMagazynu)
			document.getElementById(this.id_box).value = "Pełny magazyn!";
		else {
		this.ilosc_mieso += rzeznia.posiadanyRzeznia;
		document.getElementById(this.id_mieso).innerHTML = this.ilosc_mieso + "/" + this.pojemnoscMagazynu;
		console.log(this.ilosc_mieso);
		}
	},	
	sell_meat: function() {
		if (this.ilosc_mieso <= 0) {
			document.getElementById(this.id_box).value = "Pusty magazyn!";
		}
		else {
		this.ilosc_mieso -= 1;
		document.getElementById(this.id_mieso).innerHTML = this.ilosc_mieso + "/" + this.pojemnoscMagazynu;
		gold.posiadaneZloto += 1;
		console.log(gold.posiadaneZloto);
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
	},
	eat_meat: function() {
		if (mieso.ilosc_mieso <= 0) {
			document.getElementById(mieso.id_box).value = "Uzupelnij zapasy miesa!";
		}
		else {
			mieso.ilosc_mieso -= 1;
			document.getElementById(mieso.id_mieso).innerHTML = mieso.ilosc_mieso + "/" + mieso.pojemnoscMagazynu;
		}
	},	
}
var ubywanie = setInterval(mieso.eat_meat, 1000);

	



