import { Despacho } from "./despacho";
import { Envios } from "./envios";

export class DespachoEnvios {
    id:number=0;
    fechaEntrega:string='';
    observaciones:string='';
    despacho?:Despacho=new Despacho();
    envio:Envios =new Envios();
    entregado:boolean=false;
}
