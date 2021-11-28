import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaformer',
  templateUrl: './plaformer.component.html',
  styleUrls: ['./plaformer.component.css']
})
export class PlaformerComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Escale a montanha",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/PSY.jpg",
      Desc : "Platformer inédito",
      Titulo: "Psychonauts"
    }, 
    {
      Imagem : "../assets/HK.jpg",
      Desc : "Escape do Underground",
      Titulo: "Hollow Knight"
    }, 
    {
      Imagem : "../assets/SM.jpg",
      Desc : "Retorno ao classicos",
      Titulo: "Sonic Mania"
    }, 
    {
      Imagem : "../assets/DC.jpg",
      Desc : "Roguelike em um castelo",
      Titulo: "Dead Cells"
    }, 
    {
      Imagem : "../assets/MD.jpg",
      Desc : "Retorno ao classicos",
      Titulo: "Metroid Dread"
    }, 
    {
      Imagem : "../assets/VVVVVV.jpg",
      Desc : "Escape do espaço",
      Titulo: "VVVVVV"
    }, 
    {
      Imagem : "../assets/FP.jpg",
      Desc : "Platformer inspirado em Sonic",
      Titulo: "Freedom Planet"
    }, 
    {
      Imagem : "../assets/K2.jpg",
      Desc : "Recupere suas memórias",
      Titulo: "Klonoa 2"
    }, 
    {
      Imagem : "../assets/IWBTG.jpg",
      Desc : "Platformer casual",
      Titulo: "I wanna be the guy"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
