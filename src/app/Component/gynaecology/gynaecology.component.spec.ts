import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynaecologyComponent } from './gynaecology.component';

describe('GynaecologyComponent', () => {
  let component: GynaecologyComponent;
  let fixture: ComponentFixture<GynaecologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GynaecologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GynaecologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
