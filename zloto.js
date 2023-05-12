console.log("Plik zloto.js zaladowany");
var gold = {
	startowa_wartosc: 10,
	posiadaneZloto: 10,
	id_zlota: "id_gold",
	poczatkowaWartosc: function() {
		document.getElementById(this.id_zlota).innerHTML = this.posiadaneZloto;
	},

}
gold.poczatkowaWartosc();


