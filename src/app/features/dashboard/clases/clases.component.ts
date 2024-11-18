import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/models/course';
import { Clase } from './models/clase';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';
import { ClasesDetailsModalComponent } from './clases-details-modal/clases-details-modal.component';
import { AlertService } from '../../../core/services/alert.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectClasesOptions, selectIsLoadingClases, selectLoadClasesError } from './store/clases.selector';
import { ClasesActions } from './store/clases.actions';
import { CoursesActions } from '../courses/store/courses.actions';
import { selectCourses } from '../courses/store/courses.selector';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent implements OnInit {
  courses$: Observable<Course[]>;
  clases$: Observable<Clase[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<Error | null>;

  protected selectedValue: string = '';
  protected isAdmin = true;
  protected displayedColumns: string[] = ['title', 'date', 'duration', 'actions'];

  constructor(
    private store: Store,
    private _alertService: AlertService,
    private matDialog: MatDialog
  ) {
    this.courses$ = this.store.select(selectCourses);
    this.clases$ = this.store.select(selectClasesOptions);
    this.isLoading$ = this.store.select(selectIsLoadingClases);
    this.error$ = this.store.select(selectLoadClasesError);
  }

  ngOnInit() {
    this.store.dispatch(CoursesActions.loadCourses());
  }

  onCourseChange(courseId: string): void {
    this.selectedValue = courseId;
    this.store.dispatch(ClasesActions.loadClases({ courseId }));
  }


  onDelete(clase: Clase) {
    this._alertService
      .showAlert({
        title: '¡Advertencia!',
        text: '¿Estás seguro de eliminar esta clase?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          confirmButton: 'swal2-confirm-btn',
          cancelButton: 'swal2-cancel-btn',
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.store.dispatch(ClasesActions.deleteClases({ courseId: this.selectedValue, clase: clase }));
        }
      });
  }

  openModal(editingClass?: Clase): void {
    this.matDialog
      .open(ClaseDialogComponent, { data: { editingClase: editingClass } })
      .afterClosed()
      .subscribe((result) => {
        if (!!result) {
          if (editingClass) {
            this.handleUpdate(editingClass.courseId, result);
          } else {
            this.store.dispatch(ClasesActions.createClases({ courseId: this.selectedValue, clase: result }))
          }
        }
      });
  }


  private handleUpdate(courseId: string, update: Clase): void {
    this.store.dispatch(ClasesActions.updateClases({ courseId: courseId, clase: { ...update } }));
  }


  protected viewDetails(clase: Clase): void {
    const dialogRef = this.matDialog.open(ClasesDetailsModalComponent, {
      width: '500px',
      data: clase
    });
  }
}
