class Game {
    constructor() {
    this.myCat = new MyCat()
    this.myCatImage
    this.background = new Background()
    this.backgroundImage

}

preload() {
    this.backgroundImage = loadImage("../assets/backgrounds/park.png")
    this.myCatImage = loadImage("../assets/cats/cat_white-32x48.png")
    
}

draw() {
    this.background.draw()
    this.myCat.draw()
}

}
