import { Component, OnInit } from '@angular/core';// Make sure this path matches your auth service location
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {
  // Define which items should be visible for each role
  visibleItems = {
    candidat: ['profile-candidat', 'cv', 'signout'],
    recruteur: ['profile-recruteur', 'add-offre', 'signout'],
    admin: ['utilisateurs','profile', 'offres', 'signout', 'signup'] // Example - adjust as needed
  };

  currentRole: string | null = null;
  showItem: { [key: string]: boolean } = {};

  constructor(private authService: AuthService) {} // Inject your auth service

  ngOnInit(): void {
    // Get current user role - adjust based on your auth service
    this.currentRole = this.authService.getUserRole(); // Implement this method in your auth service
    
    // Initialize visibility for all items
    this.updateItemVisibility();
  }

  private updateItemVisibility(): void {
    // Set visibility for each item based on role
    const items = ['utilisateurs','profile', 'offres','profile-candidat', 'add-offre' , 'cv', 'signout', 'signup'];
    items.forEach(item => {
      this.showItem[item] = this.visibleItems[this.currentRole as keyof typeof this.visibleItems]?.includes(item) || false;
    });
  }

  logout():void{
     this.authService.logout()
  }

  // Helper method to check if item should be shown
  shouldShow(itemName: string): boolean {
    return this.showItem[itemName] || false;
  }
}