import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCComponent } from './tabla-c.component';

describe('TablaCComponent', () => {
  let component: TablaCComponent;
  let fixture: ComponentFixture<TablaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
