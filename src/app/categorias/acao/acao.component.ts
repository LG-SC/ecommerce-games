import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/K0.jpg",
      Desc : "Veterano descobre passado",
      Titulo: "Katana Zero"
    },
    {
      Imagem : "../assets/HM.webp",
      Desc : "Topdown beat'em up",
      Titulo: "Hotline Miami"
    },
    {
      Imagem : "../assets/HM2.jpg",
      Desc : "Continuação de HM1",
      Titulo: "Hotline Miami 2"
    }, 
    {
      Imagem : "../assets/NL2.png",
      Desc : "Beat'em up frenético",
      Titulo: "Noitu Love 2"
    }, 
    {
      Imagem : "../assets/PRIWH.png",
      Desc : "Action shooter 8-bits",
      Titulo: "Princess Remedy"
    }, 
    {
      Imagem : "../assets/CRL.jpg",
      Desc : "Dungeon crawler",
      Titulo: "Crawl"
    }, 
    {
      Imagem : "../assets/DST.jpg",
      Desc : "Sandbox survival em equipe",
      Titulo: "Don't Starve Together"
    }, 
    {
      Imagem : "../assets/SAR.png",
      Desc : "Battle Royale com animais",
      Titulo: "Super Animal Royale"
    }, 
    {
      Imagem : "../assets/CC.jpg",
      Desc : "Beat'em up de 4 players",
      Titulo: "Castle Crashers"
    }, 
    {
      Imagem : "../assets/BT.jpg",
      Desc : "Remake do classico de NES",
      Titulo: "Battletoads"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
