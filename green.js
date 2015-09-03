var ctx = null;

function paintGreen(ob) {
	ctx = ob.getContext('2d');
	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, ctx.canvas.width,
						ctx.canvas.height);
}
