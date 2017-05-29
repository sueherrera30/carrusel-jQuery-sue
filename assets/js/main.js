

/*almaceno elementos*/
jQuery(document).ready(function(){
	

var carrusel = $("#carrusel");
var siguiente= $("#siguiente");
var atras = $("#atras");

/*mover divs y orden de imagenes*/  
$("#carrusel div:last").insertBefore("#carrusel div:first");


carrusel.css("margin-left","-"+ 100 +"%");

function moverUno(){
carrusel.animate({
	marginLeft:"-"+200+"%"
} ,700,function(){
	 $("#carrusel div:first").insertAfter("#carrusel div:last");
	carrusel.css("margin-left","-"+100+"%");
});
}

function moverDos(){
carrusel.animate({
	marginLeft:0
} ,700,function(){
	$("#carrusel div:last").insertBefore("#carrusel section:first");
	carrusel.css("margin-left", "-"+100+"%");
	
	 
});
}


siguiente.on("click",function(){
	moverUno();
})

atras.on("click",function(){
	moverDos();
})
/*
para hacerlo automatico*/

function solito(){
 interval = setInterval(function(){
	 moverUno();
	},5000)}

solito();

	});
