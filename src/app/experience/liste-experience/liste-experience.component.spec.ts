import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExperienceComponent } from './liste-experience.component';

describe('ListeExperienceComponent', () => {
  let component: ListeExperienceComponent;
  let fixture: ComponentFixture<ListeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
