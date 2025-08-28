import { Component } from '@angular/core';
import { RecruteurService } from '../recruteur.service';

@Component({
  selector: 'app-profile-recruteur',
  templateUrl: './profile-recruteur.component.html',
  styleUrls: ['./profile-recruteur.component.css']
})
export class ProfileRecruteurComponent {
 stats = {
    postes: 0,
    resumes:0,
    candidats: 0,

  };
  loading = true;

  constructor(private recruteurService: RecruteurService) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.loading = true;
  this.recruteurService.getStats().subscribe({
    next: (data: any) => {
      console.log('Stats data:', data); // Debug output
      this.stats = {
        postes: data.totalJobs,
        resumes:data.totalResumes,
        candidats: data.totalCandidates,
      };
      this.loading = false;
      
      // Log verification data
      console.log('Verification:', data.verification);
    },
    error: (err) => {
      console.error('Failed to load stats', err);
      this.loading = false;
    }
  });
}
}
