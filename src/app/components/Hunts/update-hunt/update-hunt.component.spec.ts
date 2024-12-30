import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHuntComponent } from './update-hunt.component';

describe('UpdateHuntComponent', () => {
  let component: UpdateHuntComponent;
  let fixture: ComponentFixture<UpdateHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateHuntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
