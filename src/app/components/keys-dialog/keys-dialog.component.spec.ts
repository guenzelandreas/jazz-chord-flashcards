import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { defaultKeyRatings } from 'src/app/chord-engine';

import { KeysDialogComponent } from './keys-dialog.component';

describe('KeysDialogComponent', () => {
  let component: KeysDialogComponent;
  let fixture: ComponentFixture<KeysDialogComponent>;
  const dialogRef = { close: jasmine.createSpy('close') };

  beforeEach(async () => {
    dialogRef.close.calls.reset();
    await TestBed.configureTestingModule({
      imports: [KeysDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { keysConfiguration: defaultKeyRatings() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KeysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog', () => {
    component.close();
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('should update a key rating', () => {
    component.setKeyRating('C', 4);
    expect(component.data.keysConfiguration.keys.find((k) => k.key === 'C')?.rating).toBe(4);
  });
});
