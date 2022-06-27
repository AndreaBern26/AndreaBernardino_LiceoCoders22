   
    //Se ejecuta una vez que el navegador haya descargado TODOS los elementos de la página
        window.onload = function () {
              alert("cargado...");
        }
        //Esta línea sirve para hacer cosas cuando la página está lista para recibir instrucciones jQuery que modifiquen el DOM.
        $(document).ready(function(){
            //Constructor jquery
                $('h2').css('color', 'red');
                //Cambia a todas las etiquetas h2 el color a azul y el contenido a la frase indicada
                $('h2')
                    .css ('color','blue')
                    .text ('Cambiando el contenido a todos los elementos h2');
                
            //Con esta línea estamos seleccionando todas las etiquetas <a> del documento y definiendo un evento click sobre esos elementos.
                $("a").click(function(evento){
                //Con esta línea simplemente mostramos un mensaje de alerta informando al usuario que se ha hecho clic sobre el enlace.
                    alert("Has pulsado el enlace...Ahora serás enviado a Google.es");
                    //conseguimos que el link no lleve a ningún sitio, simplemente se ejecutará el código Javascript contenido para el evento click
                    evento.preventDefault();
                });                     
        });
        
       

