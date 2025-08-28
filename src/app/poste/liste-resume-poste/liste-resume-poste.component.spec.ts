import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResumePosteComponent } from './liste-resume-poste.component';

describe('ListeResumePosteComponent', () => {
  let component: ListeResumePosteComponent;
  let fixture: ComponentFixture<ListeResumePosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeResumePosteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeResumePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
