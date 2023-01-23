class Wildcat {
    constructor(color) {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
    this.image
    this.color = color
    this.i = 0
    this.j = 0

    this.catAppears()
}

catAppears(){
    
    this.x = Math.floor(Math.random() * 900) +50
    this.y = Math.floor(Math.random() * 500) +50
}

draw() {
    
    if (frameCount % 10 === 0) {
        if(this.i > 1) {(this.i = 0) && (this.j -=2)}
    
        else {(this.i++) && (this.j++)}
    }
    image(game[this.color][this.j].src, this.x,this.y, this.width, this.height)
}


movementDirection(){

    switch(Math.floor(Math.random()* 4)){
        case 0: 
            this.j = 0
        
            if(this.y > 100)
            this.y -= 20 
            break

        case 1:
            this.j = 3
            
            if(this.y < 460)
            this.y += 20 
            break

        case 2:
            this.j = 6
            
            if(this.x > 100)
            this.x -=20 
            break

        case 3:
            this.j = 9
            
            if(this.x < 950)
            this.x +=20 
            break
    } 
    
}

}