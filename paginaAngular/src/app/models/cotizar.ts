export class cotizar{
    _id?: string;
    nombre: string;
    celular: number;
    correo: string;
    mensaje: string;

    constructor (nombre:string,celular:number,correo:string,mensaje:string){
        this.nombre = nombre
        this.celular=celular
        this.correo=correo
        this.mensaje=mensaje
    }

}