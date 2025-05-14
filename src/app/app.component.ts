import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  show : boolean=true
  constructor ( private route: Router){

  }
  ngOnInit(): void {
    this.route.events.subscribe((events:any)=>{
      if (events.url==="/auth" || events.url === "/auth/signup"){
        this.show=false
      }
      else{
        if(events.url==='/'){
          this.route.navigateByUrl("/auth")
          

        }
      }
    })  }
}
