import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aquario } from 'src/app/models/aquario';
import { Peixe } from 'src/app/models/peixe';
import { AquarioService } from 'src/app/services/aquario.service';
import { PeixeService } from 'src/app/services/peixe.service';

@Component({
  selector: 'app-lista-aquario',
  templateUrl: './lista-aquario.component.html',
  styleUrls: ['./lista-aquario.component.css']
})
export class ListaAquarioComponent implements OnInit {

  aquarios: Aquario[];
  editAquario!: Aquario;
  deleteAquario!: Aquario;



  constructor(private aquarioService: AquarioService) {
    this.aquarios = [];

  }

  ngOnInit() {
    this.getAquarios();
  }

  public getAquarios(): void {
    this.aquarioService.getAquarios().subscribe((response: Aquario[]) => {
      this.aquarios = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddAquario(addForm: NgForm): void {
    document.getElementById('add-aquario-form')!.click();
    this.aquarioService.addAquario(addForm.value).subscribe(
      (response: Aquario) => {
        console.log(response);
        this.getAquarios();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAquario(aquario: Aquario): void {
    this.aquarioService.updateAquario(aquario).subscribe(
      (response: Aquario) => {
        console.log(response);
        this.getAquarios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAquario(aquarioId: number): void {
    this.aquarioService.deleteAquario(aquarioId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAquarios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onOpenModal(aquario: Aquario, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAquarioModal');
    } if (mode === 'edit') {
      this.editAquario = aquario;
      button.setAttribute('data-target', '#updateAquarioModal');
    }
    if (mode === 'delete') {
      this.deleteAquario = aquario;
      button.setAttribute('data-target', '#deleteAquarioModal');
    }
    container!.appendChild(button);
    button.click();
  }



}
