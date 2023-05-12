console.log("Plik budynki.js zaladowany");
var kowal = {
	poczatkowyIloscKowal: 1,
	id_budynku: "id_kowal",
	cenaBudynku: 50,
	id_cenaBudynku: "cena_kowala",
	posiadanykowal: 1,
	
	poczatkowyKowal: function() {
		document.getElementById(this.id_budynku).innerHTML = this.poczatkowyIloscKowal;
	},
	cenaWybudowania: function() {
		document.getElementById(this.id_cenaBudynku).innerHTML = this.cenaBudynku;
	},
	add_kowal: function() {
		if (gold.posiadaneZloto >= 50) {
			this.posiadanykowal += 1;
			document.getElementById(this.id_budynku).innerHTML = this.posiadanykowal;
			gold.posiadaneZloto -= 50;
			document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
		else {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zlota!";
		}
},
	sell_kowal: function() {
		if (this.posiadanykowal == 1) {
			document.getElementById("helpbox").value = "Nie mozesz sprzedac startowego kowala!";
		}
		else {
		this.posiadanykowal -= 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanykowal;
		gold.posiadaneZloto += 50;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
	},
}

var formiernia = {
	poczatkowailoscformierni: 0,
	posiadanaformiernia: 0,
	id_budynku: "id_formiernia",
	cenaBudynku: 100,
    id_cenaBudynku: "cena_formierni",
	poczatkowaFormiernia: function() {
		document.getElementById(this.id_budynku).innerHTML = this.poczatkowailoscformierni;
	},
	cenaWybudowania: function() {
		document.getElementById(this.id_cenaBudynku).innerHTML = this.cenaBudynku;
	},
		add_formiernia: function() {
		if (gold.posiadaneZloto >= 100 && zelazo.ilosc_zelaza >= 100) {
			this.posiadanaformiernia += 1;
			document.getElementById(this.id_budynku).innerHTML = this.posiadanaformiernia;
			gold.posiadaneZloto -= 100;
			document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
			zelazo.ilosc_zelaza -= 100;
			document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
			
		}
		else if (gold.posiadaneZloto < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zlota!";
		}
		else if (zelazo.ilosc_zelaza < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zelaza zeby wykonac te akcje!";
		}
	},
		sell_formiernia: function() {
		if (this.posiadanaformiernia == 0) {
			document.getElementById("helpbox").value = "Nie posiadasz zadnej formierni!";
		} else {
		this.posiadanaformiernia -= 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanaformiernia;
		gold.posiadaneZloto += 100;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		zelazo.ilosc_zelaza += 100;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
		}
		},
	}
var zbrojownia = {
	poczatkowaIloscZbrojownia: 0,
	id_budynku: "id_zbrojownia",
	cenaBudynku: 150,
	id_cenaBudynku: "cena_zbrojowni",
	posiadanyzbrojownia: 0,
	
	poczatkowaZbrojownia: function() {
		document.getElementById(this.id_budynku).innerHTML = this.poczatkowaIloscZbrojownia;
	},
	
	cenaWybudowania: function() {
		document.getElementById(this.id_cenaBudynku).innerHTML = this.cenaBudynku;
	},
	add_zbrojownia: function() {
		if (gold.posiadaneZloto >= 150 && zelazo.ilosc_zelaza >= 100 && stal.ilosc_stali >= 100) {
			this.posiadanyzbrojownia += 1;
			document.getElementById(this.id_budynku).innerHTML = this.posiadanyzbrojownia;
			gold.posiadaneZloto -= 150;
			document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
			zelazo.ilosc_zelaza -= 100;
			document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
			stal.ilosc_stali -= 100;
			document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
		}
		else if (gold.posiadaneZloto < 150) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zlota!";
		}
		else if (zelazo.ilosc_zelaza < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zelaza zeby wykonac te akcje!";
		}
		else if (stal.ilosc_stali < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci stali zeby wykonac te akcje!";
		}
	},
		sell_zbrojownia: function() {
		if (this.posiadanyzbrojownia == 0) {
			document.getElementById("helpbox").value = "Nie posiadasz zadnej formierni!";
		} else {
		this.posiadanyzbrojownia -= 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanyzbrojownia;
		gold.posiadaneZloto += 100;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		zelazo.ilosc_zelaza += 100;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
		stal.ilosc_stali += 100;
		document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
		}
		},
}
var rzeznia = {
	poczatkowaIloscRzeznia: 1,
	id_budynku: "id_rzeznia",
	cenaBudynku: 25,
	id_cenaBudynku: "cena_rzezni",
	posiadanyRzeznia: 1,
	poczatkowaRzeznia: function() {
		document.getElementById(this.id_budynku).innerHTML = this.poczatkowaIloscRzeznia;
	},
	
	cenaWybudowania: function() {
		document.getElementById(this.id_cenaBudynku).innerHTML = this.cenaBudynku;
	},
	add_rzeznia: function() {
		if (gold.posiadaneZloto >= 25) {
			this.posiadanyRzeznia += 1;
			document.getElementById(this.id_budynku).innerHTML = this.posiadanyRzeznia;
			gold.posiadaneZloto -= 25;
			document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
		else {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zlota!";
		}
	},
	sell_rzeznia: function() {
		if (this.posiadanyRzeznia == 1) {
			document.getElementById("helpbox").value = "Nie mozesz sprzedac starowej rzezni!";
		} else {
		this.posiadanyRzeznia -= 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanyRzeznia;
		gold.posiadaneZloto += 25;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
		},
}
var sklep = {
	poczatkowaIloscSklep: 0,
	id_budynku: "id_sklep",
	cenaBudynku: 350,
	id_cenaBudynku: "cena_sklepu",
	posiadanySklep: 0,
	maxilosc: 1,
	poczatkowySklep: function() {
		document.getElementById(this.id_budynku).innerHTML = this.poczatkowaIloscSklep + "/" + this.maxilosc;
	},
	cenaWybudowania: function() {
		document.getElementById(this.id_cenaBudynku).innerHTML = this.cenaBudynku;
	},
	add_sklep: function () {
		if (this.posiadanySklep >= this.maxilosc)
			document.getElementById("helpbox").value = "Nie mozesz miec wiecej targowisk";
		else if (gold.posiadaneZloto < 350) {
			document.getElementById("helpbox").value = "Masz za malo zlota aby zbudowac targowisko";
		}
		else if (zelazo.ilosc_zelaza < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci zelaza zeby wykonac te akcje!";
		}
		else if (stal.ilosc_stali < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci stali zeby wykonac te akcje!";
		}
		else if (bron.ilosc_bron < 100) {
			document.getElementById("helpbox").value = "Nie masz wystarczajacej ilosci broni zeby wykonac te akcje!";
		}
		else {
		this.posiadanySklep += 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanySklep + "/" + this.maxilosc;
		console.log(this.posiadanySklep);
		zelazo.ilosc_zelaza -= 100;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
		stal.ilosc_stali -= 100;
		document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
		bron.ilosc_bron -= 100;
		document.getElementById("id_arms").innerHTML = bron.ilosc_bron + "/" + bron.pojemnoscMagazynu;
		var body = document.getElementById("clicker");
		var div = document.createElement("div");
		var p = document.createElement("p");
		var tekst = document.createTextNode("Zawartość dostępna w Update 1 ;)");
		div.id = "update";
		div.style.width = "250px";
		div.style.height = "100px";
		div.style.backgroundColor = "#80ced6";
		div.style.border = "solid 2px white";
		p.style.textAlign = "Center";
		p.appendChild(tekst);
		div.appendChild(p);
		body.appendChild(div);
	}
	},
	sell_sklep: function() {
		if (this.posiadanySklep == 0) {
			document.getElementById("helpbox").value = "Nie posiadasz zadnego targowiska!";
		} else {
		this.posiadanySklep -= 1;
		document.getElementById(this.id_budynku).innerHTML = this.posiadanySklep;
		gold.posiadaneZloto += 350;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		zelazo.ilosc_zelaza += 100;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
		stal.ilosc_stali += 100;
		document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
		bron.ilosc_bron += 100;
		document.getElementById("id_arms").innerHTML = bron.ilosc_bron + "/" + bron.pojemnoscMagazynu;
		var body = document.getElementById("clicker");
		var update = document.getElementById("update");
		body.removeChild(update);
		}
	},
}
kowal.poczatkowyKowal();
kowal.cenaWybudowania();
formiernia.poczatkowaFormiernia();
formiernia.cenaWybudowania();
zbrojownia.poczatkowaZbrojownia();
zbrojownia.cenaWybudowania();
rzeznia.poczatkowaRzeznia();
rzeznia.cenaWybudowania();
sklep.poczatkowySklep();
sklep.cenaWybudowania();