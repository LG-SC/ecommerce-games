import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RPGComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/LS.jpg",
      Desc : "Salve a ultima garota",
      Titulo: "Lisa: The Painful RPG"
    }, 
    {
      Imagem : "../assets/YN.png",
      Desc : "Explore seus sonhos",
      Titulo: "Yume Nikki"
    }, 
    {
      Imagem : "../assets/WD.jpg",
      Desc : "Proteja o Oceano",
      Titulo: "Wadanohara"
    }, 
    {
      Imagem : "../assets/P4.jpg",
      Desc : "Salve sua cidade",
      Titulo: "Persona 4"
    }, 
    {
      Imagem : "../assets/P5.jpg",
      Desc : "Roube o coração de todos",
      Titulo: "Persona 5"
    }, 
    {
      Imagem : "../assets/OM.jpg",
      Desc : "Relembre seu passado",
      Titulo: "OMORI"
    }, 
    {
      Imagem : "../assets/HY.jpg",
      Desc : "RPG surreal",
      Titulo: "Hylics"
    }, 
    {
      Imagem : "../assets/UT.jpg",
      Desc : "Escape do Underground",
      Titulo: "Undertale"
    }, 
    {
      Imagem : "../assets/DRU.png",
      Desc : "Salve ambos mundos",
      Titulo: "Deltarune"
    }, 
    {
      Imagem : "../assets/DD.jpg",
      Desc : "Sobreviva",
      Titulo: "Darkest Dungeon"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
