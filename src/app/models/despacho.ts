import { DespachoEnvios } from "./despacho-envios";
import { Estado } from "./estado";
import { Vehiculo } from "./vehiculo";

export class Despacho {
    id:number=0;
    fechaDespacho:string='';
    origen:string='';
    destino:string='';
    vehiculo:Vehiculo=new Vehiculo();
    observaciones:string='';
    estadoDespacho:Estado = new Estado();
    despachos?:DespachoEnvios[]=[];
}
