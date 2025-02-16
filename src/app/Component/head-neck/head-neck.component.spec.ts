import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNeckComponent } from './head-neck.component';

describe('HeadNeckComponent', () => {
  let component: HeadNeckComponent;
  let fixture: ComponentFixture<HeadNeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadNeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadNeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
