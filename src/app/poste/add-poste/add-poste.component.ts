import { Component } from '@angular/core';
import { Skill, SkillMatching } from '../models/skill.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosteService } from '../poste.service';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/skills/skills.service';
import { ExperienceService } from 'src/app/experience/experience.service';
import { ExperienceMatching } from '../models/experience.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-poste',
  templateUrl: './add-poste.component.html',
  styleUrls: ['./add-poste.component.css']
})
export class AddPosteComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PosteService,
    private router: Router,
    private auth:AuthService
  ) {
    this.postForm = this.fb.group({
      titrePoste: [''],
      education: [''],
      experience: [''],
      createdAt: [''],
      skills: [[]], // Changed to array
      lastUpdate: [''],
      descriptionPoste: ['']
    });
  }
  skillsInput: string = '';
selectedSkills: string[] = [];

addSkill() {
  if (this.skillsInput && !this.selectedSkills.includes(this.skillsInput)) {
    this.selectedSkills.push(this.skillsInput);
    this.skillsInput = '';
    this.postForm.patchValue({ skills: this.selectedSkills });
  }
}

removeSkill(skill: string) {
  this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
  this.postForm.patchValue({ skills: this.selectedSkills });
}



  ngOnInit(): void {
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    this.postForm.patchValue({
      createdAt: today,
      lastUpdate: today
    });

  }

 Submit() {
  const postData = {
    ...this.postForm.value,
    skills: this.selectedSkills // Already an array of skill names
  };

  this.postService.createPoste(postData).subscribe({
    next: (response) => this.router.navigate(['/profile-recruteur']),
    error: (error) => console.error('Error:', error)
  });
}

  onCancel(): void {
    if (this.postForm.dirty) {
      if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
        this.router.navigate(['/poste']);
      }
    } else {
      this.router.navigate(['/poste']);
    }
  }

}
