import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipationComponent } from './create-participation.component';

describe('CreateParticipationComponent', () => {
  let component: CreateParticipationComponent;
  let fixture: ComponentFixture<CreateParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateParticipationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
