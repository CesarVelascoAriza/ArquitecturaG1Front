import { Roles } from "./roles";
import { TipoDocumento } from "./tipo-documento";

export class Usuarios {
    numeroDocumento:number=0;
    tipo: TipoDocumento =new TipoDocumento();
    nombre:string="";
    apellido:string="";
    direccion:string="";
    correo:string="";
    telefono:string="";
    username:string=null!;
    password:string=null!;
    enabled:boolean=true;
    roles:Roles[]=[]
    authorities:string[]=[]
}
