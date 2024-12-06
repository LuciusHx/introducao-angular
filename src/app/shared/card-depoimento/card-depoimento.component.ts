import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  standalone: false,
  
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.css'
})
export class CardDepoimentoComponent {
  cartoes = [
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"A agência é boa de verdade! Eu aconselho pegar na black friday.", 
      autoria:"Fulana de tal"},
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"Cuida rapaziada, é bom! Eu aconselho pegar na black friday.", 
      autoria:"siclano de tal"},
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"Recomendo fortemente a agência de viagens Jornada! Eu aconselho pegar na black friday.", 
      autoria:"Lucius Hebert"},
  ];
//   depoimento: string = `
//   Recomendo fortemente a agência de viagens Jornada.
//   Eles oferecem um serviço personalizado e de alta qualidade
//   que excedeu minhas expectativas em minha última viagem.
// `
  autoria: string = 'Mariana Faustino'

  color: string = '#000000'
  bgColor: string = '#FFFFFF'

  show: boolean = false
  showBG(){
    this.show = !this.show //toggle
    if(this.show){
      this.color = 'red'; 
      this.bgColor = 'white'; 
    }else {
      this.color = 'white'; 
      this.bgColor = 'red'; 
    }
  }


}
