import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-delete-candidat',
  templateUrl: './delete-candidat.component.html',
  styleUrls: ['./delete-candidat.component.css']
})
export class DeleteCandidatComponent implements OnInit {
@Input("idCandidat")
idCandidat:number=0
@Output() 
close: EventEmitter<any> = new EventEmitter();
@Output() 
save: EventEmitter<any> = new EventEmitter();
constructor (private serviceCandidat : CandidatService){

}
ngOnInit(): void {
  console.log("idPoste delete",this.idCandidat)
  
}
colseAction(){
  this.close.emit(true)
}
saveAction(){
  this.save.emit(true)
    console.log("hello save", this.save)
    this.serviceCandidat.deleteCandidat(this.idCandidat).subscribe(ps=>{
      console.log(ps)
})
 this.close.emit(true)
}
}
