import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { EstudanteService } from 'src/app/services/estudante.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.scss'],
})
export class DetalheVagaComponent implements OnInit {
  id: any;
  vaga: any = {};
  nome: any;
  usuarioLogado: Usuario;

  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private storageService: StorageService,    
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.storageService.getUser();
    this.id = this.route.snapshot.paramMap.get('id');
    this.estudanteService.getDetalheVaga(this.id).subscribe({
      next: (res: any) => {
        this.vaga = res[0];
        this.nome = this.vaga.entidadeId.nome;
      },
    });
  }

  //Realizar inscrição
  realizarInscricao() {
    Swal.fire({
      title: 'Deseja realmente se inscrever nessa vaga?',
      text: 'Ao confirmar, você será inscrito nessa vaga.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const idUsuario = this.usuarioLogado._id;
        this.estudanteService.inscricaoVaga(idUsuario, this.id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          error: (erro: any) => {
            Swal.fire({
              title: erro.error.message,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      }
    });
  }

 

 
}
