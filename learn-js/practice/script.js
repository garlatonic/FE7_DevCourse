// DOM 초기화
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const colorBtns = document.querySelectorAll(".pallet button");
const eraserBtn = document.querySelector("#eraser");
const downloadBtn = document.querySelector("#download");

// 그리기 설정
let isDrawing = false;
let isErasing = false;

ctx.lineWidth = 1;
ctx.strokeStyle = "red";

// 이벤트 리스너
function startDrawing(e) {
	isDrawing = true;
	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
}
function drawing(e) {
	if (!isDrawing) return;
	if (isErasing) {
		// 지우개 코드
		ctx.clearRect(e.offsetX, e.offsetY, 20, 20);
	} else {
		// 그리기
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
	}
}
function stopDrawing() {
	isDrawing = false;
	ctx.closePath();
}

function changeColor(e) {
	ctx.strokeStyle = e.target.dataset.color;
	colorBtns.forEach((btn) => {
		if (btn === e.currentTarget) {
			btn.classList.add("selected");
		} else {
			btn.classList.remove("selected");
		}
	});
	isErasing = false;
	eraserBtn.classList.remove("selected");
}

function startErasing(e) {
	isErasing = true;
	e.currentTarget.classList.add("selected");
	colorBtns.forEach((btn) => {
		btn.classList.remove("selected");
	});
}

function downloadCanvas() {
	const img = canvas.toDataURL("image/png", 1.0);
	const linkEl = document.createElement("a");
	linkEl.href = img;
	linkEl.download = "PaintApp";
	linkEl.click();
}

// 이벤트 연결
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);
colorBtns.forEach((btn) => btn.addEventListener("click", changeColor));
eraserBtn.addEventListener("click", startErasing);
downloadBtn.addEventListener("click", downloadCanvas);
