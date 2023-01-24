class MyCat {
    constructor() {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
    this.image
    this.imageBlue
    this.i = 0
    this.j = 0

    this.catAppears()
}

catAppears(){
    
    this.x = Math.floor(Math.random() * 920) +30
    this.y = Math.floor(Math.random() * 420) +100
}

draw() {
    
    if (frameCount % 10 === 0) {
        if(this.i > 1) {(this.i = 0) && (this.j -=2)}
    
        else {(this.i++) && (this.j++)}
    }
    image(game.imageBlue[this.j].src, this.x,this.y, this.width, this.height)
}


movementDirection(random){

    switch(random){
        case 0: 
            this.j = 0
        
            if(this.y > 200)
            this.y -= 20 
            break

        case 1:
            this.j = 3
            
            if(this.y < 430)
            this.y += 20 
            break

        case 2:
            this.j = 6
            
            if(this.x > 100)
            this.x -=20 
            break

        case 3:
            this.j = 9
            
            if(this.x < 920)
            this.x +=20 
            break
    } 
    
}

}