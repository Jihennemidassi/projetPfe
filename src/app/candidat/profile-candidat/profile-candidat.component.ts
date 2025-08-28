import { Component } from '@angular/core';
import { Skill } from 'src/app/poste/models/skill.interface';
import { PosteService } from 'src/app/poste/poste.service';
import { ResumeService } from 'src/app/resume/resume.service';

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile-candidat.component.html',
  styleUrls: ['./profile-candidat.component.css']
})
export class ProfileCandidatComponent {
  liste: any;
  show = false;
  selectedPoste: any; // Stores the complete poste object
  hasCV: boolean = false; // Track if candidate has uploaded CV
  userId: string | null = null; // Store candidate ID
  cvId: number | null = null; // Stores the CV ID

  constructor( private resumeService:ResumeService, private posteService: PosteService, private cvService:ResumeService) {}

  ngOnInit(): void {
    this.userId = this.getCookie('id');
    this.loadCV();
  this.checkCVStatus();
    this.posteService.getListPoste().subscribe(ps => {
      this.liste = ps[0];
    });
  }
 private loadCV() {
  if (!this.userId) {
    console.error('User ID is missing!');
    return;
  }

  console.log('Fetching CV for user ID:', this.userId); // Debug
  this.resumeService.getResumeByCandidat(Number(this.userId)).subscribe({
    next: (resume) => {
      console.log('API Response:', resume); // ⚠️ Check if `idCV` exists here
      if (resume?.idCV) {
        this.cvId = resume.idCV;
        this.hasCV = true;
        console.log('CV loaded. ID:', this.cvId); // Debug
      } else {
        console.warn('No CV found for user:', this.userId); // Debug
        this.hasCV = false;
      }
    },
    error: (err) => {
      console.error('API Error:', err); // Debug
      this.hasCV = false;
    }
  });
}
   private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  checkCVStatus() {
    if (!this.userId) return;
    
    
  }

  showModale(poste: any) {
    this.selectedPoste = poste;
    console.log(".selectedPoste ",this.selectedPoste )
    
    this.show = true;
  }

  actionClose() {
    this.show = false;
  }

   postuler() {
    if (!this.selectedPoste || !this.cvId) {
      alert('You must upload a CV before applying!');
      return;
    }

    this.posteService.postuler(this.selectedPoste.idPoste, this.cvId).subscribe({
      next: () => {
        alert('Application sent successfully!');
        this.show = false;
      },
      error: (err) => {
        console.error('Application failed:', err);
        alert('Error: Could not submit application.');
      }
    });
  }

}