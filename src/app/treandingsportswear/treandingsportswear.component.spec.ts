import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandingsportswearComponent } from './treandingsportswear.component';

describe('TreandingsportswearComponent', () => {
  let component: TreandingsportswearComponent;
  let fixture: ComponentFixture<TreandingsportswearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreandingsportswearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreandingsportswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
