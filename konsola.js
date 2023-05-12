function kody () {
	var kod = document.getElementById("console").value;
	switch (kod) {
		case "GroszaDajWiedzminowi": 
		gold.posiadaneZloto += 10000;
		document.getElementById("id_gold").innerHTML = gold.posiadaneZloto;
		document.getElementById("helpbox").value = "Aktywowales kod!";
		break;
		case "GrubasieIleMaszWpasie":
		clearInterval(ubywanie);
		document.getElementById("helpbox").value = "Aktywowales kod!";
		break;
		case "GodMode":
		clearInterval(random);
		document.getElementById("helpbox").value = "Aktywowales kod!";
		break;
		case "PokazMiSwojeTowary":
		mieso.ilosc_mieso = 100;
		document.getElementById("id_meat").innerHTML = mieso.ilosc_mieso + "/" + mieso.pojemnoscMagazynu;
		zelazo.ilosc_zelaza = 100;
		document.getElementById("id_iron").innerHTML = zelazo.ilosc_zelaza + "/" + zelazo.pojemnoscMagazynu;
		stal.ilosc_stali = 100;
		document.getElementById("id_steel").innerHTML = stal.ilosc_stali + "/" + stal.pojemnoscMagazynu;
		bron.ilosc_bron = 100;
		document.getElementById("id_arms").innerHTML = bron.ilosc_bron + "/" + bron.pojemnoscMagazynu;
		break;
		default:
		document.getElementById("helpbox").value = "Taki kod nie istnieje!";
	}
}
	
	
function chowanie() {
	var x = document.getElementById("tabele");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
	
	
}