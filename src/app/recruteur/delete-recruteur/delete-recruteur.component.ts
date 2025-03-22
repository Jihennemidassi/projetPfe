import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecruteurService } from '../recruteur.service';

@Component({
  selector: 'app-delete-recruteur',
  templateUrl: './delete-recruteur.component.html',
  styleUrls: ['./delete-recruteur.component.css']
})
export class DeleteRecruteurComponent implements OnInit {
  @Input("idUser")
idUser:number=0
@Output() 
close: EventEmitter<any> = new EventEmitter();
@Output() 
save: EventEmitter<any> = new EventEmitter();
constructor(private recruteurService:RecruteurService){}
ngOnInit(): void {
  console.log("iduser delete",this.idUser)
  
}
colseAction(){
  this.close.emit(true)
}
saveAction(){
  this.save.emit(true)
  console.log("hello save", this.save)
  this.recruteurService.deleteRecruteur(this.idUser).subscribe(ps =>
    {
      console.log(ps)
    }
    )
  }
}
