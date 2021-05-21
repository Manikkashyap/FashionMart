import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandingindianComponent } from './treandingindian.component';

describe('TreandingindianComponent', () => {
  let component: TreandingindianComponent;
  let fixture: ComponentFixture<TreandingindianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreandingindianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreandingindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
