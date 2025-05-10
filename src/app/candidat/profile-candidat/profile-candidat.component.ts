import { Component } from '@angular/core';
import { PosteService } from 'src/app/poste/poste.service';

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile-candidat.component.html',
  styleUrls: ['./profile-candidat.component.css']
})
export class ProfileCandidatComponent {
    liste: any;
    l: any;
    constructor(private posteService: PosteService){}
    ngOnInit(): void {
      this.posteService.getListPoste().subscribe(ps=>{  
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
