const Asteroid = require('./asteroid.js')
const asteroid = new Asteroid
console.log(asteroid);



const MovingObject = require('./moving_object.js')
const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });
console.log(mo);

window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', function(event) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    console.log('DOM fully loaded and parsed');
});