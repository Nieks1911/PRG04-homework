"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        console.log("Blub... blub...");
        this.bubble = document.createElement("bubble");
        this.bubble.addEventListener("click", function () { return _this.popBubble(); });
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.bubble);
    }
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
        this.bubble.remove();
    };
    Bubble.prototype.randomPos = function () {
        var rndX = Math.random() * (window.innerWidth - this.bubble.clientWidth);
        var rndY = Math.random() * (window.innerHeight - this.bubble.clientHeight);
        this.bubble.style.transform = "translate(" + rndX + "px, " + rndY + "px)";
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("Fish was created!");
        this.fish = document.createElement("fish");
        this.fish.addEventListener("click", function () { return _this.killFish(); });
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.fish);
    }
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
        this.fish.classList.add("dead");
    };
    Fish.prototype.changeColor = function () {
        var color = Math.random() * 360;
        this.fish.style.filter = "hue-rotate(" + color + "deg)";
    };
    Fish.prototype.randomPos = function () {
        var rndX = Math.random() * (window.innerWidth - this.fish.clientWidth);
        var rndY = Math.random() * (window.innerHeight - this.fish.clientHeight);
        this.fish.style.transform = "translate(" + rndX + "px, " + rndY + "px)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!1");
        var fish = new Fish();
        fish.changeColor();
        fish.randomPos();
        var bubble = new Bubble();
        bubble.randomPos();
        var shark = new Shark();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Shark = (function () {
    function Shark() {
        console.log("Shark was created!");
        this.shark = document.createElement("shark");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.shark);
    }
    return Shark;
}());
//# sourceMappingURL=main.js.map