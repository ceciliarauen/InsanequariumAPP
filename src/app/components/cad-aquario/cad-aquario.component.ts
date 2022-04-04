import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aquario } from 'src/app/models/aquario';
import { Peixe } from 'src/app/models/peixe';
import { AquarioService } from 'src/app/services/aquario.service';
import { PeixeService } from 'src/app/services/peixe.service';
import { PeixeAquarioService } from 'src/app/services/peixe-aquario.service';

@Component({
  selector: 'app-cad-aquario',
  templateUrl: './cad-aquario.component.html',
  styleUrls: ['./cad-aquario.component.css']
})



export class CadAquarioComponent implements OnInit {
 
  


  constructor(){ 
   
  }

  ngOnInit(): void {  
   
     
}


}