import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss'],
})
export class TerapiasComponent implements OnInit {
  pesquisaFeita = '';
  arrayTerapias: Array<any> = [];
  abaTabela: boolean = true;
  abaGrafico: boolean = false;

  constructor() {}

  ngOnInit() {   
    this.arrayTerapias = this.listaTerapias;
  }

  mostrarTabela(){
    this.abaTabela = true;
    this.abaGrafico = false;
  }
  
  mostrarGrafico(){
    this.abaTabela = false;
    this.abaGrafico = true;
  }

  converterMoeda(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

  campoBusca(event: any){
    this.pesquisaFeita = event.target.value;   
    this.filtroGeral();
  }

  filtroGeral() {
    this.listaTerapias = this.arrayTerapias.filter(filtro =>
      (filtro.terapia.toLowerCase().includes(this.pesquisaFeita.toLowerCase()))
      ||
      (filtro.status.toLowerCase().includes(this.pesquisaFeita.toLowerCase()))
    )
  }

  // isNotEmpty(value: any) {
  //   return value !== undefined && value !== null;
  // }

  listaTerapias = [
    {
      terapia: 'Fonoaudiologia',
      data_terapia: '18/05/2022',
      recibo_nf: '0001',
      valor_pago: 130,
      data_solicitacao: '08/06/2022',
      data_pagamento: '21/06/2022',
      valor_reembolso: 109.62,
      protocolo: '32630520220608045720',
      n_reembolso: '3891330862',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Fonoaudiologia',
      data_terapia: '01/06/2022',
      recibo_nf: '0002',
      valor_pago: 130,
      data_solicitacao: '08/06/2022',
      data_pagamento: '21/06/2022',
      valor_reembolso: 109.62,
      protocolo: '32630520220608045720',
      n_reembolso: '3891330863',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Psicopedagogia',
      data_terapia: '25/08/2022',
      recibo_nf: '0001',
      valor_pago: 130,
      data_solicitacao: '25/08/2022',
      data_pagamento: '08/09/2022',
      valor_reembolso: 109.62,
      protocolo: "'32630520220825062718",
      n_reembolso: '3981971327',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Terapia Ocupacional',
      data_terapia: '20/09/2022',
      recibo_nf: '2322',
      valor_pago: 260,
      data_solicitacao: '06/10/2022',
      data_pagamento: '13/10/2022',
      valor_reembolso: 222.44,
      protocolo: '32630520221006100315',
      n_reembolso: '4038049373',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Terapia Ocupacional',
      data_terapia: '22/09/2022',
      recibo_nf: '2322',
      valor_pago: 260,
      data_solicitacao: '06/10/2022',
      data_pagamento: '13/10/2022',
      valor_reembolso: 222.44,
      protocolo: '32630520221006100315',
      n_reembolso: '4038049373',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Terapia Ocupacional',
      data_terapia: '27/09/2022',
      recibo_nf: '2322',
      valor_pago: 260,
      data_solicitacao: '06/10/2022',
      data_pagamento: '13/10/2022',
      valor_reembolso: 222.44,
      protocolo: '32630520221006100315',
      n_reembolso: '4038049373',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Terapia Ocupacional',
      data_terapia: '29/09/2022',
      recibo_nf: '2322',
      valor_pago: 260,
      data_solicitacao: '06/10/2022',
      data_pagamento: '13/10/2022',
      valor_reembolso: 222.44,
      protocolo: '32630520221006100315',
      n_reembolso: '4038049373',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Psicologia',
      data_terapia: '24/10/2022',
      recibo_nf: '0012',
      valor_pago: 130,
      data_solicitacao: '26/10/2022',
      data_pagamento: '07/11/2022',
      valor_reembolso: 122.48,
      protocolo: '32630520221026072915',
      n_reembolso: '4056864852',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Psicopedagogia',
      data_terapia: '29/10/2022',
      recibo_nf: '0005',
      valor_pago: 130,
      data_solicitacao: '01/11/2022',
      data_pagamento: '07/11/2022',
      valor_reembolso: 122.48,
      protocolo: '32630520221101027772',
      n_reembolso: '4063601697',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Fonoaudiologia',
      data_terapia: '31/10/2022',
      recibo_nf: '0004',
      valor_pago: 130,
      data_solicitacao: '01/11/2022',
      data_pagamento: '07/11/2022',
      valor_reembolso: 122.48,
      protocolo: '32630520221101025373',
      n_reembolso: '4063551297',
      status: 'Recebido',
      acertado: 'Sim',
    },
    {
      terapia: 'Nutricionista',
      data_terapia: '28/06/2023',
      recibo_nf: '0002',
      valor_pago: 100,
      data_solicitacao: '30/05/2023',
      data_pagamento: '14/06/2023',
      valor_reembolso: 100,
      protocolo: '32630520230530130641',
      n_reembolso: '4303064901',
      status: 'Liberado',
      acertado: 'Sim',
    },
    {
      terapia: 'Fonoaudiologia',
      data_terapia: '31/05/2023',
      recibo_nf: '0640',
      valor_pago: 130,
      data_solicitacao: '01/06/2023',
      data_pagamento: '16/06/2023',
      valor_reembolso: 122.48,
      protocolo: '32630520230601000267',
      n_reembolso: '4303450909',
      status: 'Pendente',
      acertado: 'Sim',
    },
    {
      terapia: 'Musicoterapia',
      data_terapia: '02/06/2023',
      recibo_nf: '0003',
      valor_pago: 240,
      data_solicitacao: '01/06/2023',
      data_pagamento: '16/06/2023',
      valor_reembolso: 240,
      protocolo: '32630520230601112867',
      n_reembolso: '4309889412',
      status: 'Pendente',
      acertado: 'Não',
    },
  ]
}
