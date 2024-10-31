import { Injectable } from '@angular/core';
import { Ilivraria } from './ilivraria';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  
  private livraria: Ilivraria[] = [
    {id: 1, nome: 'Frankenstein', autor: 'Mary Shelly', preco: 38.94, image:'../livro1.png'},
    {id: 2, nome: 'Canção dos Ossos', autor: 'Giu Domingues', preco: 51.90, image:'../livro2.png'},
    {id: 3, nome: 'It: A coisa', autor: 'Stephen King', preco: 78.99, image:'../livro3.png'},
    {id: 4, nome: 'O Iluminado', autor: 'Stephen King', preco: 60.30, image:'../livro4.png'},
    {id: 5, nome: 'O exorcista', autor: 'William Peter Blatty', preco: 41.93, image:'../livro5.png'},
    {id: 6, nome: 'O Bebê de Rosemary', autor: 'Ira Levin', preco: 50.85, image:'../livro6.png'},
    {id: 7, nome: 'Como Matei Minha..', autor: 'Bella Mackie', preco: 60.25, image:'../livro7.png'},
    {id: 8, nome: 'Anatomia de Uma..', autor: 'Danya Kukafka', preco: 52.42, image:'../livro8.png'},
    {id: 9, nome: 'Uma Família Feliz', autor: 'Raphael Montes', preco: 41.93, image:'../livro9.png'},
    {id: 10, nome: 'Saboroso Cadáver', autor: 'Agustina Bazterrica', preco: 44.61, image:'../livro10.png'},
    
  ];
  getLivraria(): Ilivraria[] {
   return this.livraria;
  }
}
