var ctx = null;

function paintBlue(ob) {
	ctx = ob.getContext('2d');
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 0, ctx.canvas.width,
						ctx.canvas.height);
}
