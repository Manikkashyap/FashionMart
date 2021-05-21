import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaydealsComponent } from './daydeals.component';

describe('DaydealsComponent', () => {
  let component: DaydealsComponent;
  let fixture: ComponentFixture<DaydealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaydealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaydealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
