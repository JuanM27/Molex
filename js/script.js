/***********************************************************************************************/
/* Web de Molex                                                                                */
/* JS del index                                                                               */
/* Autor: Juan Manuel Lanza Pérez                                                              */
/* Versión 1.0                                                                                 */
/***********************************************************************************************/

/*SCRIPT PARA LA BARRA DE NAVEGACION HAMBURGESA*/
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

