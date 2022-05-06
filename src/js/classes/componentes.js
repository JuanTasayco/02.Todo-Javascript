
import {Todo,TodoList} from "./index";


const divTodoList = document.querySelector(".todo-list")
const txtTarea = document.querySelector(".new-todo");

const todoList = new TodoList();



//todo este codigo agrega una tarea nueva.
export const generarHTML = (todo) =>{


    const ContenidoGeneral = `<li class="" data-id=${todo.id}>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? "checked" : ""}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> 
`

const div = document.createElement("DIV");

div.innerHTML = ContenidoGeneral;


divTodoList.appendChild(div);

return div;

}


//eventos

txtTarea.addEventListener("keyup", (event)=>{
  
    if(event.keyCode ===13 && txtTarea.value.length>0){

        const newTodo = new Todo(txtTarea.value);
        todoList.agregarElemento(newTodo);      
        txtTarea.value = "";
                       
        generarHTML(newTodo);


    }


});


divTodoList.addEventListener("click",(event)=>{

    
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const idElemento = todoElemento.getAttribute("data-id");
   
    console.log(nombreElemento);
    console.log(divTodoList);
    console.log(todoElemento);

    if(nombreElemento.includes("input")){

        todoList.marcarCompletado(idElemento);
        todoElemento.classList.toggle("completed");

    } else if(nombreElemento.includes("button")){

         todoList.eliminarCompletados(idElemento);  
        divTodoList.removeChild(todoElemento.parentElement);


    }


    console.log(todoList);
});