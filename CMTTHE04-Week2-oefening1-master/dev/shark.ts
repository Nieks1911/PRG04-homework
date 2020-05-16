class Shark {

    div: HTMLElement
    shark: HTMLElement

    constructor() {
        console.log("Shark was created!")

        this.shark = document.createElement("shark")

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.shark)
    }
}