import { Component, OnInit } from '@angular/core';
import { TerapiasComponent } from '../terapias.component';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  constructor(private terapiaComponent: TerapiasComponent) { }

  ngOnInit() {
  }

  btnTabela(){
    this.terapiaComponent.mostrarTabela();
  }

  btnGrafico(){
    this.terapiaComponent.mostrarGrafico();
  }

}
