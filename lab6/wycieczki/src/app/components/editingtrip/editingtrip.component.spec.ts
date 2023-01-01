import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingtripComponent } from './editingtrip.component';

describe('EditingtripComponent', () => {
  let component: EditingtripComponent;
  let fixture: ComponentFixture<EditingtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingtripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
