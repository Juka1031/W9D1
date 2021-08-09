const Util = require('./util.js')
const MovingObject = require('./moving_object.js')

Util.inherits(Asteroid, MovingObject);

Asteroid.RADIUS = 70;
Asteroid.COLOR = 'black'

function Asteroid (paramaters){
    this.color ||= Asteroid.COLOR ;
    this.radius ||= Asteroid.RADIUS;
    this.pos = paramaters.pos;
    this.vel = Util.randomVec(5);
    MovingObject.call(this, paramaters);
}
module.exports = Asteroid;