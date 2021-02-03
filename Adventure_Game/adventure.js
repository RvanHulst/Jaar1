const gameContainer = document.getElementById('game-container');

const title = document.getElementById('title');
const gameImage = document.getElementById('image');
const description = document.getElementById('description');

const gameButtons = document.getElementById('game-buttons');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const inventoryItem = document.getElementById('inventoryItem');

const startMusic = new Audio("audio/background.mp3");
const deathSound = new Audio("audio/dead.mp3");
const winMusic = new Audio("audio/");
const radio =  new Audio("audio/radioPolice.mp3");

function startscreen() {
	console.log("Start Screen");
	gameImage.src="images/politielogo.png";
	title.innerHTML="World War Now";
	button2.style.display="initial";
	button3.style.display="initial";
	button3.onclick=function() {music();};
	button3.innerHTML="Muziek";
	button2.onclick=level1;
	button2.innerHTML="Start het spel";
	button1.style.display="none";
	description.innerHTML="Welkom bij het politie spel. Je gaat nu als een agent spelen en je zult de juiste keuzens moeten maken want alles wat je doet kan ook tegen je gebruikt worden";
	description.style.width="500px";
	description.style.margin="0 auto";
}
startscreen();

function music() {
	console.log("Music Turned ON");
	startMusic.loop = true;
	startMusic.play();
	startMusic.volume = 0.04;
}

function death() {
	console.log("Death");
	deathSound.play();
	deathSound.volume = 1.0;
	gameImage.src="images/death.jpg";
	title.innerHTML="Retry";
	description.innerHTML=("Je hebt de verkeerde keuze gemaakt. Je bent dood. Je kunt opnieuw beginnen.");
	button1.style.display="none";
	button2.style.display="none";
	button3.style.display="none";
	setTimeout(startscreen,5000)
}

function itemAlert() {
	console.log("NO ITEM");
	alert("Je bent een item vergeten op te pakken! Je begint overnieuw!");
	startscreen();
}
function level1() {
	console.log("Level 1");
	gameImage.src="images/briefing.png"
	title.innerHTML="De Briefing";
	description.innerHTML="je krijgt uitleg en er wordt verteld dat er vanavond rellen zullen zijn maar dat de normale shifts ook nog door gaan. Groote groepen mensen moeten snel maar zonder veel geweld weg gehaald worden of uit elkaar gedrongen worden.";
	button2.onclick=level2;
	button2.innerHTML="Je begint met de shift met een collega. maar eerst ga je spullen hallen in de locker room";
	button3.onclick=alternatievenKeuzen1;
	button3.innerHTML="Je Begint met de shift in je eentje. maar eerst ga je spullen hallen in de locker room";
}

function level2() {
	button3.style.display="none";
	console.log("Level 2");
	gameImage.src="images/lockers.jpg"
	title.innerHTML="Locker room";
	description.innerHTML="je staat je spullen te pakken, En dan hoor je oppeens je collega zeggen: Ben je er klaar voor? denk zelf dat het een lange dag wordt.";
	button2.onclick=level3;
	button2.innerHTML="Je zegt haha ja dat denk ik ook ja. Ik wil vertrekken over 5 minuten. Dan zie ik je daar";

}

function level3() {
	button3.style.display="initial";
	console.log("Level 3");
	gameImage.src="images/beginshift.jpg"
	title.innerHTML="Begin van de shift";
	description.innerHTML="Je komt aan bij de auto en ziet dat je collega al aan het wachten op je is.";
	button2.onclick=level4;
	button2.innerHTML="Je begint met het testen van je lichten en siren en kijken als alles werkt zoals het moet en meld je daarna aan bij de centrale met je code";
	button3.onclick=verkeerdeKeuzen1;
	button3.innerHTML="je start de auto op en toeterd een paar keer en zegt aww we zijn er klaar voor, nog niet aanmelden bij de centrale dan kunnen we nog teminste lekker koffie halen";
}

function level4() {
	console.log("Level 4");
	radio.play();
	radio.volume = 1.0;
	gameImage.src="images/radio.jpg"
	title.innerHTML="Radio Bericht";
	description.innerHTML="......KRKAAA...Meldkamer.. Rotterdam-Zuid krrrr.... Buren ruzie kkkrrrr... Meerdere eenheden in de buurt.... Kan 1 eenheid hier opreageren)";
	button2.onclick=level5;
	button2.innerHTML="Je radio'd in dat je onderweg bent en je zult melden wanneer je er bent";
	button3.onclick=alternatievenKeuzen2;
	button3.innerHTML="je negeerd de oproep en zegt tegen je collega we pakken wel een spannender oproep op";
}

function level5() {
	console.log("Level 5");
	gameImage.src="images/burenruzie.jpg"
	title.innerHTML="level5";
	description.innerHTML="De buurvrouw begint meteen naar uw te schreeuwen! HELP HELP DIE MAN IS ZOMAAR DRONKEN IN MIJ HUIS GELOPEN EN PROBEERDE MIJ AAN TE TASTEN ALSTUBLIEFT HELP ME!!";
	button2.onclick=level6;
	button2.innerHTML="je arresteerd de buurman";
	button3.onclick=alternatievenKeuzen2;
	button3.innerHTML="je geeft de buurman een waarschuwing en zorgt dat die geen last meer zal ver oorzaken na dat verlaat de locatie";
}

function level6() {
	console.log("Level 6");
	gameImage.src="images/aangehoudenbuurman.jpg"
	title.innerHTML="level6";
	description.innerHTML="Aanhouding buurman";
	button2.onclick=alternatievenKeuzen3;
	button2.innerHTML="Je neemt de buurman mee naar de politie station om hem vast te zetten en leest onderweg zijn rechten voor";
	button3.onclick=alternatievenKeuzen2;
	button3.innerHTML="Je laat de buurman toch gaan omdat je toch je keuzen niet goed vondt en dat het niet zo erg was ";
}
function level7() {
	button3.style.display="initial";
	console.log("Level 7");
	gameImage.src="gif/responding.gif"
	title.innerHTML="Start van Achtervolging";
	description.innerHTML="je bent eindelijk in de buurt van de auto die was betrapt op inbraak";
	button2.onclick=level8;
	button2.innerHTML="Je gaat proberen ze af te snijden als je via de snelweg gaat en dan via de snelweg hun afsneid en ze pakt in de stad";
	button3.onclick=level8;
	button3.innerHTML="je gaat via de stad rijden en proberen zo mogelijke wegen die ze kunnen gebruiken hun aftesneiden";
}
function level8() {
	console.log("Level 8");
	gameImage.src="gif/aanhouding.gif"
	title.innerHTML="Aanhouding";
	description.innerHTML="Je hebt met succes de auto gestopt! en je begint met de aanhouding";
	button2.onclick=alternatievenKeuzen3;
	button2.innerHTML="Je neemt de man mee naar de politie station om hem vast te zetten en leest onderweg zijn rechten voor";
	button3.onclick=alternatievenKeuzen3;
	button3.innerHTML="Je neemt de man mee naar de politie station om hem vast te zetten";
}
function level9() {
	button3.style.display="initial";
	console.log("Level 9");
	gameImage.src="gif/responding.gif"
	title.innerHTML="Start van de rellen";
	description.innerHTML="alle eenheden zijn terug bij de politie station en krijgen nog een kleine briefing";
	button2.onclick=level8;
	button2.innerHTML="test";
	button3.onclick=level8;
	button3.innerHTML="test";
	}























// verkeerde keuzens
function verkeerdeKeuzen1() {
	button3.style.display="none";
	console.log("verkeerdeKeuzen1");
	gameImage.src="images/stoplicht.jpg"
	title.innerHTML="Wachten bij de rode stoplicht";
	description.innerHTML="je ziet een auto naast je hard door rood heen rijden.";
	button2.onclick=verkeerdeKeuzen2;
	button2.innerHTML="Je gaat achter ze aan en zet je lichten en siren aan";
}
function verkeerdeKeuzen2() {
	console.log("verkeerdeKeuzen1");
	gameImage.src="gif/policeCrash.gif"
	title.innerHTML="De crash";
	description.innerHTML="Je crashed door dat je siren niet werkte en de andere automobilist niet goed aan het opletten was";
	button1.style.display="none";
	button2.style.display="none";
	button3.style.display="none";
	setTimeout(death,12000)
}



// alternatieven keuzens die je kan maken in het spel

function alternatievenKeuzen1() {
	button3.style.display="none";
	console.log("alternatievenKeuzen1");
	gameImage.src="images/lockers.jpg"
	title.innerHTML="Locker room";
	description.innerHTML="Je staat in de locker room en ziet oppeens een man naar je toe stappen en die zegt: Hey zo makkelijk kom je ook niet van mij af, ik snap het dat je alleen wilt maar de baas wilt dat niemand alleen vandaag is";
	button2.onclick=level3
	button2.innerHTML="Je stemt in en zegt oke, pak al je spullen en maak je klaar we vertrekken over 5 minuten";
}
function alternatievenKeuzen2() {
	radio.play();
	radio.volume = 1.0;
	button3.style.display="none";
	console.log("alternatievenKeuzen1");
	gameImage.src="images/radio.jpg"
	title.innerHTML="Radio call komt binnen";
	description.innerHTML="......KRKAAA...Meldkamer.. Rotterdam-Zuid krrrr.... Vluchten van de poltie...... Hete daad inbraak... meerdere eenheden in de buurt ga er achter aan!";
	button2.innerHTML="Je stemt in en zegt oke, je meld de meldkamer dat je er achter aan gaat!";
	button2.onclick=level7;
}
function alternatievenKeuzen3() {
	button3.style.display="none";
	console.log("alternatievenKeuzen3");
	gameImage.src="images/bureua.jpg";
	title.innerHTML="Het politie bureua ";
	description.innerHTML="je brengt de man naar binnen";
	button2.onclick=level9;
	button2.innerHTML="Je brent de man naar de tijdelijke wacht cell tot dat de officier van justitie de tijd heeft voor hem. Je begint het papier werk te maken";
}