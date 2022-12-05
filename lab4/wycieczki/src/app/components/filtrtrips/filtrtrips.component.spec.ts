import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrtripsComponent } from './filtrtrips.component';

describe('FiltrtripsComponent', () => {
  let component: FiltrtripsComponent;
  let fixture: ComponentFixture<FiltrtripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrtripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrtripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
