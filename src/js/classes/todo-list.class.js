

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
           

            if(list.id == id){
                //si la negacion es falso es true, y si es true es falso.
                list.completado = !list.completado;
               
                break;

            }
        }

    }



    eliminarCompletados(id){

        this.lista = this.lista.filter(element => element.id != id);
        console.log(this.lista);

    }

}