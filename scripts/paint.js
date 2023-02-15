'use strict';
import { checkAvg } from "./validate.js";
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCard = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante ').content;
    
    if (typ === 'ESTUDIANTE') {
        for (let i of students) {
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector(".title-card").innerHTML = "Datos del Estudiante";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellido.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.promedio}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.promedio)}`;
            fragment.appendChild(cloneTemp);
        }
    }else{

        //Profesor
    }

   cardE.appendChild(fragment);
};

const addStudent = (name, lastName,avg) => {
    //Objeto literal de JS
    let student = {
        nombre: name,
        apellido: lastName,
        promedio: avg
    }
    students.push(student);
    alert("Se agrego estudiante");

};

const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./img/X.png";
    img.setAttribute("class","close");
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function() {
        document.getElementById("alerta").remove();
    }
}
export{paintCard,addStudent,modalAlert};