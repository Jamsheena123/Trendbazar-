import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:StoreService,private route:Router){
    this.service.isloggedin()

  }
  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),

  })
  login(){
    if(this.loginForm.valid){
      let data=this.loginForm.value
      this.service.gettoken(data).subscribe(data=>{
        if ("token" in data){
          localStorage.setItem("token",`Token ${data.token}`)
          this.route.navigateByUrl("products")
        }
      })
    }
  }



}


