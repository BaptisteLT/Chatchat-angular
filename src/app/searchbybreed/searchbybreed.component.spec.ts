import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbybreedComponent } from './searchbybreed.component';

describe('SearchbybreedComponent', () => {
  let component: SearchbybreedComponent;
  let fixture: ComponentFixture<SearchbybreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbybreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbybreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
