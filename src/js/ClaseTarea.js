export class Tarea{
    
    static fromJson({tarea,id,fecha,completado}){
        const contenedor = new Tarea(tarea);
        contenedor.id = id;
        contenedor.fecha = fecha;
        contenedor.completado=  completado;
        return contenedor;
    }



    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.fecha = new Date();
        this.completado = false;
    }

    mostrarTarea(){
        console.log(this.tarea);
    }
}


