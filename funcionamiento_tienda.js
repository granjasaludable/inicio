// JavaScript Document


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////CÓDIGO QUE FUNCIONA PARA MOSTRAR Y OCULTAR EN UN MISMO BOTÓN//////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
"use strict";
	
  $(document).ready(function(){
   $("#menu").click(function () {
      $('#contenedorLateral').each(function() {
        var displaying = $(this).css("display");
        if(displaying === "block") {
          
           $(this).css("display","none");
          
        } else {
         
            $(this).css("display","block");
          
        }
      });
	  $('nav').each(function() {
        var displaying = $(this).css("display");
        if(displaying === "block") {
          
           $(this).css("display","none");
          
        } else {
         
            $(this).css("display","block");
          
        }
      });
    });
  });
});


















//CÓDIGO PARA MOSTRAR RESOLUCIÓN DE PANTALLA (PUEDE SER ÚTIL)
$(document).ready(function(){
"use strict";
	
	$("#idLinkBolsa").click(
		function(){	
			alert(window.innerWidth + " x " + window.innerHeight);
		}
	);
});

