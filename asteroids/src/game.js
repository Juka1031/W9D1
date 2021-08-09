const Asteroid = require('./asteroid.js')


function Game () {
    this.asteroids = [];
}

Game.prototype.addAsteroids = function(){
for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid(this.randomPosition()));
    }
}
//new Asteroid({ pos: [30, 30] });

Game.prototype.randomPosition = function(){
    const x = Math.floor(Math.random() * 500);
    const y = Math.floor(Math.random() * 500);
    let randomXY = {pos:[x,y]}
    return randomXY;
}

Game.DIM_X = 500
Game.DIM_Y = 500
Game.NUM_ASTEROIDS = 10;