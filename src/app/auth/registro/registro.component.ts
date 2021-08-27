
import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from 'src/app/services/localidades.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public provincias!:any[];
  public localidades!:any[];

  constructor(public localidadesService:LocalidadesService) { }

  ngOnInit(): void {
    //cargo las provincias (viene misiones inicialmente)
    this.localidadesService.obtenerProvincias().subscribe(
      resp=>{
        this.provincias = resp.provincias;
      },error=>{
        console.log(error);
      })

      this.localidadesService.obtenerLocalidades('Misiones').subscribe(
        resp=>{
          this.localidades = resp.localidades;
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

}
