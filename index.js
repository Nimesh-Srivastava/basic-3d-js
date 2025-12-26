const BACKGROUND = "black";
const FOREGROUND = "yellow";

console.log(game);
game.width = 800;
game.height = 600;

const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, game.width, game.height);
}

function point({ x, y }) {
  const s = 10;
  ctx.fillStyle = FOREGROUND;
  ctx.fillRect(x, y, s, s);
}

function project(p) {
  return {
    x: ((p.x + 1) / 2) * game.width,
    y: ((p.y + 1) / 2) * game.height,
  };
}

clear();
point(project({ x: 0, y: 0 }));
