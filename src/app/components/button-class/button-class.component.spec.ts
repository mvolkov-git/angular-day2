import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClassComponent } from './button-class.component';

describe('ButtonClassComponent', () => {
  let component: ButtonClassComponent;
  let fixture: ComponentFixture<ButtonClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonClassComponent]
    });
    fixture = TestBed.createComponent(ButtonClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
