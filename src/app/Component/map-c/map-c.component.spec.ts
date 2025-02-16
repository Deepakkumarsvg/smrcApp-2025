import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCComponent } from './map-c.component';

describe('MapCComponent', () => {
  let component: MapCComponent;
  let fixture: ComponentFixture<MapCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
