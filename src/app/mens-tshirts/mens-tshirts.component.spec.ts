import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensTshirtsComponent } from './mens-tshirts.component';

describe('MensTshirtsComponent', () => {
  let component: MensTshirtsComponent;
  let fixture: ComponentFixture<MensTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensTshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
