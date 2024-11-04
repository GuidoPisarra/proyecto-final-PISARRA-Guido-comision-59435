import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthData } from '../../features/auth/models';
import { User } from '../../features/dashboard/users/models';
import { MockProvider } from 'ng-mocks';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';

const mockUser: User = {
  id: 111,
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@mail.com',
  password: '123456',
  createdAt: new Date(),
  token: 'abcdefghiasdasdasdlsadsalasdasfdsfsdf103232',
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
      next: (user) => {
        expect(user.id).toEqual(mockUser.id);
        expect(user.firstName).toEqual(mockUser.firstName);
        expect(user.lastName).toEqual(mockUser.lastName);
        expect(user.email).toEqual(mockUser.email);
        expect(user.password).toEqual(mockUser.password);
        expect(user.token).toEqual(mockUser.token);
        expect(localStorage.getItem('token')).toEqual(mockUser.token);
        done();
      },
    });
    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockUser]);
  });

  it('Debe retornar un error al realizar un login invalido', (done) => {
    service.login(mockAuthData).subscribe({
      error: (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err['message']).toBe('Los datos son invalidos');
        done();
      },
    });

    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });

    mockReq.flush([], { status: 401, statusText: 'Unauthorized' });
  });

  it('Logout debe remover el token de localstorage, debe desestablecer el usuario autenticado y debe redirigir a /auth/login', (done) => {
    const spyOnNavigate = spyOn(router, 'navigate');

    service.login(mockAuthData).subscribe();
    const mockReq = httpController.expectOne({
      url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      method: 'GET',
    });
    mockReq.flush([mockUser]);

    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
    service.authUser$.subscribe({
      next: (user) => {
        expect(user).toBeNull();
        done();
      },
    });

    expect(spyOnNavigate).toHaveBeenCalledOnceWith(['auth', 'login']);
  });
});
