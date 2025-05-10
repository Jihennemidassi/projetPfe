import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent {
  selectedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;
  isDragging = false;
  isLoading = false; 

  constructor(private resumeService: ResumeService ,  private router: Router) {
    
    
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  handleFile(file: File) {
    const validTypes = [
      'image/svg+xml', 
      'image/png', 
      'image/jpeg', 
      'image/gif',
      'application/pdf'
    ];
    
    if (!validTypes.some(type => file.type.includes(type.replace('*', '')))) {
      alert('Please select a valid file (SVG, PNG, JPG, GIF, or PDF)');
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`File size should not exceed ${this.formatFileSize(maxSize)}`);
      return;
    }

    this.selectedFile = file;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.filePreview = null;
    }
  }

  removeFile() {
    this.selectedFile = null;
    this.filePreview = null;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  uploadResume() {
    if (!this.selectedFile) {
      alert('Please select a file first');
      return;
    }
  
    this.isLoading = true;
  
    const formData = new FormData();
    formData.append('resume', this.selectedFile); // Field name must match backend
  
    this.resumeService.createResume(formData).subscribe({
      next: (response) => {
        console.log('Upload successful:', response);
        alert('Resume created successfully!');
      },
      error: (err) => {
        console.error('Upload error details:', err);
        if (err.status === 500) {
          alert('Server error. Please check console for details.');
        }
      },
      complete: () => this.isLoading = false
    });
  }

}