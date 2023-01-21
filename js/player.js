class Player {
    constructor() {
    this.width = 110
    this.height = 180
    this.x = 800
    this.y = 300
}

draw() {
    image(game.playerImage, this.x,this.y, this.width, this.height)

if (keyIsDown(UP_ARROW)) {
        if (this.y > 0) this.moveUp()
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

}