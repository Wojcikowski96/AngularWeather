import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPredefinedCityComponent } from './select-predefined-city.component';

describe('SelectPredefinedCityComponent', () => {
  let component: SelectPredefinedCityComponent;
  let fixture: ComponentFixture<SelectPredefinedCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPredefinedCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPredefinedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
