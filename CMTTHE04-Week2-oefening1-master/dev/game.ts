class Game {
    
    constructor() {
        console.log("Game was created!1")

        let fish : Fish = new Fish() 

        fish.changeColor()
        fish.randomPos()

        let bubble : Bubble = new Bubble() 

        bubble.randomPos()

        let shark : Shark = new Shark()
    }
} 

window.addEventListener("load", () => new Game())