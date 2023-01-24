class Game {
    constructor() {
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    this.wildCats = [new Wildcat("imageBlack"), new Wildcat("imageBlack"),
                    new Wildcat("imageWhite"), new Wildcat("imageWhite")]
    

}

preload() {
    this.catFight = loadSound("../assets/sounds/angrycat.mp3")

    this.background.image = loadImage("../assets/backgrounds/park.png")
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_2_0.png")
    this.player.image = loadImage("../assets/player/alex-front.png")
    
    this.fight = loadImage("../assets/effects/fight.gif")


    this.imageBlue = [
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

    this.imageWhite = [
/*catUp [0]*/ {src: loadImage("../assets/cats/white_cat/slice_0_0.png")},
        {src: loadImage("../assets/cats/white_cat/slice_0_1.png")},
        {src: loadImage("../assets/cats/white_cat/slice_0_2.png")},
/*catDown [3]*/ {src: loadImage("../assets/cats/white_cat/slice_2_0.png")},
        {src: loadImage("../assets/cats/white_cat/slice_2_1.png")},
        {src: loadImage("../assets/cats/white_cat/slice_2_2.png")},
/*catLeft [6]*/ {src: loadImage("../assets/cats/white_cat/slice_3_0.png")},
        {src: loadImage("../assets/cats/white_cat/slice_3_1.png")},
        {src: loadImage("../assets/cats/white_cat/slice_3_2.png")},
/*catRight [9]*/ {src: loadImage("../assets/cats/white_cat/slice_1_0.png")},
        {src: loadImage("../assets/cats/white_cat/slice_1_1.png")},
        {src: loadImage("../assets/cats/white_cat/slice_1_2.png")}
]

this.imageBlack = [
    /*catUp [0]*/ {src: loadImage("../assets/cats/black_cat/black_0_0.png")},
                    {src: loadImage("../assets/cats/black_cat/black_0_1.png")},
                    {src: loadImage("../assets/cats/black_cat/black_0_2.png")},
    /*catDown [3]*/ {src: loadImage("../assets/cats/black_cat/black_2_0.png")},
                    {src: loadImage("../assets/cats/black_cat/black_2_1.png")},
                    {src: loadImage("../assets/cats/black_cat/black_2_2.png")},
    /*catLeft [6]*/ {src: loadImage("../assets/cats/black_cat/black_3_0.png")},
                    {src: loadImage("../assets/cats/black_cat/black_3_1.png")},                
                    {src: loadImage("../assets/cats/black_cat/black_3_2.png")},
    /*catRight [9]*/ {src: loadImage("../assets/cats/black_cat/black_1_0.png")},
                    {src: loadImage("../assets/cats/black_cat/black_1_1.png")},
                    {src: loadImage("../assets/cats/black_cat/black_1_2.png")}
    ]


}

draw() {
    clear()
    this.background.draw()
    this.player.draw()
    this.myCat.draw()
    

    if (frameCount % 60 === 0){
    let random = Math.floor(Math.random()* 4)
    
    this.myCat.movementDirection(random)}



    this.wildCats.forEach(function(cat) {
    cat.draw()
        })

    this.wildCats.forEach(function(cat){
        if (frameCount % 60 === 0)
        cat.movementDirection() 
    })

    this.wildCats.forEach(function(cat){
        cat.collisionSound()
    })

    this.wildCats.forEach(function(cat){
        cat.collisionAnimation()
        })
    }


}
