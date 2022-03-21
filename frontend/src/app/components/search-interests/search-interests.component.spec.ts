import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInterestsComponent } from './search-interests.component';

describe('SearchInterestsComponent', () => {
  let component: SearchInterestsComponent;
  let fixture: ComponentFixture<SearchInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
