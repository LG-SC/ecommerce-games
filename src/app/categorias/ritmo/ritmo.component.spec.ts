import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmoComponent } from './ritmo.component';

describe('RitmoComponent', () => {
  let component: RitmoComponent;
  let fixture: ComponentFixture<RitmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitmoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
