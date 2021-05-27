import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvaccineComponent } from './edit-vaccine.component';

describe('EditvaccineComponent', () => {
  let component: EditvaccineComponent;
  let fixture: ComponentFixture<EditvaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
