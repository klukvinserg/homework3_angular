import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLeterComponent } from './send-leter.component';

describe('SendLeterComponent', () => {
  let component: SendLeterComponent;
  let fixture: ComponentFixture<SendLeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
