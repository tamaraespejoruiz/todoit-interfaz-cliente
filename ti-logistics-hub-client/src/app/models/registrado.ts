import { Rol } from "./rol";

export  interface Registrado  {
  id?:number;
  email:string;
  fullName:string;
  address:string;
  cellPhone:string;
  isAccepted?:boolean;
  isDeleted?:boolean;
  observations:string;
  password:string;
  vehicle?:string;
  rol?:Rol;
}