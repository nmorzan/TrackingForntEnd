import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class MenuService{

  constructor(){}

  public getMenu(role:String = "Productor"){
    const menu:any[] = [];
    if(role == "Productor"){
      menu.push({
        router: "",
        icon:"fas fa-home",
        icon2:false,
        title:"Home"
      },{
        router: "campos",
        icon:"fas fa-tractor",
        icon2:false,
        title:"Campos",
      },{
        icon:"fas fa-layer-group",
        icon2:true,
        title:"Tracking",
        subMenu:[{
          router: "tracking",
          icon:"fas fa-layer-group",
          icon2:false,
          title:"Info. tracking",
        },{
          router: "prodAlg",
          icon:"fab fa-cotton-bureau",
          icon2:false,
          title:"Producción algodón",
        },{
          router: "cosecha",
          icon:"fas fa-truck-moving",
          icon2:false,
          title:"Cosecha, transporte y acopio",
        },{
          router: "desmote",
          icon:"fas fa-industry",
          icon2:false,
          title:"Desmote",
        },{
          router: "analisisHvi",
          icon:"fas fa-flask",
          icon2:false,
          title:"Análisis HVI",
        },{
          router: "ventas",
          icon:"fas fa-shopping-cart",
          icon2:false,
          title:"Ventas",
        },]
      },{
        router: "configProd",
        icon:"fas fa-user-cog",
        icon2:false,
        title:"Configuraciones"
      })
    }
    
    if(role === "SuperAdministrador"){
      menu.push({
        router: "",
        icon:"fas fa-home",
        icon2:false,
        title:"Home"
      },{
        router: "configUser",
        icon:"fas fa-user-cog",
        icon2:false,
        title:"Configuraciones"
      },{
        router: "productores",
        icon:"fas fa-truck-moving",
        icon2:false,
        title:"Productores"
      })
    }

    return menu
  }

  

}