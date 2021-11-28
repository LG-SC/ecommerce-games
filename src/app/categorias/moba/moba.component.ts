import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.component.html',
  styleUrls: ['./moba.component.css']
})
export class MOBAComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/LOL.jpg",
      Desc : "Rival à Dota2",
      Titulo: "League of Legends"
    }, 
    {
      Imagem : "../assets/DOTA2.jpg",
      Desc : "Rival à LOL",
      Titulo: "Dota 2"
    }, 
    {
      Imagem : "../assets/HOS.jpg",
      Desc : "",
      Titulo: "Heroes of the Storm"
    }, 
    {
      Imagem : "../assets/SMI.jpg",
      Desc : "MOBA com seres mitologicos",
      Titulo: "SMITE"
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
