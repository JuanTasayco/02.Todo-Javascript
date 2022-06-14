import { Tarea } from "./ClaseTarea";
import { ListaTareas } from "./ClaseLista";

let inputTarea = document.querySelector(".new-todo");
const ulLista = document.querySelector(".todo-list");
export const listaTareas = new ListaTareas();

// completed es la case que marca la tarea.
export const insertarHTML=(tarea)=>{
    const div = document.createElement("div");
    const html = `<li data-id=${tarea.id} class="${(tarea.completado)? "completed" : ""}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(tarea.completado)? "checked" :""}>
        <label>${tarea.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`
    div.innerHTML = html;
    ulLista.appendChild(div.firstElementChild);
}



inputTarea.addEventListener("keyup",(event)=>{
    if(event.keyCode ==13 && inputTarea.value.length>0){
        const textoTarea = inputTarea.value;
        const tarea = new Tarea(textoTarea);
        listaTareas.crearTarea(tarea);  
        inputTarea.value = "";
        insertarHTML(tarea);
    }

})


ulLista.addEventListener("click",(event)=>{
 
    const li = event.target.parentElement.parentElement;
    const id = li.getAttribute("data-id");
    if(event.target.localName === "input"){
        listaTareas.marcarCompletado(id);
        li.classList.toggle("completed");
        
    }

    if(event.target.localName ==="button"){
       listaTareas.eliminarCompletado(id);
       ulLista.removeChild(li);
    }
   ;
})


const limpiarElementos=()=>{
    for(const elementos of ulLista.children){
        elementos.classList.remove("hidden");
    }
}


const todos = document.querySelector(".todos");
todos.addEventListener("click",(event)=>{
       limpiarElementos();
})
  

const pendientes = document.querySelector(".pendientes");
pendientes.addEventListener("click",()=>{
    limpiarElementos();
    for( const elementos of ulLista.children){
       if(elementos.classList.contains("completed")){
            elementos.classList.add("hidden");
       }
    }                    
});


const completados = document.querySelector(".completados");
completados.addEventListener("click",()=>{
    limpiarElementos();
    for(const elementos of ulLista.children){
        if(!elementos.classList.contains("completed")){
            elementos.classList.add("hidden");
        };
    }
});

const borrar = document.querySelector(".borrar");
borrar.addEventListener("click",()=>{
    limpiarElementos();
    listaTareas.borrarTodosCompletados();
    const lista = ulLista.children;
    for(let i=lista.length-1;i>=0;i--){ 
        console.log(lista[i]);
        if(lista[i].classList.contains("completed")){
            ulLista.removeChild(lista[i]);
        }
    }
});



