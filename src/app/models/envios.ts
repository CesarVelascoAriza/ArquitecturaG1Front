import { Ciudad } from "./ciudad";
import { Estado } from "./estado";
import { Usuarios } from "./usuarios"

export class Envios {
    id:number=0;
    fechaCreacion? :string="";
    descripcionEnvio:string="";
    usuarioEmisor:Usuarios = new Usuarios;
    usuarioReceptor:Usuarios = new Usuarios;
    ciudadOrigen: Ciudad =new Ciudad;
    ciudadDestino: Ciudad =new Ciudad;
    precio:number =0;
    estado:Estado= new Estado();
}
