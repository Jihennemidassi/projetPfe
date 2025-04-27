import { Component } from '@angular/core';
import { Skill, SkillMatching } from '../models/skill.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosteService } from '../poste.service';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/skills/skills.service';
import { ExperienceService } from 'src/app/experience/experience.service';
import { ExperienceMatching } from '../models/experience.interface';

@Component({
  selector: 'app-add-poste',
  templateUrl: './add-poste.component.html',
  styleUrls: ['./add-poste.component.css']
})
export class AddPosteComponent {
  postForm: FormGroup;
  isSubmitting = false;
  availableSkills: any[] = [];
  skillsMatching: any[] = [];
  availableExperiences: any[] = [];
  experienceMatching: any[] = [];

  constructor(
    private fb: FormBuilder,
    private postService: PosteService,
    private router: Router,
    private skillService: SkillsService,
    private experienceService: ExperienceService
  ) {
    this.postForm = this.fb.group({
      title: [''],
      education: [''],
      experienceMatching: [''],
      createdAt: [''],
      skillsMatching: [[]], // Changed to array
      lastUpdate: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    this.postForm.patchValue({
      createdAt: today,
      lastUpdate: today
    });

    // Fetch skills from service
    this.skillService.getAllSkills().subscribe({
      next: (skills) => {
        console.log('Fetched skills:', skills[0]);
        this.availableSkills = skills[0];
    
      },
      
      error: (error) => {
        console.error('Error fetching skills:', error);
      }
    });
    this.experienceService.getAllExperiences().subscribe({
      next: (experiences) => {
        console.log('Fetched experiences:', experiences[0]);
        this.availableExperiences = experiences[0];
      },
      error: (error) => {
        console.error('Error fetching experiences:', error);
      }
    });


  }

  onSkillSelect(event: any): void {
    const selectedId = parseInt(event.target.value);
    const selectedSkill = this.availableSkills.find(skill => skill.id === selectedId);
     let skillMactching = new SkillMatching()
    skillMactching.idSkill = selectedSkill;
    if (selectedSkill && !this.skillsMatching.some(s => s.id === selectedId)) {
      this.skillsMatching.push(skillMactching);
      console.log('Selected skill:', this.skillsMatching);
      this.postForm.patchValue({ skillsMatching: this.skillsMatching });
    }
  }
  onExperienceSelect(event: any): void {
    const selectedId = parseInt(event.target.value);
    const selectedExperience = this.availableExperiences.find(exp => exp.id === selectedId);
    
    if (selectedExperience && !this.experienceMatching.some(e => e.idExperience === selectedId)) {
      const experienceMatching = new ExperienceMatching()
      experienceMatching.idExperience = selectedExperience;
      this.experienceMatching.push(experienceMatching);
      console.log('Selected experience:', this.experienceMatching);
      this.postForm.patchValue({ experienceMatching: this.experienceMatching });
    }
  }

  removeSkill(skillId: number): void {
    this.skillsMatching = this.skillsMatching.filter(skill => skill.id !== skillId);
    this.postForm.patchValue({ skills: this.skillsMatching });
  }
  
  removeExperience(experienceId: number): void {
    this.experienceMatching = this.experienceMatching.filter(experience => experience.id !== experienceId);
    this.postForm.patchValue({ experience: this.experienceMatching });
  }

  Submit(){
    console.log(this.postForm.value)
    this.postService.createPoste(this.postForm.value).subscribe(ps=>{
      console.log(ps)
    })
  }

  onCancel(): void {
    if (this.postForm.dirty) {
      if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
        this.router.navigate(['/posts']);
      }
    } else {
      this.router.navigate(['/posts']);
    }
  }

}
