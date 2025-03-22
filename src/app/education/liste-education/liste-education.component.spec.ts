import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEducationComponent } from './liste-education.component';

describe('ListeEducationComponent', () => {
  let component: ListeEducationComponent;
  let fixture: ComponentFixture<ListeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
