import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common'

class MockUserService {
}
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let userMock: any;
  beforeEach(async () => {
    userMock = {
      profile: jest.fn()
    };
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Test: Form valid', () => {
    it('should call profileUser', () => {
      const formData = {
        name: 'Manish',
        DOB: '02/04/1995',
        interests: 'cricket',
        location: 'Mumbai'
      };
      const spyprofileUser = jest.spyOn(userMock, 'profile').mockReturnValue(true);
      expect(userMock.profile(formData)).toBe(true);
      expect(spyprofileUser).toHaveBeenCalledWith(formData);
    });
  });
});
