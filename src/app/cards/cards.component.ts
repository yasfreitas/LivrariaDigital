import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivrariaService } from '../model/service/livraria.service';
import { Ilivraria } from '../model/service/ilivraria';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[LivrariaService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private livrariaService:LivrariaService){}
  livraria: Ilivraria[] = [];

  ngOnInit(): void {
    this.livraria = this.livrariaService.getLivraria();
  }

}
