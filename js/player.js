class Player {
    constructor() {
    this.width = 55
    this.height = 90
    this.x = 0
    this.y = 0
    this.ymax = 180
    this.lives = 3

    this.playerAppears()
}

playerAppears(){
    
    this.x = 900
    this.y = 400

}

draw() {

    this.hearts()
    image(game.player.image, this.x,this.y, this.width, this.height)

if (keyIsDown(UP_ARROW)) {
        if (this.y > this.ymax) this.moveUp()
}

if (keyIsDown(DOWN_ARROW)) {
    if (this.y < 600-this.height) this.moveDown()
}

if (keyIsDown(LEFT_ARROW)) {
    if (this.x > 0) this.moveLeft()
}

if (keyIsDown(RIGHT_ARROW)) {
    if (this.x < 1000-this.width) this.moveRight()
}
}

moveUp(){
    this.y -= 5}

moveDown(){
    this.y += 5}

moveLeft(){
    this.x -= 5}    

moveRight(){
    this.x += 5}



hearts(){
    if(this.lives=== 1){
        image(game.heart, 0, 0, 90,70)}
    
        else if(this.lives === 2){
            image(game.heart, 0, 0, 90,70)
            image(game.heart, 55,0,90,70)
        }

        else if(this.lives === 3){
            image(game.heart, 0, 0, 90,70)
            image(game.heart, 55,0,90,70)
            image(game.heart, 110,0,90,70)}
        }

    
}