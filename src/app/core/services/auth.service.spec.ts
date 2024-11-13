import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthData } from '../../features/auth/models';
import { MockProvider } from 'ng-mocks';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Student } from '../../features/dashboard/students/models';

const mockStudent: Student = {
  id: 111,
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@mail.com',
  password: '123456',
  createdAt: new Date(),
  token: 'abcdefghiasdasdasdlsadsalasdasfdsfsdf103232',
  role:'admin'
};
const mockAuthData: AuthData = {
  email: 'admin@mail.com',
  password: '123456',
};

describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        MockProvider(Store),
        MockProvider(Router, {
          navigate: (commands: any[], extras?: NavigationExtras) => {
            return new Promise((res) => res(true));
          },
        }),
      ],
    });

    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    localStorage.clear();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('El servicio debe ser definido', () => {
    expect(service).toBeTruthy();
  });

  it('Debe realizarse el login debe establecer el token en localStorage', (done) => {
    service.login(mockAuthData).subscribe({
      next: (student) => {
        expect(student.id).toEqual(mockStudent.id);
        expect(student.firstName).toEqual(mockStudent.firstName);
        expect(student.lastName).toEqual(mockStudent.lastName);
        expect(student.email).toEqual(mockStudent.email);
        expect(student.password).toEqual(mockStudent.password);
        expect(student.token).toEqual(mockStudent.token);
        expect(localStorage.getItem('token')).toEqual(mockStudent.token);
        done();
      },
    });
    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockStudent]);
  });

  it('Debe retornar un error al realizar un login invalido', (done) => {
    service.login(mockAuthData).subscribe({
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err['message']).toBe('Los datos son inválidos');
        done();
      },
    });

    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });

    mockReq.flush([], { status: 401, statusText: 'Unauthorized' });
  });


  it('Logout debe remover el token de localstorage, debe desestablecer el usuario autenticado y debe redirigir a /auth/login', (done) => {
    const spyOnNavigate = spyOn(router, 'navigate');

    service.login(mockAuthData).subscribe();
    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/students?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockStudent]);

    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
    service.authStudent$.subscribe({
      next: (student) => {
        expect(student).toBeNull();
        done();
      },
    });

    expect(spyOnNavigate).toHaveBeenCalledOnceWith(['auth', 'login']);
  });
});
