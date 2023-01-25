class Background {
    constructor() {
        this.level = 0
    }


    draw() {
    image(game.background.image[this.level].src, 0,0, 1000, 600)
}
}