import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsModelComponent } from './project-details-model.component';

describe('ProjectDetailsModelComponent', () => {
  let component: ProjectDetailsModelComponent;
  let fixture: ComponentFixture<ProjectDetailsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDetailsModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
