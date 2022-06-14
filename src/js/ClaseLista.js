import {Tarea} from "./ClaseTarea";

export class ListaTareas{
    constructor (){
        //lo inicio cuando ya hay algo almacenado o cuando no hay nada.
       this.cargarLocalStorage();
    }

    crearTarea(tarea){
        this.tareas.push(tarea);
        this.guardarLocalStorage();
    }


    marcarCompletado(id){
        for(const array of this.tareas){
            if(array.id ==id){
                array.completado = !array.completado;
                this.guardarLocalStorage();
                break;
            }
        }
        

    }

    eliminarCompletado(id){
        this.tareas = this.tareas.filter(a=>a.id!= id);
        this.guardarLocalStorage();
    }

 
 borrarTodosCompletados(id){
    this.tareas = this.tareas.filter(a=>!a.completado);
    this.guardarLocalStorage();
 }



 guardarLocalStorage(){
        localStorage.setItem("key1",JSON.stringify(this.tareas));
 }


 cargarLocalStorage(){
        if(localStorage.getItem("key1")){
            this.tareas = JSON.parse(localStorage.getItem("key1"));
        }else{
            this.tareas=[];
        }

        
        this.tareas= this.tareas.map(a=> Tarea.fromJson(a));

 }
    
 
}


