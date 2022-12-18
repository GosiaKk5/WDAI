import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletripComponent } from './singletrip.component';

describe('SingletripComponent', () => {
  let component: SingletripComponent;
  let fixture: ComponentFixture<SingletripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
