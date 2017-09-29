// JavaScript Document

var volverPosicionScroll=0;	
var menuActivadoDesactivado=false;
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
	
	if(anchoVentana >= 769) {
		$('#fondoCabecera').css("position","static");
		$('nav').css("display","block");
		$("#contenedorCuerpo").css("display","flex");
		
		menuActivadoDesactivado=false;		//SI QUITO ESTO AL VOLVER DE ANCHO A
	}										//ESTRECHO SIGUE ABIERTO EL DESPLEGABLE
	
	
	else if (anchoVentana < 769 && menuActivadoDesactivado===false) {
		$('#fondoCabecera').css("position","fixed");
		$('nav').css("display","none");
		$('.nav_div_ul_li_ul').css("display","none");
	}
	
	else {
		$('#fondoCabecera').css("position","absolute");
		$('nav').css("display","block");
		$('.nav_div_ul_li_ul').css("display","none");
	}
}

window.onresize=mostrarOcultarBarra;
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////TERMINA CÓDIGO QUE ARREGLA LOS DESPLEGABLES POR EL ANCHO CON SCRIPT//////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////









/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EMPIEZA CÓDIGO QUE ARREGLA DESPLEGABLE TIENDA POR EL ANCHO CON SCRIPT//////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
"use strict";
	
	alert("Función lista esperando");
	
		$("#idLinkTienda").click(function () {
			
			alert("Ha entrado en el click");
			
      		var anchoPantallaParaTienda = window.innerWidth;
			
			alert(anchoPantallaParaTienda);
			
			if(anchoPantallaParaTienda<769){
				alert("Ha entrado en el if");
		
				$('.nav_div_ul_li_ul').each(function() {
					var tiendaActivarDesactivar = $(this).css("display");
					if(tiendaActivarDesactivar === "block") {
						$(this).css("display","none");
						alert("Tienda desactivada");
					}
					else {
						$(this).css("display","block");
						alert("Tienda activada");
					}
				});
			}
		});
		$("#idLinkTienda").hover(function () {
			
			alert("Ha entrado en el hover");
			
      		var anchoPantallaParaTienda = window.innerWidth;
			
			alert(anchoPantallaParaTienda);
			
			if(anchoPantallaParaTienda>=769){
				alert("Ha entrado en el if");
				
				$('.nav_div_ul_li_ul').each(function() {
					$(this).css("display","block");
						alert("Tienda activada");
				});
			};
		},
		function(){
			alert("Ha salido del hover");
			
			var anchoPantallaParaTienda = window.innerWidth;
			
			alert(anchoPantallaParaTienda);
			
			if(anchoPantallaParaTienda>=769){
				alert("Ha entrado en el if");
				
				$('.nav_div_ul_li_ul').each(function() {
					$(this).css("display","none");
						alert("Tienda desactivada");
				});
			}
		
		});
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////TERMINA CÓDIGO QUE ARREGLA DESPLEGABLE TIENDA POR EL ANCHO CON SCRIPT//////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////




//$(document).ready(function(){
//	"use strict";
//			$("#idLinkTienda").click(function () {
//				$('#nav_div_ul_li_ul').slideToggle();
//			});
//	});





//CÓDIGO PARA MOSTRAR RESOLUCIÓN DE PANTALLA CON UN CLICK (PUEDE SER ÚTIL)
$(document).ready(function(){
"use strict";
	

	
	$("#idLinkBolsa").click(
		function(){	
			alert(window.innerWidth + " x " + window.innerHeight);
		}
	);
});

