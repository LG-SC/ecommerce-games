import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPSComponent } from './fps.component';

describe('FPSComponent', () => {
  let component: FPSComponent;
  let fixture: ComponentFixture<FPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
