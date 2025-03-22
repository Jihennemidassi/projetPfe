import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecruteurComponent } from './liste-recruteur.component';

describe('ListeRecruteurComponent', () => {
  let component: ListeRecruteurComponent;
  let fixture: ComponentFixture<ListeRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
