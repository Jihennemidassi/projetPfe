import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  
  roles = [
    { value: 'candidat', label: 'Candidate' },
    { value: 'recruteur', label: 'Recruiter' },
    { value: 'admin', label: 'Admin' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    this.authService.seConnecter({
      email: this.form.value.email,
      password: this.form.value.password
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.status === 401 
          ? 'Invalid email or password' 
          : 'Login failed. Please try again.';
        return of(null);
      }),
      finalize(() => this.loading = false)
    ).subscribe(response => {
      console.log("repppppppppponse",response)
      if (response) {
        this.navigateByRole(response);
      }
    });
    return{}
  }

  private navigateByRole(data:any) {
  const routes: Record<string, string> = {
    admin: '/profile/home',
    recruteur: '/recruteur/profile-recruteur',
    candidat: '/candidat/profile-candidat'
  };
  const route = routes[data.role] || '/home';
  //cookies save data 
    document.cookie = `userRole=${data.role}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    document.cookie = `token=${data.acess_token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    document.cookie = `id=${data.id}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    document.cookie = `email=${data.email}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;


  this.router.navigate([route]);
}

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get role() { return this.form.get('role'); }
}