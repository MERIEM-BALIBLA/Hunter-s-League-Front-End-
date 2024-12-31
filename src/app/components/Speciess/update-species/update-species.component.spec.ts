import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpeciesComponent } from './update-species.component';

describe('UpdateSpeciesComponent', () => {
  let component: UpdateSpeciesComponent;
  let fixture: ComponentFixture<UpdateSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpeciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
