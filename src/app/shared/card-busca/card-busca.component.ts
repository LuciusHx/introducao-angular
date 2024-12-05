import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  standalone: false,
  
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.css'
})
export class CardBuscaComponent {
  @Input() titulo: string = `teste`;
  desc : string = `descrição teste`;
  nome: string = `Veneza`;
  precos: string[] = ['R$500,00', 'R$1000,00', 'R$2000,00']
  aparecer: boolean = true;

}
