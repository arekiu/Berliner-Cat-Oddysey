class Background {
    constructor() {
        this.level = 0
    }


    draw() {
    image(game.background.image[this.level].src, 0,0, 1000, 600)
}

    levelMusic(){
        switch(this.level){
            case 0:
                game.music[0].src.play()
                break
            case 1:
                game.music[0].src.stop()
                game.music[1].src.play()
                break
            case 2: 
                game.music[1].src.stop()
                game.music[2].src.play()
                break
            case 3: 
                game.music[2].src.stop()
                game.music[3].src.play()
                break
        }
    
    }


}