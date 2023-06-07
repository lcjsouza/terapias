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

  ModalEditar(terapia?: any){  
    const modal: any = document.getElementById('modal');
    this.terapiaModal = terapia;

    if (modal.style.display === 'block'){
      modal.style.display = 'none';
    }else {
      modal.style.display = 'block';
    }
    this.modalEditar = !this.modalEditar
  }

  ModalNova(){  
    const modal: any = document.getElementById('modal');
   
    if (modal.style.display === 'block'){
      modal.style.display = 'none';
    }else {
      modal.style.display = 'block';
    }
    this.modalNovaTerapia = !this.modalNovaTerapia
  }

  converterValores(event: any){
    return this.terapiaComponent.converterMoeda(event)
  }

  mascaraMoeda(event: any) {
    const onlyDigits = event.target.value
      .split("")
      .filter((s: string) => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    event.target.value = this.terapiaComponent.converterMoeda(digitsFloat)
  }
  


}
