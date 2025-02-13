import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAddComponent } from './welcome-add.component';

describe('WelcomeAddComponent', () => {
  let component: WelcomeAddComponent;
  let fixture: ComponentFixture<WelcomeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
