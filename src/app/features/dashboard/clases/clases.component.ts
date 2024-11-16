import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { ClasesService } from '../../../core/services/clases.service';
import { Course } from '../courses/models/course';
import { Clase } from './models/clase';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';
import { ClasesDetailsModalComponent } from './clases-details-modal/clases-details-modal.component';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectClases, selectIsLoadingClases, selectLoadClasesError } from './store/clases.selector';
import { ClasesActions } from './store/clases.actions';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent implements OnInit {
  clases$: Observable<Clase[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<Error | null>;

  protected selectedValue: string = '';
  protected listOfCourses: Course[] = [];
  protected listOfClases: Clase[] = [];
  protected isLoading = true;
  protected isAdmin = true;
  protected displayedColumns: string[] = ['title', 'date', 'duration', 'actions'];

  constructor(
    private store: Store,
    private _alertService: AlertService,
    private _authService: AuthService,
    private matDialog: MatDialog
  ) {
    this.clases$ = this.store.select(selectClases);
    this.isLoading$ = this.store.select(selectIsLoadingClases);
    this.error$ = this.store.select(selectLoadClasesError);
  }


  ngOnInit() {

    if (this.selectedValue) {
      this.store.dispatch(ClasesActions.loadClases({ courseId: this.selectedValue }));
    }
  }


  onCourseChange(courseId: any): void {
    this.selectedValue = courseId;
    this.store.dispatch(ClasesActions.loadClases({ courseId }));
  }

  private loadClases(courseId: string): void {
    /*  this.isLoading = true;
     this._clasesService.getClases(courseId).subscribe({
       next: (filteredClases: Clase[]) => {
         this.listOfClases = filteredClases;
       },
       error: (err: any) => {
         console.error('Error al obtener clases:', err);
         this.isLoading = false;
       },
       complete: () => {
         this.isLoading = false;
       }
     }); */
  }


  onDelete(clase: Clase) {
    /*  this._alertService.showAlert({
       title: '¡Advertencia!',
       text: '¿Estás seguro de eliminar esta clase?',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Sí, eliminar',
       cancelButtonText: 'Cancelar',
       customClass: {
         confirmButton: 'swal2-confirm-btn',
         cancelButton: 'swal2-cancel-btn',
       }
     }).then((result) => {
       if (result.isConfirmed) {
         this.isLoading = true;
         this._clasesService.deleteClassById(clase.id, clase.courseId).subscribe({
           next: (clases: Clase[]) => {
             this.listOfClases = clases;
           },
           error: (err: any) => {
             console.error('Error al eliminar la clase:', err);
             this.isLoading = false;
           },
           complete: () => {
             this.isLoading = false;
           }
         });
       }
     }); */
  }

  protected openModal(editingClase?: Clase): void {
    const dialogRef = this.matDialog.open(ClaseDialogComponent, {
      data: { editingClase },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (editingClase) {
          this.store.dispatch(ClasesActions.updateClases({ courseId: editingClase.courseId, clase: result }));
        } else {
          this.store.dispatch(ClasesActions.createClases({ courseId: this.selectedValue }));
        }
      }
    });
  }

  private addClass(newClase: Clase): void {
    /*  this.isLoading = true;
     newClase.courseId = this.selectedValue;
     this._clasesService.addClass(newClase).subscribe({
       next: (addedClase: Clase) => {
         this.listOfClases = [...this.listOfClases, addedClase];
       },
       error: (err) => {
         console.error('Error al agregar la clase:', err);
         this.isLoading = false;
       },
       complete: () => {
         this.isLoading = false;
       }
     }); */
  }

  protected handleUpdate(id: string, update: Clase): void {
    /*  this.isLoading = true;
     this._clasesService.updateClassById(id, update).subscribe({
       next: (updatedClases: Clase[]) => {
         this.listOfClases = updatedClases;
       },
       error: (err: any) => {
         console.error('Error al actualizar la clase:', err);
         this.isLoading = false;
       },
       complete: () => {
         this.isLoading = false;
       }
     }); */
  }

  protected viewDetails(clase: Clase): void {
    const dialogRef = this.matDialog.open(ClasesDetailsModalComponent, {
      width: '500px',
      data: clase
    });
  }
}
