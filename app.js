    // Author: @rubdh
    // Cuando la página cargue, obtenemos el nombre del usuario y lo usamos para saludarle :)
    window.onload = function (){
        let nombre = window.prompt("¡Hola! Introduce tu nombre, por favor :)");
        document.getElementById("bienvenida").innerHTML = '¡Hola ' + nombre + '!';

        if(nombre == null){
            document.getElementById("bienvenida").innerHTML = '¡Hola ' + 'quien seas :)';
        }
    }

    // Creamos la función que evalúa la pregunta y según la palabra que contenga, obtendrá una respuesta u otra.
   function ai(){
       const pregunta = document.getElementById("pregunta").value;

        if (pregunta.indexOf("obsesión")){
           document.getElementById("respuesta").innerHTML = obsesion;
       }

       if (pregunta.indexOf("toc")){
           document.getElementById("respuesta").innerHTML = toc;
       }

       if (pregunta.indexOf("obsesión")){
           document.getElementById("respuesta").innerHTML = tocNoDuele;
       }
    }
