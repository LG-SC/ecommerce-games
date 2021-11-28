import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FPSComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/PUBG.jpeg",
      Desc : "Battle Royale #1",
      Titulo: "PUBG"
    },
    {
      Imagem : "../assets/TF2.jpg",
      Desc : "Clássico.",
      Titulo: "Team Fortess 2"
    }, 
    {
      Imagem : "../assets/OW.jpg",
      Desc : "Um dos FPS mais jogados",
      Titulo: "Overwatch"
    }, 
    {
      Imagem : "../assets/VAL.jpg",
      Desc : "Novo FPS promissor",
      Titulo: "Valorant"
    }, 
    {
      Imagem : "../assets/BO2.jpg",
      Desc : "Continuação BO1",
      Titulo: "Black Ops 2"
    }, 
    {
      Imagem : "../assets/MW3.jpg",
      Desc : "3° edição de Call of Duty",
      Titulo: "Modern Warfare 3"
    }, 
    {
      Imagem : "../assets/PAL.jpg",
      Desc : "FPS que rivaliza Overwatch",
      Titulo: "Paladins"
    }, 
    {
      Imagem : "../assets/CSGO.jpg",
      Desc : "FPS mais popular da Valve",
      Titulo: "CSGO"
    }, 
    {
      Imagem : "../assets/FTN.jpg",
      Desc : "Battle Royale #2",
      Titulo: "Fortnite"
    }, 
    {
      Imagem : "../assets/BTFD.jpg",
      Desc : "FPS Futuristico",
      Titulo: "Battlefield 2042 "
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
