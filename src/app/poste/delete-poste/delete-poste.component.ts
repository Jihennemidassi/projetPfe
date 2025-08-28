import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PosteService } from '../poste.service';

@Component({
  selector: 'app-delete-poste',
  templateUrl: './delete-poste.component.html',
  styleUrls: ['./delete-poste.component.css']
})
export class DeletePosteComponent implements OnInit {
  @Input("idPoste")
idPoste:number=0
@Output() 
close: EventEmitter<any> = new EventEmitter();
@Output() 
save: EventEmitter<any> = new EventEmitter();
constructor (private servicePoste : PosteService){

}
ngOnInit(): void {
  console.log("idPoste delete",this.idPoste)
  
}
colseAction(){
  this.close.emit(true)
}
saveAction(){
  this.save.emit(true)
    console.log("hello save", this.save)
    this.servicePoste.deletePoste(this.idPoste).subscribe(ps=>{
      console.log(ps)
})
 this.close.emit(true)
}

}
