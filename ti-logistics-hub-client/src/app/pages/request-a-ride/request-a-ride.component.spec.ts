import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestARideComponent } from './request-a-ride.component';

describe('RequestARideComponent', () => {
  let component: RequestARideComponent;
  let fixture: ComponentFixture<RequestARideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestARideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestARideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
