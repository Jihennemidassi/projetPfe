import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RecruteurModule } from './recruteur/recruteur.module';
import { CandidatModule } from './candidat/candidat.module';
import {HttpClientModule } from '@angular/common/http';
import { ResumeModule } from './resume/resume.module';
import { PosteModule } from './poste/poste.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , AuthModule , CoreModule , RecruteurModule , CandidatModule,HttpClientModule , ResumeModule , PosteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
