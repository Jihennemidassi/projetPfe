// import { Component, Input } from '@angular/core';
// import { PosteService } from '../poste.service';

// @Component({
//   selector: 'app-liste-resume-poste',
//   templateUrl: './liste-resume-poste.component.html',
//   styleUrls: ['./liste-resume-poste.component.css']
// })
// export class ListeResumePosteComponent {
//  @Input() posteId!: number;
//   applicants: any[] = [];

//   constructor(private posteService: PosteService) {}

//   ngOnInit() {
//     this.loadApplicants();
//   }

//   loadApplicants() {
//     this.posteService.getApplicants(this.posteId).subscribe({

//       next: (resumes) => this.applicants = resumes,
//       error: (err) => console.error('Failed to load applicants', err)
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume/resume.service';

@Component({
  selector: 'app-liste-resume-poste',
  templateUrl: './liste-resume-poste.component.html',
  styleUrls: ['./liste-resume-poste.component.css']
})
export class ListeResumePosteComponent implements OnInit {
  resumes: any[] = [];
  isLoading = true;
  posteId: number = 1;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadResumes();
  }

  loadResumes(): void {
    this.resumeService.getTopResumeesForPoste(this.posteId).subscribe({
      next: (response) => {
        this.resumes = response; // Use raw API response directly
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading resumes:', err);
        this.isLoading = false;
      }
    });
// resumes: any;
//   posteId: number = 1; // You should get this from route params or service

//   constructor(private resumeService: ResumeService) {}

//   ngOnInit(): void {
//     this.loadResumes();
//   }

//   loadResumes(): void {
//     // Assuming your service has a method to get top resumes for a specific job posting
//     this.resumeService.getTopResumeesForPoste(this.posteId).subscribe({
//       next: (response) => {
//         this.resumes = this.transformResumeData(response);
//       },
//       error: (err) => {
//         console.error('Error loading resumes:', err);
//       }
//     });
//   }

//  private transformResumeData(data: any[]): any[] {
//   return data.map(resume => ({  // Changed from item.resume to direct resume object
//     idCV: resume.idCV || 0,
//     titreCV: resume.titreCV || 'Untitled Resume',
//     //experienceYears: this.calculateTotalExperience(resume.experienceMatching),
//     matchingRate: Math.min(Math.max(resume.matchingScore || 0, 0), 100), // Changed from item.score
//     //statusColor: this.getStatusColor(this.calculateTotalExperience(resume.experienceMatching)),
//     badgeColor: this.getBadgeColor(resume.titreCV || 'Default')
//   })).sort((a, b) => b.matchingRate - a.matchingRate);
// }

//   // private calculateTotalExperience(experienceMatching: any[]): number {
//   //   if (!experienceMatching || !Array.isArray(experienceMatching)) {
//   //     return 0;
//   //   }
//   //   return experienceMatching.reduce((total, exp) => total + (exp.nbExperience || 0), 0);
//   // }


//   private getStatusColor(experience: number): string {
//     if (experience >= 5) return 'bg-green-500';
//     if (experience >= 3) return 'bg-yellow-500';
//     return 'bg-red-500';
//   }

//   private getBadgeColor(titre: string): string {
//     // Simple hash for consistent colors
//     const hash = titre.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
//     const colors = [
//       'bg-blue-100 text-blue-800',
//       'bg-purple-100 text-purple-800',
//       'bg-green-100 text-green-800',
//       'bg-yellow-100 text-yellow-800',
//       'bg-red-100 text-red-800'
//     ];
//     return colors[hash % colors.length];
//   }

//   getProgressBarColor(matchingRate: number): string {
//     if (matchingRate >= 90) return 'bg-green-600'; // Excellent match
//     if (matchingRate >= 75) return 'bg-blue-600';  // Strong match
//     if (matchingRate >= 50) return 'bg-purple-600'; // Good match
//     if (matchingRate >= 25) return 'bg-yellow-600'; // Partial match
//     return 'bg-red-600'; // Weak match

  }
}
