function events() {
	var pozar = parseInt(Math.random()*100);
	console.log("Wylosowana liczba(pozar) " + pozar);
	if (mieso.ilosc_mieso == 0)
	{}
	else {
	if (pozar == 17) {
		alert("Pożar w rzezni, tracisz cale mieso!");
		mieso.ilosc_mieso = 0;
		document.getElementById("id_meat").innerHTML = mieso.ilosc_mieso + "/" + mieso.pojemnoscMagazynu;
		}
	}
	var zlodziej1 = parseInt(Math.random()*175);
	console.log("Wylosowana liczba(zlodziej1) " + zlodziej1);
	if (zelazo.ilosc_zelaza == 0 && stal.ilosc_stali == 0 && bron.ilosc_bron == 0) {}
	else {
		if (zlodziej1 == 61) {
			alert ("Zlodziej ukradl ci wszystkie zasoby");
			zelazo.ilosc_zelaza = 0;
			document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
			stal.ilosc_stali = 0;
			document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
			bron.ilosc_bron = 0;
			document.getElementById("id_arms").innerHTML = bron.ilosc_bron + "/" + bron.pojemnoscMagazynu;
		}
	}
	var zlodziej2 = parseInt(Math.random()*165);
	console.log("Wylosowana liczba(zlodziej2) " + zlodziej2);
	if (gold.posiadaneZloto <= 10) {}
	else {
		if (zlodziej2 == 7){
			alert ("Zlodziej okradl cie z pienidzy");
			gold.posiadaneZloto = parseInt(gold.posiadaneZloto/2);
			document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		}
	}
}
var random = setInterval(events, 1000);