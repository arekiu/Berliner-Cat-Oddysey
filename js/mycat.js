class MyCat {
    constructor() {
    this.width = 64
    this.height = 96
    this.x = 0
    this.y = 0
}

draw() {
    //total image 224x368
    image(game.myCatImage,/*dx*/100,  /*dy*/100,  /*dwidth*/64,  /*dheigth*/96,
    /*sx*/0,  /*sy*/96,  /*swidth*/32,  /*sheight*/48)
}


}