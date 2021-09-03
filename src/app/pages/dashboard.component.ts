import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//modelos
import { Productor } from '../models/productor.model';
import { Usuario } from '../models/usuario.model';

//servicios
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  //Variables del DOM para hacer el menu plegable
    public ulSubMenu = document.querySelector('.sub_menu')
    public iconSubMenu = document.querySelector('.i_sub_menu')
    public btnSubMenu = document.querySelector('.act_sub_menu')
    public aside = document.querySelector('.aside')
    public header = document.querySelector('.header')
    public dashboard = document.querySelector('.dashboard')
    public footer = document.querySelector('.footer')
    public imgUser = document.querySelector('.img_user')
    public nameUser = document.querySelector('.name_user')
    public btnMenu = document.querySelector('.btn__menu')
  //variables para usuarios
    public usuario!:Usuario;
    public productor!:Productor;
    public nombre!:String;
    public apellido!:String;

    //menu
    public menu!: any[];
    public ver:string = "titleOn"
    public icon2:string = "fas fa-arrow-down i_sub_menu"
    public subMenu:string = "sub_menu displ_off"
    public rutaAct:string = "active"
    public rutaInact:string = "inactive"

    //submenu
    public title!:string;
    public flecha:string="fas fa-arrow-down"

  constructor(private router: Router,
              private authService: AuthService,
              private menuService: MenuService) { 

  }
  ngOnInit(): void {
    //Iniciamos variables cuando el componente se inicia
    this.ulSubMenu = document.querySelector('.sub_menu')
    this.iconSubMenu = document.querySelector('.i_sub_menu')
    this.btnSubMenu = document.querySelector('.act_sub_menu')
    this.aside = document.querySelector('.aside')
    this.header = document.querySelector('.header')
    this.dashboard = document.querySelector('.dashboard')
    this.footer = document.querySelector('.footer')
    this.imgUser = document.querySelector('.img_user')
    this.nameUser = document.querySelector('.name_user')
    this.btnMenu = document.querySelector('.btn__menu')

    if(this.authService.user){
      this.usuario = this.authService.usuario;
      this.nombre = this.usuario.nombre;
      this.apellido = this.usuario.apellido;
      this.getMenu(this.usuario.rol!)
    }else{
      this.productor = this.authService.productor;
      this.nombre = this.productor.nombre;
      this.apellido = this.productor.apellido;
      this.getMenu(this.productor.rol!)
    }



  }
  //obtener menu
  getMenu(role:String){
    this.menu = this.menuService.getMenu(role);

  }

  //Funcion para los submenu
  getSubMenu(verSub:any){
    this.title = verSub.title;
    if(verSub.icon2){
      if(this.subMenu == "sub_menu displ_off"){
        this.subMenu = "sub_menu displ_on"
        this.flecha = "fas fa-arrow-up"
      }else{
        this.subMenu = "sub_menu displ_off"
        this.flecha = "fas fa-arrow-down"
      }
    }else{
      this.subMenu = "sub_menu displ_off"
      this.flecha = "fas fa-arrow-down"
    }
  }

  enrutar(ruta:string){
    console.log(ruta);
    this.router.navigateByUrl(ruta)
  }

    //Funcion para el esconder el menu
    viewMenu(){
      if(this.aside?.classList.value == "aside menuOn"){
        this.aside.classList.value = "aside menuOff"
        this.header!.classList.value = "header menuOff-2"
        this.dashboard!.classList.value = "dashboard menuOff-2"
        this.footer!.classList.value = "footer menuOff-2"
        this.btnMenu!.classList.value = "fas fa-bars fa-2x btn__menu btnMenuOff"
        this.nameUser!.classList.value = "name_user menuOff__Op"
        this.imgUser!.classList.value = "img_user menuOff__Op"
        this.ver = "titleOff"
    }else{
      this.aside!.classList.value = "aside menuOn"
      this.header!.classList.value = "header menuOn-2"
      this.dashboard!.classList.value = "dashboard menuOn-2"
      this.footer!.classList.value = "footer menuOn-2"
      this.btnMenu!.classList.value = "fas fa-bars fa-2x btn__menu btnMenuOn"
      this.nameUser!.classList.value = "name_user menuOn__Op"
      this.imgUser!.classList.value = "img_user menuOn__Op"
      this.ver = "titleOn"
    }
  }

  public logout(){
    localStorage.removeItem('token');
    return this.router.navigateByUrl('login');
  }
}


