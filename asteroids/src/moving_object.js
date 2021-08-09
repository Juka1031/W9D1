
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
    ctx.fillstyle = color;
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
    ctx.stroke();
};

module.exports = MovingObject