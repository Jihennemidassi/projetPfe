import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResumeComponent } from './liste-resume.component';

describe('ListeResumeComponent', () => {
  let component: ListeResumeComponent;
  let fixture: ComponentFixture<ListeResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
