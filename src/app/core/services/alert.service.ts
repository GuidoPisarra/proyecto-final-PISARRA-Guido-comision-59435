import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private _showTitle$ = new Subject<boolean>();
  showTitle$ = this._showTitle$.asObservable();

  private _alert$ = new Subject<SweetAlertOptions>();
  alert$ = this._alert$.asObservable();

  private swalInstance = Swal.mixin({
    background: '#121212',
    color: '#fff',
    iconColor: '#fff',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  });


  subscribeToAlerts(): void {
    this.alert$.subscribe({
      next: (opts) => {
        Swal.fire(opts);
      },
    });
  }

  showAlert(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.swalInstance.fire(options);
  }
}
