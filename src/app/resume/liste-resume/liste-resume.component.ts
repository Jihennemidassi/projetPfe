import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-liste-resume',
  templateUrl: './liste-resume.component.html',
  styleUrls: ['./liste-resume.component.css']
})
export class ListeResumeComponent implements OnInit {
  liste: any[] = []; // Initialize as empty array
  userId: string | null = null;
  show = false;
  showUpdate = false;
  CVId: number = 0;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.userId = this.getCookie('id');
    if (this.userId) {
      this.loadResumes();
    } else {
      console.error('User ID not found in cookies');
    }
  }

  private loadResumes(): void {
    this.resumeService.getResumeByCandidat(Number(this.userId)).subscribe(
      (response) => {
        console.log('API Response:', response); // Check the exact response structure
        
        // Handle both array and single object responses
        if (Array.isArray(response)) {
          this.liste = response;
        } else if (response) { // If it's a single object
          this.liste = [response]; // Wrap in array
        } else {
          this.liste = []; // Empty if no data
        }
        
        console.log('Liste after processing:', this.liste);
      },
      (error) => {
        console.error('Error loading resumes:', error);
      }
    );
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  // Rest of your methods remain the same...


  showModale(id: number) {
    this.show = true;
    this.CVId = id;
    console.log(this.show, id);
  }

  actionClose() {
    this.show = false;
    this.loadResumes(); // Reload the list after closing modal
  }

  actionSave() {
    this.show = false;
    this.loadResumes(); // Reload the list after saving
  }
}