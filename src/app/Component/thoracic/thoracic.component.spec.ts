import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoracicComponent } from './thoracic.component';

describe('ThoracicComponent', () => {
  let component: ThoracicComponent;
  let fixture: ComponentFixture<ThoracicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoracicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoracicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
