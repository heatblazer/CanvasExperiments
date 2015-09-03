var ctx = null;

function paintRed(ob) {
	ctx = ob.getContext('2d');
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, ctx.canvas.width,
						ctx.canvas.height);
}
