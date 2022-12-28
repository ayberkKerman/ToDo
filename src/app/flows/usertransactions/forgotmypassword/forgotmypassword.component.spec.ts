import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotmypasswordComponent } from './forgotmypassword.component';

describe('ForgotmypasswordComponent', () => {
  let component: ForgotmypasswordComponent;
  let fixture: ComponentFixture<ForgotmypasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotmypasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotmypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
