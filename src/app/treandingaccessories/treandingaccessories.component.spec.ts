import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandingaccessoriesComponent } from './treandingaccessories.component';

describe('TreandingaccessoriesComponent', () => {
  let component: TreandingaccessoriesComponent;
  let fixture: ComponentFixture<TreandingaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreandingaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreandingaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
