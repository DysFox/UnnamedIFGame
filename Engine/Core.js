import { Player } from './Player';
//UI Vars
var header;
var mainDisplay;
//Meta Info Vars
var gameName = 'Unnamed IF Game';
var player = new Player("Player");
window.onload = () => {
    init();
};
function init() {
    header = document.getElementById('header');
    console.log(header.innerHTML);
    mainDisplay = document.getElementById('mainDisplay');
    header.innerHTML = "<h1>" + gameName + "</h1>";
    mainDisplay.innerHTML = "<p>Testing writing from script.</p>";
    player.name = "Dys";
    getPlayerName();
}
function getPlayerName() {
    mainDisplay.innerHTML += "\nHello, " + player.name;
}
//# sourceMappingURL=Core.js.map