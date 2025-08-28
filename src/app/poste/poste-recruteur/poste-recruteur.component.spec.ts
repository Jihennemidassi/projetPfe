import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteRecruteurComponent } from './poste-recruteur.component';

describe('PosteRecruteurComponent', () => {
  let component: PosteRecruteurComponent;
  let fixture: ComponentFixture<PosteRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
