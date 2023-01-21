class MyCat {
    constructor() {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
    this.image
    this.imageUp
    this.imageDown
    this.imageLeft
    this.imageRight 

    this.catAppears()
}

catAppears(){
    
    this.x = Math.floor(Math.random() * 1000 )
    this.y = Math.floor(Math.random() * 600)
}

draw() {
    image(game.myCat.image, this.x,this.y, this.width, this.height)
}


movementDirection(){
    switch(Math.floor(Math.random()* 4 )){
        case 0: 
            this.image = this.imageUp
            if(this.y > 100)
            this.y -= 20
            break

        case 1: 
            this.image = this.imageDown
            if(this.y < 480)
            this.y += 20
            break

        case 2:
            this.image = this.imageLeft
            if(this.x > 60)
            this.x -=20
            break

        case 3:
            this.image = this.imageRight
            if(this.x < 960)
            this.x +=20
            break
    } 
    
}

}