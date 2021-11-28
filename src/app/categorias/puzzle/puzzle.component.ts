import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
