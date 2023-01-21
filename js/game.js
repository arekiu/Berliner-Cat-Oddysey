class Game {
    constructor() {
    this.myCat = new MyCat()
    this.myCatImage
    this.background = new Background()
    this.backgroundImage
    this.player = new Player()
    this.playerImage

}

preload() {
    this.backgroundImage = loadImage("../assets/backgrounds/park.png")
    this.myCatImage = loadImage("../assets/cats/cat_white-32x48.png")
    this.playerImage = loadImage("../assets/player/alex-front.png")
    
}

draw() {
    this.background.draw()
    this.myCat.draw()
    this.player.draw()
}

}
