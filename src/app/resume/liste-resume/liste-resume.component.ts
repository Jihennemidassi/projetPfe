import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

interface Resume {
  id: number;
  title: string;
  experienceYears: number;
  matchingRate: number;
  lastUpdated: string;
  statusColor?: string; // Optional: for the status dot
  badgeColor?: string;  // Optional: for the title badge
}

@Component({
  selector: 'app-liste-resume',
  templateUrl: './liste-resume.component.html',
  styleUrls: ['./liste-resume.component.css']
})
export class ListeResumeComponent implements OnInit {
  resumes: Resume[] = [];
  isLoading = true;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadResumes();
  }

  loadResumes(): void {
    this.resumeService.getListResume().subscribe({
      next: (response) => {
        this.resumes = this.transformResumeData(response[0] || []);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading resumes:', err);
        this.isLoading = false;
      }
    });
  }

  private transformResumeData(data: any[]): Resume[] {
    return data.map(resume => ({
      id: resume.id || 0,
      title: resume.title || 'Untitled Resume',
      experienceYears: resume.experienceYears || 0,
      matchingRate: Math.min(Math.max(resume.matchingRate || 0, 0), 100),
      lastUpdated: this.formatLastUpdated(resume.lastUpdated),
      statusColor: this.getStatusColor(resume.experienceYears),
      badgeColor: this.getBadgeColor(resume.title)
    })).sort((a, b) => b.matchingRate - a.matchingRate);
  }

  private formatLastUpdated(dateString: string): string {
    // Implement your date formatting logic here
    return dateString || 'Unknown';
  }

  private getStatusColor(experience: number): string {
    if (experience >= 5) return 'bg-green-500';
    if (experience >= 3) return 'bg-yellow-500';
    return 'bg-red-500';
  }

  private getBadgeColor(title: string): string {
    // Simple hash for consistent colors
    const hash = title.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-purple-100 text-purple-800',
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800'
    ];
    return colors[hash % colors.length];
  }

  getProgressBarColor(matchingRate: number): string {
    if (matchingRate >= 80) return 'bg-blue-600';
    if (matchingRate >= 60) return 'bg-purple-600';
    if (matchingRate >= 40) return 'bg-green-600';
    return 'bg-red-600';
  }
}