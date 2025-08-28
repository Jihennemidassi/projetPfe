import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  showEntrepriseField = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      role: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
      entreprise: ['']
    });

    // Dynamic field for recruiters
    this.form.get('role')?.valueChanges.subscribe(role => {
      this.showEntrepriseField = role === 'recruteur';
      const entrepriseControl = this.form.get('entreprise');
      if (role === 'recruteur') {
        entrepriseControl?.setValidators([Validators.required]);
      } else {
        entrepriseControl?.clearValidators();
      }
      entrepriseControl?.updateValueAndValidity();
    });
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

  submit() {

    if (this.form.valid) {
      this.authService.sinscrire(this.form.value).subscribe({
        next: (response) => {
          document.cookie = `token=${response.token}`;
          this.router.navigate(['/recruteur']);
        },
        error: (err) => {
          console.error('Signup failed:', err);
          // Add user-friendly error handling here
        }
      });
    }
  }
}