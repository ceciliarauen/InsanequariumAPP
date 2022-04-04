import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Peixe } from 'src/app/models/peixe';
import { PeixeService } from 'src/app/services/peixe.service';

@Component({
  selector: 'app-lista-peixe',
  templateUrl: './lista-peixe.component.html',
  styleUrls: ['./lista-peixe.component.css']
})
export class ListaPeixeComponent implements OnInit {

  public peixes: Peixe[];
  public editPeixe!: Peixe;
  public deletePeixe!: Peixe;

  constructor(private peixeService: PeixeService) {
    this.peixes = [];
  }

  ngOnInit() {
    this.getPeixes();
  }

  public getPeixes(): void {
    this.peixeService.getPeixes().subscribe((response: Peixe[]) => {
      this.peixes = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddPeixe(addForm: NgForm): void {
    document.getElementById('add-peixe-form')!.click();
    this.peixeService.addPeixe(addForm.value).subscribe(
      (response: Peixe) => {
        console.log(response);
        this.getPeixes();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePeixe(peixe: Peixe): void {
    this.peixeService.updatePeixe(peixe).subscribe(
      (response: Peixe) => {
        console.log(response);
        this.getPeixes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePeixe(peixeId: number): void {
    this.peixeService.deletePeixe(peixeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPeixes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(peixe: Peixe, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPeixeModal');
    } if (mode === 'edit') {
      this.editPeixe = peixe;
      button.setAttribute('data-target', '#updatePeixeModal');
    }
    if (mode === 'delete') {
      this.deletePeixe = peixe;
      button.setAttribute('data-target', '#deletePeixeModal');
    }
    container!.appendChild(button);
    button.click();
  }



}
