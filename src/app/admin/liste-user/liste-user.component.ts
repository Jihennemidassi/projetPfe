import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent {
   liste: any;
    l: any;
    constructor(private AdminService: AdminService){}
    ngOnInit(): void {
      this.AdminService.getListUser().subscribe(ps=>{  
        this.liste=ps[0]
        this.l=this.liste.length
        console.log(ps)
      })
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
