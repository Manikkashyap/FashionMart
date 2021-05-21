import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandingweasternComponent } from './treandingweastern.component';

describe('TreandingweasternComponent', () => {
  let component: TreandingweasternComponent;
  let fixture: ComponentFixture<TreandingweasternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreandingweasternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreandingweasternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
