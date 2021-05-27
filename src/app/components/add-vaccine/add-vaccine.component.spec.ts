import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvaccineComponent } from './add-vaccine.component';

describe('AddvaccineComponent', () => {
  let component: AddvaccineComponent;
  let fixture: ComponentFixture<AddvaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
