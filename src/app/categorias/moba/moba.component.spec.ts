import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOBAComponent } from './moba.component';

describe('MOBAComponent', () => {
  let component: MOBAComponent;
  let fixture: ComponentFixture<MOBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOBAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
