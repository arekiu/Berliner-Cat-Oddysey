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
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_down.gif")
    this.player.image = loadImage("../assets/player/ale_front_110x180.png")
    
    this.fight = loadImage("../assets/effects/fight.gif")

    this.heart = loadImage("../assets/player/rainbowheart.png")


    this.colorBlue = [
                    {src: loadImage("../assets/cats/blue_cat/blue_up.gif")},
                    {src: loadImage("../assets/cats/blue_cat/blue_down.gif")},
                    {src: loadImage("../assets/cats/blue_cat/blue_left.gif")},
                    {src: loadImage("../assets/cats/blue_cat/blue_right.gif")}]


    this.colorWhite = [
                    {src: loadImage("../assets/cats/white_cat/white-up.gif")},
                    {src: loadImage("../assets/cats/white_cat/white-down.gif")},
                    {src: loadImage("../assets/cats/white_cat/white-left.gif")},
                    {src: loadImage("../assets/cats/white_cat/white-right.gif")}]

this.colorBlack = [
                    {src: loadImage("../assets/cats/black_cat/black_up.gif")},
                    {src: loadImage("../assets/cats/black_cat/black_down.gif")},
                    {src: loadImage("../assets/cats/black_cat/black_left.gif")},
                    {src: loadImage("../assets/cats/black_cat/black_right.gif")}]

    this.colorBrown = [
                    {src: loadImage("../assets/cats/brown_cat/brown_up.gif")},
                    {src: loadImage("../assets/cats/brown_cat/brown_down.gif")},
                    {src: loadImage("../assets/cats/brown_cat/brown_left.gif")},
                    {src: loadImage("../assets/cats/brown_cat/brown_right.gif")}]
    
    this.colorOrange = [
                    {src: loadImage("../assets/cats/orange_cat/orange_up.gif")},
                    {src: loadImage("../assets/cats/orange_cat/orange_down.gif")},
                    {src: loadImage("../assets/cats/orange_cat/orange_left.gif")},
                    {src: loadImage("../assets/cats/orange_cat/orange_right.gif")}]

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
                    this.myCat.collision1()
                


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

                    
                    else if(this.level === 2){

                        this.background.draw()
                        this.player.draw()
                        this.myCat.draw()
        
    
                        if (frameCount % 60 === 0){
                        let random = Math.floor(Math.random()* 4)
        
                        this.myCat.movementDirection(random)}
                        this.myCat.collision1()
                    
                    }



    }



}
