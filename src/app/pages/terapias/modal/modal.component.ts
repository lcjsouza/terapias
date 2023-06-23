import { Component, Input, OnInit } from '@angular/core'
import { TerapiasComponent } from '../terapias.component'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  terapiaModal: any = []
  modalEditar: boolean = false
  modalNovaTerapia: boolean = false

  constructor(private terapiaComponent: TerapiasComponent) {}

  ngOnInit() {}

  fecharModal() {
    this.modalEditar = false
    this.modalNovaTerapia = false
  }

  infoModal(tipo: string, terapia?: any) {

    if (tipo == 'novo') {
      this.modalNovaTerapia = true;
    }else{;
      this.modalEditar = true;
      this.terapiaModal = terapia;
    }
  }

  converterValores(event: any) {
    return this.terapiaComponent.converterMoeda(event)
  }

  mascaraMoeda(event: any) {
    const onlyDigits = event.target.value
      .split('')
      .filter((s: string) => /\d/.test(s))
      .join('')
      .padStart(3, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    event.target.value = this.terapiaComponent.converterMoeda(digitsFloat)
  }
}
