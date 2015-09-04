var ctx = null;
var color = ["red", "green", "blue", "yellow", "#BADA55"];
var ind =0;
function paintRed(ob) {
    
    ctx = ob.getContext('2d');
	ctx.fillStyle = color[ind++ % color.length];
	ctx.fillRect(0, 0, ctx.canvas.width,
						ctx.canvas.height);
}


