class Game {
    constructor() {
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    

}

preload() {
    this.background.image = loadImage("../assets/backgrounds/park.png")
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_2_0.png")
    this.player.image = loadImage("../assets/player/alex-front.png")


    this.myCat.imageBlue = [
    /*catUp [0]*/ {src: loadImage("../assets/cats/blue_cat/blue_0_0.png")},
                {src: loadImage("../assets/cats/blue_cat/blue_0_1.png")},
                {src: loadImage("../assets/cats/blue_cat/blue_0_2.png")},
    /*catDown [3]*/ {src: loadImage("../assets/cats/blue_cat/blue_2_0.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_2_1.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_2_2.png")},
    /*catLeft [6]*/ {src: loadImage("../assets/cats/blue_cat/blue_3_0.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_3_1.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_3_2.png")},
    /*catRight [9]*/ {src: loadImage("../assets/cats/blue_cat/blue_1_0.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_1_1.png")},
                    {src: loadImage("../assets/cats/blue_cat/blue_1_2.png")}
    ]
}

draw() {
    //clear()
    this.background.draw()
    this.player.draw()
    

    this.myCat.draw()

    if (frameCount % 60 === 0)
    this.myCat.movementDirection() 
}

}
