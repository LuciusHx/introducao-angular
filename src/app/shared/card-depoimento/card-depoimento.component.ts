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
