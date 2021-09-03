import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interfaces
import { ProductorInterface } from '../interfaces/productor.interface';
import { environment } from 'src/environments/environment';

//variables de entorno
const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor(private http:HttpClient) {

  }

  public crearProductor(dataProd:ProductorInterface){
    const url = `${base_url}productores`;

    return this.http.post<any>(url,dataProd);
  }

  public obtenerProductores(){
    const url =`${base_url}productores`;

    return this.http.get<any>(url)
  }

}
