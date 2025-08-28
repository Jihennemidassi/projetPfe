import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // <-- Update import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CandidatModule } from './candidat/candidat.module';
import { ResumeModule } from './resume/resume.module';
import { PosteModule } from './poste/poste.module';
import { ProfileModule } from './profile/profile.module';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { RecruteurModule } from './recruteur/recruteur.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule,
    RecruteurModule, 
    CandidatModule,
    HttpClientModule, // Keep this
    ResumeModule, 
    PosteModule, 
    ProfileModule
  ],
  providers: [
    // Minimal interceptor (no new file needed)
    {
      provide: HTTP_INTERCEPTORS,
      useValue: {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
          const token = localStorage.getItem('token');
          if (token) {
            req = req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            });
          }
          return next.handle(req);
        }
      },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }