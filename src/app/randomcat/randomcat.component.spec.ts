import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcatComponent } from './randomcat.component';

describe('RandomcatComponent', () => {
  let component: RandomcatComponent;
  let fixture: ComponentFixture<RandomcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
