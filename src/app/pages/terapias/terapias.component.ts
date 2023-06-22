import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss'],
})
export class TerapiasComponent implements OnInit {
  valorBusca = '';
  nomeTerapia = '';
  arrayTerapias: Array<any> = [];
  listaNomeTerapia: Array<any> = [];
  abaTabela: boolean = true;
  abaGrafico: boolean = false;
  tamanhoDisplay = window.screen.width;
  tabelaMobile: boolean = false;
  tabelaDesktop: boolean = false;
  ordemTerapias = false;
  // Variáveis para Paginação
  paginaAtual : number = 1 ;
  contador : number = 10;
  maxSize : number = 5;

  constructor() {}

  ngOnInit() {   
    this.tamanhoDisplay >= 992 ? this.tabelaDesktop = true : this.tabelaMobile = true;
    
    this.arrayTerapias = this.listaTerapias;
    this.listaTerapias.forEach((x) => {
      if(!this.listaNomeTerapia.find((y) => y == x.terapia)) {
        this.listaNomeTerapia.push(x.terapia);
      }
    })   
  }

  mostrarTabela(){
    this.abaTabela = true;
    this.abaGrafico = false;
    document.querySelector('.aba-mobile-tabela')?.classList.add('active')
    document.querySelector('.aba-mobile-grafico')?.classList.remove('active')
  }
  
  mostrarGrafico(){
    this.abaTabela = false;
    this.abaGrafico = true;
    document.querySelector('.aba-mobile-tabela')?.classList.remove('active')
    document.querySelector('.aba-mobile-grafico')?.classList.add('active')
  }

  converterMoeda(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

  campoBusca(event: any){
    this.valorBusca = event.target.value;   
    this.filtroGeral();
  }

  filtroTerapia(event: any){
    this.nomeTerapia = event.target.value;      
    this.filtroGeral();
  }

  filtroGeral() {
    this.listaTerapias = this.arrayTerapias.filter(filtro =>
      ((filtro.protocolo.includes(this.valorBusca))
      ||
      (filtro.n_reembolso.includes(this.valorBusca)))
      &&
      this.isNotEmpty(this.nomeTerapia) && this.isNotEmpty(filtro.terapia) &&
      filtro.terapia.toLowerCase().includes(this.nomeTerapia.toLowerCase())
    )
  }

  isNotEmpty(value: any) {
    return value !== undefined && value !== null;
  }

  ordenarTerapia(tipo: string) {
    if (this.ordemTerapias) {
      if(tipo === 'terapia') this.listaTerapias.sort((a, b) => a.terapia.localeCompare(b.terapia));
      if(tipo === 'status') this.listaTerapias.sort((a, b) => a.status.localeCompare(b.status));
    } else {
      if(tipo === 'terapia') this.listaTerapias.sort((a, b) => b.terapia.localeCompare(a.terapia));
      if(tipo === 'status') this.listaTerapias.sort((a, b) => b.status.localeCompare(a.status));
    }
    this.ordemTerapias = !this.ordemTerapias;
  }

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
      status: 'Liberado',
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
      status: 'Pendente',
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
