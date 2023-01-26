class Game {
    constructor() {
    this.times = 0
    this.level = 0
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    this.wildCats = [new Wildcat("colorWhite",200), new Wildcat("colorBlack",200),
                    new Wildcat("colorBrown",200), new Wildcat("colorWhite",200),
                    new Wildcat("colorBlack",200)]
    this.wildCats1 = [new Wildcat("colorBlack",150), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",150), new Wildcat("colorWhite",150),new Wildcat("colorWhite",150), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",150), new Wildcat("colorWhite",150)]
    this.wildCatsVertical1 = [new Wildcat("colorOrange",150), new Wildcat("colorOrange",150)]
    this.wildCatsVertical2 = [new Wildcat("colorOrange",230), new Wildcat("colorOrange",230), new Wildcat("colorOrange",230)]
    this.wildCats2 = [new Wildcat("colorBlack",230), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",230), new Wildcat("colorWhite",230),new Wildcat("colorWhite",230), new Wildcat("colorBlack",230),
                    new Wildcat("colorBrown",230), new Wildcat("colorWhite",230)]
    /*level0 ymax= 200, level1 xmax= 150*/
    
}

preload() {
    this.catFight = loadSound("../assets/sounds/angrycat.mp3")

    this.background.image = [{src: loadImage("../assets/backgrounds/brandengurger.png")},
                    {src: loadImage("../assets/backgrounds/berlinwall.png")},
                    {src: loadImage("../assets/backgrounds/alexander1.png")},
                    {src: loadImage("../assets/backgrounds/berghain.png")}]
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_down.gif")
    this.player.image = loadImage("../assets/player/ale_front_110x180.png")
    
    this.fight = loadImage("../assets/effects/fight.gif")

    this.heart = loadImage("../assets/player/rainbowheart.png")

    this.music = [{src: loadSound("../assets/sounds/level0.mp3")},
                    {src: loadSound("../assets/sounds/level1.mp3")},
                    {src: loadSound("../assets/sounds/level2.mp3")},
                    {src: loadSound("../assets/sounds/level3.mp3")}]


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
                
                
                if ( this.times ===0){
                this.background.levelMusic()
                this.times += 1}
    

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

                    if ( this.times === 1){
        
                        this.background.levelMusic()
                        this.times += 1}

                    this.background.draw()
                    this.player.draw()
                    this.myCat.draw()
    

                    if (frameCount % 60 === 0){
                    let random = Math.floor(Math.random()* 4)
    
                    this.myCat.movementDirection(random)}
                    this.myCat.collision1()
                
                this.wildCats1.forEach(function(cat) {
                    cat.draw()})

                this.wildCats1.forEach(function(cat){
                if (frameCount % 60 === 0)
                cat.movementDirection() 
                })

                this.wildCats1.forEach(function(cat){
                cat.collisionSound()
                })

                this.wildCats1.forEach(function(cat){
                cat.collisionAnimation()
                })


                    this.wildCatsVertical1.forEach(function(cat) {
                    cat.draw()
                    })
        
            
                    if (frameCount % 30 === 0){
        
                        
                    this.wildCatsVertical1.forEach(function(cat){

                    if((cat.y > cat.ymax) && ((cat.counterDirection % 2) === 1)){
                    cat.movementUp()
                    }
                    else {
                        cat.movementDown()} 
                    console.log(cat.counterDirection)
                    })}

                    this.wildCatsVertical1.forEach(function(cat){
                    cat.collisionSound()
                    })
        
                    this.wildCatsVertical1.forEach(function(cat){
                    cat.collisionAnimation()
                    })    
                    }






                    
                    else if(this.level === 2){

                        if ( this.times === 2){
        
                            this.background.levelMusic()
                            this.times += 1}

                        this.background.draw()
                        this.player.draw()
                        this.myCat.draw()
        
    
                        if (frameCount % 60 === 0){
                        let random = Math.floor(Math.random()* 4)
        
                        this.myCat.movementDirection(random)}
                        this.myCat.collision2()


                        this.wildCatsVertical2.forEach(function(cat) {
                            cat.draw()
                            })
                
                            if (frameCount % 30 === 0){
                
                            this.wildCatsVertical2.forEach(function(cat){
        
                            if((cat.y > cat.ymax) && ((cat.counterDirection % 2) === 1)){
                            cat.movementUp()
                            }
                            else {
                                cat.movementDown()} 
                            console.log(cat.counterDirection)
                            })}
        
                            this.wildCatsVertical2.forEach(function(cat){
                            cat.collisionSound()
                            })
                
                            this.wildCatsVertical2.forEach(function(cat){
                            cat.collisionAnimation()
                            })    
                    
                            this.wildCats.forEach(function(cat) {
                                cat.draw()})
            
                            this.wildCats.forEach(function(cat){
                            if (frameCount % 30 === 0)
                            cat.movementDirection() 
                            })
            
                            this.wildCats.forEach(function(cat){
                            cat.collisionSound()
                            })
            
                            this.wildCats.forEach(function(cat){
                            cat.collisionAnimation()
                            })

                    }









                    else if(this.level === 3){

                        if ( this.times === 3){
        
                            this.background.levelMusic()
                            this.times += 1}

                        this.background.draw()
                        this.player.draw()
                        this.myCat.draw()
        
    
                        if (frameCount % 60 === 0){
                        let random = Math.floor(Math.random()* 4)
        
                        this.myCat.movementDirection(random)}
                        //this.myCat.collision3()


                        this.wildCatsVertical2.forEach(function(cat) {
                            cat.draw()
                            })
                
                            if (frameCount % 30 === 0){
                
                            this.wildCatsVertical2.forEach(function(cat){
        
                            if((cat.y > cat.ymax) && ((cat.counterDirection % 2) === 1)){
                            cat.movementUp()
                            }
                            else {
                                cat.movementDown()} 
                            console.log(cat.counterDirection)
                            })}
        
                            this.wildCatsVertical2.forEach(function(cat){
                            cat.collisionSound()
                            })
                
                            this.wildCatsVertical2.forEach(function(cat){
                            cat.collisionAnimation()
                            })    
                    
                            this.wildCats.forEach(function(cat) {
                                cat.draw()})
            
                            this.wildCats.forEach(function(cat){
                            if (frameCount % 30 === 0)
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



}
