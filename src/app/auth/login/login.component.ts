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
      role: ['', [Validators.required]]
    });
  }

  // submit() {
  //   if (this.form.invalid) return;
  
  //   const credentials = {
  //     email: this.form.value.email,
  //     password: this.form.value.password
  //     // Remove role from credentials sent to backend
  //   };
  
  //   this.authService.login(credentials).subscribe({
  //     next: (res) => {
  //       console.log('Login successful', res);
  //       // Handle redirect or token storage here
  //     },
  //     error: (err) => {
  //       console.error('Login failed', err);
  //       this.errorMessage = 'Invalid email or password'; // Show user-friendly error
  //     }
  //   });
  // }
  submit() {
    const credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    };
  
    console.log('Sending:', credentials); // Verify payload
  
    this.authService.login(credentials).subscribe({
      next: (res:any) => {
        console.log('Login successful!', res);
        this.navigateByRole(res.role);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Error: ' + err.error?.message || 'Check console');
      }
    });
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.errorMessage = 'Invalid email or password';
    } else if (error.status === 0) {
      this.errorMessage = 'Network error - please check your connection';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }

  private navigateByRole(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/profile/home']);
        break;
      case 'recruteur':
        this.router.navigate(['/recruiter/profile-recruteur']);
        break;
      case 'candidat':
        this.router.navigate(['/candidate/profile-candidat']);
        break;
      default:
        this.router.navigate(['/home']);
    }
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