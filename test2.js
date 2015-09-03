var i=1024;
var id = null;
var ctx = null;
function test2(ob) {
    ctx = ob.getContext("2d");
    console.log("HELLO");
	if ( i > 0 ) {
        i-=10; 
        ctx.fillStyle = "#"+i;
        ctx.fillRect(0,0, 120,  50);
        id = setTimeout(test2, 1000/60);
    } else {
        clearTimeout(id);
    }
}
