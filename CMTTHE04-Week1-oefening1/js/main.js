window.addEventListener("load", init);

let game = document.getElementsByTagName("game") [0];

function init () {

    for (let i=0; i<50; i++) {

        // Fish random values
        let rndX = Math.random() * window.innerWidth;
        let rndY = Math.random() * window.innerWidth;
        let rndHue = Math.random() * 361;

        // Bubble random values
        let bRndX = Math.random() * window.innerWidth;
        let bRndY = Math.random() * window.innerWidth;

        // Fish element
        let fish = document.createElement("fish");
        game.appendChild(fish);

        fish.style.transform = `translate(${rndX}px, ${rndY}px)`
        fish.style.filter = `hue-rotate(${rndHue}deg)`

        // Bubble element
        let bubble = document.createElement("bubble");
        game.appendChild(bubble);

        bubble.style.transform = `translate(${bRndX}px, ${bRndY}px)`
    }
    
    game.addEventListener("click", clickMe)

    // let fish = document.getElementsByTagName("fish");
    // let bubble = document.getElementsByTagName("bubble");
    

    function clickMe(e){
        let element = e.target.tagName;
        if (element = bubble) {
            console.log("Ik ben een bubble");
        }
    }

}