import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphistComponent } from './triphist.component';

describe('TriphistComponent', () => {
  let component: TriphistComponent;
  let fixture: ComponentFixture<TriphistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriphistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriphistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
