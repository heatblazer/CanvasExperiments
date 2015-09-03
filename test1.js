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

/* test1 */
	importScript("test2.js");
	init();

	buttons = buttons.map(function(obj) {
		obj.onclick=function(f) {
			console.log("YOU CLICKED ME: "+obj.id);
            if ( obj.id === "button1") test2(obj);
		}
		return obj;
	}); 

    /*
    for(var i=0; i < buttons.length; i++) {
        buttons[i].onclick = function(f) {
            console.log("YOU CLICKED A BUTTON:"+this.id+" Event:"+f);
            //associate buttons with the test funcion from test2.js 
            if ( buttons[i].id === "button1" ) console.log("XXXX");
        };
    } */
}
