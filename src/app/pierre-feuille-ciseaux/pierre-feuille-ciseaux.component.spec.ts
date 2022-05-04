import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierreFeuilleCiseauxComponent } from './pierre-feuille-ciseaux.component';

describe('PierreFeuilleCiseauxComponent', () => {
  let component: PierreFeuilleCiseauxComponent;
  let fixture: ComponentFixture<PierreFeuilleCiseauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PierreFeuilleCiseauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PierreFeuilleCiseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
