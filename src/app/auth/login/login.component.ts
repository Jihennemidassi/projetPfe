import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup
  constructor(private fb: FormBuilder, private authService:AuthService, private route:Router){
    this.form=this.fb.group({
      role:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit(){
    this.authService.login(this.form.value).subscribe(data=>{
      console.log("data",data)
      this.route.navigateByUrl('/profile')
      document.cookie="token="+data.token
    })
  }
}
