// JavaScript Document

var volverPosicionScroll=0;	
var menuActivadoDesactivado=false;
var cancelarRetardo;
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EMPIEZA CÓDIGO QUE FUNCIONA PARA MOSTRAR Y OCULTAR EN UN MISMO BOTÓN//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
"use strict";
	$("#menu").click(function () {
      	$('#fondoCabecera').each(function() {
			var menuActivarDesactivar = $(this).css("position");
	  
       		if(menuActivarDesactivar === "fixed") {
          			$(this).css("position","absolute");
				
				menuActivadoDesactivado=true;
				
				volverPosicionScroll=window.scrollY;			//PARA SITUAR EL
				$("html, body").animate({scrollTop:"0px"}, 0);	// SCROLL DONDE ESTABA
				$("#contenedorCuerpo").css("display","none");
			}
			
			else {
				$(this).css("position","fixed");
				
				menuActivadoDesactivado=false;
				$("#contenedorCuerpo").css("display","flex");
			
				$("html, body").animate({scrollTop:volverPosicionScroll}, 0);	//PARA SITUAR EL
				volverPosicionScroll=0;											// SCROLL DONDE ESTABA
       		}
		});
			
		$('nav').each(function() {
			var menuActivarDesactivar = $(this).css("display");
			
       		if(menuActivarDesactivar === "block") {
          			$(this).css("display","none");
       		}
			
			else {
           		$(this).css("display","block");
       		}
		});
	});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////TERMINA CÓDIGO QUE FUNCIONA PARA MOSTRAR Y OCULTAR EN UN MISMO BOTÓN//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
//////////////////INTERACTÚAN EL DE ARRIBA Y EL DE ABAJO//////////////////
//////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EMPIEZA CÓDIGO QUE ARREGLA LOS DESPLEGABLES POR EL ANCHO CON SCRIPT//////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarOcultarBarra(){
"use strict";
	
	var anchoVentana=window.innerWidth;
	
	
	
	//////////ARREGLO PARA EL DESPLEGABLE DE LA TIENDA///////////
	if(anchoVentana >= 768) {
		$('#desplegableSuperior').css("position","absolute");
		
		var tiendaActivarDesactivar = $('#desplegableSuperior').css("visibility");
		
		if(tiendaActivarDesactivar === "visible") {
			$('#desplegableSuperior').css("visibility","hidden");
			$('#desplegableSuperior').css("height",0);
		}
	}										
	
	else {
		$('#desplegableSuperior').css("position","static");
	}
	//////////ARREGLO PARA EL DESPLEGABLE DE LA TIENDA///////////
	
	
	
	if(anchoVentana >= 769) {
		
		$('#fondoCabecera').css("position","static");
		$('nav').css("display","block");
		$("#contenedorCuerpo").css("display","flex");
		
		menuActivadoDesactivado=false;		//SI QUITO ESTO AL VOLVER DE ANCHO A
											//ESTRECHO SIGUE ABIERTO EL DESPLEGABLE
		
		
	
	}										
	
	else if (anchoVentana < 769 && menuActivadoDesactivado===false) {
		$('#fondoCabecera').css("position","fixed");
		$('nav').css("display","none");
	}
	
	else {
		$('#fondoCabecera').css("position","absolute");
		$('nav').css("display","block");
	}
}

window.onresize=mostrarOcultarBarra;
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////TERMINA CÓDIGO QUE ARREGLA LOS DESPLEGABLES POR EL ANCHO CON SCRIPT//////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////









//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EMPIEZA CÓDIGO QUE HACE DESPLEGABLE TIENDA POR EL ANCHO CON SCRIPT//////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
"use strict";
		
	$("#idTienda").click(function () {
      	var anchoPantallaParaTienda = window.innerWidth;
		
		if(anchoPantallaParaTienda<769){
			var tiendaActivarDesactivar = $('#desplegableSuperior').css("visibility");
		
			if(tiendaActivarDesactivar === "visible") {
				$('#desplegableSuperior').css("visibility","hidden");
				$('#desplegableSuperior').stop(true).animate({height:0},500);
			}
			
			else {
				$('#desplegableSuperior').css("visibility","visible");
				$('#desplegableSuperior').stop(true).animate({height:255},500);
			}
		}
	});
	
	$("#idTienda").mouseenter(function () {
      	var anchoPantallaParaTienda = window.innerWidth;
		
		if(anchoPantallaParaTienda>=768){
		
				cancelarRetardo=setTimeout(function() {
					$('#desplegableSuperior').css("visibility","visible");
					$('#desplegableSuperior').stop(true).animate({height:167},500);
				},1000);
				
		}
	});
	
	$("#idTienda").mouseleave(function () {
		var anchoPantallaParaTienda = window.innerWidth;
		
		if(anchoPantallaParaTienda>=768){
		
			$('#desplegableSuperior').css("visibility","hidden");
			$('#desplegableSuperior').stop(true).animate({height:0},0);
			clearTimeout(cancelarRetardo);
		}
	});
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////TERMINA CÓDIGO QUE HACE DESPLEGABLE TIENDA POR EL ANCHO CON SCRIPT//////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////





//CÓDIGO PARA MOSTRAR RESOLUCIÓN DE PANTALLA CON UN CLICK (PUEDE SER ÚTIL)
$(document).ready(function(){
"use strict";
	
	$("#idLinkBolsa").click(
		function(){	
			alert(window.innerWidth + " x " + window.innerHeight);
		}
	);
});

