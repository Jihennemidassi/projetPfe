import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  stats = {
    users: 0,
    postes: 0,
    candidats: 0,
    recruteurs:0
  };
  loading = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.loading = true;
  this.profileService.getStats().subscribe({
    next: (data: any) => {
      console.log('Stats data:', data); // Debug output
      this.stats = {
        users: data.totalUsers,
        postes: data.totalJobs,
        recruteurs: data.totalRecruiters,
        candidats: data.totalCandidates
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
}}

