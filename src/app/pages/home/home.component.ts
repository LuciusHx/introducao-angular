import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //to puxando 
  @Input() compartilhando: string = 'Compartilhando Pai';
  
  cartoes: User[] = [
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"A agência é boa de verdade! Eu aconselho pegar na black friday. CONSEGUI, CONSEGUI, CONSEGUI", 
      autoria:"Fulana de tal"},
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"Cuida rapaziada, é bom! Eu aconselho pegar na black friday. CONSEGUI, CONSEGUI, CONSEGUI", 
      autoria:"Luis Nathan"},
    {
      foto:'assets/imagens/avatar3.png', 
      depoimento:"Recomendo fortemente a agência de viagens Jornada! Eu aconselho pegar na black friday.", 
      autoria:"Lucius Hebert"},
    ];
}
