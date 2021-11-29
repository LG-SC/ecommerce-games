import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-novel',
  templateUrl: './visual-novel.component.html',
  styleUrls: ['./visual-novel.component.css']
})
export class VisualNovelComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/DR1.jpg",
      Desc : "O jogo de matança começa",
      Titulo: "Danganronpa 1"
    }, 
    {
      Imagem : "../assets/DR2.jpg",
      Desc : "Novas vitimas aparecem",
      Titulo: "Danganronpa 2"
    }, 
    {
      Imagem : "../assets/DR3.jpg",
      Desc : "Desencoberte mentiras",
      Titulo: "Danganronpa V3"
    }, 
    {
      Imagem : "../assets/FSN.jpg",
      Desc : "Venca a guerra do graal",
      Titulo: "Fate Stay/Night"
    }, 
    {
      Imagem : "../assets/FHA.jpg",
      Desc : "Escape do loop de 4 dias",
      Titulo: "Fate Hollow/Ataraxia"
    }, 
    {
      Imagem : "../assets/TSU.jpg",
      Desc : "Derrote o vampiro solto",
      Titulo: "Tsukihime"
    }, 
    {
      Imagem : "../assets/TSU2.jpg",
      Desc : "Remake da história original",
      Titulo: "Tsukihime Remake"
    }, 
    {
      Imagem : "../assets/KT.png",
      Desc : "Continuação de Tsukihime",
      Titulo: "Kagetsu Tohya"
    }, 
    {
      Imagem : "../assets/DDLC.jpg",
      Desc : "Viva no clube de literatura",
      Titulo: "DD Literature Club"
    }, 
    {
      Imagem : "../assets/TTO.jpg",
      Desc : "Uma historia de amor escolar",
      Titulo: "Totono"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
