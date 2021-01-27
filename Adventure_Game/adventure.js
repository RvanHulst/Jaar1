const gameContainer = document.getElementById('game-container');

const title = document.getElementById('title');
const gameImage = document.getElementById('image');
const description = document.getElementById('description');

const gameButtons = document.getElementById('game-buttons');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const inventoryItem = document.getElementById('inventoryItem');

const startMusic = new Audio("audio/riot.mp3");
const deathSound = new Audio("audio/dead.mp3");
const winMusic = new Audio("audio/");

alert("Voor de beste ervaring moet u de muziek aanzetten. Klik op de muziek knop.");

function startscreen() {
	console.log("Start Screen");
	gameImage.src="images/politielogo.png";
	title.innerHTML="World War Now";
	button3.onclick=function() {music();};
	button3.innerHTML="Muziek";
	button2.onclick=function() {
		level1();
	}
	button2.innerHTML="Start het spel";
	button1.style.display="none";
	description.innerHTML="Welkom bij mij spel. Je gaat nu als een agent spelen in de politie tegen de staats mogolen die gaan rellen";
	description.style.width="500px";
	description.style.margin="0 auto";
}

startscreen();

function music() {
	console.log("Music Turned ON");
	startMusic.loop = true;
	startMusic.play();
	startMusic.volume = 1.0;
}

function death() {
	console.log("Death");
	deathSound.play();
	deathSound.volume = 1.0;
	alert("Je hebt de verkeerde keuze gemaakt. Je bent dood. Je kunt opnieuw beginnen.");
	startscreen();
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
	description.innerHTML="je krijgt uitleg en er wordt verteld dat er vanavond rellen zullen zijn. iedreen moet naar locatie b5ad gaan oftewel zuidplein Roterdam";
	button2.onclick=function() {
		death();
	}
	button2.innerHTML="je neemt je geweer in je mond en vraagt jezelf af als die geladen is.";
	button3.onclick=function() {
		level2();
	}
	button3.innerHTML="Je hebt goed opgelet en gaat naar de locatie dat werd gemeld.";
}
function level2() {
	console.log("Level 2");
	gameImage.src="images/locatie1.jpg"
	title.innerHTML="De Locatie";
	description.innerHTML="je bent op de locatie van het incident,";
	button2.onclick=function() {
		verkeerdeKeuzen1();
	}
	button2.innerHTML="je doet niks en loopt weg van de locatie .";
	button3.onclick=function() {
		level3();
	}
	button3.innerHTML="je doet iets.";
}


























// verkeerde keuzens
function verkeerdeKeuzen1() {
	console.log("verkeerdeKeuzen1");
	gameImage.src="images/Minecraft.png"
	title.innerHTML="De verkeerde Keuzen test";
	description.innerHTML="gok tussen het getal 1 of 2, kies de juiste en ga verder kies de verkeerde en ga dood!";
	button2.onclick=function() {
		death();
	}
	button2.innerHTML="Getal 1";
	button3.onclick=function() {
		death();
	}
	button3.innerHTML="Getal 2";
}



