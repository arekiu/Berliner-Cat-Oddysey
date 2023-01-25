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
    this.ymax = 200

    this.catAppears()
}

catAppears(){
    
    this.x = Math.floor(Math.random() * 200) +30
    this.y = Math.floor(Math.random() * 320) +200
}

draw() {
    
    if (frameCount % 10 === 0) {
        if(this.i > 1) {(this.i = 0) && (this.j -=2)}
    
        else {(this.i++) && (this.j++)}
    }
    image(game.colorBlue[this.j].src, this.x,this.y, this.width, this.height)
}


movementDirection(random){

    switch(random){
        case 0: 
            this.j = 0
        
            if(this.y > this.ymax)
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

collision(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        console.log("game colision")
        game.level = 1
        game.background.level =1
        game.player.playerAppears()
        game.player.ymax = 80
        this.ymax = 150
    }
}

collision1(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        console.log("game colision")
        game.level = 2
        game.background.level =2
        game.player.playerAppears()
        game.player.ymax = 180
        this.ymax = 260
    }
}


}