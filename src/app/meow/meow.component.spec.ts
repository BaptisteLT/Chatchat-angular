import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowComponent } from './meow.component';

describe('MeowComponent', () => {
  let component: MeowComponent;
  let fixture: ComponentFixture<MeowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
