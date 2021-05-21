import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealbrandsComponent } from './dealbrands.component';

describe('DealbrandsComponent', () => {
  let component: DealbrandsComponent;
  let fixture: ComponentFixture<DealbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealbrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
