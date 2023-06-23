import { Component, Input, OnInit } from '@angular/core'
import { TerapiasComponent } from '../terapias.component'
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  terapiaModal: any = []
  modalEditar: boolean = false
  modalNovaTerapia: boolean = false
  formNovaTerapia!: FormGroup

  constructor(private terapiaComponent: TerapiasComponent) {}

  ngOnInit() {
    // this.formNovaTerapia  =this.formBuild.group({

    // })
  }

  fecharModal() {
    this.modalEditar = false
    this.modalNovaTerapia = false
  }

  infoModal(tipo: string, terapia?: any) {
    if (tipo == 'novo') {
      this.modalNovaTerapia = true
    } else {
      this.modalEditar = true
      this.terapiaModal = terapia
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

  salvarTerapia() {
    Swal.fire({
      icon: 'question',
      title: '',
      text: 'Deseja salvar essa terapia?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
