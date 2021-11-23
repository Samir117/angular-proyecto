import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonrisaComponent } from './sonrisa.component';

describe('SonrisaComponent', () => {
  let component: SonrisaComponent;
  let fixture: ComponentFixture<SonrisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonrisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonrisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
