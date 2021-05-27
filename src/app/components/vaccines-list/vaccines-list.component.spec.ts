import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { vaccinesListComponent } from './vaccines-list.component';

describe('vaccinesListComponent', () => {
  let component: vaccinesListComponent;
  let fixture: ComponentFixture<vaccinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ vaccinesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(vaccinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
