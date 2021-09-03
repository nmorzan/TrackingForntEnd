import { Component, OnInit } from '@angular/core';
import { Productor } from 'src/app/models/productor.model';
import { ProductoresService } from 'src/app/services/productores.service';

@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent implements OnInit {
  public productores!:any[];

  constructor(private productoresService:ProductoresService) { }

  ngOnInit(): void {
    this.productoresService.obtenerProductores().subscribe(
      resp=>{
        this.productores = resp.productoresDB;
      },error=>{
        console.log(error);
      })
  }

}
