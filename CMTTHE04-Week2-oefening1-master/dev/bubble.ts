class Bubble {

    div: HTMLElement
    bubble: HTMLElement

    constructor() {
        console.log("Blub... blub...")

        this.bubble = document.createElement("bubble")
        this.bubble.addEventListener("click", () => this.popBubble())

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.bubble)
    }

    popBubble() {
        console.log("Plop!")
        this.bubble.remove()
    }

    // Random Position
    randomPos() {
        let rndX = Math.random() * (window.innerWidth - this.bubble.clientWidth)
        let rndY = Math.random() * (window.innerHeight - this.bubble.clientHeight)
        
        this.bubble.style.transform = `translate(${rndX}px, ${rndY}px)`
    }
}