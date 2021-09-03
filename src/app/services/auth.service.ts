import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap} from "rxjs/operators";

//variables de entorno
import { environment } from "src/environments/environment";
//interfaces
import { loginData } from "../interfaces/login.interface";
//modelos
import { Productor } from "../models/productor.model";
import { Usuario } from "../models/usuario.model";

const base_url = environment.base_url

@Injectable({
  providedIn:"root"
})

export class AuthService{
  public productor!:Productor;
  public usuario!:Usuario;
  public prod!:boolean;
  public user!:boolean;

  constructor(public http: HttpClient){}

//Primero ingreso al login, pasamos por al canActive y vamos a renewToken
  public loginUser(formData:loginData){
    const url = `${base_url}login`;

    return this.http.post(url,formData).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token', resp.token)
      })
    )

  }

  get token(){
    return localStorage.getItem("token") || '';
  }

  public autenticarToken():Observable<boolean>{
    const url = `${base_url}login/renew`;
    this.prod = false;
    this.user = false;
    return this.http.get(url, {headers:{'x-token': this.token}
    }).pipe(
      map((resp:any)=>{localStorage.setItem('token', resp.token);
      if(resp.usuario){
        const {nombre,apellido,estado,img,mail,rol,telefono,_id} = resp.usuario;
        this.usuario = new Usuario(nombre,apellido,_id,mail,"",estado,rol,img,telefono);
        this.user = true
      }
      else{
        const {nombre,apellido,createdAt,estado,img,localidad,mail,provincia,nameEmpresa,rol,telefono,_id,productorNum} = resp.productor;
        this.productor = new Productor(nombre,apellido,_id,mail,nameEmpresa,provincia,localidad,"",estado,productorNum,rol,img,telefono,createdAt);
        this.prod = true
      }
      resp= true; return true} ),

      //si ocurre un error lo atrapo en este flujo y regreso un false
      catchError(error =>of(false))
    );
  }



}