import { Player } from './Player.js';
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
    getPlayerName();
}
function getPlayerName() {
    mainDisplay.innerHTML = "<p>Enter your name: </p>\n" +
        "<input type=\"text\" name=\"playerName\">\n" +
        "<input type=\"button\" name=\"confirm\" value=\"Confirm\">";
}
//# sourceMappingURL=Core.js.map