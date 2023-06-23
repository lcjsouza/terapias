import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss'],
})
export class TerapiasComponent implements OnInit {
  abaTabela: boolean = true
  abaGrafico: boolean = false

  constructor() {}

  ngOnInit() {}

  mostrarTabela() {
    this.abaTabela = true
    this.abaGrafico = false
    document.querySelector('.aba-mobile-tabela')?.classList.add('active')
    document.querySelector('.aba-mobile-grafico')?.classList.remove('active')
  }

  mostrarGrafico() {
    this.abaTabela = false
    this.abaGrafico = true
    document.querySelector('.aba-mobile-tabela')?.classList.remove('active')
    document.querySelector('.aba-mobile-grafico')?.classList.add('active')
  }

  converterMoeda(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(valor)
  }
}
