import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiameterComponent } from './diameter.component';

describe('DiameterComponent', () => {
  let component: DiameterComponent;
  let fixture: ComponentFixture<DiameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
