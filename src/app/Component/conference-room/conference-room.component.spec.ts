import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomComponent } from './conference-room.component';

describe('ConferenceRoomComponent', () => {
  let component: ConferenceRoomComponent;
  let fixture: ComponentFixture<ConferenceRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
