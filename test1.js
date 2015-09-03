/*globals, make a clojure class */
var ctx = null;
var buttons  = [];
//////////////////////////////////////////////////////////////////////
function importScript(name){
	var el = document.getElementById("include");
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = name;
	el.appendChild(script);
	script.onload = function(f) {
		console.log("Loaded :" + name + " succes!"+f);
        
	}
	
}

function init() {
	var ctxscene = document.getElementById("context_scene");
	for (var i=0; i < 4; i++) {
		ctxscene.innerHTML+= 
		'<div><canvas id="button'+i+'" width="120" height="50"style="border:1px solid black;position: relative;"></canvas></div>';
	}
    
    for(var i=0; i < 4; i++ ) 	buttons[i] = document.getElementById("button"+i);

	
}

window.onload = function(e) {

var r, g, b;
r = g= b = 200;
var id = null;
var ctx = null;

var foo = function(f) {
	ctx = f.getContext("2d");
	ctx.fillSytle = "green";
	ctx.fillRect(0, 0, 120, 60);
}


/* test1 */
	importScript("test2.js");
	init();

	buttons = buttons.map(function(obj) {
		if ( obj.id === "button1" ) {
			obj.onclick =  function() {
				foo(obj);
			}
		}else {
			obj.onclick=function(f) {
				console.log("YOU CLICKED ME: "+obj.id);
			}
		}
		return obj;
	}); 
	buttons[1].onclick = function() {
		//test2();
		var canv = document.getElementById("button1");
		var c= canv.getContext("2d");
		c.fillSytle = "#FF2012";
		c.fillRect(0, 0, 60, 10);
		console.log(c.fillSytle+"");
	}
    /*
    for(var i=0; i < buttons.length; i++) {
        buttons[i].onclick = function(f) {
            console.log("YOU CLICKED A BUTTON:"+this.id+" Event:"+f);
            //associate buttons with the test funcion from test2.js 
            if ( buttons[i].id === "button1" ) console.log("XXXX");
        };
    } */
}
