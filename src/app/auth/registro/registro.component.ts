
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Servicios
import { LocalidadesService } from 'src/app/services/localidades.service';
import { ProductoresService } from 'src/app/services/productores.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public provincias!:any[];
  public localidades!:any[];

  public registerEmited:boolean = false;

  public registerForm = this.fb.group({
    nombre:["",[Validators.required]],
    apellido:["",[Validators.required]],
    mail:["",[Validators.required, Validators.email]],
    nameEmpresa:["",[Validators.required]],
    provincia:["",[Validators.required]],
    localidad:["",[Validators.required]],
    password:["",[Validators.required]],
    repassword:["",[Validators.required]],
    telefono:["",[]]
  })

  constructor(public localidadesService:LocalidadesService,
              public fb: FormBuilder,
              public productorService:ProductoresService,
              public router:Router) { }

  ngOnInit(): void {
    this.registerEmited=false
    //cargo las provincias (viene misiones inicialmente)
    this.localidadesService.obtenerProvincias().subscribe(
      resp=>{
        this.provincias = resp.provincias;
      },error=>{
        console.log(error);
      })
  }

  public obtenerLocalidades(provincia:String){

    this.localidadesService.obtenerLocalidades(provincia).subscribe(
      resp=>{
        this.localidades = resp.localidades;
      },error=>{
        console.log(error);
      })
  }

  public registerUser(){
    this.registerEmited = true;
    if(this.registerForm.valid && this.registerEmited == true){
      if(!this.compararPass()){
        console.log("Enviando formulario");
        this.productorService.crearProductor(this.registerForm.value).subscribe(
          resp=>{
            localStorage.removeItem('token');
            localStorage.setItem('token', resp.token)
            this.router.navigateByUrl("")
          },error=>{  
            console.log(error);
          })
      }else{
        console.log("Formulario invalido");
      }
    }else{
      console.log("Formulario invalido");
    }
  }

  public controlCampo(campo:string):boolean{
    if(!this.registerForm.get(campo)?.valid && this.registerEmited === true){
      return true
    }else{
      return false
    }
  }

  public compararPass():boolean{
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('repassword')?.value

    if((pass1 !== pass2) && this.registerEmited === true){
      return true
    }else{
      return false
    }
  }
}
