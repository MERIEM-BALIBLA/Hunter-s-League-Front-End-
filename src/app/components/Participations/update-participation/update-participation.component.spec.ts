import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParticipationComponent } from './update-participation.component';

describe('UpdateParticipationComponent', () => {
  let component: UpdateParticipationComponent;
  let fixture: ComponentFixture<UpdateParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParticipationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
