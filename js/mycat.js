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

gotCat(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        game.getFrames = frameCount
        game.level = 1
        game.background.level =1
        game.player.playerAppears()
        game.player.ymax = 150
        this.ymax = 150
    }
}

gotCat1(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        game.getFrames = frameCount
        game.level = 2
        game.background.level = 2
        game.player.playerAppears()
        game.player.ymax = 200
        this.ymax = 230
    }
}

gotCat2(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        game.getFrames = frameCount
        game.level = 3
        game.background.level = 3
        game.player.playerAppears()
        game.player.ymax = 250
        this.ymax = 300
    }
}

gotCat3(){
    if (dist(this.x, this.y, game.player.x, game.player.y) < 60){
        game.getFrames = frameCount
        game.level = 4
    }
}


}