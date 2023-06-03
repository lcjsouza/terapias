import { Component, OnInit } from '@angular/core';
import { TerapiasComponent } from '../terapias/terapias.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  terapiaModal: any = [];
  modalEditar: boolean = false;
  modalNovaTerapia: boolean = false;

  constructor(private terapiaComponent: TerapiasComponent) { }

  ngOnInit() {
  }

  abrirModalEditar(terapia?: any){  
    const modal: any = document.getElementById('modal');
    this.terapiaModal = terapia;
     
    if (modal.style.display === 'block'){
      modal.style.display = 'none';
    }else {
      modal.style.display = 'block';
    }
    this.modalEditar = !this.modalEditar
  }

  abrirModalNova(){  
    const modal: any = document.getElementById('modal');
    console.log('teste');
    
    if (modal.style.display === 'block'){
      modal.style.display = 'none';
    }else {
      modal.style.display = 'block';
    }
    this.modalNovaTerapia = !this.modalNovaTerapia
  }

  converterMoeda(valor: any){
    return this.terapiaComponent.converterMoeda(valor);
  }

}
