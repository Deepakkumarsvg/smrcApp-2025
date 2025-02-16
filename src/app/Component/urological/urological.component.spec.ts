import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrologicalComponent } from './urological.component';

describe('UrologicalComponent', () => {
  let component: UrologicalComponent;
  let fixture: ComponentFixture<UrologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrologicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
