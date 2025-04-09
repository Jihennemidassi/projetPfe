import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSkillComponent } from './liste-skill.component';

describe('ListeSkillComponent', () => {
  let component: ListeSkillComponent;
  let fixture: ComponentFixture<ListeSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
