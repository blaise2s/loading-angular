import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualRingComponent } from './dual-ring.component';

describe('DualRingComponent', () => {
  let component: DualRingComponent;
  let fixture: ComponentFixture<DualRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DualRingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
