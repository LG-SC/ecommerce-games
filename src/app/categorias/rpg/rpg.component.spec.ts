import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPGComponent } from './rpg.component';

describe('RPGComponent', () => {
  let component: RPGComponent;
  let fixture: ComponentFixture<RPGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
