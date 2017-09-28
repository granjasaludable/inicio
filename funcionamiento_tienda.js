// JavaScript Document

var menuActivadoDesactivado=false;
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EMPIEZA CÓDIGO QUE FUNCIONA PARA MOSTRAR Y OCULTAR EN UN MISMO BOTÓN//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
"use strict";
	
		$("#menu").click(function () {
			
      		$('#fondoCabecera').each(function() {
				var menuActivarDesactivar = $(this).css("position");
		  
        		if(menuActivarDesactivar === "absolute") {
           			$(this).css("position","fixed");
					
					menuActivadoDesactivado=false;
				}
				
				else {
					$(this).css("position","absolute");
					
					menuActivadoDesactivado=true;
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
	
	if(anchoVentana >= 769) {
		
		$('#fondoCabecera').css("position","static");
		$('nav').css("display","block");
		
		menuActivadoDesactivado=false;		//SI QUITO ESTO AL VOLVER DE ANCHO A
	}										//ESTRECHO SIGUE ABIERTO EL DESPLEGABLE
	
	
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














//CÓDIGO PARA MOSTRAR RESOLUCIÓN DE PANTALLA CON UN CLICK (PUEDE SER ÚTIL)
$(document).ready(function(){
"use strict";
	
	$("#idLinkBolsa").click(
		function(){	
			alert(window.innerWidth + " x " + window.innerHeight);
		}
	);
});

