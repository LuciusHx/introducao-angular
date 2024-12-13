import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  standalone: false,
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.css'
})
export class CardDepoimentoComponent {
  @Input() foto: string = '' 
  @Input() depoimento: string = '' 
  @Input() autoria: string = '' 


  isSelected: boolean = false
  changeButton(){
    this.isSelected = !this.isSelected //toggle
  }
}
