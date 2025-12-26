const BACKGROUND = "black";
const FOREGROUND = "green";

console.log(game);
game.width = 800;
game.height = 600;

const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, game.width, game.height);
}

function point(x, y) {
  const s = 10;
  ctx.fillStyle = FOREGROUND;
  ctx.fillRect(x, y, s, s);
}

clear();
point(100, 100);
