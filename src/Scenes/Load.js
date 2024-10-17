class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");
        //Load tile information
        this.load.image("map_tiles", "mapPack_spritesheet.png");        // Packed tiles
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}