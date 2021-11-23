import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicitaComponent } from './pedicita.component';

describe('PedicitaComponent', () => {
  let component: PedicitaComponent;
  let fixture: ComponentFixture<PedicitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedicitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedicitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
