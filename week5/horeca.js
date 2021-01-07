//prijs en variabelen van de producten van de site
var prijsfris = 0;
var prijswijn = 0;
var prijsbier = 0;
var prijsbal = 0;
var prijsf = 1.97;
var prijsw = 3.15;
var prijsb = 0.83;
var prijst = 0.08;
var hoev_fris = 0;
var hoev_bier = 0;
var hoev_wijn = 0;
var hoev_bal = 0;
var totaal = 0;


//vraag naar bitterballen
function bitter() {
  var balhoeveelheid = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");

  if (balhoeveelheid == 8 || balhoeveelheid == 16) {
   var schaal = prompt("Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?");
   if (schaal > 8 || schaal < 16) {
     hoev_bal = hoev_bal + Number(balhoeveelheid) * schaal;
     prijsbal = prijsbal + (balhoeveelheid * schaal * prijst);
     console.log(prijsbal);
     console.log(hoev_bal);
     vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
   } else {
    alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
    vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
   }
  } else {
    alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
    vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
  }
}
//vraag naar naam en hoeveelheid van drank
function vraagdrank(naam) {
  if (naam == "fris") {
    var frishoeveelheid = prompt("Hoeveel " + naam + " wilt u toevoegen aan uw bestelling?");
    hoev_fris = hoev_fris + Number(frishoeveelheid);
    prijsfris = prijsfris + (Number(frishoeveelheid) * prijsf);
  console.log(prijsfris);
  console.log(hoev_fris);
    vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
    } else if (naam == "wijn") {
  var wijnhoeveelheid = prompt("Hoeveel " + naam + " wilt u toevoegen aan uw bestelling?");
    hoev_wijn = hoev_wijn + Number(wijnhoeveelheid);
    prijswijn = prijswijn + (Number(wijnhoeveelheid) * prijsw);
  console.log(prijswijn);
  vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
    } else if (naam == "bier") {
  var bierhoeveelheid = prompt("Hoeveel " + naam + " wilt u toevoegen aan uw bestelling?");
  hoev_bier = hoev_bier + Number(bierhoeveelheid);
  prijsbier = prijsbier + (Number(bierhoeveelheid) * prijsb);
  console.log(prijsbier);
  vraagdrank(prompt("Welke bestelling wilt u toevoegen?"));
    } else if (naam == "snack"){