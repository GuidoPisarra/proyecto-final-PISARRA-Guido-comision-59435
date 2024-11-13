import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesDetailsModalComponent } from './clases-details-modal.component';

describe('ClasesDetailsModalComponent', () => {
  let component: ClasesDetailsModalComponent;
  let fixture: ComponentFixture<ClasesDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasesDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasesDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
