class Wildcat {
    constructor(color,ymax) {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
    this.image
    this.color = color
    this.ymax= ymax
    this.i = 0
    this.j = 0
    this.lastCollision = 0

    this.catAppears()
}

catAppears(){
    
    this.x = Math.floor(Math.random() * 920) +30
    this.y = Math.floor(Math.random() * 320) +200
}

draw() {
    
    image(game[this.color][this.j].src, this.x,this.y, this.width, this.height)


}


movementDirection(){

    switch(Math.floor(Math.random()* 4)){
        case 0: 
            this.j = 0
        
            if(this.y > this.ymax)
            this.y -= 20 
            break

        case 1:
            this.j = 1
            
            if(this.y < 430)
            this.y += 20 
            break

        case 2:
            this.j = 2
            
            if(this.x > 100)
            this.x -=20 
            break

        case 3:
            this.j = 3
            
            if(this.x < 920)
            this.x +=20 
            break
    }    
}



movementUp(){
        
    this.j = 0
    this.y -= 20 
}

movementDown(){

    this.j = 1
    this.y += 60 }




collisionSound(){
    this.lastCollision = this.lastCollision +1
if (dist(this.x, this.y, game.player.x, game.player.y) < 60 && this.lastCollision > 100){
    this.lastCollision = 0
    
    game.catFight.play()
    game.player.lives -= 1
    console.log(game.player.lives)
    if(game.player.lives===0){
        location.reload()
    }
}}

collisionAnimation(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        this.image = image(game.fight, this.x-130,this.y-100, 300, 300)
    }
}

}
