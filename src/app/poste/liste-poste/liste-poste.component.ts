import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})
export class ListePosteComponent implements OnInit {
  ngOnInit(): void {
  }
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
