import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruteurComponent } from './add-recruteur.component';

describe('AddRecruteurComponent', () => {
  let component: AddRecruteurComponent;
  let fixture: ComponentFixture<AddRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
