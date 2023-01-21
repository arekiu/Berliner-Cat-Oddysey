class Game {
    constructor() {
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    

}

preload() {
    this.background.image = loadImage("../assets/backgrounds/park.png")
    this.myCat.image = loadImage("../assets/cats/white_cat/slice_2_0.png")
    this.player.image = loadImage("../assets/player/alex-front.png")

    this.myCat.imageUp = loadImage("../assets/cats/white_cat/slice_0_0.png")
    this.myCat.imageDown = loadImage("../assets/cats/white_cat/slice_2_0.png")
    this.myCat.imageLeft = loadImage("../assets/cats/white_cat/slice_3_0.png")
    this.myCat.imageRight = loadImage("../assets/cats/white_cat/slice_1_0.png")  
}

draw() {
    //clear()
    this.background.draw()
    this.player.draw()
    

    this.myCat.draw()
    
    
    if (frameCount % 30 === 0)
    this.myCat.movementDirection()
    

}

}
