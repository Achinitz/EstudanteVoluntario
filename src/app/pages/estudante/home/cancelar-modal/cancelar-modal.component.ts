import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancelar-modal',
  templateUrl: './cancelar-modal.component.html',
  styleUrls: ['./cancelar-modal.component.scss']
})
export class CancelarModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CancelarModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  fecharModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
