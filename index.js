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

ctx.fillStyle = FOREGROUND;
ctx.fillRect(0, 0, 100, 100);
