class Fish {

    div: HTMLElement
    fish: HTMLElement
    
    constructor() {
        console.log("Fish was created!")

        this.fish = document.createElement("fish")
        this.fish.addEventListener("click", () => this.killFish())

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.fish)    
    }

    killFish(){
        console.log("Aargh!")
        this.fish.classList.add("dead")
    }

    // Change Color
    changeColor() {
        let color = Math.random() * 360
        this.fish.style.filter = `hue-rotate(${color}deg)`
    }

    // Random Position
    randomPos() {
        let rndX = Math.random() * (window.innerWidth - this.fish.clientWidth)
        let rndY = Math.random() * (window.innerHeight - this.fish.clientHeight)

        this.fish.style.transform = `translate(${rndX}px, ${rndY}px)`
    }

}
