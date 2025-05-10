import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecruteurComponent } from './profile-recruteur.component';

describe('ProfileRecruteurComponent', () => {
  let component: ProfileRecruteurComponent;
  let fixture: ComponentFixture<ProfileRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
