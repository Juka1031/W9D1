
// class MovingObject {
//     constructor(parameters) {
//         this.pos = parameters.pos;
//         this.vel = parameters.vel;
//         this.radius = parameters.radius;
//         this.color = parameters.color;
//     }
// }

function MovingObject(parameters) {
    this.pos = parameters.pos;
    this.vel = parameters.vel;
    this.radius = parameters.radius;
    this.color = parameters.color;
}

MovingObject.prototype.draw = function draw_circle(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

MovingObject.prototype.move = function (){
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
}



module.exports = MovingObject