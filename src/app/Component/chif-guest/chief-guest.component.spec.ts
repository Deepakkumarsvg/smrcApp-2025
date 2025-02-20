import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefGuestComponent } from './chief-guest.component';

describe('ChiefGuestComponent', () => {
  let component: ChiefGuestComponent;
  let fixture: ComponentFixture<ChiefGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiefGuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiefGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
