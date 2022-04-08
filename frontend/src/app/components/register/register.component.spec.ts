import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockUserService {
}
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userMock: any;
  beforeEach(async () => {
    userMock = {
      register: jest.fn()
    };
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [{
        provide: APP_BASE_HREF, useValue: '/',
        useClass: MockUserService
      },],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        AppRoutingModule,
        BrowserAnimationsModule 
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test: Form valid', () => {
    it('should call registerUser', () => {
      const formData = {
        phoneNo:'7418529630',
        email: 'demo12@gmail.com',
        password: 'Pass1234@'
      };
      const spyregisterUser = jest.spyOn(userMock, 'register').mockReturnValue(true);
      expect(userMock.register(formData)).toBe(true);
      expect(spyregisterUser).toHaveBeenCalledWith(formData);
    });
  });
});
