import { Component, OnInit } from '@angular/core';

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
    public titles = document.querySelectorAll('.titleOn')
    public btnMenu = document.querySelector('.btn__menu')

  constructor() { 

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
    this.titles = document.querySelectorAll('.titleOn')
    this.btnMenu = document.querySelector('.btn__menu')

  }

  //Funcion para los submenu
  getSubMenu(){
      if(this.ulSubMenu?.classList.value == "sub_menu displ_on"){
        this.ulSubMenu!.classList.value = "sub_menu displ_off"
        this.iconSubMenu!.classList.value = "fas fa-arrow-down i_sub_menu"
    }else{
        this.ulSubMenu!.classList.value = "sub_menu displ_on"
        this.iconSubMenu!.classList.value = "fas fa-arrow-up i_sub_menu"
    }
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
      for(let i=0;i<this.titles.length;i++){
        this.titles[i].classList.value = "titleOff"
      }
  }else{
    this.aside!.classList.value = "aside menuOn"
    this.header!.classList.value = "header menuOn-2"
    this.dashboard!.classList.value = "dashboard menuOn-2"
    this.footer!.classList.value = "footer menuOn-2"
    this.btnMenu!.classList.value = "fas fa-bars fa-2x btn__menu btnMenuOn"
    this.nameUser!.classList.value = "name_user menuOn__Op"
    this.imgUser!.classList.value = "img_user menuOn__Op"
      for(let i=0;i<this.titles.length;i++){
        this.titles[i].classList.value = "titleOn"
      }
  }

  }
}


