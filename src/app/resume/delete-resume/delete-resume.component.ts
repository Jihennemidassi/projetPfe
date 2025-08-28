import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-delete-resume',
  templateUrl: './delete-resume.component.html',
  styleUrls: ['./delete-resume.component.css']
})
export class DeleteResumeComponent implements OnInit {
@Input("idCV")
idCV:number=0
@Output() 
close: EventEmitter<any> = new EventEmitter();
@Output() 
save: EventEmitter<any> = new EventEmitter();
constructor (private serviceResume : ResumeService){

}
ngOnInit(): void {
  console.log("idCV delete",this.idCV)
  
}
colseAction(){
  this.close.emit(true)
}
saveAction(){
  this.save.emit(true)
    console.log("hello save", this.save)
    this.serviceResume.deleteResume(this.idCV).subscribe(ps=>{
      console.log(ps)
})
 this.close.emit(true)
}

}
