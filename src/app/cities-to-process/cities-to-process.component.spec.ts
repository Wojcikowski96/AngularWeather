import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesToProcessComponent } from './cities-to-process.component';

describe('CitiesToProcessComponent', () => {
  let component: CitiesToProcessComponent;
  let fixture: ComponentFixture<CitiesToProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesToProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesToProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
