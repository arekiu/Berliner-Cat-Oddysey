class Game {
    constructor() {
    this.getFrames = 0
    this.times = 0
    this.level = 0
    this.myCat = new MyCat()
    this.background = new Background()
    this.player = new Player()
    
    this.wildCats = [new Wildcat("colorWhite",180), new Wildcat("colorBlack",180),
                    new Wildcat("colorBrown",180), new Wildcat("colorWhite",180),
                    new Wildcat("colorBlack",180)]
    this.wildCats1 = [new Wildcat("colorBlack",150), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",150), new Wildcat("colorWhite",150),new Wildcat("colorWhite",150), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",150), new Wildcat("colorWhite",150)]
    this.wildCatsVertical1 = [new Wildcat("colorOrange",150), new Wildcat("colorOrange",150)]
    this.wildCatsVertical2 = [new Wildcat("colorOrange",230), new Wildcat("colorOrange",230), new Wildcat("colorOrange",230)]
    this.wildCats2 = [new Wildcat("colorBlack",230), new Wildcat("colorBlack",150),
                    new Wildcat("colorBrown",230), new Wildcat("colorWhite",230),new Wildcat("colorWhite",230), new Wildcat("colorBlack",230),
                    new Wildcat("colorBrown",230), new Wildcat("colorWhite",230),
                    new Wildcat("colorBrown",230), new Wildcat("colorWhite",230)]
    this.wildCatsVertical3 = [new Wildcat("colorOrange",280), new Wildcat("colorOrange",280), new Wildcat("colorOrange",280), new Wildcat("colorOrange",280)]
    this.wildCats3 = [new Wildcat("colorBlack",260), new Wildcat("colorBlack",260),
                                    new Wildcat("colorBrown",260), new Wildcat("colorWhite",260),new Wildcat("colorWhite",280), new Wildcat("colorBlack",280),
                                    new Wildcat("colorBrown",260), new Wildcat("colorWhite",280),
                                    new Wildcat("colorBrown",260), new Wildcat("colorWhite",280)]

    
}

preload() {
    this.catFight = loadSound("../assets/sounds/angrycat.mp3")

    this.background.image = [{src: loadImage("../assets/backgrounds/brandengurger.png")},
                    {src: loadImage("../assets/backgrounds/berlinwall.png")},
                    {src: loadImage("../assets/backgrounds/alexander1.png")},
                    {src: loadImage("../assets/backgrounds/berghain.png")},
                    {src: loadImage("../assets/backgrounds/finally.png")},
                    {src: loadImage("../assets/backgrounds/dead.png")}]
    this.myCat.image = loadImage("../assets/cats/blue_cat/blue_down.gif")

    this.playerImage = [
        {src: loadImage("../assets/player/alex_back.gif")},
        {src: loadImage("../assets/player/alex_front.gif")},
        {src: loadImage("../assets/player/alex-left.gif")},
        {src: loadImage("../assets/player/alex_right.gif")}]
    
    this.fight = loadImage("../assets/effects/fight.gif")
    this.screen = loadImage("../assets/backgrounds/did1.png")
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

                this.wildCats.forEach(function(cat) {
                    cat.draw()})

                if(frameCount > this.getFrames + 50){
                
                this.myCat.gotCat()

                
                if (frameCount % 60 === 0){
                let random = Math.floor(Math.random()* 4)
    
                this.myCat.movementDirection(random)}
                


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



                else if(this.level === 1){

            

                    if ( this.times === 1){
                    
                        this.background.levelMusic()
                        this.times += 1}

                    this.background.draw()
                    this.player.draw()
                    this.myCat.draw()
                    this.wildCats1.forEach(function(cat) {
                        cat.draw()})
                    this.wildCatsVertical1.forEach(function(cat) {
                        cat.draw()})

                    if(frameCount < this.getFrames + 300){
                        image(this.screen, 0,0, 1000,600)
                    }

                    if(frameCount > this.getFrames + 350){
    

                    if (frameCount % 60 === 0){
                    let random = Math.floor(Math.random()* 4)
    
                    this.myCat.movementDirection(random)}
                    this.myCat.gotCat1()
        

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
                    }






                    
                    else if(this.level === 2){

                        if ( this.times === 2){
        
                            this.background.levelMusic()
                            this.times += 1}

                        this.background.draw()
                        this.player.draw()
                        this.myCat.draw()
                        this.wildCatsVertical2.forEach(function(cat) {
                            cat.draw()})
                        this.wildCats2.forEach(function(cat) {
                                cat.draw()})


                        if(frameCount < this.getFrames + 300){
                            image(this.screen, 0,0, 1000,600)
                        }
    
                        if(frameCount > this.getFrames + 350){
                        
        
    
                        if (frameCount % 60 === 0){
                        let random = Math.floor(Math.random()* 4)
        
                        this.myCat.movementDirection(random)}
                        this.myCat.gotCat2()

                
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
                    
            
                            this.wildCats2.forEach(function(cat){
                            if (frameCount % 30 === 0)
                            cat.movementDirection() 
                            })
            
                            this.wildCats2.forEach(function(cat){
                            cat.collisionSound()
                            })
            
                            this.wildCats2.forEach(function(cat){
                            cat.collisionAnimation()
                            })
                        }
                    }









                    else if(this.level === 3){

                        if ( this.times === 3){
        
                            this.background.levelMusic()
                            this.times += 1}

                        this.background.draw()
                        this.player.draw()
                        this.myCat.draw()
                        this.wildCatsVertical3.forEach(function(cat) {
                            cat.draw()})
                        this.wildCats3.forEach(function(cat) {
                                cat.draw()})

                        if(frameCount < this.getFrames + 300){
                            image(this.screen, 0,0, 1000,600)
                        }
    
                        if(frameCount > this.getFrames + 350){
        
    
                        if (frameCount % 60 === 0){
                        let random = Math.floor(Math.random()* 4)
        
                        this.myCat.movementDirection(random)}
                        this.myCat.gotCat3()


                
                            if (frameCount % 30 === 0){
                
                            this.wildCatsVertical3.forEach(function(cat){
        
                            if((cat.y > cat.ymax) && ((cat.counterDirection % 2) === 1)){
                            cat.movementUp()
                            }
                            else {
                                cat.movementDown()} 
                            console.log(cat.counterDirection)
                            })}
        
                            this.wildCatsVertical3.forEach(function(cat){
                            cat.collisionSound()
                            })
                
                            this.wildCatsVertical3.forEach(function(cat){
                            cat.collisionAnimation()
                            })    
                    
            
                            this.wildCats3.forEach(function(cat){
                            if (frameCount % 30 === 0)
                            cat.movementDirection() 
                            })
            
                            this.wildCats3.forEach(function(cat){
                            cat.collisionSound()
                            })
            
                            this.wildCats3.forEach(function(cat){
                            cat.collisionAnimation()
                            })
                        }
                    }

                    else if(this.level === 4){

                        this.background.draw()
                            if (keyIsDown(ENTER)) {
                                location.reload()
                        }
                        }
                    
                        else if(this.level === 5){

                            this.background.draw()
                                if (keyIsDown(ENTER)) {
                                    location.reload()
                            }
                            }
                    

    }



}

