import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http:HttpClient) {

   }

   public obtenerProvincias(){
    return this.http.get<any>('https://apis.datos.gob.ar/georef/api/provincias')
   }

   public obtenerLocalidades(provincia:String){
     const url =`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&campos=id,nombre&max=1000`;
     return this.http.get<any>(url)
   }
}
