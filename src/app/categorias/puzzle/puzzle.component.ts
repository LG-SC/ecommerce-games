import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/WWH.jpg",
      Desc : "Escape em conjunto",
      Titulo: "We were here"
    }, 
    {
      Imagem : "../assets/LV.png",
      Desc : "Escape da masmorra",
      Titulo: "Lavender"
    }, 
    {
      Imagem : "../assets/IB.jpeg",
      Desc : "Escape da galeria de arte",
      Titulo: "IB"
    }, 
    {
      Imagem : "../assets/TET.jpg",
      Desc : "Classico remasterizado",
      Titulo: "Tetris Effect"
    }, 
    {
      Imagem : "../assets/TWI.jpg",
      Desc : "Descubra o misterio da ilha",
      Titulo: "The Witness"
    }, 
    {
      Imagem : "../assets/COS.jpg",
      Desc : "Mergulhe nessa aventura surreal",
      Titulo: "Call of the Sea"
    }, 
    {
      Imagem : "../assets/LAY.jpeg",
      Desc : "Descubra o misterio da cidade",
      Titulo: "Professor Layton"
    }, 
    {
      Imagem : "../assets/GHO.jpg",
      Desc : "Descubra como você morreu",
      Titulo: "Ghost Trick"
    }, 
    {
      Imagem : "../assets/POR.jpg",
      Desc : "Escape do laboratorio",
      Titulo: "Portal"
    }, 
    {
      Imagem : "../assets/SCR.jpg",
      Desc : "Desenhe suas soluções",
      Titulo: "Scribblenauts"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
