import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() src: string = 'assets/imagens/banner-homepage.png'
  @Input() alt: string = 'Imagem do Banner'
}
