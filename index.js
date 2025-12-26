const BACKGROUND = "black";
const FOREGROUND = "yellow";
const FPS = 60;

console.log(game);
game.width = 700;
game.height = 700;

const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, game.width, game.height);
}

// define a vertex
function point({ x, y }) {
  const s = 20;
  ctx.fillStyle = FOREGROUND;
  ctx.fillRect(x - s / 2, y - s / 2, s, s);
}

// define a line
function line(p1, p2) {
  ctx.lineWidth = 3;
  ctx.strokeStyle = FOREGROUND;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

// put a 2d point on canvas
function display(p) {
  return {
    x: ((p.x + 1) / 2) * game.width,
    y: (1 - (p.y + 1) / 2) * game.height,
  };
}

// project 3d point in 2d plane
function project({ x, y, z }) {
  return {
    x: x / z,
    y: y / z,
  };
}

const dt = 1 / FPS;

// traverse along z axis
function translate_z({ x, y, z }, dz) {
  return { x, y, z: z + dz };
}

// rotate along y axis
function rotate_y({ x, y, z }, theta) {
  const s = Math.sin(theta);
  const c = Math.cos(theta);

  return {
    x: x * c - z * s,
    y,
    z: x * s + z * c,
  };
}

// define all vertices
const vs = [
  { x: 0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: -0.25, z: 0.25 },

  { x: 0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },
];

// define all edges
const eds = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

let dz = 1;
let angle = 0;

// rendering function
function frame() {
  // dz += 1 * dt;
  angle += Math.PI * dt;

  // clear the canvas from provious frame
  clear();

  // render the vertices
  // for (const v of vs) {
  //   point(display(project(translate_z(rotate_y(v, angle), dz))));
  // }

  // render the edges
  for (const e of eds) {
    for (let i = 0; i < e.length; ++i) {
      const a = vs[e[i]];
      const b = vs[e[(i + 1) % e.length]];
      line(
        display(project(translate_z(rotate_y(a, angle), dz))),
        display(project(translate_z(rotate_y(b, angle), dz))),
      );
    }
  }

  setTimeout(frame, 1000 / FPS);
}

setTimeout(frame, 1000 / FPS);
