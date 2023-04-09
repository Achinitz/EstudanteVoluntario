import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vaga-detalhes',
  templateUrl: './vaga-detalhes.component.html',
  styleUrls: ['./vaga-detalhes.component.scss'],
})
export class VagaDetalhesComponent {
  constructor(
    public dialogRef: MatDialogRef<VagaDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fecharModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
  
}
