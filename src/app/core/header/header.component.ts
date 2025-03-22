import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show=false
  showUpdate=false
  userId: number=0;
  showModale(){
    this.show=true  
}
actionClose(){
  this.show=false

}

}
