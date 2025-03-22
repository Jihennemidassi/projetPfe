import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PosteService } from '../poste.service';

@Component({
  selector: 'app-delete-poste',
  templateUrl: './delete-poste.component.html',
  styleUrls: ['./delete-poste.component.css']
})
export class DeletePosteComponent implements OnInit {
  @Input("idUser")
idUser:number=0
@Output() 
close: EventEmitter<any> = new EventEmitter();
@Output() 
save: EventEmitter<any> = new EventEmitter();
constructor (private servicePoste : PosteService){

}
ngOnInit(): void {
  console.log("iduser delete",this.idUser)
  
}
colseAction(){
  this.close.emit(true)
}

}
