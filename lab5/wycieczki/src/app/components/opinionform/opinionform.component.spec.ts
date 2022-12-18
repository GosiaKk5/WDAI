import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionformComponent } from './opinionform.component';

describe('OpinionformComponent', () => {
  let component: OpinionformComponent;
  let fixture: ComponentFixture<OpinionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
