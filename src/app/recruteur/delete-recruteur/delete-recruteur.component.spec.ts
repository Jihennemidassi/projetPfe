import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecruteurComponent } from './delete-recruteur.component';

describe('DeleteRecruteurComponent', () => {
  let component: DeleteRecruteurComponent;
  let fixture: ComponentFixture<DeleteRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
