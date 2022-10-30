import { tipoDocumento } from "./tipoDocumento";

export class usuarios{

    numeroDocumento:number|undefined|null;
    tipo?: tipoDocumento|undefined|null;
    nombre?:string|undefined|null;
    apellido:string|undefined|null;
    direccion:string|undefined|null;
    correo:string|undefined|null;
    telefono:string|undefined|null;
    usuario:string|undefined|null;
    contrasenia:string|undefined|null;
    enabled:boolean=true;

}