class MyCat {
    constructor() {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
    this.image

    this.catAppears()
}

catAppears(){
    this.x = Math.floor(Math.random() * 1000 )
    this.y = Math.floor(Math.random() * 600)
    //this.movementDirection()
}

draw() {

    //total image 224x368
    image(game.myCatImage,/*dx*/this.x,  /*dy*/this.y,  /*dwidth*/64,  /*dheigth*/96,
    /*sx*/0,  /*sy*/96,  /*swidth*/32,  /*sheight*/48)
}


movementDirection(){
    switch(Math.floor(Math.random()* 4 )){
        case 0: 
            this.moveUp()
            break

        case 1: 
            this.moveDown()
            break

        case 2:
            this.moveLeft()
            break

        case 3:
            this.moveRight()
            break

    } 
    
}

moveUp(){
    this.y -= Math.floor(Math.random() * 100 )
    if(this.y > 0){
    this.image = image(game.myCatImage,this.x, this.y, 64,96,0,0,32, 48)}
}

moveDown(){
    this.y += Math.floor(Math.random() * 100 )
    if(this.y < 600){
    this.image = image(game.myCatImage,this.x, this.y, 64,96,0,96,32, 48)}
}

moveRight(){
    this.x += Math.floor(Math.random() * 100 )
    if(this.x < 1000){
    this.image = image(game.myCatImage,this.x, this.y, 64,96,0,48,32, 48)}
}

moveLeft(){
    this.x -= Math.floor(Math.random() * 100 )
    if(this.x > 0){
    this.image = image(game.myCatImage,this.x, this.y, 64,96,0,144,32, 48)}
}


}