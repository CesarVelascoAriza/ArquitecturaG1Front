import { Marca } from "./marca";
import { MedioTransporte } from "./medio-transporte";

export class Vehiculo {
    id?:number=0;
    placa:string = "";
    marca:Marca=new Marca();
    medio:MedioTransporte =new MedioTransporte();
}
