import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HySSComponent } from './hy-ss.component';

describe('HySSComponent', () => {
  let component: HySSComponent;
  let fixture: ComponentFixture<HySSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HySSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HySSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
