import { TipoDocumento } from "./tipo-documento";

export class Usuarios {
    numeroDocumento:number=0;
    tipo: TipoDocumento =new TipoDocumento();
    nombre:string="";
    apellido:string="";
    direccion:string="";
    correo:string="";
    telefono:string="";
    usuario:string="";
    contrasenia:string="";
    enabled:boolean=true;
}
