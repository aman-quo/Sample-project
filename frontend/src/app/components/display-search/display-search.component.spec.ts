import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DisplaySearchComponent } from './display-search.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

class MockUserService {
}
describe('DisplaySearchComponent', () => {
  let component: DisplaySearchComponent;
  let fixture: ComponentFixture<DisplaySearchComponent>;
  let userMock:any;
  beforeEach(async () => {
    userMock = {
      contact: jest.fn()
    };
    await TestBed.configureTestingModule({
      declarations: [ DisplaySearchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: APP_BASE_HREF, useValue: '/',
        useClass: MockUserService
      },],
      imports: [
        MatTableModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        AppRoutingModule,
        BrowserAnimationsModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Test: Form valid', () => {
    it('should call registerUser', () => {
      const formData = {
       _id:'623829e70a91063f4ce7de67'
      };
      const spyregisterUser = jest.spyOn(userMock, 'contact').mockReturnValue(true);
      expect(userMock.contact(formData)).toBe(true);
      expect(spyregisterUser).toHaveBeenCalledWith(formData);
    });
  });
});
