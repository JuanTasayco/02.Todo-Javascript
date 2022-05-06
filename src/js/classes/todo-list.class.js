

export class TodoList {

    constructor(){

        this.lista = [];

    }


    agregarElemento(todo){

        this.lista.push(todo);
       
    }


    eliminarTodo (){

      this.lista = [];  

    }

    marcarCompletado (id){
        //id elemento 1 = 23123123
        for(const list of this.lista){
            console.log(id,list.id);

            if(list.id == id){
                //si la negacion es falso es true, y si es true es falso.
                list.completado = !list.completado;
                console.log("cambiado");
                break;

            }
        }

    }



    eliminarCompletados(id){

            if(this.completado == true){


            }



    }

}