import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOfATripComponent } from './state-of-a-trip.component';

describe('StateOfATripComponent', () => {
  let component: StateOfATripComponent;
  let fixture: ComponentFixture<StateOfATripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateOfATripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOfATripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
