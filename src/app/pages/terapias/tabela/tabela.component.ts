import { Component, Input, OnInit, Output } from '@angular/core'
import { TerapiasComponent } from '../terapias.component'
import { ModalComponent } from '../modal/modal.component'
import { TerapiaService } from 'src/app/shared/services/terapia.service'
import * as moment from 'moment'
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  valorBusca: string = ''
  nomeTerapia: string = ''
  tamanhoDisplay = window.screen.width
  tabelaMobile: boolean = false
  tabelaDesktop: boolean = false
  arrayTerapias: Array<any> = []
  arrayFiltroTerapias: Array<any> = []
  listaNomeTerapia: Array<any> = []
  ordemTerapias: boolean = false

  // Variáveis para Paginação
  paginaAtual: number = 1
  contador: number = 10
  maxSize: number = 5

  constructor(
    private terapiaComponent: TerapiasComponent,
    private terapiaService: TerapiaService,
  ) {}

  ngOnInit() {
    this.terapiaService.getListaTerapias().subscribe((response) => {
      this.arrayTerapias = response.reverse()
      this.arrayFiltroTerapias = response
      response.forEach((x: any) => {
        if (!this.listaNomeTerapia.find((y) => y == x.terapia)) {
          this.listaNomeTerapia.push(x.terapia)
        }
      })
    })

    this.tamanhoDisplay >= 992
      ? (this.tabelaDesktop = true)
      : (this.tabelaMobile = true)
  }

  converterMoeda(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(valor)
  }

  campoBusca(event: any) {
    this.valorBusca = event.target.value
    this.filtroGeral()
  }

  filtroTerapia(event: any) {
    this.nomeTerapia = event.target.value
    this.filtroGeral()
  }

  filtroGeral() {
    this.arrayTerapias = this.arrayFiltroTerapias.filter(
      (filtro) =>
        (filtro.protocolo.includes(this.valorBusca) ||
          filtro.n_reembolso.includes(this.valorBusca)) &&
        this.isNotEmpty(this.nomeTerapia) &&
        this.isNotEmpty(filtro.terapia) &&
        filtro.terapia.toLowerCase().includes(this.nomeTerapia.toLowerCase()),
    )
  }

  isNotEmpty(value: any) {
    return value !== undefined && value !== null
  }

  ordenarTerapia(tipo: string) {
    if (this.ordemTerapias) {
      if (tipo === 'terapia')
        this.arrayTerapias.sort((a, b) => a.terapia.localeCompare(b.terapia))
      if (tipo === 'status')
        this.arrayTerapias.sort((a, b) => a.status.localeCompare(b.status))
    } else {
      if (tipo === 'terapia')
        this.arrayTerapias.sort((a, b) => b.terapia.localeCompare(a.terapia))
      if (tipo === 'status')
        this.arrayTerapias.sort((a, b) => b.status.localeCompare(a.status))
    }
    this.ordemTerapias = !this.ordemTerapias
  }

  lista = [
    {
      data_pagamento: '06/21/2022',
      data_solicitacao: '06/08/2022',
      data_terapia: '05/18/2022',
      n_reembolso: '3891330862',
      protocolo: '32630520220608045720',
      recebido: true,
      recibo_nf: '1',
      status: 'Recebido',
      terapia: 'Fonoaudiologia',
      valor_pago: 130,
      valor_reembolso: 109.62,
    },
    {
      data_pagamento: '09/15/2022',
      data_solicitacao: '06/08/2022',
      data_terapia: '05/18/2022',
      n_reembolso: '3891330862',
      protocolo: '32630520220608045720',
      recebido: true,
      recibo_nf: '1',
      status: 'Recebido',
      terapia: 'Fonoaudiologia',
      valor_pago: 130,
      valor_reembolso: 109.62,
    },
  ]
}
