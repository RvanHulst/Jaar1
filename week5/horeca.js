var frisAmount = 0;
const frisPrice = 1.50;

var bierAmount = 0;
const bierPrice = 2.50;

var wijnAmount = 0;
const wijnPrice = 3;

var BitterbalAmount = 0;
const bitterbalPrice = 0.25;

var currentorder = "none";
start();

//start het process van het bestellen
function start() {
	var order = prompt("Welke bestelling wilt u toevoegen?");
	if (order.toLowerCase() == "fris" || order.toLowerCase() == "bier" || order.toLowerCase() == "wijn") {
		currentorder = order;
		startDrinkAmount();
	} else if (order.toLowerCase() == "snack") {
		startSnackAmount();

	} else if (order.toLowerCase() == "stop") {
		var totaalPrijs = (frisAmount * frisPrice) + (bierAmount * bierPrice) + (wijnAmount * wijnPrice) + (BitterbalAmount * bitterbalPrice);
		if (frisAmount > 0) {
			console.log(frisAmount + " fris " + "<br>" + "1 flesje fris kost: €" + frisPrice + "<br>" + "totaal voor fris: " + "€" + frisAmount * frisPrice);
		}
		if (bierAmount > 0) {
			console.log(bierAmount + " bier " + "<br>" + "1 flesje bier kost: €" + bierPrice + "<br>" + "totaal voor bier: " + "€" + bierAmount * bierPrice);
		}
		if (wijnAmount > 0) {
			console.log(frisAmount + " wijn " + "<br>" + "1 glas wijn kost: €" + wijnPrice + "<br>" + "totaal voor wijn: " + "€" + wijnAmount * wijnPrice);
		}
		if (BitterbalAmount > 0) console.log("snack, hoeveelheid: " + BitterbalAmount + "<br>" + "toaal voor snacks: " + "€" + BitterbalAmount * bitterbalPrice);
		console.log("Totaal:" + " € " + totaalPrijs.toFixed(2))

	} else {
		alert("Dit staat niet in ons menu!")
		start();
	}
}
//hier word gevraagd hoeveel fris, bier of wijn je wilt bestellen
function startDrinkAmount() {
	parseInt();
	var drinkAmount = parseInt(prompt("Hoeveel " + currentorder + " wil je bestellen?"));
	if (isNaN(drinkAmount)) {
		alert("Je moet een getal gebruiken!");
		startDrinkAmount();
	} else {
		if (currentorder.toLowerCase() == "fris") {
			frisAmount += drinkAmount;
		} else if (currentorder.toLowerCase() == "bier") {
			bierAmount += drinkAmount;
		} else if (currentorder.toLowerCase() == "wijn") {
			wijnAmount += drinkAmount;
		}
		start();
	}

}
//hier word gevraagd hoeveel bitterballen je wilt bestellen
function startSnackAmount() {
	var snackBitterballAmount = prompt("Hoeveel bitterballen wil je bestellen?");
	if (isNaN(parseInt(snackBitterballAmount))) {
		alert("Je moet een getal gebruiken!");
		startSnackAmount();
	}
	if (snackBitterballAmount == 8) {
		BitterbalAmount += 8;
		start();
	} else if (snackBitterballAmount == 16) {
		BitterbalAmount += 16;
		start();
	} else {
		alert("Je kan alleen kiezen uit 8 of 16 bitterballen");
		startSnackAmount();
	}

}