import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeslidesComponent } from './homeslides.component';

describe('HomeslidesComponent', () => {
  let component: HomeslidesComponent;
  let fixture: ComponentFixture<HomeslidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeslidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeslidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
