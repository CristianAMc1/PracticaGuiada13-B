import { validateString,vAvg, checkAvg } from "./validate.js";
import{ paintCard, addStudent, modalAlert} from "./paint.js";

let btnAgregar = document.getElementById('btnAgregar');
const bntMostrar = document.getElementById('btnMostrar');

/* Generar eventos
    1.Colocando el metodo en el atributo onclick, onmauseover, onmauseout de la etiqueta.
    2.Mediante propiedad
*/


btnAgregar.onclick = function(){
    // console.log('Evento mediante propuedad');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    this.remove;

    //console.log(`${name} ${lastName} ${avg} ${op}`);

    if(validateString(name) && validateString(lastName) && op !=0){
        if((!isNaN(avg)) && (vAvg (avg))){
            addStudent(name, lastName,avg);
            modalAlert("Agregado")
        }else{
            document.querySelector('#promedio').value="";
            modalAlert("Promedio invalido");
        }
    }else{
        modalAlert("Datos invalidos, revisar los datos");
    }
}
bntMostrar.addEventListener("click", function() {
    paintCard("ESTUDIANTE");
});
