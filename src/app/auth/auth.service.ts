import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<{id: number, role: string} | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialize from localStorage if available
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    if (userId && role) {
      this.currentUserSubject.next({
        id: +userId,
        role: role
      });
    }
  }

  sinscrire(userData: {
    email: string,
    mot_de_passe: string,
    role: string,
    prenom: string,
    nom: string,
    entreprise?: string
  }): Observable<any> {
    const payload = {
      ...userData,
      ...(userData.role === 'recruteur' && { entreprise: userData.entreprise })
    };
    return this.http.post('http://localhost:3000/auth/sinscrire', payload);
  }

  seConnecter(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post('http://localhost:3000/auth/seConnecter', {
      email: credentials.email,
      mot_de_passe: credentials.password
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('userId', response.id);
        this.currentUserSubject.next({
          id: response.id,
          role: response.role
        });
      })
    );
  }

  getCurrentUserId(): number | null {
    return this.currentUserSubject.value?.id || null;
  }

  getUserRole(): string | null {
    return this.currentUserSubject.value?.role || null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value && !!localStorage.getItem('token');
  }
}