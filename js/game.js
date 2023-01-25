class Game {
    constructor() {
    this.level = 0
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    this.wildCats = [new Wildcat("colorWhite",200), new Wildcat("colorBlack",200),
                    new Wildcat("colorBrown",200), new Wildcat("colorWhite",200)]
    this.wildCats2 = [new Wildcat("colorOrange"), new Wildcat("colorBlack"),
                    new Wildcat("colorBrown"), new Wildcat("colorWhite"),new Wildcat("colorOrange"), new Wildcat("colorBlack"),
                    new Wildcat("colorBrown"), new Wildcat("colorWhite")]
    this.wildCatsVertical = [new Wildcat("colorOrange",150), new Wildcat("colorOrange",150)]
    
    /*level0 ymax= 200, level1 xmax= 150*/
    
}

preload() {
    this.catFight = loadSound("../assets/sounds/angrycat.mp3")

    this.background.image = [{src: loadImage("../assets/backgrounds/brandengurger.png")},
                    {src: loadImage("../assets/backgrounds/berlinwall.png")},
                    {src: loadImage("../assets/backgrounds/alexander1.png")}]
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_2_0.png")
    this.player.image = loadImage("../assets/player/ale_front_110x180.png")
    
    this.fight = loadImage("../assets/effects/fight.gif")


    this.colorBlue = [
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

    this.colorWhite = [
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

this.colorBlack = [
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

    this.colorBrown = [
        {src: loadImage("../assets/cats/brown_cat/brown_0_1.png")},
        /*catUp [0]*/ {src: loadImage("../assets/cats/brown_cat/brown_0_0.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_0_2.png")},
        /*catDown [3]*/ {src: loadImage("../assets/cats/brown_cat/brown_2_0.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_2_1.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_2_2.png")},
        /*catLeft [6]*/ {src: loadImage("../assets/cats/brown_cat/brown_3_0.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_3_1.png")},                
                        {src: loadImage("../assets/cats/brown_cat/brown_3_2.png")},
        /*catRight [9]*/ {src: loadImage("../assets/cats/brown_cat/brown_1_0.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_1_1.png")},
                        {src: loadImage("../assets/cats/brown_cat/brown_1_2.png")}
        ]
    
    this.colorOrange = [
        /*catUp [0]*/ {src: loadImage("../assets/cats/orange_cat/orange_0_0.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_0_1.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_0_2.png")},
        /*catDown [3]*/ {src: loadImage("../assets/cats/orange_cat/orange_2_0.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_2_1.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_2_2.png")},
        /*catLeft [6]*/ {src: loadImage("../assets/cats/orange_cat/orange_3_0.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_3_1.png")},                
                        {src: loadImage("../assets/cats/orange_cat/orange_3_2.png")},
        /*catRight [9]*/ {src: loadImage("../assets/cats/orange_cat/orange_1_0.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_1_1.png")},
                        {src: loadImage("../assets/cats/orange_cat/orange_1_2.png")}
        ]


}

draw() {
    
            if(this.level === 0){
                
                this.background.draw()
                this.player.draw()
                this.myCat.draw()
    

                if (frameCount % 60 === 0){
                let random = Math.floor(Math.random()* 4)
    
                this.myCat.movementDirection(random)}
                this.myCat.collision()

            
                

                this.wildCats.forEach(function(cat) {
                    cat.draw()})

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



                else if(this.level === 1){

                    this.background.draw()
                    this.player.draw()
                    this.myCat.draw()
    

                    if (frameCount % 60 === 0){
                    let random = Math.floor(Math.random()* 4)
    
                    this.myCat.movementDirection(random)}
                    this.myCat.collision()
                


            this.wildCatsVertical.forEach(function(cat) {
            cat.draw()
                })
        
            
                if (frameCount % 120 === 0){
        
                this.wildCatsVertical.forEach(function(cat){
                if(cat.y > 300){
                    cat.movementUp()
                }
            
                else if(cat.y < 300){
                    if (frameCount % 60 === 0){
                    cat.movementDown()} 
                    
                }   
            })}


        
        
            this.wildCatsVertical.forEach(function(cat){
                cat.collisionSound()
            })
        
            this.wildCatsVertical.forEach(function(cat){
                cat.collisionAnimation()
                })    



    }

}



}
