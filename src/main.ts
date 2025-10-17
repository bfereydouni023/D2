import "./style.css";

const canvas = document.querySelector("canvas")!;
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext("2d")!;
const clearButton = document.getElementById("clear-button")!;
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const cursor = { x: 0, y: 0, isDown: false };

canvas.addEventListener("mousedown", (e) => {
  if (e.button !== 0) {
    return;
  }
  cursor.isDown = true;
  cursor.x = e.offsetX;
  cursor.y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  if (e.button !== 0) {
    return;
  }
  cursor.isDown = false;
  ctx.closePath();
});
canvas.addEventListener("mousemove", (e) => {
  if (!cursor.isDown) {
    return;
  }
  draw(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseleave", (_e) => {
  cursor.isDown = false;
  ctx.closePath();
});

function draw(x: number, y: number) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(cursor.x, cursor.y);
  ctx.lineTo(x, y);
  ctx.stroke();
  cursor.x = x;
  cursor.y = y;
}
