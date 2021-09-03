import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//servicios
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginSubscribed = false;

  public formLogin = this.fb.group({
    mail:[localStorage.getItem('mail') || '',[Validators.required, Validators.email]],
    password:['',[Validators.required]],
    remember:[false]
  })

  constructor(private fb : FormBuilder,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public login(){
    this.loginSubscribed = true;
    if(this.formLogin.valid){
        if(this.formLogin.get('remember')?.value){
          localStorage.setItem('mail', this.formLogin.get('mail')?.value)
        }
        this.authService.loginUser(this.formLogin.value).subscribe(
          resp=>{
            this.router.navigateByUrl("")
          },error=>{
            Swal.fire(error.error.msg,"","error")
          })
    }else{
    }
    
  }

    //mensajes de error
    public campoNoValido(campo:string):boolean{
      if(!this.formLogin.get(campo)?.valid && this.loginSubscribed==true){
        return true;
      }else{
        return false;
      }
    }
}
