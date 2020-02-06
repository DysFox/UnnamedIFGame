import {Player} from './Player.js';
//UI Vars
var header;
var mainDisplay;

//Meta Info Vars
var gameName: string = 'Unnamed IF Game';
var player = new Player("Player");


window.onload = () => {
	init();
}


function init() {
	header = document.getElementById('header')! as HTMLElement;
	console.log(header.innerHTML);
	mainDisplay = document.getElementById('mainDisplay')! as HTMLElement;
	header.innerHTML = "<h1>" + gameName + "</h1>";
	mainDisplay.innerHTML = "<p>Testing writing from script.</p>";
	player.name = "Dys";
	getPlayerName();

}

function getPlayerName() {
	mainDisplay.innerHTML += "\nHello, " + player.name;
}