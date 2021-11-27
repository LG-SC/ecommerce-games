import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaformerComponent } from './plaformer.component';

describe('PlaformerComponent', () => {
  let component: PlaformerComponent;
  let fixture: ComponentFixture<PlaformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
